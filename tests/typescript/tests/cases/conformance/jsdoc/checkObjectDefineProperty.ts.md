__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 10,
            "end": 12
          },
          "definite": false,
          "start": 6,
          "end": 12
        }
      ],
      "declare": false,
      "start": 0,
      "end": 13
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 20
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 35
          },
          "optional": false,
          "computed": false,
          "start": 14,
          "end": 35
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 37
          },
          {
            "type": "Literal",
            "value": "name",
            "raw": "\"name\"",
            "start": 39,
            "end": 45
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 54
                },
                "value": {
                  "type": "Literal",
                  "value": "Charles",
                  "raw": "\"Charles\"",
                  "start": 56,
                  "end": 65
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 49,
                "end": 65
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 75
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 77,
                  "end": 81
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 67,
                "end": 81
              }
            ],
            "start": 47,
            "end": 83
          }
        ],
        "optional": false,
        "start": 14,
        "end": 84
      },
      "directive": null,
      "start": 14,
      "end": 85
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 92
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 107
          },
          "optional": false,
          "computed": false,
          "start": 86,
          "end": 107
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 109
          },
          {
            "type": "Literal",
            "value": "middleInit",
            "raw": "\"middleInit\"",
            "start": 111,
            "end": 123
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 127,
                  "end": 132
                },
                "value": {
                  "type": "Literal",
                  "value": "H",
                  "raw": "\"H\"",
                  "start": 134,
                  "end": 137
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 127,
                "end": 137
              }
            ],
            "start": 125,
            "end": 139
          }
        ],
        "optional": false,
        "start": 86,
        "end": 140
      },
      "directive": null,
      "start": 86,
      "end": 141
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 148
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 163
          },
          "optional": false,
          "computed": false,
          "start": 142,
          "end": 163
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 165
          },
          {
            "type": "Literal",
            "value": "lastName",
            "raw": "\"lastName\"",
            "start": 167,
            "end": 177
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 186
                },
                "value": {
                  "type": "Literal",
                  "value": "Smith",
                  "raw": "\"Smith\"",
                  "start": 188,
                  "end": 195
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 181,
                "end": 195
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 197,
                  "end": 205
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 207,
                  "end": 212
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 197,
                "end": 212
              }
            ],
            "start": 179,
            "end": 214
          }
        ],
        "optional": false,
        "start": 142,
        "end": 215
      },
      "directive": null,
      "start": 142,
      "end": 216
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 223
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 238
          },
          "optional": false,
          "computed": false,
          "start": 217,
          "end": 238
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 240
          },
          {
            "type": "Literal",
            "value": "zip",
            "raw": "\"zip\"",
            "start": 242,
            "end": 247
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "get",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 251,
                  "end": 254
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                          "type": "Literal",
                          "value": 98122,
                          "raw": "98122",
                          "start": 266,
                          "end": 271
                        },
                        "start": 259,
                        "end": 271
                      }
                    ],
                    "start": 257,
                    "end": 273
                  },
                  "expression": false,
                  "start": 254,
                  "end": 273
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 251,
                "end": 273
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 275,
                  "end": 278
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 279,
                      "end": 280
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 282,
                    "end": 296
                  },
                  "expression": false,
                  "start": 278,
                  "end": 296
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 275,
                "end": 296
              }
            ],
            "start": 249,
            "end": 298
          }
        ],
        "optional": false,
        "start": 217,
        "end": 299
      },
      "directive": null,
      "start": 217,
      "end": 300
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 307
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 322
          },
          "optional": false,
          "computed": false,
          "start": 301,
          "end": 322
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 324
          },
          {
            "type": "Literal",
            "value": "houseNumber",
            "raw": "\"houseNumber\"",
            "start": 326,
            "end": 339
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "get",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 343,
                  "end": 346
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                          "type": "Literal",
                          "value": 21.75,
                          "raw": "21.75",
                          "start": 358,
                          "end": 363
                        },
                        "start": 351,
                        "end": 363
                      }
                    ],
                    "start": 349,
                    "end": 365
                  },
                  "expression": false,
                  "start": 346,
                  "end": 365
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 343,
                "end": 365
              }
            ],
            "start": 341,
            "end": 367
          }
        ],
        "optional": false,
        "start": 301,
        "end": 368
      },
      "directive": null,
      "start": 301,
      "end": 369
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 370,
            "end": 376
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
            "end": 391
          },
          "optional": false,
          "computed": false,
          "start": 370,
          "end": 391
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 392,
            "end": 393
          },
          {
            "type": "Literal",
            "value": "zipStr",
            "raw": "\"zipStr\"",
            "start": 395,
            "end": 403
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 442,
                  "end": 445
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 446,
                      "end": 449
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 461,
                              "end": 465
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "zip",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 466,
                              "end": 469
                            },
                            "optional": false,
                            "computed": false,
                            "start": 461,
                            "end": 469
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Number",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 472,
                              "end": 478
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "str",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 479,
                                "end": 482
                              }
                            ],
                            "optional": false,
                            "start": 472,
                            "end": 483
                          },
                          "start": 461,
                          "end": 483
                        },
                        "directive": null,
                        "start": 461,
                        "end": 483
                      }
                    ],
                    "start": 451,
                    "end": 490
                  },
                  "expression": false,
                  "start": 445,
                  "end": 490
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 442,
                "end": 490
              }
            ],
            "start": 405,
            "end": 492
          }
        ],
        "optional": false,
        "start": 370,
        "end": 493
      },
      "directive": null,
      "start": 370,
      "end": 494
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "takeName",
        "optional": false,
        "typeAnnotation": null,
        "start": 546,
        "end": 554
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "named",
          "optional": false,
          "typeAnnotation": null,
          "start": 555,
          "end": 560
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "named",
                "optional": false,
                "typeAnnotation": null,
                "start": 571,
                "end": 576
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 577,
                "end": 581
              },
              "optional": false,
              "computed": false,
              "start": 571,
              "end": 581
            },
            "start": 564,
            "end": 582
          }
        ],
        "start": 562,
        "end": 584
      },
      "expression": false,
      "start": 537,
      "end": 584
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "takeName",
          "optional": false,
          "typeAnnotation": null,
          "start": 586,
          "end": 594
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 595,
            "end": 596
          }
        ],
        "optional": false,
        "start": 586,
        "end": 597
      },
      "directive": null,
      "start": 586,
      "end": 598
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 629,
            "end": 630
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 633,
              "end": 634
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "zip",
              "optional": false,
              "typeAnnotation": null,
              "start": 635,
              "end": 638
            },
            "optional": false,
            "computed": false,
            "start": 633,
            "end": 638
          },
          "definite": false,
          "start": 629,
          "end": 638
        }
      ],
      "declare": false,
      "start": 625,
      "end": 639
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 671,
            "end": 672
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 675,
              "end": 676
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "houseNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 677,
              "end": 688
            },
            "optional": false,
            "computed": false,
            "start": 675,
            "end": 688
          },
          "definite": false,
          "start": 671,
          "end": 688
        }
      ],
      "declare": false,
      "start": 667,
      "end": 689
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
            "name": "returnExemplar",
            "optional": false,
            "typeAnnotation": null,
            "start": 697,
            "end": 711
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 720,
              "end": 721
            },
            "id": null,
            "generator": false,
            "start": 714,
            "end": 721
          },
          "definite": false,
          "start": 697,
          "end": 721
        }
      ],
      "declare": false,
      "start": 691,
      "end": 722
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
            "name": "needsExemplar",
            "optional": false,
            "typeAnnotation": null,
            "start": 729,
            "end": 742
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 746,
                  "end": 747
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 750,
                  "end": 751
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 746,
                "end": 751
              }
            ],
            "returnType": null,
            "body": {
              "type": "UnaryExpression",
              "operator": "void",
              "argument": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 761,
                "end": 762
              },
              "prefix": true,
              "start": 756,
              "end": 762
            },
            "id": null,
            "generator": false,
            "start": 745,
            "end": 762
          },
          "definite": false,
          "start": 729,
          "end": 762
        }
      ],
      "declare": false,
      "start": 723,
      "end": 763
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
            "name": "expected",
            "optional": false,
            "typeAnnotation": null,
            "start": 771,
            "end": 779
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 944,
            "end": 948
          },
          "definite": false,
          "start": 771,
          "end": 950
        }
      ],
      "declare": false,
      "start": 765,
      "end": 951
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "match",
        "optional": false,
        "typeAnnotation": null,
        "start": 1047,
        "end": 1052
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1053,
          "end": 1054
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1056,
          "end": 1057
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1059,
        "end": 1061
      },
      "expression": false,
      "start": 1038,
      "end": 1061
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "match",
          "optional": false,
          "typeAnnotation": null,
          "start": 1063,
          "end": 1068
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "expected",
              "optional": false,
              "typeAnnotation": null,
              "start": 1075,
              "end": 1083
            },
            "id": null,
            "generator": false,
            "start": 1069,
            "end": 1083
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1086,
                  "end": 1087
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "expected",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1090,
                  "end": 1098
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1086,
                "end": 1098
              }
            ],
            "returnType": null,
            "body": {
              "type": "UnaryExpression",
              "operator": "void",
              "argument": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1108,
                "end": 1109
              },
              "prefix": true,
              "start": 1103,
              "end": 1109
            },
            "id": null,
            "generator": false,
            "start": 1085,
            "end": 1109
          }
        ],
        "optional": false,
        "start": 1063,
        "end": 1110
      },
      "directive": null,
      "start": 1063,
      "end": 1111
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 1113,
            "end": 1119
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 1120,
            "end": 1127
          },
          "optional": false,
          "computed": false,
          "start": 1113,
          "end": 1127
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1130,
          "end": 1131
        },
        "start": 1113,
        "end": 1131
      },
      "directive": null,
      "start": 1113,
      "end": 1132
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1133
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 105
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./",
          "raw": "\"./\"",
          "start": 116,
          "end": 120
        },
        "start": 108,
        "end": 121
      },
      "importKind": "value",
      "start": 97,
      "end": 122
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 123,
          "end": 124
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": null,
          "start": 125,
          "end": 129
        },
        "optional": false,
        "computed": false,
        "start": 123,
        "end": 129
      },
      "directive": null,
      "start": 123,
      "end": 130
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 131,
          "end": 132
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "middleInit",
          "optional": false,
          "typeAnnotation": null,
          "start": 133,
          "end": 143
        },
        "optional": false,
        "computed": false,
        "start": 131,
        "end": 143
      },
      "directive": null,
      "start": 131,
      "end": 144
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 145,
          "end": 146
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "lastName",
          "optional": false,
          "typeAnnotation": null,
          "start": 147,
          "end": 155
        },
        "optional": false,
        "computed": false,
        "start": 145,
        "end": 155
      },
      "directive": null,
      "start": 145,
      "end": 156
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 157,
          "end": 158
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "zip",
          "optional": false,
          "typeAnnotation": null,
          "start": 159,
          "end": 162
        },
        "optional": false,
        "computed": false,
        "start": 157,
        "end": 162
      },
      "directive": null,
      "start": 157,
      "end": 163
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 164,
          "end": 165
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "houseNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 166,
          "end": 177
        },
        "optional": false,
        "computed": false,
        "start": 164,
        "end": 177
      },
      "directive": null,
      "start": 164,
      "end": 178
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 179,
          "end": 180
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "zipStr",
          "optional": false,
          "typeAnnotation": null,
          "start": 181,
          "end": 187
        },
        "optional": false,
        "computed": false,
        "start": 179,
        "end": 187
      },
      "directive": null,
      "start": 179,
      "end": 188
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 191
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": null,
            "start": 192,
            "end": 196
          },
          "optional": false,
          "computed": false,
          "start": 190,
          "end": 196
        },
        "right": {
          "type": "Literal",
          "value": "Another",
          "raw": "\"Another\"",
          "start": 199,
          "end": 208
        },
        "start": 190,
        "end": 208
      },
      "directive": null,
      "start": 190,
      "end": 209
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 210,
            "end": 211
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "zip",
            "optional": false,
            "typeAnnotation": null,
            "start": 212,
            "end": 215
          },
          "optional": false,
          "computed": false,
          "start": 210,
          "end": 215
        },
        "right": {
          "type": "Literal",
          "value": 98123,
          "raw": "98123",
          "start": 218,
          "end": 223
        },
        "start": 210,
        "end": 223
      },
      "directive": null,
      "start": 210,
      "end": 224
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 225,
            "end": 226
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "zipStr",
            "optional": false,
            "typeAnnotation": null,
            "start": 227,
            "end": 233
          },
          "optional": false,
          "computed": false,
          "start": 225,
          "end": 233
        },
        "right": {
          "type": "Literal",
          "value": "OK",
          "raw": "\"OK\"",
          "start": 236,
          "end": 240
        },
        "start": 225,
        "end": 240
      },
      "directive": null,
      "start": 225,
      "end": 241
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 243,
            "end": 244
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "lastName",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 253
          },
          "optional": false,
          "computed": false,
          "start": 243,
          "end": 253
        },
        "right": {
          "type": "Literal",
          "value": "should fail",
          "raw": "\"should fail\"",
          "start": 256,
          "end": 269
        },
        "start": 243,
        "end": 269
      },
      "directive": null,
      "start": 243,
      "end": 270
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 271,
            "end": 272
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "houseNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 284
          },
          "optional": false,
          "computed": false,
          "start": 271,
          "end": 284
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 287,
          "end": 289
        },
        "start": 271,
        "end": 289
      },
      "directive": null,
      "start": 271,
      "end": 290
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 311,
            "end": 312
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "zipStr",
            "optional": false,
            "typeAnnotation": null,
            "start": 313,
            "end": 319
          },
          "optional": false,
          "computed": false,
          "start": 311,
          "end": 319
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 322,
          "end": 324
        },
        "start": 311,
        "end": 324
      },
      "directive": null,
      "start": 311,
      "end": 325
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 341,
            "end": 342
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "middleInit",
            "optional": false,
            "typeAnnotation": null,
            "start": 343,
            "end": 353
          },
          "optional": false,
          "computed": false,
          "start": 341,
          "end": 353
        },
        "right": {
          "type": "Literal",
          "value": "R",
          "raw": "\"R\"",
          "start": 356,
          "end": 359
        },
        "start": 341,
        "end": 359
      },
      "directive": null,
      "start": 341,
      "end": 360
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 97,
  "end": 380
}
```
