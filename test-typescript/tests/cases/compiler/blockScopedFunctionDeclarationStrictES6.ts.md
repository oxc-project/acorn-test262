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
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "raw": "\"use strict\"",
        "value": "use strict",
        "regex": null,
        "bigint": null
      }
    },
    {
      "type": "IfStatement",
      "start": 14,
      "end": 130,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 24,
        "end": 130,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 30,
            "end": 48,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 45,
              "end": 48,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 42,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "ExpressionStatement",
            "start": 96,
            "end": 102,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 96,
              "end": 101,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 96,
                "end": 99,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 18,
        "end": 22,
        "raw": "true",
        "value": true,
        "regex": null,
        "bigint": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 131,
      "end": 137,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 131,
        "end": 136,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 131,
          "end": 134,
          "decorators": [],
          "name": "foo",
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
