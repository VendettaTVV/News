import CardGroup from 'react-bootstrap/CardGroup';
import NewsCardComponent from './NewsCard';

function NewsGrourComponent() {
    return (
        <CardGroup>
            <NewsCardComponent/>
            <NewsCardComponent/>
            <NewsCardComponent/>
        </CardGroup>
    );
}

export default NewsGrourComponent;