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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 28,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 27,
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
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 53,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 52,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 72,
      "end": 91,
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
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 92,
      "end": 114,
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
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "IfStatement",
      "start": 116,
      "end": 503,
      "test": {
        "type": "TSAsExpression",
        "start": 120,
        "end": 131,
        "expression": {
          "type": "Literal",
          "start": 120,
          "end": 124,
          "value": null,
          "raw": "null"
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 128,
          "end": 131
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
                "properties": [
                  {
                    "type": "Property",
                    "start": 142,
                    "end": 153,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 153,
                      "decorators": [],
                      "name": "exportedFoo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 153,
                      "decorators": [],
                      "name": "exportedFoo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 155,
                    "end": 169,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 155,
                      "end": 169,
                      "decorators": [],
                      "name": "nonexportedFoo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 155,
                      "end": 169,
                      "decorators": [],
                      "name": "nonexportedFoo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  }
                ],
                "optional": false,
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
                  "value": null,
                  "raw": "null"
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 182,
                  "end": 185
                }
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "IfStatement",
        "start": 195,
        "end": 503,
        "test": {
          "type": "TSAsExpression",
          "start": 199,
          "end": 210,
          "expression": {
            "type": "Literal",
            "start": 199,
            "end": 203,
            "value": null,
            "raw": "null"
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 207,
            "end": 210
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
                  "properties": [
                    {
                      "type": "Property",
                      "start": 218,
                      "end": 234,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 218,
                        "end": 221,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 223,
                        "end": 234,
                        "decorators": [],
                        "name": "exportedFoo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 236,
                      "end": 255,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 236,
                        "end": 239,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 241,
                        "end": 255,
                        "decorators": [],
                        "name": "nonexportedFoo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
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
                    "value": null,
                    "raw": "null"
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 268,
                    "end": 271
                  }
                }
              },
              "directive": null
            }
          ]
        },
        "alternate": {
          "type": "IfStatement",
          "start": 281,
          "end": 503,
          "test": {
            "type": "TSAsExpression",
            "start": 285,
            "end": 296,
            "expression": {
              "type": "Literal",
              "start": 285,
              "end": 289,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 293,
              "end": 296
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
                    "properties": [
                      {
                        "type": "Property",
                        "start": 304,
                        "end": 350,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 304,
                          "end": 307,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "ObjectPattern",
                          "start": 309,
                          "end": 350,
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "start": 311,
                              "end": 327,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 311,
                                "end": 314,
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 316,
                                "end": 327,
                                "decorators": [],
                                "name": "exportedFoo",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 329,
                              "end": 348,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 329,
                                "end": 332,
                                "decorators": [],
                                "name": "baz",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 334,
                                "end": 348,
                                "decorators": [],
                                "name": "nonexportedFoo",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "optional": false,
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
                      "value": null,
                      "raw": "null"
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 363,
                      "end": 366
                    }
                  }
                },
                "directive": null
              }
            ]
          },
          "alternate": {
            "type": "IfStatement",
            "start": 376,
            "end": 503,
            "test": {
              "type": "TSAsExpression",
              "start": 380,
              "end": 391,
              "expression": {
                "type": "Literal",
                "start": 380,
                "end": 384,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 388,
                "end": 391
              }
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
                        "value": null,
                        "raw": "null"
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 437,
                        "end": 440
                      }
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 450,
              "end": 503,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 453,
                  "end": 501,
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
                        "value": null,
                        "raw": "null"
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 496,
                        "end": 499
                      }
                    }
                  },
                  "directive": null
                }
              ]
            }
          }
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 505,
      "end": 531,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 514,
          "end": 528,
          "local": {
            "type": "Identifier",
            "start": 514,
            "end": 528,
            "decorators": [],
            "name": "nonexportedFoo",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 514,
            "end": 528,
            "decorators": [],
            "name": "nonexportedFoo",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 532,
      "end": 586,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 541,
          "end": 559,
          "local": {
            "type": "Identifier",
            "start": 541,
            "end": 552,
            "decorators": [],
            "name": "exportedFoo",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 556,
            "end": 559,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 561,
          "end": 583,
          "local": {
            "type": "Identifier",
            "start": 561,
            "end": 575,
            "decorators": [],
            "name": "nonexportedFoo",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 579,
            "end": 583,
            "decorators": [],
            "name": "nfoo",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
