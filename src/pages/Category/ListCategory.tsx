import { useState } from "react"
import PageBreadCrumb from "../../components/common/PageBreadCrumb"
import Button from "../../components/ui/Button/Button"
import { PlusIcon } from "../../icon"


const ListCategory = () => {
    const [isOpenDialogCategory, setIsOpenDialogCategory] = useState()
    return (
        <div>
            <PageBreadCrumb pageTitle="Danh sách danh mục"/>
            <div className="flex justify-end pb-2 font-semibold">
                <Button 
                    size="sm"
                    endIcon={<PlusIcon/>}
                    onClick={() => setIsOpenDialogCategory(true)}>
                    Thêm danh mục
                </Button>
            </div>
        </div>
    )
}

export default ListCategory