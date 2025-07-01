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
        "name": "TypeMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 12
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "str",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 22
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 24,
                      "end": 27
                    },
                    "start": 24,
                    "end": 27
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "\"b\"",
                      "start": 30,
                      "end": 33
                    },
                    "start": 30,
                    "end": 33
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "c",
                      "raw": "\"c\"",
                      "start": 36,
                      "end": 39
                    },
                    "start": 36,
                    "end": 39
                  }
                ],
                "start": 24,
                "end": 39
              },
              "start": 22,
              "end": 39
            },
            "accessibility": null,
            "static": false,
            "start": 19,
            "end": 40
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 46
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 48,
                      "end": 49
                    },
                    "start": 48,
                    "end": 49
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 52,
                      "end": 53
                    },
                    "start": 52,
                    "end": 53
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 56,
                      "end": 57
                    },
                    "start": 56,
                    "end": 57
                  }
                ],
                "start": 48,
                "end": 57
              },
              "start": 46,
              "end": 57
            },
            "accessibility": null,
            "static": false,
            "start": 43,
            "end": 58
          }
        ],
        "start": 15,
        "end": 60
      },
      "declare": false,
      "start": 0,
      "end": 61
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 85
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 90
            },
            "constraint": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 102,
                    "end": 103
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TypeMap",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 113,
                        "end": 120
                      },
                      "typeArguments": null,
                      "start": 113,
                      "end": 120
                    },
                    "start": 107,
                    "end": 120
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TypeMap",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 123,
                          "end": 130
                        },
                        "typeArguments": null,
                        "start": 123,
                        "end": 130
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 131,
                          "end": 132
                        },
                        "typeArguments": null,
                        "start": 131,
                        "end": 132
                      },
                      "start": 123,
                      "end": 133
                    },
                    "start": 123,
                    "end": 135
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 99,
                  "end": 137
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "parameters": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 146,
                              "end": 152
                            },
                            "start": 144,
                            "end": 152
                          },
                          "start": 143,
                          "end": 152
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "start": 155,
                            "end": 158
                          },
                          "start": 155,
                          "end": 160
                        },
                        "start": 153,
                        "end": 160
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null,
                      "start": 142,
                      "end": 160
                    }
                  ],
                  "start": 140,
                  "end": 162
                }
              ],
              "start": 99,
              "end": 162
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 89,
            "end": 162
          }
        ],
        "start": 85,
        "end": 165
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 172
              },
              "typeArguments": null,
              "start": 171,
              "end": 172
            },
            "start": 169,
            "end": 172
          },
          "start": 166,
          "end": 172
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 176
          },
          "typeArguments": null,
          "start": 175,
          "end": 176
        },
        "start": 173,
        "end": 176
      },
      "body": null,
      "expression": false,
      "start": 63,
      "end": 177
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 191
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 194,
              "end": 199
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 204,
                      "end": 207
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 210,
                          "end": 211
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 213,
                          "end": 214
                        }
                      ],
                      "start": 209,
                      "end": 215
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 204,
                    "end": 215
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 219,
                      "end": 222
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 225,
                          "end": 228
                        },
                        {
                          "type": "Literal",
                          "value": "b",
                          "raw": "\"b\"",
                          "start": 230,
                          "end": 233
                        }
                      ],
                      "start": 224,
                      "end": 234
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 219,
                    "end": 234
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bool",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 238,
                      "end": 242
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 245,
                          "end": 249
                        },
                        {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 251,
                          "end": 256
                        }
                      ],
                      "start": 244,
                      "end": 257
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 238,
                    "end": 257
                  }
                ],
                "start": 200,
                "end": 260
              }
            ],
            "optional": false,
            "start": 194,
            "end": 261
          },
          "definite": false,
          "start": 185,
          "end": 261
        }
      ],
      "declare": false,
      "start": 179,
      "end": 262
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 281,
        "end": 286
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
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
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 292,
                        "end": 296
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "foo",
                                "raw": "\"foo\"",
                                "start": 298,
                                "end": 303
                              },
                              "start": 298,
                              "end": 303
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "bar",
                                "raw": "\"bar\"",
                                "start": 306,
                                "end": 311
                              },
                              "start": 306,
                              "end": 311
                            }
                          ],
                          "start": 298,
                          "end": 311
                        },
                        "start": 296,
                        "end": 311
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 292,
                      "end": 311
                    }
                  ],
                  "start": 290,
                  "end": 313
                },
                {
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
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 318,
                        "end": 322
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 324,
                          "end": 327
                        },
                        "start": 322,
                        "end": 327
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 318,
                      "end": 327
                    }
                  ],
                  "start": 316,
                  "end": 329
                }
              ],
              "start": 290,
              "end": 329
            },
            "start": 288,
            "end": 329
          },
          "start": 287,
          "end": 329
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 332,
          "end": 336
        },
        "start": 330,
        "end": 336
      },
      "body": null,
      "expression": false,
      "start": 264,
      "end": 337
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test2",
          "optional": false,
          "typeAnnotation": null,
          "start": 339,
          "end": 344
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 347,
                  "end": 351
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 353,
                  "end": 358
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 347,
                "end": 358
              }
            ],
            "start": 345,
            "end": 360
          }
        ],
        "optional": false,
        "start": 339,
        "end": 361
      },
      "directive": null,
      "start": 339,
      "end": 362
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
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
                          "name": "ml",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 432,
                          "end": 434
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 436,
                            "end": 439
                          },
                          "start": 434,
                          "end": 439
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 432,
                        "end": 439
                      }
                    ],
                    "start": 430,
                    "end": 441
                  },
                  {
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
                          "name": "ml",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 446,
                          "end": 448
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "edge",
                              "raw": "'edge'",
                              "start": 450,
                              "end": 456
                            },
                            "start": 450,
                            "end": 456
                          },
                          "start": 448,
                          "end": 456
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 446,
                        "end": 456
                      }
                    ],
                    "start": 444,
                    "end": 458
                  }
                ],
                "start": 430,
                "end": 458
              },
              "start": 428,
              "end": 458
            },
            "start": 427,
            "end": 458
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ml",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 463,
                  "end": 465
                },
                "value": {
                  "type": "Literal",
                  "value": "edge",
                  "raw": "'edge'",
                  "start": 467,
                  "end": 473
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 463,
                "end": 473
              }
            ],
            "start": 461,
            "end": 475
          },
          "definite": false,
          "start": 427,
          "end": 475
        }
      ],
      "declare": false,
      "start": 421,
      "end": 476
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 487,
                        "end": 490
                      }
                    ],
                    "start": 486,
                    "end": 491
                  },
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 495,
                          "end": 496
                        },
                        "start": 495,
                        "end": 496
                      }
                    ],
                    "start": 494,
                    "end": 497
                  }
                ],
                "start": 486,
                "end": 497
              },
              "start": 484,
              "end": 497
            },
            "start": 483,
            "end": 497
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 501,
                "end": 502
              }
            ],
            "start": 500,
            "end": 503
          },
          "definite": false,
          "start": 483,
          "end": 503
        }
      ],
      "declare": false,
      "start": 477,
      "end": 504
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 514,
                      "end": 517
                    },
                    "start": 514,
                    "end": 519
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 522,
                        "end": 523
                      },
                      "start": 522,
                      "end": 523
                    },
                    "start": 522,
                    "end": 525
                  }
                ],
                "start": 514,
                "end": 525
              },
              "start": 512,
              "end": 525
            },
            "start": 511,
            "end": 525
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 529,
                "end": 530
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 532,
                "end": 533
              }
            ],
            "start": 528,
            "end": 534
          },
          "definite": false,
          "start": 511,
          "end": 534
        }
      ],
      "declare": false,
      "start": 505,
      "end": 535
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 547,
                          "end": 548
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 550,
                            "end": 553
                          },
                          "start": 548,
                          "end": 553
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 547,
                        "end": 553
                      }
                    ],
                    "start": 545,
                    "end": 555
                  },
                  {
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 560,
                          "end": 561
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 563,
                              "end": 564
                            },
                            "start": 563,
                            "end": 564
                          },
                          "start": 561,
                          "end": 564
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 560,
                        "end": 564
                      }
                    ],
                    "start": 558,
                    "end": 566
                  }
                ],
                "start": 545,
                "end": 566
              },
              "start": 543,
              "end": 566
            },
            "start": 542,
            "end": 566
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 571,
                  "end": 572
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 574,
                  "end": 575
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 571,
                "end": 575
              }
            ],
            "start": 569,
            "end": 577
          },
          "definite": false,
          "start": 542,
          "end": 577
        }
      ],
      "declare": false,
      "start": 536,
      "end": 578
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 597,
                              "end": 598
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 600,
                                  "end": 601
                                },
                                "start": 600,
                                "end": 601
                              },
                              "start": 598,
                              "end": 601
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 597,
                            "end": 601
                          }
                        ],
                        "start": 595,
                        "end": 603
                      },
                      "start": 592,
                      "end": 603
                    },
                    "start": 589,
                    "end": 603
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 616,
                              "end": 617
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 619,
                                "end": 622
                              },
                              "start": 617,
                              "end": 622
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 616,
                            "end": 622
                          }
                        ],
                        "start": 614,
                        "end": 624
                      },
                      "start": 611,
                      "end": 624
                    },
                    "start": 608,
                    "end": 624
                  }
                ],
                "start": 588,
                "end": 625
              },
              "start": 586,
              "end": 625
            },
            "start": 585,
            "end": 625
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 639,
                    "end": 640
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 642,
                    "end": 643
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 639,
                  "end": 643
                }
              ],
              "start": 635,
              "end": 646
            },
            "id": null,
            "generator": false,
            "start": 628,
            "end": 647
          },
          "definite": false,
          "start": 585,
          "end": 647
        }
      ],
      "declare": false,
      "start": 579,
      "end": 648
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 648
}
```
