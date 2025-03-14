parserES5ComputedPropertyName3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 22,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 21,
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
            "end": 21,
            "properties": [
              {
                "type": "Property",
                "start": 10,
                "end": 19,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 11,
                  "end": 12,
                  "decorators": [],
                  "name": "e",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 13,
                  "end": 19,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 16,
                    "end": 19,
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
