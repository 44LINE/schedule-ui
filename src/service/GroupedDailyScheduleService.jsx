export const getGroupedDailySchedules = async (groupId) => {
    const host = "https://pk-schedule-api.herokuapp.com/";
    const proxy = "http://localhost:8010/proxy/"
    const url = "schedules/latest/grouped-daily-schedules/group-id/";
    return await fetch(host + url + groupId)
        .then(res => res.json())
        .then(data => data._embedded.groupedDailyScheduleList);
};
