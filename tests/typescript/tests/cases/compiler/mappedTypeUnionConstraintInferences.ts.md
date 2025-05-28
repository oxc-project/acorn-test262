__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 711,
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
          "decorators": [],
          "name": "Omit",
          "optional": false,
          "typeAnnotation": null
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "Exclude",
                  "optional": false,
                  "typeAnnotation": null
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
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
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
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
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
          "decorators": [],
          "name": "PartialProperties",
          "optional": false,
          "typeAnnotation": null
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null
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
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
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
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null
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
                "decorators": [],
                "name": "Omit",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
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
          "decorators": [],
          "name": "doSomething_Actual",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null
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
        "params": [
          {
            "type": "Identifier",
            "start": 243,
            "end": 247,
            "decorators": [],
            "name": "a",
            "optional": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 249,
          "end": 374,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 255,
              "end": 358,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 261,
                  "end": 357,
                  "id": {
                    "type": "Identifier",
                    "start": 261,
                    "end": 343,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 262,
                      "end": 343,
                      "typeAnnotation": {
                        "type": "TSMappedType",
                        "start": 264,
                        "end": 343,
                        "key": {
                          "type": "Identifier",
                          "start": 267,
                          "end": 268,
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null
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
                              "decorators": [],
                              "name": "PartialProperties",
                              "optional": false,
                              "typeAnnotation": null
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
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
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
                              "decorators": [],
                              "name": "PartialProperties",
                              "optional": false,
                              "typeAnnotation": null
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
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
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
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        },
                        "optional": false,
                        "readonly": null
                      }
                    }
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "doSomething_Expected",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null
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
        "params": [
          {
            "type": "Identifier",
            "start": 453,
            "end": 457,
            "decorators": [],
            "name": "a",
            "optional": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 458,
          "end": 539,
          "typeAnnotation": {
            "type": "TSMappedType",
            "start": 460,
            "end": 539,
            "key": {
              "type": "Identifier",
              "start": 463,
              "end": 464,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "PartialProperties",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
                  "decorators": [],
                  "name": "PartialProperties",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "optional": false,
            "readonly": null
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 542,
      "end": 594,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 549,
        "end": 594,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 553,
            "end": 593,
            "id": {
              "type": "Identifier",
              "start": 553,
              "end": 554,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 557,
              "end": 593,
              "callee": {
                "type": "Identifier",
                "start": 557,
                "end": 575,
                "decorators": [],
                "name": "doSomething_Actual",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 578,
                        "end": 582,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 584,
                        "end": 590,
                        "value": "test",
                        "raw": "\"test\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
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
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 653,
            "end": 695,
            "id": {
              "type": "Identifier",
              "start": 653,
              "end": 654,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 657,
              "end": 695,
              "callee": {
                "type": "Identifier",
                "start": 657,
                "end": 677,
                "decorators": [],
                "name": "doSomething_Expected",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 680,
                        "end": 684,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 686,
                        "end": 692,
                        "value": "test",
                        "raw": "\"test\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
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
  "sourceType": "module",
  "hashbang": null
}
```
