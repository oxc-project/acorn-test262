__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 40,
  "end": 561,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 40,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 72,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 72,
            "name": "simpleUnion",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 72,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 57,
                "end": 72,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 57,
                    "end": 63
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 66,
                    "end": 72
                  }
                ]
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
      "start": 74,
      "end": 118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 117,
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 117,
            "name": "unionOfUnion",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 117,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 92,
                "end": 117,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 92,
                    "end": 98
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 101,
                    "end": 107
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 110,
                    "end": 117
                  }
                ]
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
      "start": 120,
      "end": 159,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 158,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 158,
            "name": "arrayOfUnions",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 137,
              "end": 158,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 139,
                "end": 158,
                "elementType": {
                  "type": "TSUnionType",
                  "start": 140,
                  "end": 155,
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 140,
                      "end": 146
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 149,
                      "end": 155
                    }
                  ]
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
      "start": 160,
      "end": 202,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 164,
          "end": 201,
          "id": {
            "type": "Identifier",
            "start": 164,
            "end": 201,
            "name": "arrayOfUnions",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 201,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 179,
                "end": 201,
                "typeName": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 184,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 184,
                  "end": 201,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 185,
                      "end": 200,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 185,
                          "end": 191
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 194,
                          "end": 200
                        }
                      ]
                    }
                  ]
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
      "start": 204,
      "end": 261,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 208,
          "end": 260,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 260,
            "name": "unionOfFunctionType",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 227,
              "end": 260,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 229,
                "end": 260,
                "types": [
                  {
                    "type": "TSFunctionType",
                    "start": 230,
                    "end": 242,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 233,
                      "end": 242,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 236,
                        "end": 242
                      }
                    }
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 247,
                    "end": 259,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 250,
                      "end": 259,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 253,
                        "end": 259
                      }
                    }
                  }
                ]
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
      "start": 262,
      "end": 319,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 266,
          "end": 318,
          "id": {
            "type": "Identifier",
            "start": 266,
            "end": 318,
            "name": "unionOfFunctionType",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 285,
              "end": 318,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 287,
                "end": 318,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 287,
                    "end": 301,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 289,
                        "end": 299,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 291,
                          "end": 299,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 293,
                            "end": 299
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 304,
                    "end": 318,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 306,
                        "end": 316,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 308,
                          "end": 316,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 310,
                            "end": 316
                          }
                        }
                      }
                    ]
                  }
                ]
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
      "start": 320,
      "end": 367,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 324,
          "end": 366,
          "id": {
            "type": "Identifier",
            "start": 324,
            "end": 366,
            "name": "unionOfFunctionType",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 343,
              "end": 366,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 345,
                "end": 366,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 348,
                  "end": 366,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 351,
                    "end": 366,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 351,
                        "end": 357
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 360,
                        "end": 366
                      }
                    ]
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
      "start": 369,
      "end": 437,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 373,
          "end": 436,
          "id": {
            "type": "Identifier",
            "start": 373,
            "end": 436,
            "name": "unionOfConstructorType",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 395,
              "end": 436,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 397,
                "end": 436,
                "types": [
                  {
                    "type": "TSConstructorType",
                    "start": 398,
                    "end": 414,
                    "abstract": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 405,
                      "end": 414,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 408,
                        "end": 414
                      }
                    }
                  },
                  {
                    "type": "TSConstructorType",
                    "start": 419,
                    "end": 435,
                    "abstract": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 426,
                      "end": 435,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 429,
                        "end": 435
                      }
                    }
                  }
                ]
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
      "start": 438,
      "end": 506,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 442,
          "end": 505,
          "id": {
            "type": "Identifier",
            "start": 442,
            "end": 505,
            "name": "unionOfConstructorType",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 464,
              "end": 505,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 466,
                "end": 505,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 466,
                    "end": 484,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 468,
                        "end": 482,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 474,
                          "end": 482,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 476,
                            "end": 482
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 487,
                    "end": 505,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 489,
                        "end": 503,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 495,
                          "end": 503,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 497,
                            "end": 503
                          }
                        }
                      }
                    ]
                  }
                ]
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
      "start": 507,
      "end": 561,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 511,
          "end": 560,
          "id": {
            "type": "Identifier",
            "start": 511,
            "end": 560,
            "name": "unionOfConstructorType",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 533,
              "end": 560,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 535,
                "end": 560,
                "abstract": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 542,
                  "end": 560,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 545,
                    "end": 560,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 545,
                        "end": 551
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 554,
                        "end": 560
                      }
                    ]
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
