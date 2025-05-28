__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 183,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 13,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "value": "use strict",
        "raw": "\"use strict\""
      },
      "directive": "use strict"
    },
    {
      "type": "IfStatement",
      "start": 14,
      "end": 130,
      "test": {
        "type": "Literal",
        "start": 18,
        "end": 22,
        "value": true,
        "raw": "true"
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 24,
        "end": 130,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 30,
            "end": 48,
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 42,
              "decorators": [],
              "name": "foo",
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
              "start": 45,
              "end": 48,
              "body": []
            },
            "expression": false
          },
          {
            "type": "ExpressionStatement",
            "start": 96,
            "end": 102,
            "expression": {
              "type": "CallExpression",
              "start": 96,
              "end": 101,
              "callee": {
                "type": "Identifier",
                "start": 96,
                "end": 99,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "ExpressionStatement",
      "start": 131,
      "end": 137,
      "expression": {
        "type": "CallExpression",
        "start": 131,
        "end": 136,
        "callee": {
          "type": "Identifier",
          "start": 131,
          "end": 134,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
