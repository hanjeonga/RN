import { useState } from "react";
import { getCalendarColumns } from "../utils/util";
import dayjs from "dayjs";

const useCalendar = () => {
  const now = dayjs();
  const [selectedDate, setSelectedDate] = useState(now);
  const [onDatePicker, setOnDatePicker] = useState(false);
  const columns = getCalendarColumns(selectedDate);

  const hideDatePicker = () => {
    setOnDatePicker(false);
  };

  const showDatePicker = () => {
    setOnDatePicker(true);
  };

  const handleConfirm = (date) => {
    setSelectedDate(dayjs(date));
    hideDatePicker();
  };

  const handleSelectedDate = (date) => {
    setSelectedDate(date);
  };

  const onPressLeftArrow = () => {
    const prevSelectedDate = dayjs(selectedDate).subtract(1, "month");
    setSelectedDate(prevSelectedDate);
  };

  const onPressRightArrow = () => {
    const nextSelectedDate = dayjs(selectedDate).add(1, "month");
    setSelectedDate(nextSelectedDate);
  };

  return {
    selectedDate,
    onDatePicker,
    columns,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    onPressLeftArrow,
    onPressRightArrow,
    handleSelectedDate,
  };
};

export default useCalendar;
