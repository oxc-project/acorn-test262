__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 419,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 22,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 22,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 20,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 23,
      "end": 61,
      "body": {
        "type": "TSInterfaceBody",
        "start": 56,
        "end": 61,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 58,
            "end": 59,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 49,
          "end": 55,
          "expression": {
            "type": "Identifier",
            "start": 49,
            "end": 55,
            "decorators": [],
            "name": "Animal",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 40,
        "decorators": [],
        "name": "Giraffe",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 62,
      "end": 102,
      "body": {
        "type": "TSInterfaceBody",
        "start": 96,
        "end": 102,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 98,
            "end": 100,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 100,
              "decorators": [],
              "name": "y2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 89,
          "end": 95,
          "expression": {
            "type": "Identifier",
            "start": 89,
            "end": 95,
            "decorators": [],
            "name": "Animal",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 80,
        "decorators": [],
        "name": "Elephant",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 104,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 150,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 150,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 110,
              "end": 150,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 112,
                "end": 150,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 131,
                    "end": 135,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 132,
                      "end": 135,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 134,
                        "end": 135,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 134,
                          "end": 135,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 137,
                    "end": 141,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 138,
                      "end": 141,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 140,
                        "end": 141,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 140,
                          "end": 141,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 143,
                  "end": 150,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 146,
                    "end": 150
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 112,
                  "end": 130,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 113,
                      "end": 129,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 123,
                        "end": 129,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 123,
                          "end": 129,
                          "decorators": [],
                          "name": "Animal",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 113,
                        "end": 114,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
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
      "start": 153,
      "end": 195,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 194,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 194,
            "decorators": [],
            "name": "g2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 194,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 161,
                "end": 194,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 162,
                    "end": 172,
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 163,
                      "end": 172,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 165,
                        "end": 172,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 165,
                          "end": 172,
                          "decorators": [],
                          "name": "Giraffe",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 174,
                    "end": 185,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 175,
                      "end": 185,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 177,
                        "end": 185,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 177,
                          "end": 185,
                          "decorators": [],
                          "name": "Elephant",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 187,
                  "end": 194,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 190,
                    "end": 194
                  }
                },
                "typeParameters": null
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
      "start": 196,
      "end": 204,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 196,
        "end": 203,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 196,
          "end": 198,
          "decorators": [],
          "name": "g2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 201,
          "end": 203,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 263,
      "end": 306,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 267,
          "end": 305,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 305,
            "decorators": [],
            "name": "h2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 269,
              "end": 305,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 271,
                "end": 305,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 272,
                    "end": 283,
                    "decorators": [],
                    "name": "g1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 274,
                      "end": 283,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 276,
                        "end": 283,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 276,
                          "end": 283,
                          "decorators": [],
                          "name": "Giraffe",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 285,
                    "end": 296,
                    "decorators": [],
                    "name": "g2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 287,
                      "end": 296,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 289,
                        "end": 296,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 289,
                          "end": 296,
                          "decorators": [],
                          "name": "Giraffe",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 298,
                  "end": 305,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 301,
                    "end": 305
                  }
                },
                "typeParameters": null
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
      "start": 307,
      "end": 315,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 307,
        "end": 314,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 307,
          "end": 309,
          "decorators": [],
          "name": "h2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 312,
          "end": 314,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
