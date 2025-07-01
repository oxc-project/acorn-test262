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
        "name": "isLessThanFive",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 119
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 120,
          "end": 121
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 134,
                "end": 135
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 138,
                "end": 139
              },
              "start": 134,
              "end": 139
            },
            "start": 127,
            "end": 140
          }
        ],
        "start": 123,
        "end": 142
      },
      "expression": false,
      "start": 96,
      "end": 142
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 96,
  "end": 142
}
```
