__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 93,
  "end": 926,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 93,
      "end": 174,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 104,
          "end": 113,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 105,
            "end": 113,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 107,
              "end": 113
            }
          }
        },
        {
          "type": "Identifier",
          "start": 115,
          "end": 124,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 116,
            "end": 124,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 118,
              "end": 124
            }
          }
        },
        {
          "type": "Identifier",
          "start": 126,
          "end": 135,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 127,
            "end": 135,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 129,
              "end": 135
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 137,
        "end": 174,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 143,
            "end": 172,
            "argument": {
              "type": "CallExpression",
              "start": 150,
              "end": 171,
              "callee": {
                "type": "MemberExpression",
                "start": 150,
                "end": 160,
                "object": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 155,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 160,
                  "decorators": [],
                  "name": "from",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 161,
                  "end": 170,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 176,
      "end": 187,
      "expression": {
        "type": "CallExpression",
        "start": 176,
        "end": 186,
        "callee": {
          "type": "Identifier",
          "start": 176,
          "end": 177,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 178,
            "end": 179,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 181,
            "end": 182,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 184,
            "end": 185,
            "value": 3,
            "raw": "3"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 226,
      "end": 260,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 230,
          "end": 259,
          "id": {
            "type": "Identifier",
            "start": 230,
            "end": 231,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 234,
            "end": 259,
            "callee": {
              "type": "Identifier",
              "start": 238,
              "end": 241,
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 241,
              "end": 257,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 242,
                  "end": 248
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 250,
                  "end": 256
                }
              ]
            },
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 261,
      "end": 271,
      "expression": {
        "type": "CallExpression",
        "start": 261,
        "end": 270,
        "callee": {
          "type": "MemberExpression",
          "start": 261,
          "end": 268,
          "object": {
            "type": "Identifier",
            "start": 261,
            "end": 262,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 263,
            "end": 268,
            "decorators": [],
            "name": "clear",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 294,
      "end": 303,
      "expression": {
        "type": "CallExpression",
        "start": 294,
        "end": 302,
        "callee": {
          "type": "MemberExpression",
          "start": 294,
          "end": 300,
          "object": {
            "type": "Identifier",
            "start": 294,
            "end": 295,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 296,
            "end": 300,
            "decorators": [],
            "name": "keys",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 327,
      "end": 345,
      "id": {
        "type": "Identifier",
        "start": 336,
        "end": 339,
        "decorators": [],
        "name": "Baz",
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
        "start": 342,
        "end": 345,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 346,
      "end": 355,
      "expression": {
        "type": "MemberExpression",
        "start": 346,
        "end": 354,
        "object": {
          "type": "Identifier",
          "start": 346,
          "end": 349,
          "decorators": [],
          "name": "Baz",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 350,
          "end": 354,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 375,
      "end": 388,
      "expression": {
        "type": "CallExpression",
        "start": 375,
        "end": 387,
        "callee": {
          "type": "MemberExpression",
          "start": 375,
          "end": 384,
          "object": {
            "type": "Identifier",
            "start": 375,
            "end": 379,
            "decorators": [],
            "name": "Math",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 380,
            "end": 384,
            "decorators": [],
            "name": "sign",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 385,
            "end": 386,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 410,
      "end": 499,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 414,
          "end": 498,
          "id": {
            "type": "Identifier",
            "start": 414,
            "end": 415,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 418,
            "end": 498,
            "properties": [
              {
                "type": "Property",
                "start": 424,
                "end": 428,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 424,
                  "end": 425,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 427,
                  "end": 428,
                  "value": 2,
                  "raw": "2"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 434,
                "end": 496,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 435,
                  "end": 453,
                  "object": {
                    "type": "Identifier",
                    "start": 435,
                    "end": 441,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 442,
                    "end": 453,
                    "decorators": [],
                    "name": "hasInstance",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 454,
                  "end": 496,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 455,
                      "end": 465,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 460,
                        "end": 465,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 462,
                          "end": 465
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 467,
                    "end": 496,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 477,
                        "end": 490,
                        "argument": {
                          "type": "Literal",
                          "start": 484,
                          "end": 489,
                          "value": false,
                          "raw": "false"
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": true,
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
      "type": "ExpressionStatement",
      "start": 500,
      "end": 537,
      "expression": {
        "type": "CallExpression",
        "start": 500,
        "end": 536,
        "callee": {
          "type": "MemberExpression",
          "start": 500,
          "end": 516,
          "object": {
            "type": "Identifier",
            "start": 500,
            "end": 501,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 502,
            "end": 516,
            "decorators": [],
            "name": "hasOwnProperty",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 517,
            "end": 535,
            "object": {
              "type": "Identifier",
              "start": 517,
              "end": 523,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 524,
              "end": 535,
              "decorators": [],
              "name": "hasInstance",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 558,
      "end": 568,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 562,
          "end": 568,
          "id": {
            "type": "Identifier",
            "start": 562,
            "end": 563,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 566,
            "end": 568,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 569,
      "end": 594,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 573,
          "end": 593,
          "id": {
            "type": "Identifier",
            "start": 573,
            "end": 574,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 577,
            "end": 593,
            "callee": {
              "type": "Identifier",
              "start": 581,
              "end": 586,
              "decorators": [],
              "name": "Proxy",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 587,
                "end": 588,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ObjectExpression",
                "start": 590,
                "end": 592,
                "properties": []
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 617,
      "end": 642,
      "expression": {
        "type": "CallExpression",
        "start": 617,
        "end": 641,
        "callee": {
          "type": "MemberExpression",
          "start": 617,
          "end": 637,
          "object": {
            "type": "Identifier",
            "start": 617,
            "end": 624,
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 625,
            "end": 637,
            "decorators": [],
            "name": "isExtensible",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 638,
            "end": 640,
            "properties": []
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 664,
      "end": 691,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 668,
          "end": 690,
          "id": {
            "type": "Identifier",
            "start": 668,
            "end": 671,
            "decorators": [],
            "name": "reg",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 674,
            "end": 690,
            "callee": {
              "type": "Identifier",
              "start": 678,
              "end": 684,
              "decorators": [],
              "name": "RegExp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 685,
                "end": 689,
                "value": "/s",
                "raw": "\"/s\""
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 692,
      "end": 702,
      "expression": {
        "type": "MemberExpression",
        "start": 692,
        "end": 701,
        "object": {
          "type": "Identifier",
          "start": 692,
          "end": 695,
          "decorators": [],
          "name": "reg",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 696,
          "end": 701,
          "decorators": [],
          "name": "flags",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 724,
      "end": 748,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 728,
          "end": 747,
          "id": {
            "type": "Identifier",
            "start": 728,
            "end": 731,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 734,
            "end": 747,
            "value": "Hello world",
            "raw": "\"Hello world\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 749,
      "end": 774,
      "expression": {
        "type": "CallExpression",
        "start": 749,
        "end": 773,
        "callee": {
          "type": "MemberExpression",
          "start": 749,
          "end": 761,
          "object": {
            "type": "Identifier",
            "start": 749,
            "end": 752,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 753,
            "end": 761,
            "decorators": [],
            "name": "includes",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 762,
            "end": 769,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "Literal",
            "start": 771,
            "end": 772,
            "value": 0,
            "raw": "0"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 796,
      "end": 813,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 800,
          "end": 812,
          "id": {
            "type": "Identifier",
            "start": 800,
            "end": 801,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 804,
            "end": 812,
            "callee": {
              "type": "Identifier",
              "start": 804,
              "end": 810,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 845,
      "end": 926,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 851,
          "end": 926,
          "id": {
            "type": "Identifier",
            "start": 851,
            "end": 853,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 856,
            "end": 926,
            "properties": [
              {
                "type": "Property",
                "start": 862,
                "end": 924,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 863,
                  "end": 881,
                  "object": {
                    "type": "Identifier",
                    "start": 863,
                    "end": 869,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 870,
                    "end": 881,
                    "decorators": [],
                    "name": "hasInstance",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 882,
                  "end": 924,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 883,
                      "end": 893,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 888,
                        "end": 893,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 890,
                          "end": 893
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 895,
                    "end": 924,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 905,
                        "end": 918,
                        "argument": {
                          "type": "Literal",
                          "start": 912,
                          "end": 917,
                          "value": false,
                          "raw": "false"
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": true,
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
