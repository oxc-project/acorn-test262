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
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 619,
                "end": 625
              },
              "start": 617,
              "end": 625
            },
            "start": 612,
            "end": 625
          },
          "init": null,
          "definite": false,
          "start": 612,
          "end": 625
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "primaryA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 637,
                "end": 643
              },
              "start": 635,
              "end": 643
            },
            "start": 627,
            "end": 643
          },
          "init": null,
          "definite": false,
          "start": 627,
          "end": 643
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "secondaryA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 657,
                "end": 663
              },
              "start": 655,
              "end": 663
            },
            "start": 645,
            "end": 663
          },
          "init": null,
          "definite": false,
          "start": 645,
          "end": 663
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 668,
                "end": 674
              },
              "start": 666,
              "end": 674
            },
            "start": 665,
            "end": 674
          },
          "init": null,
          "definite": false,
          "start": 665,
          "end": 674
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "skillA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 684,
                "end": 690
              },
              "start": 682,
              "end": 690
            },
            "start": 676,
            "end": 690
          },
          "init": null,
          "definite": false,
          "start": 676,
          "end": 690
        }
      ],
      "declare": false,
      "start": 608,
      "end": 691
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
            "name": "name",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 702,
                "end": 708
              },
              "start": 700,
              "end": 708
            },
            "start": 696,
            "end": 708
          },
          "init": null,
          "definite": false,
          "start": 696,
          "end": 708
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "primary",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 719,
                "end": 725
              },
              "start": 717,
              "end": 725
            },
            "start": 710,
            "end": 725
          },
          "init": null,
          "definite": false,
          "start": 710,
          "end": 725
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "secondary",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 738,
                "end": 744
              },
              "start": 736,
              "end": 744
            },
            "start": 727,
            "end": 744
          },
          "init": null,
          "definite": false,
          "start": 727,
          "end": 744
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "skill",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 753,
                "end": 759
              },
              "start": 751,
              "end": 759
            },
            "start": 746,
            "end": 759
          },
          "init": null,
          "definite": false,
          "start": 746,
          "end": 759
        }
      ],
      "declare": false,
      "start": 692,
      "end": 760
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 768,
              "end": 772
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 774,
              "end": 779
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 768,
            "end": 779
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 767,
        "end": 781
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 785,
        "end": 791
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
                  "start": 799,
                  "end": 806
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 807,
                  "end": 810
                },
                "optional": false,
                "computed": false,
                "start": 799,
                "end": 810
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 811,
                  "end": 816
                }
              ],
              "optional": false,
              "start": 799,
              "end": 817
            },
            "directive": null,
            "start": 799,
            "end": 818
          }
        ],
        "start": 793,
        "end": 820
      },
      "start": 762,
      "end": 820
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 827,
              "end": 831
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 833,
              "end": 838
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 827,
            "end": 838
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 826,
        "end": 840
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 844,
          "end": 853
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 844,
        "end": 855
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
                  "start": 863,
                  "end": 870
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 871,
                  "end": 874
                },
                "optional": false,
                "computed": false,
                "start": 863,
                "end": 874
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 875,
                  "end": 880
                }
              ],
              "optional": false,
              "start": 863,
              "end": 881
            },
            "directive": null,
            "start": 863,
            "end": 882
          }
        ],
        "start": 857,
        "end": 884
      },
      "start": 821,
      "end": 884
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 891,
              "end": 895
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 897,
              "end": 902
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 891,
            "end": 902
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 890,
        "end": 904
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
                  "start": 911,
                  "end": 915
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 917,
                  "end": 924
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 911,
                "end": 924
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
                  "start": 926,
                  "end": 931
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 933,
                  "end": 941
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 926,
                "end": 941
              }
            ],
            "start": 909,
            "end": 943
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
                  "start": 947,
                  "end": 951
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 953,
                  "end": 962
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 947,
                "end": 962
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
                  "start": 964,
                  "end": 969
                },
                "value": {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 971,
                  "end": 981
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 964,
                "end": 981
              }
            ],
            "start": 945,
            "end": 983
          }
        ],
        "start": 908,
        "end": 984
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
                  "start": 992,
                  "end": 999
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1000,
                  "end": 1003
                },
                "optional": false,
                "computed": false,
                "start": 992,
                "end": 1003
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1004,
                  "end": 1009
                }
              ],
              "optional": false,
              "start": 992,
              "end": 1010
            },
            "directive": null,
            "start": 992,
            "end": 1011
          }
        ],
        "start": 986,
        "end": 1013
      },
      "start": 885,
      "end": 1013
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 1021,
              "end": 1027
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
                    "start": 1031,
                    "end": 1038
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primaryA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1040,
                    "end": 1048
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1031,
                  "end": 1048
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
                    "start": 1050,
                    "end": 1059
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondaryA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1061,
                    "end": 1071
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1050,
                  "end": 1071
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1029,
              "end": 1073
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1021,
            "end": 1073
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1019,
        "end": 1075
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1079,
        "end": 1090
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
                  "start": 1098,
                  "end": 1105
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1106,
                  "end": 1109
                },
                "optional": false,
                "computed": false,
                "start": 1098,
                "end": 1109
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1110,
                  "end": 1118
                }
              ],
              "optional": false,
              "start": 1098,
              "end": 1119
            },
            "directive": null,
            "start": 1098,
            "end": 1120
          }
        ],
        "start": 1092,
        "end": 1122
      },
      "start": 1014,
      "end": 1122
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 1130,
              "end": 1136
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
                    "start": 1140,
                    "end": 1147
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primaryA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1149,
                    "end": 1157
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1140,
                  "end": 1157
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
                    "start": 1159,
                    "end": 1168
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondaryA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1170,
                    "end": 1180
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1159,
                  "end": 1180
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1138,
              "end": 1182
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1130,
            "end": 1182
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1128,
        "end": 1184
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1188,
          "end": 1202
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1188,
        "end": 1204
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
                  "start": 1212,
                  "end": 1219
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1220,
                  "end": 1223
                },
                "optional": false,
                "computed": false,
                "start": 1212,
                "end": 1223
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1224,
                  "end": 1232
                }
              ],
              "optional": false,
              "start": 1212,
              "end": 1233
            },
            "directive": null,
            "start": 1212,
            "end": 1234
          }
        ],
        "start": 1206,
        "end": 1236
      },
      "start": 1123,
      "end": 1236
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 1244,
              "end": 1250
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
                    "start": 1254,
                    "end": 1261
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primaryA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1263,
                    "end": 1271
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1254,
                  "end": 1271
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
                    "start": 1273,
                    "end": 1282
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondaryA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1284,
                    "end": 1294
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1273,
                  "end": 1294
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1252,
              "end": 1296
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1244,
            "end": 1296
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1242,
        "end": 1298
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
                  "start": 1305,
                  "end": 1309
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 1311,
                  "end": 1318
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1305,
                "end": 1318
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
                  "start": 1320,
                  "end": 1326
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
                        "start": 1330,
                        "end": 1337
                      },
                      "value": {
                        "type": "Literal",
                        "value": "mowing",
                        "raw": "\"mowing\"",
                        "start": 1339,
                        "end": 1347
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1330,
                      "end": 1347
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
                        "start": 1349,
                        "end": 1358
                      },
                      "value": {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 1360,
                        "end": 1366
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1349,
                      "end": 1366
                    }
                  ],
                  "start": 1328,
                  "end": 1368
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1320,
                "end": 1368
              }
            ],
            "start": 1303,
            "end": 1370
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
                  "start": 1378,
                  "end": 1382
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1384,
                  "end": 1393
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1378,
                "end": 1393
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
                  "start": 1395,
                  "end": 1401
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
                        "start": 1405,
                        "end": 1412
                      },
                      "value": {
                        "type": "Literal",
                        "value": "trimming",
                        "raw": "\"trimming\"",
                        "start": 1414,
                        "end": 1424
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1405,
                      "end": 1424
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
                        "start": 1426,
                        "end": 1435
                      },
                      "value": {
                        "type": "Literal",
                        "value": "edging",
                        "raw": "\"edging\"",
                        "start": 1437,
                        "end": 1445
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1426,
                      "end": 1445
                    }
                  ],
                  "start": 1403,
                  "end": 1447
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1395,
                "end": 1447
              }
            ],
            "start": 1376,
            "end": 1449
          }
        ],
        "start": 1302,
        "end": 1450
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
                  "start": 1458,
                  "end": 1465
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1466,
                  "end": 1469
                },
                "optional": false,
                "computed": false,
                "start": 1458,
                "end": 1469
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1470,
                  "end": 1478
                }
              ],
              "optional": false,
              "start": 1458,
              "end": 1479
            },
            "directive": null,
            "start": 1458,
            "end": 1480
          }
        ],
        "start": 1452,
        "end": 1482
      },
      "start": 1237,
      "end": 1482
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 1489,
              "end": 1493
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1489,
              "end": 1493
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 1489,
            "end": 1493
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1488,
        "end": 1495
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1499,
        "end": 1505
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
                  "start": 1513,
                  "end": 1520
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1521,
                  "end": 1524
                },
                "optional": false,
                "computed": false,
                "start": 1513,
                "end": 1524
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1525,
                  "end": 1530
                }
              ],
              "optional": false,
              "start": 1513,
              "end": 1531
            },
            "directive": null,
            "start": 1513,
            "end": 1532
          }
        ],
        "start": 1507,
        "end": 1534
      },
      "start": 1483,
      "end": 1534
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 1541,
              "end": 1545
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1541,
              "end": 1545
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 1541,
            "end": 1545
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1540,
        "end": 1547
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1551,
          "end": 1560
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1551,
        "end": 1562
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
                  "start": 1570,
                  "end": 1577
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1578,
                  "end": 1581
                },
                "optional": false,
                "computed": false,
                "start": 1570,
                "end": 1581
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1582,
                  "end": 1587
                }
              ],
              "optional": false,
              "start": 1570,
              "end": 1588
            },
            "directive": null,
            "start": 1570,
            "end": 1589
          }
        ],
        "start": 1564,
        "end": 1591
      },
      "start": 1535,
      "end": 1591
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 1598,
              "end": 1602
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1598,
              "end": 1602
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 1598,
            "end": 1602
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1597,
        "end": 1604
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
                  "start": 1611,
                  "end": 1615
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 1617,
                  "end": 1624
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1611,
                "end": 1624
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
                  "start": 1626,
                  "end": 1631
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 1633,
                  "end": 1641
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1626,
                "end": 1641
              }
            ],
            "start": 1609,
            "end": 1643
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
                  "start": 1647,
                  "end": 1651
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1653,
                  "end": 1662
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1647,
                "end": 1662
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
                  "start": 1664,
                  "end": 1669
                },
                "value": {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 1671,
                  "end": 1681
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1664,
                "end": 1681
              }
            ],
            "start": 1645,
            "end": 1683
          }
        ],
        "start": 1608,
        "end": 1684
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
                  "start": 1692,
                  "end": 1699
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1700,
                  "end": 1703
                },
                "optional": false,
                "computed": false,
                "start": 1692,
                "end": 1703
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1704,
                  "end": 1709
                }
              ],
              "optional": false,
              "start": 1692,
              "end": 1710
            },
            "directive": null,
            "start": 1692,
            "end": 1711
          }
        ],
        "start": 1686,
        "end": 1713
      },
      "start": 1592,
      "end": 1713
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 1721,
              "end": 1727
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
                    "start": 1731,
                    "end": 1738
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1731,
                    "end": 1738
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1731,
                  "end": 1738
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
                    "start": 1740,
                    "end": 1749
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1740,
                    "end": 1749
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1740,
                  "end": 1749
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1729,
              "end": 1751
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1721,
            "end": 1751
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1719,
        "end": 1753
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1757,
        "end": 1768
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
                  "start": 1776,
                  "end": 1783
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1784,
                  "end": 1787
                },
                "optional": false,
                "computed": false,
                "start": 1776,
                "end": 1787
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1788,
                  "end": 1796
                }
              ],
              "optional": false,
              "start": 1776,
              "end": 1797
            },
            "directive": null,
            "start": 1776,
            "end": 1798
          }
        ],
        "start": 1770,
        "end": 1800
      },
      "start": 1714,
      "end": 1800
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                    "name": "primary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1818,
                    "end": 1825
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1818,
                  "end": 1825
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
                    "start": 1827,
                    "end": 1836
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1827,
                    "end": 1836
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1827,
                  "end": 1836
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1816,
              "end": 1838
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1808,
            "end": 1838
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1806,
        "end": 1840
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1844,
          "end": 1858
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1844,
        "end": 1860
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
                  "start": 1868,
                  "end": 1875
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1876,
                  "end": 1879
                },
                "optional": false,
                "computed": false,
                "start": 1868,
                "end": 1879
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1880,
                  "end": 1888
                }
              ],
              "optional": false,
              "start": 1868,
              "end": 1889
            },
            "directive": null,
            "start": 1868,
            "end": 1890
          }
        ],
        "start": 1862,
        "end": 1892
      },
      "start": 1801,
      "end": 1892
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 1900,
              "end": 1906
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
                    "start": 1910,
                    "end": 1917
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1910,
                    "end": 1917
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1910,
                  "end": 1917
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
                    "start": 1919,
                    "end": 1928
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1919,
                    "end": 1928
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1919,
                  "end": 1928
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1908,
              "end": 1930
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1900,
            "end": 1930
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1898,
        "end": 1932
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
                  "start": 1939,
                  "end": 1943
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 1945,
                  "end": 1952
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1939,
                "end": 1952
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
                  "start": 1954,
                  "end": 1960
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
                        "start": 1964,
                        "end": 1971
                      },
                      "value": {
                        "type": "Literal",
                        "value": "mowing",
                        "raw": "\"mowing\"",
                        "start": 1973,
                        "end": 1981
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1964,
                      "end": 1981
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
                        "start": 1983,
                        "end": 1992
                      },
                      "value": {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 1994,
                        "end": 2000
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1983,
                      "end": 2000
                    }
                  ],
                  "start": 1962,
                  "end": 2002
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1954,
                "end": 2002
              }
            ],
            "start": 1937,
            "end": 2004
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
                  "start": 2012,
                  "end": 2016
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 2018,
                  "end": 2027
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2012,
                "end": 2027
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
                  "start": 2029,
                  "end": 2035
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
                        "start": 2039,
                        "end": 2046
                      },
                      "value": {
                        "type": "Literal",
                        "value": "trimming",
                        "raw": "\"trimming\"",
                        "start": 2048,
                        "end": 2058
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2039,
                      "end": 2058
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
                        "start": 2060,
                        "end": 2069
                      },
                      "value": {
                        "type": "Literal",
                        "value": "edging",
                        "raw": "\"edging\"",
                        "start": 2071,
                        "end": 2079
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2060,
                      "end": 2079
                    }
                  ],
                  "start": 2037,
                  "end": 2081
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2029,
                "end": 2081
              }
            ],
            "start": 2010,
            "end": 2083
          }
        ],
        "start": 1936,
        "end": 2084
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
                  "start": 2092,
                  "end": 2099
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2100,
                  "end": 2103
                },
                "optional": false,
                "computed": false,
                "start": 2092,
                "end": 2103
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2104,
                  "end": 2112
                }
              ],
              "optional": false,
              "start": 2092,
              "end": 2113
            },
            "directive": null,
            "start": 2092,
            "end": 2114
          }
        ],
        "start": 2086,
        "end": 2116
      },
      "start": 1893,
      "end": 2116
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 2125,
              "end": 2129
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2131,
              "end": 2136
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2125,
            "end": 2136
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
              "start": 2138,
              "end": 2143
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "skillA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2145,
              "end": 2151
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2138,
            "end": 2151
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2124,
        "end": 2153
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 2157,
        "end": 2163
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
                  "start": 2171,
                  "end": 2178
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2179,
                  "end": 2182
                },
                "optional": false,
                "computed": false,
                "start": 2171,
                "end": 2182
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2183,
                  "end": 2188
                }
              ],
              "optional": false,
              "start": 2171,
              "end": 2189
            },
            "directive": null,
            "start": 2171,
            "end": 2190
          }
        ],
        "start": 2165,
        "end": 2192
      },
      "start": 2119,
      "end": 2192
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 2199,
              "end": 2203
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2205,
              "end": 2210
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2199,
            "end": 2210
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
              "start": 2212,
              "end": 2217
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "skillA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2219,
              "end": 2225
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2212,
            "end": 2225
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2198,
        "end": 2227
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 2231,
          "end": 2240
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2231,
        "end": 2242
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
                  "start": 2250,
                  "end": 2257
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2258,
                  "end": 2261
                },
                "optional": false,
                "computed": false,
                "start": 2250,
                "end": 2261
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2262,
                  "end": 2267
                }
              ],
              "optional": false,
              "start": 2250,
              "end": 2268
            },
            "directive": null,
            "start": 2250,
            "end": 2269
          }
        ],
        "start": 2244,
        "end": 2271
      },
      "start": 2193,
      "end": 2271
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 2278,
              "end": 2282
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2284,
              "end": 2289
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2278,
            "end": 2289
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
              "start": 2291,
              "end": 2296
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "skillA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2298,
              "end": 2304
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2291,
            "end": 2304
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2277,
        "end": 2306
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
                  "start": 2313,
                  "end": 2317
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 2319,
                  "end": 2326
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2313,
                "end": 2326
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
                  "start": 2328,
                  "end": 2333
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 2335,
                  "end": 2343
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2328,
                "end": 2343
              }
            ],
            "start": 2311,
            "end": 2345
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
                  "start": 2349,
                  "end": 2353
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 2355,
                  "end": 2364
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2349,
                "end": 2364
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
                  "start": 2366,
                  "end": 2371
                },
                "value": {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 2373,
                  "end": 2383
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2366,
                "end": 2383
              }
            ],
            "start": 2347,
            "end": 2385
          }
        ],
        "start": 2310,
        "end": 2386
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
                  "start": 2394,
                  "end": 2401
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2402,
                  "end": 2405
                },
                "optional": false,
                "computed": false,
                "start": 2394,
                "end": 2405
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2406,
                  "end": 2411
                }
              ],
              "optional": false,
              "start": 2394,
              "end": 2412
            },
            "directive": null,
            "start": 2394,
            "end": 2413
          }
        ],
        "start": 2388,
        "end": 2415
      },
      "start": 2272,
      "end": 2415
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 2422,
              "end": 2426
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2428,
              "end": 2433
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2422,
            "end": 2433
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
              "start": 2435,
              "end": 2441
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
                    "start": 2445,
                    "end": 2452
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primaryA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2454,
                    "end": 2462
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2445,
                  "end": 2462
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
                    "start": 2464,
                    "end": 2473
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondaryA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2475,
                    "end": 2485
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2464,
                  "end": 2485
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2443,
              "end": 2487
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2435,
            "end": 2487
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2421,
        "end": 2489
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 2493,
        "end": 2504
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
                  "start": 2512,
                  "end": 2519
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2520,
                  "end": 2523
                },
                "optional": false,
                "computed": false,
                "start": 2512,
                "end": 2523
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2524,
                  "end": 2529
                }
              ],
              "optional": false,
              "start": 2512,
              "end": 2530
            },
            "directive": null,
            "start": 2512,
            "end": 2531
          }
        ],
        "start": 2506,
        "end": 2533
      },
      "start": 2416,
      "end": 2533
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 2540,
              "end": 2544
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2546,
              "end": 2551
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2540,
            "end": 2551
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
              "start": 2553,
              "end": 2559
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
                    "start": 2563,
                    "end": 2570
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primaryA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2572,
                    "end": 2580
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2563,
                  "end": 2580
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
                    "start": 2582,
                    "end": 2591
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondaryA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2593,
                    "end": 2603
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2582,
                  "end": 2603
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2561,
              "end": 2605
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2553,
            "end": 2605
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2539,
        "end": 2607
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 2611,
          "end": 2625
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2611,
        "end": 2627
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
                  "start": 2635,
                  "end": 2642
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2643,
                  "end": 2646
                },
                "optional": false,
                "computed": false,
                "start": 2635,
                "end": 2646
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2647,
                  "end": 2652
                }
              ],
              "optional": false,
              "start": 2635,
              "end": 2653
            },
            "directive": null,
            "start": 2635,
            "end": 2654
          }
        ],
        "start": 2629,
        "end": 2656
      },
      "start": 2534,
      "end": 2656
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 2663,
              "end": 2667
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2669,
              "end": 2674
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2663,
            "end": 2674
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
              "start": 2676,
              "end": 2682
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
                    "start": 2686,
                    "end": 2693
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primaryA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2695,
                    "end": 2703
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2686,
                  "end": 2703
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
                    "start": 2705,
                    "end": 2714
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondaryA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2716,
                    "end": 2726
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2705,
                  "end": 2726
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2684,
              "end": 2728
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2676,
            "end": 2728
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2662,
        "end": 2730
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
                  "start": 2737,
                  "end": 2741
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 2743,
                  "end": 2750
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2737,
                "end": 2750
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
                  "start": 2752,
                  "end": 2758
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
                        "start": 2762,
                        "end": 2769
                      },
                      "value": {
                        "type": "Literal",
                        "value": "mowing",
                        "raw": "\"mowing\"",
                        "start": 2771,
                        "end": 2779
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2762,
                      "end": 2779
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
                        "start": 2781,
                        "end": 2790
                      },
                      "value": {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2792,
                        "end": 2798
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2781,
                      "end": 2798
                    }
                  ],
                  "start": 2760,
                  "end": 2800
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2752,
                "end": 2800
              }
            ],
            "start": 2735,
            "end": 2802
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
                  "start": 2810,
                  "end": 2814
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 2816,
                  "end": 2825
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2810,
                "end": 2825
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
                  "start": 2827,
                  "end": 2833
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
                        "start": 2837,
                        "end": 2844
                      },
                      "value": {
                        "type": "Literal",
                        "value": "trimming",
                        "raw": "\"trimming\"",
                        "start": 2846,
                        "end": 2856
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2837,
                      "end": 2856
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
                        "start": 2858,
                        "end": 2867
                      },
                      "value": {
                        "type": "Literal",
                        "value": "edging",
                        "raw": "\"edging\"",
                        "start": 2869,
                        "end": 2877
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2858,
                      "end": 2877
                    }
                  ],
                  "start": 2835,
                  "end": 2879
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2827,
                "end": 2879
              }
            ],
            "start": 2808,
            "end": 2881
          }
        ],
        "start": 2734,
        "end": 2882
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
                  "start": 2890,
                  "end": 2897
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2898,
                  "end": 2901
                },
                "optional": false,
                "computed": false,
                "start": 2890,
                "end": 2901
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2902,
                  "end": 2907
                }
              ],
              "optional": false,
              "start": 2890,
              "end": 2908
            },
            "directive": null,
            "start": 2890,
            "end": 2909
          }
        ],
        "start": 2884,
        "end": 2911
      },
      "start": 2657,
      "end": 2911
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 2918,
              "end": 2922
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2918,
              "end": 2922
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 2918,
            "end": 2922
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
              "start": 2924,
              "end": 2929
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "skill",
              "optional": false,
              "typeAnnotation": null,
              "start": 2924,
              "end": 2929
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 2924,
            "end": 2929
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2917,
        "end": 2931
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 2935,
        "end": 2941
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
                  "start": 2949,
                  "end": 2956
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2957,
                  "end": 2960
                },
                "optional": false,
                "computed": false,
                "start": 2949,
                "end": 2960
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2961,
                  "end": 2966
                }
              ],
              "optional": false,
              "start": 2949,
              "end": 2967
            },
            "directive": null,
            "start": 2949,
            "end": 2968
          }
        ],
        "start": 2943,
        "end": 2970
      },
      "start": 2912,
      "end": 2970
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 2977,
              "end": 2981
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2977,
              "end": 2981
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 2977,
            "end": 2981
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
              "start": 2983,
              "end": 2988
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "skill",
              "optional": false,
              "typeAnnotation": null,
              "start": 2983,
              "end": 2988
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 2983,
            "end": 2988
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2976,
        "end": 2990
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 2994,
          "end": 3003
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2994,
        "end": 3005
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
                  "start": 3013,
                  "end": 3020
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3021,
                  "end": 3024
                },
                "optional": false,
                "computed": false,
                "start": 3013,
                "end": 3024
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3025,
                  "end": 3030
                }
              ],
              "optional": false,
              "start": 3013,
              "end": 3031
            },
            "directive": null,
            "start": 3013,
            "end": 3032
          }
        ],
        "start": 3007,
        "end": 3034
      },
      "start": 2971,
      "end": 3034
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 3041,
              "end": 3045
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3041,
              "end": 3045
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 3041,
            "end": 3045
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
              "start": 3047,
              "end": 3052
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "skill",
              "optional": false,
              "typeAnnotation": null,
              "start": 3047,
              "end": 3052
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 3047,
            "end": 3052
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 3040,
        "end": 3054
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
                  "start": 3061,
                  "end": 3065
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 3067,
                  "end": 3074
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3061,
                "end": 3074
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
                  "start": 3076,
                  "end": 3081
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 3083,
                  "end": 3091
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3076,
                "end": 3091
              }
            ],
            "start": 3059,
            "end": 3093
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
                  "start": 3097,
                  "end": 3101
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 3103,
                  "end": 3112
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3097,
                "end": 3112
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
                  "start": 3114,
                  "end": 3119
                },
                "value": {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 3121,
                  "end": 3131
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3114,
                "end": 3131
              }
            ],
            "start": 3095,
            "end": 3133
          }
        ],
        "start": 3058,
        "end": 3134
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
                  "start": 3142,
                  "end": 3149
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3150,
                  "end": 3153
                },
                "optional": false,
                "computed": false,
                "start": 3142,
                "end": 3153
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3154,
                  "end": 3159
                }
              ],
              "optional": false,
              "start": 3142,
              "end": 3160
            },
            "directive": null,
            "start": 3142,
            "end": 3161
          }
        ],
        "start": 3136,
        "end": 3163
      },
      "start": 3035,
      "end": 3163
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 3170,
              "end": 3174
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3170,
              "end": 3174
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 3170,
            "end": 3174
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
              "start": 3176,
              "end": 3182
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
                    "start": 3186,
                    "end": 3193
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3186,
                    "end": 3193
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3186,
                  "end": 3193
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
                    "start": 3195,
                    "end": 3204
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3195,
                    "end": 3204
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3195,
                  "end": 3204
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 3184,
              "end": 3206
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 3176,
            "end": 3206
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 3169,
        "end": 3208
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 3212,
        "end": 3223
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
                  "start": 3231,
                  "end": 3238
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3239,
                  "end": 3242
                },
                "optional": false,
                "computed": false,
                "start": 3231,
                "end": 3242
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3243,
                  "end": 3248
                }
              ],
              "optional": false,
              "start": 3231,
              "end": 3249
            },
            "directive": null,
            "start": 3231,
            "end": 3250
          }
        ],
        "start": 3225,
        "end": 3252
      },
      "start": 3164,
      "end": 3252
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 3259,
              "end": 3263
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3259,
              "end": 3263
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 3259,
            "end": 3263
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
              "start": 3265,
              "end": 3271
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
                    "start": 3275,
                    "end": 3282
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3275,
                    "end": 3282
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3275,
                  "end": 3282
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
                    "start": 3284,
                    "end": 3293
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3284,
                    "end": 3293
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3284,
                  "end": 3293
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 3273,
              "end": 3295
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 3265,
            "end": 3295
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 3258,
        "end": 3297
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 3301,
          "end": 3315
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 3301,
        "end": 3317
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
                  "start": 3325,
                  "end": 3332
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3333,
                  "end": 3336
                },
                "optional": false,
                "computed": false,
                "start": 3325,
                "end": 3336
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3337,
                  "end": 3342
                }
              ],
              "optional": false,
              "start": 3325,
              "end": 3343
            },
            "directive": null,
            "start": 3325,
            "end": 3344
          }
        ],
        "start": 3319,
        "end": 3346
      },
      "start": 3253,
      "end": 3346
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 3353,
              "end": 3357
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3353,
              "end": 3357
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 3353,
            "end": 3357
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
              "start": 3359,
              "end": 3365
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
                    "start": 3369,
                    "end": 3376
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3369,
                    "end": 3376
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3369,
                  "end": 3376
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
                    "start": 3378,
                    "end": 3387
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3378,
                    "end": 3387
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3378,
                  "end": 3387
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 3367,
              "end": 3389
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 3359,
            "end": 3389
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 3352,
        "end": 3391
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
                  "start": 3398,
                  "end": 3402
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 3404,
                  "end": 3411
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3398,
                "end": 3411
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
                  "start": 3413,
                  "end": 3419
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
                        "start": 3423,
                        "end": 3430
                      },
                      "value": {
                        "type": "Literal",
                        "value": "mowing",
                        "raw": "\"mowing\"",
                        "start": 3432,
                        "end": 3440
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3423,
                      "end": 3440
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
                        "start": 3442,
                        "end": 3451
                      },
                      "value": {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 3453,
                        "end": 3459
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3442,
                      "end": 3459
                    }
                  ],
                  "start": 3421,
                  "end": 3461
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3413,
                "end": 3461
              }
            ],
            "start": 3396,
            "end": 3463
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
                  "start": 3471,
                  "end": 3475
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 3477,
                  "end": 3486
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3471,
                "end": 3486
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
                  "start": 3488,
                  "end": 3494
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
                        "start": 3498,
                        "end": 3505
                      },
                      "value": {
                        "type": "Literal",
                        "value": "trimming",
                        "raw": "\"trimming\"",
                        "start": 3507,
                        "end": 3517
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3498,
                      "end": 3517
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
                        "start": 3519,
                        "end": 3528
                      },
                      "value": {
                        "type": "Literal",
                        "value": "edging",
                        "raw": "\"edging\"",
                        "start": 3530,
                        "end": 3538
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3519,
                      "end": 3538
                    }
                  ],
                  "start": 3496,
                  "end": 3540
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3488,
                "end": 3540
              }
            ],
            "start": 3469,
            "end": 3542
          }
        ],
        "start": 3395,
        "end": 3543
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
                  "start": 3551,
                  "end": 3558
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3559,
                  "end": 3562
                },
                "optional": false,
                "computed": false,
                "start": 3551,
                "end": 3562
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3563,
                  "end": 3568
                }
              ],
              "optional": false,
              "start": 3551,
              "end": 3569
            },
            "directive": null,
            "start": 3551,
            "end": 3570
          }
        ],
        "start": 3545,
        "end": 3572
      },
      "start": 3347,
      "end": 3572
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3572
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
    "value": "any",
    "start": 36,
    "end": 39,
    "range": [
      36,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 42,
    "end": 46,
    "range": [
      42,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 50,
    "end": 59,
    "range": [
      50,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 60,
    "end": 65,
    "range": [
      60,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 72,
    "end": 76,
    "range": [
      72,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 78,
    "end": 84,
    "range": [
      78,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 90,
    "end": 95,
    "range": [
      90,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 97,
    "end": 103,
    "range": [
      97,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 108,
    "end": 117,
    "range": [
      108,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 118,
    "end": 128,
    "range": [
      118,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 135,
    "end": 139,
    "range": [
      135,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 141,
    "end": 147,
    "range": [
      141,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 153,
    "end": 159,
    "range": [
      153,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 171,
    "end": 178,
    "range": [
      171,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 180,
    "end": 186,
    "range": [
      180,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 196,
    "end": 205,
    "range": [
      196,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 207,
    "end": 213,
    "range": [
      207,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 225,
    "end": 228,
    "range": [
      225,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 229,
    "end": 235,
    "range": [
      229,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 237,
    "end": 242,
    "range": [
      237,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 250,
    "end": 254,
    "range": [
      250,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 256,
    "end": 263,
    "range": [
      256,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 265,
    "end": 270,
    "range": [
      265,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 272,
    "end": 280,
    "range": [
      272,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 286,
    "end": 290,
    "range": [
      286,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 292,
    "end": 301,
    "range": [
      292,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 303,
    "end": 308,
    "range": [
      303,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 310,
    "end": 320,
    "range": [
      310,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 325,
    "end": 328,
    "range": [
      325,
      328
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 329,
    "end": 340,
    "range": [
      329,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 342,
    "end": 352,
    "range": [
      342,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 360,
    "end": 364,
    "range": [
      360,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 366,
    "end": 373,
    "range": [
      366,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 375,
    "end": 381,
    "range": [
      375,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 385,
    "end": 392,
    "range": [
      385,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 394,
    "end": 402,
    "range": [
      394,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 404,
    "end": 413,
    "range": [
      404,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 415,
    "end": 421,
    "range": [
      415,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 433,
    "end": 437,
    "range": [
      433,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 439,
    "end": 448,
    "range": [
      439,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 450,
    "end": 456,
    "range": [
      450,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 460,
    "end": 467,
    "range": [
      460,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 469,
    "end": 479,
    "range": [
      469,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 481,
    "end": 490,
    "range": [
      481,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 492,
    "end": 500,
    "range": [
      492,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 508,
    "end": 516,
    "range": [
      508,
      516
    ]
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 517,
    "end": 526,
    "range": [
      517,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 535,
    "end": 541,
    "range": [
      535,
      541
    ]
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 542,
    "end": 548,
    "range": [
      542,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 553,
    "end": 561,
    "range": [
      553,
      561
    ]
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 562,
    "end": 576,
    "range": [
      562,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 585,
    "end": 591,
    "range": [
      585,
      591
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 592,
    "end": 603,
    "range": [
      592,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 608,
    "end": 611,
    "range": [
      608,
      611
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 612,
    "end": 617,
    "range": [
      612,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 619,
    "end": 625,
    "range": [
      619,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 627,
    "end": 635,
    "range": [
      627,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 637,
    "end": 643,
    "range": [
      637,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 645,
    "end": 655,
    "range": [
      645,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 657,
    "end": 663,
    "range": [
      657,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 668,
    "end": 674,
    "range": [
      668,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 676,
    "end": 682,
    "range": [
      676,
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
    "type": "Identifier",
    "value": "string",
    "start": 684,
    "end": 690,
    "range": [
      684,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 692,
    "end": 695,
    "range": [
      692,
      695
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 696,
    "end": 700,
    "range": [
      696,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 702,
    "end": 708,
    "range": [
      702,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 710,
    "end": 717,
    "range": [
      710,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 719,
    "end": 725,
    "range": [
      719,
      725
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 727,
    "end": 736,
    "range": [
      727,
      736
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 738,
    "end": 744,
    "range": [
      738,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 746,
    "end": 751,
    "range": [
      746,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 753,
    "end": 759,
    "range": [
      753,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 762,
    "end": 765,
    "range": [
      762,
      765
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 768,
    "end": 772,
    "range": [
      768,
      772
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 774,
    "end": 779,
    "range": [
      774,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 782,
    "end": 784,
    "range": [
      782,
      784
    ]
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 785,
    "end": 791,
    "range": [
      785,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 799,
    "end": 806,
    "range": [
      799,
      806
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 807,
    "end": 810,
    "range": [
      807,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 811,
    "end": 816,
    "range": [
      811,
      816
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 821,
    "end": 824,
    "range": [
      821,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 827,
    "end": 831,
    "range": [
      827,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 833,
    "end": 838,
    "range": [
      833,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 841,
    "end": 843,
    "range": [
      841,
      843
    ]
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 844,
    "end": 853,
    "range": [
      844,
      853
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 854,
    "end": 855,
    "range": [
      854,
      855
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 863,
    "end": 870,
    "range": [
      863,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 871,
    "end": 874,
    "range": [
      871,
      874
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 874,
    "end": 875,
    "range": [
      874,
      875
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 875,
    "end": 880,
    "range": [
      875,
      880
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 885,
    "end": 888,
    "range": [
      885,
      888
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
    "type": "Punctuator",
    "value": "{",
    "start": 890,
    "end": 891,
    "range": [
      890,
      891
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 891,
    "end": 895,
    "range": [
      891,
      895
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 897,
    "end": 902,
    "range": [
      897,
      902
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 905,
    "end": 907,
    "range": [
      905,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 911,
    "end": 915,
    "range": [
      911,
      915
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 915,
    "end": 916,
    "range": [
      915,
      916
    ]
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 917,
    "end": 924,
    "range": [
      917,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 926,
    "end": 931,
    "range": [
      926,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 933,
    "end": 941,
    "range": [
      933,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 943,
    "end": 944,
    "range": [
      943,
      944
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 945,
    "end": 946,
    "range": [
      945,
      946
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 947,
    "end": 951,
    "range": [
      947,
      951
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 951,
    "end": 952,
    "range": [
      951,
      952
    ]
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 953,
    "end": 962,
    "range": [
      953,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 964,
    "end": 969,
    "range": [
      964,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 971,
    "end": 981,
    "range": [
      971,
      981
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 982,
    "end": 983,
    "range": [
      982,
      983
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 983,
    "end": 984,
    "range": [
      983,
      984
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 992,
    "end": 999,
    "range": [
      992,
      999
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1000,
    "end": 1003,
    "range": [
      1000,
      1003
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1003,
    "end": 1004,
    "range": [
      1003,
      1004
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1004,
    "end": 1009,
    "range": [
      1004,
      1009
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1009,
    "end": 1010,
    "range": [
      1009,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1012,
    "end": 1013,
    "range": [
      1012,
      1013
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1014,
    "end": 1017,
    "range": [
      1014,
      1017
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1018,
    "end": 1019,
    "range": [
      1018,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1021,
    "end": 1027,
    "range": [
      1021,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1031,
    "end": 1038,
    "range": [
      1031,
      1038
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1040,
    "end": 1048,
    "range": [
      1040,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1050,
    "end": 1059,
    "range": [
      1050,
      1059
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 1061,
    "end": 1071,
    "range": [
      1061,
      1071
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1074,
    "end": 1075,
    "range": [
      1074,
      1075
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1076,
    "end": 1078,
    "range": [
      1076,
      1078
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 1079,
    "end": 1090,
    "range": [
      1079,
      1090
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1090,
    "end": 1091,
    "range": [
      1090,
      1091
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1092,
    "end": 1093,
    "range": [
      1092,
      1093
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1098,
    "end": 1105,
    "range": [
      1098,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1106,
    "end": 1109,
    "range": [
      1106,
      1109
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1109,
    "end": 1110,
    "range": [
      1109,
      1110
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1110,
    "end": 1118,
    "range": [
      1110,
      1118
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1118,
    "end": 1119,
    "range": [
      1118,
      1119
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1119,
    "end": 1120,
    "range": [
      1119,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1121,
    "end": 1122,
    "range": [
      1121,
      1122
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1123,
    "end": 1126,
    "range": [
      1123,
      1126
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1127,
    "end": 1128,
    "range": [
      1127,
      1128
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1130,
    "end": 1136,
    "range": [
      1130,
      1136
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1136,
    "end": 1137,
    "range": [
      1136,
      1137
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1140,
    "end": 1147,
    "range": [
      1140,
      1147
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1147,
    "end": 1148,
    "range": [
      1147,
      1148
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1149,
    "end": 1157,
    "range": [
      1149,
      1157
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1157,
    "end": 1158,
    "range": [
      1157,
      1158
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1159,
    "end": 1168,
    "range": [
      1159,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 1170,
    "end": 1180,
    "range": [
      1170,
      1180
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1185,
    "end": 1187,
    "range": [
      1185,
      1187
    ]
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 1188,
    "end": 1202,
    "range": [
      1188,
      1202
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1202,
    "end": 1203,
    "range": [
      1202,
      1203
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1203,
    "end": 1204,
    "range": [
      1203,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1204,
    "end": 1205,
    "range": [
      1204,
      1205
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1206,
    "end": 1207,
    "range": [
      1206,
      1207
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1212,
    "end": 1219,
    "range": [
      1212,
      1219
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1219,
    "end": 1220,
    "range": [
      1219,
      1220
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1220,
    "end": 1223,
    "range": [
      1220,
      1223
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1224,
    "end": 1232,
    "range": [
      1224,
      1232
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1232,
    "end": 1233,
    "range": [
      1232,
      1233
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1235,
    "end": 1236,
    "range": [
      1235,
      1236
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1237,
    "end": 1240,
    "range": [
      1237,
      1240
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1242,
    "end": 1243,
    "range": [
      1242,
      1243
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1244,
    "end": 1250,
    "range": [
      1244,
      1250
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1250,
    "end": 1251,
    "range": [
      1250,
      1251
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1252,
    "end": 1253,
    "range": [
      1252,
      1253
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1254,
    "end": 1261,
    "range": [
      1254,
      1261
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1261,
    "end": 1262,
    "range": [
      1261,
      1262
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1263,
    "end": 1271,
    "range": [
      1263,
      1271
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1271,
    "end": 1272,
    "range": [
      1271,
      1272
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1273,
    "end": 1282,
    "range": [
      1273,
      1282
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1282,
    "end": 1283,
    "range": [
      1282,
      1283
    ]
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 1284,
    "end": 1294,
    "range": [
      1284,
      1294
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1295,
    "end": 1296,
    "range": [
      1295,
      1296
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1299,
    "end": 1301,
    "range": [
      1299,
      1301
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1302,
    "end": 1303,
    "range": [
      1302,
      1303
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1303,
    "end": 1304,
    "range": [
      1303,
      1304
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1305,
    "end": 1309,
    "range": [
      1305,
      1309
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1309,
    "end": 1310,
    "range": [
      1309,
      1310
    ]
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 1311,
    "end": 1318,
    "range": [
      1311,
      1318
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1318,
    "end": 1319,
    "range": [
      1318,
      1319
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1320,
    "end": 1326,
    "range": [
      1320,
      1326
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1326,
    "end": 1327,
    "range": [
      1326,
      1327
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1328,
    "end": 1329,
    "range": [
      1328,
      1329
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1330,
    "end": 1337,
    "range": [
      1330,
      1337
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1337,
    "end": 1338,
    "range": [
      1337,
      1338
    ]
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 1339,
    "end": 1347,
    "range": [
      1339,
      1347
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1347,
    "end": 1348,
    "range": [
      1347,
      1348
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1349,
    "end": 1358,
    "range": [
      1349,
      1358
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1358,
    "end": 1359,
    "range": [
      1358,
      1359
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 1360,
    "end": 1366,
    "range": [
      1360,
      1366
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1367,
    "end": 1368,
    "range": [
      1367,
      1368
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1369,
    "end": 1370,
    "range": [
      1369,
      1370
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1370,
    "end": 1371,
    "range": [
      1370,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1376,
    "end": 1377,
    "range": [
      1376,
      1377
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1378,
    "end": 1382,
    "range": [
      1378,
      1382
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1382,
    "end": 1383,
    "range": [
      1382,
      1383
    ]
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1384,
    "end": 1393,
    "range": [
      1384,
      1393
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1395,
    "end": 1401,
    "range": [
      1395,
      1401
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1401,
    "end": 1402,
    "range": [
      1401,
      1402
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1403,
    "end": 1404,
    "range": [
      1403,
      1404
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1405,
    "end": 1412,
    "range": [
      1405,
      1412
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1412,
    "end": 1413,
    "range": [
      1412,
      1413
    ]
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1414,
    "end": 1424,
    "range": [
      1414,
      1424
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1424,
    "end": 1425,
    "range": [
      1424,
      1425
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1426,
    "end": 1435,
    "range": [
      1426,
      1435
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1435,
    "end": 1436,
    "range": [
      1435,
      1436
    ]
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 1437,
    "end": 1445,
    "range": [
      1437,
      1445
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1446,
    "end": 1447,
    "range": [
      1446,
      1447
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1448,
    "end": 1449,
    "range": [
      1448,
      1449
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1449,
    "end": 1450,
    "range": [
      1449,
      1450
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1450,
    "end": 1451,
    "range": [
      1450,
      1451
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1452,
    "end": 1453,
    "range": [
      1452,
      1453
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1458,
    "end": 1465,
    "range": [
      1458,
      1465
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1465,
    "end": 1466,
    "range": [
      1465,
      1466
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1466,
    "end": 1469,
    "range": [
      1466,
      1469
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1469,
    "end": 1470,
    "range": [
      1469,
      1470
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1470,
    "end": 1478,
    "range": [
      1470,
      1478
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1478,
    "end": 1479,
    "range": [
      1478,
      1479
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1479,
    "end": 1480,
    "range": [
      1479,
      1480
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1481,
    "end": 1482,
    "range": [
      1481,
      1482
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1483,
    "end": 1486,
    "range": [
      1483,
      1486
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1487,
    "end": 1488,
    "range": [
      1487,
      1488
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1488,
    "end": 1489,
    "range": [
      1488,
      1489
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1489,
    "end": 1493,
    "range": [
      1489,
      1493
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1494,
    "end": 1495,
    "range": [
      1494,
      1495
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1496,
    "end": 1498,
    "range": [
      1496,
      1498
    ]
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 1499,
    "end": 1505,
    "range": [
      1499,
      1505
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1505,
    "end": 1506,
    "range": [
      1505,
      1506
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1507,
    "end": 1508,
    "range": [
      1507,
      1508
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1513,
    "end": 1520,
    "range": [
      1513,
      1520
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1520,
    "end": 1521,
    "range": [
      1520,
      1521
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1521,
    "end": 1524,
    "range": [
      1521,
      1524
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1524,
    "end": 1525,
    "range": [
      1524,
      1525
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1525,
    "end": 1530,
    "range": [
      1525,
      1530
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1530,
    "end": 1531,
    "range": [
      1530,
      1531
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1531,
    "end": 1532,
    "range": [
      1531,
      1532
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1533,
    "end": 1534,
    "range": [
      1533,
      1534
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1535,
    "end": 1538,
    "range": [
      1535,
      1538
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1539,
    "end": 1540,
    "range": [
      1539,
      1540
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1540,
    "end": 1541,
    "range": [
      1540,
      1541
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1541,
    "end": 1545,
    "range": [
      1541,
      1545
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1546,
    "end": 1547,
    "range": [
      1546,
      1547
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1548,
    "end": 1550,
    "range": [
      1548,
      1550
    ]
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 1551,
    "end": 1560,
    "range": [
      1551,
      1560
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1560,
    "end": 1561,
    "range": [
      1560,
      1561
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1561,
    "end": 1562,
    "range": [
      1561,
      1562
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1562,
    "end": 1563,
    "range": [
      1562,
      1563
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1564,
    "end": 1565,
    "range": [
      1564,
      1565
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1570,
    "end": 1577,
    "range": [
      1570,
      1577
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1577,
    "end": 1578,
    "range": [
      1577,
      1578
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1578,
    "end": 1581,
    "range": [
      1578,
      1581
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1581,
    "end": 1582,
    "range": [
      1581,
      1582
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1582,
    "end": 1587,
    "range": [
      1582,
      1587
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1587,
    "end": 1588,
    "range": [
      1587,
      1588
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1588,
    "end": 1589,
    "range": [
      1588,
      1589
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1590,
    "end": 1591,
    "range": [
      1590,
      1591
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1592,
    "end": 1595,
    "range": [
      1592,
      1595
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1596,
    "end": 1597,
    "range": [
      1596,
      1597
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1598,
    "end": 1602,
    "range": [
      1598,
      1602
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1603,
    "end": 1604,
    "range": [
      1603,
      1604
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1605,
    "end": 1607,
    "range": [
      1605,
      1607
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1608,
    "end": 1609,
    "range": [
      1608,
      1609
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1609,
    "end": 1610,
    "range": [
      1609,
      1610
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1611,
    "end": 1615,
    "range": [
      1611,
      1615
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1615,
    "end": 1616,
    "range": [
      1615,
      1616
    ]
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 1617,
    "end": 1624,
    "range": [
      1617,
      1624
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1624,
    "end": 1625,
    "range": [
      1624,
      1625
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 1626,
    "end": 1631,
    "range": [
      1626,
      1631
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1631,
    "end": 1632,
    "range": [
      1631,
      1632
    ]
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 1633,
    "end": 1641,
    "range": [
      1633,
      1641
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1642,
    "end": 1643,
    "range": [
      1642,
      1643
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1643,
    "end": 1644,
    "range": [
      1643,
      1644
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1645,
    "end": 1646,
    "range": [
      1645,
      1646
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1647,
    "end": 1651,
    "range": [
      1647,
      1651
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1651,
    "end": 1652,
    "range": [
      1651,
      1652
    ]
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1653,
    "end": 1662,
    "range": [
      1653,
      1662
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1662,
    "end": 1663,
    "range": [
      1662,
      1663
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 1664,
    "end": 1669,
    "range": [
      1664,
      1669
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1669,
    "end": 1670,
    "range": [
      1669,
      1670
    ]
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1671,
    "end": 1681,
    "range": [
      1671,
      1681
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1682,
    "end": 1683,
    "range": [
      1682,
      1683
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1683,
    "end": 1684,
    "range": [
      1683,
      1684
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1684,
    "end": 1685,
    "range": [
      1684,
      1685
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1686,
    "end": 1687,
    "range": [
      1686,
      1687
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1692,
    "end": 1699,
    "range": [
      1692,
      1699
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1699,
    "end": 1700,
    "range": [
      1699,
      1700
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1700,
    "end": 1703,
    "range": [
      1700,
      1703
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1703,
    "end": 1704,
    "range": [
      1703,
      1704
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1704,
    "end": 1709,
    "range": [
      1704,
      1709
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1709,
    "end": 1710,
    "range": [
      1709,
      1710
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1710,
    "end": 1711,
    "range": [
      1710,
      1711
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1712,
    "end": 1713,
    "range": [
      1712,
      1713
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1714,
    "end": 1717,
    "range": [
      1714,
      1717
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1718,
    "end": 1719,
    "range": [
      1718,
      1719
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1719,
    "end": 1720,
    "range": [
      1719,
      1720
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1721,
    "end": 1727,
    "range": [
      1721,
      1727
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1727,
    "end": 1728,
    "range": [
      1727,
      1728
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1729,
    "end": 1730,
    "range": [
      1729,
      1730
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1731,
    "end": 1738,
    "range": [
      1731,
      1738
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1738,
    "end": 1739,
    "range": [
      1738,
      1739
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1740,
    "end": 1749,
    "range": [
      1740,
      1749
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1750,
    "end": 1751,
    "range": [
      1750,
      1751
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1752,
    "end": 1753,
    "range": [
      1752,
      1753
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1754,
    "end": 1756,
    "range": [
      1754,
      1756
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 1757,
    "end": 1768,
    "range": [
      1757,
      1768
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1768,
    "end": 1769,
    "range": [
      1768,
      1769
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1770,
    "end": 1771,
    "range": [
      1770,
      1771
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1776,
    "end": 1783,
    "range": [
      1776,
      1783
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1783,
    "end": 1784,
    "range": [
      1783,
      1784
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1784,
    "end": 1787,
    "range": [
      1784,
      1787
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1787,
    "end": 1788,
    "range": [
      1787,
      1788
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1788,
    "end": 1796,
    "range": [
      1788,
      1796
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1796,
    "end": 1797,
    "range": [
      1796,
      1797
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1797,
    "end": 1798,
    "range": [
      1797,
      1798
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1799,
    "end": 1800,
    "range": [
      1799,
      1800
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1801,
    "end": 1804,
    "range": [
      1801,
      1804
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1805,
    "end": 1806,
    "range": [
      1805,
      1806
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1806,
    "end": 1807,
    "range": [
      1806,
      1807
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1808,
    "end": 1814,
    "range": [
      1808,
      1814
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1814,
    "end": 1815,
    "range": [
      1814,
      1815
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1816,
    "end": 1817,
    "range": [
      1816,
      1817
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1818,
    "end": 1825,
    "range": [
      1818,
      1825
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1825,
    "end": 1826,
    "range": [
      1825,
      1826
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1827,
    "end": 1836,
    "range": [
      1827,
      1836
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1837,
    "end": 1838,
    "range": [
      1837,
      1838
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1841,
    "end": 1843,
    "range": [
      1841,
      1843
    ]
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 1844,
    "end": 1858,
    "range": [
      1844,
      1858
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1858,
    "end": 1859,
    "range": [
      1858,
      1859
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1859,
    "end": 1860,
    "range": [
      1859,
      1860
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1860,
    "end": 1861,
    "range": [
      1860,
      1861
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1862,
    "end": 1863,
    "range": [
      1862,
      1863
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1868,
    "end": 1875,
    "range": [
      1868,
      1875
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1875,
    "end": 1876,
    "range": [
      1875,
      1876
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1876,
    "end": 1879,
    "range": [
      1876,
      1879
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1879,
    "end": 1880,
    "range": [
      1879,
      1880
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1880,
    "end": 1888,
    "range": [
      1880,
      1888
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1888,
    "end": 1889,
    "range": [
      1888,
      1889
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1889,
    "end": 1890,
    "range": [
      1889,
      1890
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1891,
    "end": 1892,
    "range": [
      1891,
      1892
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1893,
    "end": 1896,
    "range": [
      1893,
      1896
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1897,
    "end": 1898,
    "range": [
      1897,
      1898
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1898,
    "end": 1899,
    "range": [
      1898,
      1899
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1900,
    "end": 1906,
    "range": [
      1900,
      1906
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1906,
    "end": 1907,
    "range": [
      1906,
      1907
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1908,
    "end": 1909,
    "range": [
      1908,
      1909
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1910,
    "end": 1917,
    "range": [
      1910,
      1917
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1917,
    "end": 1918,
    "range": [
      1917,
      1918
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1919,
    "end": 1928,
    "range": [
      1919,
      1928
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1929,
    "end": 1930,
    "range": [
      1929,
      1930
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1933,
    "end": 1935,
    "range": [
      1933,
      1935
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1936,
    "end": 1937,
    "range": [
      1936,
      1937
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1937,
    "end": 1938,
    "range": [
      1937,
      1938
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1939,
    "end": 1943,
    "range": [
      1939,
      1943
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1943,
    "end": 1944,
    "range": [
      1943,
      1944
    ]
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 1945,
    "end": 1952,
    "range": [
      1945,
      1952
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1952,
    "end": 1953,
    "range": [
      1952,
      1953
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1954,
    "end": 1960,
    "range": [
      1954,
      1960
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1960,
    "end": 1961,
    "range": [
      1960,
      1961
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1962,
    "end": 1963,
    "range": [
      1962,
      1963
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1964,
    "end": 1971,
    "range": [
      1964,
      1971
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1971,
    "end": 1972,
    "range": [
      1971,
      1972
    ]
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 1973,
    "end": 1981,
    "range": [
      1973,
      1981
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1981,
    "end": 1982,
    "range": [
      1981,
      1982
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1983,
    "end": 1992,
    "range": [
      1983,
      1992
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1992,
    "end": 1993,
    "range": [
      1992,
      1993
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 1994,
    "end": 2000,
    "range": [
      1994,
      2000
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2001,
    "end": 2002,
    "range": [
      2001,
      2002
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2003,
    "end": 2004,
    "range": [
      2003,
      2004
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2004,
    "end": 2005,
    "range": [
      2004,
      2005
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2010,
    "end": 2011,
    "range": [
      2010,
      2011
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2012,
    "end": 2016,
    "range": [
      2012,
      2016
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2016,
    "end": 2017,
    "range": [
      2016,
      2017
    ]
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 2018,
    "end": 2027,
    "range": [
      2018,
      2027
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2027,
    "end": 2028,
    "range": [
      2027,
      2028
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2029,
    "end": 2035,
    "range": [
      2029,
      2035
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2035,
    "end": 2036,
    "range": [
      2035,
      2036
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2037,
    "end": 2038,
    "range": [
      2037,
      2038
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2039,
    "end": 2046,
    "range": [
      2039,
      2046
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2046,
    "end": 2047,
    "range": [
      2046,
      2047
    ]
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 2048,
    "end": 2058,
    "range": [
      2048,
      2058
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2058,
    "end": 2059,
    "range": [
      2058,
      2059
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2060,
    "end": 2069,
    "range": [
      2060,
      2069
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2069,
    "end": 2070,
    "range": [
      2069,
      2070
    ]
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 2071,
    "end": 2079,
    "range": [
      2071,
      2079
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2080,
    "end": 2081,
    "range": [
      2080,
      2081
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2082,
    "end": 2083,
    "range": [
      2082,
      2083
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2083,
    "end": 2084,
    "range": [
      2083,
      2084
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2084,
    "end": 2085,
    "range": [
      2084,
      2085
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2086,
    "end": 2087,
    "range": [
      2086,
      2087
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2092,
    "end": 2099,
    "range": [
      2092,
      2099
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2099,
    "end": 2100,
    "range": [
      2099,
      2100
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2100,
    "end": 2103,
    "range": [
      2100,
      2103
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2103,
    "end": 2104,
    "range": [
      2103,
      2104
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2104,
    "end": 2112,
    "range": [
      2104,
      2112
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2112,
    "end": 2113,
    "range": [
      2112,
      2113
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2113,
    "end": 2114,
    "range": [
      2113,
      2114
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2115,
    "end": 2116,
    "range": [
      2115,
      2116
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2119,
    "end": 2122,
    "range": [
      2119,
      2122
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2123,
    "end": 2124,
    "range": [
      2123,
      2124
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2124,
    "end": 2125,
    "range": [
      2124,
      2125
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2125,
    "end": 2129,
    "range": [
      2125,
      2129
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2129,
    "end": 2130,
    "range": [
      2129,
      2130
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2131,
    "end": 2136,
    "range": [
      2131,
      2136
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2136,
    "end": 2137,
    "range": [
      2136,
      2137
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2138,
    "end": 2143,
    "range": [
      2138,
      2143
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2143,
    "end": 2144,
    "range": [
      2143,
      2144
    ]
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 2145,
    "end": 2151,
    "range": [
      2145,
      2151
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2152,
    "end": 2153,
    "range": [
      2152,
      2153
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2154,
    "end": 2156,
    "range": [
      2154,
      2156
    ]
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 2157,
    "end": 2163,
    "range": [
      2157,
      2163
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2163,
    "end": 2164,
    "range": [
      2163,
      2164
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2165,
    "end": 2166,
    "range": [
      2165,
      2166
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2171,
    "end": 2178,
    "range": [
      2171,
      2178
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2178,
    "end": 2179,
    "range": [
      2178,
      2179
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2179,
    "end": 2182,
    "range": [
      2179,
      2182
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2182,
    "end": 2183,
    "range": [
      2182,
      2183
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2183,
    "end": 2188,
    "range": [
      2183,
      2188
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2188,
    "end": 2189,
    "range": [
      2188,
      2189
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2189,
    "end": 2190,
    "range": [
      2189,
      2190
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2191,
    "end": 2192,
    "range": [
      2191,
      2192
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2193,
    "end": 2196,
    "range": [
      2193,
      2196
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2197,
    "end": 2198,
    "range": [
      2197,
      2198
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2198,
    "end": 2199,
    "range": [
      2198,
      2199
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2199,
    "end": 2203,
    "range": [
      2199,
      2203
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2203,
    "end": 2204,
    "range": [
      2203,
      2204
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2205,
    "end": 2210,
    "range": [
      2205,
      2210
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2210,
    "end": 2211,
    "range": [
      2210,
      2211
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2212,
    "end": 2217,
    "range": [
      2212,
      2217
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2217,
    "end": 2218,
    "range": [
      2217,
      2218
    ]
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 2219,
    "end": 2225,
    "range": [
      2219,
      2225
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2226,
    "end": 2227,
    "range": [
      2226,
      2227
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2228,
    "end": 2230,
    "range": [
      2228,
      2230
    ]
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 2231,
    "end": 2240,
    "range": [
      2231,
      2240
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2240,
    "end": 2241,
    "range": [
      2240,
      2241
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2241,
    "end": 2242,
    "range": [
      2241,
      2242
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2242,
    "end": 2243,
    "range": [
      2242,
      2243
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2244,
    "end": 2245,
    "range": [
      2244,
      2245
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2250,
    "end": 2257,
    "range": [
      2250,
      2257
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2257,
    "end": 2258,
    "range": [
      2257,
      2258
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2258,
    "end": 2261,
    "range": [
      2258,
      2261
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2261,
    "end": 2262,
    "range": [
      2261,
      2262
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2262,
    "end": 2267,
    "range": [
      2262,
      2267
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2267,
    "end": 2268,
    "range": [
      2267,
      2268
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2268,
    "end": 2269,
    "range": [
      2268,
      2269
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2270,
    "end": 2271,
    "range": [
      2270,
      2271
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2272,
    "end": 2275,
    "range": [
      2272,
      2275
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2276,
    "end": 2277,
    "range": [
      2276,
      2277
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2277,
    "end": 2278,
    "range": [
      2277,
      2278
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2278,
    "end": 2282,
    "range": [
      2278,
      2282
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2282,
    "end": 2283,
    "range": [
      2282,
      2283
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2284,
    "end": 2289,
    "range": [
      2284,
      2289
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2289,
    "end": 2290,
    "range": [
      2289,
      2290
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2291,
    "end": 2296,
    "range": [
      2291,
      2296
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2296,
    "end": 2297,
    "range": [
      2296,
      2297
    ]
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 2298,
    "end": 2304,
    "range": [
      2298,
      2304
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2305,
    "end": 2306,
    "range": [
      2305,
      2306
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2307,
    "end": 2309,
    "range": [
      2307,
      2309
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2310,
    "end": 2311,
    "range": [
      2310,
      2311
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2311,
    "end": 2312,
    "range": [
      2311,
      2312
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2313,
    "end": 2317,
    "range": [
      2313,
      2317
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2317,
    "end": 2318,
    "range": [
      2317,
      2318
    ]
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 2319,
    "end": 2326,
    "range": [
      2319,
      2326
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2326,
    "end": 2327,
    "range": [
      2326,
      2327
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2328,
    "end": 2333,
    "range": [
      2328,
      2333
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2333,
    "end": 2334,
    "range": [
      2333,
      2334
    ]
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 2335,
    "end": 2343,
    "range": [
      2335,
      2343
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2344,
    "end": 2345,
    "range": [
      2344,
      2345
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2345,
    "end": 2346,
    "range": [
      2345,
      2346
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2347,
    "end": 2348,
    "range": [
      2347,
      2348
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2349,
    "end": 2353,
    "range": [
      2349,
      2353
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2353,
    "end": 2354,
    "range": [
      2353,
      2354
    ]
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 2355,
    "end": 2364,
    "range": [
      2355,
      2364
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2364,
    "end": 2365,
    "range": [
      2364,
      2365
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2366,
    "end": 2371,
    "range": [
      2366,
      2371
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2371,
    "end": 2372,
    "range": [
      2371,
      2372
    ]
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 2373,
    "end": 2383,
    "range": [
      2373,
      2383
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2384,
    "end": 2385,
    "range": [
      2384,
      2385
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2385,
    "end": 2386,
    "range": [
      2385,
      2386
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2386,
    "end": 2387,
    "range": [
      2386,
      2387
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2388,
    "end": 2389,
    "range": [
      2388,
      2389
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2394,
    "end": 2401,
    "range": [
      2394,
      2401
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2401,
    "end": 2402,
    "range": [
      2401,
      2402
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2402,
    "end": 2405,
    "range": [
      2402,
      2405
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2405,
    "end": 2406,
    "range": [
      2405,
      2406
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2406,
    "end": 2411,
    "range": [
      2406,
      2411
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2411,
    "end": 2412,
    "range": [
      2411,
      2412
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2412,
    "end": 2413,
    "range": [
      2412,
      2413
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2414,
    "end": 2415,
    "range": [
      2414,
      2415
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2416,
    "end": 2419,
    "range": [
      2416,
      2419
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2420,
    "end": 2421,
    "range": [
      2420,
      2421
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2421,
    "end": 2422,
    "range": [
      2421,
      2422
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2422,
    "end": 2426,
    "range": [
      2422,
      2426
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2426,
    "end": 2427,
    "range": [
      2426,
      2427
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2428,
    "end": 2433,
    "range": [
      2428,
      2433
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2433,
    "end": 2434,
    "range": [
      2433,
      2434
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2435,
    "end": 2441,
    "range": [
      2435,
      2441
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2441,
    "end": 2442,
    "range": [
      2441,
      2442
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2443,
    "end": 2444,
    "range": [
      2443,
      2444
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2445,
    "end": 2452,
    "range": [
      2445,
      2452
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2452,
    "end": 2453,
    "range": [
      2452,
      2453
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2454,
    "end": 2462,
    "range": [
      2454,
      2462
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2462,
    "end": 2463,
    "range": [
      2462,
      2463
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2464,
    "end": 2473,
    "range": [
      2464,
      2473
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2473,
    "end": 2474,
    "range": [
      2473,
      2474
    ]
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 2475,
    "end": 2485,
    "range": [
      2475,
      2485
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2486,
    "end": 2487,
    "range": [
      2486,
      2487
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2488,
    "end": 2489,
    "range": [
      2488,
      2489
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2490,
    "end": 2492,
    "range": [
      2490,
      2492
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 2493,
    "end": 2504,
    "range": [
      2493,
      2504
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2504,
    "end": 2505,
    "range": [
      2504,
      2505
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2506,
    "end": 2507,
    "range": [
      2506,
      2507
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2512,
    "end": 2519,
    "range": [
      2512,
      2519
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2519,
    "end": 2520,
    "range": [
      2519,
      2520
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2520,
    "end": 2523,
    "range": [
      2520,
      2523
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2523,
    "end": 2524,
    "range": [
      2523,
      2524
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2524,
    "end": 2529,
    "range": [
      2524,
      2529
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2529,
    "end": 2530,
    "range": [
      2529,
      2530
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2530,
    "end": 2531,
    "range": [
      2530,
      2531
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2532,
    "end": 2533,
    "range": [
      2532,
      2533
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2534,
    "end": 2537,
    "range": [
      2534,
      2537
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2538,
    "end": 2539,
    "range": [
      2538,
      2539
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2539,
    "end": 2540,
    "range": [
      2539,
      2540
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2540,
    "end": 2544,
    "range": [
      2540,
      2544
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2544,
    "end": 2545,
    "range": [
      2544,
      2545
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2546,
    "end": 2551,
    "range": [
      2546,
      2551
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2551,
    "end": 2552,
    "range": [
      2551,
      2552
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2553,
    "end": 2559,
    "range": [
      2553,
      2559
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2559,
    "end": 2560,
    "range": [
      2559,
      2560
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2561,
    "end": 2562,
    "range": [
      2561,
      2562
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2563,
    "end": 2570,
    "range": [
      2563,
      2570
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2570,
    "end": 2571,
    "range": [
      2570,
      2571
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2572,
    "end": 2580,
    "range": [
      2572,
      2580
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2580,
    "end": 2581,
    "range": [
      2580,
      2581
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2582,
    "end": 2591,
    "range": [
      2582,
      2591
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2591,
    "end": 2592,
    "range": [
      2591,
      2592
    ]
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 2593,
    "end": 2603,
    "range": [
      2593,
      2603
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2604,
    "end": 2605,
    "range": [
      2604,
      2605
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2606,
    "end": 2607,
    "range": [
      2606,
      2607
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2608,
    "end": 2610,
    "range": [
      2608,
      2610
    ]
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 2611,
    "end": 2625,
    "range": [
      2611,
      2625
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2625,
    "end": 2626,
    "range": [
      2625,
      2626
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2626,
    "end": 2627,
    "range": [
      2626,
      2627
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2627,
    "end": 2628,
    "range": [
      2627,
      2628
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2629,
    "end": 2630,
    "range": [
      2629,
      2630
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2635,
    "end": 2642,
    "range": [
      2635,
      2642
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2642,
    "end": 2643,
    "range": [
      2642,
      2643
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2643,
    "end": 2646,
    "range": [
      2643,
      2646
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2646,
    "end": 2647,
    "range": [
      2646,
      2647
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2647,
    "end": 2652,
    "range": [
      2647,
      2652
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2652,
    "end": 2653,
    "range": [
      2652,
      2653
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2653,
    "end": 2654,
    "range": [
      2653,
      2654
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2655,
    "end": 2656,
    "range": [
      2655,
      2656
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2657,
    "end": 2660,
    "range": [
      2657,
      2660
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2661,
    "end": 2662,
    "range": [
      2661,
      2662
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2662,
    "end": 2663,
    "range": [
      2662,
      2663
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2663,
    "end": 2667,
    "range": [
      2663,
      2667
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2667,
    "end": 2668,
    "range": [
      2667,
      2668
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2669,
    "end": 2674,
    "range": [
      2669,
      2674
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2674,
    "end": 2675,
    "range": [
      2674,
      2675
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2676,
    "end": 2682,
    "range": [
      2676,
      2682
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2682,
    "end": 2683,
    "range": [
      2682,
      2683
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2684,
    "end": 2685,
    "range": [
      2684,
      2685
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2686,
    "end": 2693,
    "range": [
      2686,
      2693
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2693,
    "end": 2694,
    "range": [
      2693,
      2694
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2695,
    "end": 2703,
    "range": [
      2695,
      2703
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2703,
    "end": 2704,
    "range": [
      2703,
      2704
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2705,
    "end": 2714,
    "range": [
      2705,
      2714
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2714,
    "end": 2715,
    "range": [
      2714,
      2715
    ]
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 2716,
    "end": 2726,
    "range": [
      2716,
      2726
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2727,
    "end": 2728,
    "range": [
      2727,
      2728
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2729,
    "end": 2730,
    "range": [
      2729,
      2730
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2731,
    "end": 2733,
    "range": [
      2731,
      2733
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2734,
    "end": 2735,
    "range": [
      2734,
      2735
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2735,
    "end": 2736,
    "range": [
      2735,
      2736
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2737,
    "end": 2741,
    "range": [
      2737,
      2741
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2741,
    "end": 2742,
    "range": [
      2741,
      2742
    ]
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 2743,
    "end": 2750,
    "range": [
      2743,
      2750
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2750,
    "end": 2751,
    "range": [
      2750,
      2751
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2752,
    "end": 2758,
    "range": [
      2752,
      2758
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2758,
    "end": 2759,
    "range": [
      2758,
      2759
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2760,
    "end": 2761,
    "range": [
      2760,
      2761
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2762,
    "end": 2769,
    "range": [
      2762,
      2769
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2769,
    "end": 2770,
    "range": [
      2769,
      2770
    ]
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 2771,
    "end": 2779,
    "range": [
      2771,
      2779
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2779,
    "end": 2780,
    "range": [
      2779,
      2780
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2781,
    "end": 2790,
    "range": [
      2781,
      2790
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2790,
    "end": 2791,
    "range": [
      2790,
      2791
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 2792,
    "end": 2798,
    "range": [
      2792,
      2798
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2799,
    "end": 2800,
    "range": [
      2799,
      2800
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2801,
    "end": 2802,
    "range": [
      2801,
      2802
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2802,
    "end": 2803,
    "range": [
      2802,
      2803
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2808,
    "end": 2809,
    "range": [
      2808,
      2809
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2810,
    "end": 2814,
    "range": [
      2810,
      2814
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2814,
    "end": 2815,
    "range": [
      2814,
      2815
    ]
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 2816,
    "end": 2825,
    "range": [
      2816,
      2825
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2825,
    "end": 2826,
    "range": [
      2825,
      2826
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2827,
    "end": 2833,
    "range": [
      2827,
      2833
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2833,
    "end": 2834,
    "range": [
      2833,
      2834
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2835,
    "end": 2836,
    "range": [
      2835,
      2836
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2837,
    "end": 2844,
    "range": [
      2837,
      2844
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2844,
    "end": 2845,
    "range": [
      2844,
      2845
    ]
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 2846,
    "end": 2856,
    "range": [
      2846,
      2856
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2856,
    "end": 2857,
    "range": [
      2856,
      2857
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2858,
    "end": 2867,
    "range": [
      2858,
      2867
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2867,
    "end": 2868,
    "range": [
      2867,
      2868
    ]
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 2869,
    "end": 2877,
    "range": [
      2869,
      2877
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2878,
    "end": 2879,
    "range": [
      2878,
      2879
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2880,
    "end": 2881,
    "range": [
      2880,
      2881
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2881,
    "end": 2882,
    "range": [
      2881,
      2882
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2882,
    "end": 2883,
    "range": [
      2882,
      2883
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2884,
    "end": 2885,
    "range": [
      2884,
      2885
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2890,
    "end": 2897,
    "range": [
      2890,
      2897
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2897,
    "end": 2898,
    "range": [
      2897,
      2898
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2898,
    "end": 2901,
    "range": [
      2898,
      2901
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2901,
    "end": 2902,
    "range": [
      2901,
      2902
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2902,
    "end": 2907,
    "range": [
      2902,
      2907
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2907,
    "end": 2908,
    "range": [
      2907,
      2908
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2908,
    "end": 2909,
    "range": [
      2908,
      2909
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2910,
    "end": 2911,
    "range": [
      2910,
      2911
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2912,
    "end": 2915,
    "range": [
      2912,
      2915
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2916,
    "end": 2917,
    "range": [
      2916,
      2917
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2917,
    "end": 2918,
    "range": [
      2917,
      2918
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2918,
    "end": 2922,
    "range": [
      2918,
      2922
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2922,
    "end": 2923,
    "range": [
      2922,
      2923
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2924,
    "end": 2929,
    "range": [
      2924,
      2929
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2930,
    "end": 2931,
    "range": [
      2930,
      2931
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2932,
    "end": 2934,
    "range": [
      2932,
      2934
    ]
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 2935,
    "end": 2941,
    "range": [
      2935,
      2941
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2941,
    "end": 2942,
    "range": [
      2941,
      2942
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2943,
    "end": 2944,
    "range": [
      2943,
      2944
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2949,
    "end": 2956,
    "range": [
      2949,
      2956
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2956,
    "end": 2957,
    "range": [
      2956,
      2957
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2957,
    "end": 2960,
    "range": [
      2957,
      2960
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2960,
    "end": 2961,
    "range": [
      2960,
      2961
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2961,
    "end": 2966,
    "range": [
      2961,
      2966
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2966,
    "end": 2967,
    "range": [
      2966,
      2967
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2967,
    "end": 2968,
    "range": [
      2967,
      2968
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2969,
    "end": 2970,
    "range": [
      2969,
      2970
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2971,
    "end": 2974,
    "range": [
      2971,
      2974
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2975,
    "end": 2976,
    "range": [
      2975,
      2976
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2976,
    "end": 2977,
    "range": [
      2976,
      2977
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2977,
    "end": 2981,
    "range": [
      2977,
      2981
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2981,
    "end": 2982,
    "range": [
      2981,
      2982
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2983,
    "end": 2988,
    "range": [
      2983,
      2988
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2989,
    "end": 2990,
    "range": [
      2989,
      2990
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2991,
    "end": 2993,
    "range": [
      2991,
      2993
    ]
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 2994,
    "end": 3003,
    "range": [
      2994,
      3003
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3003,
    "end": 3004,
    "range": [
      3003,
      3004
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3004,
    "end": 3005,
    "range": [
      3004,
      3005
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3005,
    "end": 3006,
    "range": [
      3005,
      3006
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3007,
    "end": 3008,
    "range": [
      3007,
      3008
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3013,
    "end": 3020,
    "range": [
      3013,
      3020
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3020,
    "end": 3021,
    "range": [
      3020,
      3021
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3021,
    "end": 3024,
    "range": [
      3021,
      3024
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3024,
    "end": 3025,
    "range": [
      3024,
      3025
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3025,
    "end": 3030,
    "range": [
      3025,
      3030
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3030,
    "end": 3031,
    "range": [
      3030,
      3031
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3031,
    "end": 3032,
    "range": [
      3031,
      3032
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3033,
    "end": 3034,
    "range": [
      3033,
      3034
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3035,
    "end": 3038,
    "range": [
      3035,
      3038
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3039,
    "end": 3040,
    "range": [
      3039,
      3040
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3040,
    "end": 3041,
    "range": [
      3040,
      3041
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3041,
    "end": 3045,
    "range": [
      3041,
      3045
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3045,
    "end": 3046,
    "range": [
      3045,
      3046
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 3047,
    "end": 3052,
    "range": [
      3047,
      3052
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3053,
    "end": 3054,
    "range": [
      3053,
      3054
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 3055,
    "end": 3057,
    "range": [
      3055,
      3057
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3058,
    "end": 3059,
    "range": [
      3058,
      3059
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3059,
    "end": 3060,
    "range": [
      3059,
      3060
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3061,
    "end": 3065,
    "range": [
      3061,
      3065
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3065,
    "end": 3066,
    "range": [
      3065,
      3066
    ]
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 3067,
    "end": 3074,
    "range": [
      3067,
      3074
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3074,
    "end": 3075,
    "range": [
      3074,
      3075
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 3076,
    "end": 3081,
    "range": [
      3076,
      3081
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3081,
    "end": 3082,
    "range": [
      3081,
      3082
    ]
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 3083,
    "end": 3091,
    "range": [
      3083,
      3091
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3092,
    "end": 3093,
    "range": [
      3092,
      3093
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3093,
    "end": 3094,
    "range": [
      3093,
      3094
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3095,
    "end": 3096,
    "range": [
      3095,
      3096
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3097,
    "end": 3101,
    "range": [
      3097,
      3101
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3101,
    "end": 3102,
    "range": [
      3101,
      3102
    ]
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 3103,
    "end": 3112,
    "range": [
      3103,
      3112
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3112,
    "end": 3113,
    "range": [
      3112,
      3113
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 3114,
    "end": 3119,
    "range": [
      3114,
      3119
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3119,
    "end": 3120,
    "range": [
      3119,
      3120
    ]
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 3121,
    "end": 3131,
    "range": [
      3121,
      3131
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3132,
    "end": 3133,
    "range": [
      3132,
      3133
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3133,
    "end": 3134,
    "range": [
      3133,
      3134
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3134,
    "end": 3135,
    "range": [
      3134,
      3135
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3136,
    "end": 3137,
    "range": [
      3136,
      3137
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3142,
    "end": 3149,
    "range": [
      3142,
      3149
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3149,
    "end": 3150,
    "range": [
      3149,
      3150
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3150,
    "end": 3153,
    "range": [
      3150,
      3153
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3153,
    "end": 3154,
    "range": [
      3153,
      3154
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3154,
    "end": 3159,
    "range": [
      3154,
      3159
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3159,
    "end": 3160,
    "range": [
      3159,
      3160
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3160,
    "end": 3161,
    "range": [
      3160,
      3161
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3162,
    "end": 3163,
    "range": [
      3162,
      3163
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3164,
    "end": 3167,
    "range": [
      3164,
      3167
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3168,
    "end": 3169,
    "range": [
      3168,
      3169
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3169,
    "end": 3170,
    "range": [
      3169,
      3170
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3170,
    "end": 3174,
    "range": [
      3170,
      3174
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3174,
    "end": 3175,
    "range": [
      3174,
      3175
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 3176,
    "end": 3182,
    "range": [
      3176,
      3182
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3182,
    "end": 3183,
    "range": [
      3182,
      3183
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3184,
    "end": 3185,
    "range": [
      3184,
      3185
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3186,
    "end": 3193,
    "range": [
      3186,
      3193
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3193,
    "end": 3194,
    "range": [
      3193,
      3194
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3195,
    "end": 3204,
    "range": [
      3195,
      3204
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3205,
    "end": 3206,
    "range": [
      3205,
      3206
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3207,
    "end": 3208,
    "range": [
      3207,
      3208
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 3209,
    "end": 3211,
    "range": [
      3209,
      3211
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 3212,
    "end": 3223,
    "range": [
      3212,
      3223
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3223,
    "end": 3224,
    "range": [
      3223,
      3224
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3225,
    "end": 3226,
    "range": [
      3225,
      3226
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3231,
    "end": 3238,
    "range": [
      3231,
      3238
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3238,
    "end": 3239,
    "range": [
      3238,
      3239
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3239,
    "end": 3242,
    "range": [
      3239,
      3242
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3242,
    "end": 3243,
    "range": [
      3242,
      3243
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3243,
    "end": 3248,
    "range": [
      3243,
      3248
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3248,
    "end": 3249,
    "range": [
      3248,
      3249
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3249,
    "end": 3250,
    "range": [
      3249,
      3250
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3251,
    "end": 3252,
    "range": [
      3251,
      3252
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3253,
    "end": 3256,
    "range": [
      3253,
      3256
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3257,
    "end": 3258,
    "range": [
      3257,
      3258
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3258,
    "end": 3259,
    "range": [
      3258,
      3259
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3259,
    "end": 3263,
    "range": [
      3259,
      3263
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3263,
    "end": 3264,
    "range": [
      3263,
      3264
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 3265,
    "end": 3271,
    "range": [
      3265,
      3271
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3271,
    "end": 3272,
    "range": [
      3271,
      3272
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3273,
    "end": 3274,
    "range": [
      3273,
      3274
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3275,
    "end": 3282,
    "range": [
      3275,
      3282
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3282,
    "end": 3283,
    "range": [
      3282,
      3283
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3284,
    "end": 3293,
    "range": [
      3284,
      3293
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3294,
    "end": 3295,
    "range": [
      3294,
      3295
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3296,
    "end": 3297,
    "range": [
      3296,
      3297
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 3298,
    "end": 3300,
    "range": [
      3298,
      3300
    ]
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 3301,
    "end": 3315,
    "range": [
      3301,
      3315
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3315,
    "end": 3316,
    "range": [
      3315,
      3316
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3316,
    "end": 3317,
    "range": [
      3316,
      3317
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3317,
    "end": 3318,
    "range": [
      3317,
      3318
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3319,
    "end": 3320,
    "range": [
      3319,
      3320
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3325,
    "end": 3332,
    "range": [
      3325,
      3332
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3332,
    "end": 3333,
    "range": [
      3332,
      3333
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3333,
    "end": 3336,
    "range": [
      3333,
      3336
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3336,
    "end": 3337,
    "range": [
      3336,
      3337
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3337,
    "end": 3342,
    "range": [
      3337,
      3342
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3342,
    "end": 3343,
    "range": [
      3342,
      3343
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3343,
    "end": 3344,
    "range": [
      3343,
      3344
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3345,
    "end": 3346,
    "range": [
      3345,
      3346
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3347,
    "end": 3350,
    "range": [
      3347,
      3350
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3351,
    "end": 3352,
    "range": [
      3351,
      3352
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3352,
    "end": 3353,
    "range": [
      3352,
      3353
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3353,
    "end": 3357,
    "range": [
      3353,
      3357
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3357,
    "end": 3358,
    "range": [
      3357,
      3358
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 3359,
    "end": 3365,
    "range": [
      3359,
      3365
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3365,
    "end": 3366,
    "range": [
      3365,
      3366
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3367,
    "end": 3368,
    "range": [
      3367,
      3368
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3369,
    "end": 3376,
    "range": [
      3369,
      3376
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3376,
    "end": 3377,
    "range": [
      3376,
      3377
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3378,
    "end": 3387,
    "range": [
      3378,
      3387
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3388,
    "end": 3389,
    "range": [
      3388,
      3389
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3390,
    "end": 3391,
    "range": [
      3390,
      3391
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 3392,
    "end": 3394,
    "range": [
      3392,
      3394
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3395,
    "end": 3396,
    "range": [
      3395,
      3396
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3396,
    "end": 3397,
    "range": [
      3396,
      3397
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3398,
    "end": 3402,
    "range": [
      3398,
      3402
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3402,
    "end": 3403,
    "range": [
      3402,
      3403
    ]
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 3404,
    "end": 3411,
    "range": [
      3404,
      3411
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3411,
    "end": 3412,
    "range": [
      3411,
      3412
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 3413,
    "end": 3419,
    "range": [
      3413,
      3419
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3419,
    "end": 3420,
    "range": [
      3419,
      3420
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3421,
    "end": 3422,
    "range": [
      3421,
      3422
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3423,
    "end": 3430,
    "range": [
      3423,
      3430
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3430,
    "end": 3431,
    "range": [
      3430,
      3431
    ]
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 3432,
    "end": 3440,
    "range": [
      3432,
      3440
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3440,
    "end": 3441,
    "range": [
      3440,
      3441
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3442,
    "end": 3451,
    "range": [
      3442,
      3451
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3451,
    "end": 3452,
    "range": [
      3451,
      3452
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 3453,
    "end": 3459,
    "range": [
      3453,
      3459
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3460,
    "end": 3461,
    "range": [
      3460,
      3461
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3462,
    "end": 3463,
    "range": [
      3462,
      3463
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3463,
    "end": 3464,
    "range": [
      3463,
      3464
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3469,
    "end": 3470,
    "range": [
      3469,
      3470
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3471,
    "end": 3475,
    "range": [
      3471,
      3475
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3475,
    "end": 3476,
    "range": [
      3475,
      3476
    ]
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 3477,
    "end": 3486,
    "range": [
      3477,
      3486
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3486,
    "end": 3487,
    "range": [
      3486,
      3487
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 3488,
    "end": 3494,
    "range": [
      3488,
      3494
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3494,
    "end": 3495,
    "range": [
      3494,
      3495
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3496,
    "end": 3497,
    "range": [
      3496,
      3497
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3498,
    "end": 3505,
    "range": [
      3498,
      3505
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3505,
    "end": 3506,
    "range": [
      3505,
      3506
    ]
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 3507,
    "end": 3517,
    "range": [
      3507,
      3517
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3517,
    "end": 3518,
    "range": [
      3517,
      3518
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3519,
    "end": 3528,
    "range": [
      3519,
      3528
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3528,
    "end": 3529,
    "range": [
      3528,
      3529
    ]
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 3530,
    "end": 3538,
    "range": [
      3530,
      3538
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3539,
    "end": 3540,
    "range": [
      3539,
      3540
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3541,
    "end": 3542,
    "range": [
      3541,
      3542
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3542,
    "end": 3543,
    "range": [
      3542,
      3543
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3543,
    "end": 3544,
    "range": [
      3543,
      3544
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3545,
    "end": 3546,
    "range": [
      3545,
      3546
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3551,
    "end": 3558,
    "range": [
      3551,
      3558
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3558,
    "end": 3559,
    "range": [
      3558,
      3559
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3559,
    "end": 3562,
    "range": [
      3559,
      3562
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3562,
    "end": 3563,
    "range": [
      3562,
      3563
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3563,
    "end": 3568,
    "range": [
      3563,
      3568
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3568,
    "end": 3569,
    "range": [
      3568,
      3569
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3569,
    "end": 3570,
    "range": [
      3569,
      3570
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3571,
    "end": 3572,
    "range": [
      3571,
      3572
    ]
  }
]
```
