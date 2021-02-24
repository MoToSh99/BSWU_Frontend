import React, { FC, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import Page404 from '../Screens/Page404';
import Confirm from '../Screens/Confirm';
import Loading from '../Screens/Loading';
import lazyImport from '../lazy-import';


const Landing = lazyImport('../Screens/Landing');


const Appnavigation: FC = () => {
    return (
        <>
            <Suspense fallback={<LinearProgress />}>
                <Switch>
                    <Route path='/' exact component={Landing} />
                    <Route path='/confirm' exact component={Confirm} />
                    <Route path='/loading' exact component={Loading} />
                    <Route path='/*' exact component={Page404} />
                </Switch>
            </Suspense>

        </>
    )
}

export default Appnavigation;

