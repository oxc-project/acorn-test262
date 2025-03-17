__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 155,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 154,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "ff",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 48,
          "end": 52,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 49,
            "end": 52,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 51,
              "end": 52,
              "typeName": {
                "type": "Identifier",
                "start": 51,
                "end": 52,
                "name": "T",
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
        {
          "type": "Identifier",
          "start": 54,
          "end": 58,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 55,
            "end": 58,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 57,
              "end": 58,
              "typeName": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 154,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 66,
            "end": 80,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 70,
                "end": 79,
                "id": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 79,
                  "name": "z",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 71,
                    "end": 79,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 73,
                      "end": 79,
                      "typeName": {
                        "type": "Identifier",
                        "start": 73,
                        "end": 79,
                        "name": "Object",
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
            "type": "ExpressionStatement",
            "start": 85,
            "end": 91,
            "expression": {
              "type": "AssignmentExpression",
              "start": 85,
              "end": 90,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 85,
                "end": 86,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 89,
                "end": 90,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 103,
            "end": 109,
            "expression": {
              "type": "AssignmentExpression",
              "start": 103,
              "end": 108,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 107,
                "end": 108,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 121,
            "end": 127,
            "expression": {
              "type": "AssignmentExpression",
              "start": 121,
              "end": 126,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 121,
                "end": 122,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 125,
                "end": 126,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 139,
            "end": 145,
            "expression": {
              "type": "AssignmentExpression",
              "start": 139,
              "end": 144,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 139,
                "end": 140,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 143,
                "end": 144,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 47,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 28,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 22,
              "end": 28,
              "typeName": {
                "type": "Identifier",
                "start": 22,
                "end": 28,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 30,
            "end": 46,
            "name": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 40,
              "end": 46,
              "typeName": {
                "type": "Identifier",
                "start": 40,
                "end": 46,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
