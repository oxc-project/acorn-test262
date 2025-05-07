__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
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
      "type": "VariableDeclaration",
      "start": 14,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 41,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 22,
            "end": 41,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 38,
              "end": 41,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 35,
              "decorators": [],
              "name": "eval",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
