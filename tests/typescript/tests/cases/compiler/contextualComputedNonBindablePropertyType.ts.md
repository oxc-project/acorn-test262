__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testD",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 39
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "d",
            "raw": "\"d\"",
            "start": 43,
            "end": 46
          },
          "start": 43,
          "end": 46
        },
        "start": 41,
        "end": 46
      },
      "body": null,
      "expression": false,
      "start": 17,
      "end": 47
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "forceMatch",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 76
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
              "start": 77,
              "end": 78
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 77,
            "end": 78
          }
        ],
        "start": 76,
        "end": 79
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "matched",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 94,
                "end": 97
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 107,
                    "end": 108
                  },
                  "typeArguments": null,
                  "start": 107,
                  "end": 108
                },
                "start": 101,
                "end": 108
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 111,
                  "end": 114
                },
                "typeArguments": null,
                "start": 111,
                "end": 114
              },
              "optional": false,
              "readonly": null,
              "start": 89,
              "end": 117
            },
            "start": 87,
            "end": 117
          },
          "start": 80,
          "end": 117
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 120,
          "end": 124
        },
        "start": 118,
        "end": 124
      },
      "body": null,
      "expression": false,
      "start": 49,
      "end": 125
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "forceMatch",
          "optional": false,
          "typeAnnotation": null,
          "start": 127,
          "end": 137
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
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 143,
                    "end": 148
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 143,
                  "end": 150
                },
                "value": {
                  "type": "Literal",
                  "value": "d",
                  "raw": "\"d\"",
                  "start": 153,
                  "end": 156
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 142,
                "end": 156
              }
            ],
            "start": 138,
            "end": 159
          }
        ],
        "optional": false,
        "start": 127,
        "end": 160
      },
      "directive": null,
      "start": 127,
      "end": 161
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "forceMatch2",
        "optional": false,
        "typeAnnotation": null,
        "start": 180,
        "end": 191
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
              "start": 192,
              "end": 193
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 192,
            "end": 193
          }
        ],
        "start": 191,
        "end": 194
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "matched",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 209,
                "end": 212
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 222,
                    "end": 223
                  },
                  "typeArguments": null,
                  "start": 222,
                  "end": 223
                },
                "start": 216,
                "end": 223
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 229,
                          "end": 232
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 229,
                          "end": 232
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 229,
                        "end": 232
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
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
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 238,
                              "end": 241
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 243,
                                  "end": 246
                                },
                                "typeArguments": null,
                                "start": 243,
                                "end": 246
                              },
                              "start": 241,
                              "end": 246
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 238,
                            "end": 246
                          }
                        ],
                        "start": 236,
                        "end": 248
                      },
                      "start": 234,
                      "end": 248
                    },
                    "start": 227,
                    "end": 248
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 253,
                    "end": 257
                  },
                  "start": 250,
                  "end": 257
                },
                "start": 226,
                "end": 257
              },
              "optional": false,
              "readonly": null,
              "start": 204,
              "end": 260
            },
            "start": 202,
            "end": 260
          },
          "start": 195,
          "end": 260
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 263,
          "end": 267
        },
        "start": 261,
        "end": 267
      },
      "body": null,
      "expression": false,
      "start": 163,
      "end": 268
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "forceMatch2",
          "optional": false,
          "typeAnnotation": null,
          "start": 270,
          "end": 281
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
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 287,
                    "end": 292
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 287,
                  "end": 294
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 300,
                            "end": 303
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 300,
                            "end": 303
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 300,
                          "end": 303
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 298,
                      "end": 305
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 310,
                    "end": 312
                  },
                  "id": null,
                  "generator": false,
                  "start": 297,
                  "end": 312
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 286,
                "end": 312
              }
            ],
            "start": 282,
            "end": 315
          }
        ],
        "optional": false,
        "start": 270,
        "end": 316
      },
      "directive": null,
      "start": 270,
      "end": 317
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Original",
        "optional": false,
        "typeAnnotation": null,
        "start": 341,
        "end": 349
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 357
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "expects a string literal",
                  "raw": "'expects a string literal'",
                  "start": 359,
                  "end": 385
                },
                "start": 359,
                "end": 385
              },
              "start": 357,
              "end": 385
            },
            "accessibility": null,
            "static": false,
            "start": 354,
            "end": 386
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 387,
              "end": 390
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 392,
                "end": 399
              },
              "start": 390,
              "end": 399
            },
            "accessibility": null,
            "static": false,
            "start": 387,
            "end": 400
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 401,
              "end": 404
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 406,
                "end": 412
              },
              "start": 404,
              "end": 412
            },
            "accessibility": null,
            "static": false,
            "start": 401,
            "end": 412
          }
        ],
        "start": 352,
        "end": 414
      },
      "declare": false,
      "start": 336,
      "end": 414
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped",
        "optional": false,
        "typeAnnotation": null,
        "start": 421,
        "end": 427
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": null,
          "start": 435,
          "end": 439
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Original",
              "optional": false,
              "typeAnnotation": null,
              "start": 449,
              "end": 457
            },
            "typeArguments": null,
            "start": 449,
            "end": 457
          },
          "start": 443,
          "end": 457
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Original",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 466,
                      "end": 474
                    },
                    "typeArguments": null,
                    "start": 466,
                    "end": 474
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 475,
                      "end": 479
                    },
                    "typeArguments": null,
                    "start": 475,
                    "end": 479
                  },
                  "start": 466,
                  "end": 480
                },
                "start": 464,
                "end": 480
              },
              "start": 461,
              "end": 480
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Original",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 485,
                  "end": 493
                },
                "typeArguments": null,
                "start": 485,
                "end": 493
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 494,
                  "end": 498
                },
                "typeArguments": null,
                "start": 494,
                "end": 498
              },
              "start": 485,
              "end": 499
            },
            "start": 482,
            "end": 499
          },
          "start": 460,
          "end": 499
        },
        "optional": false,
        "readonly": null,
        "start": 430,
        "end": 501
      },
      "declare": false,
      "start": 416,
      "end": 501
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
            "name": "propSelector",
            "optional": false,
            "typeAnnotation": null,
            "start": 509,
            "end": 521
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "propName",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 526,
                    "end": 534
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 543,
                    "end": 549
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 526,
                  "end": 549
                }
              ],
              "start": 525,
              "end": 550
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "propName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "propName",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 561,
                      "end": 569
                    },
                    "typeArguments": null,
                    "start": 561,
                    "end": 569
                  },
                  "start": 559,
                  "end": 569
                },
                "start": 551,
                "end": 569
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propName",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 572,
                  "end": 580
                },
                "typeArguments": null,
                "start": 572,
                "end": 580
              },
              "start": 570,
              "end": 580
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "propName",
              "optional": false,
              "typeAnnotation": null,
              "start": 584,
              "end": 592
            },
            "id": null,
            "generator": false,
            "start": 525,
            "end": 592
          },
          "definite": false,
          "start": 509,
          "end": 592
        }
      ],
      "declare": false,
      "start": 503,
      "end": 593
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
            "name": "unexpectedlyFailingExample",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mapped",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 629,
                  "end": 635
                },
                "typeArguments": null,
                "start": 629,
                "end": 635
              },
              "start": 627,
              "end": 635
            },
            "start": 601,
            "end": 635
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 642,
                  "end": 645
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 648,
                      "end": 651
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "expects a string literal",
                    "raw": "'expects a string literal'",
                    "start": 656,
                    "end": 682
                  },
                  "id": null,
                  "generator": false,
                  "start": 647,
                  "end": 682
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 642,
                "end": 682
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 686,
                  "end": 689
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 692,
                      "end": 695
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 700,
                    "end": 704
                  },
                  "id": null,
                  "generator": false,
                  "start": 691,
                  "end": 704
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 686,
                "end": 704
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "propSelector",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 709,
                    "end": 721
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "'bar'",
                      "start": 722,
                      "end": 727
                    }
                  ],
                  "optional": false,
                  "start": 709,
                  "end": 728
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 732,
                      "end": 735
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 51345,
                    "raw": "51345",
                    "start": 740,
                    "end": 745
                  },
                  "id": null,
                  "generator": false,
                  "start": 731,
                  "end": 745
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 708,
                "end": 745
              }
            ],
            "start": 638,
            "end": 747
          },
          "definite": false,
          "start": 601,
          "end": 747
        }
      ],
      "declare": false,
      "start": 595,
      "end": 747
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 17,
  "end": 747
}
```
