__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 96,
  "end": 142,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 96,
      "end": 142,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 119,
        "decorators": [],
        "name": "isLessThanFive",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 120,
          "end": 121,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 123,
        "end": 142,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 127,
            "end": 140,
            "argument": {
              "type": "BinaryExpression",
              "start": 134,
              "end": 139,
              "left": {
                "type": "Identifier",
                "start": 134,
                "end": 135,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 138,
                "end": 139,
                "value": 5,
                "raw": "5"
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
