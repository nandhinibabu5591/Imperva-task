import React, { Suspense, lazy } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const CustomerDetails = lazy(() => import('./customerdetails/customerdetails'));
const OrderDetails = lazy(() => import('./orders/order'));
const PaymentInfo = lazy(() => import('./payments/payment'));

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        color: '#006161',
        fontWeight: theme.typography.fontWeightBold,
    },
}));

const Loading = () => <div>Loading...</div>;

export default function DetailsPage() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Accordion defaultExpanded={true}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} id="customerdetails">
                    <Typography className={classes.heading}>Customer Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Suspense fallback={Loading}>
                        <CustomerDetails />
                    </Suspense>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded={true}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} id="orderdetails">
                    <Typography className={classes.heading}>Order Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Suspense fallback={Loading}>
                        <OrderDetails />
                    </Suspense>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded={true}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} id="paymentdetails">
                    <Typography className={classes.heading}>Payment Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <PaymentInfo />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
