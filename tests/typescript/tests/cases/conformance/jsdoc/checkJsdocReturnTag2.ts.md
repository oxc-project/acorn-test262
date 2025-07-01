__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 90
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 106,
              "end": 107
            },
            "start": 99,
            "end": 108
          }
        ],
        "start": 93,
        "end": 110
      },
      "expression": false,
      "start": 80,
      "end": 110
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 199
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 215,
                "end": 216
              },
              "operator": "||",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 220,
                "end": 224
              },
              "start": 215,
              "end": 224
            },
            "start": 208,
            "end": 225
          }
        ],
        "start": 202,
        "end": 227
      },
      "expression": false,
      "start": 188,
      "end": 227
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 80,
  "end": 227
}
```
