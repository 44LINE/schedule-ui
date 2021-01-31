import authHeader from "../auth/auth-header";

export const getGroupedDailySchedules = async (groupId) => {
    const host = "https://pk-schedule-api.herokuapp.com/api/";
    const url = "schedules/latest/grouped-daily-schedules/group-id/";
    return await fetch(host + url + groupId, {
            method: "GET",
            headers: authHeader()
        })
        .then(res => res.json())
        .then(data => data._embedded.groupedDailyScheduleList);
};
