__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 629,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 69,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 114,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 113,
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
                "optional": false,
                "typeAnnotation": null
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 100,
                  "end": 105,
                  "left": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 101,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
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
                "optional": false,
                "typeAnnotation": null
              }
            ],
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 144,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 143,
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
                "optional": false,
                "typeAnnotation": null
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 134,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 145,
      "end": 182,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 151,
          "end": 181,
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
                "optional": false,
                "typeAnnotation": null
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 163,
                  "decorators": [],
                  "name": "d1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 172,
                  "decorators": [],
                  "name": "d2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 184,
      "end": 218,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 217,
          "id": {
            "type": "ObjectPattern",
            "start": 190,
            "end": 205,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 192,
                "end": 194,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 194,
                  "decorators": [],
                  "name": "e1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 194,
                  "decorators": [],
                  "name": "e1",
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
                "start": 196,
                "end": 203,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 198,
                  "decorators": [],
                  "name": "e2",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 203,
                    "decorators": [],
                    "name": "e1",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
          "init": {
            "type": "ObjectExpression",
            "start": 208,
            "end": 217,
            "properties": [
              {
                "type": "Property",
                "start": 210,
                "end": 215,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 212,
                  "decorators": [],
                  "name": "e1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 214,
                  "end": 215,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 219,
      "end": 262,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 225,
          "end": 261,
          "id": {
            "type": "ObjectPattern",
            "start": 225,
            "end": 249,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 227,
                "end": 229,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 229,
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 229,
                  "decorators": [],
                  "name": "f1",
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
                "start": 231,
                "end": 238,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 233,
                  "decorators": [],
                  "name": "f2",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 236,
                    "end": 238,
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                "start": 240,
                "end": 247,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 242,
                  "decorators": [],
                  "name": "f3",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 245,
                    "end": 247,
                    "decorators": [],
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
          "init": {
            "type": "ObjectExpression",
            "start": 252,
            "end": 261,
            "properties": [
              {
                "type": "Property",
                "start": 254,
                "end": 259,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 256,
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 258,
                  "end": 259,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 330,
      "end": 391,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 336,
          "end": 390,
          "id": {
            "type": "Identifier",
            "start": 336,
            "end": 348,
            "decorators": [],
            "name": "mockCallback",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 351,
            "end": 390,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 352,
                "end": 383,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 354,
                    "end": 381,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 354,
                      "end": 359,
                      "decorators": [],
                      "name": "event",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                        "properties": [
                          {
                            "type": "Property",
                            "start": 363,
                            "end": 374,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 363,
                              "end": 369,
                              "decorators": [],
                              "name": "params",
                              "optional": false,
                              "typeAnnotation": null
                            },
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
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "ObjectExpression",
                                "start": 372,
                                "end": 374,
                                "properties": []
                              },
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
                        "type": "ObjectExpression",
                        "start": 379,
                        "end": 381,
                        "properties": []
                      },
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
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 388,
              "end": 390,
              "body": []
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 546,
      "end": 629,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 552,
          "end": 628,
          "id": {
            "type": "ObjectPattern",
            "start": 552,
            "end": 589,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 554,
                "end": 576,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 554,
                  "end": 557,
                  "decorators": [],
                  "name": "fn1",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 560,
                    "end": 576,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
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
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "start": 575,
                      "end": 576,
                      "value": 0,
                      "raw": "0"
                    },
                    "id": null,
                    "generator": false
                  },
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
                "start": 578,
                "end": 587,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 578,
                  "end": 581,
                  "decorators": [],
                  "name": "fn2",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 584,
                    "end": 587,
                    "decorators": [],
                    "name": "fn1",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
          "init": {
            "type": "ObjectExpression",
            "start": 592,
            "end": 628,
            "properties": [
              {
                "type": "Property",
                "start": 594,
                "end": 609,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 594,
                  "end": 597,
                  "decorators": [],
                  "name": "fn1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 599,
                  "end": 609,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 599,
                      "end": 600,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 604,
                    "end": 609,
                    "left": {
                      "type": "Identifier",
                      "start": 604,
                      "end": 605,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
                "start": 611,
                "end": 626,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 611,
                  "end": 614,
                  "decorators": [],
                  "name": "fn2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 616,
                  "end": 626,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 616,
                      "end": 617,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 621,
                    "end": 626,
                    "left": {
                      "type": "Identifier",
                      "start": 621,
                      "end": 622,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
