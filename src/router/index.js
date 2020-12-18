// default
import {createRouter, createWebHistory} from 'vue-router'
import Login from '../views/Login.vue'

import Dashboard from "../views/Dashboard";

// user components
import CreateNewUser from '../components/layouts/partials/CreateNewUser';
import UserList from "../components/layouts/partials/UserList";
import UpdateUser from "../components/layouts/partials/UpdateUser";
import UserDetails from "../components/layouts/partials/UserDetails";
import UserProfile from "../components/layouts/partials/UserProfile";

// group components
import CreateGroup from "../components/layouts/partials/groups/CreateGroup";
import GroupList from "../components/layouts/partials/groups/GroupList";
import UpdateGroup from "../components/layouts/partials/groups/UpdateGroup";
import GroupDetails from "../components/layouts/partials/groups/GroupDetails";

// department components
import CreateDepartment from "../components/layouts/partials/department/CreateDepartment";
import UpdateDepartment from "../components/layouts/partials/department/UpdateDepartment";
import DepartmentList from "../components/layouts/partials/department/DepartmentList";

// branch component
import CreateBranch from "../components/layouts/partials/branch/CreateBranch";
import BranchList from "../components/layouts/partials/branch/BranchList";
import UpdateBranch from "../components/layouts/partials/branch/UpdateBranch";


// profile components
import UpdatePassword from "@/components/layouts/partials/update_password/UpdatePassword"
import UpdateProfile from "@/components/layouts/partials/UpdateProfile"

// Attendance components
import Holiday from "../components/layouts/partials/Attendance/Holiday/Holiday";
import CreateHoliday from "../components/layouts/partials/Attendance/Holiday/CreateHoliday";
import UpdateHoliday from "../components/layouts/partials/Attendance/Holiday/UpdateHoliday";
import AttendanceRecords from "../components/layouts/partials/Attendance/AttendanceRecords/AttendanceRecords";
import UpdateAttendanceRecords from "../components/layouts/partials/Attendance/AttendanceRecords/UpdateAttendanceRecords";
import AddAttendanceRecords from "../components/layouts/partials/Attendance/AttendanceRecords/AddAttendanceRecords";
import AttendanceEntry from "../components/layouts/partials/Attendance/AttendanceRecords/AttendanceEntry";


// Holiday
import HolidayList from "../components/layouts/partials/Attendance/Holiday/holiday/HolidayList";
import AddHoliday from "../components/layouts/partials/Attendance/Holiday/holiday/AddHoliday";
import EditHoliday from "../components/layouts/partials/Attendance/Holiday/holiday/EditHoliday";



// Leave Request
import LeaveTypes from "../components/layouts/partials/Attendance/LeaveRequest/LeaveTypes";
import AddLeaveTypes from "../components/layouts/partials/Attendance/LeaveRequest/AddLeaveTypes";
import UpdateLeaveTypes from "../components/layouts/partials/Attendance/LeaveRequest/UpdateLeaveTypes";


// AllLeaves
import AllLeaves from "../components/layouts/partials/Attendance/LeaveRequest/AllLeaves";
import AllLeavesDetails from "../components/layouts/partials/Attendance/LeaveRequest/AllLeavesDetails";


import MyLeaveHistory from "../components/layouts/partials/Attendance/LeaveRequest/MyLeaveHistory";
import AddLeaveRequest from "../components/layouts/partials/Attendance/LeaveRequest/AddLeaveRequest";
import UpdateLeaveReq from "../components/layouts/partials/Attendance/LeaveRequest/UpdateLeaveReq";


// permissions
import permissions from "@/authorization/permissions";


// route guard
function guardMyRoute(to, from, next) {
    to.matched.some(record => {
        if (record.meta.authentication_required) {
            if (permissions.superuser_status || record.meta.title === 'common') {
                next()
            } else if (localStorage.getItem('id') && permissions.hasPermission(record.meta.title)) {
                next()
            } else next('/')
        } else next()
    })
}

