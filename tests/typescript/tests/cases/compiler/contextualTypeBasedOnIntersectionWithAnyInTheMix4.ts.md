__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 761,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 22,
        "decorators": [],
        "name": "test1",
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
          "start": 26,
          "end": 97,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 29,
            "end": 97,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 31,
              "end": 97,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 31,
                  "end": 59,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 33,
                      "end": 57,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 33,
                        "end": 34,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 34,
                        "end": 57,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 36,
                          "end": 57,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 37,
                              "end": 48,
                              "decorators": [],
                              "name": "arg",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 40,
                                "end": 48,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 42,
                                  "end": 48
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 50,
                            "end": 57,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 53,
                              "end": 57
                            }
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 62,
                  "end": 97,
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "start": 64,
                      "end": 95,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 65,
                          "end": 74,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 66,
                            "end": 74,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 68,
                              "end": 74
                            }
                          }
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 75,
                        "end": 95,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 77,
                          "end": 95,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 78,
                              "end": 86,
                              "decorators": [],
                              "name": "arg",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 81,
                                "end": 86,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 83,
                                  "end": 86
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 88,
                            "end": 95,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 91,
                              "end": 95
                            }
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
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 100,
        "end": 109,
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 102,
          "end": 109
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 112,
      "end": 159,
      "expression": {
        "type": "CallExpression",
        "start": 112,
        "end": 158,
        "callee": {
          "type": "Identifier",
          "start": 112,
          "end": 117,
          "decorators": [],
          "name": "test1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 118,
            "end": 157,
            "properties": [
              {
                "type": "Property",
                "start": 122,
                "end": 136,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 125,
                  "end": 136,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 126,
                      "end": 129,
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 134,
                    "end": 136,
                    "body": []
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 140,
                "end": 154,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 141,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 143,
                  "end": 154,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 144,
                      "end": 147,
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 152,
                    "end": 154,
                    "body": []
                  },
                  "id": null,
                  "generator": false
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
      "type": "TSDeclareFunction",
      "start": 161,
      "end": 296,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 183,
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
          "start": 187,
          "end": 283,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 190,
            "end": 283,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 192,
              "end": 283,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 192,
                  "end": 229,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 194,
                      "end": 227,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 194,
                        "end": 195,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 195,
                        "end": 227,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 197,
                          "end": 227,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 198,
                              "end": 218,
                              "decorators": [],
                              "name": "arg",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 201,
                                "end": 218,
                                "typeAnnotation": {
                                  "type": "TSTypeLiteral",
                                  "start": 203,
                                  "end": 218,
                                  "members": [
                                    {
                                      "type": "TSPropertySignature",
                                      "start": 205,
                                      "end": 216,
                                      "computed": false,
                                      "optional": false,
                                      "readonly": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 205,
                                        "end": 208,
                                        "decorators": [],
                                        "name": "foo",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 208,
                                        "end": 216,
                                        "typeAnnotation": {
                                          "type": "TSStringKeyword",
                                          "start": 210,
                                          "end": 216
                                        }
                                      },
                                      "accessibility": null,
                                      "static": false
                                    }
                                  ]
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 220,
                            "end": 227,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 223,
                              "end": 227
                            }
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 232,
                  "end": 283,
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "start": 238,
                      "end": 279,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 239,
                          "end": 248,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 240,
                            "end": 248,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 242,
                              "end": 248
                            }
                          }
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 249,
                        "end": 278,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 251,
                          "end": 278,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 252,
                              "end": 269,
                              "decorators": [],
                              "name": "arg",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 255,
                                "end": 269,
                                "typeAnnotation": {
                                  "type": "TSTypeLiteral",
                                  "start": 257,
                                  "end": 269,
                                  "members": [
                                    {
                                      "type": "TSPropertySignature",
                                      "start": 259,
                                      "end": 267,
                                      "computed": false,
                                      "optional": false,
                                      "readonly": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 259,
                                        "end": 262,
                                        "decorators": [],
                                        "name": "foo",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 262,
                                        "end": 267,
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 264,
                                          "end": 267
                                        }
                                      },
                                      "accessibility": null,
                                      "static": false
                                    }
                                  ]
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 271,
                            "end": 278,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 274,
                              "end": 278
                            }
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
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 286,
        "end": 295,
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 288,
          "end": 295
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 298,
      "end": 345,
      "expression": {
        "type": "CallExpression",
        "start": 298,
        "end": 344,
        "callee": {
          "type": "Identifier",
          "start": 298,
          "end": 303,
          "decorators": [],
          "name": "test2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 304,
            "end": 343,
            "properties": [
              {
                "type": "Property",
                "start": 308,
                "end": 322,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 308,
                  "end": 309,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 311,
                  "end": 322,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 312,
                      "end": 315,
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 320,
                    "end": 322,
                    "body": []
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 326,
                "end": 340,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 327,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 329,
                  "end": 340,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 330,
                      "end": 333,
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 338,
                    "end": 340,
                    "body": []
                  },
                  "id": null,
                  "generator": false
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
      "type": "TSDeclareFunction",
      "start": 347,
      "end": 445,
      "id": {
        "type": "Identifier",
        "start": 364,
        "end": 369,
        "decorators": [],
        "name": "test3",
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
          "start": 373,
          "end": 432,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 376,
            "end": 432,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 378,
              "end": 432,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 378,
                  "end": 396,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 380,
                      "end": 394,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 380,
                        "end": 381,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 381,
                        "end": 394,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 383,
                          "end": 394,
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 386,
                            "end": 394,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 389,
                              "end": 394,
                              "literal": {
                                "type": "Literal",
                                "start": 389,
                                "end": 394,
                                "value": "foo",
                                "raw": "\"foo\""
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
                {
                  "type": "TSTypeLiteral",
                  "start": 399,
                  "end": 432,
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "start": 405,
                      "end": 428,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 406,
                          "end": 415,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 407,
                            "end": 415,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 409,
                              "end": 415
                            }
                          }
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 416,
                        "end": 427,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 418,
                          "end": 427,
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 421,
                            "end": 427,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 424,
                              "end": 427
                            }
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
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 435,
        "end": 444,
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 437,
          "end": 444
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 447,
      "end": 494,
      "expression": {
        "type": "CallExpression",
        "start": 447,
        "end": 493,
        "callee": {
          "type": "Identifier",
          "start": 447,
          "end": 452,
          "decorators": [],
          "name": "test3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 453,
            "end": 492,
            "properties": [
              {
                "type": "Property",
                "start": 457,
                "end": 471,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 457,
                  "end": 458,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 460,
                  "end": 471,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "start": 466,
                    "end": 471,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 475,
                "end": 489,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 475,
                  "end": 476,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 478,
                  "end": 489,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "start": 484,
                    "end": 489,
                    "value": "bar",
                    "raw": "\"bar\""
                  },
                  "id": null,
                  "generator": false
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
      "type": "ExpressionStatement",
      "start": 496,
      "end": 525,
      "expression": {
        "type": "CallExpression",
        "start": 496,
        "end": 524,
        "callee": {
          "type": "Identifier",
          "start": 496,
          "end": 501,
          "decorators": [],
          "name": "test3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 502,
            "end": 523,
            "properties": [
              {
                "type": "Property",
                "start": 506,
                "end": 520,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 506,
                  "end": 507,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 509,
                  "end": 520,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "start": 515,
                    "end": 520,
                    "value": "bar",
                    "raw": "\"bar\""
                  },
                  "id": null,
                  "generator": false
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
      "type": "TSDeclareFunction",
      "start": 527,
      "end": 645,
      "id": {
        "type": "Identifier",
        "start": 544,
        "end": 549,
        "decorators": [],
        "name": "test4",
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
          "start": 553,
          "end": 632,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 556,
            "end": 632,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 558,
              "end": 632,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 558,
                  "end": 586,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 560,
                      "end": 584,
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
                        "end": 584,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 563,
                          "end": 584,
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 566,
                            "end": 584,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 569,
                              "end": 584,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 571,
                                  "end": 582,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 571,
                                    "end": 575,
                                    "decorators": [],
                                    "name": "prop",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 575,
                                    "end": 582,
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "start": 577,
                                      "end": 582,
                                      "literal": {
                                        "type": "Literal",
                                        "start": 577,
                                        "end": 582,
                                        "value": "foo",
                                        "raw": "\"foo\""
                                      }
                                    }
                                  },
                                  "accessibility": null,
                                  "static": false
                                }
                              ]
                            }
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 589,
                  "end": 632,
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "start": 595,
                      "end": 628,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 596,
                          "end": 605,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 597,
                            "end": 605,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 599,
                              "end": 605
                            }
                          }
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 606,
                        "end": 627,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 608,
                          "end": 627,
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 611,
                            "end": 627,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 614,
                              "end": 627,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 616,
                                  "end": 625,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 616,
                                    "end": 620,
                                    "decorators": [],
                                    "name": "prop",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 620,
                                    "end": 625,
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 622,
                                      "end": 625
                                    }
                                  },
                                  "accessibility": null,
                                  "static": false
                                }
                              ]
                            }
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
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 635,
        "end": 644,
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 637,
          "end": 644
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 647,
      "end": 718,
      "expression": {
        "type": "CallExpression",
        "start": 647,
        "end": 717,
        "callee": {
          "type": "Identifier",
          "start": 647,
          "end": 652,
          "decorators": [],
          "name": "test4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 653,
            "end": 716,
            "properties": [
              {
                "type": "Property",
                "start": 657,
                "end": 683,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 657,
                  "end": 658,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 660,
                  "end": 683,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "ObjectExpression",
                    "start": 667,
                    "end": 682,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 669,
                        "end": 680,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 669,
                          "end": 673,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 675,
                          "end": 680,
                          "value": "foo",
                          "raw": "\"foo\""
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 687,
                "end": 713,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 687,
                  "end": 688,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 690,
                  "end": 713,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "ObjectExpression",
                    "start": 697,
                    "end": 712,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 699,
                        "end": 710,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 699,
                          "end": 703,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 705,
                          "end": 710,
                          "value": "bar",
                          "raw": "\"bar\""
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
      "type": "ExpressionStatement",
      "start": 720,
      "end": 761,
      "expression": {
        "type": "CallExpression",
        "start": 720,
        "end": 760,
        "callee": {
          "type": "Identifier",
          "start": 720,
          "end": 725,
          "decorators": [],
          "name": "test4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 726,
            "end": 759,
            "properties": [
              {
                "type": "Property",
                "start": 730,
                "end": 756,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 730,
                  "end": 731,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 733,
                  "end": 756,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "ObjectExpression",
                    "start": 740,
                    "end": 755,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 742,
                        "end": 753,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 742,
                          "end": 746,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 748,
                          "end": 753,
                          "value": "bar",
                          "raw": "\"bar\""
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
