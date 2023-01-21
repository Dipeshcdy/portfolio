import React from 'react'

export const Message = (props) => {
    // ()=>{
    //     setTimeout(function () {
    //         $(".dismissible").addClass('animate__slideOutRight').fadeOut(2000);
    //     }, 2000);
    // };
    return (
        <div>
            <div className={"animate__animated animate__slideInRight dismissible fixed right-8 top-4 z-50 "+props.fade}>
                <div className="w-auto rounded-md p-2 shadow-lg bg-gray-100 dark:bg-gray-600">
                    <p className="border-l-4 border-indigo-400 px-2 text-indigo-900 dark:text-indigo-300 font-bold">sent successfully</p>
                </div>
            </div>

        </div>
    )
}
