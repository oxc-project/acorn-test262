validUndefinedValues.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 39,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 23,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 23,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 23,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 7,
                "end": 23,
                "exprName": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 23,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false
                }
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
      "start": 25,
      "end": 39,
      "expression": {
        "type": "AssignmentExpression",
        "start": 25,
        "end": 38,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 25,
          "end": 26,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 29,
          "end": 38,
          "decorators": [],
          "name": "undefined",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
