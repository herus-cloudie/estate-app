
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

export default function DatePickerFunc({ChangeDateHandler , value}) {
  return (
    <div style={{ direction: "rtl" }}>
      <DatePicker
      className="fontdate"
      onChange={ChangeDateHandler}
        calendar={persian}
        value={value}
        locale={persian_fa}
        calendarPosition="bottom-right"
      />
    </div>
  )
}