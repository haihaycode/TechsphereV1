import moment from 'moment';
import 'moment-duration-format';

export function formatDateTimeCountdown(dateTime) {
    const now = moment();
    const postTime = moment(dateTime);
    const duration = moment.duration(now.diff(postTime));

    // Nếu thời gian hiện tại lớn hơn thời gian đăng bài
    if (now.isAfter(postTime)) {
      if (duration.asMinutes() < 1) {
        return 'Vừa xong';
      } else if (duration.asHours() < 1) {
        return moment.duration(duration).format('m [phút] trước');
      } else if (duration.asDays() < 1) {
        return moment.duration(duration).format('h [giờ] trước');
      } else {
        return moment.duration(duration).format('D [ngày] trước');
      }
    } else {
      return moment(dateTime).format('DD/MM/YYYY HH:mm:ss');
    }
  }
  export function formatDateTime(dateTime) {
    return moment(dateTime).format(' HH:mm:ss DD/MM/YYYY');
  }