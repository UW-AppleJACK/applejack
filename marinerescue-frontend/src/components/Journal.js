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
            <div>
                <p>Directory</p>
                {options.map(option => {
                    return <button onClick={() => onNavigate(newView, option)} key={option}>{option}</button>;
                })}
            </div>
        );
    }

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
        return (
            <div>
                <h1>{entry.title}</h1>
                <img
                    alt={`Icon for ${entry.title}`}
                    src={`/sprites/journal-${entry.image}.png`} />
                { this.renderFacts(entry.infoboxFacts) }
                { this.renderFacts(entry.funFacts) }
            </div>
        );
    }

    render() {
        const { data, view, page, onNavigate } = this.props;
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
}

export {
    Journal,
    JOURNAL_TOC_VIEW,
    JOURNAL_CATEGORY_VIEW,
    JOURNAL_ENTRY_VIEW,
}