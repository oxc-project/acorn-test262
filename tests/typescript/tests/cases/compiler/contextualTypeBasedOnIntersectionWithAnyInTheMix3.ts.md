__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 648,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 61,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 12,
        "decorators": [],
        "name": "TypeMap",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 22,
              "decorators": [],
              "name": "str",
              "optional": false,
              "typeAnnotation": null
            },
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
                      "value": "a",
                      "raw": "\"a\""
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
                      "value": "b",
                      "raw": "\"b\""
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
                      "value": "c",
                      "raw": "\"c\""
                    }
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 43,
            "end": 58,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 46,
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null
            },
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
                      "value": 1,
                      "raw": "1"
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
                      "value": 2,
                      "raw": "2"
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
                      "value": 3,
                      "raw": "3"
                    }
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
      "type": "TSDeclareFunction",
      "start": 63,
      "end": 177,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 85,
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 85,
        "end": 165,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 89,
            "end": 162,
            "name": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSIntersectionType",
              "start": 99,
              "end": 162,
              "types": [
                {
                  "type": "TSMappedType",
                  "start": 99,
                  "end": 137,
                  "key": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 103,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "optional": false,
                  "readonly": null
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
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null
                    }
                  ]
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
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 179,
      "end": 262,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 261,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 191,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 194,
            "end": 261,
            "callee": {
              "type": "Identifier",
              "start": 194,
              "end": 199,
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 204,
                      "end": 207,
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "start": 209,
                      "end": 215,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 210,
                          "end": 211,
                          "value": 1,
                          "raw": "1"
                        },
                        {
                          "type": "Literal",
                          "start": 213,
                          "end": 214,
                          "value": 2,
                          "raw": "2"
                        }
                      ]
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 219,
                    "end": 234,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 219,
                      "end": 222,
                      "decorators": [],
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "start": 224,
                      "end": 234,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 225,
                          "end": 228,
                          "value": "a",
                          "raw": "\"a\""
                        },
                        {
                          "type": "Literal",
                          "start": 230,
                          "end": 233,
                          "value": "b",
                          "raw": "\"b\""
                        }
                      ]
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 238,
                    "end": 257,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 242,
                      "decorators": [],
                      "name": "bool",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "start": 244,
                      "end": 257,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 245,
                          "end": 249,
                          "value": true,
                          "raw": "true"
                        },
                        {
                          "type": "Literal",
                          "start": 251,
                          "end": 256,
                          "value": false,
                          "raw": "false"
                        }
                      ]
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
    {
      "type": "TSDeclareFunction",
      "start": 264,
      "end": 337,
      "id": {
        "type": "Identifier",
        "start": 281,
        "end": 286,
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 292,
                        "end": 296,
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                                "value": "foo",
                                "raw": "\"foo\""
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
                                "value": "bar",
                                "raw": "\"bar\""
                              }
                            }
                          ]
                        }
                      },
                      "accessibility": null,
                      "static": false
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
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 318,
                        "end": 322,
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 322,
                        "end": 327,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 324,
                          "end": 327
                        }
                      },
                      "accessibility": null,
                      "static": false
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 339,
      "end": 362,
      "expression": {
        "type": "CallExpression",
        "start": 339,
        "end": 361,
        "callee": {
          "type": "Identifier",
          "start": 339,
          "end": 344,
          "decorators": [],
          "name": "test2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 347,
                  "end": 351,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 353,
                  "end": 358,
                  "value": "foo",
                  "raw": "\"foo\""
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
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 421,
      "end": 476,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 427,
          "end": 475,
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 432,
                          "end": 434,
                          "decorators": [],
                          "name": "ml",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 434,
                          "end": 439,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 436,
                            "end": 439
                          }
                        },
                        "accessibility": null,
                        "static": false
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 446,
                          "end": 448,
                          "decorators": [],
                          "name": "ml",
                          "optional": false,
                          "typeAnnotation": null
                        },
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
                              "value": "edge",
                              "raw": "'edge'"
                            }
                          }
                        },
                        "accessibility": null,
                        "static": false
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 463,
                  "end": 465,
                  "decorators": [],
                  "name": "ml",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 467,
                  "end": 473,
                  "value": "edge",
                  "raw": "'edge'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 477,
      "end": 504,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 483,
          "end": 503,
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
                          "value": 1,
                          "raw": "1"
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
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 505,
      "end": 535,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 511,
          "end": 534,
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
                        "value": 1,
                        "raw": "1"
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
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 532,
                "end": 533,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 536,
      "end": 578,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 542,
          "end": 577,
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 547,
                          "end": 548,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 548,
                          "end": 553,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 550,
                            "end": 553
                          }
                        },
                        "accessibility": null,
                        "static": false
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 560,
                          "end": 561,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
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
                              "value": 1,
                              "raw": "1"
                            }
                          }
                        },
                        "accessibility": null,
                        "static": false
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 571,
                  "end": 572,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 574,
                  "end": 575,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 579,
      "end": 648,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 585,
          "end": 647,
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
                    "typeParameters": null,
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
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 597,
                              "end": 598,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
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
                                  "value": 1,
                                  "raw": "1"
                                }
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 608,
                    "end": 624,
                    "typeParameters": null,
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
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 616,
                              "end": 617,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 617,
                              "end": 622,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 619,
                                "end": 622
                              }
                            },
                            "accessibility": null,
                            "static": false
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
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "start": 635,
              "end": 646,
              "properties": [
                {
                  "type": "Property",
                  "start": 639,
                  "end": 643,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 639,
                    "end": 640,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 642,
                    "end": 643,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
