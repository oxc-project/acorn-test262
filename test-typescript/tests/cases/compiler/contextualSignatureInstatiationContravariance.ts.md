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
      "end": 61,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 40,
        "name": "Giraffe",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 49,
          "end": 55,
          "expression": {
            "type": "Identifier",
            "start": 49,
            "end": 55,
            "name": "Animal",
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
        "start": 56,
        "end": 61,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 58,
            "end": 59,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
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
      "type": "TSInterfaceDeclaration",
      "start": 62,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 80,
        "name": "Elephant",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 89,
          "end": 95,
          "expression": {
            "type": "Identifier",
            "start": 89,
            "end": 95,
            "name": "Animal",
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
        "start": 96,
        "end": 102,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 98,
            "end": 100,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 100,
              "name": "y2",
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
      "start": 104,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 150,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 150,
            "name": "f2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 110,
              "end": 150,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 112,
                "end": 150,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 112,
                  "end": 130,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 113,
                      "end": 129,
                      "name": {
                        "type": "Identifier",
                        "start": 113,
                        "end": 114,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 123,
                        "end": 129,
                        "typeName": {
                          "type": "Identifier",
                          "start": 123,
                          "end": 129,
                          "name": "Animal",
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
                    "start": 131,
                    "end": 135,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 132,
                      "end": 135,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 134,
                        "end": 135,
                        "typeName": {
                          "type": "Identifier",
                          "start": 134,
                          "end": 135,
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
                    "start": 137,
                    "end": 141,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 138,
                      "end": 141,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 140,
                        "end": 141,
                        "typeName": {
                          "type": "Identifier",
                          "start": 140,
                          "end": 141,
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
                  "start": 143,
                  "end": 150,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 146,
                    "end": 150
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
      "start": 153,
      "end": 195,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 194,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 194,
            "name": "g2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 194,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 161,
                "end": 194,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 162,
                    "end": 172,
                    "name": "g",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 163,
                      "end": 172,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 165,
                        "end": 172,
                        "typeName": {
                          "type": "Identifier",
                          "start": 165,
                          "end": 172,
                          "name": "Giraffe",
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
                    "start": 174,
                    "end": 185,
                    "name": "e",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 175,
                      "end": 185,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 177,
                        "end": 185,
                        "typeName": {
                          "type": "Identifier",
                          "start": 177,
                          "end": 185,
                          "name": "Elephant",
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
                  "start": 187,
                  "end": 194,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 190,
                    "end": 194
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
      "start": 196,
      "end": 204,
      "expression": {
        "type": "AssignmentExpression",
        "start": 196,
        "end": 203,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 196,
          "end": 198,
          "name": "g2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 201,
          "end": 203,
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
      "start": 263,
      "end": 306,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 267,
          "end": 305,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 305,
            "name": "h2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 269,
              "end": 305,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 271,
                "end": 305,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 272,
                    "end": 283,
                    "name": "g1",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 274,
                      "end": 283,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 276,
                        "end": 283,
                        "typeName": {
                          "type": "Identifier",
                          "start": 276,
                          "end": 283,
                          "name": "Giraffe",
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
                    "start": 285,
                    "end": 296,
                    "name": "g2",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 287,
                      "end": 296,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 289,
                        "end": 296,
                        "typeName": {
                          "type": "Identifier",
                          "start": 289,
                          "end": 296,
                          "name": "Giraffe",
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
                  "start": 298,
                  "end": 305,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 301,
                    "end": 305
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
      "start": 307,
      "end": 315,
      "expression": {
        "type": "AssignmentExpression",
        "start": 307,
        "end": 314,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 307,
          "end": 309,
          "name": "h2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 312,
          "end": 314,
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
