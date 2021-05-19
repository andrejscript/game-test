import classes from './Cities.module.scss';

function Cities({currentCity, onChange}) {
  const cities = [
    { id: 1, title: 'city #1' },
    { id: 2, title: 'city #2' },
    { id: 3, title: 'city #3' },
  ];

  const cls = classes.city;

  return (
    <div className={classes.Cities}>
      {cities.map(city => {
        return (
          <a
            className={
              currentCity === city.id ? `${cls} ${classes.active}` : null
            }
            href='#'
            key={city.id}
            onClick={() => {
              onChange(city.id)
            }}
          >
            {city.title}
          </a>
        );
      })}
    </div>
  );
}

export default Cities;
