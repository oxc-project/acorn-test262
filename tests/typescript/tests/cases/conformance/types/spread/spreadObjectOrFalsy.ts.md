__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 865,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 15,
          "end": 31,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 16,
            "end": 31,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 18,
              "end": 31,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 18,
                  "end": 19,
                  "typeName": {
                    "type": "Identifier",
                    "start": 18,
                    "end": 19,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 22,
                  "end": 31
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 33,
        "end": 67,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 39,
            "end": 55,
            "argument": {
              "type": "ObjectExpression",
              "start": 46,
              "end": 54,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 48,
                  "end": 52,
                  "argument": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 69,
      "end": 130,
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 80,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 80,
        "end": 83,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 81,
            "end": 82,
            "name": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
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
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 84,
          "end": 104,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 85,
            "end": 104,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 87,
              "end": 104,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 87,
                  "end": 88,
                  "typeName": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 88,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSIntersectionType",
                  "start": 91,
                  "end": 104,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 91,
                      "end": 92,
                      "typeName": {
                        "type": "Identifier",
                        "start": 91,
                        "end": 92,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 95,
                      "end": 104
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 106,
        "end": 130,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 112,
            "end": 128,
            "argument": {
              "type": "ObjectExpression",
              "start": 119,
              "end": 127,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 121,
                  "end": 125,
                  "argument": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 125,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 132,
      "end": 205,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 143,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 143,
        "end": 164,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 144,
            "end": 163,
            "name": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUndefinedKeyword",
              "start": 154,
              "end": 163
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
          "start": 165,
          "end": 169,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 166,
            "end": 169,
            "typeAnnotation": {
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
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 171,
        "end": 205,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 177,
            "end": 193,
            "argument": {
              "type": "ObjectExpression",
              "start": 184,
              "end": 192,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 186,
                  "end": 190,
                  "argument": {
                    "type": "Identifier",
                    "start": 189,
                    "end": 190,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 207,
      "end": 279,
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 218,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 218,
        "end": 239,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 219,
            "end": 238,
            "name": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUndefinedKeyword",
              "start": 229,
              "end": 238
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
          "start": 240,
          "end": 253,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 241,
            "end": 253,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 243,
              "end": 253,
              "types": [
                {
                  "type": "TSObjectKeyword",
                  "start": 243,
                  "end": 249
                },
                {
                  "type": "TSTypeReference",
                  "start": 252,
                  "end": 253,
                  "typeName": {
                    "type": "Identifier",
                    "start": 252,
                    "end": 253,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 255,
        "end": 279,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 261,
            "end": 277,
            "argument": {
              "type": "ObjectExpression",
              "start": 268,
              "end": 276,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 270,
                  "end": 274,
                  "argument": {
                    "type": "Identifier",
                    "start": 273,
                    "end": 274,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 281,
      "end": 351,
      "id": {
        "type": "Identifier",
        "start": 290,
        "end": 292,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 292,
        "end": 316,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 293,
            "end": 294,
            "name": {
              "type": "Identifier",
              "start": 293,
              "end": 294,
              "decorators": [],
              "name": "S",
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
            "start": 296,
            "end": 315,
            "name": {
              "type": "Identifier",
              "start": 296,
              "end": 297,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUndefinedKeyword",
              "start": 306,
              "end": 315
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
          "start": 317,
          "end": 325,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 318,
            "end": 325,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 320,
              "end": 325,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 320,
                  "end": 321,
                  "typeName": {
                    "type": "Identifier",
                    "start": 320,
                    "end": 321,
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 324,
                  "end": 325,
                  "typeName": {
                    "type": "Identifier",
                    "start": 324,
                    "end": 325,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 327,
        "end": 351,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 333,
            "end": 349,
            "argument": {
              "type": "ObjectExpression",
              "start": 340,
              "end": 348,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 342,
                  "end": 346,
                  "argument": {
                    "type": "Identifier",
                    "start": 345,
                    "end": 346,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 353,
      "end": 425,
      "id": {
        "type": "Identifier",
        "start": 362,
        "end": 364,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 364,
        "end": 394,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 365,
            "end": 393,
            "name": {
              "type": "Identifier",
              "start": 365,
              "end": 366,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 375,
              "end": 393,
              "types": [
                {
                  "type": "TSObjectKeyword",
                  "start": 375,
                  "end": 381
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 384,
                  "end": 393
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
          "start": 395,
          "end": 399,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 396,
            "end": 399,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 398,
              "end": 399,
              "typeName": {
                "type": "Identifier",
                "start": 398,
                "end": 399,
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
        "start": 401,
        "end": 425,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 407,
            "end": 423,
            "argument": {
              "type": "ObjectExpression",
              "start": 414,
              "end": 422,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 416,
                  "end": 420,
                  "argument": {
                    "type": "Identifier",
                    "start": 419,
                    "end": 420,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 449,
      "end": 576,
      "id": {
        "type": "Identifier",
        "start": 458,
        "end": 460,
        "decorators": [],
        "name": "g1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 460,
        "end": 512,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 461,
            "end": 473,
            "name": {
              "type": "Identifier",
              "start": 461,
              "end": 462,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 471,
              "end": 473,
              "members": []
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 475,
            "end": 511,
            "name": {
              "type": "Identifier",
              "start": 475,
              "end": 476,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 485,
              "end": 511,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 487,
                  "end": 509,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 487,
                    "end": 488,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 488,
                    "end": 509,
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "start": 490,
                      "end": 509,
                      "types": [
                        {
                          "type": "TSUnionType",
                          "start": 491,
                          "end": 504,
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "start": 491,
                              "end": 492,
                              "typeName": {
                                "type": "Identifier",
                                "start": 491,
                                "end": 492,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSUndefinedKeyword",
                              "start": 495,
                              "end": 504
                            }
                          ]
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 508,
                          "end": 509,
                          "typeName": {
                            "type": "Identifier",
                            "start": 508,
                            "end": 509,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
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
          "start": 513,
          "end": 517,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 514,
            "end": 517,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 516,
              "end": 517,
              "typeName": {
                "type": "Identifier",
                "start": 516,
                "end": 517,
                "decorators": [],
                "name": "A",
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
        "start": 519,
        "end": 576,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 525,
            "end": 541,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 531,
                "end": 540,
                "id": {
                  "type": "ObjectPattern",
                  "start": 531,
                  "end": 536,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 533,
                      "end": 534,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 533,
                        "end": 534,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 533,
                        "end": 534,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 539,
                  "end": 540,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 546,
            "end": 574,
            "argument": {
              "type": "ObjectExpression",
              "start": 553,
              "end": 573,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 563,
                  "end": 567,
                  "argument": {
                    "type": "Identifier",
                    "start": 566,
                    "end": 567,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 600,
      "end": 640,
      "id": {
        "type": "Identifier",
        "start": 610,
        "end": 620,
        "decorators": [],
        "name": "DatafulFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 620,
        "end": 623,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 621,
            "end": 622,
            "name": {
              "type": "Identifier",
              "start": 621,
              "end": 622,
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
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 624,
        "end": 640,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 630,
            "end": 638,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 630,
              "end": 634,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 634,
              "end": 637,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 636,
                "end": 637,
                "typeName": {
                  "type": "Identifier",
                  "start": 636,
                  "end": 637,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 642,
      "end": 865,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 648,
        "end": 651,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 651,
        "end": 669,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 652,
            "end": 668,
            "name": {
              "type": "Identifier",
              "start": 652,
              "end": 653,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 662,
              "end": 668
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 670,
        "end": 865,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 676,
            "end": 696,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 676,
              "end": 680,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 680,
              "end": 695,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 682,
                "end": 695,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 682,
                    "end": 683,
                    "typeName": {
                      "type": "Identifier",
                      "start": 682,
                      "end": 683,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 686,
                    "end": 695
                  }
                ]
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 701,
            "end": 797,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 701,
              "end": 704,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 704,
              "end": 797,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 707,
                "end": 797,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 717,
                    "end": 791,
                    "test": {
                      "type": "CallExpression",
                      "start": 721,
                      "end": 735,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 721,
                        "end": 733,
                        "object": {
                          "type": "ThisExpression",
                          "start": 721,
                          "end": 725
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 726,
                          "end": 733,
                          "decorators": [],
                          "name": "hasData",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 737,
                      "end": 791,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 751,
                          "end": 781,
                          "expression": {
                            "type": "CallExpression",
                            "start": 751,
                            "end": 780,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 751,
                              "end": 778,
                              "object": {
                                "type": "MemberExpression",
                                "start": 751,
                                "end": 760,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 751,
                                  "end": 755
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 756,
                                  "end": 760,
                                  "decorators": [],
                                  "name": "data",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 761,
                                "end": 778,
                                "decorators": [],
                                "name": "toLocaleLowerCase",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 802,
            "end": 863,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 802,
              "end": 809,
              "decorators": [],
              "name": "hasData",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 809,
              "end": 863,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 811,
                "end": 834,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 813,
                  "end": 834,
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 813,
                    "end": 817
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 821,
                    "end": 834,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 821,
                      "end": 834,
                      "typeName": {
                        "type": "Identifier",
                        "start": 821,
                        "end": 831,
                        "decorators": [],
                        "name": "DatafulFoo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 831,
                        "end": 834,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 832,
                            "end": 833,
                            "typeName": {
                              "type": "Identifier",
                              "start": 832,
                              "end": 833,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 835,
                "end": 863,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 845,
                    "end": 857,
                    "argument": {
                      "type": "Literal",
                      "start": 852,
                      "end": 856,
                      "value": true,
                      "raw": "true"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
