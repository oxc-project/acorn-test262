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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 52,
            "decorators": [],
            "name": "console",
            "optional": false,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 30,
                      "decorators": [],
                      "name": "log",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 31,
                        "end": 42,
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 34,
                          "end": 42,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 36,
                            "end": 42
                          }
                        }
                      }
                    ],
                    "readonly": false,
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
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 53,
      "end": 165,
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
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 79,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 87,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 93,
            "end": 163,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 99,
              "decorators": [],
              "name": "skills",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                    "key": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 118,
                      "decorators": [],
                      "name": "primary",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 119,
                      "end": 127,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 121,
                        "end": 127
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 137,
                    "end": 156,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 137,
                      "end": 146,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 147,
                      "end": 155,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 149,
                        "end": 155
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 68,
        "decorators": [],
        "name": "Robot",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 183,
            "decorators": [],
            "name": "robotA",
            "optional": false,
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
                  "decorators": [],
                  "name": "Robot",
                  "optional": false
                }
              }
            }
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 192,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 194,
                  "end": 201,
                  "raw": "\"mower\"",
                  "value": "mower"
                }
              },
              {
                "type": "Property",
                "start": 203,
                "end": 251,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 209,
                  "decorators": [],
                  "name": "skills",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 211,
                  "end": 251,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 213,
                      "end": 230,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 213,
                        "end": 220,
                        "decorators": [],
                        "name": "primary",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 222,
                        "end": 230,
                        "raw": "\"mowing\"",
                        "value": "mowing"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 232,
                      "end": 249,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 232,
                        "end": 241,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 243,
                        "end": 249,
                        "raw": "\"none\"",
                        "value": "none"
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 256,
      "end": 500,
      "async": false,
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
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 488,
                  "end": 496,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 476,
                "end": 487,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 476,
                  "end": 483,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 484,
                  "end": 487,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 265,
        "end": 269,
        "decorators": [],
        "name": "foo1",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 275,
          "end": 468,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 275,
            "end": 459,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 285,
                "end": 446,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 285,
                  "end": 291,
                  "decorators": [],
                  "name": "skills",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 293,
                  "end": 446,
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "start": 293,
                    "end": 395,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 307,
                        "end": 336,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 307,
                          "end": 314,
                          "decorators": [],
                          "name": "primary",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 316,
                          "end": 336,
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "start": 316,
                            "end": 324,
                            "decorators": [],
                            "name": "primaryA",
                            "optional": false
                          },
                          "optional": false,
                          "right": {
                            "type": "Literal",
                            "start": 327,
                            "end": 336,
                            "raw": "\"primary\"",
                            "value": "primary"
                          }
                        }
                      },
                      {
                        "type": "Property",
                        "start": 350,
                        "end": 385,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 350,
                          "end": 359,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 361,
                          "end": 385,
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "start": 361,
                            "end": 371,
                            "decorators": [],
                            "name": "secondaryA",
                            "optional": false
                          },
                          "optional": false,
                          "right": {
                            "type": "Literal",
                            "start": 374,
                            "end": 385,
                            "raw": "\"secondary\"",
                            "value": "secondary"
                          }
                        }
                      }
                    ]
                  },
                  "optional": false,
                  "right": {
                    "type": "ObjectExpression",
                    "start": 398,
                    "end": 446,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 400,
                        "end": 420,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 400,
                          "end": 407,
                          "decorators": [],
                          "name": "primary",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 409,
                          "end": 420,
                          "raw": "\"SomeSkill\"",
                          "value": "SomeSkill"
                        }
                      },
                      {
                        "type": "Property",
                        "start": 422,
                        "end": 444,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 422,
                          "end": 431,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 433,
                          "end": 444,
                          "raw": "\"someSkill\"",
                          "value": "someSkill"
                        }
                      }
                    ]
                  }
                }
              }
            ],
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
                  "decorators": [],
                  "name": "Robot",
                  "optional": false
                }
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 462,
            "end": 468,
            "decorators": [],
            "name": "robotA",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 501,
      "end": 777,
      "async": false,
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
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 763,
                  "end": 773,
                  "decorators": [],
                  "name": "secondaryB",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 751,
                "end": 762,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 751,
                  "end": 758,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 759,
                  "end": 762,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 510,
        "end": 514,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 520,
          "end": 743,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 520,
            "end": 734,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 530,
                "end": 550,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 530,
                  "end": 534,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 536,
                  "end": 550,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 536,
                    "end": 541,
                    "decorators": [],
                    "name": "nameC",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 544,
                    "end": 550,
                    "raw": "\"name\"",
                    "value": "name"
                  }
                }
              },
              {
                "type": "Property",
                "start": 560,
                "end": 721,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 560,
                  "end": 566,
                  "decorators": [],
                  "name": "skills",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 568,
                  "end": 721,
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "start": 568,
                    "end": 670,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 582,
                        "end": 611,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 582,
                          "end": 589,
                          "decorators": [],
                          "name": "primary",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 591,
                          "end": 611,
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "start": 591,
                            "end": 599,
                            "decorators": [],
                            "name": "primaryB",
                            "optional": false
                          },
                          "optional": false,
                          "right": {
                            "type": "Literal",
                            "start": 602,
                            "end": 611,
                            "raw": "\"primary\"",
                            "value": "primary"
                          }
                        }
                      },
                      {
                        "type": "Property",
                        "start": 625,
                        "end": 660,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 625,
                          "end": 634,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 636,
                          "end": 660,
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "start": 636,
                            "end": 646,
                            "decorators": [],
                            "name": "secondaryB",
                            "optional": false
                          },
                          "optional": false,
                          "right": {
                            "type": "Literal",
                            "start": 649,
                            "end": 660,
                            "raw": "\"secondary\"",
                            "value": "secondary"
                          }
                        }
                      }
                    ]
                  },
                  "optional": false,
                  "right": {
                    "type": "ObjectExpression",
                    "start": 673,
                    "end": 721,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 675,
                        "end": 695,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 675,
                          "end": 682,
                          "decorators": [],
                          "name": "primary",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 684,
                          "end": 695,
                          "raw": "\"SomeSkill\"",
                          "value": "SomeSkill"
                        }
                      },
                      {
                        "type": "Property",
                        "start": 697,
                        "end": 719,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 697,
                          "end": 706,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 708,
                          "end": 719,
                          "raw": "\"someSkill\"",
                          "value": "someSkill"
                        }
                      }
                    ]
                  }
                }
              }
            ],
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
                  "decorators": [],
                  "name": "Robot",
                  "optional": false
                }
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 737,
            "end": 743,
            "decorators": [],
            "name": "robotA",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 778,
      "end": 908,
      "async": false,
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
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 890,
                  "end": 904,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 890,
                    "end": 896,
                    "decorators": [],
                    "name": "skills",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 897,
                    "end": 904,
                    "decorators": [],
                    "name": "primary",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 878,
                "end": 889,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 878,
                  "end": 885,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 886,
                  "end": 889,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 787,
        "end": 791,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 792,
          "end": 870,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 792,
            "end": 861,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 794,
                "end": 851,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 794,
                  "end": 800,
                  "decorators": [],
                  "name": "skills",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 794,
                  "end": 851,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 794,
                    "end": 800,
                    "decorators": [],
                    "name": "skills",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "ObjectExpression",
                    "start": 803,
                    "end": 851,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 805,
                        "end": 825,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 805,
                          "end": 812,
                          "decorators": [],
                          "name": "primary",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 814,
                          "end": 825,
                          "raw": "\"SomeSkill\"",
                          "value": "SomeSkill"
                        }
                      },
                      {
                        "type": "Property",
                        "start": 827,
                        "end": 849,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 827,
                          "end": 836,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 838,
                          "end": 849,
                          "raw": "\"someSkill\"",
                          "value": "someSkill"
                        }
                      }
                    ]
                  }
                }
              }
            ],
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
                  "decorators": [],
                  "name": "Robot",
                  "optional": false
                }
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 864,
            "end": 870,
            "decorators": [],
            "name": "robotA",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 910,
      "end": 923,
      "expression": {
        "type": "CallExpression",
        "start": 910,
        "end": 922,
        "arguments": [
          {
            "type": "Identifier",
            "start": 915,
            "end": 921,
            "decorators": [],
            "name": "robotA",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 910,
          "end": 914,
          "decorators": [],
          "name": "foo1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 924,
      "end": 1009,
      "expression": {
        "type": "CallExpression",
        "start": 924,
        "end": 1008,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 931,
                  "end": 935,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 937,
                  "end": 944,
                  "raw": "\"Edger\"",
                  "value": "Edger"
                }
              },
              {
                "type": "Property",
                "start": 946,
                "end": 1005,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 946,
                  "end": 952,
                  "decorators": [],
                  "name": "skills",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 954,
                  "end": 1005,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 956,
                      "end": 973,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 956,
                        "end": 963,
                        "decorators": [],
                        "name": "primary",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 965,
                        "end": 973,
                        "raw": "\"edging\"",
                        "value": "edging"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 975,
                      "end": 1003,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 975,
                        "end": 984,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 986,
                        "end": 1003,
                        "raw": "\"branch trimming\"",
                        "value": "branch trimming"
                      }
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 924,
          "end": 928,
          "decorators": [],
          "name": "foo1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1011,
      "end": 1024,
      "expression": {
        "type": "CallExpression",
        "start": 1011,
        "end": 1023,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1016,
            "end": 1022,
            "decorators": [],
            "name": "robotA",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1011,
          "end": 1015,
          "decorators": [],
          "name": "foo2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1025,
      "end": 1110,
      "expression": {
        "type": "CallExpression",
        "start": 1025,
        "end": 1109,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1032,
                  "end": 1036,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1038,
                  "end": 1045,
                  "raw": "\"Edger\"",
                  "value": "Edger"
                }
              },
              {
                "type": "Property",
                "start": 1047,
                "end": 1106,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1047,
                  "end": 1053,
                  "decorators": [],
                  "name": "skills",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 1055,
                  "end": 1106,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1057,
                      "end": 1074,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1057,
                        "end": 1064,
                        "decorators": [],
                        "name": "primary",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1066,
                        "end": 1074,
                        "raw": "\"edging\"",
                        "value": "edging"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1076,
                      "end": 1104,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1076,
                        "end": 1085,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1087,
                        "end": 1104,
                        "raw": "\"branch trimming\"",
                        "value": "branch trimming"
                      }
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1025,
          "end": 1029,
          "decorators": [],
          "name": "foo2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1112,
      "end": 1125,
      "expression": {
        "type": "CallExpression",
        "start": 1112,
        "end": 1124,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1117,
            "end": 1123,
            "decorators": [],
            "name": "robotA",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1112,
          "end": 1116,
          "decorators": [],
          "name": "foo3",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1126,
      "end": 1211,
      "expression": {
        "type": "CallExpression",
        "start": 1126,
        "end": 1210,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1133,
                  "end": 1137,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1139,
                  "end": 1146,
                  "raw": "\"Edger\"",
                  "value": "Edger"
                }
              },
              {
                "type": "Property",
                "start": 1148,
                "end": 1207,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1148,
                  "end": 1154,
                  "decorators": [],
                  "name": "skills",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 1156,
                  "end": 1207,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1158,
                      "end": 1175,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1158,
                        "end": 1165,
                        "decorators": [],
                        "name": "primary",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1167,
                        "end": 1175,
                        "raw": "\"edging\"",
                        "value": "edging"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1177,
                      "end": 1205,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1177,
                        "end": 1186,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1188,
                        "end": 1205,
                        "raw": "\"branch trimming\"",
                        "value": "branch trimming"
                      }
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1126,
          "end": 1130,
          "decorators": [],
          "name": "foo3",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
