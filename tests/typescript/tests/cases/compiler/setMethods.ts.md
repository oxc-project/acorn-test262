__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1395,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 34,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 16,
            "end": 34,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 24,
                "end": 33,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 25,
                    "end": 26,
                    "raw": "0",
                    "value": 0
                  },
                  {
                    "type": "Literal",
                    "start": 28,
                    "end": 29,
                    "raw": "1",
                    "value": 1
                  },
                  {
                    "type": "Literal",
                    "start": 31,
                    "end": 32,
                    "raw": "2",
                    "value": 2
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 20,
              "end": 23,
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 72,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 50,
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 53,
            "end": 72,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 61,
                "end": 71,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 62,
                    "end": 65,
                    "raw": "\"a\"",
                    "value": "a"
                  },
                  {
                    "type": "Literal",
                    "start": 67,
                    "end": 70,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 57,
              "end": 60,
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 75,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 118,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 88,
            "decorators": [],
            "name": "numberMap",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 91,
            "end": 118,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 99,
                "end": 117,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 100,
                    "end": 107,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 101,
                        "end": 102,
                        "raw": "4",
                        "value": 4
                      },
                      {
                        "type": "ObjectExpression",
                        "start": 104,
                        "end": 106,
                        "properties": []
                      }
                    ]
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 109,
                    "end": 116,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 110,
                        "end": 111,
                        "raw": "5",
                        "value": 5
                      },
                      {
                        "type": "ObjectExpression",
                        "start": 113,
                        "end": 115,
                        "properties": []
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 95,
              "end": 98,
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 121,
      "end": 208,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 207,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 138,
            "decorators": [],
            "name": "numberSetLike",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 141,
            "end": 207,
            "properties": [
              {
                "type": "Property",
                "start": 145,
                "end": 152,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 149,
                  "decorators": [],
                  "name": "size",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 151,
                  "end": 152,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 156,
                "end": 175,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 161,
                  "decorators": [],
                  "name": "keys",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 161,
                  "end": 175,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 164,
                    "end": 175,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 166,
                        "end": 173,
                        "directive": null,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 166,
                          "end": 173,
                          "argument": {
                            "type": "Literal",
                            "start": 172,
                            "end": 173,
                            "raw": "3",
                            "value": 3
                          },
                          "delegate": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 179,
                "end": 204,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 182,
                  "decorators": [],
                  "name": "has",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 182,
                  "end": 204,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 186,
                    "end": 204,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 188,
                        "end": 202,
                        "argument": {
                          "type": "BinaryExpression",
                          "start": 195,
                          "end": 202,
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "start": 195,
                            "end": 196,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 201,
                            "end": 202,
                            "raw": "3",
                            "value": 3
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 183,
                      "end": 184,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 210,
      "end": 230,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 210,
        "end": 229,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 226,
            "end": 228,
            "elements": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 210,
          "end": 225,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 210,
            "end": 219,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 220,
            "end": 225,
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 231,
      "end": 256,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 231,
        "end": 255,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 247,
            "end": 254,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 251,
              "end": 254,
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 231,
          "end": 246,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 231,
            "end": 240,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 241,
            "end": 246,
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 257,
      "end": 284,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 257,
        "end": 283,
        "arguments": [
          {
            "type": "Identifier",
            "start": 273,
            "end": 282,
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 257,
          "end": 272,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 257,
            "end": 266,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 267,
            "end": 272,
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 285,
      "end": 312,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 285,
        "end": 311,
        "arguments": [
          {
            "type": "Identifier",
            "start": 301,
            "end": 310,
            "decorators": [],
            "name": "numberMap",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 285,
          "end": 300,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 285,
            "end": 294,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 295,
            "end": 300,
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 313,
      "end": 344,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 313,
        "end": 343,
        "arguments": [
          {
            "type": "Identifier",
            "start": 329,
            "end": 342,
            "decorators": [],
            "name": "numberSetLike",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 313,
          "end": 328,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 313,
            "end": 322,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 323,
            "end": 328,
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 346,
      "end": 373,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 346,
        "end": 372,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 369,
            "end": 371,
            "elements": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 346,
          "end": 368,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 346,
            "end": 355,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 356,
            "end": 368,
            "decorators": [],
            "name": "intersection",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 374,
      "end": 406,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 374,
        "end": 405,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 397,
            "end": 404,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 401,
              "end": 404,
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 374,
          "end": 396,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 374,
            "end": 383,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 384,
            "end": 396,
            "decorators": [],
            "name": "intersection",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 407,
      "end": 441,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 407,
        "end": 440,
        "arguments": [
          {
            "type": "Identifier",
            "start": 430,
            "end": 439,
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 407,
          "end": 429,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 407,
            "end": 416,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 417,
            "end": 429,
            "decorators": [],
            "name": "intersection",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 442,
      "end": 476,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 442,
        "end": 475,
        "arguments": [
          {
            "type": "Identifier",
            "start": 465,
            "end": 474,
            "decorators": [],
            "name": "numberMap",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 442,
          "end": 464,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 442,
            "end": 451,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 452,
            "end": 464,
            "decorators": [],
            "name": "intersection",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 477,
      "end": 515,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 477,
        "end": 514,
        "arguments": [
          {
            "type": "Identifier",
            "start": 500,
            "end": 513,
            "decorators": [],
            "name": "numberSetLike",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 477,
          "end": 499,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 477,
            "end": 486,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 487,
            "end": 499,
            "decorators": [],
            "name": "intersection",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 517,
      "end": 542,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 517,
        "end": 541,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 538,
            "end": 540,
            "elements": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 517,
          "end": 537,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 517,
            "end": 526,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 527,
            "end": 537,
            "decorators": [],
            "name": "difference",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 543,
      "end": 573,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 543,
        "end": 572,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 564,
            "end": 571,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 568,
              "end": 571,
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 543,
          "end": 563,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 543,
            "end": 552,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 553,
            "end": 563,
            "decorators": [],
            "name": "difference",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 574,
      "end": 606,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 574,
        "end": 605,
        "arguments": [
          {
            "type": "Identifier",
            "start": 595,
            "end": 604,
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 574,
          "end": 594,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 574,
            "end": 583,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 584,
            "end": 594,
            "decorators": [],
            "name": "difference",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 607,
      "end": 639,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 607,
        "end": 638,
        "arguments": [
          {
            "type": "Identifier",
            "start": 628,
            "end": 637,
            "decorators": [],
            "name": "numberMap",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 607,
          "end": 627,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 607,
            "end": 616,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 617,
            "end": 627,
            "decorators": [],
            "name": "difference",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 640,
      "end": 676,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 640,
        "end": 675,
        "arguments": [
          {
            "type": "Identifier",
            "start": 661,
            "end": 674,
            "decorators": [],
            "name": "numberSetLike",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 640,
          "end": 660,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 640,
            "end": 649,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 650,
            "end": 660,
            "decorators": [],
            "name": "difference",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 678,
      "end": 712,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 678,
        "end": 711,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 708,
            "end": 710,
            "elements": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 678,
          "end": 707,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 678,
            "end": 687,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 688,
            "end": 707,
            "decorators": [],
            "name": "symmetricDifference",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 713,
      "end": 752,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 713,
        "end": 751,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 743,
            "end": 750,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 747,
              "end": 750,
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 713,
          "end": 742,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 713,
            "end": 722,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 723,
            "end": 742,
            "decorators": [],
            "name": "symmetricDifference",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 753,
      "end": 794,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 753,
        "end": 793,
        "arguments": [
          {
            "type": "Identifier",
            "start": 783,
            "end": 792,
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 753,
          "end": 782,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 753,
            "end": 762,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 763,
            "end": 782,
            "decorators": [],
            "name": "symmetricDifference",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 795,
      "end": 836,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 795,
        "end": 835,
        "arguments": [
          {
            "type": "Identifier",
            "start": 825,
            "end": 834,
            "decorators": [],
            "name": "numberMap",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 795,
          "end": 824,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 795,
            "end": 804,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 805,
            "end": 824,
            "decorators": [],
            "name": "symmetricDifference",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 837,
      "end": 882,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 837,
        "end": 881,
        "arguments": [
          {
            "type": "Identifier",
            "start": 867,
            "end": 880,
            "decorators": [],
            "name": "numberSetLike",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 837,
          "end": 866,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 837,
            "end": 846,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 847,
            "end": 866,
            "decorators": [],
            "name": "symmetricDifference",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 884,
      "end": 909,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 884,
        "end": 908,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 905,
            "end": 907,
            "elements": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 884,
          "end": 904,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 884,
            "end": 893,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 894,
            "end": 904,
            "decorators": [],
            "name": "isSubsetOf",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 910,
      "end": 940,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 910,
        "end": 939,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 931,
            "end": 938,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 935,
              "end": 938,
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 910,
          "end": 930,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 910,
            "end": 919,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 920,
            "end": 930,
            "decorators": [],
            "name": "isSubsetOf",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 941,
      "end": 973,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 941,
        "end": 972,
        "arguments": [
          {
            "type": "Identifier",
            "start": 962,
            "end": 971,
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 941,
          "end": 961,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 941,
            "end": 950,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 951,
            "end": 961,
            "decorators": [],
            "name": "isSubsetOf",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 974,
      "end": 1006,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 974,
        "end": 1005,
        "arguments": [
          {
            "type": "Identifier",
            "start": 995,
            "end": 1004,
            "decorators": [],
            "name": "numberMap",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 974,
          "end": 994,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 974,
            "end": 983,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 984,
            "end": 994,
            "decorators": [],
            "name": "isSubsetOf",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1007,
      "end": 1043,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1007,
        "end": 1042,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1028,
            "end": 1041,
            "decorators": [],
            "name": "numberSetLike",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1007,
          "end": 1027,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1007,
            "end": 1016,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1017,
            "end": 1027,
            "decorators": [],
            "name": "isSubsetOf",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1045,
      "end": 1072,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1045,
        "end": 1071,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1068,
            "end": 1070,
            "elements": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1045,
          "end": 1067,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1045,
            "end": 1054,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1055,
            "end": 1067,
            "decorators": [],
            "name": "isSupersetOf",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1073,
      "end": 1105,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1073,
        "end": 1104,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 1096,
            "end": 1103,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1100,
              "end": 1103,
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1073,
          "end": 1095,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1073,
            "end": 1082,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1083,
            "end": 1095,
            "decorators": [],
            "name": "isSupersetOf",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1106,
      "end": 1140,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1106,
        "end": 1139,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1129,
            "end": 1138,
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1106,
          "end": 1128,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1106,
            "end": 1115,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1116,
            "end": 1128,
            "decorators": [],
            "name": "isSupersetOf",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1141,
      "end": 1175,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1141,
        "end": 1174,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1164,
            "end": 1173,
            "decorators": [],
            "name": "numberMap",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1141,
          "end": 1163,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1141,
            "end": 1150,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1151,
            "end": 1163,
            "decorators": [],
            "name": "isSupersetOf",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1176,
      "end": 1214,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1176,
        "end": 1213,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1199,
            "end": 1212,
            "decorators": [],
            "name": "numberSetLike",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1176,
          "end": 1198,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1176,
            "end": 1185,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1186,
            "end": 1198,
            "decorators": [],
            "name": "isSupersetOf",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1216,
      "end": 1245,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1216,
        "end": 1244,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1241,
            "end": 1243,
            "elements": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1216,
          "end": 1240,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1216,
            "end": 1225,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1226,
            "end": 1240,
            "decorators": [],
            "name": "isDisjointFrom",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1246,
      "end": 1280,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1246,
        "end": 1279,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 1271,
            "end": 1278,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1275,
              "end": 1278,
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1246,
          "end": 1270,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1246,
            "end": 1255,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1256,
            "end": 1270,
            "decorators": [],
            "name": "isDisjointFrom",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1281,
      "end": 1317,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1281,
        "end": 1316,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1306,
            "end": 1315,
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1281,
          "end": 1305,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1281,
            "end": 1290,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1291,
            "end": 1305,
            "decorators": [],
            "name": "isDisjointFrom",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1318,
      "end": 1354,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1318,
        "end": 1353,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1343,
            "end": 1352,
            "decorators": [],
            "name": "numberMap",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1318,
          "end": 1342,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1318,
            "end": 1327,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1328,
            "end": 1342,
            "decorators": [],
            "name": "isDisjointFrom",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1355,
      "end": 1395,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1355,
        "end": 1394,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1380,
            "end": 1393,
            "decorators": [],
            "name": "numberSetLike",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1355,
          "end": 1379,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1355,
            "end": 1364,
            "decorators": [],
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1365,
            "end": 1379,
            "decorators": [],
            "name": "isDisjointFrom",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
