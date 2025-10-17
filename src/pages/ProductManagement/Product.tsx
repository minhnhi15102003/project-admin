import { useState } from "react"
import ComponentCard from "../../components/common/ComponentCard"
import PageBreadCrumb from "../../components/common/PageBreadCrumb"
import InputField from "../../components/from/input/InputField"
import Label from "../../components/from/Label"
import Select from "../../components/from/Select"
import Switch from "../../components/from/switch/Switch"
import UploadComponent from "../../components/from/UploadComponent"

const Product = () => {
  const options = [
    {
      value: "234234234",
      label: "Áo Thun"
    },
    {
      value: "234234334",
      label: "Áo PoLo"
    },
    {
      value: "234234567",
      label: "Quần Jeans"
    }
  ]
  const [isShowDiscount, setIsShowDiscount] = useState<boolean>(false);


  const handleSelectChange = (value: string) => {
    console.log(value);
  }


  const handleSwitchChange = (checked: boolean) => {
    console.log(checked);
  }


  const handleSwitchChangeDiscount = (checked: boolean) => {
    setIsShowDiscount(checked);
  };


  return (
    <>
      <PageBreadCrumb pageTitle="Thêm sản phẩm" />
      <div className="grid grid-cols-1 gap-2 xl:grid-cols-2">
        <div className="space-y-6">
          <ComponentCard title="Thông tin cơ bản">
            <div className="">
              <Label htmlFor="1" className="">Tên sản phẩm</Label>
              <InputField id="1" type="text" placeholder="Nhập tên sản phẩm" onChange={() => { }} />
            </div>
            <div className="">
              <Label htmlFor="2" className="">Danh mục</Label>
              <Select onChange={handleSelectChange} options={options} placeholder="Chọn sản phẩm" />
            </div>
            <div className="grid xl:grid-cols-2 xl: gap-6 sm:grid-cols-1">
              <div className="">
                <Label htmlFor="3" className="">Giá</Label>
                <InputField id="3" type="number" placeholder="Nhập giá sản phẩm" onChange={() => { }} />
              </div>
              <div className="">
                <Label htmlFor="4" className="">Số lượng</Label>
                <InputField id="4" type="number" placeholder="Nhập số lượng sản phẩm" onChange={() => { }} />
              </div>
            </div>
          </ComponentCard>
          <ComponentCard title="Cài đặt sản phẩm">
            <div className="flex gap-20 justify-between">
              <Switch
                label="Discount"
                defaultChecked={isShowDiscount}
                onChange={handleSwitchChangeDiscount}
              />
              <Switch
                label="Hàng giảm giá"
                defaultChecked={true}
                onChange={handleSwitchChange}
              />
              <Switch
                label="Hàng Hot"
                defaultChecked={true}
                onChange={handleSwitchChange}
              />
            </div>

            {isShowDiscount && (
              <div className="w-1/2">
                <Label htmlFor="5">Giảm giá</Label>
                <InputField
                type="number" id="5" 
                placeholder="Nhập % giảm giá" />
              </div>
            )}
          </ComponentCard>
        </div>
        <div className="space-y-6">
          <ComponentCard title="Thêm ảnh sản phẩm">
              <UploadComponent></UploadComponent>
          </ComponentCard>
        </div>
      </div>
    </>
  )
}

export default Product