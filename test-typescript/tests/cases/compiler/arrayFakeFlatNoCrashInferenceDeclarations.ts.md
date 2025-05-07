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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 17,
        "decorators": [],
        "name": "BadFlatArray",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 47,
        "end": 299,
        "indexType": {
          "type": "TSLiteralType",
          "start": 293,
          "end": 298,
          "literal": {
            "type": "Literal",
            "start": 293,
            "end": 298,
            "raw": "\"obj\"",
            "value": "obj",
            "regex": null,
            "bigint": null
          }
        },
        "objectType": {
          "type": "TSTypeLiteral",
          "start": 47,
          "end": 292,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 48,
              "end": 291,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 48,
                "end": 51,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 51,
                "end": 291,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 53,
                  "end": 291,
                  "indexType": {
                    "type": "TSConditionalType",
                    "start": 255,
                    "end": 290,
                    "checkType": {
                      "type": "TSTypeReference",
                      "start": 255,
                      "end": 260,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 255,
                        "end": 260,
                        "decorators": [],
                        "name": "Depth",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "extendsType": {
                      "type": "TSLiteralType",
                      "start": 269,
                      "end": 271,
                      "literal": {
                        "type": "UnaryExpression",
                        "start": 269,
                        "end": 271,
                        "argument": {
                          "type": "Literal",
                          "start": 270,
                          "end": 271,
                          "raw": "1",
                          "value": 1,
                          "regex": null,
                          "bigint": null
                        },
                        "operator": "-",
                        "prefix": true
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
                        "raw": "\"recur\"",
                        "value": "recur",
                        "regex": null,
                        "bigint": null
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
                        "raw": "\"done\"",
                        "value": "done",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeLiteral",
                    "start": 53,
                    "end": 254,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 59,
                        "end": 71,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Literal",
                          "start": 59,
                          "end": 65,
                          "raw": "\"done\"",
                          "value": "done",
                          "regex": null,
                          "bigint": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 65,
                          "end": 70,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 67,
                            "end": 70,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 67,
                              "end": 70,
                              "decorators": [],
                              "name": "Arr",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 76,
                        "end": 252,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Literal",
                          "start": 76,
                          "end": 83,
                          "raw": "\"recur\"",
                          "value": "recur",
                          "regex": null,
                          "bigint": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
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
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 85,
                                "end": 88,
                                "decorators": [],
                                "name": "Arr",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "extendsType": {
                              "type": "TSTypeReference",
                              "start": 97,
                              "end": 126,
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
                                      "const": false,
                                      "constraint": null,
                                      "default": null,
                                      "in": false,
                                      "name": {
                                        "type": "Identifier",
                                        "start": 117,
                                        "end": 125,
                                        "decorators": [],
                                        "name": "InnerArr",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "out": false
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 97,
                                "end": 110,
                                "decorators": [],
                                "name": "ReadonlyArray",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "falseType": {
                              "type": "TSTypeReference",
                              "start": 249,
                              "end": 252,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 249,
                                "end": 252,
                                "decorators": [],
                                "name": "Arr",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "trueType": {
                              "type": "TSTypeReference",
                              "start": 133,
                              "end": 242,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 145,
                                "end": 242,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 146,
                                    "end": 154,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 146,
                                      "end": 154,
                                      "decorators": [],
                                      "name": "InnerArr",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  {
                                    "type": "TSIndexedAccessType",
                                    "start": 156,
                                    "end": 241,
                                    "indexType": {
                                      "type": "TSTypeReference",
                                      "start": 235,
                                      "end": 240,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 235,
                                        "end": 240,
                                        "decorators": [],
                                        "name": "Depth",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
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
                                            "argument": {
                                              "type": "Literal",
                                              "start": 158,
                                              "end": 159,
                                              "raw": "1",
                                              "value": 1,
                                              "regex": null,
                                              "bigint": null
                                            },
                                            "operator": "-",
                                            "prefix": true
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
                                            "raw": "0",
                                            "value": 0,
                                            "regex": null,
                                            "bigint": null
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
                                            "raw": "1",
                                            "value": 1,
                                            "regex": null,
                                            "bigint": null
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
                                            "raw": "2",
                                            "value": 2,
                                            "regex": null,
                                            "bigint": null
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
                                            "raw": "3",
                                            "value": 3,
                                            "regex": null,
                                            "bigint": null
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
                                            "raw": "4",
                                            "value": 4,
                                            "regex": null,
                                            "bigint": null
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
                                            "raw": "5",
                                            "value": 5,
                                            "regex": null,
                                            "bigint": null
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
                                            "raw": "6",
                                            "value": 6,
                                            "regex": null,
                                            "bigint": null
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
                                            "raw": "7",
                                            "value": 7,
                                            "regex": null,
                                            "bigint": null
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
                                            "raw": "8",
                                            "value": 8,
                                            "regex": null,
                                            "bigint": null
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
                                            "raw": "9",
                                            "value": 9,
                                            "regex": null,
                                            "bigint": null
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
                                            "raw": "10",
                                            "value": 10,
                                            "regex": null,
                                            "bigint": null
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
                                            "raw": "11",
                                            "value": 11,
                                            "regex": null,
                                            "bigint": null
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
                                            "raw": "12",
                                            "value": 12,
                                            "regex": null,
                                            "bigint": null
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
                                            "raw": "13",
                                            "value": 13,
                                            "regex": null,
                                            "bigint": null
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
                                            "raw": "14",
                                            "value": 14,
                                            "regex": null,
                                            "bigint": null
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
                                            "raw": "15",
                                            "value": 15,
                                            "regex": null,
                                            "bigint": null
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
                                            "raw": "16",
                                            "value": 16,
                                            "regex": null,
                                            "bigint": null
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
                                            "raw": "17",
                                            "value": 17,
                                            "regex": null,
                                            "bigint": null
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
                                            "raw": "18",
                                            "value": 18,
                                            "regex": null,
                                            "bigint": null
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
                                            "raw": "19",
                                            "value": 19,
                                            "regex": null,
                                            "bigint": null
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
                                            "raw": "20",
                                            "value": 20,
                                            "regex": null,
                                            "bigint": null
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 133,
                                "end": 145,
                                "decorators": [],
                                "name": "BadFlatArray",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          ]
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 18,
              "end": 21,
              "decorators": [],
              "name": "Arr",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 23,
            "end": 43,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 37,
              "end": 43
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 23,
              "end": 28,
              "decorators": [],
              "name": "Depth",
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
      "start": 302,
      "end": 399,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 319,
        "end": 323,
        "decorators": [],
        "name": "flat",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 354,
          "end": 360,
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 357,
            "end": 360,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 359,
              "end": 360,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 359,
                "end": 360,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 366,
          "end": 375,
          "decorators": [],
          "name": "depth",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 372,
            "end": 375,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 374,
              "end": 375,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 374,
                "end": 375,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
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
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 391,
              "end": 397,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 392,
                  "end": 393,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 392,
                    "end": 393,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 395,
                  "end": 396,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 395,
                    "end": 396,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 379,
              "end": 391,
              "decorators": [],
              "name": "BadFlatArray",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 323,
        "end": 348,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 324,
            "end": 325,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 324,
              "end": 325,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 327,
            "end": 347,
            "const": false,
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
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 327,
              "end": 328,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 401,
      "end": 474,
      "async": false,
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
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 460,
                  "end": 463,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 465,
                  "end": 470,
                  "decorators": [],
                  "name": "depth",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 455,
                "end": 459,
                "decorators": [],
                "name": "flat",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 410,
        "end": 413,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 417,
          "end": 425,
          "decorators": [],
          "name": "arr",
          "optional": false,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 422,
                  "end": 423,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 427,
          "end": 440,
          "decorators": [],
          "name": "depth",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 432,
            "end": 440,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 434,
              "end": 440
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 413,
        "end": 416,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 414,
            "end": 415,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 414,
              "end": 415,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
