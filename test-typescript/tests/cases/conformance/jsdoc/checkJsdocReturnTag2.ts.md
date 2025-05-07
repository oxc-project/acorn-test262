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
      "async": false,
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
              "raw": "5",
              "value": 5,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 90,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 188,
      "end": 227,
      "async": false,
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
              "operator": "||",
              "left": {
                "type": "Literal",
                "start": 215,
                "end": 216,
                "raw": "5",
                "value": 5,
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Literal",
                "start": 220,
                "end": 224,
                "raw": "true",
                "value": true,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 199,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
