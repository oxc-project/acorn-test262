__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 73,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 25,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": true,
        "async": true,
        "params": [],
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
                  "value": 1,
                  "raw": "1"
                }
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 47,
              "end": 55,
              "expression": {
                "type": "YieldExpression",
                "start": 47,
                "end": 54,
                "delegate": false,
                "argument": {
                  "type": "Literal",
                  "start": 53,
                  "end": 54,
                  "value": 2,
                  "raw": "2"
                }
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 60,
              "end": 71,
              "expression": {
                "type": "YieldExpression",
                "start": 60,
                "end": 70,
                "delegate": true,
                "argument": {
                  "type": "ArrayExpression",
                  "start": 67,
                  "end": 70,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 68,
                      "end": 69,
                      "value": 3,
                      "raw": "3"
                    }
                  ]
                }
              },
              "directive": null
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
