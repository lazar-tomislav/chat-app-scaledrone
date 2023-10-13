
/**
 * @returns {string} - Scaledrone Channel ID
 * */
const getScaledroneChannelId = () => {
	return process.env.REACT_APP_SCALEDRONE_CHANNEL_ID;
}

export {
	getScaledroneChannelId,
}
export default {
	getScaledroneChannelId,
}