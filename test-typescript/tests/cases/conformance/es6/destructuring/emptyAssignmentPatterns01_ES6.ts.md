emptyAssignmentPatterns01_ES6.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 32,
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
      "end": 22,
      "expression": {
        "type": "AssignmentExpression",
        "start": 14,
        "end": 20,
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
          "type": "Identifier",
          "start": 19,
          "end": 20,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 23,
      "end": 32,
      "expression": {
        "type": "AssignmentExpression",
        "start": 24,
        "end": 30,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 24,
          "end": 26,
          "decorators": [],
          "elements": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 29,
          "end": 30,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
