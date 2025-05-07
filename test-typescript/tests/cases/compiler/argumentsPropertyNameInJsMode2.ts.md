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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 30,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 18,
            "end": 28,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 18,
              "end": 27,
              "decorators": [],
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 43,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 32,
        "end": 42,
        "arguments": [
          {
            "type": "Literal",
            "start": 34,
            "end": 35,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 37,
            "end": 38,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 40,
            "end": 41,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 32,
          "end": 33,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
