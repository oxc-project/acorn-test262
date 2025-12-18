__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "BadFlatArray",
    "start": 5,
    "end": 17,
    "range": [
      5,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Identifier",
    "value": "Arr",
    "start": 18,
    "end": 21,
    "range": [
      18,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "Depth",
    "start": 23,
    "end": 28,
    "range": [
      23,
      28
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 29,
    "end": 36,
    "range": [
      29,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 37,
    "end": 43,
    "range": [
      37,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 48,
    "end": 51,
    "range": [
      48,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "String",
    "value": "\"done\"",
    "start": 59,
    "end": 65,
    "range": [
      59,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "Arr",
    "start": 67,
    "end": 70,
    "range": [
      67,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "String",
    "value": "\"recur\"",
    "start": 76,
    "end": 83,
    "range": [
      76,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Identifier",
    "value": "Arr",
    "start": 85,
    "end": 88,
    "range": [
      85,
      88
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 89,
    "end": 96,
    "range": [
      89,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 97,
    "end": 110,
    "range": [
      97,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 111,
    "end": 116,
    "range": [
      111,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "InnerArr",
    "start": 117,
    "end": 125,
    "range": [
      117,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "BadFlatArray",
    "start": 133,
    "end": 145,
    "range": [
      133,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "InnerArr",
    "start": 146,
    "end": 154,
    "range": [
      146,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 191,
    "end": 193,
    "range": [
      191,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 195,
    "end": 197,
    "range": [
      195,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 199,
    "end": 201,
    "range": [
      199,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 203,
    "end": 205,
    "range": [
      203,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Numeric",
    "value": "14",
    "start": 207,
    "end": 209,
    "range": [
      207,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Numeric",
    "value": "15",
    "start": 211,
    "end": 213,
    "range": [
      211,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Numeric",
    "value": "16",
    "start": 215,
    "end": 217,
    "range": [
      215,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Numeric",
    "value": "17",
    "start": 219,
    "end": 221,
    "range": [
      219,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Numeric",
    "value": "18",
    "start": 223,
    "end": 225,
    "range": [
      223,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Numeric",
    "value": "19",
    "start": 227,
    "end": 229,
    "range": [
      227,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 231,
    "end": 233,
    "range": [
      231,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Identifier",
    "value": "Depth",
    "start": 235,
    "end": 240,
    "range": [
      235,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "Arr",
    "start": 249,
    "end": 252,
    "range": [
      249,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "Depth",
    "start": 255,
    "end": 260,
    "range": [
      255,
      260
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 261,
    "end": 268,
    "range": [
      261,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "String",
    "value": "\"done\"",
    "start": 274,
    "end": 280,
    "range": [
      274,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "String",
    "value": "\"recur\"",
    "start": 283,
    "end": 290,
    "range": [
      283,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "String",
    "value": "\"obj\"",
    "start": 293,
    "end": 298,
    "range": [
      293,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 302,
    "end": 309,
    "range": [
      302,
      309
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 310,
    "end": 318,
    "range": [
      310,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "flat",
    "start": 319,
    "end": 323,
    "range": [
      319,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 329,
    "end": 336,
    "range": [
      329,
      336
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 337,
    "end": 343,
    "range": [
      337,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 354,
    "end": 357,
    "range": [
      354,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Identifier",
    "value": "depth",
    "start": 366,
    "end": 371,
    "range": [
      366,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Identifier",
    "value": "BadFlatArray",
    "start": 379,
    "end": 391,
    "range": [
      379,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 401,
    "end": 409,
    "range": [
      401,
      409
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 410,
    "end": 413,
    "range": [
      410,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 417,
    "end": 420,
    "range": [
      417,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Identifier",
    "value": "depth",
    "start": 427,
    "end": 432,
    "range": [
      427,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 434,
    "end": 440,
    "range": [
      434,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 448,
    "end": 454,
    "range": [
      448,
      454
    ]
  },
  {
    "type": "Identifier",
    "value": "flat",
    "start": 455,
    "end": 459,
    "range": [
      455,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 460,
    "end": 463,
    "range": [
      460,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "depth",
    "start": 465,
    "end": 470,
    "range": [
      465,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  }
]
```
