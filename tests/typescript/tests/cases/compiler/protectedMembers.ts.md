__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 32,
  "end": 1652,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 32,
      "end": 209,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 40,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 41,
        "end": 209,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 47,
            "end": 67,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 66,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 60,
                "end": 66
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected"
          },
          {
            "type": "PropertyDefinition",
            "start": 72,
            "end": 100,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 91,
              "decorators": [],
              "name": "sx",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 91,
              "end": 99,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 93,
                "end": 99
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 105,
            "end": 149,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 116,
              "end": 149,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 119,
                "end": 149,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 129,
                    "end": 143,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 136,
                      "end": 142,
                      "object": {
                        "type": "ThisExpression",
                        "start": 136,
                        "end": 140
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 141,
                        "end": 142,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 154,
            "end": 207,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 173,
              "decorators": [],
              "name": "sf",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 173,
              "end": 207,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 176,
                "end": 207,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 186,
                    "end": 201,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 193,
                      "end": 200,
                      "object": {
                        "type": "ThisExpression",
                        "start": 193,
                        "end": 197
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 198,
                        "end": 200,
                        "decorators": [],
                        "name": "sx",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 256,
      "end": 411,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 262,
        "end": 264,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 273,
        "end": 275,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 276,
        "end": 411,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 282,
            "end": 338,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 292,
              "end": 293,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 293,
              "end": 338,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 296,
                "end": 338,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 306,
                    "end": 332,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 313,
                      "end": 331,
                      "left": {
                        "type": "CallExpression",
                        "start": 313,
                        "end": 322,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 313,
                          "end": 320,
                          "object": {
                            "type": "Super",
                            "start": 313,
                            "end": 318
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 319,
                            "end": 320,
                            "decorators": [],
                            "name": "f",
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
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "start": 325,
                        "end": 331,
                        "object": {
                          "type": "ThisExpression",
                          "start": 325,
                          "end": 329
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 330,
                          "end": 331,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 343,
            "end": 409,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 360,
              "end": 362,
              "decorators": [],
              "name": "sf",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 362,
              "end": 409,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 365,
                "end": 409,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 375,
                    "end": 403,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 382,
                      "end": 402,
                      "left": {
                        "type": "CallExpression",
                        "start": 382,
                        "end": 392,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 382,
                          "end": 390,
                          "object": {
                            "type": "Super",
                            "start": 382,
                            "end": 387
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 388,
                            "end": 390,
                            "decorators": [],
                            "name": "sf",
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
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "start": 395,
                        "end": 402,
                        "object": {
                          "type": "ThisExpression",
                          "start": 395,
                          "end": 399
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 400,
                          "end": 402,
                          "decorators": [],
                          "name": "sx",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 462,
      "end": 616,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 468,
        "end": 470,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 479,
        "end": 481,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 482,
        "end": 616,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 488,
            "end": 498,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 488,
              "end": 489,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 489,
              "end": 497,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 491,
                "end": 497
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 503,
            "end": 521,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 510,
              "end": 512,
              "decorators": [],
              "name": "sx",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 512,
              "end": 520,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 514,
                "end": 520
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 526,
            "end": 563,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 526,
              "end": 527,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 527,
              "end": 563,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 530,
                "end": 563,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 540,
                    "end": 557,
                    "argument": {
                      "type": "CallExpression",
                      "start": 547,
                      "end": 556,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 547,
                        "end": 554,
                        "object": {
                          "type": "Super",
                          "start": 547,
                          "end": 552
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 553,
                          "end": 554,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 568,
            "end": 614,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 575,
              "end": 577,
              "decorators": [],
              "name": "sf",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 577,
              "end": 614,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 580,
                "end": 614,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 590,
                    "end": 608,
                    "argument": {
                      "type": "CallExpression",
                      "start": 597,
                      "end": 607,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 597,
                        "end": 605,
                        "object": {
                          "type": "Super",
                          "start": 597,
                          "end": 602
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 603,
                          "end": 605,
                          "decorators": [],
                          "name": "sf",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 618,
      "end": 629,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 622,
          "end": 628,
          "id": {
            "type": "Identifier",
            "start": 622,
            "end": 628,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 624,
              "end": 628,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 626,
                "end": 628,
                "typeName": {
                  "type": "Identifier",
                  "start": 626,
                  "end": 628,
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 630,
      "end": 641,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 634,
          "end": 640,
          "id": {
            "type": "Identifier",
            "start": 634,
            "end": 640,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 636,
              "end": 640,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 638,
                "end": 640,
                "typeName": {
                  "type": "Identifier",
                  "start": 638,
                  "end": 640,
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 642,
      "end": 653,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 646,
          "end": 652,
          "id": {
            "type": "Identifier",
            "start": 646,
            "end": 652,
            "decorators": [],
            "name": "c3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 648,
              "end": 652,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 650,
                "end": 652,
                "typeName": {
                  "type": "Identifier",
                  "start": 650,
                  "end": 652,
                  "decorators": [],
                  "name": "C3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 688,
      "end": 693,
      "expression": {
        "type": "MemberExpression",
        "start": 688,
        "end": 692,
        "object": {
          "type": "Identifier",
          "start": 688,
          "end": 690,
          "decorators": [],
          "name": "c1",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 691,
          "end": 692,
          "decorators": [],
          "name": "x",
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
      "start": 694,
      "end": 701,
      "expression": {
        "type": "CallExpression",
        "start": 694,
        "end": 700,
        "callee": {
          "type": "MemberExpression",
          "start": 694,
          "end": 698,
          "object": {
            "type": "Identifier",
            "start": 694,
            "end": 696,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 697,
            "end": 698,
            "decorators": [],
            "name": "f",
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
      "start": 702,
      "end": 708,
      "expression": {
        "type": "MemberExpression",
        "start": 702,
        "end": 707,
        "object": {
          "type": "Identifier",
          "start": 702,
          "end": 704,
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 705,
          "end": 707,
          "decorators": [],
          "name": "sx",
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
      "start": 709,
      "end": 717,
      "expression": {
        "type": "CallExpression",
        "start": 709,
        "end": 716,
        "callee": {
          "type": "MemberExpression",
          "start": 709,
          "end": 714,
          "object": {
            "type": "Identifier",
            "start": 709,
            "end": 711,
            "decorators": [],
            "name": "C1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 712,
            "end": 714,
            "decorators": [],
            "name": "sf",
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
      "start": 752,
      "end": 757,
      "expression": {
        "type": "MemberExpression",
        "start": 752,
        "end": 756,
        "object": {
          "type": "Identifier",
          "start": 752,
          "end": 754,
          "decorators": [],
          "name": "c2",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 755,
          "end": 756,
          "decorators": [],
          "name": "x",
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
      "start": 758,
      "end": 765,
      "expression": {
        "type": "CallExpression",
        "start": 758,
        "end": 764,
        "callee": {
          "type": "MemberExpression",
          "start": 758,
          "end": 762,
          "object": {
            "type": "Identifier",
            "start": 758,
            "end": 760,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 761,
            "end": 762,
            "decorators": [],
            "name": "f",
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
      "start": 766,
      "end": 772,
      "expression": {
        "type": "MemberExpression",
        "start": 766,
        "end": 771,
        "object": {
          "type": "Identifier",
          "start": 766,
          "end": 768,
          "decorators": [],
          "name": "C2",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 769,
          "end": 771,
          "decorators": [],
          "name": "sx",
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
      "start": 773,
      "end": 781,
      "expression": {
        "type": "CallExpression",
        "start": 773,
        "end": 780,
        "callee": {
          "type": "MemberExpression",
          "start": 773,
          "end": 778,
          "object": {
            "type": "Identifier",
            "start": 773,
            "end": 775,
            "decorators": [],
            "name": "C2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 776,
            "end": 778,
            "decorators": [],
            "name": "sf",
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
      "start": 812,
      "end": 817,
      "expression": {
        "type": "MemberExpression",
        "start": 812,
        "end": 816,
        "object": {
          "type": "Identifier",
          "start": 812,
          "end": 814,
          "decorators": [],
          "name": "c3",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 815,
          "end": 816,
          "decorators": [],
          "name": "x",
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
      "start": 818,
      "end": 825,
      "expression": {
        "type": "CallExpression",
        "start": 818,
        "end": 824,
        "callee": {
          "type": "MemberExpression",
          "start": 818,
          "end": 822,
          "object": {
            "type": "Identifier",
            "start": 818,
            "end": 820,
            "decorators": [],
            "name": "c3",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 821,
            "end": 822,
            "decorators": [],
            "name": "f",
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
      "start": 826,
      "end": 832,
      "expression": {
        "type": "MemberExpression",
        "start": 826,
        "end": 831,
        "object": {
          "type": "Identifier",
          "start": 826,
          "end": 828,
          "decorators": [],
          "name": "C3",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 829,
          "end": 831,
          "decorators": [],
          "name": "sx",
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
      "start": 833,
      "end": 841,
      "expression": {
        "type": "CallExpression",
        "start": 833,
        "end": 840,
        "callee": {
          "type": "MemberExpression",
          "start": 833,
          "end": 838,
          "object": {
            "type": "Identifier",
            "start": 833,
            "end": 835,
            "decorators": [],
            "name": "C3",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 836,
            "end": 838,
            "decorators": [],
            "name": "sf",
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
      "type": "ClassDeclaration",
      "start": 843,
      "end": 871,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 849,
        "end": 850,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 851,
        "end": 871,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 857,
            "end": 869,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 867,
              "end": 868,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 873,
      "end": 901,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 879,
        "end": 880,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 889,
        "end": 890,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 891,
        "end": 901,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 897,
            "end": 899,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 897,
              "end": 898,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 903,
      "end": 1187,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 909,
        "end": 910,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 919,
        "end": 920,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 921,
        "end": 1187,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 927,
            "end": 929,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 927,
              "end": 928,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 934,
            "end": 1185,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 941,
              "end": 944,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 944,
              "end": 1185,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 945,
                  "end": 949,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 946,
                    "end": 949,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 948,
                      "end": 949,
                      "typeName": {
                        "type": "Identifier",
                        "start": 948,
                        "end": 949,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 951,
                  "end": 955,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 952,
                    "end": 955,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 954,
                      "end": 955,
                      "typeName": {
                        "type": "Identifier",
                        "start": 954,
                        "end": 955,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 957,
                  "end": 961,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 958,
                    "end": 961,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 960,
                      "end": 961,
                      "typeName": {
                        "type": "Identifier",
                        "start": 960,
                        "end": 961,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 963,
                  "end": 967,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 964,
                    "end": 967,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 966,
                      "end": 967,
                      "typeName": {
                        "type": "Identifier",
                        "start": 966,
                        "end": 967,
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 969,
                  "end": 973,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 970,
                    "end": 973,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 972,
                      "end": 973,
                      "typeName": {
                        "type": "Identifier",
                        "start": 972,
                        "end": 973,
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 975,
                "end": 1185,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 985,
                    "end": 993,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 985,
                      "end": 992,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 985,
                        "end": 988,
                        "object": {
                          "type": "Identifier",
                          "start": 985,
                          "end": 986,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 987,
                          "end": 988,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 991,
                        "end": 992,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1061,
                    "end": 1069,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1061,
                      "end": 1068,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1061,
                        "end": 1064,
                        "object": {
                          "type": "Identifier",
                          "start": 1061,
                          "end": 1062,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1063,
                          "end": 1064,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1067,
                        "end": 1068,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1137,
                    "end": 1145,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1137,
                      "end": 1144,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1137,
                        "end": 1140,
                        "object": {
                          "type": "Identifier",
                          "start": 1137,
                          "end": 1138,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1139,
                          "end": 1140,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1143,
                        "end": 1144,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1154,
                    "end": 1162,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1154,
                      "end": 1161,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1154,
                        "end": 1157,
                        "object": {
                          "type": "Identifier",
                          "start": 1154,
                          "end": 1155,
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1156,
                          "end": 1157,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1160,
                        "end": 1161,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1171,
                    "end": 1179,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1171,
                      "end": 1178,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1171,
                        "end": 1174,
                        "object": {
                          "type": "Identifier",
                          "start": 1171,
                          "end": 1172,
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1173,
                          "end": 1174,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1177,
                        "end": 1178,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1189,
      "end": 1217,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1195,
        "end": 1196,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 1205,
        "end": 1206,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1207,
        "end": 1217,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1213,
            "end": 1215,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1213,
              "end": 1214,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1219,
      "end": 1251,
      "id": {
        "type": "Identifier",
        "start": 1229,
        "end": 1230,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1239,
          "end": 1240,
          "expression": {
            "type": "Identifier",
            "start": 1239,
            "end": 1240,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1241,
        "end": 1251,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1247,
            "end": 1249,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1247,
              "end": 1248,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1253,
      "end": 1301,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1259,
        "end": 1261,
        "decorators": [],
        "name": "CC",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1262,
        "end": 1301,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1268,
            "end": 1299,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1278,
              "end": 1289,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1289,
              "end": 1299,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1292,
                "end": 1299,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1303,
      "end": 1332,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1309,
        "end": 1311,
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1312,
        "end": 1332,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1318,
            "end": 1330,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1328,
              "end": 1329,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1333,
      "end": 1352,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1339,
        "end": 1341,
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1342,
        "end": 1352,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1348,
            "end": 1350,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1348,
              "end": 1349,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1353,
      "end": 1364,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1357,
          "end": 1363,
          "id": {
            "type": "Identifier",
            "start": 1357,
            "end": 1363,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1359,
              "end": 1363,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1361,
                "end": 1363,
                "typeName": {
                  "type": "Identifier",
                  "start": 1361,
                  "end": 1363,
                  "decorators": [],
                  "name": "A1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1365,
      "end": 1376,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1369,
          "end": 1375,
          "id": {
            "type": "Identifier",
            "start": 1369,
            "end": 1375,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1371,
              "end": 1375,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1373,
                "end": 1375,
                "typeName": {
                  "type": "Identifier",
                  "start": 1373,
                  "end": 1375,
                  "decorators": [],
                  "name": "B1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1377,
      "end": 1385,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1377,
        "end": 1384,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1377,
          "end": 1379,
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1382,
          "end": 1384,
          "decorators": [],
          "name": "b1",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1423,
      "end": 1431,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1423,
        "end": 1430,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1423,
          "end": 1425,
          "decorators": [],
          "name": "b1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1428,
          "end": 1430,
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1482,
      "end": 1511,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1488,
        "end": 1490,
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1491,
        "end": 1511,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1497,
            "end": 1509,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1507,
              "end": 1508,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1512,
      "end": 1542,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1518,
        "end": 1520,
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 1529,
        "end": 1531,
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1532,
        "end": 1542,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1538,
            "end": 1540,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1538,
              "end": 1539,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1544,
      "end": 1563,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1550,
        "end": 1552,
        "decorators": [],
        "name": "A3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1553,
        "end": 1563,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1559,
            "end": 1561,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1559,
              "end": 1560,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1611,
      "end": 1651,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1617,
        "end": 1619,
        "decorators": [],
        "name": "B3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 1628,
        "end": 1630,
        "decorators": [],
        "name": "A3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1631,
        "end": 1651,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1637,
            "end": 1649,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1647,
              "end": 1648,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected"
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
