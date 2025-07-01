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
        "name": "Results",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 12
      },
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
              "start": 13,
              "end": 14
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 14
          }
        ],
        "start": 12,
        "end": 15
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 23,
          "end": 24
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
              "start": 34,
              "end": 35
            },
            "typeArguments": null,
            "start": 34,
            "end": 35
          },
          "start": 28,
          "end": 35
        },
        "nameType": null,
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
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 48
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 50,
                      "end": 51
                    },
                    "typeArguments": null,
                    "start": 50,
                    "end": 51
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 52,
                      "end": 53
                    },
                    "typeArguments": null,
                    "start": 52,
                    "end": 53
                  },
                  "start": 50,
                  "end": 54
                },
                "start": 48,
                "end": 54
              },
              "accessibility": null,
              "static": false,
              "start": 44,
              "end": 55
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onSuccess",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 69
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 78,
                              "end": 79
                            },
                            "typeArguments": null,
                            "start": 78,
                            "end": 79
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 80,
                              "end": 81
                            },
                            "typeArguments": null,
                            "start": 80,
                            "end": 81
                          },
                          "start": 78,
                          "end": 82
                        },
                        "start": 76,
                        "end": 82
                      },
                      "start": 72,
                      "end": 82
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 87,
                      "end": 91
                    },
                    "start": 84,
                    "end": 91
                  },
                  "start": 71,
                  "end": 91
                },
                "start": 69,
                "end": 91
              },
              "accessibility": null,
              "static": false,
              "start": 60,
              "end": 92
            }
          ],
          "start": 38,
          "end": 96
        },
        "optional": false,
        "readonly": null,
        "start": 18,
        "end": 99
      },
      "declare": false,
      "start": 0,
      "end": 100
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Errors",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 113
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 115
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 114,
            "end": 115
          }
        ],
        "start": 113,
        "end": 116
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 124,
          "end": 125
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 136
            },
            "typeArguments": null,
            "start": 135,
            "end": 136
          },
          "start": 129,
          "end": 136
        },
        "nameType": null,
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
                "name": "error",
                "optional": false,
                "typeAnnotation": null,
                "start": 145,
                "end": 150
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 152,
                      "end": 153
                    },
                    "typeArguments": null,
                    "start": 152,
                    "end": 153
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 154,
                      "end": 155
                    },
                    "typeArguments": null,
                    "start": 154,
                    "end": 155
                  },
                  "start": 152,
                  "end": 156
                },
                "start": 150,
                "end": 156
              },
              "accessibility": null,
              "static": false,
              "start": 145,
              "end": 157
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onError",
                "optional": false,
                "typeAnnotation": null,
                "start": 162,
                "end": 169
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
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
                              "name": "E",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 178,
                              "end": 179
                            },
                            "typeArguments": null,
                            "start": 178,
                            "end": 179
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 180,
                              "end": 181
                            },
                            "typeArguments": null,
                            "start": 180,
                            "end": 181
                          },
                          "start": 178,
                          "end": 182
                        },
                        "start": 176,
                        "end": 182
                      },
                      "start": 172,
                      "end": 182
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 187,
                      "end": 191
                    },
                    "start": 184,
                    "end": 191
                  },
                  "start": 171,
                  "end": 191
                },
                "start": 169,
                "end": 191
              },
              "accessibility": null,
              "static": false,
              "start": 162,
              "end": 192
            }
          ],
          "start": 139,
          "end": 196
        },
        "optional": false,
        "readonly": null,
        "start": 119,
        "end": 199
      },
      "declare": false,
      "start": 102,
      "end": 200
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withTupleLike",
        "optional": false,
        "typeAnnotation": null,
        "start": 219,
        "end": 232
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
              "start": 233,
              "end": 234
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 245,
                    "end": 246
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 248,
                      "end": 255
                    },
                    "start": 246,
                    "end": 255
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 245,
                  "end": 255
                }
              ],
              "start": 243,
              "end": 257
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 233,
            "end": 257
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 259,
              "end": 260
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 271,
                    "end": 272
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 274,
                      "end": 281
                    },
                    "start": 272,
                    "end": 281
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 271,
                  "end": 281
                }
              ],
              "start": 269,
              "end": 283
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 259,
            "end": 283
          }
        ],
        "start": 232,
        "end": 284
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
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Results",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 293,
                    "end": 300
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 301,
                          "end": 302
                        },
                        "typeArguments": null,
                        "start": 301,
                        "end": 302
                      }
                    ],
                    "start": 300,
                    "end": 303
                  },
                  "start": 293,
                  "end": 303
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Errors",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 306,
                    "end": 312
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 313,
                          "end": 314
                        },
                        "typeArguments": null,
                        "start": 313,
                        "end": 314
                      }
                    ],
                    "start": 312,
                    "end": 315
                  },
                  "start": 306,
                  "end": 315
                }
              ],
              "start": 293,
              "end": 315
            },
            "start": 291,
            "end": 315
          },
          "start": 288,
          "end": 315
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 320,
                "end": 321
              },
              "typeArguments": null,
              "start": 320,
              "end": 321
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 323,
                "end": 324
              },
              "typeArguments": null,
              "start": 323,
              "end": 324
            }
          ],
          "start": 319,
          "end": 325
        },
        "start": 317,
        "end": 325
      },
      "body": null,
      "expression": false,
      "start": 202,
      "end": 326
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
            "name": "res",
            "optional": false,
            "typeAnnotation": null,
            "start": 334,
            "end": 337
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "withTupleLike",
              "optional": false,
              "typeAnnotation": null,
              "start": 340,
              "end": 353
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 364,
                          "end": 368
                        },
                        "value": {
                          "type": "Literal",
                          "value": "foo",
                          "raw": "\"foo\"",
                          "start": 370,
                          "end": 375
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 364,
                        "end": 375
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "onSuccess",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 381,
                          "end": 390
                        },
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dataArg",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 393,
                              "end": 400
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "dataArg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 413,
                                  "end": 420
                                },
                                "directive": null,
                                "start": 413,
                                "end": 421
                              }
                            ],
                            "start": 405,
                            "end": 427
                          },
                          "id": null,
                          "generator": false,
                          "start": 392,
                          "end": 427
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 381,
                        "end": 427
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "error",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 433,
                          "end": 438
                        },
                        "value": {
                          "type": "Literal",
                          "value": 404,
                          "raw": "404",
                          "start": 440,
                          "end": 443
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 433,
                        "end": 443
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "onError",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 449,
                          "end": 456
                        },
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "errorArg",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 459,
                              "end": 467
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "errorArg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 480,
                                  "end": 488
                                },
                                "directive": null,
                                "start": 480,
                                "end": 489
                              }
                            ],
                            "start": 472,
                            "end": 495
                          },
                          "id": null,
                          "generator": false,
                          "start": 458,
                          "end": 495
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 449,
                        "end": 495
                      }
                    ],
                    "start": 358,
                    "end": 500
                  },
                  {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 510,
                          "end": 514
                        },
                        "value": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 516,
                          "end": 520
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 510,
                        "end": 520
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "onSuccess",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 526,
                          "end": 535
                        },
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dataArg",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 538,
                              "end": 545
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "dataArg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 558,
                                  "end": 565
                                },
                                "directive": null,
                                "start": 558,
                                "end": 566
                              }
                            ],
                            "start": 550,
                            "end": 572
                          },
                          "id": null,
                          "generator": false,
                          "start": 537,
                          "end": 572
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 526,
                        "end": 572
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "error",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 578,
                          "end": 583
                        },
                        "value": {
                          "type": "Literal",
                          "value": 500,
                          "raw": "500",
                          "start": 585,
                          "end": 588
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 578,
                        "end": 588
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "onError",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 594,
                          "end": 601
                        },
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "errorArg",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 604,
                              "end": 612
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "errorArg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 625,
                                  "end": 633
                                },
                                "directive": null,
                                "start": 625,
                                "end": 634
                              }
                            ],
                            "start": 617,
                            "end": 640
                          },
                          "id": null,
                          "generator": false,
                          "start": 603,
                          "end": 640
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 594,
                        "end": 640
                      }
                    ],
                    "start": 504,
                    "end": 645
                  }
                ],
                "start": 354,
                "end": 648
              }
            ],
            "optional": false,
            "start": 340,
            "end": 649
          },
          "definite": false,
          "start": 334,
          "end": 649
        }
      ],
      "declare": false,
      "start": 328,
      "end": 650
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 650
}
```
