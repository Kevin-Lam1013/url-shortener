import { useQuery } from "react-query";
import api from "../api/api";

export const useFetchTotalClicks = (token, onError) => {
  return useQuery(
    "url-totalclick",
    async () => {
      const today = new Date();
      const startDate = new Date();
      startDate.setDate(today.getDate() - 30);
      const formatDate = (date) => date.toISOString().split("T")[0];

      return await api.get(
        `/api/urls/totalClicks?startDate=${formatDate(
          startDate
        )}&endDate=${formatDate(today)}`,
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
    },
    {
      select: (data) => {
        const convertToArray = Object.keys(data.data).map((key) => ({
          clickDate: key,
          count: data.data[key],
        }));

        return convertToArray;
      },
      onError,
      staleTime: 5000,
    }
  );
};

export const useFetchMyShortUrls = (token, onError) => {
  return useQuery(
    "my-shortenurls",
    async () => {
      return await api.get("/api/urls/myurls", {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });
    },
    {
      select: (data) => {
        const sortedData = data.data.sort(
          (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
        );

        return sortedData;
      },
      onError,
      staleTime: 5000,
    }
  );
};
