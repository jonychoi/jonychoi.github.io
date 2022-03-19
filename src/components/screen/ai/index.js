import { AtomIcon } from '../../icons/main';
import paperReview from './computer-vision/papers-reviews';

export const cvReviewStructure = {
        title: "Vision Papers Reviews",
        contents: paperReview,
}

export const structure = {
    title: "Artificial Intelligence",
    icon : <AtomIcon width={24} height={24} stroke="#00dcff" />,
    contents: [
        {
            title: "Intro to Artificial Intelligence",
            type: "readme",
            src: "https://github.com/jonychoi/Artificial-Intelligence/main/README.md",
            subcontents: [
                {
                    title: "What is A.I?",
                },
                {
                    title: "Applications of A.I"
                },
                {
                    title: "The State of the Arts"
                },
                {
                    title: "The future of the A.I"
                }
            ]
        },
        {
            title: "Conventional A.I",
            subcontents: [
                {
                    title: "Intro to A.I, and Rational Agents"
                },
                {
                    title: "State Spaces & Search",
                    subcontents: [
                        {
                            title: "State Spaces and Uniformed Search"
                        },
                        {
                            title: "Informed Search: A* and Heuristics"
                        },
                        {
                            title: "Local Search"
                        },
                    ],
                },
                {
                    title: "Constraint Satisfaction Problems"
                },
                {
                    title: "Games",
                    subcontents: [
                        {
                            title: "Trees, MiniMax Pruning"
                        },
                        {
                            title: "Expectimax, Monte Carlo Tree Search"
                        },
                    ]
                },
                {
                    title: "Markov Decision Processes"
                },
                {
                    title: "Probability",
                    subcontents: [
                        {
                            title: "Bayes Nets",
                        },
                        {
                            title: "BNs: Represenation"
                        },
                        {
                            title: "BNs: Independence"
                        },
                        {
                            title: "BNs: Inference"
                        },
                        {
                            title: "BNs: Sampling"
                        }
                    ]
                },
                {
                    title: "Decision Networks"
                },
                {
                    title: "Hidden Markov Models"
                },
            ]
        },
        {
            title: "Machine Learning",
            subcontents: [
                {
                    title: 'Machine Learning Basic',
                    subcontents: [
                        {
                            title: "Gradient Descent",
                        }
                    ]
                }, 
                {
                    title: 'Machine Learning Advanced'
                },
            ]
        },
        {
            title: "Deep Learning",
            subcontents: [
                {
                    title: "Deep Learning Basic",
                },
                {
                    title: "Deep Learning Advanced"
                },
            ]
        },
        {
            title: "Computer Vision",
            subcontents: [
                {
                    title: "Conventional Computer Vision",
                },
                {
                    title: "Computer Vision Paper Reviews",
                    type: "readme",
                    src: "https://github.com/jonychoi/Computer-Vision-Paper-Reviews/blob/main/README.md",
                }
            ]
        },
        {
            title: "Natural Language Processing"
        },
        {
            title: "Brain and Cognitive"
        }
    ]
}

export default structure;