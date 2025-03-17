__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2011,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "name": "foo0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 16,
        "end": 45,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 22,
            "end": 32,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 26,
                "end": 31,
                "id": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 37,
            "end": 43,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 41,
                "end": 42,
                "id": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 42,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 47,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 60,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 63,
        "end": 98,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 69,
            "end": 85,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 73,
                "end": 84,
                "id": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 74,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 77,
                  "end": 84,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 84,
                    "name": "x",
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
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 90,
            "end": 96,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 94,
                "end": 95,
                "id": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 95,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 100,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 113,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 116,
        "end": 168,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 122,
            "end": 155,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 126,
                "end": 155,
                "id": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 127,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "FunctionExpression",
                  "start": 130,
                  "end": 155,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 142,
                    "end": 155,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 144,
                        "end": 153,
                        "argument": {
                          "type": "Identifier",
                          "start": 151,
                          "end": 152,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 160,
            "end": 166,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 164,
                "end": 165,
                "id": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 165,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 170,
      "end": 245,
      "id": {
        "type": "Identifier",
        "start": 179,
        "end": 183,
        "name": "foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 186,
        "end": 245,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 192,
            "end": 232,
            "id": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 200,
              "end": 232,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 210,
                  "end": 226,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 211,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 211,
                    "end": 226,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 214,
                      "end": 226,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 216,
                          "end": 225,
                          "argument": {
                            "type": "Identifier",
                            "start": 223,
                            "end": 224,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "VariableDeclaration",
            "start": 237,
            "end": 243,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 241,
                "end": 242,
                "id": {
                  "type": "Identifier",
                  "start": 241,
                  "end": 242,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 247,
      "end": 330,
      "id": {
        "type": "Identifier",
        "start": 256,
        "end": 260,
        "name": "foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 263,
        "end": 330,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 269,
            "end": 317,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 273,
                "end": 316,
                "id": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 274,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ClassExpression",
                  "start": 277,
                  "end": 316,
                  "id": null,
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 283,
                    "end": 316,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 293,
                        "end": 310,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 293,
                          "end": 294,
                          "name": "m",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "method",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 294,
                          "end": 310,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 297,
                            "end": 310,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 299,
                                "end": 308,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 306,
                                  "end": 307,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "decorators": [],
                        "override": false,
                        "optional": false,
                        "accessibility": null
                      }
                    ]
                  },
                  "decorators": [],
                  "typeParameters": null,
                  "implements": [],
                  "abstract": false,
                  "declare": false,
                  "superTypeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 322,
            "end": 328,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 326,
                "end": 327,
                "id": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 327,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 332,
      "end": 393,
      "id": {
        "type": "Identifier",
        "start": 341,
        "end": 345,
        "name": "foo5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 348,
        "end": 393,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 354,
            "end": 370,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 358,
                "end": 369,
                "id": {
                  "type": "Identifier",
                  "start": 358,
                  "end": 359,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 362,
                  "end": 369,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "Identifier",
                    "start": 368,
                    "end": 369,
                    "name": "y",
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
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 375,
            "end": 391,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 379,
                "end": 390,
                "id": {
                  "type": "Identifier",
                  "start": 379,
                  "end": 380,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 383,
                  "end": 390,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "Identifier",
                    "start": 389,
                    "end": 390,
                    "name": "x",
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
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 395,
      "end": 468,
      "id": {
        "type": "Identifier",
        "start": 404,
        "end": 408,
        "name": "foo6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 411,
        "end": 468,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 417,
            "end": 455,
            "id": {
              "type": "Identifier",
              "start": 426,
              "end": 427,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 430,
              "end": 455,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 440,
                  "end": 449,
                  "argument": {
                    "type": "Identifier",
                    "start": 447,
                    "end": 448,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
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
            "start": 460,
            "end": 466,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 464,
                "end": 465,
                "id": {
                  "type": "Identifier",
                  "start": 464,
                  "end": 465,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 470,
      "end": 535,
      "id": {
        "type": "Identifier",
        "start": 479,
        "end": 483,
        "name": "foo7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 486,
        "end": 535,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 492,
            "end": 522,
            "id": {
              "type": "Identifier",
              "start": 498,
              "end": 499,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 500,
              "end": 522,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 510,
                  "end": 516,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 510,
                    "end": 511,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 514,
                    "end": 515,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": null,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "VariableDeclaration",
            "start": 527,
            "end": 533,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 531,
                "end": 532,
                "id": {
                  "type": "Identifier",
                  "start": 531,
                  "end": 532,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 537,
      "end": 608,
      "id": {
        "type": "Identifier",
        "start": 546,
        "end": 550,
        "name": "foo8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 553,
        "end": 608,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 559,
            "end": 595,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 563,
                "end": 595,
                "id": {
                  "type": "Identifier",
                  "start": 563,
                  "end": 564,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ClassExpression",
                  "start": 567,
                  "end": 595,
                  "id": null,
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 573,
                    "end": 595,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 583,
                        "end": 589,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 583,
                          "end": 584,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 587,
                          "end": 588,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "typeAnnotation": null,
                        "accessibility": null
                      }
                    ]
                  },
                  "decorators": [],
                  "typeParameters": null,
                  "implements": [],
                  "abstract": false,
                  "declare": false,
                  "superTypeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 600,
            "end": 606,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 604,
                "end": 605,
                "id": {
                  "type": "Identifier",
                  "start": 604,
                  "end": 605,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 610,
      "end": 688,
      "id": {
        "type": "Identifier",
        "start": 619,
        "end": 623,
        "name": "foo9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 626,
        "end": 688,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 632,
            "end": 675,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 636,
                "end": 675,
                "id": {
                  "type": "Identifier",
                  "start": 636,
                  "end": 637,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ClassExpression",
                  "start": 640,
                  "end": 675,
                  "id": null,
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 646,
                    "end": 675,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 656,
                        "end": 669,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 663,
                          "end": 664,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 667,
                          "end": 668,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "typeAnnotation": null,
                        "accessibility": null
                      }
                    ]
                  },
                  "decorators": [],
                  "typeParameters": null,
                  "implements": [],
                  "abstract": false,
                  "declare": false,
                  "superTypeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 680,
            "end": 686,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 684,
                "end": 685,
                "id": {
                  "type": "Identifier",
                  "start": 684,
                  "end": 685,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 690,
      "end": 763,
      "id": {
        "type": "Identifier",
        "start": 699,
        "end": 704,
        "name": "foo10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 707,
        "end": 763,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 713,
            "end": 750,
            "id": {
              "type": "Identifier",
              "start": 719,
              "end": 720,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 721,
              "end": 750,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 731,
                  "end": 744,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 738,
                    "end": 739,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 742,
                    "end": 743,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": null,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "VariableDeclaration",
            "start": 755,
            "end": 761,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 759,
                "end": 760,
                "id": {
                  "type": "Identifier",
                  "start": 759,
                  "end": 760,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 765,
      "end": 882,
      "id": {
        "type": "Identifier",
        "start": 774,
        "end": 779,
        "name": "foo11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 782,
        "end": 882,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 788,
            "end": 869,
            "id": {
              "type": "Identifier",
              "start": 797,
              "end": 798,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 802,
              "end": 869,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 812,
                  "end": 863,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 816,
                      "end": 863,
                      "id": {
                        "type": "Identifier",
                        "start": 816,
                        "end": 817,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "ClassExpression",
                        "start": 820,
                        "end": 863,
                        "id": null,
                        "superClass": null,
                        "body": {
                          "type": "ClassBody",
                          "start": 826,
                          "end": 863,
                          "body": [
                            {
                              "type": "PropertyDefinition",
                              "start": 840,
                              "end": 853,
                              "static": true,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 847,
                                "end": 848,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 851,
                                "end": 852,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "decorators": [],
                              "declare": false,
                              "override": false,
                              "optional": false,
                              "definite": false,
                              "readonly": false,
                              "typeAnnotation": null,
                              "accessibility": null
                            }
                          ]
                        },
                        "decorators": [],
                        "typeParameters": null,
                        "implements": [],
                        "abstract": false,
                        "declare": false,
                        "superTypeArguments": null
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "VariableDeclaration",
            "start": 874,
            "end": 880,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 878,
                "end": 879,
                "id": {
                  "type": "Identifier",
                  "start": 878,
                  "end": 879,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 884,
      "end": 1060,
      "id": {
        "type": "Identifier",
        "start": 893,
        "end": 898,
        "name": "foo12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 901,
        "end": 1060,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 907,
            "end": 1047,
            "id": {
              "type": "Identifier",
              "start": 916,
              "end": 917,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 921,
              "end": 1047,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 931,
                  "end": 1041,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 935,
                      "end": 1041,
                      "id": {
                        "type": "Identifier",
                        "start": 935,
                        "end": 936,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "ClassExpression",
                        "start": 939,
                        "end": 1041,
                        "id": null,
                        "superClass": null,
                        "body": {
                          "type": "ClassBody",
                          "start": 945,
                          "end": 1041,
                          "body": [
                            {
                              "type": "PropertyDefinition",
                              "start": 959,
                              "end": 961,
                              "static": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 959,
                                "end": 960,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": null,
                              "decorators": [],
                              "declare": false,
                              "override": false,
                              "optional": false,
                              "definite": false,
                              "readonly": false,
                              "typeAnnotation": null,
                              "accessibility": null
                            },
                            {
                              "type": "MethodDefinition",
                              "start": 974,
                              "end": 1031,
                              "static": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 974,
                                "end": 985,
                                "name": "constructor",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "constructor",
                              "value": {
                                "type": "FunctionExpression",
                                "start": 985,
                                "end": 1031,
                                "id": null,
                                "expression": false,
                                "generator": false,
                                "async": false,
                                "params": [],
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 988,
                                  "end": 1031,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 1006,
                                      "end": 1017,
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "start": 1006,
                                        "end": 1016,
                                        "operator": "=",
                                        "left": {
                                          "type": "MemberExpression",
                                          "start": 1006,
                                          "end": 1012,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 1006,
                                            "end": 1010
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 1011,
                                            "end": 1012,
                                            "name": "a",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "computed": false,
                                          "optional": false
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "start": 1015,
                                          "end": 1016,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        }
                                      },
                                      "directive": null
                                    }
                                  ]
                                },
                                "declare": false,
                                "typeParameters": null,
                                "returnType": null
                              },
                              "decorators": [],
                              "override": false,
                              "optional": false,
                              "accessibility": null
                            }
                          ]
                        },
                        "decorators": [],
                        "typeParameters": null,
                        "implements": [],
                        "abstract": false,
                        "declare": false,
                        "superTypeArguments": null
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1052,
            "end": 1058,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1056,
                "end": 1057,
                "id": {
                  "type": "Identifier",
                  "start": 1056,
                  "end": 1057,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1062,
      "end": 1142,
      "id": {
        "type": "Identifier",
        "start": 1071,
        "end": 1076,
        "name": "foo13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1079,
        "end": 1142,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1085,
            "end": 1130,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1089,
                "end": 1130,
                "id": {
                  "type": "Identifier",
                  "start": 1089,
                  "end": 1090,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1093,
                  "end": 1130,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1103,
                      "end": 1123,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1107,
                        "end": 1108,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 1108,
                        "end": 1123,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 1111,
                          "end": 1123,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 1113,
                              "end": 1121,
                              "argument": {
                                "type": "Identifier",
                                "start": 1120,
                                "end": 1121,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "get",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1135,
            "end": 1140,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1139,
                "end": 1140,
                "id": {
                  "type": "Identifier",
                  "start": 1139,
                  "end": 1140,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1144,
      "end": 1208,
      "id": {
        "type": "Identifier",
        "start": 1153,
        "end": 1158,
        "name": "foo14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1161,
        "end": 1208,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1167,
            "end": 1196,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1171,
                "end": 1196,
                "id": {
                  "type": "Identifier",
                  "start": 1171,
                  "end": 1172,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1175,
                  "end": 1196,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1185,
                      "end": 1189,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1185,
                        "end": 1186,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1188,
                        "end": 1189,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1201,
            "end": 1206,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1205,
                "end": 1206,
                "id": {
                  "type": "Identifier",
                  "start": 1205,
                  "end": 1206,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1210,
      "end": 1584,
      "id": {
        "type": "Identifier",
        "start": 1219,
        "end": 1224,
        "name": "foo15",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1227,
        "end": 1584,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1293,
            "end": 1578,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1299,
                "end": 1577,
                "id": {
                  "type": "ArrayPattern",
                  "start": 1299,
                  "end": 1328,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 1309,
                      "end": 1310,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1320,
                      "end": 1321,
                      "name": "b",
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
                  "type": "CallExpression",
                  "start": 1331,
                  "end": 1577,
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 1332,
                    "end": 1574,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1356,
                      "end": 1574,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1366,
                          "end": 1391,
                          "expression": {
                            "type": "CallExpression",
                            "start": 1366,
                            "end": 1390,
                            "callee": {
                              "type": "ArrowFunctionExpression",
                              "start": 1367,
                              "end": 1387,
                              "id": null,
                              "expression": true,
                              "generator": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "CallExpression",
                                "start": 1373,
                                "end": 1387,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 1373,
                                  "end": 1384,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 1373,
                                    "end": 1380,
                                    "name": "console",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1381,
                                    "end": 1384,
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
                                    "start": 1385,
                                    "end": 1386,
                                    "name": "a",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
                              },
                              "typeParameters": null,
                              "returnType": null
                            },
                            "arguments": [],
                            "optional": false,
                            "typeArguments": null
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1417,
                          "end": 1432,
                          "expression": {
                            "type": "CallExpression",
                            "start": 1417,
                            "end": 1431,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1417,
                              "end": 1428,
                              "object": {
                                "type": "Identifier",
                                "start": 1417,
                                "end": 1424,
                                "name": "console",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1425,
                                "end": 1428,
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
                                "start": 1429,
                                "end": 1430,
                                "name": "a",
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
                          "type": "VariableDeclaration",
                          "start": 1468,
                          "end": 1486,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1474,
                              "end": 1485,
                              "id": {
                                "type": "Identifier",
                                "start": 1474,
                                "end": 1475,
                                "name": "b",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "ArrowFunctionExpression",
                                "start": 1478,
                                "end": 1485,
                                "id": null,
                                "expression": true,
                                "generator": false,
                                "async": false,
                                "params": [],
                                "body": {
                                  "type": "Identifier",
                                  "start": 1484,
                                  "end": 1485,
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
                          "type": "ReturnStatement",
                          "start": 1519,
                          "end": 1568,
                          "argument": {
                            "type": "ArrayExpression",
                            "start": 1526,
                            "end": 1567,
                            "elements": [
                              {
                                "type": "Literal",
                                "start": 1540,
                                "end": 1541,
                                "value": 0,
                                "raw": "0"
                              },
                              {
                                "type": "Literal",
                                "start": 1555,
                                "end": 1556,
                                "value": 0,
                                "raw": "0"
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1334,
                      "end": 1352,
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "start": 1336,
                        "end": 1352,
                        "elementTypes": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1337,
                            "end": 1343
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 1345,
                            "end": 1351
                          }
                        ]
                      }
                    }
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1586,
      "end": 1633,
      "id": {
        "type": "Identifier",
        "start": 1595,
        "end": 1600,
        "name": "foo16",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1603,
        "end": 1633,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1609,
            "end": 1631,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1613,
                "end": 1630,
                "id": {
                  "type": "ArrayPattern",
                  "start": 1613,
                  "end": 1616,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 1614,
                      "end": 1615,
                      "name": "a",
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
                  "type": "CallExpression",
                  "start": 1619,
                  "end": 1630,
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 1620,
                    "end": 1627,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "Identifier",
                      "start": 1626,
                      "end": 1627,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1635,
      "end": 1794,
      "id": {
        "type": "Identifier",
        "start": 1644,
        "end": 1649,
        "name": "foo17",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1652,
        "end": 1794,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1658,
            "end": 1772,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1664,
                "end": 1772,
                "id": {
                  "type": "Identifier",
                  "start": 1664,
                  "end": 1671,
                  "name": "promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1674,
                  "end": 1772,
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 1675,
                    "end": 1769,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": true,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1687,
                      "end": 1769,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1697,
                          "end": 1704,
                          "expression": {
                            "type": "Identifier",
                            "start": 1697,
                            "end": 1704,
                            "name": "promise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1713,
                          "end": 1716,
                          "expression": {
                            "type": "Identifier",
                            "start": 1713,
                            "end": 1716,
                            "name": "foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1725,
                          "end": 1735,
                          "expression": {
                            "type": "AwaitExpression",
                            "start": 1725,
                            "end": 1735,
                            "argument": {
                              "type": "Literal",
                              "start": 1731,
                              "end": 1735,
                              "value": null,
                              "raw": "null"
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1744,
                          "end": 1751,
                          "expression": {
                            "type": "Identifier",
                            "start": 1744,
                            "end": 1751,
                            "name": "promise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1760,
                          "end": 1763,
                          "expression": {
                            "type": "Identifier",
                            "start": 1760,
                            "end": 1763,
                            "name": "foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1778,
            "end": 1792,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1784,
                "end": 1791,
                "id": {
                  "type": "Identifier",
                  "start": 1784,
                  "end": 1787,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1790,
                  "end": 1791,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1806,
      "end": 1904,
      "id": {
        "type": "Identifier",
        "start": 1815,
        "end": 1821,
        "name": "wrapI1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1824,
        "end": 1904,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1830,
            "end": 1902,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1836,
                "end": 1901,
                "id": {
                  "type": "Identifier",
                  "start": 1836,
                  "end": 1840,
                  "name": "iter",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1843,
                  "end": 1901,
                  "callee": {
                    "type": "FunctionExpression",
                    "start": 1844,
                    "end": 1898,
                    "id": {
                      "type": "Identifier",
                      "start": 1854,
                      "end": 1857,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "expression": false,
                    "generator": true,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1860,
                      "end": 1898,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1870,
                          "end": 1875,
                          "expression": {
                            "type": "Identifier",
                            "start": 1870,
                            "end": 1874,
                            "name": "iter",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1884,
                          "end": 1892,
                          "expression": {
                            "type": "YieldExpression",
                            "start": 1884,
                            "end": 1891,
                            "delegate": false,
                            "argument": {
                              "type": "Literal",
                              "start": 1890,
                              "end": 1891,
                              "value": 1,
                              "raw": "1"
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1906,
      "end": 2010,
      "id": {
        "type": "Identifier",
        "start": 1915,
        "end": 1921,
        "name": "wrapI2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1924,
        "end": 2010,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1930,
            "end": 2008,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1936,
                "end": 2007,
                "id": {
                  "type": "Identifier",
                  "start": 1936,
                  "end": 1940,
                  "name": "iter",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1943,
                  "end": 2007,
                  "callee": {
                    "type": "FunctionExpression",
                    "start": 1944,
                    "end": 2004,
                    "id": {
                      "type": "Identifier",
                      "start": 1960,
                      "end": 1963,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "expression": false,
                    "generator": true,
                    "async": true,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1966,
                      "end": 2004,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1976,
                          "end": 1981,
                          "expression": {
                            "type": "Identifier",
                            "start": 1976,
                            "end": 1980,
                            "name": "iter",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1990,
                          "end": 1998,
                          "expression": {
                            "type": "YieldExpression",
                            "start": 1990,
                            "end": 1997,
                            "delegate": false,
                            "argument": {
                              "type": "Literal",
                              "start": 1996,
                              "end": 1997,
                              "value": 1,
                              "raw": "1"
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
