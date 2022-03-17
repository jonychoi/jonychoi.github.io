import {Flex} from '../base';
import {ArticleComponent} from './components';

export const Article = ({content}) => {
    console.log(content);
    return (
        <Flex padding="padding: 8% 25%" width="100%">
            <ArticleComponent content={content} />
        </Flex>
    )
};

export default Article;