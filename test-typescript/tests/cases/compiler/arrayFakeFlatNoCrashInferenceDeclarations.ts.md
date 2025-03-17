__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 474,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 300,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 17,
        "name": "BadFlatArray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 17,
        "end": 44,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 18,
            "end": 21,
            "name": {
              "type": "Identifier",
              "start": 18,
              "end": 21,
              "name": "Arr",
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
            "start": 23,
            "end": 43,
            "name": {
              "type": "Identifier",
              "start": 23,
              "end": 28,
              "name": "Depth",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 37,
              "end": 43
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 47,
        "end": 299,
        "objectType": {
          "type": "TSTypeLiteral",
          "start": 47,
          "end": 292,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 48,
              "end": 291,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 48,
                "end": 51,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 51,
                "end": 291,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 53,
                  "end": 291,
                  "objectType": {
                    "type": "TSTypeLiteral",
                    "start": 53,
                    "end": 254,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 59,
                        "end": 71,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Literal",
                          "start": 59,
                          "end": 65,
                          "value": "done",
                          "raw": "\"done\""
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 65,
                          "end": 70,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 67,
                            "end": 70,
                            "typeName": {
                              "type": "Identifier",
                              "start": 67,
                              "end": 70,
                              "name": "Arr",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 76,
                        "end": 252,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Literal",
                          "start": 76,
                          "end": 83,
                          "value": "recur",
                          "raw": "\"recur\""
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 83,
                          "end": 252,
                          "typeAnnotation": {
                            "type": "TSConditionalType",
                            "start": 85,
                            "end": 252,
                            "checkType": {
                              "type": "TSTypeReference",
                              "start": 85,
                              "end": 88,
                              "typeName": {
                                "type": "Identifier",
                                "start": 85,
                                "end": 88,
                                "name": "Arr",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            "extendsType": {
                              "type": "TSTypeReference",
                              "start": 97,
                              "end": 126,
                              "typeName": {
                                "type": "Identifier",
                                "start": 97,
                                "end": 110,
                                "name": "ReadonlyArray",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 110,
                                "end": 126,
                                "params": [
                                  {
                                    "type": "TSInferType",
                                    "start": 111,
                                    "end": 125,
                                    "typeParameter": {
                                      "type": "TSTypeParameter",
                                      "start": 117,
                                      "end": 125,
                                      "name": {
                                        "type": "Identifier",
                                        "start": 117,
                                        "end": 125,
                                        "name": "InnerArr",
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
                                  }
                                ]
                              }
                            },
                            "trueType": {
                              "type": "TSTypeReference",
                              "start": 133,
                              "end": 242,
                              "typeName": {
                                "type": "Identifier",
                                "start": 133,
                                "end": 145,
                                "name": "BadFlatArray",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 145,
                                "end": 242,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 146,
                                    "end": 154,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 146,
                                      "end": 154,
                                      "name": "InnerArr",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSIndexedAccessType",
                                    "start": 156,
                                    "end": 241,
                                    "objectType": {
                                      "type": "TSTupleType",
                                      "start": 156,
                                      "end": 234,
                                      "elementTypes": [
                                        {
                                          "type": "TSLiteralType",
                                          "start": 157,
                                          "end": 159,
                                          "literal": {
                                            "type": "UnaryExpression",
                                            "start": 157,
                                            "end": 159,
                                            "operator": "-",
                                            "prefix": true,
                                            "argument": {
                                              "type": "Literal",
                                              "start": 158,
                                              "end": 159,
                                              "value": 1,
                                              "raw": "1"
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "start": 161,
                                          "end": 162,
                                          "literal": {
                                            "type": "Literal",
                                            "start": 161,
                                            "end": 162,
                                            "value": 0,
                                            "raw": "0"
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "start": 164,
                                          "end": 165,
                                          "literal": {
                                            "type": "Literal",
                                            "start": 164,
                                            "end": 165,
                                            "value": 1,
                                            "raw": "1"
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "start": 167,
                                          "end": 168,
                                          "literal": {
                                            "type": "Literal",
                                            "start": 167,
                                            "end": 168,
                                            "value": 2,
                                            "raw": "2"
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "start": 170,
                                          "end": 171,
                                          "literal": {
                                            "type": "Literal",
                                            "start": 170,
                                            "end": 171,
                                            "value": 3,
                                            "raw": "3"
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "start": 173,
                                          "end": 174,
                                          "literal": {
                                            "type": "Literal",
                                            "start": 173,
                                            "end": 174,
                                            "value": 4,
                                            "raw": "4"
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "start": 176,
                                          "end": 177,
                                          "literal": {
                                            "type": "Literal",
                                            "start": 176,
                                            "end": 177,
                                            "value": 5,
                                            "raw": "5"
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "start": 179,
                                          "end": 180,
                                          "literal": {
                                            "type": "Literal",
                                            "start": 179,
                                            "end": 180,
                                            "value": 6,
                                            "raw": "6"
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "start": 182,
                                          "end": 183,
                                          "literal": {
                                            "type": "Literal",
                                            "start": 182,
                                            "end": 183,
                                            "value": 7,
                                            "raw": "7"
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "start": 185,
                                          "end": 186,
                                          "literal": {
                                            "type": "Literal",
                                            "start": 185,
                                            "end": 186,
                                            "value": 8,
                                            "raw": "8"
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "start": 188,
                                          "end": 189,
                                          "literal": {
                                            "type": "Literal",
                                            "start": 188,
                                            "end": 189,
                                            "value": 9,
                                            "raw": "9"
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "start": 191,
                                          "end": 193,
                                          "literal": {
                                            "type": "Literal",
                                            "start": 191,
                                            "end": 193,
                                            "value": 10,
                                            "raw": "10"
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "start": 195,
                                          "end": 197,
                                          "literal": {
                                            "type": "Literal",
                                            "start": 195,
                                            "end": 197,
                                            "value": 11,
                                            "raw": "11"
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "start": 199,
                                          "end": 201,
                                          "literal": {
                                            "type": "Literal",
                                            "start": 199,
                                            "end": 201,
                                            "value": 12,
                                            "raw": "12"
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "start": 203,
                                          "end": 205,
                                          "literal": {
                                            "type": "Literal",
                                            "start": 203,
                                            "end": 205,
                                            "value": 13,
                                            "raw": "13"
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "start": 207,
                                          "end": 209,
                                          "literal": {
                                            "type": "Literal",
                                            "start": 207,
                                            "end": 209,
                                            "value": 14,
                                            "raw": "14"
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "start": 211,
                                          "end": 213,
                                          "literal": {
                                            "type": "Literal",
                                            "start": 211,
                                            "end": 213,
                                            "value": 15,
                                            "raw": "15"
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "start": 215,
                                          "end": 217,
                                          "literal": {
                                            "type": "Literal",
                                            "start": 215,
                                            "end": 217,
                                            "value": 16,
                                            "raw": "16"
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "start": 219,
                                          "end": 221,
                                          "literal": {
                                            "type": "Literal",
                                            "start": 219,
                                            "end": 221,
                                            "value": 17,
                                            "raw": "17"
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "start": 223,
                                          "end": 225,
                                          "literal": {
                                            "type": "Literal",
                                            "start": 223,
                                            "end": 225,
                                            "value": 18,
                                            "raw": "18"
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "start": 227,
                                          "end": 229,
                                          "literal": {
                                            "type": "Literal",
                                            "start": 227,
                                            "end": 229,
                                            "value": 19,
                                            "raw": "19"
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "start": 231,
                                          "end": 233,
                                          "literal": {
                                            "type": "Literal",
                                            "start": 231,
                                            "end": 233,
                                            "value": 20,
                                            "raw": "20"
                                          }
                                        }
                                      ]
                                    },
                                    "indexType": {
                                      "type": "TSTypeReference",
                                      "start": 235,
                                      "end": 240,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 235,
                                        "end": 240,
                                        "name": "Depth",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  }
                                ]
                              }
                            },
                            "falseType": {
                              "type": "TSTypeReference",
                              "start": 249,
                              "end": 252,
                              "typeName": {
                                "type": "Identifier",
                                "start": 249,
                                "end": 252,
                                "name": "Arr",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  "indexType": {
                    "type": "TSConditionalType",
                    "start": 255,
                    "end": 290,
                    "checkType": {
                      "type": "TSTypeReference",
                      "start": 255,
                      "end": 260,
                      "typeName": {
                        "type": "Identifier",
                        "start": 255,
                        "end": 260,
                        "name": "Depth",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "extendsType": {
                      "type": "TSLiteralType",
                      "start": 269,
                      "end": 271,
                      "literal": {
                        "type": "UnaryExpression",
                        "start": 269,
                        "end": 271,
                        "operator": "-",
                        "prefix": true,
                        "argument": {
                          "type": "Literal",
                          "start": 270,
                          "end": 271,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "start": 274,
                      "end": 280,
                      "literal": {
                        "type": "Literal",
                        "start": 274,
                        "end": 280,
                        "value": "done",
                        "raw": "\"done\""
                      }
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "start": 283,
                      "end": 290,
                      "literal": {
                        "type": "Literal",
                        "start": 283,
                        "end": 290,
                        "value": "recur",
                        "raw": "\"recur\""
                      }
                    }
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 293,
          "end": 298,
          "literal": {
            "type": "Literal",
            "start": 293,
            "end": 298,
            "value": "obj",
            "raw": "\"obj\""
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 302,
      "end": 399,
      "id": {
        "type": "Identifier",
        "start": 319,
        "end": 323,
        "name": "flat",
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
          "start": 354,
          "end": 360,
          "name": "arr",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 357,
            "end": 360,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 359,
              "end": 360,
              "typeName": {
                "type": "Identifier",
                "start": 359,
                "end": 360,
                "name": "A",
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
          "start": 366,
          "end": 375,
          "name": "depth",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 372,
            "end": 375,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 374,
              "end": 375,
              "typeName": {
                "type": "Identifier",
                "start": 374,
                "end": 375,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 323,
        "end": 348,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 324,
            "end": 325,
            "name": {
              "type": "Identifier",
              "start": 324,
              "end": 325,
              "name": "A",
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
            "start": 327,
            "end": 347,
            "name": {
              "type": "Identifier",
              "start": 327,
              "end": 328,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 337,
              "end": 343
            },
            "default": {
              "type": "TSLiteralType",
              "start": 346,
              "end": 347,
              "literal": {
                "type": "Literal",
                "start": 346,
                "end": 347,
                "value": 1,
                "raw": "1"
              }
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 377,
        "end": 399,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 379,
          "end": 399,
          "elementType": {
            "type": "TSTypeReference",
            "start": 379,
            "end": 397,
            "typeName": {
              "type": "Identifier",
              "start": 379,
              "end": 391,
              "name": "BadFlatArray",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 391,
              "end": 397,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 392,
                  "end": 393,
                  "typeName": {
                    "type": "Identifier",
                    "start": 392,
                    "end": 393,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 395,
                  "end": 396,
                  "typeName": {
                    "type": "Identifier",
                    "start": 395,
                    "end": 396,
                    "name": "D",
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
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 401,
      "end": 474,
      "id": {
        "type": "Identifier",
        "start": 410,
        "end": 413,
        "name": "foo",
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
          "start": 417,
          "end": 425,
          "name": "arr",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 420,
            "end": 425,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 422,
              "end": 425,
              "elementType": {
                "type": "TSTypeReference",
                "start": 422,
                "end": 423,
                "typeName": {
                  "type": "Identifier",
                  "start": 422,
                  "end": 423,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 427,
          "end": 440,
          "name": "depth",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 432,
            "end": 440,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 434,
              "end": 440
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 442,
        "end": 474,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 448,
            "end": 472,
            "argument": {
              "type": "CallExpression",
              "start": 455,
              "end": 471,
              "callee": {
                "type": "Identifier",
                "start": 455,
                "end": 459,
                "name": "flat",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 460,
                  "end": 463,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 465,
                  "end": 470,
                  "name": "depth",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 413,
        "end": 416,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 414,
            "end": 415,
            "name": {
              "type": "Identifier",
              "start": 414,
              "end": 415,
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
