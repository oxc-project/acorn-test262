contextualTypesNegatedTypeLikeConstraintInGenericMappedType2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 560,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 74,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Tags",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 33,
        "end": 73,
        "checkType": {
          "type": "TSTypeReference",
          "start": 33,
          "end": 34,
          "typeName": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "decorators": [],
            "name": "P",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 43,
          "end": 61,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 49,
            "end": 61,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 50,
                "end": 51,
                "typeName": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 51,
                  "decorators": [],
                  "name": "D",
                  "optional": false
                }
              },
              {
                "type": "TSInferType",
                "start": 53,
                "end": 60,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 59,
                  "end": 60,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "decorators": [],
                    "name": "X",
                    "optional": false
                  },
                  "out": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 43,
            "end": 49,
            "decorators": [],
            "name": "Record",
            "optional": false
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 68,
          "end": 73
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 64,
          "end": 65,
          "typeName": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "X",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 30,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 26,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 20,
              "end": 26
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "D",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 28,
            "end": 29,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 76,
      "end": 333,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 332,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 332,
            "decorators": [],
            "name": "typeTags",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 332,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 100,
                "end": 332,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 106,
                  "end": 332,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 109,
                    "end": 332,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 309,
                        "end": 318,
                        "decorators": [],
                        "name": "fields",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 315,
                          "end": 318,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 317,
                            "end": 318,
                            "typeName": {
                              "type": "Identifier",
                              "start": 317,
                              "end": 318,
                              "decorators": [],
                              "name": "P",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 322,
                      "end": 332,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 325,
                        "end": 332
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 109,
                      "end": 305,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 113,
                          "end": 302,
                          "const": false,
                          "constraint": {
                            "type": "TSIntersectionType",
                            "start": 123,
                            "end": 302,
                            "types": [
                              {
                                "type": "TSMappedType",
                                "start": 123,
                                "end": 237,
                                "constraint": {
                                  "type": "TSIntersectionType",
                                  "start": 146,
                                  "end": 170,
                                  "types": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 146,
                                      "end": 161,
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 150,
                                        "end": 161,
                                        "params": [
                                          {
                                            "type": "TSLiteralType",
                                            "start": 151,
                                            "end": 157,
                                            "literal": {
                                              "type": "Literal",
                                              "start": 151,
                                              "end": 157,
                                              "raw": "\"_tag\"",
                                              "value": "_tag"
                                            }
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "start": 159,
                                            "end": 160,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 159,
                                              "end": 160,
                                              "decorators": [],
                                              "name": "I",
                                              "optional": false
                                            }
                                          }
                                        ]
                                      },
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 146,
                                        "end": 150,
                                        "decorators": [],
                                        "name": "Tags",
                                        "optional": false
                                      }
                                    },
                                    {
                                      "type": "TSStringKeyword",
                                      "start": 164,
                                      "end": 170
                                    }
                                  ]
                                },
                                "key": {
                                  "type": "Identifier",
                                  "start": 139,
                                  "end": 142,
                                  "decorators": [],
                                  "name": "Tag",
                                  "optional": false
                                },
                                "nameType": null,
                                "readonly": true,
                                "typeAnnotation": {
                                  "type": "TSFunctionType",
                                  "start": 173,
                                  "end": 232,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 181,
                                      "end": 218,
                                      "decorators": [],
                                      "name": "_",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 182,
                                        "end": 218,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 184,
                                          "end": 218,
                                          "typeArguments": {
                                            "type": "TSTypeParameterInstantiation",
                                            "start": 191,
                                            "end": 218,
                                            "params": [
                                              {
                                                "type": "TSTypeReference",
                                                "start": 192,
                                                "end": 193,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 192,
                                                  "end": 193,
                                                  "decorators": [],
                                                  "name": "I",
                                                  "optional": false
                                                }
                                              },
                                              {
                                                "type": "TSTypeLiteral",
                                                "start": 195,
                                                "end": 217,
                                                "members": [
                                                  {
                                                    "type": "TSPropertySignature",
                                                    "start": 197,
                                                    "end": 215,
                                                    "computed": false,
                                                    "key": {
                                                      "type": "Identifier",
                                                      "start": 206,
                                                      "end": 210,
                                                      "decorators": [],
                                                      "name": "_tag",
                                                      "optional": false
                                                    },
                                                    "optional": false,
                                                    "readonly": true,
                                                    "static": false,
                                                    "typeAnnotation": {
                                                      "type": "TSTypeAnnotation",
                                                      "start": 210,
                                                      "end": 215,
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "start": 212,
                                                        "end": 215,
                                                        "typeName": {
                                                          "type": "Identifier",
                                                          "start": 212,
                                                          "end": 215,
                                                          "decorators": [],
                                                          "name": "Tag",
                                                          "optional": false
                                                        }
                                                      }
                                                    }
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 184,
                                            "end": 191,
                                            "decorators": [],
                                            "name": "Extract",
                                            "optional": false
                                          }
                                        }
                                      }
                                    }
                                  ],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "start": 226,
                                    "end": 232,
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 229,
                                      "end": 232
                                    }
                                  }
                                }
                              },
                              {
                                "type": "TSMappedType",
                                "start": 240,
                                "end": 302,
                                "constraint": {
                                  "type": "TSTypeReference",
                                  "start": 259,
                                  "end": 292,
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 266,
                                    "end": 292,
                                    "params": [
                                      {
                                        "type": "TSTypeOperator",
                                        "start": 267,
                                        "end": 274,
                                        "operator": "keyof",
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 273,
                                          "end": 274,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 273,
                                            "end": 274,
                                            "decorators": [],
                                            "name": "P",
                                            "optional": false
                                          }
                                        }
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 276,
                                        "end": 291,
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "start": 280,
                                          "end": 291,
                                          "params": [
                                            {
                                              "type": "TSLiteralType",
                                              "start": 281,
                                              "end": 287,
                                              "literal": {
                                                "type": "Literal",
                                                "start": 281,
                                                "end": 287,
                                                "raw": "\"_tag\"",
                                                "value": "_tag"
                                              }
                                            },
                                            {
                                              "type": "TSTypeReference",
                                              "start": 289,
                                              "end": 290,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 289,
                                                "end": 290,
                                                "decorators": [],
                                                "name": "I",
                                                "optional": false
                                              }
                                            }
                                          ]
                                        },
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 276,
                                          "end": 280,
                                          "decorators": [],
                                          "name": "Tags",
                                          "optional": false
                                        }
                                      }
                                    ]
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 259,
                                    "end": 266,
                                    "decorators": [],
                                    "name": "Exclude",
                                    "optional": false
                                  }
                                },
                                "key": {
                                  "type": "Identifier",
                                  "start": 252,
                                  "end": 255,
                                  "decorators": [],
                                  "name": "Tag",
                                  "optional": false
                                },
                                "nameType": null,
                                "readonly": true,
                                "typeAnnotation": {
                                  "type": "TSNeverKeyword",
                                  "start": 295,
                                  "end": 300
                                }
                              }
                            ]
                          },
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 113,
                            "end": 114,
                            "decorators": [],
                            "name": "P",
                            "optional": false
                          },
                          "out": false
                        }
                      ]
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 100,
                  "end": 103,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 101,
                      "end": 102,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 101,
                        "end": 102,
                        "decorators": [],
                        "name": "I",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 335,
      "end": 400,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 340,
        "end": 345,
        "decorators": [],
        "name": "Value",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 348,
        "end": 399,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 348,
            "end": 372,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 350,
                "end": 360,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 354,
                  "decorators": [],
                  "name": "_tag",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 354,
                  "end": 359,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 356,
                    "end": 359,
                    "literal": {
                      "type": "Literal",
                      "start": 356,
                      "end": 359,
                      "raw": "\"A\"",
                      "value": "A"
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 361,
                "end": 370,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 362,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 362,
                  "end": 370,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 364,
                    "end": 370
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 375,
            "end": 399,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 377,
                "end": 387,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 377,
                  "end": 381,
                  "decorators": [],
                  "name": "_tag",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 381,
                  "end": 386,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 383,
                    "end": 386,
                    "literal": {
                      "type": "Literal",
                      "start": 383,
                      "end": 386,
                      "raw": "\"B\"",
                      "value": "B"
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 388,
                "end": 397,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 388,
                  "end": 389,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 389,
                  "end": 397,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 391,
                    "end": 397
                  }
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 401,
      "end": 435,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 407,
          "end": 434,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 407,
            "end": 414,
            "decorators": [],
            "name": "matcher",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 417,
            "end": 434,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 417,
              "end": 425,
              "decorators": [],
              "name": "typeTags",
              "optional": false
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 425,
              "end": 432,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 426,
                  "end": 431,
                  "typeName": {
                    "type": "Identifier",
                    "start": 426,
                    "end": 431,
                    "decorators": [],
                    "name": "Value",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 437,
      "end": 487,
      "expression": {
        "type": "CallExpression",
        "start": 437,
        "end": 486,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 445,
            "end": 485,
            "properties": [
              {
                "type": "Property",
                "start": 449,
                "end": 462,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 449,
                  "end": 450,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 452,
                  "end": 462,
                  "async": false,
                  "body": {
                    "type": "MemberExpression",
                    "start": 459,
                    "end": 462,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 459,
                      "end": 460,
                      "decorators": [],
                      "name": "_",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 461,
                      "end": 462,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 453,
                      "end": 454,
                      "decorators": [],
                      "name": "_",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 466,
                "end": 482,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 466,
                  "end": 467,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 469,
                  "end": 482,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 476,
                    "end": 482,
                    "raw": "\"fail\"",
                    "value": "fail"
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 470,
                      "end": 471,
                      "decorators": [],
                      "name": "_",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 437,
          "end": 444,
          "decorators": [],
          "name": "matcher",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 489,
      "end": 559,
      "expression": {
        "type": "CallExpression",
        "start": 489,
        "end": 558,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 497,
            "end": 557,
            "properties": [
              {
                "type": "Property",
                "start": 501,
                "end": 514,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 501,
                  "end": 502,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 504,
                  "end": 514,
                  "async": false,
                  "body": {
                    "type": "MemberExpression",
                    "start": 511,
                    "end": 514,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 511,
                      "end": 512,
                      "decorators": [],
                      "name": "_",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 513,
                      "end": 514,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 505,
                      "end": 506,
                      "decorators": [],
                      "name": "_",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 518,
                "end": 534,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 518,
                  "end": 519,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 521,
                  "end": 534,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 528,
                    "end": 534,
                    "raw": "\"fail\"",
                    "value": "fail"
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 522,
                      "end": 523,
                      "decorators": [],
                      "name": "_",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 538,
                "end": 554,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 538,
                  "end": 539,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 541,
                  "end": 554,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 548,
                    "end": 554,
                    "raw": "\"fail\"",
                    "value": "fail"
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 542,
                      "end": 543,
                      "decorators": [],
                      "name": "_",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 489,
          "end": 496,
          "decorators": [],
          "name": "matcher",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
