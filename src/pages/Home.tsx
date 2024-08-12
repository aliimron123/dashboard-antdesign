import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  LikeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import ActivitiesStatistic from "../components/module/dashboard/ActivitiesStatistic";
import AgeStatistic from "../components/module/dashboard/AgeChart";
import BarStatistic from "../components/module/dashboard/BarStatistic";
import CalendarCard from "../components/module/dashboard/CalendarCard";
import CardStatistic from "../components/module/dashboard/CardStatistic";
import GenderStatistic from "../components/module/dashboard/GenderChart";
import TodoList from "../components/module/dashboard/TodoList";

const Home = () => {
  const dataCard = [
    {
      title: "Income",
      icon: <ArrowUpOutlined />,
      color: "#3f8600",
      value: 11.12,
      suffix: "%",
    },
    {
      title: "Outcome",
      icon: <ArrowDownOutlined />,
      color: "#cf1322",
      value: 6.12,
      suffix: "%",
    },
    {
      title: "FeedBack",
      icon: <LikeOutlined />,
      value: "8,000",
    },
    {
      title: "Active Member",
      icon: <UserOutlined />,
      value: "612",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <CardStatistic data={dataCard} />
      <div className="flex w-full gap-4 phone:flex-col">
        <BarStatistic />
        <div className="flex h-full w-full max-w-sm flex-col gap-4 phone:w-full phone:max-w-full">
          <GenderStatistic />
          <AgeStatistic />
        </div>

        <TodoList />
      </div>
      <div className="flex w-full flex-row gap-6 phone:flex-col">
        <ActivitiesStatistic />
        <CalendarCard />
        <TodoList />
      </div>
    </div>
  );
};

export default Home;
