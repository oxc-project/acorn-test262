bindingPatternCannotBeOnlyInferenceSource.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1102,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 27,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 23,
        "end": 26,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 25,
          "end": 26,
          "typeName": {
            "type": "Identifier",
            "start": 25,
            "end": 26,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 42,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 34,
            "end": 36,
            "decorators": [],
            "optional": false,
            "properties": []
          },
          "init": {
            "type": "CallExpression",
            "start": 39,
            "end": 42,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 104,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 92,
            "end": 98,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 94,
                "end": 96,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 96,
                  "decorators": [],
                  "name": "p1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 96,
                  "decorators": [],
                  "name": "p1",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "CallExpression",
            "start": 101,
            "end": 104,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 117,
      "end": 132,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 131,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 123,
            "end": 125,
            "decorators": [],
            "elements": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 128,
            "end": 131,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 148,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 168,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 154,
            "end": 162,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 155,
                "end": 157,
                "decorators": [],
                "name": "e1",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 159,
                "end": 161,
                "decorators": [],
                "name": "e2",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 165,
            "end": 168,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 165,
              "end": 166,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 201,
      "end": 295,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 214,
        "decorators": [],
        "name": "Dispatch",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 263,
        "end": 294,
        "members": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 265,
            "end": 292,
            "params": [
              {
                "type": "Identifier",
                "start": 279,
                "end": 288,
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 285,
                  "end": 288,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 287,
                    "end": 288,
                    "typeName": {
                      "type": "Identifier",
                      "start": 287,
                      "end": 288,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 289,
              "end": 292,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 291,
                "end": 292,
                "typeName": {
                  "type": "Identifier",
                  "start": 291,
                  "end": 292,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 265,
              "end": 278,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 266,
                  "end": 277,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 276,
                    "end": 277,
                    "typeName": {
                      "type": "Identifier",
                      "start": 276,
                      "end": 277,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 266,
                    "end": 267,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 214,
        "end": 260,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 215,
            "end": 259,
            "const": false,
            "default": {
              "type": "TSTypeLiteral",
              "start": 219,
              "end": 259,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 221,
                  "end": 231,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 221,
                    "end": 225,
                    "decorators": [],
                    "name": "type",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 225,
                    "end": 230,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 227,
                      "end": 230
                    }
                  }
                },
                {
                  "type": "TSIndexSignature",
                  "start": 232,
                  "end": 257,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 233,
                      "end": 251,
                      "decorators": [],
                      "name": "extraProps",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 243,
                        "end": 251,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 245,
                          "end": 251
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 252,
                    "end": 257,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 254,
                      "end": 257
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 296,
      "end": 358,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 301,
        "end": 307,
        "decorators": [],
        "name": "IFuncs",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 310,
        "end": 357,
        "members": [
          {
            "type": "TSIndexSignature",
            "start": 312,
            "end": 355,
            "parameters": [
              {
                "type": "Identifier",
                "start": 322,
                "end": 333,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 325,
                  "end": 333,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 327,
                    "end": 333
                  }
                }
              }
            ],
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 334,
              "end": 355,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 336,
                "end": 355,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 337,
                    "end": 346,
                    "argument": {
                      "type": "Identifier",
                      "start": 340,
                      "end": 341,
                      "decorators": [],
                      "name": "p",
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 341,
                      "end": 346,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 343,
                        "end": 346
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 348,
                  "end": 355,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 351,
                    "end": 355
                  }
                }
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 359,
      "end": 466,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 364,
        "end": 378,
        "decorators": [],
        "name": "IDestructuring",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 399,
        "end": 465,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 418,
          "end": 425,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 424,
            "end": 425,
            "typeName": {
              "type": "Identifier",
              "start": 424,
              "end": 425,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 411,
          "end": 414,
          "decorators": [],
          "name": "key",
          "optional": false
        },
        "nameType": null,
        "optional": true,
        "readonly": true,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 429,
          "end": 463,
          "params": [
            {
              "type": "RestElement",
              "start": 430,
              "end": 454,
              "argument": {
                "type": "Identifier",
                "start": 433,
                "end": 434,
                "decorators": [],
                "name": "p",
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 434,
                "end": 454,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 436,
                  "end": 454,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 446,
                    "end": 454,
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 447,
                        "end": 453,
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 449,
                          "end": 452,
                          "typeName": {
                            "type": "Identifier",
                            "start": 449,
                            "end": 452,
                            "decorators": [],
                            "name": "key",
                            "optional": false
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 447,
                          "end": 448,
                          "typeName": {
                            "type": "Identifier",
                            "start": 447,
                            "end": 448,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 436,
                    "end": 446,
                    "decorators": [],
                    "name": "Parameters",
                    "optional": false
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 456,
            "end": 463,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 459,
              "end": 463
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 378,
        "end": 396,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 379,
            "end": 395,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 389,
              "end": 395,
              "typeName": {
                "type": "Identifier",
                "start": 389,
                "end": 395,
                "decorators": [],
                "name": "IFuncs",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 379,
              "end": 380,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 467,
      "end": 576,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 472,
        "end": 485,
        "decorators": [],
        "name": "Destructuring",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 535,
        "end": 575,
        "params": [
          {
            "type": "Identifier",
            "start": 536,
            "end": 559,
            "decorators": [],
            "name": "dispatch",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 544,
              "end": 559,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 546,
                "end": 559,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 554,
                  "end": 559,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 555,
                      "end": 558
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 546,
                  "end": 554,
                  "decorators": [],
                  "name": "Dispatch",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 561,
            "end": 569,
            "decorators": [],
            "name": "funcs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 566,
              "end": 569,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 568,
                "end": 569,
                "typeName": {
                  "type": "Identifier",
                  "start": 568,
                  "end": 569,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 571,
          "end": 575,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 574,
            "end": 575,
            "typeName": {
              "type": "Identifier",
              "start": 574,
              "end": 575,
              "decorators": [],
              "name": "U",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 485,
        "end": 532,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 486,
            "end": 502,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 496,
              "end": 502,
              "typeName": {
                "type": "Identifier",
                "start": 496,
                "end": 502,
                "decorators": [],
                "name": "IFuncs",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 486,
              "end": 487,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 504,
            "end": 531,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 514,
              "end": 531,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 528,
                "end": 531,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 529,
                    "end": 530,
                    "typeName": {
                      "type": "Identifier",
                      "start": 529,
                      "end": 530,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 514,
                "end": 528,
                "decorators": [],
                "name": "IDestructuring",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 504,
              "end": 505,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 577,
      "end": 743,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 583,
          "end": 742,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 583,
            "end": 589,
            "decorators": [],
            "name": "funcs1",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 592,
            "end": 742,
            "properties": [
              {
                "type": "Property",
                "start": 598,
                "end": 629,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 598,
                  "end": 603,
                  "decorators": [],
                  "name": "funcA",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 605,
                  "end": 629,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 627,
                    "end": 629,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 606,
                      "end": 616,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 607,
                        "end": 616,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 609,
                          "end": 616
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 617,
                    "end": 623,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 619,
                      "end": 623
                    }
                  }
                }
              },
              {
                "type": "Property",
                "start": 635,
                "end": 677,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 635,
                  "end": 640,
                  "decorators": [],
                  "name": "funcB",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 642,
                  "end": 677,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 675,
                    "end": 677,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 643,
                      "end": 652,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 644,
                        "end": 652,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 646,
                          "end": 652
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 654,
                      "end": 664,
                      "decorators": [],
                      "name": "bb",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 656,
                        "end": 664,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 658,
                          "end": 664
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 665,
                    "end": 671,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 667,
                      "end": 671
                    }
                  }
                }
              },
              {
                "type": "Property",
                "start": 683,
                "end": 739,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 683,
                  "end": 688,
                  "decorators": [],
                  "name": "funcC",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 690,
                  "end": 739,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 737,
                    "end": 739,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 691,
                      "end": 700,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 692,
                        "end": 700,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 694,
                          "end": 700
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 702,
                      "end": 712,
                      "decorators": [],
                      "name": "cc",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 704,
                        "end": 712,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 706,
                          "end": 712
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 714,
                      "end": 726,
                      "decorators": [],
                      "name": "ccc",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 717,
                        "end": 726,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 719,
                          "end": 726
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 727,
                    "end": 733,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 729,
                      "end": 733
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 744,
      "end": 773,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 749,
        "end": 756,
        "decorators": [],
        "name": "TFuncs1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 759,
        "end": 772,
        "exprName": {
          "type": "Identifier",
          "start": 766,
          "end": 772,
          "decorators": [],
          "name": "funcs1",
          "optional": false
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 774,
      "end": 889,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 791,
        "end": 808,
        "decorators": [],
        "name": "useReduxDispatch1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 844,
          "end": 884,
          "decorators": [],
          "name": "destructuring",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 857,
            "end": 884,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 859,
              "end": 884,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 872,
                "end": 884,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 873,
                    "end": 880,
                    "typeName": {
                      "type": "Identifier",
                      "start": 873,
                      "end": 880,
                      "decorators": [],
                      "name": "TFuncs1",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 882,
                    "end": 883,
                    "typeName": {
                      "type": "Identifier",
                      "start": 882,
                      "end": 883,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 859,
                "end": 872,
                "decorators": [],
                "name": "Destructuring",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 885,
        "end": 888,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 887,
          "end": 888,
          "typeName": {
            "type": "Identifier",
            "start": 887,
            "end": 888,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 808,
        "end": 843,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 809,
            "end": 842,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 819,
              "end": 842,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 833,
                "end": 842,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 834,
                    "end": 841,
                    "typeName": {
                      "type": "Identifier",
                      "start": 834,
                      "end": 841,
                      "decorators": [],
                      "name": "TFuncs1",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 819,
                "end": 833,
                "decorators": [],
                "name": "IDestructuring",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 809,
              "end": 810,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 890,
      "end": 1101,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 896,
          "end": 1100,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 896,
            "end": 898,
            "decorators": [],
            "optional": false,
            "properties": []
          },
          "init": {
            "type": "CallExpression",
            "start": 901,
            "end": 1100,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 924,
                "end": 1098,
                "async": false,
                "body": {
                  "type": "ObjectExpression",
                  "start": 935,
                  "end": 1097,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 945,
                      "end": 978,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 945,
                        "end": 950,
                        "decorators": [],
                        "name": "funcA",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 952,
                        "end": 978,
                        "async": false,
                        "body": {
                          "type": "CallExpression",
                          "start": 962,
                          "end": 978,
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "start": 964,
                              "end": 977,
                              "arguments": [
                                {
                                  "type": "SpreadElement",
                                  "start": 972,
                                  "end": 976,
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 975,
                                    "end": 976,
                                    "decorators": [],
                                    "name": "p",
                                    "optional": false
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 964,
                                "end": 971,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 964,
                                  "end": 965,
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 966,
                                  "end": 971,
                                  "decorators": [],
                                  "name": "funcA",
                                  "optional": false
                                }
                              },
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 962,
                            "end": 963,
                            "decorators": [],
                            "name": "d",
                            "optional": false
                          },
                          "optional": false
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "start": 953,
                            "end": 957,
                            "argument": {
                              "type": "Identifier",
                              "start": 956,
                              "end": 957,
                              "decorators": [],
                              "name": "p",
                              "optional": false
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ]
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1014,
                      "end": 1047,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1014,
                        "end": 1019,
                        "decorators": [],
                        "name": "funcB",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 1021,
                        "end": 1047,
                        "async": false,
                        "body": {
                          "type": "CallExpression",
                          "start": 1031,
                          "end": 1047,
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "start": 1033,
                              "end": 1046,
                              "arguments": [
                                {
                                  "type": "SpreadElement",
                                  "start": 1041,
                                  "end": 1045,
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 1044,
                                    "end": 1045,
                                    "decorators": [],
                                    "name": "p",
                                    "optional": false
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1033,
                                "end": 1040,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1033,
                                  "end": 1034,
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1035,
                                  "end": 1040,
                                  "decorators": [],
                                  "name": "funcB",
                                  "optional": false
                                }
                              },
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 1031,
                            "end": 1032,
                            "decorators": [],
                            "name": "d",
                            "optional": false
                          },
                          "optional": false
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "start": 1022,
                            "end": 1026,
                            "argument": {
                              "type": "Identifier",
                              "start": 1025,
                              "end": 1026,
                              "decorators": [],
                              "name": "p",
                              "optional": false
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ]
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1057,
                      "end": 1090,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1057,
                        "end": 1062,
                        "decorators": [],
                        "name": "funcC",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 1064,
                        "end": 1090,
                        "async": false,
                        "body": {
                          "type": "CallExpression",
                          "start": 1074,
                          "end": 1090,
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "start": 1076,
                              "end": 1089,
                              "arguments": [
                                {
                                  "type": "SpreadElement",
                                  "start": 1084,
                                  "end": 1088,
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 1087,
                                    "end": 1088,
                                    "decorators": [],
                                    "name": "p",
                                    "optional": false
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1076,
                                "end": 1083,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1076,
                                  "end": 1077,
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1078,
                                  "end": 1083,
                                  "decorators": [],
                                  "name": "funcC",
                                  "optional": false
                                }
                              },
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 1074,
                            "end": 1075,
                            "decorators": [],
                            "name": "d",
                            "optional": false
                          },
                          "optional": false
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "start": 1065,
                            "end": 1069,
                            "argument": {
                              "type": "Identifier",
                              "start": 1068,
                              "end": 1069,
                              "decorators": [],
                              "name": "p",
                              "optional": false
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ]
                      }
                    }
                  ]
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 925,
                    "end": 926,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 928,
                    "end": 929,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 901,
              "end": 918,
              "decorators": [],
              "name": "useReduxDispatch1",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
