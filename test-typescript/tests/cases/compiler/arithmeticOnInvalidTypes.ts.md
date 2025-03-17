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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "name": "x",
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
                  "name": "Number",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 28,
            "name": "y",
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
                  "name": "Number",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 38,
            "end": 43,
            "left": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 51,
            "name": "z2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 54,
            "end": 59,
            "left": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 67,
            "name": "z3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 70,
            "end": 75,
            "left": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "*",
            "right": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 83,
            "name": "z4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 86,
            "end": 91,
            "left": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "/",
            "right": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
