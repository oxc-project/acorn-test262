__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 586,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 28,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 27,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 27,
              "decorators": [],
              "name": "exportedFoo",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 22,
                "end": 27,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 24,
                  "end": 27
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 53,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 52,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 52,
            "decorators": [],
            "name": "nonexportedFoo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 52,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 49,
                "end": 52
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 72,
      "end": 91,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 72,
        "end": 90,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 72,
          "end": 83,
          "decorators": [],
          "name": "exportedFoo",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 86,
          "end": 90,
          "raw": "null",
          "value": null,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 92,
      "end": 114,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 92,
        "end": 113,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 92,
          "end": 106,
          "decorators": [],
          "name": "nonexportedFoo",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 109,
          "end": 113,
          "raw": "null",
          "value": null,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 116,
      "end": 503,
      "alternate": {
        "type": "IfStatement",
        "start": 195,
        "end": 503,
        "alternate": {
          "type": "IfStatement",
          "start": 281,
          "end": 503,
          "alternate": {
            "type": "IfStatement",
            "start": 376,
            "end": 503,
            "alternate": {
              "type": "BlockStatement",
              "start": 450,
              "end": 503,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 453,
                  "end": 501,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 454,
                    "end": 499,
                    "operator": "=",
                    "left": {
                      "type": "ArrayPattern",
                      "start": 454,
                      "end": 485,
                      "decorators": [],
                      "elements": [
                        {
                          "type": "ArrayPattern",
                          "start": 455,
                          "end": 484,
                          "decorators": [],
                          "elements": [
                            {
                              "type": "Identifier",
                              "start": 456,
                              "end": 467,
                              "decorators": [],
                              "name": "exportedFoo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            {
                              "type": "Identifier",
                              "start": 469,
                              "end": 483,
                              "decorators": [],
                              "name": "nonexportedFoo",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "TSAsExpression",
                      "start": 488,
                      "end": 499,
                      "expression": {
                        "type": "Literal",
                        "start": 488,
                        "end": 492,
                        "raw": "null",
                        "value": null,
                        "regex": null,
                        "bigint": null
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 496,
                        "end": 499
                      }
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 393,
              "end": 444,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 396,
                  "end": 442,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 397,
                    "end": 440,
                    "operator": "=",
                    "left": {
                      "type": "ArrayPattern",
                      "start": 397,
                      "end": 426,
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 398,
                          "end": 409,
                          "decorators": [],
                          "name": "exportedFoo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 411,
                          "end": 425,
                          "decorators": [],
                          "name": "nonexportedFoo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "TSAsExpression",
                      "start": 429,
                      "end": 440,
                      "expression": {
                        "type": "Literal",
                        "start": 429,
                        "end": 433,
                        "raw": "null",
                        "value": null,
                        "regex": null,
                        "bigint": null
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 437,
                        "end": 440
                      }
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "TSAsExpression",
              "start": 380,
              "end": 391,
              "expression": {
                "type": "Literal",
                "start": 380,
                "end": 384,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 388,
                "end": 391
              }
            }
          },
          "consequent": {
            "type": "BlockStatement",
            "start": 298,
            "end": 370,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 301,
                "end": 368,
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 302,
                  "end": 366,
                  "operator": "=",
                  "left": {
                    "type": "ObjectPattern",
                    "start": 302,
                    "end": 352,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 304,
                        "end": 350,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 304,
                          "end": 307,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "ObjectPattern",
                          "start": 309,
                          "end": 350,
                          "decorators": [],
                          "optional": false,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 311,
                              "end": 327,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 311,
                                "end": 314,
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Identifier",
                                "start": 316,
                                "end": 327,
                                "decorators": [],
                                "name": "exportedFoo",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "Property",
                              "start": 329,
                              "end": 348,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 329,
                                "end": 332,
                                "decorators": [],
                                "name": "baz",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Identifier",
                                "start": 334,
                                "end": 348,
                                "decorators": [],
                                "name": "nonexportedFoo",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ],
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "TSAsExpression",
                    "start": 355,
                    "end": 366,
                    "expression": {
                      "type": "Literal",
                      "start": 355,
                      "end": 359,
                      "raw": "null",
                      "value": null,
                      "regex": null,
                      "bigint": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 363,
                      "end": 366
                    }
                  }
                }
              }
            ]
          },
          "test": {
            "type": "TSAsExpression",
            "start": 285,
            "end": 296,
            "expression": {
              "type": "Literal",
              "start": 285,
              "end": 289,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 293,
              "end": 296
            }
          }
        },
        "consequent": {
          "type": "BlockStatement",
          "start": 212,
          "end": 275,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 215,
              "end": 273,
              "directive": null,
              "expression": {
                "type": "AssignmentExpression",
                "start": 216,
                "end": 271,
                "operator": "=",
                "left": {
                  "type": "ObjectPattern",
                  "start": 216,
                  "end": 257,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 218,
                      "end": 234,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 218,
                        "end": 221,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 223,
                        "end": 234,
                        "decorators": [],
                        "name": "exportedFoo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 236,
                      "end": 255,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 236,
                        "end": 239,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 241,
                        "end": 255,
                        "decorators": [],
                        "name": "nonexportedFoo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": null
                },
                "right": {
                  "type": "TSAsExpression",
                  "start": 260,
                  "end": 271,
                  "expression": {
                    "type": "Literal",
                    "start": 260,
                    "end": 264,
                    "raw": "null",
                    "value": null,
                    "regex": null,
                    "bigint": null
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 268,
                    "end": 271
                  }
                }
              }
            }
          ]
        },
        "test": {
          "type": "TSAsExpression",
          "start": 199,
          "end": 210,
          "expression": {
            "type": "Literal",
            "start": 199,
            "end": 203,
            "raw": "null",
            "value": null,
            "regex": null,
            "bigint": null
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 207,
            "end": 210
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 133,
        "end": 189,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 139,
            "end": 187,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 140,
              "end": 185,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 140,
                "end": 171,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 142,
                    "end": 153,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 153,
                      "decorators": [],
                      "name": "exportedFoo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 153,
                      "decorators": [],
                      "name": "exportedFoo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 155,
                    "end": 169,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 155,
                      "end": 169,
                      "decorators": [],
                      "name": "nonexportedFoo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 155,
                      "end": 169,
                      "decorators": [],
                      "name": "nonexportedFoo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": null
              },
              "right": {
                "type": "TSAsExpression",
                "start": 174,
                "end": 185,
                "expression": {
                  "type": "Literal",
                  "start": 174,
                  "end": 178,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 182,
                  "end": 185
                }
              }
            }
          }
        ]
      },
      "test": {
        "type": "TSAsExpression",
        "start": 120,
        "end": 131,
        "expression": {
          "type": "Literal",
          "start": 120,
          "end": 124,
          "raw": "null",
          "value": null,
          "regex": null,
          "bigint": null
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 128,
          "end": 131
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 505,
      "end": 531,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 514,
          "end": 528,
          "exported": {
            "type": "Identifier",
            "start": 514,
            "end": 528,
            "decorators": [],
            "name": "nonexportedFoo",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 514,
            "end": 528,
            "decorators": [],
            "name": "nonexportedFoo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 532,
      "end": 586,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 541,
          "end": 559,
          "exported": {
            "type": "Identifier",
            "start": 556,
            "end": 559,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 541,
            "end": 552,
            "decorators": [],
            "name": "exportedFoo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 561,
          "end": 583,
          "exported": {
            "type": "Identifier",
            "start": 579,
            "end": 583,
            "decorators": [],
            "name": "nfoo",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 561,
            "end": 575,
            "decorators": [],
            "name": "nonexportedFoo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
