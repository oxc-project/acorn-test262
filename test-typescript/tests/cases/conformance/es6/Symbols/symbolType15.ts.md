symbolType15.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 15,
            "decorators": [],
            "name": "sym",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 15,
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 9,
                "end": 15
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
      "start": 17,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 35,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 35,
            "decorators": [],
            "name": "symObj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 35,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 29,
                "end": 35,
                "typeName": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 35,
                  "decorators": [],
                  "name": "Symbol",
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
      "start": 38,
      "end": 51,
      "expression": {
        "type": "AssignmentExpression",
        "start": 38,
        "end": 50,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 38,
          "end": 44,
          "decorators": [],
          "name": "symObj",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 47,
          "end": 50,
          "decorators": [],
          "name": "sym",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 52,
      "end": 65,
      "expression": {
        "type": "AssignmentExpression",
        "start": 52,
        "end": 64,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 52,
          "end": 55,
          "decorators": [],
          "name": "sym",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 58,
          "end": 64,
          "decorators": [],
          "name": "symObj",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
