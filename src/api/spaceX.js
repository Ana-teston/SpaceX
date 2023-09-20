const SPACE_X_API_BASE_URL = 'https://api.spacexdata.com/v5/launches';


export const fetchSpaceXLaunches = async () => {
  try {
    const response = await fetch(SPACE_X_API_BASE_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch SpaceX launches');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching SpaceX launches:', error);
    throw error;
  }
};
