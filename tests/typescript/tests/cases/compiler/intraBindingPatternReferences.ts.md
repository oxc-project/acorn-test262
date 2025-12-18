__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 69
      },
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
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 82
            },
            "start": 74,
            "end": 82
          }
        ],
        "start": 72,
        "end": 84
      },
      "expression": false,
      "start": 57,
      "end": 84
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 94
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 97
                },
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 100,
                    "end": 101
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 104,
                    "end": 105
                  },
                  "start": 100,
                  "end": 105
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 96,
                "end": 105
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 106
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 110,
                "end": 112
              }
            ],
            "start": 109,
            "end": 113
          },
          "definite": false,
          "start": 92,
          "end": 113
        }
      ],
      "declare": false,
      "start": 86,
      "end": 114
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 123,
                "end": 125
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 127,
                  "end": 129
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 134
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 134
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 135
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 123,
                "raw": "123",
                "start": 139,
                "end": 142
              }
            ],
            "start": 138,
            "end": 143
          },
          "definite": false,
          "start": 122,
          "end": 143
        }
      ],
      "declare": false,
      "start": 116,
      "end": 144
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 154
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 156,
                  "end": 158
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 163
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 156,
                "end": 163
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 165,
                  "end": 167
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 170,
                  "end": 172
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 172
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 173
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 123,
                "raw": "123",
                "start": 177,
                "end": 180
              }
            ],
            "start": 176,
            "end": 181
          },
          "definite": false,
          "start": 151,
          "end": 181
        }
      ],
      "declare": false,
      "start": 145,
      "end": 182
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 194
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 194
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 192,
                "end": 194
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 198
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 196,
                    "end": 198
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 201,
                    "end": 203
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 203
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 196,
                "end": 203
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 205
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
                  "name": "e1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 210,
                  "end": 212
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 214,
                  "end": 215
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 210,
                "end": 215
              }
            ],
            "start": 208,
            "end": 217
          },
          "definite": false,
          "start": 190,
          "end": 217
        }
      ],
      "declare": false,
      "start": 184,
      "end": 218
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 227,
                  "end": 229
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 227,
                  "end": 229
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 227,
                "end": 229
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 233
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 231,
                    "end": 233
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 236,
                    "end": 238
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 238
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 231,
                "end": 238
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 242
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 240,
                    "end": 242
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 245,
                    "end": 247
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 247
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 240,
                "end": 247
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 225,
            "end": 249
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
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 254,
                  "end": 256
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 258,
                  "end": 259
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 254,
                "end": 259
              }
            ],
            "start": 252,
            "end": 261
          },
          "definite": false,
          "start": 225,
          "end": 261
        }
      ],
      "declare": false,
      "start": 219,
      "end": 262
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
            "name": "mockCallback",
            "optional": false,
            "typeAnnotation": null,
            "start": 336,
            "end": 348
          },
          "init": {
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
                      "name": "event",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 354,
                      "end": 359
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
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
                              "name": "params",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 363,
                              "end": 369
                            },
                            "value": {
                              "type": "AssignmentPattern",
                              "decorators": [],
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "params",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 363,
                                "end": 369
                              },
                              "right": {
                                "type": "ObjectExpression",
                                "properties": [],
                                "start": 372,
                                "end": 374
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 363,
                              "end": 374
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 363,
                            "end": 374
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 361,
                        "end": 376
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 379,
                        "end": 381
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 361,
                      "end": 381
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 354,
                    "end": 381
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 352,
                "end": 383
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 388,
              "end": 390
            },
            "id": null,
            "generator": false,
            "start": 351,
            "end": 390
          },
          "definite": false,
          "start": 336,
          "end": 390
        }
      ],
      "declare": false,
      "start": 330,
      "end": 391
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 554,
                  "end": 557
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 554,
                    "end": 557
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 564,
                            "end": 570
                          },
                          "start": 562,
                          "end": 570
                        },
                        "start": 561,
                        "end": 570
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 575,
                      "end": 576
                    },
                    "id": null,
                    "generator": false,
                    "start": 560,
                    "end": 576
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 554,
                  "end": 576
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 554,
                "end": 576
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 578,
                  "end": 581
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 578,
                    "end": 581
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 584,
                    "end": 587
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 578,
                  "end": 587
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 578,
                "end": 587
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 552,
            "end": 589
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
                  "name": "fn1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 594,
                  "end": 597
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 599,
                      "end": 600
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 604,
                      "end": 605
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 608,
                      "end": 609
                    },
                    "start": 604,
                    "end": 609
                  },
                  "id": null,
                  "generator": false,
                  "start": 599,
                  "end": 609
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 594,
                "end": 609
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 611,
                  "end": 614
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 616,
                      "end": 617
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 621,
                      "end": 622
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 625,
                      "end": 626
                    },
                    "start": 621,
                    "end": 626
                  },
                  "id": null,
                  "generator": false,
                  "start": 616,
                  "end": 626
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 611,
                "end": 626
              }
            ],
            "start": 592,
            "end": 628
          },
          "definite": false,
          "start": 552,
          "end": 628
        }
      ],
      "declare": false,
      "start": 546,
      "end": 629
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 629
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 57,
    "end": 65,
    "range": [
      57,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 66,
    "end": 69,
    "range": [
      66,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 74,
    "end": 80,
    "range": [
      74,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 86,
    "end": 91,
    "range": [
      86,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 110,
    "end": 112,
    "range": [
      110,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 116,
    "end": 121,
    "range": [
      116,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 123,
    "end": 125,
    "range": [
      123,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 127,
    "end": 129,
    "range": [
      127,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 132,
    "end": 134,
    "range": [
      132,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 139,
    "end": 142,
    "range": [
      139,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 145,
    "end": 150,
    "range": [
      145,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 152,
    "end": 154,
    "range": [
      152,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 156,
    "end": 158,
    "range": [
      156,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 161,
    "end": 163,
    "range": [
      161,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 165,
    "end": 167,
    "range": [
      165,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 170,
    "end": 172,
    "range": [
      170,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 177,
    "end": 180,
    "range": [
      177,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 184,
    "end": 189,
    "range": [
      184,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 192,
    "end": 194,
    "range": [
      192,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 196,
    "end": 198,
    "range": [
      196,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 201,
    "end": 203,
    "range": [
      201,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 210,
    "end": 212,
    "range": [
      210,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 219,
    "end": 224,
    "range": [
      219,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 227,
    "end": 229,
    "range": [
      227,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 231,
    "end": 233,
    "range": [
      231,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 236,
    "end": 238,
    "range": [
      236,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 240,
    "end": 242,
    "range": [
      240,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 245,
    "end": 247,
    "range": [
      245,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 254,
    "end": 256,
    "range": [
      254,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 330,
    "end": 335,
    "range": [
      330,
      335
    ]
  },
  {
    "type": "Identifier",
    "value": "mockCallback",
    "start": 336,
    "end": 348,
    "range": [
      336,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 354,
    "end": 359,
    "range": [
      354,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 363,
    "end": 369,
    "range": [
      363,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 385,
    "end": 387,
    "range": [
      385,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 546,
    "end": 551,
    "range": [
      546,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 554,
    "end": 557,
    "range": [
      554,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 564,
    "end": 570,
    "range": [
      564,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 572,
    "end": 574,
    "range": [
      572,
      574
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 578,
    "end": 581,
    "range": [
      578,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 584,
    "end": 587,
    "range": [
      584,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 594,
    "end": 597,
    "range": [
      594,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 601,
    "end": 603,
    "range": [
      601,
      603
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 611,
    "end": 614,
    "range": [
      611,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 618,
    "end": 620,
    "range": [
      618,
      620
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  }
]
```
