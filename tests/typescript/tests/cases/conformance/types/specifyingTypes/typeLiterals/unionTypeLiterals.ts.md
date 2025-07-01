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
            "name": "simpleUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 57,
                "end": 72
              },
              "start": 55,
              "end": 72
            },
            "start": 44,
            "end": 72
          },
          "init": null,
          "definite": false,
          "start": 44,
          "end": 72
        }
      ],
      "declare": false,
      "start": 40,
      "end": 73
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
            "name": "unionOfUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 92,
                "end": 117
              },
              "start": 90,
              "end": 117
            },
            "start": 78,
            "end": 117
          },
          "init": null,
          "definite": false,
          "start": 78,
          "end": 117
        }
      ],
      "declare": false,
      "start": 74,
      "end": 118
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
            "name": "arrayOfUnions",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
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
                  ],
                  "start": 140,
                  "end": 155
                },
                "start": 139,
                "end": 158
              },
              "start": 137,
              "end": 158
            },
            "start": 124,
            "end": 158
          },
          "init": null,
          "definite": false,
          "start": 124,
          "end": 158
        }
      ],
      "declare": false,
      "start": 120,
      "end": 159
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
            "name": "arrayOfUnions",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 179,
                  "end": 184
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
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
                      ],
                      "start": 185,
                      "end": 200
                    }
                  ],
                  "start": 184,
                  "end": 201
                },
                "start": 179,
                "end": 201
              },
              "start": 177,
              "end": 201
            },
            "start": 164,
            "end": 201
          },
          "init": null,
          "definite": false,
          "start": 164,
          "end": 201
        }
      ],
      "declare": false,
      "start": 160,
      "end": 202
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
            "name": "unionOfFunctionType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 236,
                        "end": 242
                      },
                      "start": 233,
                      "end": 242
                    },
                    "start": 230,
                    "end": 242
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 253,
                        "end": 259
                      },
                      "start": 250,
                      "end": 259
                    },
                    "start": 247,
                    "end": 259
                  }
                ],
                "start": 229,
                "end": 260
              },
              "start": 227,
              "end": 260
            },
            "start": 208,
            "end": 260
          },
          "init": null,
          "definite": false,
          "start": 208,
          "end": 260
        }
      ],
      "declare": false,
      "start": 204,
      "end": 261
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
            "name": "unionOfFunctionType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 293,
                            "end": 299
                          },
                          "start": 291,
                          "end": 299
                        },
                        "start": 289,
                        "end": 299
                      }
                    ],
                    "start": 287,
                    "end": 301
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 310,
                            "end": 316
                          },
                          "start": 308,
                          "end": 316
                        },
                        "start": 306,
                        "end": 316
                      }
                    ],
                    "start": 304,
                    "end": 318
                  }
                ],
                "start": 287,
                "end": 318
              },
              "start": 285,
              "end": 318
            },
            "start": 266,
            "end": 318
          },
          "init": null,
          "definite": false,
          "start": 266,
          "end": 318
        }
      ],
      "declare": false,
      "start": 262,
      "end": 319
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
            "name": "unionOfFunctionType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
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
                    ],
                    "start": 351,
                    "end": 366
                  },
                  "start": 348,
                  "end": 366
                },
                "start": 345,
                "end": 366
              },
              "start": 343,
              "end": 366
            },
            "start": 324,
            "end": 366
          },
          "init": null,
          "definite": false,
          "start": 324,
          "end": 366
        }
      ],
      "declare": false,
      "start": 320,
      "end": 367
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
            "name": "unionOfConstructorType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSConstructorType",
                    "abstract": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 408,
                        "end": 414
                      },
                      "start": 405,
                      "end": 414
                    },
                    "start": 398,
                    "end": 414
                  },
                  {
                    "type": "TSConstructorType",
                    "abstract": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 429,
                        "end": 435
                      },
                      "start": 426,
                      "end": 435
                    },
                    "start": 419,
                    "end": 435
                  }
                ],
                "start": 397,
                "end": 436
              },
              "start": 395,
              "end": 436
            },
            "start": 373,
            "end": 436
          },
          "init": null,
          "definite": false,
          "start": 373,
          "end": 436
        }
      ],
      "declare": false,
      "start": 369,
      "end": 437
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
            "name": "unionOfConstructorType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 476,
                            "end": 482
                          },
                          "start": 474,
                          "end": 482
                        },
                        "start": 468,
                        "end": 482
                      }
                    ],
                    "start": 466,
                    "end": 484
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 497,
                            "end": 503
                          },
                          "start": 495,
                          "end": 503
                        },
                        "start": 489,
                        "end": 503
                      }
                    ],
                    "start": 487,
                    "end": 505
                  }
                ],
                "start": 466,
                "end": 505
              },
              "start": 464,
              "end": 505
            },
            "start": 442,
            "end": 505
          },
          "init": null,
          "definite": false,
          "start": 442,
          "end": 505
        }
      ],
      "declare": false,
      "start": 438,
      "end": 506
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
            "name": "unionOfConstructorType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
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
                    ],
                    "start": 545,
                    "end": 560
                  },
                  "start": 542,
                  "end": 560
                },
                "start": 535,
                "end": 560
              },
              "start": 533,
              "end": 560
            },
            "start": 511,
            "end": 560
          },
          "init": null,
          "definite": false,
          "start": 511,
          "end": 560
        }
      ],
      "declare": false,
      "start": 507,
      "end": 561
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 40,
  "end": 561
}
```
