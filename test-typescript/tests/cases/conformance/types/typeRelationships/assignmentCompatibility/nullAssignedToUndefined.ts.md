nullAssignedToUndefined.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 81,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 24,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 8,
            "end": 24,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 8,
              "end": 17,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 20,
              "end": 24,
              "raw": "null",
              "value": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 66,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 65,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 58,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 58,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 42,
                "end": 58,
                "exprName": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 58,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 61,
            "end": 65,
            "raw": "null",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
