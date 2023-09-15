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
    } catch (error) {
        yield put (userGetMainCategoryFailure(error))
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
} catch (error) {
    yield put (userGetSubCategoryFailure(error))
}
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
function* categorySaga() {
  yield takeEvery(GET_MAIN_CATEGORY, getMainCategory)
  yield takeEvery(GET_SUB_CATEGORY, getSubCategory)

}
export default categorySaga;