// routes
const routes = [

    {
        path: '/',
        name: 'Login',
        component: Login,
    },

    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        beforeEnter: guardMyRoute,
        meta: {title: 'common', authentication_required: true}
    },

    // User
    {
        path: '/create-new-user',
        name: 'CreateNewUser',
        component: CreateNewUser,
        beforeEnter: guardMyRoute,
        meta: {title: 'add_user', authentication_required: true}

    },

    {
        path: '/user-list',
        name: 'UserList',
        component: UserList,
        beforeEnter: guardMyRoute,
        meta: {title: 'view_user', authentication_required: true}
    },

    {
        path: '/update-user/:id',
        name: 'UpdateUser',
        component: UpdateUser,
        beforeEnter: guardMyRoute,
        meta: {title: 'change_user', authentication_required: true}
    },

    {
        path: '/user-details/:id',
        name: 'UserDetails',
        component: UserDetails,
        beforeEnter: guardMyRoute,
        meta: {title: 'view_user', authentication_required: true}
    },

    {
        path: '/user-profile',
        name: 'UserProfile',
        component: UserProfile,
        beforeEnter: guardMyRoute,
        meta: {title: 'common', authentication_required: true}
    },

    // Group
    {
        path: '/create-group',
        name: 'CreateGroup',
        component: CreateGroup,
        beforeEnter: guardMyRoute,
        meta: {title: 'add_group', authentication_required: true}
    },

    {
        path: '/update-group/:id',
        name: 'UpdateGroup',
        component: UpdateGroup,
        beforeEnter: guardMyRoute,
        meta: {title: 'change_group', authentication_required: true}
    },

    {
        path: '/group-list',
        name: 'GroupList',
        component: GroupList,
        beforeEnter: guardMyRoute,
        meta: {title: 'view_group', authentication_required: true}
    },

    {
        path: '/group-details/:id',
        name: 'GroupDetails',
        component: GroupDetails,
        beforeEnter: guardMyRoute,
        meta: {title: 'view_group', authentication_required: true}
    },

    // department
    {
        path: '/create-department',
        name: 'CreateDepartment',
        component: CreateDepartment,
        beforeEnter: guardMyRoute,
        meta: {title: 'add_department', authentication_required: true}
    },

    {
        path: '/update-department/:id',
        name: 'UpdateDepartment',
        component: UpdateDepartment,
        beforeEnter: guardMyRoute,
        meta: {title: 'change_department', authentication_required: true}
    },

    {
        path: '/department-list',
        name: 'DepartmentList',
        component: DepartmentList,
        beforeEnter: guardMyRoute,
        meta: {title: 'view_department', authentication_required: true}
    },

    // branch
    {
        path: '/create-branch',
        name: 'CreateBranch',
        component: CreateBranch,
        beforeEnter: guardMyRoute,
        meta: {title: 'add_branch', authentication_required: true}
    },

    {
        path: '/update-branch/:id',
        name: 'UpdateBranch',
        component: UpdateBranch,
        beforeEnter: guardMyRoute,
        meta: {title: 'change_branch', authentication_required: true}
    },

    {
        path: '/branch-list',
        name: 'BranchList',
        component: BranchList,
        beforeEnter: guardMyRoute,
        meta: {title: 'view_branch', authentication_required: true}
    },


    {
        path: '/update-password',
        name: 'UpdatePassword',
        component: UpdatePassword,
        beforeEnter: guardMyRoute,
        meta: {title: 'common', authentication_required: true}
    },
    {
        path: '/update-profile',
        name: 'UpdateProfile',
        component: UpdateProfile,
        beforeEnter: guardMyRoute,
        meta: {title: 'common', authentication_required: true}
    },

    // Attendance Module
    {
        path: '/branch-holiday',
        name: 'Holiday',
        component: Holiday,
        beforeEnter: guardMyRoute,
        meta: {title: 'common', authentication_required: true}
    },
    {
        path: '/create-holiday',
        name: 'CreateHoliday',
        component: CreateHoliday,
        beforeEnter: guardMyRoute,
        meta: {title: 'common', authentication_required: true}
    },
    {
        path: '/update-holiday/:id',
        name: 'UpdateHoliday',
        component: UpdateHoliday,
        beforeEnter: guardMyRoute,
        meta: {title: 'common', authentication_required: true}
    },

    {
        path: '/attendance-records',
        name: 'AttendanceRecords',
        component: AttendanceRecords,
        beforeEnter: guardMyRoute,
        meta: {title: 'common', authentication_required: true}
    },
    {
        path: '/add-attendance-records',
        name: 'AddAttendanceRecords',
        component: AddAttendanceRecords,
        beforeEnter: guardMyRoute,
        meta: {title: 'common', authentication_required: true}
    },

    {
        path: '/update-attendance-records/:id',
        name: 'UpdateAttendanceRecords',
        component: UpdateAttendanceRecords,
        beforeEnter: guardMyRoute,
        meta: {title: 'common', authentication_required: true}
    },





    // Add Holiday
    {
        path: '/holiday-list',
        name: 'HolidayList',
        component: HolidayList,
        beforeEnter: guardMyRoute,
        meta: {title: 'common', authentication_required: true}
    },

    {
        path: '/add-holiday',
        name: 'AddHoliday',
        component: AddHoliday,
        beforeEnter: guardMyRoute,
        meta: {title: 'common', authentication_required: true}
    },

    {
        path: '/edit-holiday/:id',
        name: 'EditHoliday',
        component: EditHoliday,
        beforeEnter: guardMyRoute,
        meta: {title: 'common', authentication_required: true}
    },

    // Add Holiday






    // Leave Request
    {
        path: '/leave-types',
        name: 'LeaveTypes',
        component: LeaveTypes,
        beforeEnter: guardMyRoute,
        meta: {title: 'common', authentication_required: true}
    },

    {
        path: '/create-leave-types',
        name: 'AddLeaveTypes',
        component: AddLeaveTypes,
        beforeEnter: guardMyRoute,
        meta: {title: 'common', authentication_required: true}
    },

    {
        path: '/update-leave-types/:id',
        name: 'UpdateLeaveTypes',
        component: UpdateLeaveTypes,
        beforeEnter: guardMyRoute,
        meta: {title: 'common', authentication_required: true}
    },

    // AllLeaves
    {
        path: '/all-leaves',
        name: 'AllLeaves',
        component: AllLeaves,
        beforeEnter: guardMyRoute,
        meta: {title: 'common', authentication_required: true}
    },

    {
        path: '/all-leaves-details/:id',
        name: 'AllLeavesDetails',
        component: AllLeavesDetails,
        beforeEnter: guardMyRoute,
        meta: {title: 'common', authentication_required: true}
    },





    {
        path: '/my-leave-history',
        name: 'MyLeaveHistory',
        component: MyLeaveHistory,
        beforeEnter: guardMyRoute,
        meta: {title: 'common', authentication_required: true}
    },

    {
        path: '/add-leaves-request',
        name: 'AddLeaveRequest',
        component: AddLeaveRequest,
        beforeEnter: guardMyRoute,
        meta: {title: 'common', authentication_required: true}
    },

    {
        path: '/update-leave-request/:id',
        name: 'UpdateLeaveReq',
        component: UpdateLeaveReq,
        beforeEnter: guardMyRoute,
        meta: {title: 'common', authentication_required: true}
    },
    {
        path: '/attendance-entry',
        name: 'AttendanceEntry',
        component: AttendanceEntry,
        beforeEnter: guardMyRoute,
        meta: {title: 'common', authentication_required: true}
    },


]

// calling routes
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// exporting
export default router


