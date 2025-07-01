__ESTREE_TEST__:PASS:
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
