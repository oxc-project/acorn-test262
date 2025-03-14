parserAccessors10.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 34,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "v",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 34,
            "properties": [
              {
                "type": "Property",
                "start": 12,
                "end": 32,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 26,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 26,
                  "end": 32,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 29,
                    "end": 32,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
