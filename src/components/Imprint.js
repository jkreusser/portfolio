import React from 'react';

const Imprint = () => {
    return (
        <div className="max-w-3xl mx-auto p-4 min-h-screen flex items-center justify-center text-left">
            <section className="mb-8">
                <a className="text-base flex gap-2 z-auto" href='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-left">
                        <path d="M6 8L2 12L6 16" />
                        <path d="M2 12H22" />
                    </svg>
                    <span>Back</span>
                </a>
                <h2 className="text-2xl font-semibold mt-8 mb-4">Imprint</h2>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Information according to § 5 TMG:</h3>
                    <p>Joschka Kreusser<br />Falkenstr. 11F<br />81541 Munich</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Contact:</h3>
                    <p>Email: hello[at]joschka-kreusser[dot]de</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">VAT ID:</h3>
                    <p>VAT identification number according to § 27 a of the Value Added Tax Act: DE344955287</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">EU Dispute Resolution:</h3>
                    <p>The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr/">https://ec.europa.eu/consumers/odr/</a>. You can find our email address above in the imprint.</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Consumer Dispute Resolution/Universal Arbitration Board:</h3>
                    <p>We participate in dispute resolution proceedings before a consumer arbitration board. The competent authority is the Universal Arbitration Board of the Center for Arbitration e.V., Straßburger Straße 8, 77694 Kehl am Rhein (<a href="https://www.verbraucher-schlichter.de">https://www.verbraucher-schlichter.de</a>).</p>
                </div>
            </section>
        </div>
    );
}

export default Imprint;
