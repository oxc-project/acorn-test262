__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 27,
                      "end": 30
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 36,
                            "end": 42
                          },
                          "start": 34,
                          "end": 42
                        },
                        "start": 31,
                        "end": 42
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 45,
                        "end": 49
                      },
                      "start": 43,
                      "end": 49
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 27,
                    "end": 50
                  }
                ],
                "start": 21,
                "end": 52
              },
              "start": 19,
              "end": 52
            },
            "start": 12,
            "end": 52
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 52
        }
      ],
      "declare": true,
      "start": 0,
      "end": 52
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 68
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 79
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              },
              "start": 79,
              "end": 87
            },
            "accessibility": null,
            "static": false,
            "start": 75,
            "end": 88
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "skills",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 99
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 111,
                      "end": 118
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 121,
                        "end": 127
                      },
                      "start": 119,
                      "end": 127
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 111,
                    "end": 128
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 137,
                      "end": 146
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 149,
                        "end": 155
                      },
                      "start": 147,
                      "end": 155
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 137,
                    "end": 156
                  }
                ],
                "start": 101,
                "end": 162
              },
              "start": 99,
              "end": 162
            },
            "accessibility": null,
            "static": false,
            "start": 93,
            "end": 163
          }
        ],
        "start": 69,
        "end": 165
      },
      "declare": false,
      "start": 53,
      "end": 165
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
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 183
                },
                "typeArguments": null,
                "start": 178,
                "end": 183
              },
              "start": 176,
              "end": 183
            },
            "start": 170,
            "end": 183
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 188,
                  "end": 192
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 194,
                  "end": 201
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 188,
                "end": 201
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 209
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 213,
                        "end": 220
                      },
                      "value": {
                        "type": "Literal",
                        "value": "mowing",
                        "raw": "\"mowing\"",
                        "start": 222,
                        "end": 230
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 213,
                      "end": 230
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 232,
                        "end": 241
                      },
                      "value": {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 243,
                        "end": 249
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 232,
                      "end": 249
                    }
                  ],
                  "start": 211,
                  "end": 251
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 203,
                "end": 251
              }
            ],
            "start": 186,
            "end": 253
          },
          "definite": false,
          "start": 170,
          "end": 253
        }
      ],
      "declare": false,
      "start": 166,
      "end": 254
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 265,
        "end": 269
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 285,
                  "end": 291
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
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 307,
                          "end": 314
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primaryA",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 316,
                            "end": 324
                          },
                          "right": {
                            "type": "Literal",
                            "value": "primary",
                            "raw": "\"primary\"",
                            "start": 327,
                            "end": 336
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 316,
                          "end": 336
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 307,
                        "end": 336
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 350,
                          "end": 359
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondaryA",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 361,
                            "end": 371
                          },
                          "right": {
                            "type": "Literal",
                            "value": "secondary",
                            "raw": "\"secondary\"",
                            "start": 374,
                            "end": 385
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 361,
                          "end": 385
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 350,
                        "end": 385
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 293,
                    "end": 395
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 400,
                          "end": 407
                        },
                        "value": {
                          "type": "Literal",
                          "value": "SomeSkill",
                          "raw": "\"SomeSkill\"",
                          "start": 409,
                          "end": 420
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 400,
                        "end": 420
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 422,
                          "end": 431
                        },
                        "value": {
                          "type": "Literal",
                          "value": "someSkill",
                          "raw": "\"someSkill\"",
                          "start": 433,
                          "end": 444
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 422,
                        "end": 444
                      }
                    ],
                    "start": 398,
                    "end": 446
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 293,
                  "end": 446
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 285,
                "end": 446
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 454,
                  "end": 459
                },
                "typeArguments": null,
                "start": 454,
                "end": 459
              },
              "start": 452,
              "end": 459
            },
            "start": 275,
            "end": 459
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 462,
            "end": 468
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 275,
          "end": 468
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 476,
                  "end": 483
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 484,
                  "end": 487
                },
                "optional": false,
                "computed": false,
                "start": 476,
                "end": 487
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 488,
                  "end": 496
                }
              ],
              "optional": false,
              "start": 476,
              "end": 497
            },
            "directive": null,
            "start": 476,
            "end": 498
          }
        ],
        "start": 470,
        "end": 500
      },
      "expression": false,
      "start": 256,
      "end": 500
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 510,
        "end": 514
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 530,
                  "end": 534
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameC",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 536,
                    "end": 541
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 544,
                    "end": 550
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 536,
                  "end": 550
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 530,
                "end": 550
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 560,
                  "end": 566
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
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 582,
                          "end": 589
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primaryB",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 591,
                            "end": 599
                          },
                          "right": {
                            "type": "Literal",
                            "value": "primary",
                            "raw": "\"primary\"",
                            "start": 602,
                            "end": 611
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 591,
                          "end": 611
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 582,
                        "end": 611
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 625,
                          "end": 634
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondaryB",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 636,
                            "end": 646
                          },
                          "right": {
                            "type": "Literal",
                            "value": "secondary",
                            "raw": "\"secondary\"",
                            "start": 649,
                            "end": 660
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 636,
                          "end": 660
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 625,
                        "end": 660
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 568,
                    "end": 670
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 675,
                          "end": 682
                        },
                        "value": {
                          "type": "Literal",
                          "value": "SomeSkill",
                          "raw": "\"SomeSkill\"",
                          "start": 684,
                          "end": 695
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 675,
                        "end": 695
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 697,
                          "end": 706
                        },
                        "value": {
                          "type": "Literal",
                          "value": "someSkill",
                          "raw": "\"someSkill\"",
                          "start": 708,
                          "end": 719
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 697,
                        "end": 719
                      }
                    ],
                    "start": 673,
                    "end": 721
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 568,
                  "end": 721
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 560,
                "end": 721
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 729,
                  "end": 734
                },
                "typeArguments": null,
                "start": 729,
                "end": 734
              },
              "start": 727,
              "end": 734
            },
            "start": 520,
            "end": 734
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 737,
            "end": 743
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 520,
          "end": 743
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 751,
                  "end": 758
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 759,
                  "end": 762
                },
                "optional": false,
                "computed": false,
                "start": 751,
                "end": 762
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "secondaryB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 763,
                  "end": 773
                }
              ],
              "optional": false,
              "start": 751,
              "end": 774
            },
            "directive": null,
            "start": 751,
            "end": 775
          }
        ],
        "start": 745,
        "end": 777
      },
      "expression": false,
      "start": 501,
      "end": 777
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 787,
        "end": 791
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 794,
                  "end": 800
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 794,
                    "end": 800
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 805,
                          "end": 812
                        },
                        "value": {
                          "type": "Literal",
                          "value": "SomeSkill",
                          "raw": "\"SomeSkill\"",
                          "start": 814,
                          "end": 825
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 805,
                        "end": 825
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 827,
                          "end": 836
                        },
                        "value": {
                          "type": "Literal",
                          "value": "someSkill",
                          "raw": "\"someSkill\"",
                          "start": 838,
                          "end": 849
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 827,
                        "end": 849
                      }
                    ],
                    "start": 803,
                    "end": 851
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 794,
                  "end": 851
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 794,
                "end": 851
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 856,
                  "end": 861
                },
                "typeArguments": null,
                "start": 856,
                "end": 861
              },
              "start": 854,
              "end": 861
            },
            "start": 792,
            "end": 861
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 864,
            "end": 870
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 792,
          "end": 870
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 878,
                  "end": 885
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 886,
                  "end": 889
                },
                "optional": false,
                "computed": false,
                "start": 878,
                "end": 889
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 890,
                    "end": 896
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 897,
                    "end": 904
                  },
                  "optional": false,
                  "computed": false,
                  "start": 890,
                  "end": 904
                }
              ],
              "optional": false,
              "start": 878,
              "end": 905
            },
            "directive": null,
            "start": 878,
            "end": 906
          }
        ],
        "start": 872,
        "end": 908
      },
      "expression": false,
      "start": 778,
      "end": 908
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 910,
          "end": 914
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 915,
            "end": 921
          }
        ],
        "optional": false,
        "start": 910,
        "end": 922
      },
      "directive": null,
      "start": 910,
      "end": 923
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 924,
          "end": 928
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 931,
                  "end": 935
                },
                "value": {
                  "type": "Literal",
                  "value": "Edger",
                  "raw": "\"Edger\"",
                  "start": 937,
                  "end": 944
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 931,
                "end": 944
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 946,
                  "end": 952
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 956,
                        "end": 963
                      },
                      "value": {
                        "type": "Literal",
                        "value": "edging",
                        "raw": "\"edging\"",
                        "start": 965,
                        "end": 973
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 956,
                      "end": 973
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 975,
                        "end": 984
                      },
                      "value": {
                        "type": "Literal",
                        "value": "branch trimming",
                        "raw": "\"branch trimming\"",
                        "start": 986,
                        "end": 1003
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 975,
                      "end": 1003
                    }
                  ],
                  "start": 954,
                  "end": 1005
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 946,
                "end": 1005
              }
            ],
            "start": 929,
            "end": 1007
          }
        ],
        "optional": false,
        "start": 924,
        "end": 1008
      },
      "directive": null,
      "start": 924,
      "end": 1009
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1011,
          "end": 1015
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 1016,
            "end": 1022
          }
        ],
        "optional": false,
        "start": 1011,
        "end": 1023
      },
      "directive": null,
      "start": 1011,
      "end": 1024
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1025,
          "end": 1029
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1032,
                  "end": 1036
                },
                "value": {
                  "type": "Literal",
                  "value": "Edger",
                  "raw": "\"Edger\"",
                  "start": 1038,
                  "end": 1045
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1032,
                "end": 1045
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1047,
                  "end": 1053
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1057,
                        "end": 1064
                      },
                      "value": {
                        "type": "Literal",
                        "value": "edging",
                        "raw": "\"edging\"",
                        "start": 1066,
                        "end": 1074
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1057,
                      "end": 1074
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1076,
                        "end": 1085
                      },
                      "value": {
                        "type": "Literal",
                        "value": "branch trimming",
                        "raw": "\"branch trimming\"",
                        "start": 1087,
                        "end": 1104
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1076,
                      "end": 1104
                    }
                  ],
                  "start": 1055,
                  "end": 1106
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1047,
                "end": 1106
              }
            ],
            "start": 1030,
            "end": 1108
          }
        ],
        "optional": false,
        "start": 1025,
        "end": 1109
      },
      "directive": null,
      "start": 1025,
      "end": 1110
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1112,
          "end": 1116
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 1117,
            "end": 1123
          }
        ],
        "optional": false,
        "start": 1112,
        "end": 1124
      },
      "directive": null,
      "start": 1112,
      "end": 1125
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1126,
          "end": 1130
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1133,
                  "end": 1137
                },
                "value": {
                  "type": "Literal",
                  "value": "Edger",
                  "raw": "\"Edger\"",
                  "start": 1139,
                  "end": 1146
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1133,
                "end": 1146
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1148,
                  "end": 1154
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1158,
                        "end": 1165
                      },
                      "value": {
                        "type": "Literal",
                        "value": "edging",
                        "raw": "\"edging\"",
                        "start": 1167,
                        "end": 1175
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1158,
                      "end": 1175
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1177,
                        "end": 1186
                      },
                      "value": {
                        "type": "Literal",
                        "value": "branch trimming",
                        "raw": "\"branch trimming\"",
                        "start": 1188,
                        "end": 1205
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1177,
                      "end": 1205
                    }
                  ],
                  "start": 1156,
                  "end": 1207
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1148,
                "end": 1207
              }
            ],
            "start": 1131,
            "end": 1209
          }
        ],
        "optional": false,
        "start": 1126,
        "end": 1210
      },
      "directive": null,
      "start": 1126,
      "end": 1211
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1211
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8,
    "end": 11,
    "range": [
      8,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 12,
    "end": 19,
    "range": [
      12,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 27,
    "end": 30,
    "range": [
      27,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "msg",
    "start": 31,
    "end": 34,
    "range": [
      31,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 36,
    "end": 42,
    "range": [
      36,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 45,
    "end": 49,
    "range": [
      45,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 53,
    "end": 62,
    "range": [
      53,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 63,
    "end": 68,
    "range": [
      63,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 75,
    "end": 79,
    "range": [
      75,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 81,
    "end": 87,
    "range": [
      81,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 93,
    "end": 99,
    "range": [
      93,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 111,
    "end": 118,
    "range": [
      111,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 121,
    "end": 127,
    "range": [
      121,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 137,
    "end": 146,
    "range": [
      137,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 149,
    "end": 155,
    "range": [
      149,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 166,
    "end": 169,
    "range": [
      166,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 170,
    "end": 176,
    "range": [
      170,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 178,
    "end": 183,
    "range": [
      178,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 188,
    "end": 192,
    "range": [
      188,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 194,
    "end": 201,
    "range": [
      194,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 203,
    "end": 209,
    "range": [
      203,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 213,
    "end": 220,
    "range": [
      213,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 222,
    "end": 230,
    "range": [
      222,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 232,
    "end": 241,
    "range": [
      232,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 243,
    "end": 249,
    "range": [
      243,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 256,
    "end": 264,
    "range": [
      256,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 265,
    "end": 269,
    "range": [
      265,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 285,
    "end": 291,
    "range": [
      285,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 307,
    "end": 314,
    "range": [
      307,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 316,
    "end": 324,
    "range": [
      316,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 327,
    "end": 336,
    "range": [
      327,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 350,
    "end": 359,
    "range": [
      350,
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
    "type": "Identifier",
    "value": "secondaryA",
    "start": 361,
    "end": 371,
    "range": [
      361,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 374,
    "end": 385,
    "range": [
      374,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 400,
    "end": 407,
    "range": [
      400,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "String",
    "value": "\"SomeSkill\"",
    "start": 409,
    "end": 420,
    "range": [
      409,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 422,
    "end": 431,
    "range": [
      422,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "String",
    "value": "\"someSkill\"",
    "start": 433,
    "end": 444,
    "range": [
      433,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 454,
    "end": 459,
    "range": [
      454,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 462,
    "end": 468,
    "range": [
      462,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 476,
    "end": 483,
    "range": [
      476,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 484,
    "end": 487,
    "range": [
      484,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 488,
    "end": 496,
    "range": [
      488,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 501,
    "end": 509,
    "range": [
      501,
      509
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 510,
    "end": 514,
    "range": [
      510,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 530,
    "end": 534,
    "range": [
      530,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Identifier",
    "value": "nameC",
    "start": 536,
    "end": 541,
    "range": [
      536,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 544,
    "end": 550,
    "range": [
      544,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 560,
    "end": 566,
    "range": [
      560,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 582,
    "end": 589,
    "range": [
      582,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryB",
    "start": 591,
    "end": 599,
    "range": [
      591,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 602,
    "end": 611,
    "range": [
      602,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 625,
    "end": 634,
    "range": [
      625,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Identifier",
    "value": "secondaryB",
    "start": 636,
    "end": 646,
    "range": [
      636,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 649,
    "end": 660,
    "range": [
      649,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 675,
    "end": 682,
    "range": [
      675,
      682
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "String",
    "value": "\"SomeSkill\"",
    "start": 684,
    "end": 695,
    "range": [
      684,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 697,
    "end": 706,
    "range": [
      697,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "String",
    "value": "\"someSkill\"",
    "start": 708,
    "end": 719,
    "range": [
      708,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 729,
    "end": 734,
    "range": [
      729,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 737,
    "end": 743,
    "range": [
      737,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 751,
    "end": 758,
    "range": [
      751,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 759,
    "end": 762,
    "range": [
      759,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Identifier",
    "value": "secondaryB",
    "start": 763,
    "end": 773,
    "range": [
      763,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 778,
    "end": 786,
    "range": [
      778,
      786
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 787,
    "end": 791,
    "range": [
      787,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 794,
    "end": 800,
    "range": [
      794,
      800
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 805,
    "end": 812,
    "range": [
      805,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "String",
    "value": "\"SomeSkill\"",
    "start": 814,
    "end": 825,
    "range": [
      814,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 827,
    "end": 836,
    "range": [
      827,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "String",
    "value": "\"someSkill\"",
    "start": 838,
    "end": 849,
    "range": [
      838,
      849
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 850,
    "end": 851,
    "range": [
      850,
      851
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 854,
    "end": 855,
    "range": [
      854,
      855
    ]
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 856,
    "end": 861,
    "range": [
      856,
      861
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 864,
    "end": 870,
    "range": [
      864,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 878,
    "end": 885,
    "range": [
      878,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 886,
    "end": 889,
    "range": [
      886,
      889
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 890,
    "end": 896,
    "range": [
      890,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 897,
    "end": 904,
    "range": [
      897,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 910,
    "end": 914,
    "range": [
      910,
      914
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 914,
    "end": 915,
    "range": [
      914,
      915
    ]
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 915,
    "end": 921,
    "range": [
      915,
      921
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 921,
    "end": 922,
    "range": [
      921,
      922
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 922,
    "end": 923,
    "range": [
      922,
      923
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 924,
    "end": 928,
    "range": [
      924,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 929,
    "end": 930,
    "range": [
      929,
      930
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 931,
    "end": 935,
    "range": [
      931,
      935
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "String",
    "value": "\"Edger\"",
    "start": 937,
    "end": 944,
    "range": [
      937,
      944
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 946,
    "end": 952,
    "range": [
      946,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 956,
    "end": 963,
    "range": [
      956,
      963
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 965,
    "end": 973,
    "range": [
      965,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 975,
    "end": 984,
    "range": [
      975,
      984
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "String",
    "value": "\"branch trimming\"",
    "start": 986,
    "end": 1003,
    "range": [
      986,
      1003
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1008,
    "end": 1009,
    "range": [
      1008,
      1009
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1011,
    "end": 1015,
    "range": [
      1011,
      1015
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1015,
    "end": 1016,
    "range": [
      1015,
      1016
    ]
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 1016,
    "end": 1022,
    "range": [
      1016,
      1022
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1022,
    "end": 1023,
    "range": [
      1022,
      1023
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1023,
    "end": 1024,
    "range": [
      1023,
      1024
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1025,
    "end": 1029,
    "range": [
      1025,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1032,
    "end": 1036,
    "range": [
      1032,
      1036
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1036,
    "end": 1037,
    "range": [
      1036,
      1037
    ]
  },
  {
    "type": "String",
    "value": "\"Edger\"",
    "start": 1038,
    "end": 1045,
    "range": [
      1038,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1047,
    "end": 1053,
    "range": [
      1047,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1057,
    "end": 1064,
    "range": [
      1057,
      1064
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 1066,
    "end": 1074,
    "range": [
      1066,
      1074
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1074,
    "end": 1075,
    "range": [
      1074,
      1075
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1076,
    "end": 1085,
    "range": [
      1076,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "String",
    "value": "\"branch trimming\"",
    "start": 1087,
    "end": 1104,
    "range": [
      1087,
      1104
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1107,
    "end": 1108,
    "range": [
      1107,
      1108
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1108,
    "end": 1109,
    "range": [
      1108,
      1109
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1109,
    "end": 1110,
    "range": [
      1109,
      1110
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1112,
    "end": 1116,
    "range": [
      1112,
      1116
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 1117,
    "end": 1123,
    "range": [
      1117,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1126,
    "end": 1130,
    "range": [
      1126,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1130,
    "end": 1131,
    "range": [
      1130,
      1131
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1133,
    "end": 1137,
    "range": [
      1133,
      1137
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1137,
    "end": 1138,
    "range": [
      1137,
      1138
    ]
  },
  {
    "type": "String",
    "value": "\"Edger\"",
    "start": 1139,
    "end": 1146,
    "range": [
      1139,
      1146
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1146,
    "end": 1147,
    "range": [
      1146,
      1147
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1148,
    "end": 1154,
    "range": [
      1148,
      1154
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1154,
    "end": 1155,
    "range": [
      1154,
      1155
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1156,
    "end": 1157,
    "range": [
      1156,
      1157
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1158,
    "end": 1165,
    "range": [
      1158,
      1165
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 1167,
    "end": 1175,
    "range": [
      1167,
      1175
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1177,
    "end": 1186,
    "range": [
      1177,
      1186
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "String",
    "value": "\"branch trimming\"",
    "start": 1188,
    "end": 1205,
    "range": [
      1188,
      1205
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1206,
    "end": 1207,
    "range": [
      1206,
      1207
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1208,
    "end": 1209,
    "range": [
      1208,
      1209
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1209,
    "end": 1210,
    "range": [
      1209,
      1210
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1210,
    "end": 1211,
    "range": [
      1210,
      1211
    ]
  }
]
```
