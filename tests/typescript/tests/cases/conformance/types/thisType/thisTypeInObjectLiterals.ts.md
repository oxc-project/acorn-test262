__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 14,
                  "end": 15
                },
                "value": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "\"bar\"",
                  "start": 17,
                  "end": 22
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 14,
                "end": 22
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 28,
                  "end": 29
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 49,
                              "end": 53
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 54,
                              "end": 55
                            },
                            "optional": false,
                            "computed": false,
                            "start": 49,
                            "end": 55
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 56,
                            "end": 62
                          },
                          "optional": false,
                          "computed": false,
                          "start": 49,
                          "end": 62
                        },
                        "start": 42,
                        "end": 63
                      }
                    ],
                    "start": 32,
                    "end": 69
                  },
                  "expression": false,
                  "start": 29,
                  "end": 69
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 28,
                "end": 69
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 75,
                  "end": 76
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 106,
                              "end": 110
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 111,
                              "end": 112
                            },
                            "optional": false,
                            "computed": false,
                            "start": 106,
                            "end": 112
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 113,
                            "end": 119
                          },
                          "optional": false,
                          "computed": false,
                          "start": 106,
                          "end": 119
                        },
                        "start": 99,
                        "end": 120
                      }
                    ],
                    "start": 89,
                    "end": 126
                  },
                  "expression": false,
                  "start": 78,
                  "end": 126
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 75,
                "end": 126
              }
            ],
            "start": 8,
            "end": 128
          },
          "definite": false,
          "start": 4,
          "end": 128
        }
      ],
      "declare": false,
      "start": 0,
      "end": 128
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "mutuallyRecursive",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 151
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
                  "start": 160,
                  "end": 161
                },
                "value": {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 163,
                  "end": 166
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 160,
                "end": 166
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "start",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 172,
                  "end": 177
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 197,
                              "end": 201
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "passthrough",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 202,
                              "end": 213
                            },
                            "optional": false,
                            "computed": false,
                            "start": 197,
                            "end": 213
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 214,
                                "end": 218
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 219,
                                "end": 220
                              },
                              "optional": false,
                              "computed": false,
                              "start": 214,
                              "end": 220
                            }
                          ],
                          "optional": false,
                          "start": 197,
                          "end": 221
                        },
                        "start": 190,
                        "end": 222
                      }
                    ],
                    "start": 180,
                    "end": 228
                  },
                  "expression": false,
                  "start": 177,
                  "end": 228
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 172,
                "end": 228
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "passthrough",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 234,
                  "end": 245
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 249,
                          "end": 255
                        },
                        "start": 247,
                        "end": 255
                      },
                      "start": 246,
                      "end": 255
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
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 274,
                              "end": 278
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "sub1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 279,
                              "end": 283
                            },
                            "optional": false,
                            "computed": false,
                            "start": 274,
                            "end": 283
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 284,
                              "end": 285
                            }
                          ],
                          "optional": false,
                          "start": 274,
                          "end": 286
                        },
                        "start": 267,
                        "end": 287
                      }
                    ],
                    "start": 257,
                    "end": 293
                  },
                  "expression": false,
                  "start": 245,
                  "end": 293
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 234,
                "end": 293
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sub1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 299,
                  "end": 303
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 307,
                          "end": 313
                        },
                        "start": 305,
                        "end": 313
                      },
                      "start": 304,
                      "end": 313
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 316,
                      "end": 322
                    },
                    "start": 314,
                    "end": 322
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 337,
                            "end": 338
                          },
                          "operator": ">",
                          "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 341,
                            "end": 342
                          },
                          "start": 337,
                          "end": 342
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 365,
                                    "end": 369
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "passthrough",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 370,
                                    "end": 381
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 365,
                                  "end": 381
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "n",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 382,
                                      "end": 383
                                    },
                                    "operator": "-",
                                    "right": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1",
                                      "start": 386,
                                      "end": 387
                                    },
                                    "start": 382,
                                    "end": 387
                                  }
                                ],
                                "optional": false,
                                "start": 365,
                                "end": 388
                              },
                              "start": 358,
                              "end": 389
                            }
                          ],
                          "start": 344,
                          "end": 399
                        },
                        "alternate": null,
                        "start": 333,
                        "end": 399
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 415,
                          "end": 416
                        },
                        "start": 408,
                        "end": 417
                      }
                    ],
                    "start": 323,
                    "end": 423
                  },
                  "expression": false,
                  "start": 303,
                  "end": 423
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 299,
                "end": 423
              }
            ],
            "start": 154,
            "end": 425
          },
          "definite": false,
          "start": 134,
          "end": 425
        }
      ],
      "declare": false,
      "start": 130,
      "end": 425
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 433,
                "end": 439
              },
              "start": 431,
              "end": 439
            },
            "start": 430,
            "end": 439
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "mutuallyRecursive",
                "optional": false,
                "typeAnnotation": null,
                "start": 442,
                "end": 459
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "start",
                "optional": false,
                "typeAnnotation": null,
                "start": 460,
                "end": 465
              },
              "optional": false,
              "computed": false,
              "start": 442,
              "end": 465
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 442,
            "end": 467
          },
          "definite": false,
          "start": 430,
          "end": 467
        }
      ],
      "declare": false,
      "start": 426,
      "end": 468
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 479,
        "end": 480
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
              "start": 487,
              "end": 488
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 490,
                "end": 496
              },
              "start": 488,
              "end": 496
            },
            "accessibility": null,
            "static": false,
            "start": 487,
            "end": 497
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "start",
              "optional": false,
              "typeAnnotation": null,
              "start": 502,
              "end": 507
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 511,
                "end": 517
              },
              "start": 509,
              "end": 517
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 502,
            "end": 518
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "passthrough",
              "optional": false,
              "typeAnnotation": null,
              "start": 523,
              "end": 534
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 538,
                    "end": 544
                  },
                  "start": 536,
                  "end": 544
                },
                "start": 535,
                "end": 544
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 547,
                "end": 553
              },
              "start": 545,
              "end": 553
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 523,
            "end": 554
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sub1",
              "optional": false,
              "typeAnnotation": null,
              "start": 559,
              "end": 563
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 567,
                    "end": 573
                  },
                  "start": 565,
                  "end": 573
                },
                "start": 564,
                "end": 573
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 576,
                "end": 582
              },
              "start": 574,
              "end": 582
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 559,
            "end": 583
          }
        ],
        "start": 481,
        "end": 585
      },
      "declare": false,
      "start": 469,
      "end": 585
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "impl",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 596,
                  "end": 597
                },
                "typeArguments": null,
                "start": 596,
                "end": 597
              },
              "start": 594,
              "end": 597
            },
            "start": 590,
            "end": 597
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "mutuallyRecursive",
            "optional": false,
            "typeAnnotation": null,
            "start": 600,
            "end": 617
          },
          "definite": false,
          "start": 590,
          "end": 617
        }
      ],
      "declare": false,
      "start": 586,
      "end": 618
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 618
}
```
