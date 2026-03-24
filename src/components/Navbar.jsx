import '../css/Navbar.css'

export function Navbar() {
    const NAV_SECTIONS = [
        {
            id: 1,
            title: 'Inicio',
            url: '#presentation'
        },
        {
            id: 2,
            title: 'Estudios',
            url: '#studies'
        },
        {
            id: 3,
            title: 'Experiencia',
            url: '#experience'
        },
        {
            id: 5,
            title: 'Proyectos',
            url: '#projects'
        },
        {
            id: 6,
            title: 'Contacto',
            url: '#contact'
        }
    ]

    const scrollToSection = (e, url) => {
        e.preventDefault();
        const element = document.querySelector(url);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <nav className='navbar'>
            <ul className='navbar_sections'>
                {
                    NAV_SECTIONS.map((section) => (
                        <li key={section.id}>
                            <a 
                                href={section.url}
                                onClick={(e) => scrollToSection(e, section.url)}
                            >
                                {section.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
