__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 68,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
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
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 15,
      "end": 22,
      "expression": {
        "type": "AssignmentExpression",
        "start": 15,
        "end": 21,
        "operator": "/=",
        "left": {
          "type": "Identifier",
          "start": 15,
          "end": 16,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 20,
          "end": 21,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 41,
      "end": 49,
      "expression": {
        "type": "AssignmentExpression",
        "start": 41,
        "end": 48,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 41,
          "end": 42,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 45,
          "end": 48,
          "value": null,
          "raw": "/=/",
          "regex": {
            "flags": "",
            "pattern": "="
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
