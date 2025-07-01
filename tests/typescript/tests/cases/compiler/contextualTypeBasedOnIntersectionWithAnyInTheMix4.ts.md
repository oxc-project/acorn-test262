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
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 22
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                        "start": 33,
                        "end": 34
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
                              "name": "arg",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 42,
                                  "end": 48
                                },
                                "start": 40,
                                "end": 48
                              },
                              "start": 37,
                              "end": 48
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 53,
                              "end": 57
                            },
                            "start": 50,
                            "end": 57
                          },
                          "start": 36,
                          "end": 57
                        },
                        "start": 34,
                        "end": 57
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 33,
                      "end": 57
                    }
                  ],
                  "start": 31,
                  "end": 59
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
                              "start": 68,
                              "end": 74
                            },
                            "start": 66,
                            "end": 74
                          },
                          "start": 65,
                          "end": 74
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
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
                                  "type": "TSAnyKeyword",
                                  "start": 83,
                                  "end": 86
                                },
                                "start": 81,
                                "end": 86
                              },
                              "start": 78,
                              "end": 86
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 91,
                              "end": 95
                            },
                            "start": 88,
                            "end": 95
                          },
                          "start": 77,
                          "end": 95
                        },
                        "start": 75,
                        "end": 95
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null,
                      "start": 64,
                      "end": 95
                    }
                  ],
                  "start": 62,
                  "end": 97
                }
              ],
              "start": 31,
              "end": 97
            },
            "start": 29,
            "end": 97
          },
          "start": 26,
          "end": 97
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 102,
          "end": 109
        },
        "start": 100,
        "end": 109
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 110
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test1",
          "optional": false,
          "typeAnnotation": null,
          "start": 112,
          "end": 117
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 123
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
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 126,
                      "end": 129
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 134,
                    "end": 136
                  },
                  "id": null,
                  "generator": false,
                  "start": 125,
                  "end": 136
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 122,
                "end": 136
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 140,
                  "end": 141
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
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 144,
                      "end": 147
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 152,
                    "end": 154
                  },
                  "id": null,
                  "generator": false,
                  "start": 143,
                  "end": 154
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 140,
                "end": 154
              }
            ],
            "start": 118,
            "end": 157
          }
        ],
        "optional": false,
        "start": 112,
        "end": 158
      },
      "directive": null,
      "start": 112,
      "end": 159
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 183
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                        "start": 194,
                        "end": 195
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
                              "name": "arg",
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
                                        "name": "foo",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 205,
                                        "end": 208
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSStringKeyword",
                                          "start": 210,
                                          "end": 216
                                        },
                                        "start": 208,
                                        "end": 216
                                      },
                                      "accessibility": null,
                                      "static": false,
                                      "start": 205,
                                      "end": 216
                                    }
                                  ],
                                  "start": 203,
                                  "end": 218
                                },
                                "start": 201,
                                "end": 218
                              },
                              "start": 198,
                              "end": 218
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 223,
                              "end": 227
                            },
                            "start": 220,
                            "end": 227
                          },
                          "start": 197,
                          "end": 227
                        },
                        "start": 195,
                        "end": 227
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 194,
                      "end": 227
                    }
                  ],
                  "start": 192,
                  "end": 229
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
                              "start": 242,
                              "end": 248
                            },
                            "start": 240,
                            "end": 248
                          },
                          "start": 239,
                          "end": 248
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
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
                                        "start": 259,
                                        "end": 262
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 264,
                                          "end": 267
                                        },
                                        "start": 262,
                                        "end": 267
                                      },
                                      "accessibility": null,
                                      "static": false,
                                      "start": 259,
                                      "end": 267
                                    }
                                  ],
                                  "start": 257,
                                  "end": 269
                                },
                                "start": 255,
                                "end": 269
                              },
                              "start": 252,
                              "end": 269
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 274,
                              "end": 278
                            },
                            "start": 271,
                            "end": 278
                          },
                          "start": 251,
                          "end": 278
                        },
                        "start": 249,
                        "end": 278
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null,
                      "start": 238,
                      "end": 279
                    }
                  ],
                  "start": 232,
                  "end": 283
                }
              ],
              "start": 192,
              "end": 283
            },
            "start": 190,
            "end": 283
          },
          "start": 187,
          "end": 283
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 288,
          "end": 295
        },
        "start": 286,
        "end": 295
      },
      "body": null,
      "expression": false,
      "start": 161,
      "end": 296
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
          "start": 298,
          "end": 303
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 308,
                  "end": 309
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
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 312,
                      "end": 315
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 320,
                    "end": 322
                  },
                  "id": null,
                  "generator": false,
                  "start": 311,
                  "end": 322
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 308,
                "end": 322
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 326,
                  "end": 327
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
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 330,
                      "end": 333
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 338,
                    "end": 340
                  },
                  "id": null,
                  "generator": false,
                  "start": 329,
                  "end": 340
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 326,
                "end": 340
              }
            ],
            "start": 304,
            "end": 343
          }
        ],
        "optional": false,
        "start": 298,
        "end": 344
      },
      "directive": null,
      "start": 298,
      "end": 345
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 364,
        "end": 369
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                        "start": 380,
                        "end": 381
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "foo",
                                "raw": "\"foo\"",
                                "start": 389,
                                "end": 394
                              },
                              "start": 389,
                              "end": 394
                            },
                            "start": 386,
                            "end": 394
                          },
                          "start": 383,
                          "end": 394
                        },
                        "start": 381,
                        "end": 394
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 380,
                      "end": 394
                    }
                  ],
                  "start": 378,
                  "end": 396
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
                              "start": 409,
                              "end": 415
                            },
                            "start": 407,
                            "end": 415
                          },
                          "start": 406,
                          "end": 415
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 424,
                              "end": 427
                            },
                            "start": 421,
                            "end": 427
                          },
                          "start": 418,
                          "end": 427
                        },
                        "start": 416,
                        "end": 427
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null,
                      "start": 405,
                      "end": 428
                    }
                  ],
                  "start": 399,
                  "end": 432
                }
              ],
              "start": 378,
              "end": 432
            },
            "start": 376,
            "end": 432
          },
          "start": 373,
          "end": 432
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 437,
          "end": 444
        },
        "start": 435,
        "end": 444
      },
      "body": null,
      "expression": false,
      "start": 347,
      "end": 445
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test3",
          "optional": false,
          "typeAnnotation": null,
          "start": 447,
          "end": 452
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 457,
                  "end": 458
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 466,
                    "end": 471
                  },
                  "id": null,
                  "generator": false,
                  "start": 460,
                  "end": 471
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 457,
                "end": 471
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 475,
                  "end": 476
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 484,
                    "end": 489
                  },
                  "id": null,
                  "generator": false,
                  "start": 478,
                  "end": 489
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 475,
                "end": 489
              }
            ],
            "start": 453,
            "end": 492
          }
        ],
        "optional": false,
        "start": 447,
        "end": 493
      },
      "directive": null,
      "start": 447,
      "end": 494
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test3",
          "optional": false,
          "typeAnnotation": null,
          "start": 496,
          "end": 501
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 506,
                  "end": 507
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 515,
                    "end": 520
                  },
                  "id": null,
                  "generator": false,
                  "start": 509,
                  "end": 520
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 506,
                "end": 520
              }
            ],
            "start": 502,
            "end": 523
          }
        ],
        "optional": false,
        "start": 496,
        "end": 524
      },
      "directive": null,
      "start": 496,
      "end": 525
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test4",
        "optional": false,
        "typeAnnotation": null,
        "start": 544,
        "end": 549
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                        "start": 560,
                        "end": 561
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
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
                                    "name": "prop",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 571,
                                    "end": 575
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "literal": {
                                        "type": "Literal",
                                        "value": "foo",
                                        "raw": "\"foo\"",
                                        "start": 577,
                                        "end": 582
                                      },
                                      "start": 577,
                                      "end": 582
                                    },
                                    "start": 575,
                                    "end": 582
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 571,
                                  "end": 582
                                }
                              ],
                              "start": 569,
                              "end": 584
                            },
                            "start": 566,
                            "end": 584
                          },
                          "start": 563,
                          "end": 584
                        },
                        "start": 561,
                        "end": 584
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 560,
                      "end": 584
                    }
                  ],
                  "start": 558,
                  "end": 586
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
                              "start": 599,
                              "end": 605
                            },
                            "start": 597,
                            "end": 605
                          },
                          "start": 596,
                          "end": 605
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
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
                                    "name": "prop",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 616,
                                    "end": 620
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 622,
                                      "end": 625
                                    },
                                    "start": 620,
                                    "end": 625
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 616,
                                  "end": 625
                                }
                              ],
                              "start": 614,
                              "end": 627
                            },
                            "start": 611,
                            "end": 627
                          },
                          "start": 608,
                          "end": 627
                        },
                        "start": 606,
                        "end": 627
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null,
                      "start": 595,
                      "end": 628
                    }
                  ],
                  "start": 589,
                  "end": 632
                }
              ],
              "start": 558,
              "end": 632
            },
            "start": 556,
            "end": 632
          },
          "start": 553,
          "end": 632
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 637,
          "end": 644
        },
        "start": 635,
        "end": 644
      },
      "body": null,
      "expression": false,
      "start": 527,
      "end": 645
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test4",
          "optional": false,
          "typeAnnotation": null,
          "start": 647,
          "end": 652
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 657,
                  "end": 658
                },
                "value": {
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
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 669,
                          "end": 673
                        },
                        "value": {
                          "type": "Literal",
                          "value": "foo",
                          "raw": "\"foo\"",
                          "start": 675,
                          "end": 680
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 669,
                        "end": 680
                      }
                    ],
                    "start": 667,
                    "end": 682
                  },
                  "id": null,
                  "generator": false,
                  "start": 660,
                  "end": 683
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 657,
                "end": 683
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 687,
                  "end": 688
                },
                "value": {
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
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 699,
                          "end": 703
                        },
                        "value": {
                          "type": "Literal",
                          "value": "bar",
                          "raw": "\"bar\"",
                          "start": 705,
                          "end": 710
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 699,
                        "end": 710
                      }
                    ],
                    "start": 697,
                    "end": 712
                  },
                  "id": null,
                  "generator": false,
                  "start": 690,
                  "end": 713
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 687,
                "end": 713
              }
            ],
            "start": 653,
            "end": 716
          }
        ],
        "optional": false,
        "start": 647,
        "end": 717
      },
      "directive": null,
      "start": 647,
      "end": 718
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test4",
          "optional": false,
          "typeAnnotation": null,
          "start": 720,
          "end": 725
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 730,
                  "end": 731
                },
                "value": {
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
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 742,
                          "end": 746
                        },
                        "value": {
                          "type": "Literal",
                          "value": "bar",
                          "raw": "\"bar\"",
                          "start": 748,
                          "end": 753
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 742,
                        "end": 753
                      }
                    ],
                    "start": 740,
                    "end": 755
                  },
                  "id": null,
                  "generator": false,
                  "start": 733,
                  "end": 756
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 730,
                "end": 756
              }
            ],
            "start": 726,
            "end": 759
          }
        ],
        "optional": false,
        "start": 720,
        "end": 760
      },
      "directive": null,
      "start": 720,
      "end": 761
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 761
}
```
