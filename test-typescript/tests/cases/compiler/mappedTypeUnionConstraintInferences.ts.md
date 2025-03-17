__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 712,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 78,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 78,
        "id": {
          "type": "Identifier",
          "start": 20,
          "end": 24,
          "name": "Omit",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 24,
          "end": 46,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 25,
              "end": 26,
              "name": {
                "type": "Identifier",
                "start": 25,
                "end": 26,
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
            },
            {
              "type": "TSTypeParameter",
              "start": 28,
              "end": 45,
              "name": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 38,
                "end": 45,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 44,
                  "end": 45,
                  "typeName": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 45,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 49,
          "end": 77,
          "typeName": {
            "type": "Identifier",
            "start": 49,
            "end": 53,
            "name": "Pick",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 53,
            "end": 77,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 54,
                "end": 55,
                "typeName": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 55,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 57,
                "end": 76,
                "typeName": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 64,
                  "name": "Exclude",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 64,
                  "end": 76,
                  "params": [
                    {
                      "type": "TSTypeOperator",
                      "start": 65,
                      "end": 72,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 71,
                        "end": 72,
                        "typeName": {
                          "type": "Identifier",
                          "start": 71,
                          "end": 72,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 74,
                      "end": 75,
                      "typeName": {
                        "type": "Identifier",
                        "start": 74,
                        "end": 75,
                        "name": "K",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ]
          }
        },
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 79,
      "end": 174,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 86,
        "end": 174,
        "id": {
          "type": "Identifier",
          "start": 99,
          "end": 116,
          "name": "PartialProperties",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 116,
          "end": 138,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 117,
              "end": 118,
              "name": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
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
            },
            {
              "type": "TSTypeParameter",
              "start": 120,
              "end": 137,
              "name": {
                "type": "Identifier",
                "start": 120,
                "end": 121,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 130,
                "end": 137,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 136,
                  "end": 137,
                  "typeName": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 137,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 141,
          "end": 173,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 141,
              "end": 160,
              "typeName": {
                "type": "Identifier",
                "start": 141,
                "end": 148,
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 148,
                "end": 160,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 149,
                    "end": 159,
                    "typeName": {
                      "type": "Identifier",
                      "start": 149,
                      "end": 153,
                      "name": "Pick",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 153,
                      "end": 159,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 154,
                          "end": 155,
                          "typeName": {
                            "type": "Identifier",
                            "start": 154,
                            "end": 155,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 157,
                          "end": 158,
                          "typeName": {
                            "type": "Identifier",
                            "start": 157,
                            "end": 158,
                            "name": "K",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "type": "TSTypeReference",
              "start": 163,
              "end": 173,
              "typeName": {
                "type": "Identifier",
                "start": 163,
                "end": 167,
                "name": "Omit",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 167,
                "end": 173,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 168,
                    "end": 169,
                    "typeName": {
                      "type": "Identifier",
                      "start": 168,
                      "end": 169,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 171,
                    "end": 172,
                    "typeName": {
                      "type": "Identifier",
                      "start": 171,
                      "end": 172,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          ]
        },
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 175,
      "end": 374,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 182,
        "end": 374,
        "id": {
          "type": "Identifier",
          "start": 191,
          "end": 209,
          "name": "doSomething_Actual",
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
            "start": 243,
            "end": 247,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 244,
              "end": 247,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 246,
                "end": 247,
                "typeName": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 247,
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
          "start": 249,
          "end": 374,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 255,
              "end": 358,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 261,
                  "end": 357,
                  "id": {
                    "type": "Identifier",
                    "start": 261,
                    "end": 343,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 262,
                      "end": 343,
                      "typeAnnotation": {
                        "type": "TSMappedType",
                        "start": 264,
                        "end": 343,
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "start": 267,
                          "end": 306,
                          "name": {
                            "type": "Identifier",
                            "start": 267,
                            "end": 268,
                            "name": "P",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeOperator",
                            "start": 272,
                            "end": 306,
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 278,
                              "end": 306,
                              "typeName": {
                                "type": "Identifier",
                                "start": 278,
                                "end": 295,
                                "name": "PartialProperties",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 295,
                                "end": 306,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 296,
                                    "end": 297,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 296,
                                      "end": 297,
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSLiteralType",
                                    "start": 299,
                                    "end": 305,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 299,
                                      "end": 305,
                                      "value": "prop",
                                      "raw": "\"prop\""
                                    }
                                  }
                                ]
                              }
                            }
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        "nameType": null,
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "start": 309,
                          "end": 340,
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 309,
                            "end": 337,
                            "typeName": {
                              "type": "Identifier",
                              "start": 309,
                              "end": 326,
                              "name": "PartialProperties",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 326,
                              "end": 337,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 327,
                                  "end": 328,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 327,
                                    "end": 328,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSLiteralType",
                                  "start": 330,
                                  "end": 336,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 330,
                                    "end": 336,
                                    "value": "prop",
                                    "raw": "\"prop\""
                                  }
                                }
                              ]
                            }
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 338,
                            "end": 339,
                            "typeName": {
                              "type": "Identifier",
                              "start": 338,
                              "end": 339,
                              "name": "P",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "optional": null,
                        "readonly": null,
                        "constraint": {
                          "type": "TSTypeOperator",
                          "start": 272,
                          "end": 306,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 278,
                            "end": 306,
                            "typeName": {
                              "type": "Identifier",
                              "start": 278,
                              "end": 295,
                              "name": "PartialProperties",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 295,
                              "end": 306,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 296,
                                  "end": 297,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 296,
                                    "end": 297,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSLiteralType",
                                  "start": 299,
                                  "end": 305,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 299,
                                    "end": 305,
                                    "value": "prop",
                                    "raw": "\"prop\""
                                  }
                                }
                              ]
                            }
                          }
                        },
                        "key": {
                          "type": "Identifier",
                          "start": 267,
                          "end": 268,
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "start": 346,
                    "end": 357,
                    "expression": {
                      "type": "Literal",
                      "start": 346,
                      "end": 350,
                      "value": null,
                      "raw": "null"
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 354,
                      "end": 357
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            {
              "type": "ReturnStatement",
              "start": 363,
              "end": 372,
              "argument": {
                "type": "Identifier",
                "start": 370,
                "end": 371,
                "name": "x",
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
          "start": 209,
          "end": 242,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 210,
              "end": 241,
              "name": {
                "type": "Identifier",
                "start": 210,
                "end": 211,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeLiteral",
                "start": 220,
                "end": 241,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 226,
                    "end": 239,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 226,
                      "end": 230,
                      "name": "prop",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 230,
                      "end": 238,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 232,
                        "end": 238
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 375,
      "end": 540,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 382,
        "end": 540,
        "id": {
          "type": "Identifier",
          "start": 399,
          "end": 419,
          "name": "doSomething_Expected",
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
            "start": 453,
            "end": 457,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 454,
              "end": 457,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 456,
                "end": 457,
                "typeName": {
                  "type": "Identifier",
                  "start": 456,
                  "end": 457,
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
        "body": null,
        "declare": true,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 419,
          "end": 452,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 420,
              "end": 451,
              "name": {
                "type": "Identifier",
                "start": 420,
                "end": 421,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeLiteral",
                "start": 430,
                "end": 451,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 436,
                    "end": 449,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 436,
                      "end": 440,
                      "name": "prop",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 440,
                      "end": 448,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 442,
                        "end": 448
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 458,
          "end": 539,
          "typeAnnotation": {
            "type": "TSMappedType",
            "start": 460,
            "end": 539,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 463,
              "end": 502,
              "name": {
                "type": "Identifier",
                "start": 463,
                "end": 464,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 468,
                "end": 502,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 474,
                  "end": 502,
                  "typeName": {
                    "type": "Identifier",
                    "start": 474,
                    "end": 491,
                    "name": "PartialProperties",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 491,
                    "end": 502,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 492,
                        "end": 493,
                        "typeName": {
                          "type": "Identifier",
                          "start": 492,
                          "end": 493,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 495,
                        "end": 501,
                        "literal": {
                          "type": "Literal",
                          "start": 495,
                          "end": 501,
                          "value": "prop",
                          "raw": "\"prop\""
                        }
                      }
                    ]
                  }
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 505,
              "end": 536,
              "objectType": {
                "type": "TSTypeReference",
                "start": 505,
                "end": 533,
                "typeName": {
                  "type": "Identifier",
                  "start": 505,
                  "end": 522,
                  "name": "PartialProperties",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 522,
                  "end": 533,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 523,
                      "end": 524,
                      "typeName": {
                        "type": "Identifier",
                        "start": 523,
                        "end": 524,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 526,
                      "end": 532,
                      "literal": {
                        "type": "Literal",
                        "start": 526,
                        "end": 532,
                        "value": "prop",
                        "raw": "\"prop\""
                      }
                    }
                  ]
                }
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 534,
                "end": 535,
                "typeName": {
                  "type": "Identifier",
                  "start": 534,
                  "end": 535,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "optional": null,
            "readonly": null,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 468,
              "end": 502,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 474,
                "end": 502,
                "typeName": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 491,
                  "name": "PartialProperties",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 491,
                  "end": 502,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 492,
                      "end": 493,
                      "typeName": {
                        "type": "Identifier",
                        "start": 492,
                        "end": 493,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 495,
                      "end": 501,
                      "literal": {
                        "type": "Literal",
                        "start": 495,
                        "end": 501,
                        "value": "prop",
                        "raw": "\"prop\""
                      }
                    }
                  ]
                }
              }
            },
            "key": {
              "type": "Identifier",
              "start": 463,
              "end": 464,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 542,
      "end": 594,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 549,
        "end": 594,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 553,
            "end": 593,
            "id": {
              "type": "Identifier",
              "start": 553,
              "end": 554,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 557,
              "end": 593,
              "callee": {
                "type": "Identifier",
                "start": 557,
                "end": 575,
                "name": "doSomething_Actual",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 576,
                  "end": 592,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 578,
                      "end": 590,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 578,
                        "end": 582,
                        "name": "prop",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 584,
                        "end": 590,
                        "value": "test",
                        "raw": "\"test\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 595,
      "end": 601,
      "expression": {
        "type": "AssignmentExpression",
        "start": 595,
        "end": 601,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 595,
          "end": 596,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 599,
          "end": 601,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 642,
      "end": 696,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 649,
        "end": 696,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 653,
            "end": 695,
            "id": {
              "type": "Identifier",
              "start": 653,
              "end": 654,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 657,
              "end": 695,
              "callee": {
                "type": "Identifier",
                "start": 657,
                "end": 677,
                "name": "doSomething_Expected",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 678,
                  "end": 694,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 680,
                      "end": 692,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 680,
                        "end": 684,
                        "name": "prop",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 686,
                        "end": 692,
                        "value": "test",
                        "raw": "\"test\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 697,
      "end": 703,
      "expression": {
        "type": "AssignmentExpression",
        "start": 697,
        "end": 703,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 697,
          "end": 698,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 701,
          "end": 703,
          "properties": []
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
