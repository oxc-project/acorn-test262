__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 80,
  "end": 227,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 80,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 90,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 93,
        "end": 110,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 99,
            "end": 108,
            "argument": {
              "type": "Literal",
              "start": 106,
              "end": 107,
              "value": 5,
              "raw": "5"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 188,
      "end": 227,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 199,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 202,
        "end": 227,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 208,
            "end": 225,
            "argument": {
              "type": "LogicalExpression",
              "start": 215,
              "end": 224,
              "left": {
                "type": "Literal",
                "start": 215,
                "end": 216,
                "value": 5,
                "raw": "5"
              },
              "operator": "||",
              "right": {
                "type": "Literal",
                "start": 220,
                "end": 224,
                "value": true,
                "raw": "true"
              }
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
