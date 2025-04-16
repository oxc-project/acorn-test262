__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 134,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 134,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 133,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 10,
            "end": 133,
            "id": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "name": "f",
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
                "start": 24,
                "end": 28,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 25,
                  "end": 28,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 27,
                    "end": 28,
                    "typeName": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 28,
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
                "start": 30,
                "end": 34,
                "name": "b",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 31,
                  "end": 34,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 33,
                    "end": 34,
                    "typeName": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 34,
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
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 36,
              "end": 133,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 42,
                  "end": 57,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 46,
                      "end": 56,
                      "id": {
                        "type": "Identifier",
                        "start": 46,
                        "end": 48,
                        "name": "z1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "BinaryExpression",
                        "start": 51,
                        "end": 56,
                        "left": {
                          "type": "Identifier",
                          "start": 51,
                          "end": 52,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 55,
                          "end": 56,
                          "name": "b",
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
                  "start": 62,
                  "end": 77,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 66,
                      "end": 76,
                      "id": {
                        "type": "Identifier",
                        "start": 66,
                        "end": 68,
                        "name": "z2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "BinaryExpression",
                        "start": 71,
                        "end": 76,
                        "left": {
                          "type": "Identifier",
                          "start": 71,
                          "end": 72,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "-",
                        "right": {
                          "type": "Identifier",
                          "start": 75,
                          "end": 76,
                          "name": "b",
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
                  "start": 82,
                  "end": 97,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 86,
                      "end": 96,
                      "id": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 88,
                        "name": "z3",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "BinaryExpression",
                        "start": 91,
                        "end": 96,
                        "left": {
                          "type": "Identifier",
                          "start": 91,
                          "end": 92,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "*",
                        "right": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 96,
                          "name": "b",
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
                  "start": 102,
                  "end": 117,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 106,
                      "end": 116,
                      "id": {
                        "type": "Identifier",
                        "start": 106,
                        "end": 108,
                        "name": "z4",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "BinaryExpression",
                        "start": 111,
                        "end": 116,
                        "left": {
                          "type": "Identifier",
                          "start": 111,
                          "end": 112,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "/",
                        "right": {
                          "type": "Identifier",
                          "start": 115,
                          "end": 116,
                          "name": "b",
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
                  "type": "ReturnStatement",
                  "start": 122,
                  "end": 131,
                  "argument": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 130,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 20,
              "end": 23,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 21,
                  "end": 22,
                  "name": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 22,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "returnType": null
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
