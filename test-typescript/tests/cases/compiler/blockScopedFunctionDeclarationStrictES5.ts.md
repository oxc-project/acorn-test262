__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 164,
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
      "end": 131,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 24,
        "end": 131,
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
            "start": 97,
            "end": 103,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 97,
              "end": 102,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 97,
                "end": 100,
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
      "start": 132,
      "end": 138,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 132,
        "end": 137,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 132,
          "end": 135,
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
