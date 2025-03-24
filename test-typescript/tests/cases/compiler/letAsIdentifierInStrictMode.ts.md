__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 56,
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
      "type": "VariableDeclaration",
      "start": 14,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 21,
            "name": "let",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 24,
            "end": 26,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 36,
            "end": 38,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 40,
      "end": 49,
      "expression": {
        "type": "AssignmentExpression",
        "start": 40,
        "end": 48,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 40,
          "end": 43,
          "name": "let",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 46,
          "end": 48,
          "value": 30,
          "raw": "30"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 55,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
