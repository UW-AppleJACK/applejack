import React from 'react';
import './Journal.scss';

const JOURNAL_TOC_VIEW = 'JOURNAL_TOC_VIEW'; // highest-level table of contents
const JOURNAL_CATEGORY_VIEW = 'JOURNAL_CATEGORY_VIEW'; // table of contents for category
const JOURNAL_ENTRY_VIEW = 'JOURNAL_ENTRY_VIEW'; // view for a particular entry

class Journal extends React.Component {
    // Returns an array of unique categories from an array of journal entries
    getCategories(data) {
        return [...new Set(data.map(entry => entry.category))];
    }

    // Returns an array of entry names from an array of journal entries given a category
    getEntryTitlesInCategory(data, category) {
        return data.filter(entry => entry.category === category).map(entry => entry.title);
    }

    // Return an entry from an array of journal entries given a title
    getEntry(data, entryTitle) {
        return data.filter(entry => entry.title === entryTitle)[0];
    }

    // Render a directory view
    renderDirectory(newView, options, onNavigate) {
        return (
            <>
                <div className="page"></div>
                <div className="page">
                    <h1>Table of Contents</h1>
                    {options.map(option => {
                        return <button onClick={() => onNavigate(newView, option)} key={option}>{option}</button>;
                    })}
                </div>
            </>
        );
    }

    // Renders a list of facts
    renderFacts(facts) {
        return (
            <ul>
                {
                    facts.map((fact, idx) => {
                        return <li key={idx}>{fact}</li>;
                    })
                }
            </ul>
        );
    }

    // Render an entry view
    renderEntry(entry) {
        const maxInfoBoxFacts = this.props.maxInfoBoxFacts || entry.infoboxFacts.length;
        const maxFunFacts = this.props.maxFunFacts || entry.funFacts.length;
        return (
            <>
                <div className="page page-infobox">
                    <h1>{entry.title}</h1>
                    <img
                        alt={`Icon for ${entry.title}`}
                        src={`/sprites/journal-${entry.image}.png`} />
                    { this.renderFacts(entry.infoboxFacts.filter((f, idx) => idx < maxInfoBoxFacts)) }
                </div>
                <div className="page">
                    <h2>Facts</h2>
                    { this.renderFacts(entry.funFacts.filter((f, idx) => idx < maxFunFacts)) }
                </div>
            </>
        );
    }

    renderInner(props) {
        const { data, view, page, onNavigate } = props;
        if (view === JOURNAL_TOC_VIEW) {
            return this.renderDirectory(JOURNAL_CATEGORY_VIEW, this.getCategories(data), onNavigate);
        }
        if (view === JOURNAL_CATEGORY_VIEW) {
            return this.renderDirectory(JOURNAL_ENTRY_VIEW, this.getEntryTitlesInCategory(data, page), onNavigate);
        }
        if (view === JOURNAL_ENTRY_VIEW) {
            return this.renderEntry(this.getEntry(data, page));
        }
    }

    render() {
        return (
            <div className="journal" style={this.props.style || {}}>
                {this.renderInner(this.props)}
            </div>
        )
    }
}

export {
    Journal,
    JOURNAL_TOC_VIEW,
    JOURNAL_CATEGORY_VIEW,
    JOURNAL_ENTRY_VIEW,
}