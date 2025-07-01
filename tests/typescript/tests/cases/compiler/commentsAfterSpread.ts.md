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
            "name": "identity",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 14
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 18,
                "end": 19
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 25
            },
            "id": null,
            "generator": false,
            "start": 17,
            "end": 25
          },
          "definite": false,
          "start": 6,
          "end": 25
        }
      ],
      "declare": false,
      "start": 0,
      "end": 26
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 34,
            "end": 35
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "identity",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 58,
                    "end": 66
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 73,
                            "end": 74
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 76,
                            "end": 77
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 73,
                          "end": 77
                        }
                      ],
                      "start": 67,
                      "end": 81
                    }
                  ],
                  "optional": false,
                  "start": 58,
                  "end": 82
                },
                "start": 42,
                "end": 82
              }
            ],
            "start": 38,
            "end": 84
          },
          "definite": false,
          "start": 34,
          "end": 84
        }
      ],
      "declare": false,
      "start": 28,
      "end": 85
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 94
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "identity",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 120,
                    "end": 128
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 135,
                            "end": 136
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 138,
                            "end": 139
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 135,
                          "end": 139
                        }
                      ],
                      "start": 129,
                      "end": 143
                    }
                  ],
                  "optional": false,
                  "start": 120,
                  "end": 144
                },
                "start": 101,
                "end": 144
              }
            ],
            "start": 97,
            "end": 146
          },
          "definite": false,
          "start": 93,
          "end": 146
        }
      ],
      "declare": false,
      "start": 87,
      "end": 147
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 155,
            "end": 156
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "identity",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 185,
                    "end": 193
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 200,
                            "end": 201
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 203,
                            "end": 204
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 200,
                          "end": 204
                        }
                      ],
                      "start": 194,
                      "end": 208
                    }
                  ],
                  "optional": false,
                  "start": 185,
                  "end": 209
                },
                "start": 163,
                "end": 209
              }
            ],
            "start": 159,
            "end": 211
          },
          "definite": false,
          "start": 155,
          "end": 211
        }
      ],
      "declare": false,
      "start": 149,
      "end": 212
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 221
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "identity",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 247,
                    "end": 255
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 262,
                            "end": 263
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 265,
                            "end": 266
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 262,
                          "end": 266
                        }
                      ],
                      "start": 256,
                      "end": 270
                    }
                  ],
                  "optional": false,
                  "start": 247,
                  "end": 271
                },
                "start": 228,
                "end": 271
              }
            ],
            "start": 224,
            "end": 273
          },
          "definite": false,
          "start": 220,
          "end": 273
        }
      ],
      "declare": false,
      "start": 214,
      "end": 274
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null,
        "start": 285,
        "end": 286
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 310
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 288,
          "end": 310
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                      "name": "ea",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 323,
                      "end": 325
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "eb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 327,
                      "end": 329
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 322,
                  "end": 330
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 354,
                        "end": 358
                      },
                      "start": 334,
                      "end": 358
                    }
                  ],
                  "start": 333,
                  "end": 359
                },
                "definite": false,
                "start": 322,
                "end": 359
              }
            ],
            "declare": false,
            "start": 316,
            "end": 360
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 370,
                "end": 374
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 375,
                "end": 381
              },
              "optional": false,
              "computed": false,
              "start": 370,
              "end": 381
            },
            "start": 363,
            "end": 382
          }
        ],
        "start": 312,
        "end": 384
      },
      "expression": false,
      "start": 276,
      "end": 384
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 395,
        "end": 396
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "first",
          "optional": false,
          "typeAnnotation": null,
          "start": 401,
          "end": 406
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null,
            "start": 428,
            "end": 432
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 410,
          "end": 432
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
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 446,
                "end": 450
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 451,
                "end": 457
              },
              "optional": false,
              "computed": false,
              "start": 446,
              "end": 457
            },
            "start": 439,
            "end": 458
          }
        ],
        "start": 435,
        "end": 460
      },
      "expression": false,
      "start": 386,
      "end": 460
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 471,
        "end": 472
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "first",
          "optional": false,
          "typeAnnotation": null,
          "start": 477,
          "end": 482
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null,
            "start": 507,
            "end": 511
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 486,
          "end": 511
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                      "name": "ga",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 525,
                      "end": 527
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "gb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 529,
                      "end": 531
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 524,
                  "end": 532
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 561,
                        "end": 565
                      },
                      "start": 536,
                      "end": 565
                    }
                  ],
                  "start": 535,
                  "end": 569
                },
                "definite": false,
                "start": 524,
                "end": 569
              }
            ],
            "declare": false,
            "start": 518,
            "end": 569
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 579,
                "end": 583
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 584,
                "end": 590
              },
              "optional": false,
              "computed": false,
              "start": 579,
              "end": 590
            },
            "start": 572,
            "end": 591
          }
        ],
        "start": 514,
        "end": 593
      },
      "expression": false,
      "start": 462,
      "end": 593
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 601,
            "end": 602
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 624,
                  "end": 628
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 606,
                "end": 628
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 633,
                "end": 637
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 638,
                "end": 644
              },
              "optional": false,
              "computed": false,
              "start": 633,
              "end": 644
            },
            "id": null,
            "generator": false,
            "start": 605,
            "end": 644
          },
          "definite": false,
          "start": 601,
          "end": 644
        }
      ],
      "declare": false,
      "start": 595,
      "end": 645
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
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 653,
            "end": 654
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 661,
                "end": 666
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 686,
                  "end": 690
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 668,
                "end": 690
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 696,
                "end": 700
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 701,
                "end": 707
              },
              "optional": false,
              "computed": false,
              "start": 696,
              "end": 707
            },
            "id": null,
            "generator": false,
            "start": 657,
            "end": 707
          },
          "definite": false,
          "start": 653,
          "end": 707
        }
      ],
      "declare": false,
      "start": 647,
      "end": 708
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
            "name": "j",
            "optional": false,
            "typeAnnotation": null,
            "start": 716,
            "end": 717
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 724,
                "end": 729
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 754,
                  "end": 758
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 733,
                "end": 758
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 764,
                "end": 768
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 769,
                "end": 775
              },
              "optional": false,
              "computed": false,
              "start": 764,
              "end": 775
            },
            "id": null,
            "generator": false,
            "start": 720,
            "end": 775
          },
          "definite": false,
          "start": 716,
          "end": 775
        }
      ],
      "declare": false,
      "start": 710,
      "end": 776
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "k",
        "optional": false,
        "typeAnnotation": null,
        "start": 787,
        "end": 788
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 794,
                "end": 799
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 794,
                "end": 799
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 794,
              "end": 799
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 821,
                "end": 825
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 803,
              "end": 825
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 790,
          "end": 827
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                        "name": "ka",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 841,
                        "end": 843
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ka",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 841,
                        "end": 843
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 841,
                      "end": 843
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kb",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 845,
                        "end": 847
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kb",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 845,
                        "end": 847
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 845,
                      "end": 847
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "remaining",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 868,
                        "end": 877
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 849,
                      "end": 877
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 839,
                  "end": 879
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 882,
                  "end": 886
                },
                "definite": false,
                "start": 839,
                "end": 886
              }
            ],
            "declare": false,
            "start": 833,
            "end": 887
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
                        "name": "kc",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 902,
                        "end": 904
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kc",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 902,
                        "end": 904
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 902,
                      "end": 904
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 910,
                        "end": 912
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 910,
                        "end": 912
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 910,
                      "end": 912
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "remaining2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 943,
                        "end": 953
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 918,
                      "end": 953
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 896,
                  "end": 957
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 960,
                  "end": 964
                },
                "definite": false,
                "start": 896,
                "end": 964
              }
            ],
            "declare": false,
            "start": 890,
            "end": 965
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "remaining",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1003,
                    "end": 1012
                  },
                  "start": 977,
                  "end": 1012
                }
              ],
              "start": 975,
              "end": 1014
            },
            "start": 968,
            "end": 1015
          }
        ],
        "start": 829,
        "end": 1017
      },
      "expression": false,
      "start": 778,
      "end": 1017
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1017
}
```
