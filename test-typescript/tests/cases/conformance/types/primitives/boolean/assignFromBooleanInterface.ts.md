assignFromBooleanInterface.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 43,
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
            "type": "Literal",
            "start": 8,
            "end": 12,
            "raw": "true",
            "value": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 14,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 28,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 28,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 21,
                "end": 28,
                "typeName": {
                  "type": "Identifier",
                  "start": 21,
                  "end": 28,
                  "decorators": [],
                  "name": "Boolean",
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
      "start": 30,
      "end": 36,
      "expression": {
        "type": "AssignmentExpression",
        "start": 30,
        "end": 35,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 30,
          "end": 31,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 34,
          "end": 35,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 37,
      "end": 43,
      "expression": {
        "type": "AssignmentExpression",
        "start": 37,
        "end": 42,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 37,
          "end": 38,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 41,
          "end": 42,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
