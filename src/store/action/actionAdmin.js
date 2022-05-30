// import {showList,addList,errorList,uploadFiles} from "../reducer/adminReducer";
// import axios from "axios";
//
//
// function actionShowList(){
//     return dispatch=>{
//         axios.get('http://localhost:8080/admin/show')
//             .then(({data})=>dispatch(showList(data)))
//             .catch(error=>dispatch(errorList(error)))
//     }
// }
//
// function actionAddList(data){
//     return dispatch=>{
//         axios.post('http://localhost:8080/admin/add',data)
//             .then(()=>dispatch(addList(data)))
//             .catch(error=>dispatch(errorList(error)))
//     }
// }
//
// function actionAddFiles(data) {
//        const fileData = new FormData();
//        fileData.append('file',data);
//         return dispatch=>{
//             axios.post('http://localhost:8080/admin/download',fileData)
//                 .then((data)=>dispatch(uploadFiles(data)))
//                 .catch(error=>dispatch(errorList(error)))
//         }
// }
//
//
//
//
// export {
//     actionAddList,
//     actionShowList,
//     actionAddFiles
// }