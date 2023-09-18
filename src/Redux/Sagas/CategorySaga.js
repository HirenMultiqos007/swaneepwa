import { put, takeEvery } from 'redux-saga/effects'
import { GET_MAIN_CATEGORY, GET_SUB_CATEGORY } from '../SagaAction/actions'
import { userGetMainCategoryFailure, userGetMainCategoryRequest, userGetMainCategorySuccess, userGetSubCategoryFailure, userGetSubCategoryRequest, userGetSubCategorySuccess } from '../Slices/GetCategorySlice'
import requestApi from '../../utils/request'


// Our worker Saga: will perform the async increment task
function* getMainCategory(params) {
    try {
        yield put (userGetMainCategoryRequest())
        const {data} = yield requestApi.post("main-category",params.payload);
        yield put (userGetMainCategorySuccess(data))
        if(typeof params.callback === "function"){
            yield params.callback(data?.[0]?._id)
        }
        localStorage.setItem("MainCategory",JSON.stringify(data))
    } catch (error) {
        console.log(navigator.onLine,"navigator.onLine")
        if(navigator.onLine){
            yield put (userGetMainCategoryFailure(error))
        }else{
            const mainData =  JSON.parse(localStorage.getItem("MainCategory"))
            yield put (userGetMainCategorySuccess(mainData))
            if(typeof params.callback === "function"){
             yield params.callback(mainData?.[0]?._id)
         }
             console.warn(error,"catch block Main Data")
        }
    }
}

function* getSubCategory (params){
try {
    yield put (userGetSubCategoryRequest())
    const {data : getCategoryData} = yield requestApi.post("category",params.payload)
    yield put (userGetSubCategorySuccess(getCategoryData))
    if(typeof params.callback === "function"){
        yield params.callback(getCategoryData?.[0]?._id,getCategoryData?.[0]?.categoryName)
    }
    localStorage.setItem("SubCategory",JSON.stringify(getCategoryData))
} catch (error) {
    if(navigator.onLine){
        yield put (userGetSubCategoryFailure(error))
    }else{
        const subData =  JSON.parse(localStorage.getItem("SubCategory"))
            yield put (userGetSubCategorySuccess(subData))
            if(typeof params.callback === "function"){
                yield params.callback(subData?.[0]?._id,subData?.[0]?.categoryName)
            }
             console.warn(error,"catch block Sub Data")
        }
    }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
function* categorySaga() {
  yield takeEvery(GET_MAIN_CATEGORY, getMainCategory)
  yield takeEvery(GET_SUB_CATEGORY, getSubCategory)

}
export default categorySaga;