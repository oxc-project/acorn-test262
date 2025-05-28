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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "let",
            "optional": false,
            "typeAnnotation": null
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 14,
      "end": 25,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 24,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
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
          "decorators": [],
          "name": "let",
          "optional": false,
          "typeAnnotation": null
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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 41,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
