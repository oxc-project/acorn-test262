__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1631,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 222,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 25,
        "name": "ExtensionConfig",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 25,
        "end": 40,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 26,
            "end": 39,
            "name": {
              "type": "Identifier",
              "start": 26,
              "end": 33,
              "name": "Options",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 36,
              "end": 39
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 41,
        "end": 222,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 45,
            "end": 220,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 61,
              "name": "extendMarkSchema",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 219,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 68,
                "end": 219,
                "types": [
                  {
                    "type": "TSFunctionType",
                    "start": 71,
                    "end": 207,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 81,
                        "end": 150,
                        "name": "this",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 85,
                          "end": 150,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 87,
                            "end": 150,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 99,
                                "end": 112,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 99,
                                  "end": 103,
                                  "name": "name",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 103,
                                  "end": 111,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 105,
                                    "end": 111
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 123,
                                "end": 140,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 123,
                                  "end": 130,
                                  "name": "options",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 130,
                                  "end": 139,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 132,
                                    "end": 139,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 132,
                                      "end": 139,
                                      "name": "Options",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 160,
                        "end": 175,
                        "name": "extension",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 169,
                          "end": 175,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 171,
                            "end": 175,
                            "typeName": {
                              "type": "Identifier",
                              "start": 171,
                              "end": 175,
                              "name": "Mark",
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
                      "end": 207,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 188,
                        "end": 207,
                        "typeName": {
                          "type": "Identifier",
                          "start": 188,
                          "end": 194,
                          "name": "Record",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 194,
                          "end": 207,
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 195,
                              "end": 201
                            },
                            {
                              "type": "TSAnyKeyword",
                              "start": 203,
                              "end": 206
                            }
                          ]
                        }
                      }
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 215,
                    "end": 219
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 224,
      "end": 400,
      "id": {
        "type": "Identifier",
        "start": 238,
        "end": 247,
        "name": "Extension",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 263,
        "end": 400,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 267,
            "end": 280,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 267,
              "end": 271,
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 271,
              "end": 279,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 273,
                "end": 279
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 283,
            "end": 296,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 283,
              "end": 287,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 287,
              "end": 295,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 289,
                "end": 295
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 299,
            "end": 324,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 299,
              "end": 305,
              "name": "parent",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 305,
              "end": 323,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 307,
                "end": 323,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 307,
                    "end": 316,
                    "typeName": {
                      "type": "Identifier",
                      "start": 307,
                      "end": 316,
                      "name": "Extension",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 319,
                    "end": 323
                  }
                ]
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 327,
            "end": 351,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 327,
              "end": 332,
              "name": "child",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 332,
              "end": 350,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 334,
                "end": 350,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 334,
                    "end": 343,
                    "typeName": {
                      "type": "Identifier",
                      "start": 334,
                      "end": 343,
                      "name": "Extension",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 346,
                    "end": 350
                  }
                ]
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 354,
            "end": 371,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 354,
              "end": 361,
              "name": "options",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 361,
              "end": 370,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 363,
                "end": 370,
                "typeName": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 370,
                  "name": "Options",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 374,
            "end": 398,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 374,
              "end": 380,
              "name": "config",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 380,
              "end": 397,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 382,
                "end": 397,
                "typeName": {
                  "type": "Identifier",
                  "start": 382,
                  "end": 397,
                  "name": "ExtensionConfig",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 247,
        "end": 262,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 248,
            "end": 261,
            "name": {
              "type": "Identifier",
              "start": 248,
              "end": 255,
              "name": "Options",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 258,
              "end": 261
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 402,
      "end": 536,
      "id": {
        "type": "Identifier",
        "start": 416,
        "end": 420,
        "name": "Node",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 436,
        "end": 536,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 440,
            "end": 453,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 440,
              "end": 444,
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 444,
              "end": 452,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 446,
                "end": 452
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 456,
            "end": 469,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 456,
              "end": 460,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 460,
              "end": 468,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 462,
                "end": 468
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 472,
            "end": 492,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 472,
              "end": 478,
              "name": "parent",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 478,
              "end": 491,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 480,
                "end": 491,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 480,
                    "end": 484,
                    "typeName": {
                      "type": "Identifier",
                      "start": 480,
                      "end": 484,
                      "name": "Node",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 487,
                    "end": 491
                  }
                ]
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 495,
            "end": 514,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 495,
              "end": 500,
              "name": "child",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 500,
              "end": 513,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 502,
                "end": 513,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 502,
                    "end": 506,
                    "typeName": {
                      "type": "Identifier",
                      "start": 502,
                      "end": 506,
                      "name": "Node",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 509,
                    "end": 513
                  }
                ]
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 517,
            "end": 534,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 517,
              "end": 524,
              "name": "options",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 524,
              "end": 533,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 526,
                "end": 533,
                "typeName": {
                  "type": "Identifier",
                  "start": 526,
                  "end": 533,
                  "name": "Options",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 420,
        "end": 435,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 421,
            "end": 434,
            "name": {
              "type": "Identifier",
              "start": 421,
              "end": 428,
              "name": "Options",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 431,
              "end": 434
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 538,
      "end": 755,
      "id": {
        "type": "Identifier",
        "start": 548,
        "end": 558,
        "name": "NodeConfig",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 558,
        "end": 573,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 559,
            "end": 572,
            "name": {
              "type": "Identifier",
              "start": 559,
              "end": 566,
              "name": "Options",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 569,
              "end": 572
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 574,
        "end": 755,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 578,
            "end": 753,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 578,
              "end": 594,
              "name": "extendMarkSchema",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 595,
              "end": 752,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 601,
                "end": 752,
                "types": [
                  {
                    "type": "TSFunctionType",
                    "start": 604,
                    "end": 740,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 614,
                        "end": 683,
                        "name": "this",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 618,
                          "end": 683,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 620,
                            "end": 683,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 632,
                                "end": 645,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 632,
                                  "end": 636,
                                  "name": "name",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 636,
                                  "end": 644,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 638,
                                    "end": 644
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 656,
                                "end": 673,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 656,
                                  "end": 663,
                                  "name": "options",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 663,
                                  "end": 672,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 665,
                                    "end": 672,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 665,
                                      "end": 672,
                                      "name": "Options",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 693,
                        "end": 708,
                        "name": "extension",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 702,
                          "end": 708,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 704,
                            "end": 708,
                            "typeName": {
                              "type": "Identifier",
                              "start": 704,
                              "end": 708,
                              "name": "Node",
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
                      "start": 718,
                      "end": 740,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 721,
                        "end": 740,
                        "typeName": {
                          "type": "Identifier",
                          "start": 721,
                          "end": 727,
                          "name": "Record",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 727,
                          "end": 740,
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 728,
                              "end": 734
                            },
                            {
                              "type": "TSAnyKeyword",
                              "start": 736,
                              "end": 739
                            }
                          ]
                        }
                      }
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 748,
                    "end": 752
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 757,
      "end": 836,
      "id": {
        "type": "Identifier",
        "start": 771,
        "end": 775,
        "name": "Mark",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 791,
        "end": 836,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 795,
            "end": 812,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 795,
              "end": 802,
              "name": "options",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 802,
              "end": 811,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 804,
                "end": 811,
                "typeName": {
                  "type": "Identifier",
                  "start": 804,
                  "end": 811,
                  "name": "Options",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 815,
            "end": 834,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 815,
              "end": 821,
              "name": "config",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 821,
              "end": 833,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 823,
                "end": 833,
                "typeName": {
                  "type": "Identifier",
                  "start": 823,
                  "end": 833,
                  "name": "MarkConfig",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 775,
        "end": 790,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 776,
            "end": 789,
            "name": {
              "type": "Identifier",
              "start": 776,
              "end": 783,
              "name": "Options",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 786,
              "end": 789
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 838,
      "end": 1055,
      "id": {
        "type": "Identifier",
        "start": 848,
        "end": 858,
        "name": "MarkConfig",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 858,
        "end": 873,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 859,
            "end": 872,
            "name": {
              "type": "Identifier",
              "start": 859,
              "end": 866,
              "name": "Options",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 869,
              "end": 872
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 874,
        "end": 1055,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 878,
            "end": 1053,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 878,
              "end": 894,
              "name": "extendMarkSchema",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 895,
              "end": 1052,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 901,
                "end": 1052,
                "types": [
                  {
                    "type": "TSFunctionType",
                    "start": 904,
                    "end": 1040,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 914,
                        "end": 983,
                        "name": "this",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 918,
                          "end": 983,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 920,
                            "end": 983,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 932,
                                "end": 945,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 932,
                                  "end": 936,
                                  "name": "name",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 936,
                                  "end": 944,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 938,
                                    "end": 944
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 956,
                                "end": 973,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 956,
                                  "end": 963,
                                  "name": "options",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 963,
                                  "end": 972,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 965,
                                    "end": 972,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 965,
                                      "end": 972,
                                      "name": "Options",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 993,
                        "end": 1008,
                        "name": "extension",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1002,
                          "end": 1008,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1004,
                            "end": 1008,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1004,
                              "end": 1008,
                              "name": "Mark",
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
                      "start": 1018,
                      "end": 1040,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1021,
                        "end": 1040,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1021,
                          "end": 1027,
                          "name": "Record",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1027,
                          "end": 1040,
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 1028,
                              "end": 1034
                            },
                            {
                              "type": "TSAnyKeyword",
                              "start": 1036,
                              "end": 1039
                            }
                          ]
                        }
                      }
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 1048,
                    "end": 1052
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1057,
      "end": 1116,
      "id": {
        "type": "Identifier",
        "start": 1062,
        "end": 1071,
        "name": "AnyConfig",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1074,
        "end": 1115,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1074,
            "end": 1089,
            "typeName": {
              "type": "Identifier",
              "start": 1074,
              "end": 1089,
              "name": "ExtensionConfig",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 1092,
            "end": 1102,
            "typeName": {
              "type": "Identifier",
              "start": 1092,
              "end": 1102,
              "name": "NodeConfig",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 1105,
            "end": 1115,
            "typeName": {
              "type": "Identifier",
              "start": 1105,
              "end": 1115,
              "name": "MarkConfig",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1117,
      "end": 1161,
      "id": {
        "type": "Identifier",
        "start": 1122,
        "end": 1134,
        "name": "AnyExtension",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1137,
        "end": 1160,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1137,
            "end": 1146,
            "typeName": {
              "type": "Identifier",
              "start": 1137,
              "end": 1146,
              "name": "Extension",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 1149,
            "end": 1153,
            "typeName": {
              "type": "Identifier",
              "start": 1149,
              "end": 1153,
              "name": "Node",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 1156,
            "end": 1160,
            "typeName": {
              "type": "Identifier",
              "start": 1156,
              "end": 1160,
              "name": "Mark",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1163,
      "end": 1193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1177,
          "end": 1192,
          "id": {
            "type": "Identifier",
            "start": 1177,
            "end": 1192,
            "name": "e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1178,
              "end": 1192,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1180,
                "end": 1192,
                "typeName": {
                  "type": "Identifier",
                  "start": 1180,
                  "end": 1192,
                  "name": "AnyExtension",
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1195,
      "end": 1300,
      "id": {
        "type": "Identifier",
        "start": 1200,
        "end": 1210,
        "name": "RemoveThis",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1210,
        "end": 1213,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1211,
            "end": 1212,
            "name": {
              "type": "Identifier",
              "start": 1211,
              "end": 1212,
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
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1216,
        "end": 1299,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1216,
          "end": 1217,
          "typeName": {
            "type": "Identifier",
            "start": 1216,
            "end": 1217,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 1226,
          "end": 1247,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 1227,
              "end": 1239,
              "argument": {
                "type": "Identifier",
                "start": 1230,
                "end": 1234,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1234,
                "end": 1239,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1236,
                  "end": 1239
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 1241,
            "end": 1247,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1244,
              "end": 1247
            }
          }
        },
        "trueType": {
          "type": "TSFunctionType",
          "start": 1252,
          "end": 1293,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 1253,
              "end": 1275,
              "argument": {
                "type": "Identifier",
                "start": 1256,
                "end": 1260,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1260,
                "end": 1275,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1262,
                  "end": 1275,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1262,
                    "end": 1272,
                    "name": "Parameters",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1272,
                    "end": 1275,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1273,
                        "end": 1274,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1273,
                          "end": 1274,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 1277,
            "end": 1293,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1280,
              "end": 1293,
              "typeName": {
                "type": "Identifier",
                "start": 1280,
                "end": 1290,
                "name": "ReturnType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1290,
                "end": 1293,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1291,
                    "end": 1292,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1291,
                      "end": 1292,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 1298,
          "end": 1299,
          "typeName": {
            "type": "Identifier",
            "start": 1298,
            "end": 1299,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1302,
      "end": 1408,
      "id": {
        "type": "Identifier",
        "start": 1319,
        "end": 1336,
        "name": "getExtensionField",
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
          "start": 1349,
          "end": 1372,
          "name": "extension",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1358,
            "end": 1372,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1360,
              "end": 1372,
              "typeName": {
                "type": "Identifier",
                "start": 1360,
                "end": 1372,
                "name": "AnyExtension",
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
          "start": 1376,
          "end": 1389,
          "name": "field",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1381,
            "end": 1389,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1383,
              "end": 1389
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1336,
        "end": 1345,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1337,
            "end": 1344,
            "name": {
              "type": "Identifier",
              "start": 1337,
              "end": 1338,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 1341,
              "end": 1344
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1392,
        "end": 1407,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1394,
          "end": 1407,
          "typeName": {
            "type": "Identifier",
            "start": 1394,
            "end": 1404,
            "name": "RemoveThis",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1404,
            "end": 1407,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1405,
                "end": 1406,
                "typeName": {
                  "type": "Identifier",
                  "start": 1405,
                  "end": 1406,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1410,
      "end": 1514,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1416,
          "end": 1513,
          "id": {
            "type": "Identifier",
            "start": 1416,
            "end": 1432,
            "name": "extendMarkSchema",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1435,
            "end": 1513,
            "callee": {
              "type": "Identifier",
              "start": 1435,
              "end": 1452,
              "name": "getExtensionField",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1487,
                "end": 1488,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 1492,
                "end": 1510,
                "value": "extendMarkSchema",
                "raw": "\"extendMarkSchema\""
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1452,
              "end": 1483,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 1453,
                  "end": 1482,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 1453,
                    "end": 1462,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1453,
                      "end": 1462,
                      "name": "AnyConfig",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 1463,
                    "end": 1481,
                    "literal": {
                      "type": "Literal",
                      "start": 1463,
                      "end": 1481,
                      "value": "extendMarkSchema",
                      "raw": "\"extendMarkSchema\""
                    }
                  }
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1516,
      "end": 1551,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1530,
          "end": 1550,
          "id": {
            "type": "Identifier",
            "start": 1530,
            "end": 1550,
            "name": "extension",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1539,
              "end": 1550,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1541,
                "end": 1550,
                "typeName": {
                  "type": "Identifier",
                  "start": 1541,
                  "end": 1545,
                  "name": "Mark",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1545,
                  "end": 1550,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1546,
                      "end": 1549
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 1553,
      "end": 1618,
      "test": {
        "type": "Identifier",
        "start": 1557,
        "end": 1573,
        "name": "extendMarkSchema",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1575,
        "end": 1618,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1579,
            "end": 1607,
            "expression": {
              "type": "CallExpression",
              "start": 1579,
              "end": 1606,
              "callee": {
                "type": "Identifier",
                "start": 1579,
                "end": 1595,
                "name": "extendMarkSchema",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1596,
                  "end": 1605,
                  "name": "extension",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1620,
      "end": 1630,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
