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
      "end": 11,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 10,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 7,
                "end": 10
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 13,
      "end": 27,
      "expression": {
        "type": "AssignmentExpression",
        "start": 14,
        "end": 25,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 14,
          "end": 16,
          "decorators": [],
          "properties": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 19,
          "end": 25,
          "operator": "=",
          "left": {
            "type": "ObjectPattern",
            "start": 19,
            "end": 21,
            "decorators": [],
            "properties": [],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 28,
      "end": 42,
      "expression": {
        "type": "AssignmentExpression",
        "start": 29,
        "end": 40,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 29,
          "end": 31,
          "decorators": [],
          "elements": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 34,
          "end": 40,
          "operator": "=",
          "left": {
            "type": "ArrayPattern",
            "start": 34,
            "end": 36,
            "decorators": [],
            "elements": [],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
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
