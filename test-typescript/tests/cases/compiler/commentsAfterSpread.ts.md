__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1017,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 25,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 14,
            "name": "identity",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 17,
            "end": 25,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 18,
                "end": 19,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 28,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 84,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 38,
            "end": 84,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 42,
                "end": 82,
                "argument": {
                  "type": "CallExpression",
                  "start": 58,
                  "end": 82,
                  "callee": {
                    "type": "Identifier",
                    "start": 58,
                    "end": 66,
                    "name": "identity",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "start": 67,
                      "end": 81,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 73,
                          "end": 77,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 73,
                            "end": 74,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 76,
                            "end": 77,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
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
      "start": 87,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 146,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 94,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 97,
            "end": 146,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 101,
                "end": 144,
                "argument": {
                  "type": "CallExpression",
                  "start": 120,
                  "end": 144,
                  "callee": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 128,
                    "name": "identity",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "start": 129,
                      "end": 143,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 135,
                          "end": 139,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 135,
                            "end": 136,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 138,
                            "end": 139,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
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
      "start": 149,
      "end": 212,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 211,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 156,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 159,
            "end": 211,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 163,
                "end": 209,
                "argument": {
                  "type": "CallExpression",
                  "start": 185,
                  "end": 209,
                  "callee": {
                    "type": "Identifier",
                    "start": 185,
                    "end": 193,
                    "name": "identity",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "start": 194,
                      "end": 208,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 200,
                          "end": 204,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 200,
                            "end": 201,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 203,
                            "end": 204,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
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
      "start": 214,
      "end": 274,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 273,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 221,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 224,
            "end": 273,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 228,
                "end": 271,
                "argument": {
                  "type": "CallExpression",
                  "start": 247,
                  "end": 271,
                  "callee": {
                    "type": "Identifier",
                    "start": 247,
                    "end": 255,
                    "name": "identity",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "start": 256,
                      "end": 270,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 262,
                          "end": 266,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 262,
                            "end": 263,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 265,
                            "end": 266,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
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
      "type": "FunctionDeclaration",
      "start": 276,
      "end": 384,
      "id": {
        "type": "Identifier",
        "start": 285,
        "end": 286,
        "name": "e",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 288,
          "end": 310,
          "argument": {
            "type": "Identifier",
            "start": 306,
            "end": 310,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 312,
        "end": 384,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 316,
            "end": 360,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 322,
                "end": 359,
                "id": {
                  "type": "ArrayPattern",
                  "start": 322,
                  "end": 330,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 323,
                      "end": 325,
                      "name": "ea",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 327,
                      "end": 329,
                      "name": "eb",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 333,
                  "end": 359,
                  "elements": [
                    {
                      "type": "SpreadElement",
                      "start": 334,
                      "end": 358,
                      "argument": {
                        "type": "Identifier",
                        "start": 354,
                        "end": 358,
                        "name": "args",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
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
            "type": "ReturnStatement",
            "start": 363,
            "end": 382,
            "argument": {
              "type": "MemberExpression",
              "start": 370,
              "end": 381,
              "object": {
                "type": "Identifier",
                "start": 370,
                "end": 374,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 375,
                "end": 381,
                "name": "length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
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
      "type": "FunctionDeclaration",
      "start": 386,
      "end": 460,
      "id": {
        "type": "Identifier",
        "start": 395,
        "end": 396,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 401,
          "end": 406,
          "name": "first",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "RestElement",
          "start": 410,
          "end": 432,
          "argument": {
            "type": "Identifier",
            "start": 428,
            "end": 432,
            "name": "rest",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 435,
        "end": 460,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 439,
            "end": 458,
            "argument": {
              "type": "MemberExpression",
              "start": 446,
              "end": 457,
              "object": {
                "type": "Identifier",
                "start": 446,
                "end": 450,
                "name": "rest",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 451,
                "end": 457,
                "name": "length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
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
      "type": "FunctionDeclaration",
      "start": 462,
      "end": 593,
      "id": {
        "type": "Identifier",
        "start": 471,
        "end": 472,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 477,
          "end": 482,
          "name": "first",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "RestElement",
          "start": 486,
          "end": 511,
          "argument": {
            "type": "Identifier",
            "start": 507,
            "end": 511,
            "name": "rest",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 514,
        "end": 593,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 518,
            "end": 569,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 524,
                "end": 569,
                "id": {
                  "type": "ArrayPattern",
                  "start": 524,
                  "end": 532,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 525,
                      "end": 527,
                      "name": "ga",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 529,
                      "end": 531,
                      "name": "gb",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 535,
                  "end": 569,
                  "elements": [
                    {
                      "type": "SpreadElement",
                      "start": 536,
                      "end": 565,
                      "argument": {
                        "type": "Identifier",
                        "start": 561,
                        "end": 565,
                        "name": "rest",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
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
            "type": "ReturnStatement",
            "start": 572,
            "end": 591,
            "argument": {
              "type": "MemberExpression",
              "start": 579,
              "end": 590,
              "object": {
                "type": "Identifier",
                "start": 579,
                "end": 583,
                "name": "rest",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 584,
                "end": 590,
                "name": "length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
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
      "start": 595,
      "end": 645,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 601,
          "end": 644,
          "id": {
            "type": "Identifier",
            "start": 601,
            "end": 602,
            "name": "h",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 605,
            "end": 644,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "RestElement",
                "start": 606,
                "end": 628,
                "argument": {
                  "type": "Identifier",
                  "start": 624,
                  "end": 628,
                  "name": "args",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "body": {
              "type": "MemberExpression",
              "start": 633,
              "end": 644,
              "object": {
                "type": "Identifier",
                "start": 633,
                "end": 637,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 638,
                "end": 644,
                "name": "length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
      "start": 647,
      "end": 708,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 653,
          "end": 707,
          "id": {
            "type": "Identifier",
            "start": 653,
            "end": 654,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 657,
            "end": 707,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 661,
                "end": 666,
                "name": "first",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 668,
                "end": 690,
                "argument": {
                  "type": "Identifier",
                  "start": 686,
                  "end": 690,
                  "name": "rest",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "body": {
              "type": "MemberExpression",
              "start": 696,
              "end": 707,
              "object": {
                "type": "Identifier",
                "start": 696,
                "end": 700,
                "name": "rest",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 701,
                "end": 707,
                "name": "length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
      "start": 710,
      "end": 776,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 716,
          "end": 775,
          "id": {
            "type": "Identifier",
            "start": 716,
            "end": 717,
            "name": "j",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 720,
            "end": 775,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 724,
                "end": 729,
                "name": "first",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 733,
                "end": 758,
                "argument": {
                  "type": "Identifier",
                  "start": 754,
                  "end": 758,
                  "name": "rest",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "body": {
              "type": "MemberExpression",
              "start": 764,
              "end": 775,
              "object": {
                "type": "Identifier",
                "start": 764,
                "end": 768,
                "name": "rest",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 769,
                "end": 775,
                "name": "length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
      "type": "FunctionDeclaration",
      "start": 778,
      "end": 1017,
      "id": {
        "type": "Identifier",
        "start": 787,
        "end": 788,
        "name": "k",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 790,
          "end": 827,
          "properties": [
            {
              "type": "Property",
              "start": 794,
              "end": 799,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 794,
                "end": 799,
                "name": "first",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 794,
                "end": 799,
                "name": "first",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 803,
              "end": 825,
              "argument": {
                "type": "Identifier",
                "start": 821,
                "end": 825,
                "name": "rest",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 829,
        "end": 1017,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 833,
            "end": 887,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 839,
                "end": 886,
                "id": {
                  "type": "ObjectPattern",
                  "start": 839,
                  "end": 879,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 841,
                      "end": 843,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 841,
                        "end": 843,
                        "name": "ka",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 841,
                        "end": 843,
                        "name": "ka",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 845,
                      "end": 847,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 845,
                        "end": 847,
                        "name": "kb",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 845,
                        "end": 847,
                        "name": "kb",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 849,
                      "end": 877,
                      "argument": {
                        "type": "Identifier",
                        "start": 868,
                        "end": 877,
                        "name": "remaining",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 882,
                  "end": 886,
                  "name": "rest",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 890,
            "end": 965,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 896,
                "end": 964,
                "id": {
                  "type": "ObjectPattern",
                  "start": 896,
                  "end": 957,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 902,
                      "end": 904,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 902,
                        "end": 904,
                        "name": "kc",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 902,
                        "end": 904,
                        "name": "kc",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 910,
                      "end": 912,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 910,
                        "end": 912,
                        "name": "kd",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 910,
                        "end": 912,
                        "name": "kd",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 918,
                      "end": 953,
                      "argument": {
                        "type": "Identifier",
                        "start": 943,
                        "end": 953,
                        "name": "remaining2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 960,
                  "end": 964,
                  "name": "rest",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 968,
            "end": 1015,
            "argument": {
              "type": "ObjectExpression",
              "start": 975,
              "end": 1014,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 977,
                  "end": 1012,
                  "argument": {
                    "type": "Identifier",
                    "start": 1003,
                    "end": 1012,
                    "name": "remaining",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
