__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 627,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 627,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 627,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 25,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 20,
              "name": "field"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 23,
              "end": 24,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 30,
            "end": 52,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 41,
              "decorators": [],
              "name": "otherObject",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "start": 44,
              "end": 51,
              "callee": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 57,
            "end": 109,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 67,
              "decorators": [],
              "name": "testObject",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 67,
              "end": 109,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 70,
                "end": 109,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 80,
                    "end": 103,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 87,
                      "end": 102,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 89,
                          "end": 94,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 89,
                            "end": 90,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 92,
                            "end": 94,
                            "value": 10,
                            "raw": "10"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 96,
                          "end": 100,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 96,
                            "end": 97,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 99,
                            "end": 100,
                            "value": 6,
                            "raw": "6"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 114,
            "end": 158,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 123,
              "decorators": [],
              "name": "testArray",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 123,
              "end": 158,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 126,
                "end": 158,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 136,
                    "end": 152,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 143,
                      "end": 151,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 144,
                          "end": 146,
                          "value": 10,
                          "raw": "10"
                        },
                        {
                          "type": "Literal",
                          "start": 148,
                          "end": 150,
                          "value": 11,
                          "raw": "11"
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 163,
            "end": 567,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 174,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 174,
              "end": 567,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 177,
                "end": 567,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 187,
                    "end": 201,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 191,
                        "end": 200,
                        "id": {
                          "type": "Identifier",
                          "start": 191,
                          "end": 200,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 192,
                            "end": 200,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 194,
                              "end": 200
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
                    "start": 210,
                    "end": 254,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 211,
                      "end": 252,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 211,
                        "end": 232,
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 213,
                            "end": 227,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 213,
                              "end": 214,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 216,
                              "end": 227,
                              "object": {
                                "type": "ThisExpression",
                                "start": 216,
                                "end": 220
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 221,
                                "end": 227,
                                "name": "field"
                              },
                              "optional": false,
                              "computed": false
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 229,
                            "end": 230,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 229,
                              "end": 230,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 229,
                              "end": 230,
                              "decorators": [],
                              "name": "y",
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
                        "type": "CallExpression",
                        "start": 235,
                        "end": 252,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 235,
                          "end": 250,
                          "object": {
                            "type": "ThisExpression",
                            "start": 235,
                            "end": 239
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 240,
                            "end": 250,
                            "decorators": [],
                            "name": "testObject",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 263,
                    "end": 301,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 264,
                      "end": 299,
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "start": 264,
                        "end": 280,
                        "decorators": [],
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "start": 265,
                            "end": 276,
                            "object": {
                              "type": "ThisExpression",
                              "start": 265,
                              "end": 269
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 270,
                              "end": 276,
                              "name": "field"
                            },
                            "optional": false,
                            "computed": false
                          },
                          {
                            "type": "Identifier",
                            "start": 278,
                            "end": 279,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 283,
                        "end": 299,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 283,
                          "end": 297,
                          "object": {
                            "type": "ThisExpression",
                            "start": 283,
                            "end": 287
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 288,
                            "end": 297,
                            "decorators": [],
                            "name": "testArray",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 310,
                    "end": 368,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 311,
                      "end": 366,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 311,
                        "end": 347,
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 313,
                            "end": 327,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 313,
                              "end": 314,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 316,
                              "end": 327,
                              "object": {
                                "type": "ThisExpression",
                                "start": 316,
                                "end": 320
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 321,
                                "end": 327,
                                "name": "field"
                              },
                              "optional": false,
                              "computed": false
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 329,
                            "end": 345,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 329,
                              "end": 330,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "ArrayPattern",
                              "start": 332,
                              "end": 345,
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "MemberExpression",
                                  "start": 333,
                                  "end": 344,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 333,
                                    "end": 337
                                  },
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "start": 338,
                                    "end": 344,
                                    "name": "field"
                                  },
                                  "optional": false,
                                  "computed": false
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
                        "type": "ObjectExpression",
                        "start": 350,
                        "end": 366,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 352,
                            "end": 356,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 352,
                              "end": 353,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 355,
                              "end": 356,
                              "value": 1,
                              "raw": "1"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 358,
                            "end": 364,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 358,
                              "end": 359,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "ArrayExpression",
                              "start": 361,
                              "end": 364,
                              "elements": [
                                {
                                  "type": "Literal",
                                  "start": 362,
                                  "end": 363,
                                  "value": 2,
                                  "raw": "2"
                                }
                              ]
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 377,
                    "end": 417,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 377,
                      "end": 416,
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "start": 377,
                        "end": 405,
                        "decorators": [],
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "start": 378,
                            "end": 389,
                            "object": {
                              "type": "ThisExpression",
                              "start": 378,
                              "end": 382
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 383,
                              "end": 389,
                              "name": "field"
                            },
                            "optional": false,
                            "computed": false
                          },
                          {
                            "type": "ArrayPattern",
                            "start": 391,
                            "end": 404,
                            "decorators": [],
                            "elements": [
                              {
                                "type": "MemberExpression",
                                "start": 392,
                                "end": 403,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 392,
                                  "end": 396
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 397,
                                  "end": 403,
                                  "name": "field"
                                },
                                "optional": false,
                                "computed": false
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
                        "type": "ArrayExpression",
                        "start": 408,
                        "end": 416,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 409,
                            "end": 410,
                            "value": 1,
                            "raw": "1"
                          },
                          {
                            "type": "ArrayExpression",
                            "start": 412,
                            "end": 415,
                            "elements": [
                              {
                                "type": "Literal",
                                "start": 413,
                                "end": 414,
                                "value": 2,
                                "raw": "2"
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 426,
                    "end": 485,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 427,
                      "end": 483,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 427,
                        "end": 471,
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 429,
                            "end": 447,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 429,
                              "end": 430,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "AssignmentPattern",
                              "start": 432,
                              "end": 447,
                              "decorators": [],
                              "left": {
                                "type": "MemberExpression",
                                "start": 432,
                                "end": 443,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 432,
                                  "end": 436
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 437,
                                  "end": 443,
                                  "name": "field"
                                },
                                "optional": false,
                                "computed": false
                              },
                              "right": {
                                "type": "Literal",
                                "start": 446,
                                "end": 447,
                                "value": 1,
                                "raw": "1"
                              },
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
                            "start": 449,
                            "end": 469,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 449,
                              "end": 450,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "ArrayPattern",
                              "start": 452,
                              "end": 469,
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "AssignmentPattern",
                                  "start": 453,
                                  "end": 468,
                                  "decorators": [],
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 453,
                                    "end": 464,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 453,
                                      "end": 457
                                    },
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "start": 458,
                                      "end": 464,
                                      "name": "field"
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "start": 467,
                                    "end": 468,
                                    "value": 1,
                                    "raw": "1"
                                  },
                                  "optional": false,
                                  "typeAnnotation": null
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
                        "type": "ObjectExpression",
                        "start": 474,
                        "end": 483,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 476,
                            "end": 481,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 476,
                              "end": 477,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "ArrayExpression",
                              "start": 479,
                              "end": 481,
                              "elements": []
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 494,
                    "end": 517,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 494,
                      "end": 516,
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "start": 494,
                        "end": 511,
                        "decorators": [],
                        "elements": [
                          {
                            "type": "AssignmentPattern",
                            "start": 495,
                            "end": 510,
                            "decorators": [],
                            "left": {
                              "type": "MemberExpression",
                              "start": 495,
                              "end": 506,
                              "object": {
                                "type": "ThisExpression",
                                "start": 495,
                                "end": 499
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 500,
                                "end": 506,
                                "name": "field"
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 509,
                              "end": 510,
                              "value": 2,
                              "raw": "2"
                            },
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 514,
                        "end": 516,
                        "elements": []
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 526,
                    "end": 561,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 526,
                      "end": 560,
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "start": 526,
                        "end": 555,
                        "decorators": [],
                        "elements": [
                          {
                            "type": "AssignmentPattern",
                            "start": 527,
                            "end": 554,
                            "decorators": [],
                            "left": {
                              "type": "MemberExpression",
                              "start": 527,
                              "end": 550,
                              "object": {
                                "type": "MemberExpression",
                                "start": 527,
                                "end": 543,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 527,
                                  "end": 531
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 532,
                                  "end": 543,
                                  "decorators": [],
                                  "name": "otherObject",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 544,
                                "end": 550,
                                "name": "field"
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 553,
                              "end": 554,
                              "value": 2,
                              "raw": "2"
                            },
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 558,
                        "end": 560,
                        "elements": []
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 572,
            "end": 625,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 579,
              "end": 583,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 583,
              "end": 625,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 584,
                  "end": 589,
                  "decorators": [],
                  "name": "_a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 586,
                    "end": 589,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 588,
                      "end": 589,
                      "typeName": {
                        "type": "Identifier",
                        "start": 588,
                        "end": 589,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 591,
                "end": 625,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 601,
                    "end": 619,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 601,
                      "end": 618,
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "start": 601,
                        "end": 612,
                        "decorators": [],
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "start": 602,
                            "end": 611,
                            "object": {
                              "type": "Identifier",
                              "start": 602,
                              "end": 604,
                              "decorators": [],
                              "name": "_a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 605,
                              "end": 611,
                              "name": "field"
                            },
                            "optional": false,
                            "computed": false
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 615,
                        "end": 618,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 616,
                            "end": 617,
                            "value": 2,
                            "raw": "2"
                          }
                        ]
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
