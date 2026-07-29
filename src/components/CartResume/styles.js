import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-width: 0;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 20px;
  background-color: ${({ theme }) => theme.white};

  overflow: hidden;
  box-sizing: border-box;

  * {
    box-sizing: border-box;
    color: ${({ theme }) => theme.secondBlack};
    font-weight: 500;
  }

  .container-top {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    grid-template-areas:
      'title title'
      'items items-price'
      'delivery-tax delivery-tax-price';

    gap: 14px 20px;

    .title {
      grid-area: title;

      width: 100%;
      margin: 0 0 10px;
      padding: 15px;

      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => theme.secondBlack};

      font-size: 20px;
      font-weight: 700;
      text-align: center;
    }

    .items {
      grid-area: items;
      padding-left: 20px;
    }

    .items-price {
      grid-area: items-price;
      padding-right: 20px;
      text-align: right;
      white-space: nowrap;
    }

    .delivery-tax {
      grid-area: delivery-tax;
      padding-left: 20px;
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;
      padding-right: 20px;
      text-align: right;
      white-space: nowrap;
    }
  }

  .container-bottom {
    width: 100%;
    margin-top: 24px;
    padding: 18px 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;

    border-top: 1px solid rgba(0, 0, 0, 0.12);

    font-size: 20px;
    font-weight: 700;

    * {
      margin: 0;
      font-weight: 700;
    }
  }

  @media (max-width: 480px) {
    border-radius: 14px;

    .container-top {
      gap: 12px 14px;

      .title {
        padding: 13px;
        font-size: 18px;
      }

      .items,
      .delivery-tax {
        padding-left: 14px;
        font-size: 14px;
      }

      .items-price,
      .delivery-tax-price {
        padding-right: 14px;
        font-size: 14px;
      }
    }

    .container-bottom {
      padding: 16px 14px;
      font-size: 17px;
    }
  }
`;