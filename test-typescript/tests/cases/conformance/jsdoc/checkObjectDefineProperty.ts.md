__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1133,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 12,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 12,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 14,
      "end": 85,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 14,
        "end": 84,
        "arguments": [
          {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 39,
            "end": 45,
            "raw": "\"name\"",
            "value": "name"
          },
          {
            "type": "ObjectExpression",
            "start": 47,
            "end": 83,
            "properties": [
              {
                "type": "Property",
                "start": 49,
                "end": 65,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 54,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 56,
                  "end": 65,
                  "raw": "\"Charles\"",
                  "value": "Charles"
                }
              },
              {
                "type": "Property",
                "start": 67,
                "end": 81,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 75,
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 77,
                  "end": 81,
                  "raw": "true",
                  "value": true
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 14,
          "end": 35,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 14,
            "end": 20,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 21,
            "end": 35,
            "decorators": [],
            "name": "defineProperty",
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
      "start": 86,
      "end": 141,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 86,
        "end": 140,
        "arguments": [
          {
            "type": "Identifier",
            "start": 108,
            "end": 109,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 111,
            "end": 123,
            "raw": "\"middleInit\"",
            "value": "middleInit"
          },
          {
            "type": "ObjectExpression",
            "start": 125,
            "end": 139,
            "properties": [
              {
                "type": "Property",
                "start": 127,
                "end": 137,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 132,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 134,
                  "end": 137,
                  "raw": "\"H\"",
                  "value": "H"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 86,
          "end": 107,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 86,
            "end": 92,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 93,
            "end": 107,
            "decorators": [],
            "name": "defineProperty",
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
      "start": 142,
      "end": 216,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 142,
        "end": 215,
        "arguments": [
          {
            "type": "Identifier",
            "start": 164,
            "end": 165,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 167,
            "end": 177,
            "raw": "\"lastName\"",
            "value": "lastName"
          },
          {
            "type": "ObjectExpression",
            "start": 179,
            "end": 214,
            "properties": [
              {
                "type": "Property",
                "start": 181,
                "end": 195,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 186,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 188,
                  "end": 195,
                  "raw": "\"Smith\"",
                  "value": "Smith"
                }
              },
              {
                "type": "Property",
                "start": 197,
                "end": 212,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 205,
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 207,
                  "end": 212,
                  "raw": "false",
                  "value": false
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 142,
          "end": 163,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 142,
            "end": 148,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 149,
            "end": 163,
            "decorators": [],
            "name": "defineProperty",
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
      "start": 217,
      "end": 300,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 217,
        "end": 299,
        "arguments": [
          {
            "type": "Identifier",
            "start": 239,
            "end": 240,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 242,
            "end": 247,
            "raw": "\"zip\"",
            "value": "zip"
          },
          {
            "type": "ObjectExpression",
            "start": 249,
            "end": 298,
            "properties": [
              {
                "type": "Property",
                "start": 251,
                "end": 273,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 254,
                  "decorators": [],
                  "name": "get",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 254,
                  "end": 273,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 257,
                    "end": 273,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 259,
                        "end": 271,
                        "argument": {
                          "type": "Literal",
                          "start": 266,
                          "end": 271,
                          "raw": "98122",
                          "value": 98122
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 275,
                "end": 296,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 278,
                  "decorators": [],
                  "name": "set",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 278,
                  "end": 296,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 282,
                    "end": 296,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 279,
                      "end": 280,
                      "decorators": [],
                      "name": "_",
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
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 217,
          "end": 238,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 217,
            "end": 223,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 224,
            "end": 238,
            "decorators": [],
            "name": "defineProperty",
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
      "start": 301,
      "end": 369,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 301,
        "end": 368,
        "arguments": [
          {
            "type": "Identifier",
            "start": 323,
            "end": 324,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 326,
            "end": 339,
            "raw": "\"houseNumber\"",
            "value": "houseNumber"
          },
          {
            "type": "ObjectExpression",
            "start": 341,
            "end": 367,
            "properties": [
              {
                "type": "Property",
                "start": 343,
                "end": 365,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 343,
                  "end": 346,
                  "decorators": [],
                  "name": "get",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 346,
                  "end": 365,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 349,
                    "end": 365,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 351,
                        "end": 363,
                        "argument": {
                          "type": "Literal",
                          "start": 358,
                          "end": 363,
                          "raw": "21.75",
                          "value": 21.75
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 301,
          "end": 322,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 301,
            "end": 307,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 308,
            "end": 322,
            "decorators": [],
            "name": "defineProperty",
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
      "start": 370,
      "end": 494,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 370,
        "end": 493,
        "arguments": [
          {
            "type": "Identifier",
            "start": 392,
            "end": 393,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 395,
            "end": 403,
            "raw": "\"zipStr\"",
            "value": "zipStr"
          },
          {
            "type": "ObjectExpression",
            "start": 405,
            "end": 492,
            "properties": [
              {
                "type": "Property",
                "start": 442,
                "end": 490,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 442,
                  "end": 445,
                  "decorators": [],
                  "name": "set",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 445,
                  "end": 490,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 451,
                    "end": 490,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 461,
                        "end": 483,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 461,
                          "end": 483,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 461,
                            "end": 469,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 461,
                              "end": 465
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 466,
                              "end": 469,
                              "decorators": [],
                              "name": "zip",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "CallExpression",
                            "start": 472,
                            "end": 483,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 479,
                                "end": 482,
                                "decorators": [],
                                "name": "str",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 472,
                              "end": 478,
                              "decorators": [],
                              "name": "Number",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeArguments": null
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
                      "start": 446,
                      "end": 449,
                      "decorators": [],
                      "name": "str",
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
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 370,
          "end": 391,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 370,
            "end": 376,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 377,
            "end": 391,
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 537,
      "end": 584,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 562,
        "end": 584,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 564,
            "end": 582,
            "argument": {
              "type": "MemberExpression",
              "start": 571,
              "end": 581,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 571,
                "end": 576,
                "decorators": [],
                "name": "named",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 577,
                "end": 581,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 546,
        "end": 554,
        "decorators": [],
        "name": "takeName",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 555,
          "end": 560,
          "decorators": [],
          "name": "named",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 586,
      "end": 598,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 586,
        "end": 597,
        "arguments": [
          {
            "type": "Identifier",
            "start": 595,
            "end": 596,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 586,
          "end": 594,
          "decorators": [],
          "name": "takeName",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 625,
      "end": 639,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 629,
          "end": 638,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 629,
            "end": 630,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 633,
            "end": 638,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 633,
              "end": 634,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 635,
              "end": 638,
              "decorators": [],
              "name": "zip",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 667,
      "end": 689,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 671,
          "end": 688,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 671,
            "end": 672,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 675,
            "end": 688,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 675,
              "end": 676,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 677,
              "end": 688,
              "decorators": [],
              "name": "houseNumber",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 691,
      "end": 722,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 697,
          "end": 721,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 697,
            "end": 711,
            "decorators": [],
            "name": "returnExemplar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 714,
            "end": 721,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 720,
              "end": 721,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 723,
      "end": 763,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 729,
          "end": 762,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 729,
            "end": 742,
            "decorators": [],
            "name": "needsExemplar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 745,
            "end": 762,
            "async": false,
            "body": {
              "type": "UnaryExpression",
              "start": 756,
              "end": 762,
              "argument": {
                "type": "Literal",
                "start": 761,
                "end": 762,
                "raw": "0",
                "value": 0
              },
              "operator": "void",
              "prefix": true
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 746,
                "end": 751,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 746,
                  "end": 747,
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "Identifier",
                  "start": 750,
                  "end": 751,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 765,
      "end": 951,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 771,
          "end": 950,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 771,
            "end": 779,
            "decorators": [],
            "name": "expected",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 944,
            "end": 948,
            "raw": "null",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 1038,
      "end": 1061,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1059,
        "end": 1061,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1047,
        "end": 1052,
        "decorators": [],
        "name": "match",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1053,
          "end": 1054,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 1056,
          "end": 1057,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1063,
      "end": 1111,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1063,
        "end": 1110,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1069,
            "end": 1083,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 1075,
              "end": 1083,
              "decorators": [],
              "name": "expected",
              "optional": false,
              "typeAnnotation": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 1085,
            "end": 1109,
            "async": false,
            "body": {
              "type": "UnaryExpression",
              "start": 1103,
              "end": 1109,
              "argument": {
                "type": "Literal",
                "start": 1108,
                "end": 1109,
                "raw": "0",
                "value": 0
              },
              "operator": "void",
              "prefix": true
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 1086,
                "end": 1098,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 1086,
                  "end": 1087,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "Identifier",
                  "start": 1090,
                  "end": 1098,
                  "decorators": [],
                  "name": "expected",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1063,
          "end": 1068,
          "decorators": [],
          "name": "match",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1113,
      "end": 1132,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1113,
        "end": 1131,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1113,
          "end": 1127,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1113,
            "end": 1119,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1120,
            "end": 1127,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 1130,
          "end": 1131,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 97,
  "end": 380,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 97,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 105,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 108,
        "end": 121,
        "expression": {
          "type": "Literal",
          "start": 116,
          "end": 120,
          "raw": "\"./\"",
          "value": "./"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 123,
      "end": 130,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 123,
        "end": 129,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 123,
          "end": 124,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 125,
          "end": 129,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 131,
      "end": 144,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 131,
        "end": 143,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 131,
          "end": 132,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 133,
          "end": 143,
          "decorators": [],
          "name": "middleInit",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 145,
      "end": 156,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 145,
        "end": 155,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 145,
          "end": 146,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 147,
          "end": 155,
          "decorators": [],
          "name": "lastName",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 157,
      "end": 163,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 157,
        "end": 162,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 157,
          "end": 158,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 159,
          "end": 162,
          "decorators": [],
          "name": "zip",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 164,
      "end": 178,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 164,
        "end": 177,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 164,
          "end": 165,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 166,
          "end": 177,
          "decorators": [],
          "name": "houseNumber",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 179,
      "end": 188,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 179,
        "end": 187,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 179,
          "end": 180,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 181,
          "end": 187,
          "decorators": [],
          "name": "zipStr",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 190,
      "end": 209,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 190,
        "end": 208,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 190,
          "end": 196,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 190,
            "end": 191,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 192,
            "end": 196,
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 199,
          "end": 208,
          "raw": "\"Another\"",
          "value": "Another"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 210,
      "end": 224,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 210,
        "end": 223,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 210,
          "end": 215,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 210,
            "end": 211,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 212,
            "end": 215,
            "decorators": [],
            "name": "zip",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 218,
          "end": 223,
          "raw": "98123",
          "value": 98123
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 225,
      "end": 241,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 225,
        "end": 240,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 225,
          "end": 233,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 225,
            "end": 226,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 227,
            "end": 233,
            "decorators": [],
            "name": "zipStr",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 236,
          "end": 240,
          "raw": "\"OK\"",
          "value": "OK"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 243,
      "end": 270,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 243,
        "end": 269,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 243,
          "end": 253,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 243,
            "end": 244,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 245,
            "end": 253,
            "decorators": [],
            "name": "lastName",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 256,
          "end": 269,
          "raw": "\"should fail\"",
          "value": "should fail"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 271,
      "end": 290,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 271,
        "end": 289,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 271,
          "end": 284,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 271,
            "end": 272,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 273,
            "end": 284,
            "decorators": [],
            "name": "houseNumber",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 287,
          "end": 289,
          "raw": "12",
          "value": 12
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 311,
      "end": 325,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 311,
        "end": 324,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 311,
          "end": 319,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 311,
            "end": 312,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 313,
            "end": 319,
            "decorators": [],
            "name": "zipStr",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 322,
          "end": 324,
          "raw": "12",
          "value": 12
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 341,
      "end": 360,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 341,
        "end": 359,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 341,
          "end": 353,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 341,
            "end": 342,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 343,
            "end": 353,
            "decorators": [],
            "name": "middleInit",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 356,
          "end": 359,
          "raw": "\"R\"",
          "value": "R"
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
