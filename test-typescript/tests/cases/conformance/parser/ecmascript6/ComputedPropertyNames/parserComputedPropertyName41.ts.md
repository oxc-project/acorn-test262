parserComputedPropertyName41.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 31,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 31,
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
            "end": 31,
            "properties": [
              {
                "type": "Property",
                "start": 14,
                "end": 29,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 15,
                  "end": 22,
                  "operator": "in",
                  "left": {
                    "type": "Literal",
                    "start": 15,
                    "end": 16,
                    "raw": "0",
                    "value": 0
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 20,
                    "end": 22,
                    "elements": []
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 25,
                  "end": 29,
                  "raw": "true",
                  "value": true
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
