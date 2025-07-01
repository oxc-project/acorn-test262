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
                    "optional": false,
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
                        "start": 180,
                        "end": 186
                      },
                      "start": 178,
                      "end": 186
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 171,
                    "end": 187
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 196,
                      "end": 205
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 207,
                        "end": 213
                      },
                      "start": 205,
                      "end": 213
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 196,
                    "end": 214
                  }
                ],
                "start": 161,
                "end": 220
              },
              "start": 159,
              "end": 220
            },
            "accessibility": null,
            "static": false,
            "start": 153,
            "end": 221
          }
        ],
        "start": 129,
        "end": 223
      },
      "declare": false,
      "start": 108,
      "end": 223
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
                    "start": 237,
                    "end": 242
                  },
                  "typeArguments": null,
                  "start": 237,
                  "end": 242
                },
                "start": 237,
                "end": 244
              },
              "start": 235,
              "end": 244
            },
            "start": 229,
            "end": 244
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
                      "start": 250,
                      "end": 254
                    },
                    "value": {
                      "type": "Literal",
                      "value": "mower",
                      "raw": "\"mower\"",
                      "start": 256,
                      "end": 263
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 250,
                    "end": 263
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
                      "start": 265,
                      "end": 270
                    },
                    "value": {
                      "type": "Literal",
                      "value": "mowing",
                      "raw": "\"mowing\"",
                      "start": 272,
                      "end": 280
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 265,
                    "end": 280
                  }
                ],
                "start": 248,
                "end": 282
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
                      "start": 286,
                      "end": 290
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 292,
                      "end": 301
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 286,
                    "end": 301
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
                      "start": 303,
                      "end": 308
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 310,
                      "end": 320
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 303,
                    "end": 320
                  }
                ],
                "start": 284,
                "end": 322
              }
            ],
            "start": 247,
            "end": 323
          },
          "definite": false,
          "start": 229,
          "end": 323
        }
      ],
      "declare": false,
      "start": 225,
      "end": 324
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
                    "start": 342,
                    "end": 352
                  },
                  "typeArguments": null,
                  "start": 342,
                  "end": 352
                },
                "start": 342,
                "end": 354
              },
              "start": 340,
              "end": 354
            },
            "start": 329,
            "end": 354
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
                      "start": 360,
                      "end": 364
                    },
                    "value": {
                      "type": "Literal",
                      "value": "mower",
                      "raw": "\"mower\"",
                      "start": 366,
                      "end": 373
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 360,
                    "end": 373
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
                      "start": 375,
                      "end": 381
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
                            "start": 385,
                            "end": 392
                          },
                          "value": {
                            "type": "Literal",
                            "value": "mowing",
                            "raw": "\"mowing\"",
                            "start": 394,
                            "end": 402
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 385,
                          "end": 402
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
                            "start": 404,
                            "end": 413
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 415,
                            "end": 421
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 404,
                          "end": 421
                        }
                      ],
                      "start": 383,
                      "end": 423
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 375,
                    "end": 423
                  }
                ],
                "start": 358,
                "end": 425
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
                      "start": 433,
                      "end": 437
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 439,
                      "end": 448
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 433,
                    "end": 448
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
                      "start": 450,
                      "end": 456
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
                            "start": 460,
                            "end": 467
                          },
                          "value": {
                            "type": "Literal",
                            "value": "trimming",
                            "raw": "\"trimming\"",
                            "start": 469,
                            "end": 479
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 460,
                          "end": 479
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
                            "start": 481,
                            "end": 490
                          },
                          "value": {
                            "type": "Literal",
                            "value": "edging",
                            "raw": "\"edging\"",
                            "start": 492,
                            "end": 500
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 481,
                          "end": 500
                        }
                      ],
                      "start": 458,
                      "end": 502
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 450,
                    "end": 502
                  }
                ],
                "start": 431,
                "end": 504
              }
            ],
            "start": 357,
            "end": 505
          },
          "definite": false,
          "start": 329,
          "end": 505
        }
      ],
      "declare": false,
      "start": 325,
      "end": 506
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 517,
        "end": 526
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
              "start": 542,
              "end": 548
            },
            "start": 535,
            "end": 549
          }
        ],
        "start": 529,
        "end": 551
      },
      "expression": false,
      "start": 508,
      "end": 551
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getMultiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 562,
        "end": 576
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
              "start": 592,
              "end": 603
            },
            "start": 585,
            "end": 604
          }
        ],
        "start": 579,
        "end": 606
      },
      "expression": false,
      "start": 553,
      "end": 606
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
                    "start": 618,
                    "end": 622
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 624,
                    "end": 629
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 618,
                  "end": 629
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 617,
              "end": 631
            },
            "init": null,
            "definite": false,
            "start": 617,
            "end": 631
          }
        ],
        "declare": false,
        "start": 613,
        "end": 631
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 635,
        "end": 641
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
                  "start": 649,
                  "end": 656
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 657,
                  "end": 660
                },
                "optional": false,
                "computed": false,
                "start": 649,
                "end": 660
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 661,
                  "end": 666
                }
              ],
              "optional": false,
              "start": 649,
              "end": 667
            },
            "directive": null,
            "start": 649,
            "end": 668
          }
        ],
        "start": 643,
        "end": 670
      },
      "start": 608,
      "end": 670
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
                    "start": 681,
                    "end": 685
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 687,
                    "end": 692
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 681,
                  "end": 692
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 680,
              "end": 694
            },
            "init": null,
            "definite": false,
            "start": 680,
            "end": 694
          }
        ],
        "declare": false,
        "start": 676,
        "end": 694
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 698,
          "end": 707
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 698,
        "end": 709
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
                  "start": 717,
                  "end": 724
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 725,
                  "end": 728
                },
                "optional": false,
                "computed": false,
                "start": 717,
                "end": 728
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 729,
                  "end": 734
                }
              ],
              "optional": false,
              "start": 717,
              "end": 735
            },
            "directive": null,
            "start": 717,
            "end": 736
          }
        ],
        "start": 711,
        "end": 738
      },
      "start": 671,
      "end": 738
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
                    "start": 749,
                    "end": 753
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 755,
                    "end": 760
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 749,
                  "end": 760
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 748,
              "end": 762
            },
            "init": null,
            "definite": false,
            "start": 748,
            "end": 762
          }
        ],
        "declare": false,
        "start": 744,
        "end": 762
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
                  "start": 769,
                  "end": 773
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 775,
                  "end": 782
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 769,
                "end": 782
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
                  "start": 784,
                  "end": 789
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 791,
                  "end": 799
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 784,
                "end": 799
              }
            ],
            "start": 767,
            "end": 801
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
                  "start": 805,
                  "end": 809
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 811,
                  "end": 820
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 805,
                "end": 820
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
                  "start": 822,
                  "end": 827
                },
                "value": {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 829,
                  "end": 839
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 822,
                "end": 839
              }
            ],
            "start": 803,
            "end": 841
          }
        ],
        "start": 766,
        "end": 842
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
                  "start": 850,
                  "end": 857
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 858,
                  "end": 861
                },
                "optional": false,
                "computed": false,
                "start": 850,
                "end": 861
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 862,
                  "end": 867
                }
              ],
              "optional": false,
              "start": 850,
              "end": 868
            },
            "directive": null,
            "start": 850,
            "end": 869
          }
        ],
        "start": 844,
        "end": 871
      },
      "start": 739,
      "end": 871
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
                    "start": 883,
                    "end": 889
                  },
                  "value": {
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
                          "start": 893,
                          "end": 900
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 902,
                          "end": 910
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 893,
                        "end": 910
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
                          "start": 912,
                          "end": 921
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 923,
                          "end": 933
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 912,
                        "end": 933
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 891,
                    "end": 935
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 883,
                  "end": 935
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 881,
              "end": 937
            },
            "init": null,
            "definite": false,
            "start": 881,
            "end": 937
          }
        ],
        "declare": false,
        "start": 877,
        "end": 937
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 941,
        "end": 952
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
                  "start": 960,
                  "end": 967
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 968,
                  "end": 971
                },
                "optional": false,
                "computed": false,
                "start": 960,
                "end": 971
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 972,
                  "end": 980
                }
              ],
              "optional": false,
              "start": 960,
              "end": 981
            },
            "directive": null,
            "start": 960,
            "end": 982
          }
        ],
        "start": 954,
        "end": 984
      },
      "start": 872,
      "end": 984
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
                    "start": 996,
                    "end": 1002
                  },
                  "value": {
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
                          "start": 1006,
                          "end": 1013
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1015,
                          "end": 1023
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1006,
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1036,
                          "end": 1046
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1025,
                        "end": 1046
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1004,
                    "end": 1048
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 996,
                  "end": 1048
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 994,
              "end": 1050
            },
            "init": null,
            "definite": false,
            "start": 994,
            "end": 1050
          }
        ],
        "declare": false,
        "start": 990,
        "end": 1050
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1054,
          "end": 1068
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1054,
        "end": 1070
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
                  "start": 1078,
                  "end": 1085
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1086,
                  "end": 1089
                },
                "optional": false,
                "computed": false,
                "start": 1078,
                "end": 1089
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1090,
                  "end": 1098
                }
              ],
              "optional": false,
              "start": 1078,
              "end": 1099
            },
            "directive": null,
            "start": 1078,
            "end": 1100
          }
        ],
        "start": 1072,
        "end": 1102
      },
      "start": 985,
      "end": 1102
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
                    "start": 1114,
                    "end": 1120
                  },
                  "value": {
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
                          "start": 1124,
                          "end": 1131
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1133,
                          "end": 1141
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1124,
                        "end": 1141
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
                          "start": 1143,
                          "end": 1152
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1154,
                          "end": 1164
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1143,
                        "end": 1164
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1122,
                    "end": 1166
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1114,
                  "end": 1166
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1112,
              "end": 1168
            },
            "init": null,
            "definite": false,
            "start": 1112,
            "end": 1168
          }
        ],
        "declare": false,
        "start": 1108,
        "end": 1168
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
                  "start": 1175,
                  "end": 1179
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 1181,
                  "end": 1188
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1175,
                "end": 1188
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
                  "start": 1190,
                  "end": 1196
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
                        "start": 1200,
                        "end": 1207
                      },
                      "value": {
                        "type": "Literal",
                        "value": "mowing",
                        "raw": "\"mowing\"",
                        "start": 1209,
                        "end": 1217
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1200,
                      "end": 1217
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
                        "start": 1219,
                        "end": 1228
                      },
                      "value": {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 1230,
                        "end": 1236
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1219,
                      "end": 1236
                    }
                  ],
                  "start": 1198,
                  "end": 1238
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1190,
                "end": 1238
              }
            ],
            "start": 1173,
            "end": 1240
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
                  "start": 1248,
                  "end": 1252
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1254,
                  "end": 1263
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1248,
                "end": 1263
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
                  "start": 1265,
                  "end": 1271
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
                        "start": 1275,
                        "end": 1282
                      },
                      "value": {
                        "type": "Literal",
                        "value": "trimming",
                        "raw": "\"trimming\"",
                        "start": 1284,
                        "end": 1294
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1275,
                      "end": 1294
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
                        "start": 1296,
                        "end": 1305
                      },
                      "value": {
                        "type": "Literal",
                        "value": "edging",
                        "raw": "\"edging\"",
                        "start": 1307,
                        "end": 1315
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1296,
                      "end": 1315
                    }
                  ],
                  "start": 1273,
                  "end": 1317
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1265,
                "end": 1317
              }
            ],
            "start": 1246,
            "end": 1319
          }
        ],
        "start": 1172,
        "end": 1320
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
                  "start": 1328,
                  "end": 1335
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1336,
                  "end": 1339
                },
                "optional": false,
                "computed": false,
                "start": 1328,
                "end": 1339
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1340,
                  "end": 1348
                }
              ],
              "optional": false,
              "start": 1328,
              "end": 1349
            },
            "directive": null,
            "start": 1328,
            "end": 1350
          }
        ],
        "start": 1322,
        "end": 1352
      },
      "start": 1103,
      "end": 1352
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
                    "start": 1364,
                    "end": 1368
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1370,
                    "end": 1375
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1364,
                  "end": 1375
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
                    "start": 1377,
                    "end": 1382
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1384,
                    "end": 1390
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1377,
                  "end": 1390
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1363,
              "end": 1392
            },
            "init": null,
            "definite": false,
            "start": 1363,
            "end": 1392
          }
        ],
        "declare": false,
        "start": 1359,
        "end": 1392
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1396,
        "end": 1402
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
                  "start": 1410,
                  "end": 1417
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1418,
                  "end": 1421
                },
                "optional": false,
                "computed": false,
                "start": 1410,
                "end": 1421
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1422,
                  "end": 1427
                }
              ],
              "optional": false,
              "start": 1410,
              "end": 1428
            },
            "directive": null,
            "start": 1410,
            "end": 1429
          }
        ],
        "start": 1404,
        "end": 1431
      },
      "start": 1354,
      "end": 1431
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
                    "start": 1442,
                    "end": 1446
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1448,
                    "end": 1453
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1442,
                  "end": 1453
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
                    "start": 1455,
                    "end": 1460
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1462,
                    "end": 1468
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1455,
                  "end": 1468
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1441,
              "end": 1470
            },
            "init": null,
            "definite": false,
            "start": 1441,
            "end": 1470
          }
        ],
        "declare": false,
        "start": 1437,
        "end": 1470
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1474,
          "end": 1483
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1474,
        "end": 1485
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
                  "start": 1493,
                  "end": 1500
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1501,
                  "end": 1504
                },
                "optional": false,
                "computed": false,
                "start": 1493,
                "end": 1504
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1505,
                  "end": 1510
                }
              ],
              "optional": false,
              "start": 1493,
              "end": 1511
            },
            "directive": null,
            "start": 1493,
            "end": 1512
          }
        ],
        "start": 1487,
        "end": 1514
      },
      "start": 1432,
      "end": 1514
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
                    "start": 1525,
                    "end": 1529
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1531,
                    "end": 1536
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1525,
                  "end": 1536
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
                    "start": 1538,
                    "end": 1543
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1545,
                    "end": 1551
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1538,
                  "end": 1551
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1524,
              "end": 1553
            },
            "init": null,
            "definite": false,
            "start": 1524,
            "end": 1553
          }
        ],
        "declare": false,
        "start": 1520,
        "end": 1553
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
                  "start": 1560,
                  "end": 1564
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 1566,
                  "end": 1573
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1560,
                "end": 1573
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
                  "start": 1575,
                  "end": 1580
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 1582,
                  "end": 1590
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1575,
                "end": 1590
              }
            ],
            "start": 1558,
            "end": 1592
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
                  "start": 1596,
                  "end": 1600
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1602,
                  "end": 1611
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1596,
                "end": 1611
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
                  "start": 1613,
                  "end": 1618
                },
                "value": {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 1620,
                  "end": 1630
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1613,
                "end": 1630
              }
            ],
            "start": 1594,
            "end": 1632
          }
        ],
        "start": 1557,
        "end": 1633
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
                  "start": 1641,
                  "end": 1648
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1649,
                  "end": 1652
                },
                "optional": false,
                "computed": false,
                "start": 1641,
                "end": 1652
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1653,
                  "end": 1658
                }
              ],
              "optional": false,
              "start": 1641,
              "end": 1659
            },
            "directive": null,
            "start": 1641,
            "end": 1660
          }
        ],
        "start": 1635,
        "end": 1662
      },
      "start": 1515,
      "end": 1662
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
                    "start": 1673,
                    "end": 1677
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1679,
                    "end": 1684
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1673,
                  "end": 1684
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
                    "start": 1686,
                    "end": 1692
                  },
                  "value": {
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
                          "start": 1696,
                          "end": 1703
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1705,
                          "end": 1713
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1696,
                        "end": 1713
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
                          "start": 1715,
                          "end": 1724
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1726,
                          "end": 1736
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1715,
                        "end": 1736
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1694,
                    "end": 1738
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1686,
                  "end": 1738
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1672,
              "end": 1740
            },
            "init": null,
            "definite": false,
            "start": 1672,
            "end": 1740
          }
        ],
        "declare": false,
        "start": 1668,
        "end": 1740
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1744,
        "end": 1755
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
                  "start": 1763,
                  "end": 1770
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1771,
                  "end": 1774
                },
                "optional": false,
                "computed": false,
                "start": 1763,
                "end": 1774
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1775,
                  "end": 1780
                }
              ],
              "optional": false,
              "start": 1763,
              "end": 1781
            },
            "directive": null,
            "start": 1763,
            "end": 1782
          }
        ],
        "start": 1757,
        "end": 1784
      },
      "start": 1663,
      "end": 1784
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
                    "start": 1795,
                    "end": 1799
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1801,
                    "end": 1806
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1795,
                  "end": 1806
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
                    "start": 1808,
                    "end": 1814
                  },
                  "value": {
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
                          "start": 1818,
                          "end": 1825
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1827,
                          "end": 1835
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1818,
                        "end": 1835
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
                          "start": 1837,
                          "end": 1846
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1848,
                          "end": 1858
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1837,
                        "end": 1858
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1816,
                    "end": 1860
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1808,
                  "end": 1860
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1794,
              "end": 1862
            },
            "init": null,
            "definite": false,
            "start": 1794,
            "end": 1862
          }
        ],
        "declare": false,
        "start": 1790,
        "end": 1862
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1866,
          "end": 1880
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1866,
        "end": 1882
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
                  "start": 1890,
                  "end": 1897
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1898,
                  "end": 1901
                },
                "optional": false,
                "computed": false,
                "start": 1890,
                "end": 1901
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1902,
                  "end": 1907
                }
              ],
              "optional": false,
              "start": 1890,
              "end": 1908
            },
            "directive": null,
            "start": 1890,
            "end": 1909
          }
        ],
        "start": 1884,
        "end": 1911
      },
      "start": 1785,
      "end": 1911
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
                    "start": 1922,
                    "end": 1926
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1928,
                    "end": 1933
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1922,
                  "end": 1933
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
                    "start": 1935,
                    "end": 1941
                  },
                  "value": {
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
                          "start": 1945,
                          "end": 1952
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1954,
                          "end": 1962
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1945,
                        "end": 1962
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
                          "start": 1964,
                          "end": 1973
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1975,
                          "end": 1985
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1964,
                        "end": 1985
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1943,
                    "end": 1987
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1935,
                  "end": 1987
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1921,
              "end": 1989
            },
            "init": null,
            "definite": false,
            "start": 1921,
            "end": 1989
          }
        ],
        "declare": false,
        "start": 1917,
        "end": 1989
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
                  "start": 1996,
                  "end": 2000
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 2002,
                  "end": 2009
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1996,
                "end": 2009
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
                  "start": 2011,
                  "end": 2017
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
                        "start": 2021,
                        "end": 2028
                      },
                      "value": {
                        "type": "Literal",
                        "value": "mowing",
                        "raw": "\"mowing\"",
                        "start": 2030,
                        "end": 2038
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2021,
                      "end": 2038
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
                        "start": 2040,
                        "end": 2049
                      },
                      "value": {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2051,
                        "end": 2057
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2040,
                      "end": 2057
                    }
                  ],
                  "start": 2019,
                  "end": 2059
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2011,
                "end": 2059
              }
            ],
            "start": 1994,
            "end": 2061
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
                  "start": 2069,
                  "end": 2073
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 2075,
                  "end": 2084
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2069,
                "end": 2084
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
                  "start": 2086,
                  "end": 2092
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
                        "start": 2096,
                        "end": 2103
                      },
                      "value": {
                        "type": "Literal",
                        "value": "trimming",
                        "raw": "\"trimming\"",
                        "start": 2105,
                        "end": 2115
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2096,
                      "end": 2115
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
                        "start": 2117,
                        "end": 2126
                      },
                      "value": {
                        "type": "Literal",
                        "value": "edging",
                        "raw": "\"edging\"",
                        "start": 2128,
                        "end": 2136
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2117,
                      "end": 2136
                    }
                  ],
                  "start": 2094,
                  "end": 2138
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2086,
                "end": 2138
              }
            ],
            "start": 2067,
            "end": 2140
          }
        ],
        "start": 1993,
        "end": 2141
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
                  "start": 2149,
                  "end": 2156
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2157,
                  "end": 2160
                },
                "optional": false,
                "computed": false,
                "start": 2149,
                "end": 2160
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2161,
                  "end": 2166
                }
              ],
              "optional": false,
              "start": 2149,
              "end": 2167
            },
            "directive": null,
            "start": 2149,
            "end": 2168
          }
        ],
        "start": 2143,
        "end": 2170
      },
      "start": 1912,
      "end": 2170
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2170
}
```
