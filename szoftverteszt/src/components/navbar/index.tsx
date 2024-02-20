import './index.scss';

export function NavBar() {
    return <div id='container'>
        <div className='navigation-bar'>
            <nav>
                <ul>
                    <li id='kezdolap'>Kezdőlap</li>
                    <li id='bongeszes'>Böngészés</li>
                    <li id='uzenetek'>Üzenetek</li>
                    <li id='profil'>Profil</li>
                </ul>
            </nav>
        </div>
    </div>
}