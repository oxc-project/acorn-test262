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
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": true,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
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
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
  "end": 9,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 9,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
