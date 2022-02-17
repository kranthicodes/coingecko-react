import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Image,
  Flex,
  Text,
  Box,
  Button,
  Spinner,
} from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { useSortBy, useTable } from 'react-table';
import { useHistory } from 'react-router-dom';
import useStore from '../../../store/store';
const arr = [
  { Header: 'Image', accessor: 'image' },
  { Header: 'Symbol', accessor: 'symbol' },
  { Header: 'Name', accessor: 'name' },
  { Header: 'Current Price', accessor: 'current_price' },
  { Header: 'High 24H', accessor: 'high_24h' },
  { Header: 'Low 24H', accessor: 'low_24h' },
];

export default function CoinListTable({ list }) {
  const history = useHistory();
  const status = useStore((state) => state.status);
  const data = React.useMemo(
    () =>
      list.map((item) => {
        const { id, image, name, low_24h, high_24h, current_price, symbol } =
          item;

        return { id, image, name, low_24h, high_24h, current_price, symbol };
      }),
    []
  );

  const columns = React.useMemo(() => arr, []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);
  if (status == 'loading') {
    return (
      <Flex
        justifyContent={'center'}
        alignItems="center"
        width={'100%'}
        height="100%"
      >
        <Spinner color="green" size={'xl'} />
      </Flex>
    );
  }
  return (
    <Flex
      justifyContent={'center'}
      alignItems="center"
      padding={'1rem'}
      border="1px solid #ababab"
      borderRadius={'8px'}
      flexDirection="column"
      gap={'20px'}
    >
      <Table {...getTableProps()} color="#fff">
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  isNumeric={column.isNumeric}
                  color="#fff"
                >
                  {column.render('Header')}
                  <chakra.span pl="4">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <TriangleDownIcon aria-label="sorted descending" />
                      ) : (
                        <TriangleUpIcon aria-label="sorted ascending" />
                      )
                    ) : null}
                  </chakra.span>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            // console.log(row, 'row');
            return (
              <Tr
                {...row.getRowProps()}
                onClick={() => {
                  history.push(`/${row.original.id}`);
                }}
                cursor="pointer"
              >
                {row.cells.map((cell) => {
                  if (cell.column.Header == 'Image') {
                    return (
                      <Td
                        {...cell.getCellProps()}
                        isNumeric={cell.column.isNumeric}
                      >
                        <Image
                          src={cell.value}
                          alt="img"
                          height={15}
                          width={15}
                        />
                      </Td>
                    );
                  }
                  return (
                    <Td
                      {...cell.getCellProps()}
                      isNumeric={cell.column.isNumeric}
                    >
                      {cell.render('Cell')}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Flex>
  );
}
