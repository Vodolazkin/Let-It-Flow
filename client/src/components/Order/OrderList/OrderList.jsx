import React from 'react';

function OrderList({ order }) {
  console.log(order);
  return (
    <div>
      <div>Дата доставки: {(order.delivery_date).slice(0,10)}</div>
      <div>Время: {order.delivery_time}</div>
      <div>Адрес:</div>
      <div>Улица: {order.delivery_street}</div>
      <div>Дом: {order.delivery_house}</div>
      <div>Квартира: {order.delivery_apartment}</div>
      <>------------------------------------------</>
    </div>
  );
}

export default OrderList;
