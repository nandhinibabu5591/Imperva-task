import React, { useContext } from 'react';
import CustomerContext from '../../../lib/context';
import 'primeflex/primeflex.css';

export default function CustomerDetails() {
    const { state } = useContext(CustomerContext);
    console.log(state)
    return (
        <div className="p-grid">
            {state.customer && Object.keys(state.customer).map((attr, index) => {
                return (
                    <div className="p-col-12 p-md-6 p-lg-3">
                        <div class="attribute-name-class">{attr}</div>
                        <div class="attribute-name-value">{state.customer[attr]}</div>
                    </div>
                )
            })
            }
        </div>
    )
}