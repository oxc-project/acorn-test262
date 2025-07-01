__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 20
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 21,
                    "end": 22
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 21,
                  "end": 22
                }
              ],
              "start": 20,
              "end": 23
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 27,
                      "end": 28
                    },
                    "typeArguments": null,
                    "start": 27,
                    "end": 28
                  },
                  "start": 25,
                  "end": 28
                },
                "start": 24,
                "end": 28
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 33,
                      "end": 34
                    },
                    "typeArguments": null,
                    "start": 33,
                    "end": 34
                  },
                  "start": 31,
                  "end": 34
                },
                "start": 30,
                "end": 34
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 46,
                        "end": 48
                      },
                      "init": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 51,
                          "end": 52
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 55,
                          "end": 56
                        },
                        "start": 51,
                        "end": 56
                      },
                      "definite": false,
                      "start": 46,
                      "end": 56
                    }
                  ],
                  "declare": false,
                  "start": 42,
                  "end": 57
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 66,
                        "end": 68
                      },
                      "init": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 71,
                          "end": 72
                        },
                        "operator": "-",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 75,
                          "end": 76
                        },
                        "start": 71,
                        "end": 76
                      },
                      "definite": false,
                      "start": 66,
                      "end": 76
                    }
                  ],
                  "declare": false,
                  "start": 62,
                  "end": 77
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 86,
                        "end": 88
                      },
                      "init": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 91,
                          "end": 92
                        },
                        "operator": "*",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 95,
                          "end": 96
                        },
                        "start": 91,
                        "end": 96
                      },
                      "definite": false,
                      "start": 86,
                      "end": 96
                    }
                  ],
                  "declare": false,
                  "start": 82,
                  "end": 97
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 106,
                        "end": 108
                      },
                      "init": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 111,
                          "end": 112
                        },
                        "operator": "/",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 115,
                          "end": 116
                        },
                        "start": 111,
                        "end": 116
                      },
                      "definite": false,
                      "start": 106,
                      "end": 116
                    }
                  ],
                  "declare": false,
                  "start": 102,
                  "end": 117
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 129,
                    "end": 130
                  },
                  "start": 122,
                  "end": 131
                }
              ],
              "start": 36,
              "end": 133
            },
            "expression": false,
            "start": 10,
            "end": 133
          },
          "definite": false,
          "start": 4,
          "end": 133
        }
      ],
      "declare": false,
      "start": 0,
      "end": 134
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 134
}
```
