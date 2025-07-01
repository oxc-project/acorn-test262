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
                            "type": "TSAnyKeyword",
                            "start": 36,
                            "end": 39
                          },
                          "start": 34,
                          "end": 39
                        },
                        "start": 31,
                        "end": 39
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 42,
                        "end": 46
                      },
                      "start": 40,
                      "end": 46
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 27,
                    "end": 47
                  }
                ],
                "start": 21,
                "end": 49
              },
              "start": 19,
              "end": 49
            },
            "start": 12,
            "end": 49
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 49
        }
      ],
      "declare": true,
      "start": 0,
      "end": 49
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 65
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
              "start": 72,
              "end": 76
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 78,
                "end": 84
              },
              "start": 76,
              "end": 84
            },
            "accessibility": null,
            "static": false,
            "start": 72,
            "end": 85
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "skill",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 95
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 97,
                "end": 103
              },
              "start": 95,
              "end": 103
            },
            "accessibility": null,
            "static": false,
            "start": 90,
            "end": 104
          }
        ],
        "start": 66,
        "end": 106
      },
      "declare": false,
      "start": 50,
      "end": 106
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MultiRobot",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 128
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
              "start": 135,
              "end": 139
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 141,
                "end": 147
              },
              "start": 139,
              "end": 147
            },
            "accessibility": null,
            "static": false,
            "start": 135,
            "end": 148
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
              "start": 153,
              "end": 159
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
                      "start": 171,
                      "end": 178
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 181,
                        "end": 187
                      },
                      "start": 179,
                      "end": 187
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 171,
                    "end": 188
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
                      "start": 197,
                      "end": 206
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 209,
                        "end": 215
                      },
                      "start": 207,
                      "end": 215
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 197,
                    "end": 216
                  }
                ],
                "start": 161,
                "end": 222
              },
              "start": 159,
              "end": 222
            },
            "accessibility": null,
            "static": false,
            "start": 153,
            "end": 223
          }
        ],
        "start": 129,
        "end": 225
      },
      "declare": false,
      "start": 108,
      "end": 225
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "robots",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Robot",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 239,
                    "end": 244
                  },
                  "typeArguments": null,
                  "start": 239,
                  "end": 244
                },
                "start": 239,
                "end": 246
              },
              "start": 237,
              "end": 246
            },
            "start": 231,
            "end": 246
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
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
                      "start": 252,
                      "end": 256
                    },
                    "value": {
                      "type": "Literal",
                      "value": "mower",
                      "raw": "\"mower\"",
                      "start": 258,
                      "end": 265
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 252,
                    "end": 265
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skill",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 267,
                      "end": 272
                    },
                    "value": {
                      "type": "Literal",
                      "value": "mowing",
                      "raw": "\"mowing\"",
                      "start": 274,
                      "end": 282
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 267,
                    "end": 282
                  }
                ],
                "start": 250,
                "end": 284
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 288,
                      "end": 292
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 294,
                      "end": 303
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 288,
                    "end": 303
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skill",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 305,
                      "end": 310
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 312,
                      "end": 322
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 305,
                    "end": 322
                  }
                ],
                "start": 286,
                "end": 324
              }
            ],
            "start": 249,
            "end": 325
          },
          "definite": false,
          "start": 231,
          "end": 325
        }
      ],
      "declare": false,
      "start": 227,
      "end": 326
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobots",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MultiRobot",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 344,
                    "end": 354
                  },
                  "typeArguments": null,
                  "start": 344,
                  "end": 354
                },
                "start": 344,
                "end": 356
              },
              "start": 342,
              "end": 356
            },
            "start": 331,
            "end": 356
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
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
                      "start": 362,
                      "end": 366
                    },
                    "value": {
                      "type": "Literal",
                      "value": "mower",
                      "raw": "\"mower\"",
                      "start": 368,
                      "end": 375
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 362,
                    "end": 375
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
                      "start": 377,
                      "end": 383
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
                            "start": 387,
                            "end": 394
                          },
                          "value": {
                            "type": "Literal",
                            "value": "mowing",
                            "raw": "\"mowing\"",
                            "start": 396,
                            "end": 404
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 387,
                          "end": 404
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
                            "start": 406,
                            "end": 415
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 417,
                            "end": 423
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 406,
                          "end": 423
                        }
                      ],
                      "start": 385,
                      "end": 425
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 377,
                    "end": 425
                  }
                ],
                "start": 360,
                "end": 427
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 435,
                      "end": 439
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 441,
                      "end": 450
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 435,
                    "end": 450
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
                      "start": 452,
                      "end": 458
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
                            "start": 462,
                            "end": 469
                          },
                          "value": {
                            "type": "Literal",
                            "value": "trimming",
                            "raw": "\"trimming\"",
                            "start": 471,
                            "end": 481
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 462,
                          "end": 481
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
                            "start": 483,
                            "end": 492
                          },
                          "value": {
                            "type": "Literal",
                            "value": "edging",
                            "raw": "\"edging\"",
                            "start": 494,
                            "end": 502
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 483,
                          "end": 502
                        }
                      ],
                      "start": 460,
                      "end": 504
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 452,
                    "end": 504
                  }
                ],
                "start": 433,
                "end": 506
              }
            ],
            "start": 359,
            "end": 507
          },
          "definite": false,
          "start": 331,
          "end": 507
        }
      ],
      "declare": false,
      "start": 327,
      "end": 508
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 519,
        "end": 528
      },
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
              "type": "Identifier",
              "decorators": [],
              "name": "robots",
              "optional": false,
              "typeAnnotation": null,
              "start": 544,
              "end": 550
            },
            "start": 537,
            "end": 551
          }
        ],
        "start": 531,
        "end": 553
      },
      "expression": false,
      "start": 510,
      "end": 553
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getMultiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 564,
        "end": 578
      },
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
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobots",
              "optional": false,
              "typeAnnotation": null,
              "start": 594,
              "end": 605
            },
            "start": 587,
            "end": 606
          }
        ],
        "start": 581,
        "end": 608
      },
      "expression": false,
      "start": 555,
      "end": 608
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
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
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 620,
                    "end": 624
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 626,
                      "end": 631
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 634,
                      "end": 642
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 626,
                    "end": 642
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 620,
                  "end": 642
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 619,
              "end": 644
            },
            "init": null,
            "definite": false,
            "start": 619,
            "end": 644
          }
        ],
        "declare": false,
        "start": 615,
        "end": 644
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 648,
        "end": 654
      },
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
                  "start": 662,
                  "end": 669
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 670,
                  "end": 673
                },
                "optional": false,
                "computed": false,
                "start": 662,
                "end": 673
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 674,
                  "end": 679
                }
              ],
              "optional": false,
              "start": 662,
              "end": 680
            },
            "directive": null,
            "start": 662,
            "end": 681
          }
        ],
        "start": 656,
        "end": 683
      },
      "start": 610,
      "end": 683
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
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
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 694,
                    "end": 698
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 700,
                      "end": 705
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 708,
                      "end": 716
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 700,
                    "end": 716
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 694,
                  "end": 716
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 693,
              "end": 718
            },
            "init": null,
            "definite": false,
            "start": 693,
            "end": 718
          }
        ],
        "declare": false,
        "start": 689,
        "end": 718
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 722,
          "end": 731
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 722,
        "end": 733
      },
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
                  "start": 741,
                  "end": 748
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 749,
                  "end": 752
                },
                "optional": false,
                "computed": false,
                "start": 741,
                "end": 752
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 753,
                  "end": 758
                }
              ],
              "optional": false,
              "start": 741,
              "end": 759
            },
            "directive": null,
            "start": 741,
            "end": 760
          }
        ],
        "start": 735,
        "end": 762
      },
      "start": 684,
      "end": 762
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
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
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 773,
                    "end": 777
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 779,
                      "end": 784
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 787,
                      "end": 795
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 779,
                    "end": 795
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 773,
                  "end": 795
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 772,
              "end": 797
            },
            "init": null,
            "definite": false,
            "start": 772,
            "end": 797
          }
        ],
        "declare": false,
        "start": 768,
        "end": 797
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
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
                  "start": 804,
                  "end": 808
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 810,
                  "end": 817
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 804,
                "end": 817
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 819,
                  "end": 824
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 826,
                  "end": 834
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 819,
                "end": 834
              }
            ],
            "start": 802,
            "end": 836
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 840,
                  "end": 844
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 846,
                  "end": 855
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 840,
                "end": 855
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 857,
                  "end": 862
                },
                "value": {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 864,
                  "end": 874
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 857,
                "end": 874
              }
            ],
            "start": 838,
            "end": 876
          }
        ],
        "start": 801,
        "end": 877
      },
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
                  "start": 885,
                  "end": 892
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 893,
                  "end": 896
                },
                "optional": false,
                "computed": false,
                "start": 885,
                "end": 896
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 897,
                  "end": 902
                }
              ],
              "optional": false,
              "start": 885,
              "end": 903
            },
            "directive": null,
            "start": 885,
            "end": 904
          }
        ],
        "start": 879,
        "end": 906
      },
      "start": 763,
      "end": 906
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
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
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 918,
                    "end": 924
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
                            "start": 928,
                            "end": 935
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
                              "start": 937,
                              "end": 945
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 948,
                              "end": 957
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 937,
                            "end": 957
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 928,
                          "end": 957
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
                            "start": 959,
                            "end": 968
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
                              "start": 970,
                              "end": 980
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 983,
                              "end": 994
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 970,
                            "end": 994
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 959,
                          "end": 994
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 926,
                      "end": 996
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
                            "start": 1005,
                            "end": 1012
                          },
                          "value": {
                            "type": "Literal",
                            "value": "nosKill",
                            "raw": "\"nosKill\"",
                            "start": 1014,
                            "end": 1023
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1005,
                          "end": 1023
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
                            "start": 1025,
                            "end": 1034
                          },
                          "value": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 1036,
                            "end": 1045
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1025,
                          "end": 1045
                        }
                      ],
                      "start": 1003,
                      "end": 1047
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 926,
                    "end": 1047
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 918,
                  "end": 1047
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 916,
              "end": 1049
            },
            "init": null,
            "definite": false,
            "start": 916,
            "end": 1049
          }
        ],
        "declare": false,
        "start": 912,
        "end": 1049
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1053,
        "end": 1064
      },
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
                  "start": 1072,
                  "end": 1079
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1080,
                  "end": 1083
                },
                "optional": false,
                "computed": false,
                "start": 1072,
                "end": 1083
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1084,
                  "end": 1092
                }
              ],
              "optional": false,
              "start": 1072,
              "end": 1093
            },
            "directive": null,
            "start": 1072,
            "end": 1094
          }
        ],
        "start": 1066,
        "end": 1096
      },
      "start": 907,
      "end": 1096
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
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
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1108,
                    "end": 1114
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
                            "start": 1118,
                            "end": 1125
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
                              "start": 1127,
                              "end": 1135
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 1138,
                              "end": 1147
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1127,
                            "end": 1147
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1118,
                          "end": 1147
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
                            "start": 1149,
                            "end": 1158
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
                              "start": 1160,
                              "end": 1170
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 1173,
                              "end": 1184
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1160,
                            "end": 1184
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1149,
                          "end": 1184
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1116,
                      "end": 1186
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
                            "start": 1195,
                            "end": 1202
                          },
                          "value": {
                            "type": "Literal",
                            "value": "nosKill",
                            "raw": "\"nosKill\"",
                            "start": 1204,
                            "end": 1213
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1195,
                          "end": 1213
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
                            "start": 1215,
                            "end": 1224
                          },
                          "value": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 1226,
                            "end": 1235
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1215,
                          "end": 1235
                        }
                      ],
                      "start": 1193,
                      "end": 1237
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1116,
                    "end": 1237
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1108,
                  "end": 1237
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1106,
              "end": 1239
            },
            "init": null,
            "definite": false,
            "start": 1106,
            "end": 1239
          }
        ],
        "declare": false,
        "start": 1102,
        "end": 1239
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1243,
          "end": 1257
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1243,
        "end": 1259
      },
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
                  "start": 1267,
                  "end": 1274
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1275,
                  "end": 1278
                },
                "optional": false,
                "computed": false,
                "start": 1267,
                "end": 1278
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1279,
                  "end": 1287
                }
              ],
              "optional": false,
              "start": 1267,
              "end": 1288
            },
            "directive": null,
            "start": 1267,
            "end": 1289
          }
        ],
        "start": 1261,
        "end": 1291
      },
      "start": 1097,
      "end": 1291
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
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
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1303,
                    "end": 1309
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
                            "start": 1313,
                            "end": 1320
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
                              "start": 1322,
                              "end": 1330
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 1333,
                              "end": 1342
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1322,
                            "end": 1342
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1313,
                          "end": 1342
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
                            "start": 1344,
                            "end": 1353
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
                              "start": 1355,
                              "end": 1365
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 1368,
                              "end": 1379
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1355,
                            "end": 1379
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1344,
                          "end": 1379
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1311,
                      "end": 1381
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
                            "start": 1390,
                            "end": 1397
                          },
                          "value": {
                            "type": "Literal",
                            "value": "nosKill",
                            "raw": "\"nosKill\"",
                            "start": 1399,
                            "end": 1408
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1390,
                          "end": 1408
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
                            "start": 1410,
                            "end": 1419
                          },
                          "value": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 1421,
                            "end": 1430
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1410,
                          "end": 1430
                        }
                      ],
                      "start": 1388,
                      "end": 1432
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1311,
                    "end": 1432
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1303,
                  "end": 1432
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1301,
              "end": 1434
            },
            "init": null,
            "definite": false,
            "start": 1301,
            "end": 1434
          }
        ],
        "declare": false,
        "start": 1297,
        "end": 1434
      },
      "right": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MultiRobot",
              "optional": false,
              "typeAnnotation": null,
              "start": 1443,
              "end": 1453
            },
            "typeArguments": null,
            "start": 1443,
            "end": 1453
          },
          "start": 1443,
          "end": 1455
        },
        "expression": {
          "type": "ArrayExpression",
          "elements": [
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
                    "start": 1459,
                    "end": 1463
                  },
                  "value": {
                    "type": "Literal",
                    "value": "mower",
                    "raw": "\"mower\"",
                    "start": 1465,
                    "end": 1472
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1459,
                  "end": 1472
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
                    "start": 1474,
                    "end": 1480
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
                          "start": 1484,
                          "end": 1491
                        },
                        "value": {
                          "type": "Literal",
                          "value": "mowing",
                          "raw": "\"mowing\"",
                          "start": 1493,
                          "end": 1501
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1484,
                        "end": 1501
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
                          "start": 1503,
                          "end": 1512
                        },
                        "value": {
                          "type": "Literal",
                          "value": "none",
                          "raw": "\"none\"",
                          "start": 1514,
                          "end": 1520
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1503,
                        "end": 1520
                      }
                    ],
                    "start": 1482,
                    "end": 1522
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1474,
                  "end": 1522
                }
              ],
              "start": 1457,
              "end": 1524
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
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1532,
                    "end": 1536
                  },
                  "value": {
                    "type": "Literal",
                    "value": "trimmer",
                    "raw": "\"trimmer\"",
                    "start": 1538,
                    "end": 1547
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1532,
                  "end": 1547
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
                    "start": 1549,
                    "end": 1555
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
                          "start": 1559,
                          "end": 1566
                        },
                        "value": {
                          "type": "Literal",
                          "value": "trimming",
                          "raw": "\"trimming\"",
                          "start": 1568,
                          "end": 1578
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1559,
                        "end": 1578
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
                          "start": 1580,
                          "end": 1589
                        },
                        "value": {
                          "type": "Literal",
                          "value": "edging",
                          "raw": "\"edging\"",
                          "start": 1591,
                          "end": 1599
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1580,
                        "end": 1599
                      }
                    ],
                    "start": 1557,
                    "end": 1601
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1549,
                  "end": 1601
                }
              ],
              "start": 1530,
              "end": 1603
            }
          ],
          "start": 1456,
          "end": 1604
        },
        "start": 1442,
        "end": 1604
      },
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
                  "start": 1612,
                  "end": 1619
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1620,
                  "end": 1623
                },
                "optional": false,
                "computed": false,
                "start": 1612,
                "end": 1623
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1624,
                  "end": 1632
                }
              ],
              "optional": false,
              "start": 1612,
              "end": 1633
            },
            "directive": null,
            "start": 1612,
            "end": 1634
          }
        ],
        "start": 1606,
        "end": 1636
      },
      "start": 1292,
      "end": 1636
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
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
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1648,
                    "end": 1652
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1654,
                      "end": 1659
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 1662,
                      "end": 1670
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1654,
                    "end": 1670
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1648,
                  "end": 1670
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1672,
                    "end": 1677
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1679,
                      "end": 1685
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 1688,
                      "end": 1697
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1679,
                    "end": 1697
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1672,
                  "end": 1697
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1647,
              "end": 1699
            },
            "init": null,
            "definite": false,
            "start": 1647,
            "end": 1699
          }
        ],
        "declare": false,
        "start": 1643,
        "end": 1699
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1703,
        "end": 1709
      },
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
                  "start": 1717,
                  "end": 1724
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1725,
                  "end": 1728
                },
                "optional": false,
                "computed": false,
                "start": 1717,
                "end": 1728
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1729,
                  "end": 1734
                }
              ],
              "optional": false,
              "start": 1717,
              "end": 1735
            },
            "directive": null,
            "start": 1717,
            "end": 1736
          }
        ],
        "start": 1711,
        "end": 1738
      },
      "start": 1638,
      "end": 1738
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
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
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1749,
                    "end": 1753
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1755,
                      "end": 1760
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 1763,
                      "end": 1771
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1755,
                    "end": 1771
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1749,
                  "end": 1771
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1773,
                    "end": 1778
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1780,
                      "end": 1786
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 1789,
                      "end": 1798
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1780,
                    "end": 1798
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1773,
                  "end": 1798
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1748,
              "end": 1801
            },
            "init": null,
            "definite": false,
            "start": 1748,
            "end": 1801
          }
        ],
        "declare": false,
        "start": 1744,
        "end": 1801
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1805,
          "end": 1814
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1805,
        "end": 1816
      },
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
                  "start": 1824,
                  "end": 1831
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1832,
                  "end": 1835
                },
                "optional": false,
                "computed": false,
                "start": 1824,
                "end": 1835
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1836,
                  "end": 1841
                }
              ],
              "optional": false,
              "start": 1824,
              "end": 1842
            },
            "directive": null,
            "start": 1824,
            "end": 1843
          }
        ],
        "start": 1818,
        "end": 1845
      },
      "start": 1739,
      "end": 1845
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
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
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1856,
                    "end": 1860
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1862,
                      "end": 1867
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 1870,
                      "end": 1878
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1862,
                    "end": 1878
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1856,
                  "end": 1878
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1880,
                    "end": 1885
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1887,
                      "end": 1893
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 1896,
                      "end": 1905
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1887,
                    "end": 1905
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1880,
                  "end": 1905
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1855,
              "end": 1908
            },
            "init": null,
            "definite": false,
            "start": 1855,
            "end": 1908
          }
        ],
        "declare": false,
        "start": 1851,
        "end": 1908
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
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
                  "start": 1915,
                  "end": 1919
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 1921,
                  "end": 1928
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1915,
                "end": 1928
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1930,
                  "end": 1935
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 1937,
                  "end": 1945
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1930,
                "end": 1945
              }
            ],
            "start": 1913,
            "end": 1947
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1951,
                  "end": 1955
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1957,
                  "end": 1966
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1951,
                "end": 1966
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1968,
                  "end": 1973
                },
                "value": {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 1975,
                  "end": 1985
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1968,
                "end": 1985
              }
            ],
            "start": 1949,
            "end": 1987
          }
        ],
        "start": 1912,
        "end": 1988
      },
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
                  "start": 1996,
                  "end": 2003
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2004,
                  "end": 2007
                },
                "optional": false,
                "computed": false,
                "start": 1996,
                "end": 2007
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2008,
                  "end": 2013
                }
              ],
              "optional": false,
              "start": 1996,
              "end": 2014
            },
            "directive": null,
            "start": 1996,
            "end": 2015
          }
        ],
        "start": 1990,
        "end": 2017
      },
      "start": 1846,
      "end": 2017
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
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
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2033,
                    "end": 2037
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2039,
                      "end": 2044
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 2047,
                      "end": 2055
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2039,
                    "end": 2055
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2033,
                  "end": 2055
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
                    "start": 2061,
                    "end": 2067
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
                            "start": 2079,
                            "end": 2086
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
                              "start": 2088,
                              "end": 2096
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 2099,
                              "end": 2108
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2088,
                            "end": 2108
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2079,
                          "end": 2108
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
                            "start": 2118,
                            "end": 2127
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
                              "start": 2129,
                              "end": 2139
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 2142,
                              "end": 2153
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2129,
                            "end": 2153
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2118,
                          "end": 2153
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2069,
                      "end": 2159
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
                            "start": 2164,
                            "end": 2171
                          },
                          "value": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 2173,
                            "end": 2182
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2164,
                          "end": 2182
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
                            "start": 2184,
                            "end": 2193
                          },
                          "value": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 2195,
                            "end": 2204
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2184,
                          "end": 2204
                        }
                      ],
                      "start": 2162,
                      "end": 2206
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2069,
                    "end": 2206
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2061,
                  "end": 2206
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2027,
              "end": 2208
            },
            "init": null,
            "definite": false,
            "start": 2027,
            "end": 2208
          }
        ],
        "declare": false,
        "start": 2023,
        "end": 2208
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 2212,
        "end": 2223
      },
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
                  "start": 2231,
                  "end": 2238
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2239,
                  "end": 2242
                },
                "optional": false,
                "computed": false,
                "start": 2231,
                "end": 2242
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2243,
                  "end": 2248
                }
              ],
              "optional": false,
              "start": 2231,
              "end": 2249
            },
            "directive": null,
            "start": 2231,
            "end": 2250
          }
        ],
        "start": 2225,
        "end": 2252
      },
      "start": 2018,
      "end": 2252
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
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
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2268,
                    "end": 2272
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2274,
                      "end": 2279
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 2282,
                      "end": 2290
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2274,
                    "end": 2290
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2268,
                  "end": 2290
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
                    "start": 2296,
                    "end": 2302
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
                            "start": 2314,
                            "end": 2321
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
                              "start": 2323,
                              "end": 2331
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 2334,
                              "end": 2343
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2323,
                            "end": 2343
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2314,
                          "end": 2343
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
                            "start": 2353,
                            "end": 2362
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
                              "start": 2364,
                              "end": 2374
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 2377,
                              "end": 2388
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2364,
                            "end": 2388
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2353,
                          "end": 2388
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2304,
                      "end": 2394
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
                            "start": 2399,
                            "end": 2406
                          },
                          "value": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 2408,
                            "end": 2417
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2399,
                          "end": 2417
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
                            "start": 2419,
                            "end": 2428
                          },
                          "value": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 2430,
                            "end": 2439
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2419,
                          "end": 2439
                        }
                      ],
                      "start": 2397,
                      "end": 2441
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2304,
                    "end": 2441
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2296,
                  "end": 2441
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2262,
              "end": 2443
            },
            "init": null,
            "definite": false,
            "start": 2262,
            "end": 2443
          }
        ],
        "declare": false,
        "start": 2258,
        "end": 2443
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 2447,
          "end": 2461
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2447,
        "end": 2463
      },
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
                  "start": 2471,
                  "end": 2478
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2479,
                  "end": 2482
                },
                "optional": false,
                "computed": false,
                "start": 2471,
                "end": 2482
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2483,
                  "end": 2488
                }
              ],
              "optional": false,
              "start": 2471,
              "end": 2489
            },
            "directive": null,
            "start": 2471,
            "end": 2490
          }
        ],
        "start": 2465,
        "end": 2492
      },
      "start": 2253,
      "end": 2492
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
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
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2508,
                    "end": 2512
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2514,
                      "end": 2519
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 2522,
                      "end": 2530
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2514,
                    "end": 2530
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2508,
                  "end": 2530
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
                    "start": 2536,
                    "end": 2542
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
                            "start": 2554,
                            "end": 2561
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
                              "start": 2563,
                              "end": 2571
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 2574,
                              "end": 2583
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2563,
                            "end": 2583
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2554,
                          "end": 2583
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
                            "start": 2593,
                            "end": 2602
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
                              "start": 2604,
                              "end": 2614
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 2617,
                              "end": 2628
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2604,
                            "end": 2628
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2593,
                          "end": 2628
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2544,
                      "end": 2634
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
                            "start": 2639,
                            "end": 2646
                          },
                          "value": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 2648,
                            "end": 2657
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2639,
                          "end": 2657
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
                            "start": 2659,
                            "end": 2668
                          },
                          "value": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 2670,
                            "end": 2679
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2659,
                          "end": 2679
                        }
                      ],
                      "start": 2637,
                      "end": 2681
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2544,
                    "end": 2681
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2536,
                  "end": 2681
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2502,
              "end": 2683
            },
            "init": null,
            "definite": false,
            "start": 2502,
            "end": 2683
          }
        ],
        "declare": false,
        "start": 2498,
        "end": 2683
      },
      "right": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MultiRobot",
              "optional": false,
              "typeAnnotation": null,
              "start": 2688,
              "end": 2698
            },
            "typeArguments": null,
            "start": 2688,
            "end": 2698
          },
          "start": 2688,
          "end": 2700
        },
        "expression": {
          "type": "ArrayExpression",
          "elements": [
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
                    "start": 2704,
                    "end": 2708
                  },
                  "value": {
                    "type": "Literal",
                    "value": "mower",
                    "raw": "\"mower\"",
                    "start": 2710,
                    "end": 2717
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2704,
                  "end": 2717
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
                    "start": 2719,
                    "end": 2725
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
                          "start": 2729,
                          "end": 2736
                        },
                        "value": {
                          "type": "Literal",
                          "value": "mowing",
                          "raw": "\"mowing\"",
                          "start": 2738,
                          "end": 2746
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2729,
                        "end": 2746
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
                          "start": 2748,
                          "end": 2757
                        },
                        "value": {
                          "type": "Literal",
                          "value": "none",
                          "raw": "\"none\"",
                          "start": 2759,
                          "end": 2765
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2748,
                        "end": 2765
                      }
                    ],
                    "start": 2727,
                    "end": 2767
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2719,
                  "end": 2767
                }
              ],
              "start": 2702,
              "end": 2769
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
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2777,
                    "end": 2781
                  },
                  "value": {
                    "type": "Literal",
                    "value": "trimmer",
                    "raw": "\"trimmer\"",
                    "start": 2783,
                    "end": 2792
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2777,
                  "end": 2792
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
                    "start": 2794,
                    "end": 2800
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
                          "start": 2804,
                          "end": 2811
                        },
                        "value": {
                          "type": "Literal",
                          "value": "trimming",
                          "raw": "\"trimming\"",
                          "start": 2813,
                          "end": 2823
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2804,
                        "end": 2823
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
                          "start": 2825,
                          "end": 2834
                        },
                        "value": {
                          "type": "Literal",
                          "value": "edging",
                          "raw": "\"edging\"",
                          "start": 2836,
                          "end": 2844
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2825,
                        "end": 2844
                      }
                    ],
                    "start": 2802,
                    "end": 2846
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2794,
                  "end": 2846
                }
              ],
              "start": 2775,
              "end": 2848
            }
          ],
          "start": 2701,
          "end": 2849
        },
        "start": 2687,
        "end": 2849
      },
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
                  "start": 2857,
                  "end": 2864
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2865,
                  "end": 2868
                },
                "optional": false,
                "computed": false,
                "start": 2857,
                "end": 2868
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2869,
                  "end": 2874
                }
              ],
              "optional": false,
              "start": 2857,
              "end": 2875
            },
            "directive": null,
            "start": 2857,
            "end": 2876
          }
        ],
        "start": 2851,
        "end": 2878
      },
      "start": 2493,
      "end": 2878
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2878
}
```
