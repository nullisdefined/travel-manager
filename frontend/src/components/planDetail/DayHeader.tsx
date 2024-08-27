import { randomBgColorClassNames } from '@/constants'
import { DateFormatTypeEnum } from '@/types'
import { cn } from '@/utils/cn'
import { formatDate } from '@/utils/formatDate'

type Props = {
  dayIndex: number
  date: Date
  country: string
  totalExpense: number
}

function DayHeader({ dayIndex, date, country, totalExpense }: Props) {
  return (
    <div className="flex flex-col gap-y-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <div
            className={cn([
              'flex h-10 w-10 items-center justify-center rounded-md p-1 text-sm text-white',
              randomBgColorClassNames[
                dayIndex % randomBgColorClassNames.length
              ],
            ])}
          >
            Day{dayIndex}
          </div>
          <span className="text-sm text-gray-600">
            {formatDate(DateFormatTypeEnum.DateWithDots, date)}
          </span>
        </div>

        <span className="text-sm text-gray-600">{country}</span>
      </div>
      <p className="text-right text-sm text-gray-600">
        💰 일 예상 경비: {totalExpense.toLocaleString()}원
      </p>
    </div>
  )
}

export default DayHeader
