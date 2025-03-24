__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 29,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 12,
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
      "type": "VariableDeclaration",
      "start": 13,
      "end": 19,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 18,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 20,
      "end": 29,
      "expression": {
        "type": "UnaryExpression",
        "start": 20,
        "end": 28,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 27,
          "end": 28,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
