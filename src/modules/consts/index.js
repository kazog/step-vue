/**
 * Create By: Meng
 * Desc: 
 */
/* eslint-disable */
export const consts = {
  device: 'android',
  width: globalThis.innerWidth,
  height: globalThis.innerHeight,
  token: '',
  isLogin: false,
  tabbarIndex: 0,
  user: {
    id: 0,
    role: 4,
    name: '',
    icon: '',
    phone: '',
    addressDetail: '',
    district: 0
  },
  demandDistrict: {
    districtName: '',
    id: null,
    rootId: null
  },
  supplyDistrict: {
    districtName: '',
    id: null,
    rootId: null
  },
  location: {
    lat: 0,
    lng: 0,
    address: '',
    detail: ''
  },
  // 第二层地址
  chooseBank:{
    id: null,
    districtId: null, 
    name: '',
    parentId: null,
    parentName: ''
  },
  // 第三层地址
  chooseBankAds2:{
    id: null,
    districtId: null, 
    name: ''
  }
}
