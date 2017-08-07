angular
    .module('demoDirective',[])
    .directive('ngDemo',function(){
        return {
            template:'<h1>我是自定义指令渲染出来的内容，我是一个h1标签</h1>'
        }
    })
    .directive('ngDemo1',function(){
        return {
            template:'<div>我是自定义指令渲染出来的,后面的内容是由用户自己决定的<span ng-transclude style="color:red;">我是默认值</span></div>',
            transclude:true
        }
    })
    .directive('ngDemo2',function(){
        return {
            template:'<h1 style="color:{{mycolor}};background:{{mybgcolor}}">我是自定义指令渲染出来的内容，我是一个h1标签</h1>',
            scope:{
                mycolor:'@',//这块一定要注意，如果这里用的是驼峰式，在模板里一定要用中划线方式
                mybgcolor:'@'
            }
        }
    });