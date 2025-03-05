import { Link } from 'react-router-dom';

export default function NoPage() {
    
    return(
        <div>
            <h1>Error 404: Sorry, Page Not Found</h1>
            <Link to='/home'>Go Back</Link>
        </div>
    )
}