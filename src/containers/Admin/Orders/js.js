 <SelectStatus
              options={orderStatusOptions.filter((status) => status.id !== 0)}
              value={orderStatusOptions.find((option) => option.value === row.status)}
              placeholder="Status"
              defaultInputValue={orderStatusOptions.find((status) => status.value === row.status || null)}
              onChange={(status) => newStatusOrder(row.orderId, status.value)}
              isLoading={loading}
            />