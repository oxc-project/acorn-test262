iterableArrayPattern22.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 32,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 31,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 4,
            "end": 10,
            "decorators": [],
            "elements": [
              {
                "type": "RestElement",
                "start": 5,
                "end": 9,
                "argument": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 9,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 13,
            "end": 31,
            "properties": [
              {
                "type": "Property",
                "start": 15,
                "end": 20,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 15,
                  "end": 16,
                  "raw": "0",
                  "value": 0
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 18,
                  "end": 20,
                  "raw": "\"\"",
                  "value": ""
                }
              },
              {
                "type": "Property",
                "start": 22,
                "end": 29,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 22,
                  "end": 23,
                  "raw": "1",
                  "value": 1
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
