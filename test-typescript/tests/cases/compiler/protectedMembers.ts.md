__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 32,
  "end": 1653,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 32,
      "end": 209,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 40,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 41,
        "end": 209,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 47,
            "end": 67,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "name": "x",
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
            "accessibility": "protected"
          },
          {
            "type": "PropertyDefinition",
            "start": 72,
            "end": 100,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 91,
              "name": "sx",
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
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 105,
            "end": 149,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 116,
              "end": 149,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
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
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 154,
            "end": 207,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 173,
              "name": "sf",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 173,
              "end": 207,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "sx",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
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
            "accessibility": "protected"
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
      "type": "ClassDeclaration",
      "start": 256,
      "end": 411,
      "id": {
        "type": "Identifier",
        "start": 262,
        "end": 264,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 273,
        "end": 275,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 276,
        "end": 411,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 282,
            "end": 338,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 292,
              "end": 293,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 293,
              "end": 338,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                            "name": "f",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
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
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
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
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 343,
            "end": 409,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 360,
              "end": 362,
              "name": "sf",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 362,
              "end": 409,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                            "name": "sf",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
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
                          "name": "sx",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
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
            "accessibility": "protected"
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
      "type": "ClassDeclaration",
      "start": 462,
      "end": 616,
      "id": {
        "type": "Identifier",
        "start": 468,
        "end": 470,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 479,
        "end": 481,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 482,
        "end": 616,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 488,
            "end": 498,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 488,
              "end": 489,
              "name": "x",
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 503,
            "end": 521,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 510,
              "end": 512,
              "name": "sx",
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 526,
            "end": 563,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 526,
              "end": 527,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 527,
              "end": 563,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
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
          },
          {
            "type": "MethodDefinition",
            "start": 568,
            "end": 614,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 575,
              "end": 577,
              "name": "sf",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 577,
              "end": 614,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "sf",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
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
      "start": 618,
      "end": 629,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 622,
          "end": 628,
          "id": {
            "type": "Identifier",
            "start": 622,
            "end": 628,
            "name": "c1",
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
                  "name": "C1",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 630,
      "end": 641,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 634,
          "end": 640,
          "id": {
            "type": "Identifier",
            "start": 634,
            "end": 640,
            "name": "c2",
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
                  "name": "C2",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 642,
      "end": 653,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 646,
          "end": 652,
          "id": {
            "type": "Identifier",
            "start": 646,
            "end": 652,
            "name": "c3",
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
                  "name": "C3",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "c1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 691,
          "end": 692,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
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
            "name": "c1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 697,
            "end": 698,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
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
          "name": "C1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 705,
          "end": 707,
          "name": "sx",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
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
            "name": "C1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 712,
            "end": 714,
            "name": "sf",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
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
          "name": "c2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 755,
          "end": 756,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
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
            "name": "c2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 761,
            "end": 762,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
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
          "name": "C2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 769,
          "end": 771,
          "name": "sx",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
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
            "name": "C2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 776,
            "end": 778,
            "name": "sf",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
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
          "name": "c3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 815,
          "end": 816,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
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
            "name": "c3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 821,
            "end": 822,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
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
          "name": "C3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 829,
          "end": 831,
          "name": "sx",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
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
            "name": "C3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 836,
            "end": 838,
            "name": "sf",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 843,
      "end": 871,
      "id": {
        "type": "Identifier",
        "start": 849,
        "end": 850,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 851,
        "end": 871,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 857,
            "end": 869,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 867,
              "end": 868,
              "name": "x",
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
            "accessibility": "protected"
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
      "type": "ClassDeclaration",
      "start": 873,
      "end": 901,
      "id": {
        "type": "Identifier",
        "start": 879,
        "end": 880,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 889,
        "end": 890,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 891,
        "end": 901,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 897,
            "end": 899,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 897,
              "end": 898,
              "name": "y",
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
      "type": "ClassDeclaration",
      "start": 903,
      "end": 1187,
      "id": {
        "type": "Identifier",
        "start": 909,
        "end": 910,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 919,
        "end": 920,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 921,
        "end": 1187,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 927,
            "end": 929,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 927,
              "end": 928,
              "name": "z",
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
            "start": 934,
            "end": 1185,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 941,
              "end": 944,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 944,
              "end": 1185,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 945,
                  "end": 949,
                  "name": "a",
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
                        "name": "A",
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
                {
                  "type": "Identifier",
                  "start": 951,
                  "end": 955,
                  "name": "b",
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
                        "name": "B",
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
                {
                  "type": "Identifier",
                  "start": 957,
                  "end": 961,
                  "name": "c",
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
                        "name": "C",
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
                {
                  "type": "Identifier",
                  "start": 963,
                  "end": 967,
                  "name": "d",
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
                        "name": "D",
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
                {
                  "type": "Identifier",
                  "start": 969,
                  "end": 973,
                  "name": "e",
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
                        "name": "E",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 987,
                          "end": 988,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1063,
                          "end": 1064,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1139,
                          "end": 1140,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
                          "name": "d",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1156,
                          "end": 1157,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
                          "name": "e",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1173,
                          "end": 1174,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
      "type": "ClassDeclaration",
      "start": 1189,
      "end": 1217,
      "id": {
        "type": "Identifier",
        "start": 1195,
        "end": 1196,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1205,
        "end": 1206,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1207,
        "end": 1217,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1213,
            "end": 1215,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1213,
              "end": 1214,
              "name": "d",
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
      "type": "TSInterfaceDeclaration",
      "start": 1219,
      "end": 1251,
      "id": {
        "type": "Identifier",
        "start": 1229,
        "end": 1230,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1239,
          "end": 1240,
          "expression": {
            "type": "Identifier",
            "start": 1239,
            "end": 1240,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
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
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 1259,
        "end": 1261,
        "name": "CC",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1262,
        "end": 1301,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1268,
            "end": 1299,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1278,
              "end": 1289,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1289,
              "end": 1299,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1292,
                "end": 1299,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "protected"
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
      "type": "ClassDeclaration",
      "start": 1303,
      "end": 1332,
      "id": {
        "type": "Identifier",
        "start": 1309,
        "end": 1311,
        "name": "A1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1312,
        "end": 1332,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1318,
            "end": 1330,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1328,
              "end": 1329,
              "name": "x",
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
            "accessibility": "protected"
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
      "type": "ClassDeclaration",
      "start": 1333,
      "end": 1352,
      "id": {
        "type": "Identifier",
        "start": 1339,
        "end": 1341,
        "name": "B1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1342,
        "end": 1352,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1348,
            "end": 1350,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1348,
              "end": 1349,
              "name": "x",
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
      "start": 1353,
      "end": 1364,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1357,
          "end": 1363,
          "id": {
            "type": "Identifier",
            "start": 1357,
            "end": 1363,
            "name": "a1",
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
                  "name": "A1",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1365,
      "end": 1376,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1369,
          "end": 1375,
          "id": {
            "type": "Identifier",
            "start": 1369,
            "end": 1375,
            "name": "b1",
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
                  "name": "B1",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "a1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1382,
          "end": 1384,
          "name": "b1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "b1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1428,
          "end": 1430,
          "name": "a1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1482,
      "end": 1511,
      "id": {
        "type": "Identifier",
        "start": 1488,
        "end": 1490,
        "name": "A2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1491,
        "end": 1511,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1497,
            "end": 1509,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1507,
              "end": 1508,
              "name": "x",
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
            "accessibility": "protected"
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
      "type": "ClassDeclaration",
      "start": 1512,
      "end": 1542,
      "id": {
        "type": "Identifier",
        "start": 1518,
        "end": 1520,
        "name": "B2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1529,
        "end": 1531,
        "name": "A2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1532,
        "end": 1542,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1538,
            "end": 1540,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1538,
              "end": 1539,
              "name": "x",
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
      "type": "ClassDeclaration",
      "start": 1544,
      "end": 1563,
      "id": {
        "type": "Identifier",
        "start": 1550,
        "end": 1552,
        "name": "A3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1553,
        "end": 1563,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1559,
            "end": 1561,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1559,
              "end": 1560,
              "name": "x",
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
      "type": "ClassDeclaration",
      "start": 1611,
      "end": 1651,
      "id": {
        "type": "Identifier",
        "start": 1617,
        "end": 1619,
        "name": "B3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1628,
        "end": 1630,
        "name": "A3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1631,
        "end": 1651,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1637,
            "end": 1649,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1647,
              "end": 1648,
              "name": "x",
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
            "accessibility": "protected"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
