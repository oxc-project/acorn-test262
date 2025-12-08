__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Query",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 10
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "container",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HTMLElement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 28,
                  "end": 39
                },
                "typeArguments": null,
                "start": 28,
                "end": 39
              },
              "start": 26,
              "end": 39
            },
            "start": 17,
            "end": 39
          },
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 50
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 52,
                  "end": 55
                },
                "start": 52,
                "end": 57
              },
              "start": 50,
              "end": 57
            },
            "value": null,
            "start": 43,
            "end": 57
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 72
                },
                "typeArguments": null,
                "start": 67,
                "end": 72
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HTMLElement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 77,
                  "end": 88
                },
                "typeArguments": null,
                "start": 77,
                "end": 88
              },
              {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "HTMLElement",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 93,
                    "end": 104
                  },
                  "typeArguments": null,
                  "start": 93,
                  "end": 104
                },
                "start": 93,
                "end": 106
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 111,
                  "end": 118
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "HTMLElement",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 119,
                          "end": 130
                        },
                        "typeArguments": null,
                        "start": 119,
                        "end": 130
                      },
                      "start": 119,
                      "end": 132
                    }
                  ],
                  "start": 118,
                  "end": 133
                },
                "start": 111,
                "end": 133
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 145
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "HTMLElement",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 146,
                        "end": 157
                      },
                      "typeArguments": null,
                      "start": 146,
                      "end": 157
                    }
                  ],
                  "start": 145,
                  "end": 158
                },
                "start": 138,
                "end": 158
              },
              {
                "type": "TSNullKeyword",
                "start": 163,
                "end": 167
              }
            ],
            "start": 65,
            "end": 167
          },
          "start": 60,
          "end": 167
        },
        "start": 13,
        "end": 167
      },
      "declare": false,
      "start": 0,
      "end": 168
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Queries",
        "optional": false,
        "typeAnnotation": null,
        "start": 180,
        "end": 187
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 196,
                    "end": 202
                  },
                  "start": 194,
                  "end": 202
                },
                "start": 193,
                "end": 202
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Query",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 205,
                  "end": 210
                },
                "typeArguments": null,
                "start": 205,
                "end": 210
              },
              "start": 203,
              "end": 210
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 192,
            "end": 211
          }
        ],
        "start": 188,
        "end": 213
      },
      "declare": false,
      "start": 170,
      "end": 213
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FindByText",
        "optional": false,
        "typeAnnotation": null,
        "start": 220,
        "end": 230
      },
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
              "start": 231,
              "end": 232
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HTMLElement",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 252
              },
              "typeArguments": null,
              "start": 241,
              "end": 252
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HTMLElement",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 266
              },
              "typeArguments": null,
              "start": 255,
              "end": 266
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 231,
            "end": 266
          }
        ],
        "start": 230,
        "end": 267
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "container",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HTMLElement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 285,
                  "end": 296
                },
                "typeArguments": null,
                "start": 285,
                "end": 296
              },
              "start": 283,
              "end": 296
            },
            "start": 274,
            "end": 296
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "text",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 306,
                "end": 312
              },
              "start": 304,
              "end": 312
            },
            "start": 300,
            "end": 312
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 326
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 327,
                    "end": 328
                  },
                  "typeArguments": null,
                  "start": 327,
                  "end": 328
                }
              ],
              "start": 326,
              "end": 329
            },
            "start": 319,
            "end": 329
          },
          "start": 316,
          "end": 329
        },
        "start": 270,
        "end": 329
      },
      "declare": false,
      "start": 215,
      "end": 330
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "findByLabelText",
        "optional": false,
        "typeAnnotation": null,
        "start": 349,
        "end": 364
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 365,
              "end": 366
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HTMLElement",
                "optional": false,
                "typeAnnotation": null,
                "start": 375,
                "end": 386
              },
              "typeArguments": null,
              "start": 375,
              "end": 386
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HTMLElement",
                "optional": false,
                "typeAnnotation": null,
                "start": 389,
                "end": 400
              },
              "typeArguments": null,
              "start": 389,
              "end": 400
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 365,
            "end": 400
          }
        ],
        "start": 364,
        "end": 401
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 408,
            "end": 412
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Parameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 414,
                "end": 424
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FindByText",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 425,
                      "end": 435
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 436,
                            "end": 437
                          },
                          "typeArguments": null,
                          "start": 436,
                          "end": 437
                        }
                      ],
                      "start": 435,
                      "end": 438
                    },
                    "start": 425,
                    "end": 438
                  }
                ],
                "start": 424,
                "end": 439
              },
              "start": 414,
              "end": 439
            },
            "start": 412,
            "end": 439
          },
          "value": null,
          "start": 405,
          "end": 439
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 443,
            "end": 453
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FindByText",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 454,
                  "end": 464
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 465,
                        "end": 466
                      },
                      "typeArguments": null,
                      "start": 465,
                      "end": 466
                    }
                  ],
                  "start": 464,
                  "end": 467
                },
                "start": 454,
                "end": 467
              }
            ],
            "start": 453,
            "end": 468
          },
          "start": 443,
          "end": 468
        },
        "start": 441,
        "end": 468
      },
      "body": null,
      "expression": false,
      "start": 332,
      "end": 469
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "queries",
            "optional": false,
            "typeAnnotation": null,
            "start": 477,
            "end": 484
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "findByLabelText",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 491,
                  "end": 506
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "findByLabelText",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 491,
                  "end": 506
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 491,
                "end": 506
              }
            ],
            "start": 487,
            "end": 509
          },
          "definite": false,
          "start": 477,
          "end": 509
        }
      ],
      "declare": false,
      "start": 471,
      "end": 510
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MapQueries",
        "optional": false,
        "typeAnnotation": null,
        "start": 517,
        "end": 527
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null,
              "start": 528,
              "end": 529
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Queries",
                "optional": false,
                "typeAnnotation": null,
                "start": 538,
                "end": 545
              },
              "typeArguments": null,
              "start": 538,
              "end": 545
            },
            "default": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "queries",
                "optional": false,
                "typeAnnotation": null,
                "start": 555,
                "end": 562
              },
              "typeArguments": null,
              "start": 548,
              "end": 562
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 528,
            "end": 562
          }
        ],
        "start": 527,
        "end": 563
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 571,
          "end": 572
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null,
              "start": 582,
              "end": 583
            },
            "typeArguments": null,
            "start": 582,
            "end": 583
          },
          "start": 576,
          "end": 583
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null,
              "start": 586,
              "end": 587
            },
            "typeArguments": null,
            "start": 586,
            "end": 587
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 588,
              "end": 589
            },
            "typeArguments": null,
            "start": 588,
            "end": 589
          },
          "start": 586,
          "end": 590
        },
        "optional": false,
        "readonly": null,
        "start": 566,
        "end": 593
      },
      "declare": false,
      "start": 512,
      "end": 594
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 594
}
```
