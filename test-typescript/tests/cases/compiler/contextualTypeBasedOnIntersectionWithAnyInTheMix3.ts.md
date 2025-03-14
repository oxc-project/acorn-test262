contextualTypeBasedOnIntersectionWithAnyInTheMix3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 649,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 61,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 12,
        "decorators": [],
        "name": "TypeMap",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 15,
        "end": 60,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 40,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 22,
              "decorators": [],
              "name": "str",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 39,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 24,
                "end": 39,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 24,
                    "end": 27,
                    "literal": {
                      "type": "Literal",
                      "start": 24,
                      "end": 27,
                      "raw": "\"a\"",
                      "value": "a"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 30,
                    "end": 33,
                    "literal": {
                      "type": "Literal",
                      "start": 30,
                      "end": 33,
                      "raw": "\"b\"",
                      "value": "b"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 36,
                    "end": 39,
                    "literal": {
                      "type": "Literal",
                      "start": 36,
                      "end": 39,
                      "raw": "\"c\"",
                      "value": "c"
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 43,
            "end": 58,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 46,
              "decorators": [],
              "name": "num",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 57,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 48,
                "end": 57,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 48,
                    "end": 49,
                    "literal": {
                      "type": "Literal",
                      "start": 48,
                      "end": 49,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 52,
                    "end": 53,
                    "literal": {
                      "type": "Literal",
                      "start": 52,
                      "end": 53,
                      "raw": "2",
                      "value": 2
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 56,
                    "end": 57,
                    "literal": {
                      "type": "Literal",
                      "start": 56,
                      "end": 57,
                      "raw": "3",
                      "value": 3
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 63,
      "end": 177,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 85,
        "decorators": [],
        "name": "test1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 166,
          "end": 172,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 169,
            "end": 172,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 171,
              "end": 172,
              "typeName": {
                "type": "Identifier",
                "start": 171,
                "end": 172,
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
        "start": 173,
        "end": 176,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 175,
          "end": 176,
          "typeName": {
            "type": "Identifier",
            "start": 175,
            "end": 176,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 85,
        "end": 165,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 89,
            "end": 162,
            "const": false,
            "constraint": {
              "type": "TSIntersectionType",
              "start": 99,
              "end": 162,
              "types": [
                {
                  "type": "TSMappedType",
                  "start": 99,
                  "end": 137,
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 107,
                    "end": 120,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 113,
                      "end": 120,
                      "typeName": {
                        "type": "Identifier",
                        "start": 113,
                        "end": 120,
                        "decorators": [],
                        "name": "TypeMap",
                        "optional": false
                      }
                    }
                  },
                  "key": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 103,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 123,
                    "end": 135,
                    "elementType": {
                      "type": "TSIndexedAccessType",
                      "start": 123,
                      "end": 133,
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 131,
                        "end": 132,
                        "typeName": {
                          "type": "Identifier",
                          "start": 131,
                          "end": 132,
                          "decorators": [],
                          "name": "K",
                          "optional": false
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 123,
                        "end": 130,
                        "typeName": {
                          "type": "Identifier",
                          "start": 123,
                          "end": 130,
                          "decorators": [],
                          "name": "TypeMap",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 140,
                  "end": 162,
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "start": 142,
                      "end": 160,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 143,
                          "end": 152,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 144,
                            "end": 152,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 146,
                              "end": 152
                            }
                          }
                        }
                      ],
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 153,
                        "end": 160,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 155,
                          "end": 160,
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "start": 155,
                            "end": 158
                          }
                        }
                      }
                    }
                  ]
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
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
      "start": 179,
      "end": 262,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 261,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 191,
            "decorators": [],
            "name": "result",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 194,
            "end": 261,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 200,
                "end": 260,
                "properties": [
                  {
                    "type": "Property",
                    "start": 204,
                    "end": 215,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 204,
                      "end": 207,
                      "decorators": [],
                      "name": "num",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrayExpression",
                      "start": 209,
                      "end": 215,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 210,
                          "end": 211,
                          "raw": "1",
                          "value": 1
                        },
                        {
                          "type": "Literal",
                          "start": 213,
                          "end": 214,
                          "raw": "2",
                          "value": 2
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 219,
                    "end": 234,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 219,
                      "end": 222,
                      "decorators": [],
                      "name": "str",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrayExpression",
                      "start": 224,
                      "end": 234,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 225,
                          "end": 228,
                          "raw": "\"a\"",
                          "value": "a"
                        },
                        {
                          "type": "Literal",
                          "start": 230,
                          "end": 233,
                          "raw": "\"b\"",
                          "value": "b"
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 238,
                    "end": 257,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 242,
                      "decorators": [],
                      "name": "bool",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrayExpression",
                      "start": 244,
                      "end": 257,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 245,
                          "end": 249,
                          "raw": "true",
                          "value": true
                        },
                        {
                          "type": "Literal",
                          "start": 251,
                          "end": 256,
                          "raw": "false",
                          "value": false
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 194,
              "end": 199,
              "decorators": [],
              "name": "test1",
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
      "type": "TSDeclareFunction",
      "start": 264,
      "end": 337,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 281,
        "end": 286,
        "decorators": [],
        "name": "test2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 287,
          "end": 329,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 288,
            "end": 329,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 290,
              "end": 329,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 290,
                  "end": 313,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 292,
                      "end": 311,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 292,
                        "end": 296,
                        "decorators": [],
                        "name": "type",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 296,
                        "end": 311,
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 298,
                          "end": 311,
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "start": 298,
                              "end": 303,
                              "literal": {
                                "type": "Literal",
                                "start": 298,
                                "end": 303,
                                "raw": "\"foo\"",
                                "value": "foo"
                              }
                            },
                            {
                              "type": "TSLiteralType",
                              "start": 306,
                              "end": 311,
                              "literal": {
                                "type": "Literal",
                                "start": 306,
                                "end": 311,
                                "raw": "\"bar\"",
                                "value": "bar"
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 316,
                  "end": 329,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 318,
                      "end": 327,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 318,
                        "end": 322,
                        "decorators": [],
                        "name": "type",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 322,
                        "end": 327,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 324,
                          "end": 327
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 330,
        "end": 336,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 332,
          "end": 336
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 339,
      "end": 362,
      "expression": {
        "type": "CallExpression",
        "start": 339,
        "end": 361,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 345,
            "end": 360,
            "properties": [
              {
                "type": "Property",
                "start": 347,
                "end": 358,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 347,
                  "end": 351,
                  "decorators": [],
                  "name": "type",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 353,
                  "end": 358,
                  "raw": "\"foo\"",
                  "value": "foo"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 339,
          "end": 344,
          "decorators": [],
          "name": "test2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 421,
      "end": 476,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 427,
          "end": 475,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 427,
            "end": 458,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 428,
              "end": 458,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 430,
                "end": 458,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 430,
                    "end": 441,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 432,
                        "end": 439,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 432,
                          "end": 434,
                          "decorators": [],
                          "name": "ml",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 434,
                          "end": 439,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 436,
                            "end": 439
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 444,
                    "end": 458,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 446,
                        "end": 456,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 446,
                          "end": 448,
                          "decorators": [],
                          "name": "ml",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 448,
                          "end": 456,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 450,
                            "end": 456,
                            "literal": {
                              "type": "Literal",
                              "start": 450,
                              "end": 456,
                              "raw": "'edge'",
                              "value": "edge"
                            }
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 461,
            "end": 475,
            "properties": [
              {
                "type": "Property",
                "start": 463,
                "end": 473,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 463,
                  "end": 465,
                  "decorators": [],
                  "name": "ml",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 467,
                  "end": 473,
                  "raw": "'edge'",
                  "value": "edge"
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
      "type": "VariableDeclaration",
      "start": 477,
      "end": 504,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 483,
          "end": 503,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 483,
            "end": 497,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 484,
              "end": 497,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 486,
                "end": 497,
                "types": [
                  {
                    "type": "TSTupleType",
                    "start": 486,
                    "end": 491,
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 487,
                        "end": 490
                      }
                    ]
                  },
                  {
                    "type": "TSTupleType",
                    "start": 494,
                    "end": 497,
                    "elementTypes": [
                      {
                        "type": "TSLiteralType",
                        "start": 495,
                        "end": 496,
                        "literal": {
                          "type": "Literal",
                          "start": 495,
                          "end": 496,
                          "raw": "1",
                          "value": 1
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 500,
            "end": 503,
            "elements": [
              {
                "type": "Literal",
                "start": 501,
                "end": 502,
                "raw": "1",
                "value": 1
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 505,
      "end": 535,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 511,
          "end": 534,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 511,
            "end": 525,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 512,
              "end": 525,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 514,
                "end": 525,
                "types": [
                  {
                    "type": "TSArrayType",
                    "start": 514,
                    "end": 519,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 514,
                      "end": 517
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 522,
                    "end": 525,
                    "elementType": {
                      "type": "TSLiteralType",
                      "start": 522,
                      "end": 523,
                      "literal": {
                        "type": "Literal",
                        "start": 522,
                        "end": 523,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 528,
            "end": 534,
            "elements": [
              {
                "type": "Literal",
                "start": 529,
                "end": 530,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 532,
                "end": 533,
                "raw": "1",
                "value": 1
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 536,
      "end": 578,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 542,
          "end": 577,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 542,
            "end": 566,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 543,
              "end": 566,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 545,
                "end": 566,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 545,
                    "end": 555,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 547,
                        "end": 553,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 547,
                          "end": 548,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 548,
                          "end": 553,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 550,
                            "end": 553
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 558,
                    "end": 566,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 560,
                        "end": 564,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 560,
                          "end": 561,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 561,
                          "end": 564,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 563,
                            "end": 564,
                            "literal": {
                              "type": "Literal",
                              "start": 563,
                              "end": 564,
                              "raw": "1",
                              "value": 1
                            }
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 569,
            "end": 577,
            "properties": [
              {
                "type": "Property",
                "start": 571,
                "end": 575,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 571,
                  "end": 572,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 574,
                  "end": 575,
                  "raw": "1",
                  "value": 1
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
      "type": "VariableDeclaration",
      "start": 579,
      "end": 648,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 585,
          "end": 647,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 585,
            "end": 625,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 586,
              "end": 625,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 588,
                "end": 625,
                "types": [
                  {
                    "type": "TSFunctionType",
                    "start": 589,
                    "end": 603,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 592,
                      "end": 603,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 595,
                        "end": 603,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 597,
                            "end": 601,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 597,
                              "end": 598,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 598,
                              "end": 601,
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "start": 600,
                                "end": 601,
                                "literal": {
                                  "type": "Literal",
                                  "start": 600,
                                  "end": 601,
                                  "raw": "1",
                                  "value": 1
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 608,
                    "end": 624,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 611,
                      "end": 624,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 614,
                        "end": 624,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 616,
                            "end": 622,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 616,
                              "end": 617,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 617,
                              "end": 622,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 619,
                                "end": 622
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 628,
            "end": 647,
            "async": false,
            "body": {
              "type": "ObjectExpression",
              "start": 635,
              "end": 646,
              "properties": [
                {
                  "type": "Property",
                  "start": 639,
                  "end": 643,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 639,
                    "end": 640,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 642,
                    "end": 643,
                    "raw": "1",
                    "value": 1
                  }
                }
              ]
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": []
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
