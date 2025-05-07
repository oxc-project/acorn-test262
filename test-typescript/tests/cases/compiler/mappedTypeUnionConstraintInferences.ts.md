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
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 78,
        "declare": true,
        "id": {
          "type": "Identifier",
          "start": 20,
          "end": 24,
          "decorators": [],
          "name": "Omit",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 49,
          "end": 77,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 53,
            "end": 77,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 54,
                "end": 55,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 55,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 57,
                "end": 76,
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
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 71,
                          "end": 72,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 74,
                      "end": 75,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 74,
                        "end": 75,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 64,
                  "decorators": [],
                  "name": "Exclude",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 49,
            "end": 53,
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null
          }
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
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 25,
                "end": 26,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 28,
              "end": 45,
              "const": false,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 38,
                "end": 45,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 44,
                  "end": 45,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 45,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 79,
      "end": 174,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 86,
        "end": 174,
        "declare": true,
        "id": {
          "type": "Identifier",
          "start": 99,
          "end": 116,
          "decorators": [],
          "name": "PartialProperties",
          "optional": false,
          "typeAnnotation": null
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
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 148,
                "end": 160,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 149,
                    "end": 159,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 153,
                      "end": 159,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 154,
                          "end": 155,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 154,
                            "end": 155,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 157,
                          "end": 158,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 157,
                            "end": 158,
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 149,
                      "end": 153,
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 141,
                "end": 148,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 163,
              "end": 173,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 167,
                "end": 173,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 168,
                    "end": 169,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 168,
                      "end": 169,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 171,
                    "end": 172,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 171,
                      "end": 172,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 163,
                "end": 167,
                "decorators": [],
                "name": "Omit",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
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
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 120,
              "end": 137,
              "const": false,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 130,
                "end": 137,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 136,
                  "end": 137,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 137,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 120,
                "end": 121,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 175,
      "end": 374,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 182,
        "end": 374,
        "async": false,
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
                  "definite": false,
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
                        "constraint": {
                          "type": "TSTypeOperator",
                          "start": 272,
                          "end": 306,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 278,
                            "end": 306,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 295,
                              "end": 306,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 296,
                                  "end": 297,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 296,
                                    "end": 297,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                {
                                  "type": "TSLiteralType",
                                  "start": 299,
                                  "end": 305,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 299,
                                    "end": 305,
                                    "raw": "\"prop\"",
                                    "value": "prop"
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 278,
                              "end": 295,
                              "decorators": [],
                              "name": "PartialProperties",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "key": {
                          "type": "Identifier",
                          "start": 267,
                          "end": 268,
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "nameType": null,
                        "optional": false,
                        "readonly": null,
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "start": 309,
                          "end": 340,
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 338,
                            "end": 339,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 338,
                              "end": 339,
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 309,
                            "end": 337,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 326,
                              "end": 337,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 327,
                                  "end": 328,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 327,
                                    "end": 328,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                {
                                  "type": "TSLiteralType",
                                  "start": 330,
                                  "end": 336,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 330,
                                    "end": 336,
                                    "raw": "\"prop\"",
                                    "value": "prop"
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 309,
                              "end": 326,
                              "decorators": [],
                              "name": "PartialProperties",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
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
                      "raw": "null",
                      "value": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 354,
                      "end": 357
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const"
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
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 191,
          "end": 209,
          "decorators": [],
          "name": "doSomething_Actual",
          "optional": false,
          "typeAnnotation": null
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 247,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 209,
          "end": 242,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 210,
              "end": 241,
              "const": false,
              "constraint": {
                "type": "TSTypeLiteral",
                "start": 220,
                "end": 241,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 226,
                    "end": 239,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 226,
                      "end": 230,
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 230,
                      "end": 238,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 232,
                        "end": 238
                      }
                    }
                  }
                ]
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 210,
                "end": 211,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 375,
      "end": 540,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 382,
        "end": 540,
        "async": false,
        "body": null,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 399,
          "end": 419,
          "decorators": [],
          "name": "doSomething_Expected",
          "optional": false,
          "typeAnnotation": null
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 456,
                  "end": 457,
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
          "start": 458,
          "end": 539,
          "typeAnnotation": {
            "type": "TSMappedType",
            "start": 460,
            "end": 539,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 468,
              "end": 502,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 474,
                "end": 502,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 491,
                  "end": 502,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 492,
                      "end": 493,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 492,
                        "end": 493,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 495,
                      "end": 501,
                      "literal": {
                        "type": "Literal",
                        "start": 495,
                        "end": 501,
                        "raw": "\"prop\"",
                        "value": "prop"
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 491,
                  "decorators": [],
                  "name": "PartialProperties",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "key": {
              "type": "Identifier",
              "start": 463,
              "end": 464,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "nameType": null,
            "optional": false,
            "readonly": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 505,
              "end": 536,
              "indexType": {
                "type": "TSTypeReference",
                "start": 534,
                "end": 535,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 534,
                  "end": 535,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 505,
                "end": 533,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 522,
                  "end": 533,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 523,
                      "end": 524,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 523,
                        "end": 524,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 526,
                      "end": 532,
                      "literal": {
                        "type": "Literal",
                        "start": 526,
                        "end": 532,
                        "raw": "\"prop\"",
                        "value": "prop"
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 505,
                  "end": 522,
                  "decorators": [],
                  "name": "PartialProperties",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 419,
          "end": 452,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 420,
              "end": 451,
              "const": false,
              "constraint": {
                "type": "TSTypeLiteral",
                "start": 430,
                "end": 451,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 436,
                    "end": 449,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 436,
                      "end": 440,
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 440,
                      "end": 448,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 442,
                        "end": 448
                      }
                    }
                  }
                ]
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 420,
                "end": 421,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 542,
      "end": 594,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 549,
        "end": 594,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 553,
            "end": 593,
            "definite": false,
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
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 578,
                        "end": 582,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 584,
                        "end": 590,
                        "raw": "\"test\"",
                        "value": "test"
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 557,
                "end": 575,
                "decorators": [],
                "name": "doSomething_Actual",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 595,
      "end": 601,
      "directive": null,
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
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 642,
      "end": 696,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 649,
        "end": 696,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 653,
            "end": 695,
            "definite": false,
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
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 680,
                        "end": 684,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 686,
                        "end": 692,
                        "raw": "\"test\"",
                        "value": "test"
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 657,
                "end": 677,
                "decorators": [],
                "name": "doSomething_Expected",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 697,
      "end": 703,
      "directive": null,
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
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
