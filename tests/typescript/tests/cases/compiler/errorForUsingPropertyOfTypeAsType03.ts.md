__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Color",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 32
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Red",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 43,
                    "end": 46
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 43,
                  "end": 46
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Green",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 56,
                    "end": 61
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 56,
                  "end": 61
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Blue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 71,
                    "end": 75
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 71,
                  "end": 75
                }
              ],
              "start": 33,
              "end": 81
            },
            "const": false,
            "declare": false,
            "start": 22,
            "end": 81
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 94
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Color",
                "optional": false,
                "typeAnnotation": null,
                "start": 97,
                "end": 102
              },
              "typeArguments": null,
              "start": 97,
              "end": 102
            },
            "declare": false,
            "start": 87,
            "end": 103
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 115
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Color",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 130
              },
              "typeArguments": null,
              "start": 118,
              "end": 130
            },
            "declare": false,
            "start": 108,
            "end": 131
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Color",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 145,
                            "end": 150
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Red",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 151,
                            "end": 154
                          },
                          "start": 145,
                          "end": 154
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 155,
                          "end": 163
                        },
                        "start": 145,
                        "end": 163
                      },
                      "typeArguments": null,
                      "start": 145,
                      "end": 163
                    },
                    "start": 143,
                    "end": 163
                  },
                  "start": 141,
                  "end": 163
                },
                "init": null,
                "definite": false,
                "start": 141,
                "end": 163
              }
            ],
            "declare": false,
            "start": 137,
            "end": 164
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Color",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 177,
                            "end": 182
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Red",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 183,
                            "end": 186
                          },
                          "start": 177,
                          "end": 186
                        },
                        "typeArguments": null,
                        "start": 177,
                        "end": 186
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "toString",
                          "raw": "\"toString\"",
                          "start": 187,
                          "end": 197
                        },
                        "start": 187,
                        "end": 197
                      },
                      "start": 177,
                      "end": 198
                    },
                    "start": 175,
                    "end": 198
                  },
                  "start": 173,
                  "end": 198
                },
                "init": null,
                "definite": false,
                "start": 173,
                "end": 198
              }
            ],
            "declare": false,
            "start": 169,
            "end": 199
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Color",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 212,
                            "end": 217
                          },
                          "typeArguments": null,
                          "start": 212,
                          "end": 217
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Red",
                            "raw": "\"Red\"",
                            "start": 218,
                            "end": 223
                          },
                          "start": 218,
                          "end": 223
                        },
                        "start": 212,
                        "end": 224
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "toString",
                          "raw": "\"toString\"",
                          "start": 225,
                          "end": 235
                        },
                        "start": 225,
                        "end": 235
                      },
                      "start": 212,
                      "end": 236
                    },
                    "start": 210,
                    "end": 236
                  },
                  "start": 208,
                  "end": 236
                },
                "init": null,
                "definite": false,
                "start": 208,
                "end": 236
              }
            ],
            "declare": false,
            "start": 204,
            "end": 237
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Color",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 348,
                            "end": 353
                          },
                          "typeArguments": null,
                          "start": 341,
                          "end": 353
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Red",
                            "raw": "\"Red\"",
                            "start": 355,
                            "end": 360
                          },
                          "start": 355,
                          "end": 360
                        },
                        "start": 340,
                        "end": 361
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "toString",
                          "raw": "\"toString\"",
                          "start": 362,
                          "end": 372
                        },
                        "start": 362,
                        "end": 372
                      },
                      "start": 340,
                      "end": 373
                    },
                    "start": 338,
                    "end": 373
                  },
                  "start": 336,
                  "end": 373
                },
                "init": null,
                "definite": false,
                "start": 336,
                "end": 373
              }
            ],
            "declare": false,
            "start": 332,
            "end": 374
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 388,
                            "end": 390
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Red",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 391,
                            "end": 394
                          },
                          "start": 388,
                          "end": 394
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 395,
                          "end": 403
                        },
                        "start": 388,
                        "end": 403
                      },
                      "typeArguments": null,
                      "start": 388,
                      "end": 403
                    },
                    "start": 386,
                    "end": 403
                  },
                  "start": 384,
                  "end": 403
                },
                "init": null,
                "definite": false,
                "start": 384,
                "end": 403
              }
            ],
            "declare": false,
            "start": 380,
            "end": 404
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 417,
                            "end": 419
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Red",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 420,
                            "end": 423
                          },
                          "start": 417,
                          "end": 423
                        },
                        "typeArguments": null,
                        "start": 417,
                        "end": 423
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "toString",
                          "raw": "\"toString\"",
                          "start": 424,
                          "end": 434
                        },
                        "start": 424,
                        "end": 434
                      },
                      "start": 417,
                      "end": 435
                    },
                    "start": 415,
                    "end": 435
                  },
                  "start": 413,
                  "end": 435
                },
                "init": null,
                "definite": false,
                "start": 413,
                "end": 435
              }
            ],
            "declare": false,
            "start": 409,
            "end": 436
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 449,
                            "end": 451
                          },
                          "typeArguments": null,
                          "start": 449,
                          "end": 451
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Red",
                            "raw": "\"Red\"",
                            "start": 452,
                            "end": 457
                          },
                          "start": 452,
                          "end": 457
                        },
                        "start": 449,
                        "end": 458
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "toString",
                          "raw": "\"toString\"",
                          "start": 459,
                          "end": 469
                        },
                        "start": 459,
                        "end": 469
                      },
                      "start": 449,
                      "end": 470
                    },
                    "start": 447,
                    "end": 470
                  },
                  "start": 445,
                  "end": 470
                },
                "init": null,
                "definite": false,
                "start": 445,
                "end": 470
              }
            ],
            "declare": false,
            "start": 441,
            "end": 471
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 485,
                            "end": 487
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Red",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 488,
                            "end": 491
                          },
                          "start": 485,
                          "end": 491
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 492,
                          "end": 500
                        },
                        "start": 485,
                        "end": 500
                      },
                      "typeArguments": null,
                      "start": 485,
                      "end": 500
                    },
                    "start": 483,
                    "end": 500
                  },
                  "start": 481,
                  "end": 500
                },
                "init": null,
                "definite": false,
                "start": 481,
                "end": 500
              }
            ],
            "declare": false,
            "start": 477,
            "end": 501
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 514,
                            "end": 516
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Red",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 517,
                            "end": 520
                          },
                          "start": 514,
                          "end": 520
                        },
                        "typeArguments": null,
                        "start": 514,
                        "end": 520
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "toString",
                          "raw": "\"toString\"",
                          "start": 521,
                          "end": 531
                        },
                        "start": 521,
                        "end": 531
                      },
                      "start": 514,
                      "end": 532
                    },
                    "start": 512,
                    "end": 532
                  },
                  "start": 510,
                  "end": 532
                },
                "init": null,
                "definite": false,
                "start": 510,
                "end": 532
              }
            ],
            "declare": false,
            "start": 506,
            "end": 533
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 546,
                            "end": 548
                          },
                          "typeArguments": null,
                          "start": 546,
                          "end": 548
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Red",
                            "raw": "\"Red\"",
                            "start": 549,
                            "end": 554
                          },
                          "start": 549,
                          "end": 554
                        },
                        "start": 546,
                        "end": 555
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "toString",
                          "raw": "\"toString\"",
                          "start": 556,
                          "end": 566
                        },
                        "start": 556,
                        "end": 566
                      },
                      "start": 546,
                      "end": 567
                    },
                    "start": 544,
                    "end": 567
                  },
                  "start": 542,
                  "end": 567
                },
                "init": null,
                "definite": false,
                "start": 542,
                "end": 567
              }
            ],
            "declare": false,
            "start": 538,
            "end": 568
          }
        ],
        "start": 16,
        "end": 570
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 570
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 570
}
```
