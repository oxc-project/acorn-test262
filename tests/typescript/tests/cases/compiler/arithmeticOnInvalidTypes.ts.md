__ESTREE_TEST__:PASS:
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 15,
      "end": 29,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 28,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 30,
      "end": 44,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 43,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 38,
            "end": 43,
            "left": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 60,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 59,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 51,
            "decorators": [],
            "name": "z2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 54,
            "end": 59,
            "left": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 61,
      "end": 76,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 75,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 67,
            "decorators": [],
            "name": "z3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 70,
            "end": 75,
            "left": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "*",
            "right": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 92,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 91,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 83,
            "decorators": [],
            "name": "z4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 86,
            "end": 91,
            "left": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "/",
            "right": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
