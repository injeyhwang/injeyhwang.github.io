import axios from 'axios';

export async function getTotalDonations(setTotalUSDRaised: React.Dispatch<React.SetStateAction<string>>) {
  const response = await axios.get(`${process.env.REACT_APP_GET_DONATIONS}`, {
    params: {},
    headers: { "Content-Type": "application/json" }
  });

  if (response !== undefined) {
    setTotalUSDRaised(response.data.metric.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    }));
  }
}

export async function getTotalMealsClaimed(setTotalMealsClaimed: React.Dispatch<React.SetStateAction<string>>) {
  const response = await axios.get(`${process.env.REACT_APP_GET_MEALS}`, {
    params: {},
    headers: { "Content-Type": "application/json" }
  });

  if (response !== undefined) {
    setTotalMealsClaimed(response.data.metric as string);
  }
}
