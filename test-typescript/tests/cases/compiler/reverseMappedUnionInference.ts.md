__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1275,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 115,
      "body": {
        "type": "TSInterfaceBody",
        "start": 31,
        "end": 115,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 67,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 42,
              "decorators": [],
              "name": "matches",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 66,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 44,
                "end": 66,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 45,
                    "end": 54,
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 49,
                      "end": 54,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 51,
                        "end": 54
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 56,
                  "end": 66,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 59,
                    "end": 66
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 70,
            "end": 113,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 77,
              "decorators": [],
              "name": "extract",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 112,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 79,
                "end": 112,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 80,
                    "end": 89,
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 84,
                      "end": 89,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 86,
                        "end": 89
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 91,
                  "end": 112,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 94,
                    "end": 112,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 94,
                        "end": 100,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 94,
                          "end": 100,
                          "decorators": [],
                          "name": "Result",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 103,
                        "end": 112
                      }
                    ]
                  }
                },
                "typeParameters": null
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 22,
        "decorators": [],
        "name": "AnyExtractor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 22,
        "end": 30,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 23,
            "end": 29,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 23,
              "end": 29,
              "decorators": [],
              "name": "Result",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 117,
      "end": 236,
      "body": {
        "type": "TSInterfaceBody",
        "start": 148,
        "end": 236,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 152,
            "end": 190,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 159,
              "decorators": [],
              "name": "matches",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 189,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 161,
                "end": 189,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 162,
                    "end": 175,
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 166,
                      "end": 175,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 168,
                        "end": 175
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 177,
                  "end": 189,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 180,
                    "end": 189,
                    "asserts": false,
                    "parameterName": {
                      "type": "Identifier",
                      "start": 180,
                      "end": 184,
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 188,
                      "end": 189,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 188,
                        "end": 189,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 188,
                          "end": 189,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 193,
            "end": 234,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 193,
              "end": 200,
              "decorators": [],
              "name": "extract",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 200,
              "end": 233,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 202,
                "end": 233,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 203,
                    "end": 210,
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 207,
                      "end": 210,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 209,
                        "end": 210,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 209,
                          "end": 210,
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
                  "start": 212,
                  "end": 233,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 215,
                    "end": 233,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 215,
                        "end": 221,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 215,
                          "end": 221,
                          "decorators": [],
                          "name": "Result",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 224,
                        "end": 233
                      }
                    ]
                  }
                },
                "typeParameters": null
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 136,
        "decorators": [],
        "name": "Extractor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 136,
        "end": 147,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 137,
            "end": 138,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 140,
            "end": 146,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 140,
              "end": 146,
              "decorators": [],
              "name": "Result",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 238,
      "end": 390,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 255,
        "end": 270,
        "decorators": [],
        "name": "createExtractor",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 282,
          "end": 366,
          "decorators": [],
          "name": "params",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 288,
            "end": 366,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 290,
              "end": 366,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 294,
                  "end": 332,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 301,
                    "decorators": [],
                    "name": "matcher",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 301,
                    "end": 331,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 303,
                      "end": 331,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 304,
                          "end": 317,
                          "decorators": [],
                          "name": "node",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 308,
                            "end": 317,
                            "typeAnnotation": {
                              "type": "TSUnknownKeyword",
                              "start": 310,
                              "end": 317
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 319,
                        "end": 331,
                        "typeAnnotation": {
                          "type": "TSTypePredicate",
                          "start": 322,
                          "end": 331,
                          "asserts": false,
                          "parameterName": {
                            "type": "Identifier",
                            "start": 322,
                            "end": 326,
                            "decorators": [],
                            "name": "node",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 330,
                            "end": 331,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 330,
                              "end": 331,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 330,
                                "end": 331,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 335,
                  "end": 364,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 335,
                    "end": 342,
                    "decorators": [],
                    "name": "extract",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 342,
                    "end": 363,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 344,
                      "end": 363,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 345,
                          "end": 352,
                          "decorators": [],
                          "name": "node",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 349,
                            "end": 352,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 351,
                              "end": 352,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 351,
                                "end": 352,
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
                        "start": 354,
                        "end": 363,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 357,
                          "end": 363,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 357,
                            "end": 363,
                            "decorators": [],
                            "name": "Result",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 367,
        "end": 389,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 369,
          "end": 389,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 378,
            "end": 389,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 379,
                "end": 380,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 379,
                  "end": 380,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 382,
                "end": 388,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 382,
                  "end": 388,
                  "decorators": [],
                  "name": "Result",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 369,
            "end": 378,
            "decorators": [],
            "name": "Extractor",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 270,
        "end": 281,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 271,
            "end": 272,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 271,
              "end": 272,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 274,
            "end": 280,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 274,
              "end": 280,
              "decorators": [],
              "name": "Result",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 392,
      "end": 454,
      "body": {
        "type": "TSInterfaceBody",
        "start": 413,
        "end": 454,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 417,
            "end": 436,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 417,
              "end": 421,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 421,
              "end": 435,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 423,
                "end": 435,
                "literal": {
                  "type": "Literal",
                  "start": 423,
                  "end": 435,
                  "raw": "\"identifier\"",
                  "value": "identifier"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 439,
            "end": 452,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 439,
              "end": 443,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 443,
              "end": 451,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 445,
                "end": 451
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 402,
        "end": 412,
        "decorators": [],
        "name": "Identifier",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 456,
      "end": 521,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 473,
        "end": 485,
        "decorators": [],
        "name": "isIdentifier",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 486,
          "end": 499,
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 490,
            "end": 499,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 492,
              "end": 499
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 500,
        "end": 520,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 502,
          "end": 520,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 502,
            "end": 506,
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 510,
            "end": 520,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 510,
              "end": 520,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 510,
                "end": 520,
                "decorators": [],
                "name": "Identifier",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 523,
      "end": 716,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 529,
          "end": 715,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 529,
            "end": 548,
            "decorators": [],
            "name": "identifierExtractor",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 551,
            "end": 715,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 567,
                "end": 714,
                "properties": [
                  {
                    "type": "Property",
                    "start": 571,
                    "end": 592,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 571,
                      "end": 578,
                      "decorators": [],
                      "name": "matcher",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 580,
                      "end": 592,
                      "decorators": [],
                      "name": "isIdentifier",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 596,
                    "end": 711,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 596,
                      "end": 603,
                      "decorators": [],
                      "name": "extract",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 605,
                      "end": 711,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 615,
                        "end": 711,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 621,
                            "end": 707,
                            "argument": {
                              "type": "ObjectExpression",
                              "start": 628,
                              "end": 706,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 636,
                                  "end": 640,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 636,
                                    "end": 640,
                                    "decorators": [],
                                    "name": "node",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": true,
                                  "value": {
                                    "type": "Identifier",
                                    "start": 636,
                                    "end": 640,
                                    "decorators": [],
                                    "name": "node",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                {
                                  "type": "Property",
                                  "start": 648,
                                  "end": 675,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 648,
                                    "end": 652,
                                    "decorators": [],
                                    "name": "kind",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "TSAsExpression",
                                    "start": 654,
                                    "end": 675,
                                    "expression": {
                                      "type": "Literal",
                                      "start": 654,
                                      "end": 666,
                                      "raw": "\"identifier\"",
                                      "value": "identifier"
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 670,
                                      "end": 675,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 670,
                                        "end": 675,
                                        "decorators": [],
                                        "name": "const",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "Property",
                                  "start": 683,
                                  "end": 699,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 683,
                                    "end": 688,
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "MemberExpression",
                                    "start": 690,
                                    "end": 699,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 690,
                                      "end": 694,
                                      "decorators": [],
                                      "name": "node",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 695,
                                      "end": 699,
                                      "decorators": [],
                                      "name": "name",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 606,
                          "end": 610,
                          "decorators": [],
                          "name": "node",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 551,
              "end": 566,
              "decorators": [],
              "name": "createExtractor",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 718,
      "end": 787,
      "body": {
        "type": "TSInterfaceBody",
        "start": 742,
        "end": 787,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 746,
            "end": 768,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 746,
              "end": 750,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 750,
              "end": 767,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 752,
                "end": 767,
                "literal": {
                  "type": "Literal",
                  "start": 752,
                  "end": 767,
                  "raw": "\"stringLiteral\"",
                  "value": "stringLiteral"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 771,
            "end": 785,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 771,
              "end": 776,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 776,
              "end": 784,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 778,
                "end": 784
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 728,
        "end": 741,
        "decorators": [],
        "name": "StringLiteral",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 789,
      "end": 860,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 806,
        "end": 821,
        "decorators": [],
        "name": "isStringLiteral",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 822,
          "end": 835,
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 826,
            "end": 835,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 828,
              "end": 835
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 836,
        "end": 859,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 838,
          "end": 859,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 838,
            "end": 842,
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 846,
            "end": 859,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 846,
              "end": 859,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 846,
                "end": 859,
                "decorators": [],
                "name": "StringLiteral",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 862,
      "end": 1051,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 868,
          "end": 1050,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 868,
            "end": 883,
            "decorators": [],
            "name": "stringExtractor",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 886,
            "end": 1050,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 902,
                "end": 1049,
                "properties": [
                  {
                    "type": "Property",
                    "start": 906,
                    "end": 930,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 906,
                      "end": 913,
                      "decorators": [],
                      "name": "matcher",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 915,
                      "end": 930,
                      "decorators": [],
                      "name": "isStringLiteral",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 934,
                    "end": 1046,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 934,
                      "end": 941,
                      "decorators": [],
                      "name": "extract",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 943,
                      "end": 1046,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 953,
                        "end": 1046,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 959,
                            "end": 1042,
                            "argument": {
                              "type": "ObjectExpression",
                              "start": 966,
                              "end": 1041,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 974,
                                  "end": 978,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 974,
                                    "end": 978,
                                    "decorators": [],
                                    "name": "node",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": true,
                                  "value": {
                                    "type": "Identifier",
                                    "start": 974,
                                    "end": 978,
                                    "decorators": [],
                                    "name": "node",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                {
                                  "type": "Property",
                                  "start": 986,
                                  "end": 1009,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 986,
                                    "end": 990,
                                    "decorators": [],
                                    "name": "kind",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "TSAsExpression",
                                    "start": 992,
                                    "end": 1009,
                                    "expression": {
                                      "type": "Literal",
                                      "start": 992,
                                      "end": 1000,
                                      "raw": "\"string\"",
                                      "value": "string"
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 1004,
                                      "end": 1009,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1004,
                                        "end": 1009,
                                        "decorators": [],
                                        "name": "const",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "Property",
                                  "start": 1017,
                                  "end": 1034,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 1017,
                                    "end": 1022,
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "MemberExpression",
                                    "start": 1024,
                                    "end": 1034,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1024,
                                      "end": 1028,
                                      "decorators": [],
                                      "name": "node",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1029,
                                      "end": 1034,
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 944,
                          "end": 948,
                          "decorators": [],
                          "name": "node",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 886,
              "end": 901,
              "decorators": [],
              "name": "createExtractor",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 1053,
      "end": 1207,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1070,
        "end": 1079,
        "decorators": [],
        "name": "unionType",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1115,
          "end": 1175,
          "decorators": [],
          "name": "parsers",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1122,
            "end": 1175,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 1124,
              "end": 1175,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 1134,
                "end": 1146,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1140,
                  "end": 1146,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1140,
                    "end": 1146,
                    "decorators": [],
                    "name": "Result",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 1129,
                "end": 1130,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "nameType": null,
              "optional": false,
              "readonly": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1149,
                "end": 1172,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1161,
                  "end": 1172,
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 1162,
                      "end": 1171,
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 1169,
                        "end": 1170,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1169,
                          "end": 1170,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 1162,
                        "end": 1168,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1162,
                          "end": 1168,
                          "decorators": [],
                          "name": "Result",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1149,
                  "end": 1161,
                  "decorators": [],
                  "name": "AnyExtractor",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1176,
        "end": 1206,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1178,
          "end": 1206,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1190,
            "end": 1206,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 1191,
                "end": 1205,
                "indexType": {
                  "type": "TSNumberKeyword",
                  "start": 1198,
                  "end": 1204
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1191,
                  "end": 1197,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1191,
                    "end": 1197,
                    "decorators": [],
                    "name": "Result",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1178,
            "end": 1190,
            "decorators": [],
            "name": "AnyExtractor",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1079,
        "end": 1114,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1080,
            "end": 1113,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 1095,
              "end": 1113,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1104,
                "end": 1113,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 1104,
                  "end": 1111
                }
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1080,
              "end": 1086,
              "decorators": [],
              "name": "Result",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1209,
      "end": 1275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1215,
          "end": 1274,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1215,
            "end": 1222,
            "decorators": [],
            "name": "myUnion",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1225,
            "end": 1274,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 1235,
                "end": 1273,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 1236,
                    "end": 1255,
                    "decorators": [],
                    "name": "identifierExtractor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1257,
                    "end": 1272,
                    "decorators": [],
                    "name": "stringExtractor",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1225,
              "end": 1234,
              "decorators": [],
              "name": "unionType",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
