__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 495,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 22,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "name": "Animal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 22,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 20,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 23,
      "end": 49,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 42,
        "name": "TallThing",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 43,
        "end": 49,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 45,
            "end": 47,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 47,
              "name": "x2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 50,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 67,
        "name": "Giraffe",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 76,
          "end": 82,
          "expression": {
            "type": "Identifier",
            "start": 76,
            "end": 82,
            "name": "Animal",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 84,
          "end": 93,
          "expression": {
            "type": "Identifier",
            "start": 84,
            "end": 93,
            "name": "TallThing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 94,
        "end": 99,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 96,
            "end": 97,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 149,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 148,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 148,
            "name": "f2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 148,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 109,
                "end": 148,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 109,
                  "end": 128,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 110,
                      "end": 127,
                      "name": {
                        "type": "Identifier",
                        "start": 110,
                        "end": 111,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 120,
                        "end": 127,
                        "typeName": {
                          "type": "Identifier",
                          "start": 120,
                          "end": 127,
                          "name": "Giraffe",
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 129,
                    "end": 133,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 130,
                      "end": 133,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 132,
                        "end": 133,
                        "typeName": {
                          "type": "Identifier",
                          "start": 132,
                          "end": 133,
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
                    "start": 135,
                    "end": 139,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 136,
                      "end": 139,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 138,
                        "end": 139,
                        "typeName": {
                          "type": "Identifier",
                          "start": 138,
                          "end": 139,
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 141,
                  "end": 148,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 144,
                    "end": 148
                  }
                }
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
      "start": 151,
      "end": 193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 192,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 192,
            "name": "g2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 192,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 159,
                "end": 192,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 160,
                    "end": 169,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 161,
                      "end": 169,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 163,
                        "end": 169,
                        "typeName": {
                          "type": "Identifier",
                          "start": 163,
                          "end": 169,
                          "name": "Animal",
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
                    "start": 171,
                    "end": 183,
                    "name": "t",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 172,
                      "end": 183,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 174,
                        "end": 183,
                        "typeName": {
                          "type": "Identifier",
                          "start": 174,
                          "end": 183,
                          "name": "TallThing",
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 185,
                  "end": 192,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 188,
                    "end": 192
                  }
                }
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
      "start": 194,
      "end": 202,
      "expression": {
        "type": "AssignmentExpression",
        "start": 194,
        "end": 201,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 194,
          "end": 196,
          "name": "g2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 199,
          "end": 201,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 331,
      "end": 372,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 335,
          "end": 371,
          "id": {
            "type": "Identifier",
            "start": 335,
            "end": 371,
            "name": "h2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 337,
              "end": 371,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 339,
                "end": 371,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 340,
                    "end": 350,
                    "name": "a1",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 342,
                      "end": 350,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 344,
                        "end": 350,
                        "typeName": {
                          "type": "Identifier",
                          "start": 344,
                          "end": 350,
                          "name": "Animal",
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
                    "start": 352,
                    "end": 362,
                    "name": "a2",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 354,
                      "end": 362,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 356,
                        "end": 362,
                        "typeName": {
                          "type": "Identifier",
                          "start": 356,
                          "end": 362,
                          "name": "Animal",
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 364,
                  "end": 371,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 367,
                    "end": 371
                  }
                }
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
      "start": 373,
      "end": 381,
      "expression": {
        "type": "AssignmentExpression",
        "start": 373,
        "end": 380,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 373,
          "end": 375,
          "name": "h2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 378,
          "end": 380,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
