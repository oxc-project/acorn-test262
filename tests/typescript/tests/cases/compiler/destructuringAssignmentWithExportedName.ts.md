__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "exportedFoo",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 24,
                  "end": 27
                },
                "start": 22,
                "end": 27
              },
              "start": 11,
              "end": 27
            },
            "init": null,
            "definite": false,
            "start": 11,
            "end": 27
          }
        ],
        "declare": false,
        "start": 7,
        "end": 28
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 28
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
            "name": "nonexportedFoo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 49,
                "end": 52
              },
              "start": 47,
              "end": 52
            },
            "start": 33,
            "end": 52
          },
          "init": null,
          "definite": false,
          "start": 33,
          "end": 52
        }
      ],
      "declare": false,
      "start": 29,
      "end": 53
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "exportedFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 72,
          "end": 83
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 86,
          "end": 90
        },
        "start": 72,
        "end": 90
      },
      "directive": null,
      "start": 72,
      "end": 91
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nonexportedFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 92,
          "end": 106
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 109,
          "end": 113
        },
        "start": 92,
        "end": 113
      },
      "directive": null,
      "start": 92,
      "end": 114
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "TSAsExpression",
        "expression": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 120,
          "end": 124
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 128,
          "end": 131
        },
        "start": 120,
        "end": 131
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "exportedFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 142,
                      "end": 153
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "exportedFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 142,
                      "end": 153
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 142,
                    "end": 153
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nonexportedFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 155,
                      "end": 169
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nonexportedFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 155,
                      "end": 169
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 155,
                    "end": 169
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 171
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 174,
                  "end": 178
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 182,
                  "end": 185
                },
                "start": 174,
                "end": 185
              },
              "start": 140,
              "end": 185
            },
            "directive": null,
            "start": 139,
            "end": 187
          }
        ],
        "start": 133,
        "end": 189
      },
      "alternate": {
        "type": "IfStatement",
        "test": {
          "type": "TSAsExpression",
          "expression": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 199,
            "end": 203
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 207,
            "end": 210
          },
          "start": 199,
          "end": 210
        },
        "consequent": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "ObjectPattern",
                  "decorators": [],
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
                        "start": 218,
                        "end": 221
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "exportedFoo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 223,
                        "end": 234
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 218,
                      "end": 234
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 236,
                        "end": 239
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nonexportedFoo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 241,
                        "end": 255
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 236,
                      "end": 255
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 257
                },
                "right": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 260,
                    "end": 264
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 268,
                    "end": 271
                  },
                  "start": 260,
                  "end": 271
                },
                "start": 216,
                "end": 271
              },
              "directive": null,
              "start": 215,
              "end": 273
            }
          ],
          "start": 212,
          "end": 275
        },
        "alternate": {
          "type": "IfStatement",
          "test": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 285,
              "end": 289
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 293,
              "end": 296
            },
            "start": 285,
            "end": 296
          },
          "consequent": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "ObjectPattern",
                    "decorators": [],
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
                          "start": 304,
                          "end": 307
                        },
                        "value": {
                          "type": "ObjectPattern",
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 311,
                                "end": 314
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "exportedFoo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 316,
                                "end": 327
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 311,
                              "end": 327
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
                                "start": 329,
                                "end": 332
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "nonexportedFoo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 334,
                                "end": 348
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 329,
                              "end": 348
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 309,
                          "end": 350
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 304,
                        "end": 350
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 302,
                    "end": 352
                  },
                  "right": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 355,
                      "end": 359
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 363,
                      "end": 366
                    },
                    "start": 355,
                    "end": 366
                  },
                  "start": 302,
                  "end": 366
                },
                "directive": null,
                "start": 301,
                "end": 368
              }
            ],
            "start": 298,
            "end": 370
          },
          "alternate": {
            "type": "IfStatement",
            "test": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 380,
                "end": 384
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 388,
                "end": 391
              },
              "start": 380,
              "end": 391
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "exportedFoo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 398,
                          "end": 409
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nonexportedFoo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 411,
                          "end": 425
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 397,
                      "end": 426
                    },
                    "right": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 429,
                        "end": 433
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 437,
                        "end": 440
                      },
                      "start": 429,
                      "end": 440
                    },
                    "start": 397,
                    "end": 440
                  },
                  "directive": null,
                  "start": 396,
                  "end": 442
                }
              ],
              "start": 393,
              "end": 444
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "ArrayPattern",
                          "decorators": [],
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "exportedFoo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 456,
                              "end": 467
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "nonexportedFoo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 469,
                              "end": 483
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 455,
                          "end": 484
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 454,
                      "end": 485
                    },
                    "right": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 488,
                        "end": 492
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 496,
                        "end": 499
                      },
                      "start": 488,
                      "end": 499
                    },
                    "start": 454,
                    "end": 499
                  },
                  "directive": null,
                  "start": 453,
                  "end": 501
                }
              ],
              "start": 450,
              "end": 503
            },
            "start": 376,
            "end": 503
          },
          "start": 281,
          "end": 503
        },
        "start": 195,
        "end": 503
      },
      "start": 116,
      "end": 503
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "nonexportedFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 514,
            "end": 528
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "nonexportedFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 514,
            "end": 528
          },
          "exportKind": "value",
          "start": 514,
          "end": 528
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 505,
      "end": 531
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "exportedFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 541,
            "end": 552
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 556,
            "end": 559
          },
          "exportKind": "value",
          "start": 541,
          "end": 559
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "nonexportedFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 561,
            "end": 575
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "nfoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 579,
            "end": 583
          },
          "exportKind": "value",
          "start": 561,
          "end": 583
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 532,
      "end": 586
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 586
}
```
