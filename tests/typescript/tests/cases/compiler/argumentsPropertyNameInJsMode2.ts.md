__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 43,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
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
          "start": 11,
          "end": 12,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 30,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 18,
            "end": 28,
            "expression": {
              "type": "Identifier",
              "start": 18,
              "end": 27,
              "decorators": [],
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 43,
      "expression": {
        "type": "CallExpression",
        "start": 32,
        "end": 42,
        "callee": {
          "type": "Identifier",
          "start": 32,
          "end": 33,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 34,
            "end": 35,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 37,
            "end": 38,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 40,
            "end": 41,
            "value": 3,
            "raw": "3"
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
