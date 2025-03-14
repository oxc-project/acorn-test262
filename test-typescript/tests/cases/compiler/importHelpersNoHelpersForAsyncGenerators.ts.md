main.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 73,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 73,
        "async": true,
        "body": {
          "type": "BlockStatement",
          "start": 28,
          "end": 73,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 34,
              "end": 42,
              "expression": {
                "type": "AwaitExpression",
                "start": 34,
                "end": 41,
                "argument": {
                  "type": "Literal",
                  "start": 40,
                  "end": 41,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 47,
              "end": 55,
              "expression": {
                "type": "YieldExpression",
                "start": 47,
                "end": 54,
                "argument": {
                  "type": "Literal",
                  "start": 53,
                  "end": 54,
                  "raw": "2",
                  "value": 2
                },
                "delegate": false
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 60,
              "end": 71,
              "expression": {
                "type": "YieldExpression",
                "start": 60,
                "end": 70,
                "argument": {
                  "type": "ArrayExpression",
                  "start": 67,
                  "end": 70,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 68,
                      "end": 69,
                      "raw": "3",
                      "value": 3
                    }
                  ]
                },
                "delegate": true
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": true,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 25,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
tslib.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 10,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 9,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
