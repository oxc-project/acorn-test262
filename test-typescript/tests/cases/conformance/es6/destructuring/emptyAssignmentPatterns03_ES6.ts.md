emptyAssignmentPatterns03_ES6.ts
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "optional": false,
          "properties": []
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
            "optional": false,
            "properties": []
          },
          "right": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      }
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
          "optional": false
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
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
