import {Flex} from '../base';
import {ArticleComponent} from './components';

const content = {
    title: "About the Artificial Intelligence",
    description: "",
    date: "2022.03.17",
    authorname: "Jonathan Choi",
}

export const Article = ({}) => {
    return (
        <Flex padding="padding: 8% 25%" width="100%">
            <ArticleComponent content={content} />
        </Flex>
    )
};

export default Article;