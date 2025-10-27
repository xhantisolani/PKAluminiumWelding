import { Helmet } from 'react-helmet-async'; 

const DEFAULT_URL = 'https://www.pkaluminiumweldingsolutions.co.za/';
const DEFAULT_OG_IMAGE = `${DEFAULT_URL}logo.jpg`;

export default function SeoHead({ 
    title, 
    description, 
    path = '', 
    ogImage = DEFAULT_OG_IMAGE 
}) {
    const canonicalUrl = `${DEFAULT_URL}${path}`;

    // Schema Markup for Local Business 
    const localBusinessSchema = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "PK Aluminium Welding Solutions",
        "image": DEFAULT_OG_IMAGE,
        "url": DEFAULT_URL,
        "telephone": "+27-67-782-2389", 
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Maitland Area",
            "addressLocality": "Cape Town",
            "addressRegion": "Western Cape",
            "addressCountry": "ZA"
        },
        "servesArea": {
            "@type": "State",
            "name": "Western Cape"
        },
        "priceRange": "$$", 
        "description": description,
        "knowsAbout": ["TIG Welding", "Aluminium Fabrication", "Architectural Balustrades"]
    });

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />
            <meta name="robots" content="index, follow" />
            
            {/* Open Graph / Social Sharing */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content="PK Aluminium Welding Solutions" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            
            {/* Local Business Schema Markup (JSON-LD) */}
            {path === '' && (
                <script type="application/ld+json">{localBusinessSchema}</script>
            )}
        </Helmet>
    );
}