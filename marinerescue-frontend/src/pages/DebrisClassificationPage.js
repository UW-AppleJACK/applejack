import React from 'react';
import ClassificationView from '../components/ClassificationView';

class DebrisClassificationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            targetsCompleted: 0,
            targetUrls: [...Array(100).keys()].map(i => `https://picsum.photos/seed/${i + 1}/400`), // 100 random images. will eventually get from server
            options: [
                {
                    id: 'loopy',
                    label: 'Loopy',
                    helpTextTitle: 'What is "Loopy"?',
                    helpTextPrimary: 'Loopy things have circle shapes in them, like a rollercoaster!',
                    helpTextSecondary: 'Loopy things are dangerous to marine animals because they can get stuck in the loops. Getting stuck can make it hard to move and hard to breath.',
                    helpImageUrl: '/images/loopy-help-image.png',
                    helpImageAlt: 'Comic of Strawberry saying "you can\'t grab that rope! It might get caught on your neck and hurt you.'
                },
                {
                    id: 'crumbly',
                    label: 'Crumbly',
                    helpTextTitle: 'What is "Crumbly"?',
                    helpTextPrimary: '...'
                },
                {
                    id: 'sharp',
                    label: 'Sharp',
                    helpTextTitle: 'What is "Sharp"?',
                    helpTextPrimary: '...'
                },
                {
                    id: 'shiny',
                    label: 'Shiny',
                    helpTextTitle: 'What is "Shiny"?',
                    helpTextPrimary: '...'
                },
            ],
            facts: [
                {
                    title: 'A fact about plastic...',
                    textPrimary: 'Did you know that about 10% of all plastic ends up in the oceans?',
                    textSecondary: 'That means that 26 million tons of plastc goes to the ocean every year! Plastic is poisonous to marine life.'
                },
                {
                    title: 'A fact about ropes...',
                    textPrimary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    textSecondary: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                },
                {
                    title: 'A fact about whales...',
                    textPrimary: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
                    textSecondary: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
                },
            ]
        };
    }

    getCurrentTargetUrl() {
        return this.state.targetUrls[this.state.targetsCompleted];
    }

    onClassify(targetUrl, classificationId) {
        console.log(`Classified ${targetUrl} as ${classificationId}`);
        console.log(this)
        this.setState({
            targetsCompleted: this.state.targetsCompleted + 1
        });
    }

    render() {
        return (
            <div className="debris-classification-page">
                <ClassificationView
                    options={this.state.options}
                    targetUrl={this.getCurrentTargetUrl()}
                    onClassify={this.onClassify.bind(this)}
                    facts={this.state.facts}
                    factsProportion={0.25}
                />
            </div>
        );
    }
}

export default DebrisClassificationPage;