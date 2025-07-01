__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BadFlatArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 17
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 21
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 18,
            "end": 21
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Depth",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 28
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 37,
              "end": 43
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 23,
            "end": 43
          }
        ],
        "start": 17,
        "end": 44
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 51
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Literal",
                          "value": "done",
                          "raw": "\"done\"",
                          "start": 59,
                          "end": 65
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Arr",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 67,
                              "end": 70
                            },
                            "typeArguments": null,
                            "start": 67,
                            "end": 70
                          },
                          "start": 65,
                          "end": 70
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 59,
                        "end": 71
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Literal",
                          "value": "recur",
                          "raw": "\"recur\"",
                          "start": 76,
                          "end": 83
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConditionalType",
                            "checkType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Arr",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 85,
                                "end": 88
                              },
                              "typeArguments": null,
                              "start": 85,
                              "end": 88
                            },
                            "extendsType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ReadonlyArray",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 97,
                                "end": 110
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSInferType",
                                    "typeParameter": {
                                      "type": "TSTypeParameter",
                                      "name": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "InnerArr",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 117,
                                        "end": 125
                                      },
                                      "constraint": null,
                                      "default": null,
                                      "in": false,
                                      "out": false,
                                      "const": false,
                                      "start": 117,
                                      "end": 125
                                    },
                                    "start": 111,
                                    "end": 125
                                  }
                                ],
                                "start": 110,
                                "end": 126
                              },
                              "start": 97,
                              "end": 126
                            },
                            "trueType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "BadFlatArray",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 133,
                                "end": 145
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "InnerArr",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 146,
                                      "end": 154
                                    },
                                    "typeArguments": null,
                                    "start": 146,
                                    "end": 154
                                  },
                                  {
                                    "type": "TSIndexedAccessType",
                                    "objectType": {
                                      "type": "TSTupleType",
                                      "elementTypes": [
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "UnaryExpression",
                                            "operator": "-",
                                            "argument": {
                                              "type": "Literal",
                                              "value": 1,
                                              "raw": "1",
                                              "start": 158,
                                              "end": 159
                                            },
                                            "prefix": true,
                                            "start": 157,
                                            "end": 159
                                          },
                                          "start": 157,
                                          "end": 159
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0",
                                            "start": 161,
                                            "end": 162
                                          },
                                          "start": 161,
                                          "end": 162
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1",
                                            "start": 164,
                                            "end": 165
                                          },
                                          "start": 164,
                                          "end": 165
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": 2,
                                            "raw": "2",
                                            "start": 167,
                                            "end": 168
                                          },
                                          "start": 167,
                                          "end": 168
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": 3,
                                            "raw": "3",
                                            "start": 170,
                                            "end": 171
                                          },
                                          "start": 170,
                                          "end": 171
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": 4,
                                            "raw": "4",
                                            "start": 173,
                                            "end": 174
                                          },
                                          "start": 173,
                                          "end": 174
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": 5,
                                            "raw": "5",
                                            "start": 176,
                                            "end": 177
                                          },
                                          "start": 176,
                                          "end": 177
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": 6,
                                            "raw": "6",
                                            "start": 179,
                                            "end": 180
                                          },
                                          "start": 179,
                                          "end": 180
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": 7,
                                            "raw": "7",
                                            "start": 182,
                                            "end": 183
                                          },
                                          "start": 182,
                                          "end": 183
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": 8,
                                            "raw": "8",
                                            "start": 185,
                                            "end": 186
                                          },
                                          "start": 185,
                                          "end": 186
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": 9,
                                            "raw": "9",
                                            "start": 188,
                                            "end": 189
                                          },
                                          "start": 188,
                                          "end": 189
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": 10,
                                            "raw": "10",
                                            "start": 191,
                                            "end": 193
                                          },
                                          "start": 191,
                                          "end": 193
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": 11,
                                            "raw": "11",
                                            "start": 195,
                                            "end": 197
                                          },
                                          "start": 195,
                                          "end": 197
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": 12,
                                            "raw": "12",
                                            "start": 199,
                                            "end": 201
                                          },
                                          "start": 199,
                                          "end": 201
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": 13,
                                            "raw": "13",
                                            "start": 203,
                                            "end": 205
                                          },
                                          "start": 203,
                                          "end": 205
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": 14,
                                            "raw": "14",
                                            "start": 207,
                                            "end": 209
                                          },
                                          "start": 207,
                                          "end": 209
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": 15,
                                            "raw": "15",
                                            "start": 211,
                                            "end": 213
                                          },
                                          "start": 211,
                                          "end": 213
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": 16,
                                            "raw": "16",
                                            "start": 215,
                                            "end": 217
                                          },
                                          "start": 215,
                                          "end": 217
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": 17,
                                            "raw": "17",
                                            "start": 219,
                                            "end": 221
                                          },
                                          "start": 219,
                                          "end": 221
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": 18,
                                            "raw": "18",
                                            "start": 223,
                                            "end": 225
                                          },
                                          "start": 223,
                                          "end": 225
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": 19,
                                            "raw": "19",
                                            "start": 227,
                                            "end": 229
                                          },
                                          "start": 227,
                                          "end": 229
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": 20,
                                            "raw": "20",
                                            "start": 231,
                                            "end": 233
                                          },
                                          "start": 231,
                                          "end": 233
                                        }
                                      ],
                                      "start": 156,
                                      "end": 234
                                    },
                                    "indexType": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Depth",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 235,
                                        "end": 240
                                      },
                                      "typeArguments": null,
                                      "start": 235,
                                      "end": 240
                                    },
                                    "start": 156,
                                    "end": 241
                                  }
                                ],
                                "start": 145,
                                "end": 242
                              },
                              "start": 133,
                              "end": 242
                            },
                            "falseType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Arr",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 249,
                                "end": 252
                              },
                              "typeArguments": null,
                              "start": 249,
                              "end": 252
                            },
                            "start": 85,
                            "end": 252
                          },
                          "start": 83,
                          "end": 252
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 76,
                        "end": 252
                      }
                    ],
                    "start": 53,
                    "end": 254
                  },
                  "indexType": {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Depth",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 255,
                        "end": 260
                      },
                      "typeArguments": null,
                      "start": 255,
                      "end": 260
                    },
                    "extendsType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 270,
                          "end": 271
                        },
                        "prefix": true,
                        "start": 269,
                        "end": 271
                      },
                      "start": 269,
                      "end": 271
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "done",
                        "raw": "\"done\"",
                        "start": 274,
                        "end": 280
                      },
                      "start": 274,
                      "end": 280
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "recur",
                        "raw": "\"recur\"",
                        "start": 283,
                        "end": 290
                      },
                      "start": 283,
                      "end": 290
                    },
                    "start": 255,
                    "end": 290
                  },
                  "start": 53,
                  "end": 291
                },
                "start": 51,
                "end": 291
              },
              "accessibility": null,
              "static": false,
              "start": 48,
              "end": 291
            }
          ],
          "start": 47,
          "end": 292
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "obj",
            "raw": "\"obj\"",
            "start": 293,
            "end": 298
          },
          "start": 293,
          "end": 298
        },
        "start": 47,
        "end": 299
      },
      "declare": false,
      "start": 0,
      "end": 300
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "flat",
        "optional": false,
        "typeAnnotation": null,
        "start": 319,
        "end": 323
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 325
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 324,
            "end": 325
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 328
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 337,
              "end": 343
            },
            "default": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 346,
                "end": 347
              },
              "start": 346,
              "end": 347
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 327,
            "end": 347
          }
        ],
        "start": 323,
        "end": 348
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 359,
                "end": 360
              },
              "typeArguments": null,
              "start": 359,
              "end": 360
            },
            "start": 357,
            "end": 360
          },
          "start": 354,
          "end": 360
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "depth",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 374,
                "end": 375
              },
              "typeArguments": null,
              "start": 374,
              "end": 375
            },
            "start": 372,
            "end": 375
          },
          "start": 366,
          "end": 375
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BadFlatArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 379,
              "end": 391
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 392,
                    "end": 393
                  },
                  "typeArguments": null,
                  "start": 392,
                  "end": 393
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 395,
                    "end": 396
                  },
                  "typeArguments": null,
                  "start": 395,
                  "end": 396
                }
              ],
              "start": 391,
              "end": 397
            },
            "start": 379,
            "end": 397
          },
          "start": 379,
          "end": 399
        },
        "start": 377,
        "end": 399
      },
      "body": null,
      "expression": false,
      "start": 302,
      "end": 399
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 410,
        "end": 413
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 415
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 414,
            "end": 415
          }
        ],
        "start": 413,
        "end": 416
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 422,
                  "end": 423
                },
                "typeArguments": null,
                "start": 422,
                "end": 423
              },
              "start": 422,
              "end": 425
            },
            "start": 420,
            "end": 425
          },
          "start": 417,
          "end": 425
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "depth",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 434,
              "end": 440
            },
            "start": 432,
            "end": 440
          },
          "start": 427,
          "end": 440
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "flat",
                "optional": false,
                "typeAnnotation": null,
                "start": 455,
                "end": 459
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 460,
                  "end": 463
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "depth",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 465,
                  "end": 470
                }
              ],
              "optional": false,
              "start": 455,
              "end": 471
            },
            "start": 448,
            "end": 472
          }
        ],
        "start": 442,
        "end": 474
      },
      "expression": false,
      "start": 401,
      "end": 474
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 474
}
```
