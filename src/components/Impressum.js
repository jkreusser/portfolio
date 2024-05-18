import React from 'react';

const Impressum = () => {
    return (
        <div className="max-w-3xl mx-auto p-4 h-screen flex items-center justify-center text-left">
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Impressum</h2>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Angaben gemäß § 5 TMG:</h3>
                    <p>Joschka Kreusser<br />Falkenstr. 11F<br />81541 München</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Kontakt:</h3>
                    <p>E-Mail: hello[at]joschka-kreusser[punkt]de</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Umsatzsteuer-ID:</h3>
                    <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE344955287</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">EU-Streitschlichtung:</h3>
                    <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/">https://ec.europa.eu/consumers/odr/</a>. Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Verbraucherstreitbeilegung/Universalschlichtungsstelle:</h3>
                    <p>Wir nehmen an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil. Zuständig ist die Universalschlichtungsstelle des Zentrums für Schlichtung e.V., Straßburger Straße 8, 77694 Kehl am Rhein (<a href="https://www.verbraucher-schlichter.de">https://www.verbraucher-schlichter.de</a>).</p>
                </div>
            </section>
        </div>
    );
}

export default Impressum;
