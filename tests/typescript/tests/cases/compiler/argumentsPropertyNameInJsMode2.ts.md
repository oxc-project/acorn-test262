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
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 11,
          "end": 12
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 27
            },
            "directive": null,
            "start": 18,
            "end": 28
          }
        ],
        "start": 14,
        "end": 30
      },
      "expression": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 32,
          "end": 33
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 34,
            "end": 35
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 37,
            "end": 38
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 40,
            "end": 41
          }
        ],
        "optional": false,
        "start": 32,
        "end": 42
      },
      "directive": null,
      "start": 32,
      "end": 43
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 43
}
```
