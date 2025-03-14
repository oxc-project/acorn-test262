arrayAssignmentPatternWithAny.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
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
      "type": "VariableDeclaration",
      "start": 12,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 25,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 25,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 19,
                "end": 25
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
      "start": 27,
      "end": 35,
      "expression": {
        "type": "AssignmentExpression",
        "start": 27,
        "end": 34,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 27,
          "end": 30,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          ],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 33,
          "end": 34,
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
