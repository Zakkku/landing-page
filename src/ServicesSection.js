import ServiceBlock from "./ServiceBlock";

const SERVICE_BLOCK_DATA = [
    {
        imgURL: 'https://assets.codepen.io/6060109/agency-service-1.png',
        text: 'web development',
        alt: 'service 1'
    },
    {
        imgURL: 'https://assets.codepen.io/6060109/agency-service-2.png',
        text: 'cloud computing',
        alt: 'service 2'
    },
    {
        imgURL: 'https://assets.codepen.io/6060109/agency-service-3.png',
        text: 'smart contracts',
        alt: 'service 3'
    }
]

export default function ServiceSection() {
    return (
        <div className="services-section">
            <h2>
                Our Services
            </h2>
            <div className="services-outer-container">
            <div className="services-container">
               {
                SERVICE_BLOCK_DATA.map(item => (
                    <ServiceBlock block={item} />
                )
                    
                    )
            }                            
            </div>
            </div>
        </div>
    );
};