__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "name": "let",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 10,
            "end": 12,
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
      "start": 14,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 24,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 22,
            "end": 24,
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
      "start": 26,
      "end": 35,
      "expression": {
        "type": "AssignmentExpression",
        "start": 26,
        "end": 34,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 26,
          "end": 29,
          "name": "let",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 32,
          "end": 34,
          "value": 30,
          "raw": "30"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 41,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
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
