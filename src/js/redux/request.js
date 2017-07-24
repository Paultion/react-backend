import {baseUrl} from '../config/config'
import $ from 'n-zepto'

export default function requestData(url,cb,data){
    // $.get( {baseUrl}.baseUrl + url,(res)=>{
    //     typeof cb == 'function' ? cb(res) : null
    // })
    $.ajax({
        url : {baseUrl}.baseUrl + url,
        async : false,
        type : data?'post' : 'get',
        data : data || null,
        success : (res)=>{
            "use strict";
            typeof cb == 'function' ? cb(res) : null
        }
    },cb)
}