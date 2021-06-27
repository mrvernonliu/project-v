package utils

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
)

func ConvertRowsToBytes(rows *sql.Rows) []byte {
	cols, _ := rows.Columns()
	var store []map[string]interface{}
	for rows.Next() {
		columns := make([]interface{}, len(cols))
		columnPointers := make([]interface{}, len(cols))
		for i, _ := range columns {
			columnPointers[i] = &columns[i]
		}

		if err := rows.Scan(columnPointers...); err != nil {
			fmt.Println(err)
		}
		m := make(map[string]interface{})
		for i, colName := range cols {
			val := columnPointers[i].(*interface{})
			m[colName] = *val
		}
		store = append(store, m)
	}
	js, err := json.Marshal(&store)
	if err != nil {
		log.Fatal("Failed to marshal rows")
		return nil
	}
	return js
}
