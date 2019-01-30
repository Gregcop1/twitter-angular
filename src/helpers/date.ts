import moment from 'moment';

const dateHelper = {
  fromNow: (thenTimestamp: number): string => {
    const now = moment();
    const then = moment(thenTimestamp);
    const diff = (moment.duration(now.diff(then)) as any)._data;

    if (diff.year || diff.month || diff.days) {
      return then.format('D MMMM');
    } else if (diff.hours) {
      return `${diff.hours} h`;
    } else if (diff.minutes) {
      return `${diff.minutes} min`;
    }

    return diff.seconds ? `${diff.seconds} s` : 'à l\'instant';
  },
};

export default dateHelper;
