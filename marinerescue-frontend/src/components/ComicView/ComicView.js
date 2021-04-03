import React from 'react';
import './ComicView.scss';

const ELEMENT_TYPE_SPRITE = 'sprite';

class ComicView extends React.Component {
    getElements() {
        return this.props.elements.map(element => ({
            ...element,
            x: `${element.x}%`,
            y: `${element.y}%`,
        }));
    }

    renderSprite(element, idx) {
        return (
            <img
                className="comic-view-sprite"
                style={{
                    left: element.x,
                    top: element.y,
                    width: `${element.size}%`,
                }}
                alt=""
                src={`/sprites/${element.image}.png`}
                key={idx}
            />
        )
    }

    renderElement(element, idx) {
        if (element.type === ELEMENT_TYPE_SPRITE) {
            return this.renderSprite(element, idx);
        }
        return (<div></div>);
    }

    render() {
        return (
            <div className="comic-view">
                {this.getElements().map((element, idx) => this.renderElement(element, idx))}
            </div>
        );
    }
}

export default ComicView;