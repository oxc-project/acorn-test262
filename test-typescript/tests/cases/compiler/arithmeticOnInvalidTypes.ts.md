arithmeticOnInvalidTypes.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 92,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 7,
                "end": 13,
                "typeName": {
                  "type": "Identifier",
                  "start": 7,
                  "end": 13,
                  "decorators": [],
                  "name": "Number",
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
      "type": "VariableDeclaration",
      "start": 15,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 28,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 22,
                "end": 28,
                "typeName": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 28,
                  "decorators": [],
                  "name": "Number",
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
      "type": "VariableDeclaration",
      "start": 30,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 38,
            "end": 43,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "y",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 59,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 51,
            "decorators": [],
            "name": "z2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 54,
            "end": 59,
            "operator": "-",
            "left": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "y",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 61,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 75,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 67,
            "decorators": [],
            "name": "z3",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 70,
            "end": 75,
            "operator": "*",
            "left": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "y",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 92,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 91,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 83,
            "decorators": [],
            "name": "z4",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 86,
            "end": 91,
            "operator": "/",
            "left": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "y",
              "optional": false
            }
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
