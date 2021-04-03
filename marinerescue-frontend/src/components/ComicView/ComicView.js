import React from 'react';
import './ComicView.scss';

const ELEMENT_TYPE_SPRITE = 'sprite';

class ComicView extends React.Component {
    // Given a classObj that maps classes to booleans and optional default classes, returns className
    toClassName(classObj, classes) {
        let className = classes || '';
        const keys = Object.keys(classObj);
        for (let i = 0; i < keys.length; i++) {
            const attr = keys[i];
            if (classObj[attr]) {
                className += ` ${attr}`;
            }
        }
        return className;
    }

    // Get parsed elements in current frae
    getElements() {
        return this.props.frame.map(element => ({
            ...element,
            x: `${element.x}%`,
            y: `${element.y}%`,
        }));
    }

    // Render an element as a sprite
    renderSprite(element, idx) {
        const classes = {
            'flip-x': !!element.flipX,
        };
        const id = !!element.id ? `assigned-${this.props.sceneName}-${element.id}` : null;
        return (
            <img
                className={this.toClassName(classes, 'comic-view-sprite')}
                id={id}
                style={{
                    left: element.x,
                    top: element.y,
                    width: `${element.size}%`,
                }}
                alt=""
                src={`/sprites/sprite-${element.image}.png`}
                key={id || idx}
            />
        )
    }

    // Render an element
    renderElement(element, idx) {
        if (element.type === ELEMENT_TYPE_SPRITE) {
            return this.renderSprite(element, idx);
        }
        return (<div></div>);
    }

    render() {
        return (
            <div className="comic-view" style={{
                backgroundImage: `url("/sprites/bg-${this.props.background}.png")`
            }}>
                {this.getElements().map((element, idx) => this.renderElement(element, idx))}
            </div>
        );
    }
}

export default ComicView;