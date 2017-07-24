import React from 'react';

import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import courseBody from './js/components/course/courseBody';
import container from './js/components/container';
import createCourse from './js/components/course/createCourse';
import allCourse from './js/components/course/allCourse';
import auditCourse from './js/components/course/auditCourse';
import recommendsCourse from './js/components/course/recommendsCourse';
import userControl from './js/components/userControl/userControlBody';
import allUsers from './js/components/userControl/allUsers';
import allTeacher from './js/components/userControl/allTeacher';
import auditTeacher from './js/components/userControl/auditTeacher';
import excellentTeacher from './js/components/userControl/excellentTeacher';
import recommendTeacher from './js/components/userControl/recommendTeacher';
import userDetail from './js/components/userControl/userDetail';
import financeBody from './js/components/finance/financeBody';
import financeAccount from './js/components/finance/account';
import financeAudit from './js/components/finance/audit';
import financeOrder from './js/components/finance/order';
import courseDetail from './js/components/course/courseDetail';

export  default  class Root extends React.Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Route path="/" component={container}>

                    <Route path="/course" component={courseBody} >
                        <IndexRoute component={createCourse}/>
                        <Route path="/course/createCourse" component={createCourse} />
                            <Route path="/course/courseDetail/1" component={courseDetail} />
                        <Router path="/course/allCourse" component={allCourse} >
                        </Router>
                        <Route path="/course/auditCourse" component={auditCourse}/>
                        <Route path="/course/sinatvCourse" component={auditCourse}/>
                        <Route path="/course/recommendsCourse" component={recommendsCourse}/>
                    </Route>
                    <Route path="/userControl" component={userControl}>
                        <IndexRoute component={allUsers}/>
                        <Router path="/userControl/allUsers" component={allUsers} />
                        <Router path="/userControl/userDetail/:id" component={userDetail} />
                        <Router path="/userControl/auditTeacher" component={auditTeacher} />
                        <Router path="/userControl/allTeacher" component={allTeacher} />
                        <Router path="/userControl/excellentTeacher" component={excellentTeacher} />
                        <Router path="/userControl/recommendTeacher" component={recommendTeacher} />

                    </Route>
                    <Route path="/finance" component={financeBody}>
                        <IndexRoute component={financeOrder}/>
                        <Router path="/finance/order" component={financeOrder} />
                        <Router path="/finance/account" component={financeAccount} />
                        <Router path="/finance/audit" component={financeAudit} />
                    </Route>

                </Route>

            </Router>

        )
    }
}

/**
 * Created by ryzy-004 on 2017/7/17.
 */

