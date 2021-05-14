import React from 'react';
import {
    Journal,
    JOURNAL_TOC_VIEW,
} from '../components/Journal';
import journalData from '../journalData';
import './JournalPage.scss';

class JournalPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: JOURNAL_TOC_VIEW,
            page: null,
        };
    }

    resetNavigation() {
        this.onNavigate(JOURNAL_TOC_VIEW, null);
    }

    onNavigate(newView, newPage) {
        this.setState({
            view: newView,
            page: newPage,
        });
    }

    render() {
        return (
            <div id="journal-page">
                <button onClick={this.resetNavigation.bind(this)} id="journal-reset-btn">
                    <img src="/sprites/sprite-journal-closed.png" alt="Journal Icon" />
                    <span>View Directory</span>
                </button>
                <div id="journal-page-content">
                    <Journal
                        data={journalData}
                        view={this.state.view}
                        page={this.state.page}
                        onNavigate={this.onNavigate.bind(this)} />
                </div>
            </div>
        );
    }
}

export default JournalPage;