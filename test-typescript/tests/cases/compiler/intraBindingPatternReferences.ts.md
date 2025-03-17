__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 69,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "ArrayPattern",
            "start": 92,
            "end": 106,
            "elements": [
              {
                "type": "Identifier",
                "start": 93,
                "end": 94,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "AssignmentPattern",
                "start": 96,
                "end": 105,
                "left": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 100,
                  "end": 105,
                  "left": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 101,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 104,
                    "end": 105,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
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
                "value": 42,
                "raw": "42"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "ArrayPattern",
            "start": 122,
            "end": 135,
            "elements": [
              {
                "type": "Identifier",
                "start": 123,
                "end": 125,
                "name": "c1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "AssignmentPattern",
                "start": 127,
                "end": 134,
                "left": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 129,
                  "name": "c2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 134,
                  "name": "c1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
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
                "value": 123,
                "raw": "123"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "ArrayPattern",
            "start": 151,
            "end": 173,
            "elements": [
              {
                "type": "Identifier",
                "start": 152,
                "end": 154,
                "name": "d1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "AssignmentPattern",
                "start": 156,
                "end": 163,
                "left": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 158,
                  "name": "d2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 163,
                  "name": "d1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "AssignmentPattern",
                "start": 165,
                "end": 172,
                "left": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 167,
                  "name": "d3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 172,
                  "name": "d2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
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
                "value": 123,
                "raw": "123"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "ObjectPattern",
            "start": 190,
            "end": 205,
            "properties": [
              {
                "type": "Property",
                "start": 192,
                "end": 194,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 194,
                  "name": "e1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 194,
                  "name": "e1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 196,
                "end": 203,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 198,
                  "name": "e2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 196,
                  "end": 203,
                  "left": {
                    "type": "Identifier",
                    "start": 196,
                    "end": 198,
                    "name": "e2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 203,
                    "name": "e1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 212,
                  "name": "e1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 214,
                  "end": 215,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "ObjectPattern",
            "start": 225,
            "end": 249,
            "properties": [
              {
                "type": "Property",
                "start": 227,
                "end": 229,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 229,
                  "name": "f1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 229,
                  "name": "f1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 231,
                "end": 238,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 233,
                  "name": "f2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 231,
                  "end": 238,
                  "left": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 233,
                    "name": "f2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 236,
                    "end": 238,
                    "name": "f1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 240,
                "end": 247,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 242,
                  "name": "f3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 240,
                  "end": 247,
                  "left": {
                    "type": "Identifier",
                    "start": 240,
                    "end": 242,
                    "name": "f3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 245,
                    "end": 247,
                    "name": "f2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 256,
                  "name": "f1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 258,
                  "end": 259,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 336,
            "end": 348,
            "name": "mockCallback",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 351,
            "end": 390,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 352,
                "end": 383,
                "properties": [
                  {
                    "type": "Property",
                    "start": 354,
                    "end": 381,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 354,
                      "end": 359,
                      "name": "event",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 361,
                      "end": 381,
                      "left": {
                        "type": "ObjectPattern",
                        "start": 361,
                        "end": 376,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 363,
                            "end": 374,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 363,
                              "end": 369,
                              "name": "params",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "AssignmentPattern",
                              "start": 363,
                              "end": 374,
                              "left": {
                                "type": "Identifier",
                                "start": 363,
                                "end": 369,
                                "name": "params",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "ObjectExpression",
                                "start": 372,
                                "end": 374,
                                "properties": []
                              },
                              "decorators": [],
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ],
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 379,
                        "end": 381,
                        "properties": []
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 388,
              "end": 390,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "ObjectPattern",
            "start": 552,
            "end": 589,
            "properties": [
              {
                "type": "Property",
                "start": 554,
                "end": 576,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 554,
                  "end": 557,
                  "name": "fn1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 554,
                  "end": 576,
                  "left": {
                    "type": "Identifier",
                    "start": 554,
                    "end": 557,
                    "name": "fn1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 560,
                    "end": 576,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 561,
                        "end": 570,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 562,
                          "end": 570,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 564,
                            "end": 570
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "Literal",
                      "start": 575,
                      "end": 576,
                      "value": 0,
                      "raw": "0"
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 578,
                "end": 587,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 578,
                  "end": 581,
                  "name": "fn2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 578,
                  "end": 587,
                  "left": {
                    "type": "Identifier",
                    "start": 578,
                    "end": 581,
                    "name": "fn2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 584,
                    "end": 587,
                    "name": "fn1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 594,
                  "end": 597,
                  "name": "fn1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 599,
                  "end": 609,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 599,
                      "end": 600,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BinaryExpression",
                    "start": 604,
                    "end": 609,
                    "left": {
                      "type": "Identifier",
                      "start": 604,
                      "end": 605,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "start": 608,
                      "end": 609,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 611,
                "end": 626,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 611,
                  "end": 614,
                  "name": "fn2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 616,
                  "end": 626,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 616,
                      "end": 617,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BinaryExpression",
                    "start": 621,
                    "end": 626,
                    "left": {
                      "type": "Identifier",
                      "start": 621,
                      "end": 622,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "start": 625,
                      "end": 626,
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
