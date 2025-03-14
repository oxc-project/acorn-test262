intraBindingPatternReferences.ts
```json
{
  "type": "Program",
  "start": 57,
  "end": 630,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 84,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 72,
        "end": 84,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 74,
            "end": 82,
            "argument": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 69,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 113,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 92,
            "end": 106,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 93,
                "end": 94,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              {
                "type": "AssignmentPattern",
                "start": 96,
                "end": 105,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "BinaryExpression",
                  "start": 100,
                  "end": 105,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 101,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 104,
                    "end": 105,
                    "raw": "1",
                    "value": 1
                  }
                }
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 109,
            "end": 113,
            "elements": [
              {
                "type": "Literal",
                "start": 110,
                "end": 112,
                "raw": "42",
                "value": 42
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 144,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 143,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 122,
            "end": 135,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 123,
                "end": 125,
                "decorators": [],
                "name": "c1",
                "optional": false
              },
              {
                "type": "AssignmentPattern",
                "start": 127,
                "end": 134,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 129,
                  "decorators": [],
                  "name": "c2",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 134,
                  "decorators": [],
                  "name": "c1",
                  "optional": false
                }
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 138,
            "end": 143,
            "elements": [
              {
                "type": "Literal",
                "start": 139,
                "end": 142,
                "raw": "123",
                "value": 123
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 145,
      "end": 182,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 151,
          "end": 181,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 151,
            "end": 173,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 152,
                "end": 154,
                "decorators": [],
                "name": "d1",
                "optional": false
              },
              {
                "type": "AssignmentPattern",
                "start": 156,
                "end": 163,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 158,
                  "decorators": [],
                  "name": "d2",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 163,
                  "decorators": [],
                  "name": "d1",
                  "optional": false
                }
              },
              {
                "type": "AssignmentPattern",
                "start": 165,
                "end": 172,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 167,
                  "decorators": [],
                  "name": "d3",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 172,
                  "decorators": [],
                  "name": "d2",
                  "optional": false
                }
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 176,
            "end": 181,
            "elements": [
              {
                "type": "Literal",
                "start": 177,
                "end": 180,
                "raw": "123",
                "value": 123
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 184,
      "end": 218,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 217,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 190,
            "end": 205,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 192,
                "end": 194,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 194,
                  "decorators": [],
                  "name": "e1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 194,
                  "decorators": [],
                  "name": "e1",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 196,
                "end": 203,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 198,
                  "decorators": [],
                  "name": "e2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 196,
                  "end": 203,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 196,
                    "end": 198,
                    "decorators": [],
                    "name": "e2",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 203,
                    "decorators": [],
                    "name": "e1",
                    "optional": false
                  }
                }
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 208,
            "end": 217,
            "properties": [
              {
                "type": "Property",
                "start": 210,
                "end": 215,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 212,
                  "decorators": [],
                  "name": "e1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 214,
                  "end": 215,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 219,
      "end": 262,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 225,
          "end": 261,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 225,
            "end": 249,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 227,
                "end": 229,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 229,
                  "decorators": [],
                  "name": "f1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 229,
                  "decorators": [],
                  "name": "f1",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 231,
                "end": 238,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 233,
                  "decorators": [],
                  "name": "f2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 231,
                  "end": 238,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 233,
                    "decorators": [],
                    "name": "f2",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Identifier",
                    "start": 236,
                    "end": 238,
                    "decorators": [],
                    "name": "f1",
                    "optional": false
                  }
                }
              },
              {
                "type": "Property",
                "start": 240,
                "end": 247,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 242,
                  "decorators": [],
                  "name": "f3",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 240,
                  "end": 247,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 240,
                    "end": 242,
                    "decorators": [],
                    "name": "f3",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Identifier",
                    "start": 245,
                    "end": 247,
                    "decorators": [],
                    "name": "f2",
                    "optional": false
                  }
                }
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 252,
            "end": 261,
            "properties": [
              {
                "type": "Property",
                "start": 254,
                "end": 259,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 256,
                  "decorators": [],
                  "name": "f1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 258,
                  "end": 259,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 330,
      "end": 391,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 336,
          "end": 390,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 336,
            "end": 348,
            "decorators": [],
            "name": "mockCallback",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 351,
            "end": 390,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 388,
              "end": 390,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 352,
                "end": 383,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 354,
                    "end": 381,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 354,
                      "end": 359,
                      "decorators": [],
                      "name": "event",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 361,
                      "end": 381,
                      "decorators": [],
                      "left": {
                        "type": "ObjectPattern",
                        "start": 361,
                        "end": 376,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 363,
                            "end": 374,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 363,
                              "end": 369,
                              "decorators": [],
                              "name": "params",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "AssignmentPattern",
                              "start": 363,
                              "end": 374,
                              "decorators": [],
                              "left": {
                                "type": "Identifier",
                                "start": 363,
                                "end": 369,
                                "decorators": [],
                                "name": "params",
                                "optional": false
                              },
                              "optional": false,
                              "right": {
                                "type": "ObjectExpression",
                                "start": 372,
                                "end": 374,
                                "properties": []
                              }
                            }
                          }
                        ]
                      },
                      "optional": false,
                      "right": {
                        "type": "ObjectExpression",
                        "start": 379,
                        "end": 381,
                        "properties": []
                      }
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 546,
      "end": 629,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 552,
          "end": 628,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 552,
            "end": 589,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 554,
                "end": 576,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 554,
                  "end": 557,
                  "decorators": [],
                  "name": "fn1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 554,
                  "end": 576,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 554,
                    "end": 557,
                    "decorators": [],
                    "name": "fn1",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 560,
                    "end": 576,
                    "async": false,
                    "body": {
                      "type": "Literal",
                      "start": 575,
                      "end": 576,
                      "raw": "0",
                      "value": 0
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 561,
                        "end": 570,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 562,
                          "end": 570,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 564,
                            "end": 570
                          }
                        }
                      }
                    ]
                  }
                }
              },
              {
                "type": "Property",
                "start": 578,
                "end": 587,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 578,
                  "end": 581,
                  "decorators": [],
                  "name": "fn2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 578,
                  "end": 587,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 578,
                    "end": 581,
                    "decorators": [],
                    "name": "fn2",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Identifier",
                    "start": 584,
                    "end": 587,
                    "decorators": [],
                    "name": "fn1",
                    "optional": false
                  }
                }
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 592,
            "end": 628,
            "properties": [
              {
                "type": "Property",
                "start": 594,
                "end": 609,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 594,
                  "end": 597,
                  "decorators": [],
                  "name": "fn1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 599,
                  "end": 609,
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 604,
                    "end": 609,
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "start": 604,
                      "end": 605,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 608,
                      "end": 609,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 599,
                      "end": 600,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 611,
                "end": 626,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 611,
                  "end": 614,
                  "decorators": [],
                  "name": "fn2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 616,
                  "end": 626,
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 621,
                    "end": 626,
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "start": 621,
                      "end": 622,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 625,
                      "end": 626,
                      "raw": "2",
                      "value": 2
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 616,
                      "end": 617,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
