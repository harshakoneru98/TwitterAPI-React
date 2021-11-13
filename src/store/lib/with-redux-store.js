/**
 * Custom Store Instance that bypasses global window namespace to point to the right store object at run time
 */
import { Component } from 'react';
import initializeStore from '../store';

const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
    if (typeof window === 'undefined') {
        return initializeStore(initialState);
    }

    if (!window[__NEXT_REDUX_STORE__]) {
        window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
    }
    return window[__NEXT_REDUX_STORE__];
}

export default function withReduxStore(App) {
    return class AppWithRedux extends Component {
        static async getInitialProps(appContext) {
            const store = getOrCreateStore();
            appContext.ctx.store = store;

            return {
                ...(App.getInitialProps
                    ? await App.getInitialProps(appContext)
                    : {}),
                initialReduxState: store.getState()
            };
        }

        render() {
            const { initialReduxState } = this.props;
            return (
                <App
                    {...this.props}
                    store={getOrCreateStore(initialReduxState)}
                />
            );
        }
    };
}
