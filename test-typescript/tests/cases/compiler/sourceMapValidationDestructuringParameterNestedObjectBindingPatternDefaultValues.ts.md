__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1212,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 52,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 52,
            "name": "console",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 52,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 21,
                "end": 52,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 27,
                    "end": 50,
                    "key": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 30,
                      "name": "log",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 31,
                        "end": 42,
                        "name": "msg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 34,
                          "end": 42,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 36,
                            "end": 42
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 43,
                      "end": 49,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 45,
                        "end": 49
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 53,
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 68,
        "name": "Robot",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 69,
        "end": 165,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 75,
            "end": 88,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 79,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 87,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 93,
            "end": 163,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 99,
              "name": "skills",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 162,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 101,
                "end": 162,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 111,
                    "end": 128,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 118,
                      "name": "primary",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 119,
                      "end": 127,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 121,
                        "end": 127
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 137,
                    "end": 156,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 137,
                      "end": 146,
                      "name": "secondary",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 147,
                      "end": 155,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 149,
                        "end": 155
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 254,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 253,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 183,
            "name": "robotA",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 183,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 178,
                "end": 183,
                "typeName": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 183,
                  "name": "Robot",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 186,
            "end": 253,
            "properties": [
              {
                "type": "Property",
                "start": 188,
                "end": 201,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 192,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 194,
                  "end": 201,
                  "value": "mower",
                  "raw": "\"mower\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 203,
                "end": 251,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 209,
                  "name": "skills",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 211,
                  "end": 251,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 213,
                      "end": 230,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 213,
                        "end": 220,
                        "name": "primary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 222,
                        "end": 230,
                        "value": "mowing",
                        "raw": "\"mowing\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 232,
                      "end": 249,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 232,
                        "end": 241,
                        "name": "secondary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 243,
                        "end": 249,
                        "value": "none",
                        "raw": "\"none\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 256,
      "end": 500,
      "id": {
        "type": "Identifier",
        "start": 265,
        "end": 269,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 275,
          "end": 468,
          "left": {
            "type": "ObjectPattern",
            "start": 275,
            "end": 459,
            "properties": [
              {
                "type": "Property",
                "start": 285,
                "end": 446,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 285,
                  "end": 291,
                  "name": "skills",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 293,
                  "end": 446,
                  "left": {
                    "type": "ObjectPattern",
                    "start": 293,
                    "end": 395,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 307,
                        "end": 336,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 307,
                          "end": 314,
                          "name": "primary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 316,
                          "end": 336,
                          "left": {
                            "type": "Identifier",
                            "start": 316,
                            "end": 324,
                            "name": "primaryA",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 327,
                            "end": 336,
                            "value": "primary",
                            "raw": "\"primary\""
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 350,
                        "end": 385,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 350,
                          "end": 359,
                          "name": "secondary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 361,
                          "end": 385,
                          "left": {
                            "type": "Identifier",
                            "start": 361,
                            "end": 371,
                            "name": "secondaryA",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 374,
                            "end": 385,
                            "value": "secondary",
                            "raw": "\"secondary\""
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "start": 398,
                    "end": 446,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 400,
                        "end": 420,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 400,
                          "end": 407,
                          "name": "primary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 409,
                          "end": 420,
                          "value": "SomeSkill",
                          "raw": "\"SomeSkill\""
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 422,
                        "end": 444,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 422,
                          "end": 431,
                          "name": "secondary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 433,
                          "end": 444,
                          "value": "someSkill",
                          "raw": "\"someSkill\""
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 452,
              "end": 459,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 454,
                "end": 459,
                "typeName": {
                  "type": "Identifier",
                  "start": 454,
                  "end": 459,
                  "name": "Robot",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "right": {
            "type": "Identifier",
            "start": 462,
            "end": 468,
            "name": "robotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 470,
        "end": 500,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 476,
            "end": 498,
            "expression": {
              "type": "CallExpression",
              "start": 476,
              "end": 497,
              "callee": {
                "type": "MemberExpression",
                "start": 476,
                "end": 487,
                "object": {
                  "type": "Identifier",
                  "start": 476,
                  "end": 483,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 484,
                  "end": 487,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 488,
                  "end": 496,
                  "name": "primaryA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 501,
      "end": 777,
      "id": {
        "type": "Identifier",
        "start": 510,
        "end": 514,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 520,
          "end": 743,
          "left": {
            "type": "ObjectPattern",
            "start": 520,
            "end": 734,
            "properties": [
              {
                "type": "Property",
                "start": 530,
                "end": 550,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 530,
                  "end": 534,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 536,
                  "end": 550,
                  "left": {
                    "type": "Identifier",
                    "start": 536,
                    "end": 541,
                    "name": "nameC",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 544,
                    "end": 550,
                    "value": "name",
                    "raw": "\"name\""
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 560,
                "end": 721,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 560,
                  "end": 566,
                  "name": "skills",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 568,
                  "end": 721,
                  "left": {
                    "type": "ObjectPattern",
                    "start": 568,
                    "end": 670,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 582,
                        "end": 611,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 582,
                          "end": 589,
                          "name": "primary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 591,
                          "end": 611,
                          "left": {
                            "type": "Identifier",
                            "start": 591,
                            "end": 599,
                            "name": "primaryB",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 602,
                            "end": 611,
                            "value": "primary",
                            "raw": "\"primary\""
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 625,
                        "end": 660,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 625,
                          "end": 634,
                          "name": "secondary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 636,
                          "end": 660,
                          "left": {
                            "type": "Identifier",
                            "start": 636,
                            "end": 646,
                            "name": "secondaryB",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 649,
                            "end": 660,
                            "value": "secondary",
                            "raw": "\"secondary\""
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "start": 673,
                    "end": 721,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 675,
                        "end": 695,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 675,
                          "end": 682,
                          "name": "primary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 684,
                          "end": 695,
                          "value": "SomeSkill",
                          "raw": "\"SomeSkill\""
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 697,
                        "end": 719,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 697,
                          "end": 706,
                          "name": "secondary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 708,
                          "end": 719,
                          "value": "someSkill",
                          "raw": "\"someSkill\""
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 727,
              "end": 734,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 729,
                "end": 734,
                "typeName": {
                  "type": "Identifier",
                  "start": 729,
                  "end": 734,
                  "name": "Robot",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "right": {
            "type": "Identifier",
            "start": 737,
            "end": 743,
            "name": "robotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 745,
        "end": 777,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 751,
            "end": 775,
            "expression": {
              "type": "CallExpression",
              "start": 751,
              "end": 774,
              "callee": {
                "type": "MemberExpression",
                "start": 751,
                "end": 762,
                "object": {
                  "type": "Identifier",
                  "start": 751,
                  "end": 758,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 759,
                  "end": 762,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 763,
                  "end": 773,
                  "name": "secondaryB",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 778,
      "end": 908,
      "id": {
        "type": "Identifier",
        "start": 787,
        "end": 791,
        "name": "foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 792,
          "end": 870,
          "left": {
            "type": "ObjectPattern",
            "start": 792,
            "end": 861,
            "properties": [
              {
                "type": "Property",
                "start": 794,
                "end": 851,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 794,
                  "end": 800,
                  "name": "skills",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 794,
                  "end": 851,
                  "left": {
                    "type": "Identifier",
                    "start": 794,
                    "end": 800,
                    "name": "skills",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "start": 803,
                    "end": 851,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 805,
                        "end": 825,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 805,
                          "end": 812,
                          "name": "primary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 814,
                          "end": 825,
                          "value": "SomeSkill",
                          "raw": "\"SomeSkill\""
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 827,
                        "end": 849,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 827,
                          "end": 836,
                          "name": "secondary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 838,
                          "end": 849,
                          "value": "someSkill",
                          "raw": "\"someSkill\""
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 854,
              "end": 861,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 856,
                "end": 861,
                "typeName": {
                  "type": "Identifier",
                  "start": 856,
                  "end": 861,
                  "name": "Robot",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "right": {
            "type": "Identifier",
            "start": 864,
            "end": 870,
            "name": "robotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 872,
        "end": 908,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 878,
            "end": 906,
            "expression": {
              "type": "CallExpression",
              "start": 878,
              "end": 905,
              "callee": {
                "type": "MemberExpression",
                "start": 878,
                "end": 889,
                "object": {
                  "type": "Identifier",
                  "start": 878,
                  "end": 885,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 886,
                  "end": 889,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 890,
                  "end": 904,
                  "object": {
                    "type": "Identifier",
                    "start": 890,
                    "end": 896,
                    "name": "skills",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 897,
                    "end": 904,
                    "name": "primary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 910,
      "end": 923,
      "expression": {
        "type": "CallExpression",
        "start": 910,
        "end": 922,
        "callee": {
          "type": "Identifier",
          "start": 910,
          "end": 914,
          "name": "foo1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 915,
            "end": 921,
            "name": "robotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 924,
      "end": 1009,
      "expression": {
        "type": "CallExpression",
        "start": 924,
        "end": 1008,
        "callee": {
          "type": "Identifier",
          "start": 924,
          "end": 928,
          "name": "foo1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 929,
            "end": 1007,
            "properties": [
              {
                "type": "Property",
                "start": 931,
                "end": 944,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 931,
                  "end": 935,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 937,
                  "end": 944,
                  "value": "Edger",
                  "raw": "\"Edger\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 946,
                "end": 1005,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 946,
                  "end": 952,
                  "name": "skills",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 954,
                  "end": 1005,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 956,
                      "end": 973,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 956,
                        "end": 963,
                        "name": "primary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 965,
                        "end": 973,
                        "value": "edging",
                        "raw": "\"edging\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 975,
                      "end": 1003,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 975,
                        "end": 984,
                        "name": "secondary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 986,
                        "end": 1003,
                        "value": "branch trimming",
                        "raw": "\"branch trimming\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1011,
      "end": 1024,
      "expression": {
        "type": "CallExpression",
        "start": 1011,
        "end": 1023,
        "callee": {
          "type": "Identifier",
          "start": 1011,
          "end": 1015,
          "name": "foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 1016,
            "end": 1022,
            "name": "robotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1025,
      "end": 1110,
      "expression": {
        "type": "CallExpression",
        "start": 1025,
        "end": 1109,
        "callee": {
          "type": "Identifier",
          "start": 1025,
          "end": 1029,
          "name": "foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1030,
            "end": 1108,
            "properties": [
              {
                "type": "Property",
                "start": 1032,
                "end": 1045,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1032,
                  "end": 1036,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1038,
                  "end": 1045,
                  "value": "Edger",
                  "raw": "\"Edger\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1047,
                "end": 1106,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1047,
                  "end": 1053,
                  "name": "skills",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1055,
                  "end": 1106,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1057,
                      "end": 1074,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1057,
                        "end": 1064,
                        "name": "primary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1066,
                        "end": 1074,
                        "value": "edging",
                        "raw": "\"edging\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1076,
                      "end": 1104,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1076,
                        "end": 1085,
                        "name": "secondary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1087,
                        "end": 1104,
                        "value": "branch trimming",
                        "raw": "\"branch trimming\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1112,
      "end": 1125,
      "expression": {
        "type": "CallExpression",
        "start": 1112,
        "end": 1124,
        "callee": {
          "type": "Identifier",
          "start": 1112,
          "end": 1116,
          "name": "foo3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 1117,
            "end": 1123,
            "name": "robotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1126,
      "end": 1211,
      "expression": {
        "type": "CallExpression",
        "start": 1126,
        "end": 1210,
        "callee": {
          "type": "Identifier",
          "start": 1126,
          "end": 1130,
          "name": "foo3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1131,
            "end": 1209,
            "properties": [
              {
                "type": "Property",
                "start": 1133,
                "end": 1146,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1133,
                  "end": 1137,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1139,
                  "end": 1146,
                  "value": "Edger",
                  "raw": "\"Edger\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1148,
                "end": 1207,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1148,
                  "end": 1154,
                  "name": "skills",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1156,
                  "end": 1207,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1158,
                      "end": 1175,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1158,
                        "end": 1165,
                        "name": "primary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1167,
                        "end": 1175,
                        "value": "edging",
                        "raw": "\"edging\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1177,
                      "end": 1205,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1177,
                        "end": 1186,
                        "name": "secondary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1188,
                        "end": 1205,
                        "value": "branch trimming",
                        "raw": "\"branch trimming\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
