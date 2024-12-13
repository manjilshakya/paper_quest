// import {
//   BookmarkIcon,
//   MarkerIcon,
//   SavedIcon,
//   ClockIcon,
//   HomeIcon2,
//   ToolIcon,
//   CalendarIcon,
// } from '@/icons';
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

// import dayjs from 'dayjs';
import { useRouter } from "next/navigation";
import { SavedIcon } from "../../../../../../public/assets/icons/SavedIcon";
import { BookmarkIcon } from "../../../../../../public/assets/icons/BookmarkIcon";
import { MarkerIcon } from "../../../../../../public/assets/icons/MarkerIcon";
import { HomeIcon2 } from "../../../../../../public/assets/icons/HomeIcon2";
import { ToolIcon } from "../../../../../../public/assets/icons/ToolIcon";
import { ClockIcon } from "../../../../../../public/assets/icons/ClockIcon";
import { CalendarIcon } from "../../../../../../public/assets/icons/CalendarIcon";
interface JobProps {
  key: string;
  savedjob: boolean | null;
  jobId?: number;
  publisherName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any;
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-explicit-any
  handleSave?: (data: any, status: boolean | null) => unknown;
  status?: boolean;
  selectedJob?: number | null;
}
const JobCard = ({
  key,
  savedjob,
  jobId,
  publisherName,
  item,
  handleSave,
  status,
  selectedJob,
}: JobProps) => {
  const router = useRouter();

  const tagdivCss =
    "px-[10px] py-1 bg-[#F9FAFB] border border-[#D0D5DD] rounded-md	flex flex-row items-center gap-[6px]";

  // const isDateSchedule = item?.startTimeType?.id === 3;
  // const scheduleDate = item?.jobMetaData?.scheduleDate;
  // const scheduleTime = item?.jobMetaData?.scheduleTime;
  // const formattedScheduleDate = dayjs(scheduleDate)?.format('DD/MM/YYYY');
  // const selectedScheduleDate = isDateSchedule
  //   ? dayjs(`${scheduleDate} ${scheduleTime}`)?.format('H:mm A')
  //   : item?.startTimeType?.name;
  return (
    <div className="py-5 px-3 hover:bg-[#EAECF0] border-b" key={key}>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-[5px]">
          <div className="flex justify-between items-center">
            <p className="text-base font-normal text-[#475467]">
              {publisherName}
            </p>
            <div className="flex items-center gap-10 text-[#667085] text-sm">
              {" "}
              <div>{status === true ? "Connected" : " "}</div>
              <div
                onClick={() => handleSave && handleSave(item, savedjob)}
                className="cursor-pointer"
              >
                {savedjob === null ? null : savedjob ? (
                  selectedJob === jobId ? (
                    <Spin indicator={<LoadingOutlined spin />} />
                  ) : (
                    <SavedIcon />
                  )
                ) : selectedJob === jobId ? (
                  <Spin indicator={<LoadingOutlined spin />} />
                ) : (
                  <BookmarkIcon className="mx-1" />
                )}
              </div>
            </div>
          </div>
          <h2
            className="text-2xl font-semibold cursor-pointer"
            onClick={() => router.push(`/tradies/jobdetail/${item?.id}`)}
          >
            {item?.jobServices?.name}
          </h2>
          <p className="text-base font-normal text-[#475467]">{`Posted ${item?.jobMetaData?.timeSinceCreatedDate}`}</p>
          <span className="flex items-center gap-[6px]">
            <MarkerIcon />
            <p className="text-[#475467] font-medium	">{`${item?.address}, ${item?.postalCode}`}</p>
          </span>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <div className={tagdivCss}>
            <HomeIcon2 />
            {item?.serviceTypes?.name}
          </div>
          <div className={tagdivCss}>
            <ToolIcon />
            {item?.propertyType?.name}
          </div>

          <div className={tagdivCss}>
            <CalendarIcon />
            ascs
          </div>

          <div className={tagdivCss}>
            <ClockIcon />
            asdsa
          </div>
        </div>
        <p className="text-base font-normal text-[#475467] line-clamp-2">
          {item?.jobs?.jobMetaData?.description}
        </p>
      </div>
    </div>
  );
};
export default JobCard;
