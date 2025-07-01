__ESTREE_TEST__:PASS:
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
