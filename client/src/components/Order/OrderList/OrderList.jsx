import React from 'react';

function OrderList({ order }) {
  return (
    <div>
      <div>Дата доставки: {(order.delivery_date).slice(0,10)}</div>
      <div>Время: {order.delivery_time}</div>
      <div>Адрес:</div>
      <div>Улица: {JSON.parse(order.delivery_address).street}</div>
      <div>Дом: {JSON.parse(order.delivery_address).house}</div>
      <div>Квартира: {JSON.parse(order.delivery_address).apartment}</div>
      <>------------------------------------------</>
    </div>
  );
}

export default OrderList;
