import { $node, $helper ,$cms} from "@jx3box/jx3box-common/js/https";
import { __iconPath } from "@jx3box/jx3box-common/data/jx3box.json";
import axios from "axios";
const $n = $node();
const $h = $helper();

// 获取技艺分组分类
async function getCraftJson() {
	const res = await axios.get(`${__iconPath}pvx/manufacture/output/craft_belong.json`);
    return res;
}
// 获取技艺某种类型的列表
function getManufactures(params) {
	return $n.get("/manufactures", { params });
}
// 获取技艺某种类型的单个详细信息
function getManufactureItem(type, id, client = "std") {
	return $n.get(`/manufacture/${type}/${id}`, {
        params: {
            client
        }
    });
}
// 根据ids获取对应信息
function getOther(params) {
	return $n.get(`/other`, { params });
}
// 获取商店物品价格
function getItemsPrice(params) {
	return $n.get(`/craft/price`, { params });
}
// 获取交易行物品价格
function getAuction(params) {
	return $h.get(`/api/items/price`, { params });
}
// 新增清单
function addMyPlans(params) {
	return $cms().post(`/api/cms/app/item_plan`, params);
}
export { getManufactures, getManufactureItem, getCraftJson, getOther, getItemsPrice, getAuction,addMyPlans };