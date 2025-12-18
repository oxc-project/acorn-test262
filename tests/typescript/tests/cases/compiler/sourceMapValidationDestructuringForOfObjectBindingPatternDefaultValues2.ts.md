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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameA",
                "optional": false,
                "typeAnnotation": null,
                "start": 774,
                "end": 779
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 782,
                "end": 790
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 774,
              "end": 790
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 768,
            "end": 790
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 767,
        "end": 792
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 796,
        "end": 802
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
                  "start": 810,
                  "end": 817
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 818,
                  "end": 821
                },
                "optional": false,
                "computed": false,
                "start": 810,
                "end": 821
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 822,
                  "end": 827
                }
              ],
              "optional": false,
              "start": 810,
              "end": 828
            },
            "directive": null,
            "start": 810,
            "end": 829
          }
        ],
        "start": 804,
        "end": 831
      },
      "start": 762,
      "end": 831
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
              "start": 838,
              "end": 842
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
                "start": 844,
                "end": 849
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 852,
                "end": 860
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 844,
              "end": 860
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 838,
            "end": 860
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 837,
        "end": 862
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 866,
          "end": 875
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 866,
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
      "start": 832,
      "end": 906
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
              "start": 913,
              "end": 917
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
                "start": 919,
                "end": 924
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 927,
                "end": 935
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 919,
              "end": 935
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 913,
            "end": 935
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 912,
        "end": 937
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
                  "start": 944,
                  "end": 948
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 950,
                  "end": 957
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 944,
                "end": 957
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
                  "start": 959,
                  "end": 964
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 966,
                  "end": 974
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 959,
                "end": 974
              }
            ],
            "start": 942,
            "end": 976
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
                  "start": 980,
                  "end": 984
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 986,
                  "end": 995
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 980,
                "end": 995
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
                  "start": 997,
                  "end": 1002
                },
                "value": {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 1004,
                  "end": 1014
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 997,
                "end": 1014
              }
            ],
            "start": 978,
            "end": 1016
          }
        ],
        "start": 941,
        "end": 1017
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
                  "start": 1025,
                  "end": 1032
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1033,
                  "end": 1036
                },
                "optional": false,
                "computed": false,
                "start": 1025,
                "end": 1036
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1037,
                  "end": 1042
                }
              ],
              "optional": false,
              "start": 1025,
              "end": 1043
            },
            "directive": null,
            "start": 1025,
            "end": 1044
          }
        ],
        "start": 1019,
        "end": 1046
      },
      "start": 907,
      "end": 1046
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
              "start": 1054,
              "end": 1060
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
                      "start": 1064,
                      "end": 1071
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
                        "start": 1073,
                        "end": 1081
                      },
                      "right": {
                        "type": "Literal",
                        "value": "primary",
                        "raw": "\"primary\"",
                        "start": 1084,
                        "end": 1093
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1073,
                      "end": 1093
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1064,
                    "end": 1093
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
                      "start": 1095,
                      "end": 1104
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
                        "start": 1106,
                        "end": 1116
                      },
                      "right": {
                        "type": "Literal",
                        "value": "secondary",
                        "raw": "\"secondary\"",
                        "start": 1119,
                        "end": 1130
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1106,
                      "end": 1130
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1095,
                    "end": 1130
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1062,
                "end": 1132
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
                      "start": 1141,
                      "end": 1148
                    },
                    "value": {
                      "type": "Literal",
                      "value": "nosKill",
                      "raw": "\"nosKill\"",
                      "start": 1150,
                      "end": 1159
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1141,
                    "end": 1159
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
                      "start": 1161,
                      "end": 1170
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 1172,
                      "end": 1181
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1161,
                    "end": 1181
                  }
                ],
                "start": 1139,
                "end": 1183
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1062,
              "end": 1183
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1054,
            "end": 1183
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1052,
        "end": 1185
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1189,
        "end": 1200
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
                  "start": 1208,
                  "end": 1215
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1216,
                  "end": 1219
                },
                "optional": false,
                "computed": false,
                "start": 1208,
                "end": 1219
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1220,
                  "end": 1228
                }
              ],
              "optional": false,
              "start": 1208,
              "end": 1229
            },
            "directive": null,
            "start": 1208,
            "end": 1230
          }
        ],
        "start": 1202,
        "end": 1232
      },
      "start": 1047,
      "end": 1232
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
              "start": 1240,
              "end": 1246
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
                      "start": 1250,
                      "end": 1257
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
                        "start": 1259,
                        "end": 1267
                      },
                      "right": {
                        "type": "Literal",
                        "value": "primary",
                        "raw": "\"primary\"",
                        "start": 1270,
                        "end": 1279
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1259,
                      "end": 1279
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1250,
                    "end": 1279
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
                      "start": 1281,
                      "end": 1290
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
                        "start": 1292,
                        "end": 1302
                      },
                      "right": {
                        "type": "Literal",
                        "value": "secondary",
                        "raw": "\"secondary\"",
                        "start": 1305,
                        "end": 1316
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1292,
                      "end": 1316
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1281,
                    "end": 1316
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1248,
                "end": 1318
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
                      "start": 1327,
                      "end": 1334
                    },
                    "value": {
                      "type": "Literal",
                      "value": "nosKill",
                      "raw": "\"nosKill\"",
                      "start": 1336,
                      "end": 1345
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1327,
                    "end": 1345
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
                      "start": 1347,
                      "end": 1356
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 1358,
                      "end": 1367
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1347,
                    "end": 1367
                  }
                ],
                "start": 1325,
                "end": 1369
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1248,
              "end": 1369
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1240,
            "end": 1369
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1238,
        "end": 1371
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1375,
          "end": 1389
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1375,
        "end": 1391
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
                  "start": 1399,
                  "end": 1406
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1407,
                  "end": 1410
                },
                "optional": false,
                "computed": false,
                "start": 1399,
                "end": 1410
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1411,
                  "end": 1419
                }
              ],
              "optional": false,
              "start": 1399,
              "end": 1420
            },
            "directive": null,
            "start": 1399,
            "end": 1421
          }
        ],
        "start": 1393,
        "end": 1423
      },
      "start": 1233,
      "end": 1423
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
              "start": 1431,
              "end": 1437
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
                      "start": 1441,
                      "end": 1448
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
                        "start": 1450,
                        "end": 1458
                      },
                      "right": {
                        "type": "Literal",
                        "value": "primary",
                        "raw": "\"primary\"",
                        "start": 1461,
                        "end": 1470
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1450,
                      "end": 1470
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1441,
                    "end": 1470
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
                      "start": 1472,
                      "end": 1481
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
                        "start": 1483,
                        "end": 1493
                      },
                      "right": {
                        "type": "Literal",
                        "value": "secondary",
                        "raw": "\"secondary\"",
                        "start": 1496,
                        "end": 1507
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1483,
                      "end": 1507
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1472,
                    "end": 1507
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1439,
                "end": 1509
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
                      "start": 1518,
                      "end": 1525
                    },
                    "value": {
                      "type": "Literal",
                      "value": "nosKill",
                      "raw": "\"nosKill\"",
                      "start": 1527,
                      "end": 1536
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1518,
                    "end": 1536
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
                      "start": 1538,
                      "end": 1547
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 1549,
                      "end": 1558
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1538,
                    "end": 1558
                  }
                ],
                "start": 1516,
                "end": 1560
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1439,
              "end": 1560
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1431,
            "end": 1560
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1429,
        "end": 1562
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
              "start": 1571,
              "end": 1581
            },
            "typeArguments": null,
            "start": 1571,
            "end": 1581
          },
          "start": 1571,
          "end": 1583
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
                    "start": 1587,
                    "end": 1591
                  },
                  "value": {
                    "type": "Literal",
                    "value": "mower",
                    "raw": "\"mower\"",
                    "start": 1593,
                    "end": 1600
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1587,
                  "end": 1600
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
                    "start": 1602,
                    "end": 1608
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
                          "start": 1612,
                          "end": 1619
                        },
                        "value": {
                          "type": "Literal",
                          "value": "mowing",
                          "raw": "\"mowing\"",
                          "start": 1621,
                          "end": 1629
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1612,
                        "end": 1629
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
                          "start": 1631,
                          "end": 1640
                        },
                        "value": {
                          "type": "Literal",
                          "value": "none",
                          "raw": "\"none\"",
                          "start": 1642,
                          "end": 1648
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1631,
                        "end": 1648
                      }
                    ],
                    "start": 1610,
                    "end": 1650
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1602,
                  "end": 1650
                }
              ],
              "start": 1585,
              "end": 1652
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
                    "start": 1664,
                    "end": 1668
                  },
                  "value": {
                    "type": "Literal",
                    "value": "trimmer",
                    "raw": "\"trimmer\"",
                    "start": 1670,
                    "end": 1679
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1664,
                  "end": 1679
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
                    "start": 1681,
                    "end": 1687
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
                          "start": 1691,
                          "end": 1698
                        },
                        "value": {
                          "type": "Literal",
                          "value": "trimming",
                          "raw": "\"trimming\"",
                          "start": 1700,
                          "end": 1710
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1691,
                        "end": 1710
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
                          "start": 1712,
                          "end": 1721
                        },
                        "value": {
                          "type": "Literal",
                          "value": "edging",
                          "raw": "\"edging\"",
                          "start": 1723,
                          "end": 1731
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1712,
                        "end": 1731
                      }
                    ],
                    "start": 1689,
                    "end": 1733
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1681,
                  "end": 1733
                }
              ],
              "start": 1662,
              "end": 1735
            }
          ],
          "start": 1584,
          "end": 1736
        },
        "start": 1570,
        "end": 1736
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
                  "start": 1744,
                  "end": 1751
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1752,
                  "end": 1755
                },
                "optional": false,
                "computed": false,
                "start": 1744,
                "end": 1755
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1756,
                  "end": 1764
                }
              ],
              "optional": false,
              "start": 1744,
              "end": 1765
            },
            "directive": null,
            "start": 1744,
            "end": 1766
          }
        ],
        "start": 1738,
        "end": 1768
      },
      "start": 1424,
      "end": 1768
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
              "start": 1777,
              "end": 1781
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 1777,
                "end": 1781
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 1784,
                "end": 1792
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1777,
              "end": 1792
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 1777,
            "end": 1792
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1775,
        "end": 1794
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1798,
        "end": 1804
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
                  "start": 1812,
                  "end": 1819
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1820,
                  "end": 1823
                },
                "optional": false,
                "computed": false,
                "start": 1812,
                "end": 1823
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1824,
                  "end": 1829
                }
              ],
              "optional": false,
              "start": 1812,
              "end": 1830
            },
            "directive": null,
            "start": 1812,
            "end": 1831
          }
        ],
        "start": 1806,
        "end": 1833
      },
      "start": 1770,
      "end": 1833
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
              "start": 1841,
              "end": 1845
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 1841,
                "end": 1845
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 1848,
                "end": 1856
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1841,
              "end": 1856
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 1841,
            "end": 1856
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1839,
        "end": 1858
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1862,
          "end": 1871
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1862,
        "end": 1873
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
                  "start": 1881,
                  "end": 1888
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1889,
                  "end": 1892
                },
                "optional": false,
                "computed": false,
                "start": 1881,
                "end": 1892
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1893,
                  "end": 1898
                }
              ],
              "optional": false,
              "start": 1881,
              "end": 1899
            },
            "directive": null,
            "start": 1881,
            "end": 1900
          }
        ],
        "start": 1875,
        "end": 1902
      },
      "start": 1834,
      "end": 1902
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
              "start": 1910,
              "end": 1914
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 1910,
                "end": 1914
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 1917,
                "end": 1925
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1910,
              "end": 1925
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 1910,
            "end": 1925
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1908,
        "end": 1927
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
                  "start": 1934,
                  "end": 1938
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 1940,
                  "end": 1947
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1934,
                "end": 1947
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
                  "start": 1949,
                  "end": 1954
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 1956,
                  "end": 1964
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1949,
                "end": 1964
              }
            ],
            "start": 1932,
            "end": 1966
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
                  "start": 1970,
                  "end": 1974
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1976,
                  "end": 1985
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1970,
                "end": 1985
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
                  "start": 1987,
                  "end": 1992
                },
                "value": {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 1994,
                  "end": 2004
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1987,
                "end": 2004
              }
            ],
            "start": 1968,
            "end": 2006
          }
        ],
        "start": 1931,
        "end": 2007
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
                  "start": 2015,
                  "end": 2022
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2023,
                  "end": 2026
                },
                "optional": false,
                "computed": false,
                "start": 2015,
                "end": 2026
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2027,
                  "end": 2032
                }
              ],
              "optional": false,
              "start": 2015,
              "end": 2033
            },
            "directive": null,
            "start": 2015,
            "end": 2034
          }
        ],
        "start": 2009,
        "end": 2036
      },
      "start": 1903,
      "end": 2036
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
              "start": 2048,
              "end": 2054
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
                      "start": 2066,
                      "end": 2073
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2066,
                        "end": 2073
                      },
                      "right": {
                        "type": "Literal",
                        "value": "primary",
                        "raw": "\"primary\"",
                        "start": 2076,
                        "end": 2085
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2066,
                      "end": 2085
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2066,
                    "end": 2085
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
                      "start": 2095,
                      "end": 2104
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2095,
                        "end": 2104
                      },
                      "right": {
                        "type": "Literal",
                        "value": "secondary",
                        "raw": "\"secondary\"",
                        "start": 2107,
                        "end": 2118
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2095,
                      "end": 2118
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2095,
                    "end": 2118
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 2056,
                "end": 2124
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
                      "start": 2129,
                      "end": 2136
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 2138,
                      "end": 2147
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2129,
                    "end": 2147
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
                      "start": 2149,
                      "end": 2158
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 2160,
                      "end": 2169
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2149,
                    "end": 2169
                  }
                ],
                "start": 2127,
                "end": 2171
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 2056,
              "end": 2171
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2048,
            "end": 2171
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2042,
        "end": 2173
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 2177,
        "end": 2188
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
                  "start": 2196,
                  "end": 2203
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2204,
                  "end": 2207
                },
                "optional": false,
                "computed": false,
                "start": 2196,
                "end": 2207
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2208,
                  "end": 2216
                }
              ],
              "optional": false,
              "start": 2196,
              "end": 2217
            },
            "directive": null,
            "start": 2196,
            "end": 2218
          }
        ],
        "start": 2190,
        "end": 2220
      },
      "start": 2037,
      "end": 2220
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
              "start": 2232,
              "end": 2238
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
                      "start": 2250,
                      "end": 2257
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2250,
                        "end": 2257
                      },
                      "right": {
                        "type": "Literal",
                        "value": "primary",
                        "raw": "\"primary\"",
                        "start": 2260,
                        "end": 2269
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2250,
                      "end": 2269
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2250,
                    "end": 2269
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
                      "start": 2279,
                      "end": 2288
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2279,
                        "end": 2288
                      },
                      "right": {
                        "type": "Literal",
                        "value": "secondary",
                        "raw": "\"secondary\"",
                        "start": 2291,
                        "end": 2302
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2279,
                      "end": 2302
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2279,
                    "end": 2302
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 2240,
                "end": 2308
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
                      "start": 2313,
                      "end": 2320
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 2322,
                      "end": 2331
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2313,
                    "end": 2331
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
                      "start": 2333,
                      "end": 2342
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 2344,
                      "end": 2353
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2333,
                    "end": 2353
                  }
                ],
                "start": 2311,
                "end": 2355
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 2240,
              "end": 2355
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2232,
            "end": 2355
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2226,
        "end": 2357
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 2361,
          "end": 2375
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2361,
        "end": 2377
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
                  "start": 2385,
                  "end": 2392
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2393,
                  "end": 2396
                },
                "optional": false,
                "computed": false,
                "start": 2385,
                "end": 2396
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2397,
                  "end": 2405
                }
              ],
              "optional": false,
              "start": 2385,
              "end": 2406
            },
            "directive": null,
            "start": 2385,
            "end": 2407
          }
        ],
        "start": 2379,
        "end": 2409
      },
      "start": 2221,
      "end": 2409
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
              "start": 2421,
              "end": 2427
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
                      "start": 2439,
                      "end": 2446
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2439,
                        "end": 2446
                      },
                      "right": {
                        "type": "Literal",
                        "value": "primary",
                        "raw": "\"primary\"",
                        "start": 2449,
                        "end": 2458
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2439,
                      "end": 2458
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2439,
                    "end": 2458
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
                      "start": 2468,
                      "end": 2477
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2468,
                        "end": 2477
                      },
                      "right": {
                        "type": "Literal",
                        "value": "secondary",
                        "raw": "\"secondary\"",
                        "start": 2480,
                        "end": 2491
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2468,
                      "end": 2491
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2468,
                    "end": 2491
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 2429,
                "end": 2497
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
                      "start": 2502,
                      "end": 2509
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 2511,
                      "end": 2520
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2502,
                    "end": 2520
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
                      "start": 2522,
                      "end": 2531
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 2533,
                      "end": 2542
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2522,
                    "end": 2542
                  }
                ],
                "start": 2500,
                "end": 2544
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 2429,
              "end": 2544
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2421,
            "end": 2544
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2415,
        "end": 2546
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
                  "start": 2553,
                  "end": 2557
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 2559,
                  "end": 2566
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2553,
                "end": 2566
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
                  "start": 2568,
                  "end": 2574
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
                        "start": 2578,
                        "end": 2585
                      },
                      "value": {
                        "type": "Literal",
                        "value": "mowing",
                        "raw": "\"mowing\"",
                        "start": 2587,
                        "end": 2595
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2578,
                      "end": 2595
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
                        "start": 2597,
                        "end": 2606
                      },
                      "value": {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2608,
                        "end": 2614
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2597,
                      "end": 2614
                    }
                  ],
                  "start": 2576,
                  "end": 2616
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2568,
                "end": 2616
              }
            ],
            "start": 2551,
            "end": 2618
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
                  "start": 2626,
                  "end": 2630
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 2632,
                  "end": 2641
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2626,
                "end": 2641
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
                  "start": 2643,
                  "end": 2649
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
                        "start": 2653,
                        "end": 2660
                      },
                      "value": {
                        "type": "Literal",
                        "value": "trimming",
                        "raw": "\"trimming\"",
                        "start": 2662,
                        "end": 2672
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2653,
                      "end": 2672
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
                        "start": 2674,
                        "end": 2683
                      },
                      "value": {
                        "type": "Literal",
                        "value": "edging",
                        "raw": "\"edging\"",
                        "start": 2685,
                        "end": 2693
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2674,
                      "end": 2693
                    }
                  ],
                  "start": 2651,
                  "end": 2695
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2643,
                "end": 2695
              }
            ],
            "start": 2624,
            "end": 2697
          }
        ],
        "start": 2550,
        "end": 2698
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
                  "start": 2706,
                  "end": 2713
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2714,
                  "end": 2717
                },
                "optional": false,
                "computed": false,
                "start": 2706,
                "end": 2717
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2718,
                  "end": 2726
                }
              ],
              "optional": false,
              "start": 2706,
              "end": 2727
            },
            "directive": null,
            "start": 2706,
            "end": 2728
          }
        ],
        "start": 2700,
        "end": 2730
      },
      "start": 2410,
      "end": 2730
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
              "start": 2739,
              "end": 2743
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
                "start": 2745,
                "end": 2750
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 2753,
                "end": 2761
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 2745,
              "end": 2761
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2739,
            "end": 2761
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
              "start": 2763,
              "end": 2768
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
                "start": 2770,
                "end": 2776
              },
              "right": {
                "type": "Literal",
                "value": "noSkill",
                "raw": "\"noSkill\"",
                "start": 2779,
                "end": 2788
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 2770,
              "end": 2788
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2763,
            "end": 2788
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2738,
        "end": 2790
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 2794,
        "end": 2800
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
                  "start": 2808,
                  "end": 2815
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2816,
                  "end": 2819
                },
                "optional": false,
                "computed": false,
                "start": 2808,
                "end": 2819
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2820,
                  "end": 2825
                }
              ],
              "optional": false,
              "start": 2808,
              "end": 2826
            },
            "directive": null,
            "start": 2808,
            "end": 2827
          }
        ],
        "start": 2802,
        "end": 2829
      },
      "start": 2733,
      "end": 2829
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
              "start": 2836,
              "end": 2840
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
                "start": 2842,
                "end": 2847
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 2850,
                "end": 2858
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 2842,
              "end": 2858
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2836,
            "end": 2858
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
              "start": 2860,
              "end": 2865
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
                "start": 2867,
                "end": 2873
              },
              "right": {
                "type": "Literal",
                "value": "noSkill",
                "raw": "\"noSkill\"",
                "start": 2876,
                "end": 2885
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 2867,
              "end": 2885
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2860,
            "end": 2885
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2835,
        "end": 2888
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 2892,
          "end": 2901
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2892,
        "end": 2903
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
                  "start": 2911,
                  "end": 2918
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2919,
                  "end": 2922
                },
                "optional": false,
                "computed": false,
                "start": 2911,
                "end": 2922
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2923,
                  "end": 2928
                }
              ],
              "optional": false,
              "start": 2911,
              "end": 2929
            },
            "directive": null,
            "start": 2911,
            "end": 2930
          }
        ],
        "start": 2905,
        "end": 2932
      },
      "start": 2830,
      "end": 2932
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
              "start": 2939,
              "end": 2943
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
                "start": 2945,
                "end": 2950
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 2953,
                "end": 2961
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 2945,
              "end": 2961
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2939,
            "end": 2961
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
              "start": 2963,
              "end": 2968
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
                "start": 2970,
                "end": 2976
              },
              "right": {
                "type": "Literal",
                "value": "noSkill",
                "raw": "\"noSkill\"",
                "start": 2979,
                "end": 2988
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 2970,
              "end": 2988
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2963,
            "end": 2988
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2938,
        "end": 2991
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
                  "start": 2998,
                  "end": 3002
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 3004,
                  "end": 3011
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2998,
                "end": 3011
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
                  "start": 3013,
                  "end": 3018
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 3020,
                  "end": 3028
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3013,
                "end": 3028
              }
            ],
            "start": 2996,
            "end": 3030
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
                  "start": 3034,
                  "end": 3038
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 3040,
                  "end": 3049
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3034,
                "end": 3049
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
                  "start": 3051,
                  "end": 3056
                },
                "value": {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 3058,
                  "end": 3068
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3051,
                "end": 3068
              }
            ],
            "start": 3032,
            "end": 3070
          }
        ],
        "start": 2995,
        "end": 3071
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
                  "start": 3079,
                  "end": 3086
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3087,
                  "end": 3090
                },
                "optional": false,
                "computed": false,
                "start": 3079,
                "end": 3090
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3091,
                  "end": 3096
                }
              ],
              "optional": false,
              "start": 3079,
              "end": 3097
            },
            "directive": null,
            "start": 3079,
            "end": 3098
          }
        ],
        "start": 3073,
        "end": 3100
      },
      "start": 2933,
      "end": 3100
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
              "start": 3112,
              "end": 3116
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
                "start": 3118,
                "end": 3123
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 3126,
                "end": 3134
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 3118,
              "end": 3134
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 3112,
            "end": 3134
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
              "start": 3140,
              "end": 3146
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
                      "start": 3158,
                      "end": 3165
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
                        "start": 3167,
                        "end": 3175
                      },
                      "right": {
                        "type": "Literal",
                        "value": "primary",
                        "raw": "\"primary\"",
                        "start": 3178,
                        "end": 3187
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3167,
                      "end": 3187
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3158,
                    "end": 3187
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
                      "start": 3197,
                      "end": 3206
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
                        "start": 3208,
                        "end": 3218
                      },
                      "right": {
                        "type": "Literal",
                        "value": "secondary",
                        "raw": "\"secondary\"",
                        "start": 3221,
                        "end": 3232
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3208,
                      "end": 3232
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3197,
                    "end": 3232
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 3148,
                "end": 3238
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
                      "start": 3243,
                      "end": 3250
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 3252,
                      "end": 3261
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3243,
                    "end": 3261
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
                      "start": 3263,
                      "end": 3272
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 3274,
                      "end": 3283
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3263,
                    "end": 3283
                  }
                ],
                "start": 3241,
                "end": 3285
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 3148,
              "end": 3285
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 3140,
            "end": 3285
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 3106,
        "end": 3287
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 3291,
        "end": 3302
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
                  "start": 3310,
                  "end": 3317
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3318,
                  "end": 3321
                },
                "optional": false,
                "computed": false,
                "start": 3310,
                "end": 3321
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3322,
                  "end": 3327
                }
              ],
              "optional": false,
              "start": 3310,
              "end": 3328
            },
            "directive": null,
            "start": 3310,
            "end": 3329
          }
        ],
        "start": 3304,
        "end": 3331
      },
      "start": 3101,
      "end": 3331
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
              "start": 3343,
              "end": 3347
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
                "start": 3349,
                "end": 3354
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 3357,
                "end": 3365
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 3349,
              "end": 3365
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 3343,
            "end": 3365
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
              "start": 3371,
              "end": 3377
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
                      "start": 3389,
                      "end": 3396
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
                        "start": 3398,
                        "end": 3406
                      },
                      "right": {
                        "type": "Literal",
                        "value": "primary",
                        "raw": "\"primary\"",
                        "start": 3409,
                        "end": 3418
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3398,
                      "end": 3418
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3389,
                    "end": 3418
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
                      "start": 3428,
                      "end": 3437
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
                        "start": 3439,
                        "end": 3449
                      },
                      "right": {
                        "type": "Literal",
                        "value": "secondary",
                        "raw": "\"secondary\"",
                        "start": 3452,
                        "end": 3463
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3439,
                      "end": 3463
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3428,
                    "end": 3463
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 3379,
                "end": 3469
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
                      "start": 3474,
                      "end": 3481
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 3483,
                      "end": 3492
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3474,
                    "end": 3492
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
                      "start": 3494,
                      "end": 3503
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 3505,
                      "end": 3514
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3494,
                    "end": 3514
                  }
                ],
                "start": 3472,
                "end": 3516
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 3379,
              "end": 3516
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 3371,
            "end": 3516
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 3337,
        "end": 3518
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 3522,
          "end": 3536
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 3522,
        "end": 3538
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
                  "start": 3546,
                  "end": 3553
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3554,
                  "end": 3557
                },
                "optional": false,
                "computed": false,
                "start": 3546,
                "end": 3557
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3558,
                  "end": 3563
                }
              ],
              "optional": false,
              "start": 3546,
              "end": 3564
            },
            "directive": null,
            "start": 3546,
            "end": 3565
          }
        ],
        "start": 3540,
        "end": 3567
      },
      "start": 3332,
      "end": 3567
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
              "start": 3579,
              "end": 3583
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
                "start": 3585,
                "end": 3590
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 3593,
                "end": 3601
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 3585,
              "end": 3601
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 3579,
            "end": 3601
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
              "start": 3607,
              "end": 3613
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
                      "start": 3625,
                      "end": 3632
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
                        "start": 3634,
                        "end": 3642
                      },
                      "right": {
                        "type": "Literal",
                        "value": "primary",
                        "raw": "\"primary\"",
                        "start": 3645,
                        "end": 3654
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3634,
                      "end": 3654
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3625,
                    "end": 3654
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
                      "start": 3664,
                      "end": 3673
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
                        "start": 3675,
                        "end": 3685
                      },
                      "right": {
                        "type": "Literal",
                        "value": "secondary",
                        "raw": "\"secondary\"",
                        "start": 3688,
                        "end": 3699
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3675,
                      "end": 3699
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3664,
                    "end": 3699
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 3615,
                "end": 3705
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
                      "start": 3710,
                      "end": 3717
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 3719,
                      "end": 3728
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3710,
                    "end": 3728
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
                      "start": 3730,
                      "end": 3739
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 3741,
                      "end": 3750
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3730,
                    "end": 3750
                  }
                ],
                "start": 3708,
                "end": 3752
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 3615,
              "end": 3752
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 3607,
            "end": 3752
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 3573,
        "end": 3754
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
              "start": 3759,
              "end": 3769
            },
            "typeArguments": null,
            "start": 3759,
            "end": 3769
          },
          "start": 3759,
          "end": 3771
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
                    "start": 3775,
                    "end": 3779
                  },
                  "value": {
                    "type": "Literal",
                    "value": "mower",
                    "raw": "\"mower\"",
                    "start": 3781,
                    "end": 3788
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3775,
                  "end": 3788
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
                    "start": 3790,
                    "end": 3796
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
                          "start": 3800,
                          "end": 3807
                        },
                        "value": {
                          "type": "Literal",
                          "value": "mowing",
                          "raw": "\"mowing\"",
                          "start": 3809,
                          "end": 3817
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 3800,
                        "end": 3817
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
                          "start": 3819,
                          "end": 3828
                        },
                        "value": {
                          "type": "Literal",
                          "value": "none",
                          "raw": "\"none\"",
                          "start": 3830,
                          "end": 3836
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 3819,
                        "end": 3836
                      }
                    ],
                    "start": 3798,
                    "end": 3838
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3790,
                  "end": 3838
                }
              ],
              "start": 3773,
              "end": 3840
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
                    "start": 3848,
                    "end": 3852
                  },
                  "value": {
                    "type": "Literal",
                    "value": "trimmer",
                    "raw": "\"trimmer\"",
                    "start": 3854,
                    "end": 3863
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3848,
                  "end": 3863
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
                    "start": 3865,
                    "end": 3871
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
                          "start": 3875,
                          "end": 3882
                        },
                        "value": {
                          "type": "Literal",
                          "value": "trimming",
                          "raw": "\"trimming\"",
                          "start": 3884,
                          "end": 3894
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 3875,
                        "end": 3894
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
                          "start": 3896,
                          "end": 3905
                        },
                        "value": {
                          "type": "Literal",
                          "value": "edging",
                          "raw": "\"edging\"",
                          "start": 3907,
                          "end": 3915
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 3896,
                        "end": 3915
                      }
                    ],
                    "start": 3873,
                    "end": 3917
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3865,
                  "end": 3917
                }
              ],
              "start": 3846,
              "end": 3919
            }
          ],
          "start": 3772,
          "end": 3920
        },
        "start": 3758,
        "end": 3920
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
                  "start": 3928,
                  "end": 3935
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3936,
                  "end": 3939
                },
                "optional": false,
                "computed": false,
                "start": 3928,
                "end": 3939
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3940,
                  "end": 3945
                }
              ],
              "optional": false,
              "start": 3928,
              "end": 3946
            },
            "directive": null,
            "start": 3928,
            "end": 3947
          }
        ],
        "start": 3922,
        "end": 3949
      },
      "start": 3568,
      "end": 3949
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
              "start": 3958,
              "end": 3962
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 3958,
                "end": 3962
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 3965,
                "end": 3973
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 3958,
              "end": 3973
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 3958,
            "end": 3973
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
              "start": 3975,
              "end": 3980
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "skill",
                "optional": false,
                "typeAnnotation": null,
                "start": 3975,
                "end": 3980
              },
              "right": {
                "type": "Literal",
                "value": "noSkill",
                "raw": "\"noSkill\"",
                "start": 3984,
                "end": 3993
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 3975,
              "end": 3993
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 3975,
            "end": 3993
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 3956,
        "end": 3995
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 3999,
        "end": 4005
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
                  "start": 4013,
                  "end": 4020
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4021,
                  "end": 4024
                },
                "optional": false,
                "computed": false,
                "start": 4013,
                "end": 4024
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4025,
                  "end": 4030
                }
              ],
              "optional": false,
              "start": 4013,
              "end": 4031
            },
            "directive": null,
            "start": 4013,
            "end": 4032
          }
        ],
        "start": 4007,
        "end": 4034
      },
      "start": 3951,
      "end": 4034
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
              "start": 4042,
              "end": 4046
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 4042,
                "end": 4046
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 4049,
                "end": 4057
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 4042,
              "end": 4057
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 4042,
            "end": 4057
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
              "start": 4059,
              "end": 4064
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "skill",
                "optional": false,
                "typeAnnotation": null,
                "start": 4059,
                "end": 4064
              },
              "right": {
                "type": "Literal",
                "value": "noSkill",
                "raw": "\"noSkill\"",
                "start": 4067,
                "end": 4076
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 4059,
              "end": 4076
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 4059,
            "end": 4076
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 4040,
        "end": 4079
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 4083,
          "end": 4092
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 4083,
        "end": 4094
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
                  "start": 4102,
                  "end": 4109
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4110,
                  "end": 4113
                },
                "optional": false,
                "computed": false,
                "start": 4102,
                "end": 4113
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4114,
                  "end": 4119
                }
              ],
              "optional": false,
              "start": 4102,
              "end": 4120
            },
            "directive": null,
            "start": 4102,
            "end": 4121
          }
        ],
        "start": 4096,
        "end": 4123
      },
      "start": 4035,
      "end": 4123
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
              "start": 4131,
              "end": 4135
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 4131,
                "end": 4135
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 4138,
                "end": 4146
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 4131,
              "end": 4146
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 4131,
            "end": 4146
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
              "start": 4148,
              "end": 4153
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "skill",
                "optional": false,
                "typeAnnotation": null,
                "start": 4148,
                "end": 4153
              },
              "right": {
                "type": "Literal",
                "value": "noSkill",
                "raw": "\"noSkill\"",
                "start": 4157,
                "end": 4166
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 4148,
              "end": 4166
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 4148,
            "end": 4166
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 4129,
        "end": 4168
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
                  "start": 4175,
                  "end": 4179
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 4181,
                  "end": 4188
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4175,
                "end": 4188
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
                  "start": 4190,
                  "end": 4195
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 4197,
                  "end": 4205
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4190,
                "end": 4205
              }
            ],
            "start": 4173,
            "end": 4207
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
                  "start": 4211,
                  "end": 4215
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 4217,
                  "end": 4226
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4211,
                "end": 4226
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
                  "start": 4228,
                  "end": 4233
                },
                "value": {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 4235,
                  "end": 4245
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4228,
                "end": 4245
              }
            ],
            "start": 4209,
            "end": 4247
          }
        ],
        "start": 4172,
        "end": 4248
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
                  "start": 4256,
                  "end": 4263
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4264,
                  "end": 4267
                },
                "optional": false,
                "computed": false,
                "start": 4256,
                "end": 4267
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4268,
                  "end": 4273
                }
              ],
              "optional": false,
              "start": 4256,
              "end": 4274
            },
            "directive": null,
            "start": 4256,
            "end": 4275
          }
        ],
        "start": 4250,
        "end": 4277
      },
      "start": 4124,
      "end": 4277
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
              "start": 4289,
              "end": 4293
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 4289,
                "end": 4293
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 4296,
                "end": 4304
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 4289,
              "end": 4304
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 4289,
            "end": 4304
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
              "start": 4310,
              "end": 4316
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
                      "start": 4328,
                      "end": 4335
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4328,
                        "end": 4335
                      },
                      "right": {
                        "type": "Literal",
                        "value": "primary",
                        "raw": "\"primary\"",
                        "start": 4338,
                        "end": 4347
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4328,
                      "end": 4347
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 4328,
                    "end": 4347
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
                      "start": 4357,
                      "end": 4366
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4357,
                        "end": 4366
                      },
                      "right": {
                        "type": "Literal",
                        "value": "secondary",
                        "raw": "\"secondary\"",
                        "start": 4369,
                        "end": 4380
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4357,
                      "end": 4380
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 4357,
                    "end": 4380
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 4318,
                "end": 4386
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
                      "start": 4391,
                      "end": 4398
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 4400,
                      "end": 4409
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4391,
                    "end": 4409
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
                      "start": 4411,
                      "end": 4420
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 4422,
                      "end": 4431
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4411,
                    "end": 4431
                  }
                ],
                "start": 4389,
                "end": 4433
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 4318,
              "end": 4433
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 4310,
            "end": 4433
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 4283,
        "end": 4435
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 4439,
        "end": 4450
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
                  "start": 4458,
                  "end": 4465
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4466,
                  "end": 4469
                },
                "optional": false,
                "computed": false,
                "start": 4458,
                "end": 4469
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4470,
                  "end": 4475
                }
              ],
              "optional": false,
              "start": 4458,
              "end": 4476
            },
            "directive": null,
            "start": 4458,
            "end": 4477
          }
        ],
        "start": 4452,
        "end": 4479
      },
      "start": 4278,
      "end": 4479
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
              "start": 4491,
              "end": 4495
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 4491,
                "end": 4495
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 4498,
                "end": 4506
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 4491,
              "end": 4506
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 4491,
            "end": 4506
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
              "start": 4512,
              "end": 4518
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
                      "start": 4530,
                      "end": 4537
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4530,
                        "end": 4537
                      },
                      "right": {
                        "type": "Literal",
                        "value": "primary",
                        "raw": "\"primary\"",
                        "start": 4540,
                        "end": 4549
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4530,
                      "end": 4549
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 4530,
                    "end": 4549
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
                      "start": 4559,
                      "end": 4568
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4559,
                        "end": 4568
                      },
                      "right": {
                        "type": "Literal",
                        "value": "secondary",
                        "raw": "\"secondary\"",
                        "start": 4571,
                        "end": 4582
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4559,
                      "end": 4582
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 4559,
                    "end": 4582
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 4520,
                "end": 4588
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
                      "start": 4593,
                      "end": 4600
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 4602,
                      "end": 4611
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4593,
                    "end": 4611
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
                      "start": 4613,
                      "end": 4622
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 4624,
                      "end": 4633
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4613,
                    "end": 4633
                  }
                ],
                "start": 4591,
                "end": 4635
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 4520,
              "end": 4635
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 4512,
            "end": 4635
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 4485,
        "end": 4637
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 4641,
          "end": 4655
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 4641,
        "end": 4657
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
                  "start": 4665,
                  "end": 4672
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4673,
                  "end": 4676
                },
                "optional": false,
                "computed": false,
                "start": 4665,
                "end": 4676
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4677,
                  "end": 4682
                }
              ],
              "optional": false,
              "start": 4665,
              "end": 4683
            },
            "directive": null,
            "start": 4665,
            "end": 4684
          }
        ],
        "start": 4659,
        "end": 4686
      },
      "start": 4480,
      "end": 4686
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
              "start": 4698,
              "end": 4702
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 4698,
                "end": 4702
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 4705,
                "end": 4713
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 4698,
              "end": 4713
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 4698,
            "end": 4713
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
              "start": 4719,
              "end": 4725
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
                      "start": 4737,
                      "end": 4744
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4737,
                        "end": 4744
                      },
                      "right": {
                        "type": "Literal",
                        "value": "primary",
                        "raw": "\"primary\"",
                        "start": 4747,
                        "end": 4756
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4737,
                      "end": 4756
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 4737,
                    "end": 4756
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
                      "start": 4766,
                      "end": 4775
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4766,
                        "end": 4775
                      },
                      "right": {
                        "type": "Literal",
                        "value": "secondary",
                        "raw": "\"secondary\"",
                        "start": 4778,
                        "end": 4789
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4766,
                      "end": 4789
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 4766,
                    "end": 4789
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 4727,
                "end": 4795
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
                      "start": 4800,
                      "end": 4807
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 4809,
                      "end": 4818
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4800,
                    "end": 4818
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
                      "start": 4820,
                      "end": 4829
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 4831,
                      "end": 4840
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4820,
                    "end": 4840
                  }
                ],
                "start": 4798,
                "end": 4842
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 4727,
              "end": 4842
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 4719,
            "end": 4842
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 4692,
        "end": 4844
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
                  "start": 4851,
                  "end": 4855
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 4857,
                  "end": 4864
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4851,
                "end": 4864
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
                  "start": 4866,
                  "end": 4872
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
                        "start": 4876,
                        "end": 4883
                      },
                      "value": {
                        "type": "Literal",
                        "value": "mowing",
                        "raw": "\"mowing\"",
                        "start": 4885,
                        "end": 4893
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4876,
                      "end": 4893
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
                        "start": 4895,
                        "end": 4904
                      },
                      "value": {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 4906,
                        "end": 4912
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4895,
                      "end": 4912
                    }
                  ],
                  "start": 4874,
                  "end": 4914
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4866,
                "end": 4914
              }
            ],
            "start": 4849,
            "end": 4916
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
                  "start": 4924,
                  "end": 4928
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 4930,
                  "end": 4939
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4924,
                "end": 4939
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
                  "start": 4941,
                  "end": 4947
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
                        "start": 4951,
                        "end": 4958
                      },
                      "value": {
                        "type": "Literal",
                        "value": "trimming",
                        "raw": "\"trimming\"",
                        "start": 4960,
                        "end": 4970
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4951,
                      "end": 4970
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
                        "start": 4972,
                        "end": 4981
                      },
                      "value": {
                        "type": "Literal",
                        "value": "edging",
                        "raw": "\"edging\"",
                        "start": 4983,
                        "end": 4991
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4972,
                      "end": 4991
                    }
                  ],
                  "start": 4949,
                  "end": 4993
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4941,
                "end": 4993
              }
            ],
            "start": 4922,
            "end": 4995
          }
        ],
        "start": 4848,
        "end": 4996
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
                  "start": 5004,
                  "end": 5011
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5012,
                  "end": 5015
                },
                "optional": false,
                "computed": false,
                "start": 5004,
                "end": 5015
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5016,
                  "end": 5021
                }
              ],
              "optional": false,
              "start": 5004,
              "end": 5022
            },
            "directive": null,
            "start": 5004,
            "end": 5023
          }
        ],
        "start": 4998,
        "end": 5025
      },
      "start": 4687,
      "end": 5025
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 5025
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
    "value": "=",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 782,
    "end": 790,
    "range": [
      782,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 793,
    "end": 795,
    "range": [
      793,
      795
    ]
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 796,
    "end": 802,
    "range": [
      796,
      802
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 802,
    "end": 803,
    "range": [
      802,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 810,
    "end": 817,
    "range": [
      810,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 818,
    "end": 821,
    "range": [
      818,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 822,
    "end": 827,
    "range": [
      822,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 827,
    "end": 828,
    "range": [
      827,
      828
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 832,
    "end": 835,
    "range": [
      832,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 838,
    "end": 842,
    "range": [
      838,
      842
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 842,
    "end": 843,
    "range": [
      842,
      843
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 844,
    "end": 849,
    "range": [
      844,
      849
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 850,
    "end": 851,
    "range": [
      850,
      851
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 852,
    "end": 860,
    "range": [
      852,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 863,
    "end": 865,
    "range": [
      863,
      865
    ]
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 866,
    "end": 875,
    "range": [
      866,
      875
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 875,
    "end": 876,
    "range": [
      875,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 885,
    "end": 892,
    "range": [
      885,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 893,
    "end": 896,
    "range": [
      893,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
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
    "value": ")",
    "start": 902,
    "end": 903,
    "range": [
      902,
      903
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 907,
    "end": 910,
    "range": [
      907,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 912,
    "end": 913,
    "range": [
      912,
      913
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 913,
    "end": 917,
    "range": [
      913,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 919,
    "end": 924,
    "range": [
      919,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 927,
    "end": 935,
    "range": [
      927,
      935
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 938,
    "end": 940,
    "range": [
      938,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 941,
    "end": 942,
    "range": [
      941,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 944,
    "end": 948,
    "range": [
      944,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 950,
    "end": 957,
    "range": [
      950,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 957,
    "end": 958,
    "range": [
      957,
      958
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 959,
    "end": 964,
    "range": [
      959,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 966,
    "end": 974,
    "range": [
      966,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 978,
    "end": 979,
    "range": [
      978,
      979
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 980,
    "end": 984,
    "range": [
      980,
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
    "value": "\"trimmer\"",
    "start": 986,
    "end": 995,
    "range": [
      986,
      995
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 997,
    "end": 1002,
    "range": [
      997,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1004,
    "end": 1014,
    "range": [
      1004,
      1014
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1015,
    "end": 1016,
    "range": [
      1015,
      1016
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1016,
    "end": 1017,
    "range": [
      1016,
      1017
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1017,
    "end": 1018,
    "range": [
      1017,
      1018
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
    "value": "console",
    "start": 1025,
    "end": 1032,
    "range": [
      1025,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1033,
    "end": 1036,
    "range": [
      1033,
      1036
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1036,
    "end": 1037,
    "range": [
      1036,
      1037
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1037,
    "end": 1042,
    "range": [
      1037,
      1042
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1042,
    "end": 1043,
    "range": [
      1042,
      1043
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1047,
    "end": 1050,
    "range": [
      1047,
      1050
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1052,
    "end": 1053,
    "range": [
      1052,
      1053
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1054,
    "end": 1060,
    "range": [
      1054,
      1060
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1062,
    "end": 1063,
    "range": [
      1062,
      1063
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1064,
    "end": 1071,
    "range": [
      1064,
      1071
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1071,
    "end": 1072,
    "range": [
      1071,
      1072
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1073,
    "end": 1081,
    "range": [
      1073,
      1081
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1082,
    "end": 1083,
    "range": [
      1082,
      1083
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 1084,
    "end": 1093,
    "range": [
      1084,
      1093
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1095,
    "end": 1104,
    "range": [
      1095,
      1104
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 1106,
    "end": 1116,
    "range": [
      1106,
      1116
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 1119,
    "end": 1130,
    "range": [
      1119,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1133,
    "end": 1134,
    "range": [
      1133,
      1134
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1141,
    "end": 1148,
    "range": [
      1141,
      1148
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1148,
    "end": 1149,
    "range": [
      1148,
      1149
    ]
  },
  {
    "type": "String",
    "value": "\"nosKill\"",
    "start": 1150,
    "end": 1159,
    "range": [
      1150,
      1159
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1161,
    "end": 1170,
    "range": [
      1161,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1170,
    "end": 1171,
    "range": [
      1170,
      1171
    ]
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 1172,
    "end": 1181,
    "range": [
      1172,
      1181
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1182,
    "end": 1183,
    "range": [
      1182,
      1183
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1184,
    "end": 1185,
    "range": [
      1184,
      1185
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1186,
    "end": 1188,
    "range": [
      1186,
      1188
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 1189,
    "end": 1200,
    "range": [
      1189,
      1200
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1200,
    "end": 1201,
    "range": [
      1200,
      1201
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1202,
    "end": 1203,
    "range": [
      1202,
      1203
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1208,
    "end": 1215,
    "range": [
      1208,
      1215
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1215,
    "end": 1216,
    "range": [
      1215,
      1216
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1216,
    "end": 1219,
    "range": [
      1216,
      1219
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1219,
    "end": 1220,
    "range": [
      1219,
      1220
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1220,
    "end": 1228,
    "range": [
      1220,
      1228
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1229,
    "end": 1230,
    "range": [
      1229,
      1230
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1231,
    "end": 1232,
    "range": [
      1231,
      1232
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1233,
    "end": 1236,
    "range": [
      1233,
      1236
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1238,
    "end": 1239,
    "range": [
      1238,
      1239
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1240,
    "end": 1246,
    "range": [
      1240,
      1246
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1246,
    "end": 1247,
    "range": [
      1246,
      1247
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1250,
    "end": 1257,
    "range": [
      1250,
      1257
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1257,
    "end": 1258,
    "range": [
      1257,
      1258
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1259,
    "end": 1267,
    "range": [
      1259,
      1267
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1268,
    "end": 1269,
    "range": [
      1268,
      1269
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 1270,
    "end": 1279,
    "range": [
      1270,
      1279
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1279,
    "end": 1280,
    "range": [
      1279,
      1280
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1281,
    "end": 1290,
    "range": [
      1281,
      1290
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1290,
    "end": 1291,
    "range": [
      1290,
      1291
    ]
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 1292,
    "end": 1302,
    "range": [
      1292,
      1302
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1303,
    "end": 1304,
    "range": [
      1303,
      1304
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 1305,
    "end": 1316,
    "range": [
      1305,
      1316
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1319,
    "end": 1320,
    "range": [
      1319,
      1320
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1325,
    "end": 1326,
    "range": [
      1325,
      1326
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1327,
    "end": 1334,
    "range": [
      1327,
      1334
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1334,
    "end": 1335,
    "range": [
      1334,
      1335
    ]
  },
  {
    "type": "String",
    "value": "\"nosKill\"",
    "start": 1336,
    "end": 1345,
    "range": [
      1336,
      1345
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1345,
    "end": 1346,
    "range": [
      1345,
      1346
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1347,
    "end": 1356,
    "range": [
      1347,
      1356
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1356,
    "end": 1357,
    "range": [
      1356,
      1357
    ]
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 1358,
    "end": 1367,
    "range": [
      1358,
      1367
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1368,
    "end": 1369,
    "range": [
      1368,
      1369
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1370,
    "end": 1371,
    "range": [
      1370,
      1371
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1372,
    "end": 1374,
    "range": [
      1372,
      1374
    ]
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 1375,
    "end": 1389,
    "range": [
      1375,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1389,
    "end": 1390,
    "range": [
      1389,
      1390
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1390,
    "end": 1391,
    "range": [
      1390,
      1391
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1391,
    "end": 1392,
    "range": [
      1391,
      1392
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1399,
    "end": 1406,
    "range": [
      1399,
      1406
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1406,
    "end": 1407,
    "range": [
      1406,
      1407
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1407,
    "end": 1410,
    "range": [
      1407,
      1410
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1411,
    "end": 1419,
    "range": [
      1411,
      1419
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1419,
    "end": 1420,
    "range": [
      1419,
      1420
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1420,
    "end": 1421,
    "range": [
      1420,
      1421
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1422,
    "end": 1423,
    "range": [
      1422,
      1423
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1424,
    "end": 1427,
    "range": [
      1424,
      1427
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1429,
    "end": 1430,
    "range": [
      1429,
      1430
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1431,
    "end": 1437,
    "range": [
      1431,
      1437
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1437,
    "end": 1438,
    "range": [
      1437,
      1438
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1439,
    "end": 1440,
    "range": [
      1439,
      1440
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1441,
    "end": 1448,
    "range": [
      1441,
      1448
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1448,
    "end": 1449,
    "range": [
      1448,
      1449
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1450,
    "end": 1458,
    "range": [
      1450,
      1458
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1459,
    "end": 1460,
    "range": [
      1459,
      1460
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 1461,
    "end": 1470,
    "range": [
      1461,
      1470
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1470,
    "end": 1471,
    "range": [
      1470,
      1471
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1472,
    "end": 1481,
    "range": [
      1472,
      1481
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1481,
    "end": 1482,
    "range": [
      1481,
      1482
    ]
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 1483,
    "end": 1493,
    "range": [
      1483,
      1493
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1494,
    "end": 1495,
    "range": [
      1494,
      1495
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 1496,
    "end": 1507,
    "range": [
      1496,
      1507
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1508,
    "end": 1509,
    "range": [
      1508,
      1509
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1510,
    "end": 1511,
    "range": [
      1510,
      1511
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1516,
    "end": 1517,
    "range": [
      1516,
      1517
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1518,
    "end": 1525,
    "range": [
      1518,
      1525
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1525,
    "end": 1526,
    "range": [
      1525,
      1526
    ]
  },
  {
    "type": "String",
    "value": "\"nosKill\"",
    "start": 1527,
    "end": 1536,
    "range": [
      1527,
      1536
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1536,
    "end": 1537,
    "range": [
      1536,
      1537
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1538,
    "end": 1547,
    "range": [
      1538,
      1547
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1547,
    "end": 1548,
    "range": [
      1547,
      1548
    ]
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 1549,
    "end": 1558,
    "range": [
      1549,
      1558
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1559,
    "end": 1560,
    "range": [
      1559,
      1560
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1561,
    "end": 1562,
    "range": [
      1561,
      1562
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1563,
    "end": 1565,
    "range": [
      1563,
      1565
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1570,
    "end": 1571,
    "range": [
      1570,
      1571
    ]
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 1571,
    "end": 1581,
    "range": [
      1571,
      1581
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1581,
    "end": 1582,
    "range": [
      1581,
      1582
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1582,
    "end": 1583,
    "range": [
      1582,
      1583
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1583,
    "end": 1584,
    "range": [
      1583,
      1584
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1585,
    "end": 1586,
    "range": [
      1585,
      1586
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1587,
    "end": 1591,
    "range": [
      1587,
      1591
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1591,
    "end": 1592,
    "range": [
      1591,
      1592
    ]
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 1593,
    "end": 1600,
    "range": [
      1593,
      1600
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1600,
    "end": 1601,
    "range": [
      1600,
      1601
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1602,
    "end": 1608,
    "range": [
      1602,
      1608
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "start": 1610,
    "end": 1611,
    "range": [
      1610,
      1611
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1612,
    "end": 1619,
    "range": [
      1612,
      1619
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1619,
    "end": 1620,
    "range": [
      1619,
      1620
    ]
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 1621,
    "end": 1629,
    "range": [
      1621,
      1629
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1629,
    "end": 1630,
    "range": [
      1629,
      1630
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1631,
    "end": 1640,
    "range": [
      1631,
      1640
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1640,
    "end": 1641,
    "range": [
      1640,
      1641
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 1642,
    "end": 1648,
    "range": [
      1642,
      1648
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1649,
    "end": 1650,
    "range": [
      1649,
      1650
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1651,
    "end": 1652,
    "range": [
      1651,
      1652
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1652,
    "end": 1653,
    "range": [
      1652,
      1653
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1662,
    "end": 1663,
    "range": [
      1662,
      1663
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1664,
    "end": 1668,
    "range": [
      1664,
      1668
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1668,
    "end": 1669,
    "range": [
      1668,
      1669
    ]
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1670,
    "end": 1679,
    "range": [
      1670,
      1679
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1679,
    "end": 1680,
    "range": [
      1679,
      1680
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1681,
    "end": 1687,
    "range": [
      1681,
      1687
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1687,
    "end": 1688,
    "range": [
      1687,
      1688
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1689,
    "end": 1690,
    "range": [
      1689,
      1690
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1691,
    "end": 1698,
    "range": [
      1691,
      1698
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1698,
    "end": 1699,
    "range": [
      1698,
      1699
    ]
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1700,
    "end": 1710,
    "range": [
      1700,
      1710
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1710,
    "end": 1711,
    "range": [
      1710,
      1711
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1712,
    "end": 1721,
    "range": [
      1712,
      1721
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1721,
    "end": 1722,
    "range": [
      1721,
      1722
    ]
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 1723,
    "end": 1731,
    "range": [
      1723,
      1731
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1732,
    "end": 1733,
    "range": [
      1732,
      1733
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1735,
    "end": 1736,
    "range": [
      1735,
      1736
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1736,
    "end": 1737,
    "range": [
      1736,
      1737
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1738,
    "end": 1739,
    "range": [
      1738,
      1739
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1744,
    "end": 1751,
    "range": [
      1744,
      1751
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1751,
    "end": 1752,
    "range": [
      1751,
      1752
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1752,
    "end": 1755,
    "range": [
      1752,
      1755
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1755,
    "end": 1756,
    "range": [
      1755,
      1756
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1756,
    "end": 1764,
    "range": [
      1756,
      1764
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1764,
    "end": 1765,
    "range": [
      1764,
      1765
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1765,
    "end": 1766,
    "range": [
      1765,
      1766
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1767,
    "end": 1768,
    "range": [
      1767,
      1768
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1770,
    "end": 1773,
    "range": [
      1770,
      1773
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1774,
    "end": 1775,
    "range": [
      1774,
      1775
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1775,
    "end": 1776,
    "range": [
      1775,
      1776
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1777,
    "end": 1781,
    "range": [
      1777,
      1781
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1782,
    "end": 1783,
    "range": [
      1782,
      1783
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 1784,
    "end": 1792,
    "range": [
      1784,
      1792
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1793,
    "end": 1794,
    "range": [
      1793,
      1794
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1795,
    "end": 1797,
    "range": [
      1795,
      1797
    ]
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 1798,
    "end": 1804,
    "range": [
      1798,
      1804
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1804,
    "end": 1805,
    "range": [
      1804,
      1805
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
    "value": "console",
    "start": 1812,
    "end": 1819,
    "range": [
      1812,
      1819
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1819,
    "end": 1820,
    "range": [
      1819,
      1820
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1820,
    "end": 1823,
    "range": [
      1820,
      1823
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1823,
    "end": 1824,
    "range": [
      1823,
      1824
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1824,
    "end": 1829,
    "range": [
      1824,
      1829
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1829,
    "end": 1830,
    "range": [
      1829,
      1830
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1830,
    "end": 1831,
    "range": [
      1830,
      1831
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1832,
    "end": 1833,
    "range": [
      1832,
      1833
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1834,
    "end": 1837,
    "range": [
      1834,
      1837
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1838,
    "end": 1839,
    "range": [
      1838,
      1839
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1841,
    "end": 1845,
    "range": [
      1841,
      1845
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1846,
    "end": 1847,
    "range": [
      1846,
      1847
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 1848,
    "end": 1856,
    "range": [
      1848,
      1856
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1857,
    "end": 1858,
    "range": [
      1857,
      1858
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1859,
    "end": 1861,
    "range": [
      1859,
      1861
    ]
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 1862,
    "end": 1871,
    "range": [
      1862,
      1871
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1871,
    "end": 1872,
    "range": [
      1871,
      1872
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1872,
    "end": 1873,
    "range": [
      1872,
      1873
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1873,
    "end": 1874,
    "range": [
      1873,
      1874
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1875,
    "end": 1876,
    "range": [
      1875,
      1876
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1881,
    "end": 1888,
    "range": [
      1881,
      1888
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1888,
    "end": 1889,
    "range": [
      1888,
      1889
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1889,
    "end": 1892,
    "range": [
      1889,
      1892
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1892,
    "end": 1893,
    "range": [
      1892,
      1893
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1893,
    "end": 1898,
    "range": [
      1893,
      1898
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1898,
    "end": 1899,
    "range": [
      1898,
      1899
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1899,
    "end": 1900,
    "range": [
      1899,
      1900
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1901,
    "end": 1902,
    "range": [
      1901,
      1902
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1903,
    "end": 1906,
    "range": [
      1903,
      1906
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1907,
    "end": 1908,
    "range": [
      1907,
      1908
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
    "value": "name",
    "start": 1910,
    "end": 1914,
    "range": [
      1910,
      1914
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1915,
    "end": 1916,
    "range": [
      1915,
      1916
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 1917,
    "end": 1925,
    "range": [
      1917,
      1925
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1926,
    "end": 1927,
    "range": [
      1926,
      1927
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1928,
    "end": 1930,
    "range": [
      1928,
      1930
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1932,
    "end": 1933,
    "range": [
      1932,
      1933
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1934,
    "end": 1938,
    "range": [
      1934,
      1938
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1938,
    "end": 1939,
    "range": [
      1938,
      1939
    ]
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 1940,
    "end": 1947,
    "range": [
      1940,
      1947
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1947,
    "end": 1948,
    "range": [
      1947,
      1948
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 1949,
    "end": 1954,
    "range": [
      1949,
      1954
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1954,
    "end": 1955,
    "range": [
      1954,
      1955
    ]
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 1956,
    "end": 1964,
    "range": [
      1956,
      1964
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1965,
    "end": 1966,
    "range": [
      1965,
      1966
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1966,
    "end": 1967,
    "range": [
      1966,
      1967
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1968,
    "end": 1969,
    "range": [
      1968,
      1969
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1970,
    "end": 1974,
    "range": [
      1970,
      1974
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1974,
    "end": 1975,
    "range": [
      1974,
      1975
    ]
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1976,
    "end": 1985,
    "range": [
      1976,
      1985
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1985,
    "end": 1986,
    "range": [
      1985,
      1986
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 1987,
    "end": 1992,
    "range": [
      1987,
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
    "value": "\"trimming\"",
    "start": 1994,
    "end": 2004,
    "range": [
      1994,
      2004
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2005,
    "end": 2006,
    "range": [
      2005,
      2006
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2006,
    "end": 2007,
    "range": [
      2006,
      2007
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2007,
    "end": 2008,
    "range": [
      2007,
      2008
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2009,
    "end": 2010,
    "range": [
      2009,
      2010
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2015,
    "end": 2022,
    "range": [
      2015,
      2022
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2022,
    "end": 2023,
    "range": [
      2022,
      2023
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2023,
    "end": 2026,
    "range": [
      2023,
      2026
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2026,
    "end": 2027,
    "range": [
      2026,
      2027
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2027,
    "end": 2032,
    "range": [
      2027,
      2032
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2032,
    "end": 2033,
    "range": [
      2032,
      2033
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2033,
    "end": 2034,
    "range": [
      2033,
      2034
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2035,
    "end": 2036,
    "range": [
      2035,
      2036
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2037,
    "end": 2040,
    "range": [
      2037,
      2040
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2041,
    "end": 2042,
    "range": [
      2041,
      2042
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2042,
    "end": 2043,
    "range": [
      2042,
      2043
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2048,
    "end": 2054,
    "range": [
      2048,
      2054
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2054,
    "end": 2055,
    "range": [
      2054,
      2055
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2056,
    "end": 2057,
    "range": [
      2056,
      2057
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2066,
    "end": 2073,
    "range": [
      2066,
      2073
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2074,
    "end": 2075,
    "range": [
      2074,
      2075
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 2076,
    "end": 2085,
    "range": [
      2076,
      2085
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2085,
    "end": 2086,
    "range": [
      2085,
      2086
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2095,
    "end": 2104,
    "range": [
      2095,
      2104
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2105,
    "end": 2106,
    "range": [
      2105,
      2106
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 2107,
    "end": 2118,
    "range": [
      2107,
      2118
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2123,
    "end": 2124,
    "range": [
      2123,
      2124
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2125,
    "end": 2126,
    "range": [
      2125,
      2126
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2127,
    "end": 2128,
    "range": [
      2127,
      2128
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2129,
    "end": 2136,
    "range": [
      2129,
      2136
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2136,
    "end": 2137,
    "range": [
      2136,
      2137
    ]
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 2138,
    "end": 2147,
    "range": [
      2138,
      2147
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2147,
    "end": 2148,
    "range": [
      2147,
      2148
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2149,
    "end": 2158,
    "range": [
      2149,
      2158
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2158,
    "end": 2159,
    "range": [
      2158,
      2159
    ]
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 2160,
    "end": 2169,
    "range": [
      2160,
      2169
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2170,
    "end": 2171,
    "range": [
      2170,
      2171
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2172,
    "end": 2173,
    "range": [
      2172,
      2173
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2174,
    "end": 2176,
    "range": [
      2174,
      2176
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 2177,
    "end": 2188,
    "range": [
      2177,
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
    "value": "{",
    "start": 2190,
    "end": 2191,
    "range": [
      2190,
      2191
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2196,
    "end": 2203,
    "range": [
      2196,
      2203
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2203,
    "end": 2204,
    "range": [
      2203,
      2204
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2204,
    "end": 2207,
    "range": [
      2204,
      2207
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2207,
    "end": 2208,
    "range": [
      2207,
      2208
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2208,
    "end": 2216,
    "range": [
      2208,
      2216
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2216,
    "end": 2217,
    "range": [
      2216,
      2217
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2217,
    "end": 2218,
    "range": [
      2217,
      2218
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2219,
    "end": 2220,
    "range": [
      2219,
      2220
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2221,
    "end": 2224,
    "range": [
      2221,
      2224
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2225,
    "end": 2226,
    "range": [
      2225,
      2226
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2226,
    "end": 2227,
    "range": [
      2226,
      2227
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2232,
    "end": 2238,
    "range": [
      2232,
      2238
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2238,
    "end": 2239,
    "range": [
      2238,
      2239
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2240,
    "end": 2241,
    "range": [
      2240,
      2241
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2250,
    "end": 2257,
    "range": [
      2250,
      2257
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2258,
    "end": 2259,
    "range": [
      2258,
      2259
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 2260,
    "end": 2269,
    "range": [
      2260,
      2269
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2269,
    "end": 2270,
    "range": [
      2269,
      2270
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2279,
    "end": 2288,
    "range": [
      2279,
      2288
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2289,
    "end": 2290,
    "range": [
      2289,
      2290
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 2291,
    "end": 2302,
    "range": [
      2291,
      2302
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2307,
    "end": 2308,
    "range": [
      2307,
      2308
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2309,
    "end": 2310,
    "range": [
      2309,
      2310
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
    "value": "primary",
    "start": 2313,
    "end": 2320,
    "range": [
      2313,
      2320
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2320,
    "end": 2321,
    "range": [
      2320,
      2321
    ]
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 2322,
    "end": 2331,
    "range": [
      2322,
      2331
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2331,
    "end": 2332,
    "range": [
      2331,
      2332
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2333,
    "end": 2342,
    "range": [
      2333,
      2342
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2342,
    "end": 2343,
    "range": [
      2342,
      2343
    ]
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 2344,
    "end": 2353,
    "range": [
      2344,
      2353
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2354,
    "end": 2355,
    "range": [
      2354,
      2355
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2356,
    "end": 2357,
    "range": [
      2356,
      2357
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2358,
    "end": 2360,
    "range": [
      2358,
      2360
    ]
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 2361,
    "end": 2375,
    "range": [
      2361,
      2375
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2375,
    "end": 2376,
    "range": [
      2375,
      2376
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2376,
    "end": 2377,
    "range": [
      2376,
      2377
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2377,
    "end": 2378,
    "range": [
      2377,
      2378
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2379,
    "end": 2380,
    "range": [
      2379,
      2380
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2385,
    "end": 2392,
    "range": [
      2385,
      2392
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2392,
    "end": 2393,
    "range": [
      2392,
      2393
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2393,
    "end": 2396,
    "range": [
      2393,
      2396
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2396,
    "end": 2397,
    "range": [
      2396,
      2397
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2397,
    "end": 2405,
    "range": [
      2397,
      2405
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2405,
    "end": 2406,
    "range": [
      2405,
      2406
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2406,
    "end": 2407,
    "range": [
      2406,
      2407
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2408,
    "end": 2409,
    "range": [
      2408,
      2409
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2410,
    "end": 2413,
    "range": [
      2410,
      2413
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2414,
    "end": 2415,
    "range": [
      2414,
      2415
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2415,
    "end": 2416,
    "range": [
      2415,
      2416
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2421,
    "end": 2427,
    "range": [
      2421,
      2427
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2427,
    "end": 2428,
    "range": [
      2427,
      2428
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2429,
    "end": 2430,
    "range": [
      2429,
      2430
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2439,
    "end": 2446,
    "range": [
      2439,
      2446
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2447,
    "end": 2448,
    "range": [
      2447,
      2448
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 2449,
    "end": 2458,
    "range": [
      2449,
      2458
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2458,
    "end": 2459,
    "range": [
      2458,
      2459
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2468,
    "end": 2477,
    "range": [
      2468,
      2477
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2478,
    "end": 2479,
    "range": [
      2478,
      2479
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 2480,
    "end": 2491,
    "range": [
      2480,
      2491
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2496,
    "end": 2497,
    "range": [
      2496,
      2497
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2498,
    "end": 2499,
    "range": [
      2498,
      2499
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2500,
    "end": 2501,
    "range": [
      2500,
      2501
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2502,
    "end": 2509,
    "range": [
      2502,
      2509
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2509,
    "end": 2510,
    "range": [
      2509,
      2510
    ]
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 2511,
    "end": 2520,
    "range": [
      2511,
      2520
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2520,
    "end": 2521,
    "range": [
      2520,
      2521
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2522,
    "end": 2531,
    "range": [
      2522,
      2531
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2531,
    "end": 2532,
    "range": [
      2531,
      2532
    ]
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 2533,
    "end": 2542,
    "range": [
      2533,
      2542
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2543,
    "end": 2544,
    "range": [
      2543,
      2544
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2545,
    "end": 2546,
    "range": [
      2545,
      2546
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2547,
    "end": 2549,
    "range": [
      2547,
      2549
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2550,
    "end": 2551,
    "range": [
      2550,
      2551
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2551,
    "end": 2552,
    "range": [
      2551,
      2552
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2553,
    "end": 2557,
    "range": [
      2553,
      2557
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2557,
    "end": 2558,
    "range": [
      2557,
      2558
    ]
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 2559,
    "end": 2566,
    "range": [
      2559,
      2566
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2566,
    "end": 2567,
    "range": [
      2566,
      2567
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2568,
    "end": 2574,
    "range": [
      2568,
      2574
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2574,
    "end": 2575,
    "range": [
      2574,
      2575
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2576,
    "end": 2577,
    "range": [
      2576,
      2577
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2578,
    "end": 2585,
    "range": [
      2578,
      2585
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2585,
    "end": 2586,
    "range": [
      2585,
      2586
    ]
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 2587,
    "end": 2595,
    "range": [
      2587,
      2595
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2595,
    "end": 2596,
    "range": [
      2595,
      2596
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2597,
    "end": 2606,
    "range": [
      2597,
      2606
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2606,
    "end": 2607,
    "range": [
      2606,
      2607
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 2608,
    "end": 2614,
    "range": [
      2608,
      2614
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2615,
    "end": 2616,
    "range": [
      2615,
      2616
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2617,
    "end": 2618,
    "range": [
      2617,
      2618
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2618,
    "end": 2619,
    "range": [
      2618,
      2619
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2624,
    "end": 2625,
    "range": [
      2624,
      2625
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2626,
    "end": 2630,
    "range": [
      2626,
      2630
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2630,
    "end": 2631,
    "range": [
      2630,
      2631
    ]
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 2632,
    "end": 2641,
    "range": [
      2632,
      2641
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2641,
    "end": 2642,
    "range": [
      2641,
      2642
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2643,
    "end": 2649,
    "range": [
      2643,
      2649
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2649,
    "end": 2650,
    "range": [
      2649,
      2650
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2651,
    "end": 2652,
    "range": [
      2651,
      2652
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2653,
    "end": 2660,
    "range": [
      2653,
      2660
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2660,
    "end": 2661,
    "range": [
      2660,
      2661
    ]
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 2662,
    "end": 2672,
    "range": [
      2662,
      2672
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2672,
    "end": 2673,
    "range": [
      2672,
      2673
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2674,
    "end": 2683,
    "range": [
      2674,
      2683
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2683,
    "end": 2684,
    "range": [
      2683,
      2684
    ]
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 2685,
    "end": 2693,
    "range": [
      2685,
      2693
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2694,
    "end": 2695,
    "range": [
      2694,
      2695
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2696,
    "end": 2697,
    "range": [
      2696,
      2697
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2697,
    "end": 2698,
    "range": [
      2697,
      2698
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2698,
    "end": 2699,
    "range": [
      2698,
      2699
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2700,
    "end": 2701,
    "range": [
      2700,
      2701
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2706,
    "end": 2713,
    "range": [
      2706,
      2713
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2713,
    "end": 2714,
    "range": [
      2713,
      2714
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2714,
    "end": 2717,
    "range": [
      2714,
      2717
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2717,
    "end": 2718,
    "range": [
      2717,
      2718
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2718,
    "end": 2726,
    "range": [
      2718,
      2726
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2726,
    "end": 2727,
    "range": [
      2726,
      2727
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "for",
    "start": 2733,
    "end": 2736,
    "range": [
      2733,
      2736
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2737,
    "end": 2738,
    "range": [
      2737,
      2738
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2738,
    "end": 2739,
    "range": [
      2738,
      2739
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2739,
    "end": 2743,
    "range": [
      2739,
      2743
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2743,
    "end": 2744,
    "range": [
      2743,
      2744
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2745,
    "end": 2750,
    "range": [
      2745,
      2750
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2751,
    "end": 2752,
    "range": [
      2751,
      2752
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 2753,
    "end": 2761,
    "range": [
      2753,
      2761
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2761,
    "end": 2762,
    "range": [
      2761,
      2762
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2763,
    "end": 2768,
    "range": [
      2763,
      2768
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2768,
    "end": 2769,
    "range": [
      2768,
      2769
    ]
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 2770,
    "end": 2776,
    "range": [
      2770,
      2776
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2777,
    "end": 2778,
    "range": [
      2777,
      2778
    ]
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 2779,
    "end": 2788,
    "range": [
      2779,
      2788
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2789,
    "end": 2790,
    "range": [
      2789,
      2790
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2791,
    "end": 2793,
    "range": [
      2791,
      2793
    ]
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 2794,
    "end": 2800,
    "range": [
      2794,
      2800
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2800,
    "end": 2801,
    "range": [
      2800,
      2801
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2802,
    "end": 2803,
    "range": [
      2802,
      2803
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2808,
    "end": 2815,
    "range": [
      2808,
      2815
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2815,
    "end": 2816,
    "range": [
      2815,
      2816
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2816,
    "end": 2819,
    "range": [
      2816,
      2819
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2819,
    "end": 2820,
    "range": [
      2819,
      2820
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2820,
    "end": 2825,
    "range": [
      2820,
      2825
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2825,
    "end": 2826,
    "range": [
      2825,
      2826
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2826,
    "end": 2827,
    "range": [
      2826,
      2827
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2828,
    "end": 2829,
    "range": [
      2828,
      2829
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2830,
    "end": 2833,
    "range": [
      2830,
      2833
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2834,
    "end": 2835,
    "range": [
      2834,
      2835
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
    "value": "name",
    "start": 2836,
    "end": 2840,
    "range": [
      2836,
      2840
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2840,
    "end": 2841,
    "range": [
      2840,
      2841
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2842,
    "end": 2847,
    "range": [
      2842,
      2847
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2848,
    "end": 2849,
    "range": [
      2848,
      2849
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 2850,
    "end": 2858,
    "range": [
      2850,
      2858
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2858,
    "end": 2859,
    "range": [
      2858,
      2859
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2860,
    "end": 2865,
    "range": [
      2860,
      2865
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2865,
    "end": 2866,
    "range": [
      2865,
      2866
    ]
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 2867,
    "end": 2873,
    "range": [
      2867,
      2873
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2874,
    "end": 2875,
    "range": [
      2874,
      2875
    ]
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 2876,
    "end": 2885,
    "range": [
      2876,
      2885
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2887,
    "end": 2888,
    "range": [
      2887,
      2888
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2889,
    "end": 2891,
    "range": [
      2889,
      2891
    ]
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 2892,
    "end": 2901,
    "range": [
      2892,
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
    "type": "Punctuator",
    "value": ")",
    "start": 2902,
    "end": 2903,
    "range": [
      2902,
      2903
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2903,
    "end": 2904,
    "range": [
      2903,
      2904
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2905,
    "end": 2906,
    "range": [
      2905,
      2906
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2911,
    "end": 2918,
    "range": [
      2911,
      2918
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2918,
    "end": 2919,
    "range": [
      2918,
      2919
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2919,
    "end": 2922,
    "range": [
      2919,
      2922
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2922,
    "end": 2923,
    "range": [
      2922,
      2923
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2923,
    "end": 2928,
    "range": [
      2923,
      2928
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2928,
    "end": 2929,
    "range": [
      2928,
      2929
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2929,
    "end": 2930,
    "range": [
      2929,
      2930
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2931,
    "end": 2932,
    "range": [
      2931,
      2932
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2933,
    "end": 2936,
    "range": [
      2933,
      2936
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2937,
    "end": 2938,
    "range": [
      2937,
      2938
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2938,
    "end": 2939,
    "range": [
      2938,
      2939
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2939,
    "end": 2943,
    "range": [
      2939,
      2943
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2943,
    "end": 2944,
    "range": [
      2943,
      2944
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2945,
    "end": 2950,
    "range": [
      2945,
      2950
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2951,
    "end": 2952,
    "range": [
      2951,
      2952
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 2953,
    "end": 2961,
    "range": [
      2953,
      2961
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2961,
    "end": 2962,
    "range": [
      2961,
      2962
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2963,
    "end": 2968,
    "range": [
      2963,
      2968
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2968,
    "end": 2969,
    "range": [
      2968,
      2969
    ]
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 2970,
    "end": 2976,
    "range": [
      2970,
      2976
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2977,
    "end": 2978,
    "range": [
      2977,
      2978
    ]
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 2979,
    "end": 2988,
    "range": [
      2979,
      2988
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2990,
    "end": 2991,
    "range": [
      2990,
      2991
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2992,
    "end": 2994,
    "range": [
      2992,
      2994
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2995,
    "end": 2996,
    "range": [
      2995,
      2996
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2996,
    "end": 2997,
    "range": [
      2996,
      2997
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2998,
    "end": 3002,
    "range": [
      2998,
      3002
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3002,
    "end": 3003,
    "range": [
      3002,
      3003
    ]
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 3004,
    "end": 3011,
    "range": [
      3004,
      3011
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3011,
    "end": 3012,
    "range": [
      3011,
      3012
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 3013,
    "end": 3018,
    "range": [
      3013,
      3018
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3018,
    "end": 3019,
    "range": [
      3018,
      3019
    ]
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 3020,
    "end": 3028,
    "range": [
      3020,
      3028
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3029,
    "end": 3030,
    "range": [
      3029,
      3030
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3030,
    "end": 3031,
    "range": [
      3030,
      3031
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3032,
    "end": 3033,
    "range": [
      3032,
      3033
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3034,
    "end": 3038,
    "range": [
      3034,
      3038
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3038,
    "end": 3039,
    "range": [
      3038,
      3039
    ]
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 3040,
    "end": 3049,
    "range": [
      3040,
      3049
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3049,
    "end": 3050,
    "range": [
      3049,
      3050
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 3051,
    "end": 3056,
    "range": [
      3051,
      3056
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3056,
    "end": 3057,
    "range": [
      3056,
      3057
    ]
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 3058,
    "end": 3068,
    "range": [
      3058,
      3068
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3069,
    "end": 3070,
    "range": [
      3069,
      3070
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3070,
    "end": 3071,
    "range": [
      3070,
      3071
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3071,
    "end": 3072,
    "range": [
      3071,
      3072
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3073,
    "end": 3074,
    "range": [
      3073,
      3074
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3079,
    "end": 3086,
    "range": [
      3079,
      3086
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3086,
    "end": 3087,
    "range": [
      3086,
      3087
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3087,
    "end": 3090,
    "range": [
      3087,
      3090
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3090,
    "end": 3091,
    "range": [
      3090,
      3091
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3091,
    "end": 3096,
    "range": [
      3091,
      3096
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3096,
    "end": 3097,
    "range": [
      3096,
      3097
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3097,
    "end": 3098,
    "range": [
      3097,
      3098
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3099,
    "end": 3100,
    "range": [
      3099,
      3100
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3101,
    "end": 3104,
    "range": [
      3101,
      3104
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3105,
    "end": 3106,
    "range": [
      3105,
      3106
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3106,
    "end": 3107,
    "range": [
      3106,
      3107
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3112,
    "end": 3116,
    "range": [
      3112,
      3116
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3116,
    "end": 3117,
    "range": [
      3116,
      3117
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3118,
    "end": 3123,
    "range": [
      3118,
      3123
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3124,
    "end": 3125,
    "range": [
      3124,
      3125
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 3126,
    "end": 3134,
    "range": [
      3126,
      3134
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3134,
    "end": 3135,
    "range": [
      3134,
      3135
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 3140,
    "end": 3146,
    "range": [
      3140,
      3146
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3146,
    "end": 3147,
    "range": [
      3146,
      3147
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3148,
    "end": 3149,
    "range": [
      3148,
      3149
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3158,
    "end": 3165,
    "range": [
      3158,
      3165
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3165,
    "end": 3166,
    "range": [
      3165,
      3166
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 3167,
    "end": 3175,
    "range": [
      3167,
      3175
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3176,
    "end": 3177,
    "range": [
      3176,
      3177
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 3178,
    "end": 3187,
    "range": [
      3178,
      3187
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3187,
    "end": 3188,
    "range": [
      3187,
      3188
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3197,
    "end": 3206,
    "range": [
      3197,
      3206
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3206,
    "end": 3207,
    "range": [
      3206,
      3207
    ]
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 3208,
    "end": 3218,
    "range": [
      3208,
      3218
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3219,
    "end": 3220,
    "range": [
      3219,
      3220
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 3221,
    "end": 3232,
    "range": [
      3221,
      3232
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3237,
    "end": 3238,
    "range": [
      3237,
      3238
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3239,
    "end": 3240,
    "range": [
      3239,
      3240
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3241,
    "end": 3242,
    "range": [
      3241,
      3242
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3243,
    "end": 3250,
    "range": [
      3243,
      3250
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3250,
    "end": 3251,
    "range": [
      3250,
      3251
    ]
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 3252,
    "end": 3261,
    "range": [
      3252,
      3261
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3261,
    "end": 3262,
    "range": [
      3261,
      3262
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3263,
    "end": 3272,
    "range": [
      3263,
      3272
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3272,
    "end": 3273,
    "range": [
      3272,
      3273
    ]
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 3274,
    "end": 3283,
    "range": [
      3274,
      3283
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3284,
    "end": 3285,
    "range": [
      3284,
      3285
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3286,
    "end": 3287,
    "range": [
      3286,
      3287
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 3288,
    "end": 3290,
    "range": [
      3288,
      3290
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 3291,
    "end": 3302,
    "range": [
      3291,
      3302
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3302,
    "end": 3303,
    "range": [
      3302,
      3303
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3304,
    "end": 3305,
    "range": [
      3304,
      3305
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3310,
    "end": 3317,
    "range": [
      3310,
      3317
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3317,
    "end": 3318,
    "range": [
      3317,
      3318
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3318,
    "end": 3321,
    "range": [
      3318,
      3321
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3321,
    "end": 3322,
    "range": [
      3321,
      3322
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3322,
    "end": 3327,
    "range": [
      3322,
      3327
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3327,
    "end": 3328,
    "range": [
      3327,
      3328
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3328,
    "end": 3329,
    "range": [
      3328,
      3329
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3330,
    "end": 3331,
    "range": [
      3330,
      3331
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3332,
    "end": 3335,
    "range": [
      3332,
      3335
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
    "type": "Punctuator",
    "value": "{",
    "start": 3337,
    "end": 3338,
    "range": [
      3337,
      3338
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3343,
    "end": 3347,
    "range": [
      3343,
      3347
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3347,
    "end": 3348,
    "range": [
      3347,
      3348
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3349,
    "end": 3354,
    "range": [
      3349,
      3354
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3355,
    "end": 3356,
    "range": [
      3355,
      3356
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 3357,
    "end": 3365,
    "range": [
      3357,
      3365
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3365,
    "end": 3366,
    "range": [
      3365,
      3366
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 3371,
    "end": 3377,
    "range": [
      3371,
      3377
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3377,
    "end": 3378,
    "range": [
      3377,
      3378
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3379,
    "end": 3380,
    "range": [
      3379,
      3380
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3389,
    "end": 3396,
    "range": [
      3389,
      3396
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3396,
    "end": 3397,
    "range": [
      3396,
      3397
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 3398,
    "end": 3406,
    "range": [
      3398,
      3406
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3407,
    "end": 3408,
    "range": [
      3407,
      3408
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 3409,
    "end": 3418,
    "range": [
      3409,
      3418
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3418,
    "end": 3419,
    "range": [
      3418,
      3419
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3428,
    "end": 3437,
    "range": [
      3428,
      3437
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3437,
    "end": 3438,
    "range": [
      3437,
      3438
    ]
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 3439,
    "end": 3449,
    "range": [
      3439,
      3449
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3450,
    "end": 3451,
    "range": [
      3450,
      3451
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 3452,
    "end": 3463,
    "range": [
      3452,
      3463
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3468,
    "end": 3469,
    "range": [
      3468,
      3469
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3470,
    "end": 3471,
    "range": [
      3470,
      3471
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3472,
    "end": 3473,
    "range": [
      3472,
      3473
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3474,
    "end": 3481,
    "range": [
      3474,
      3481
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3481,
    "end": 3482,
    "range": [
      3481,
      3482
    ]
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 3483,
    "end": 3492,
    "range": [
      3483,
      3492
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3492,
    "end": 3493,
    "range": [
      3492,
      3493
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3494,
    "end": 3503,
    "range": [
      3494,
      3503
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3503,
    "end": 3504,
    "range": [
      3503,
      3504
    ]
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 3505,
    "end": 3514,
    "range": [
      3505,
      3514
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3515,
    "end": 3516,
    "range": [
      3515,
      3516
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3517,
    "end": 3518,
    "range": [
      3517,
      3518
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 3519,
    "end": 3521,
    "range": [
      3519,
      3521
    ]
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 3522,
    "end": 3536,
    "range": [
      3522,
      3536
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3536,
    "end": 3537,
    "range": [
      3536,
      3537
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3537,
    "end": 3538,
    "range": [
      3537,
      3538
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3538,
    "end": 3539,
    "range": [
      3538,
      3539
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3540,
    "end": 3541,
    "range": [
      3540,
      3541
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3546,
    "end": 3553,
    "range": [
      3546,
      3553
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3553,
    "end": 3554,
    "range": [
      3553,
      3554
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3554,
    "end": 3557,
    "range": [
      3554,
      3557
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3557,
    "end": 3558,
    "range": [
      3557,
      3558
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3558,
    "end": 3563,
    "range": [
      3558,
      3563
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3563,
    "end": 3564,
    "range": [
      3563,
      3564
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3564,
    "end": 3565,
    "range": [
      3564,
      3565
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3566,
    "end": 3567,
    "range": [
      3566,
      3567
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3568,
    "end": 3571,
    "range": [
      3568,
      3571
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3572,
    "end": 3573,
    "range": [
      3572,
      3573
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3573,
    "end": 3574,
    "range": [
      3573,
      3574
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3579,
    "end": 3583,
    "range": [
      3579,
      3583
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3583,
    "end": 3584,
    "range": [
      3583,
      3584
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3585,
    "end": 3590,
    "range": [
      3585,
      3590
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3591,
    "end": 3592,
    "range": [
      3591,
      3592
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 3593,
    "end": 3601,
    "range": [
      3593,
      3601
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3601,
    "end": 3602,
    "range": [
      3601,
      3602
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 3607,
    "end": 3613,
    "range": [
      3607,
      3613
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3613,
    "end": 3614,
    "range": [
      3613,
      3614
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3615,
    "end": 3616,
    "range": [
      3615,
      3616
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3625,
    "end": 3632,
    "range": [
      3625,
      3632
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3632,
    "end": 3633,
    "range": [
      3632,
      3633
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 3634,
    "end": 3642,
    "range": [
      3634,
      3642
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3643,
    "end": 3644,
    "range": [
      3643,
      3644
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 3645,
    "end": 3654,
    "range": [
      3645,
      3654
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3654,
    "end": 3655,
    "range": [
      3654,
      3655
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3664,
    "end": 3673,
    "range": [
      3664,
      3673
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3673,
    "end": 3674,
    "range": [
      3673,
      3674
    ]
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 3675,
    "end": 3685,
    "range": [
      3675,
      3685
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3686,
    "end": 3687,
    "range": [
      3686,
      3687
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 3688,
    "end": 3699,
    "range": [
      3688,
      3699
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3704,
    "end": 3705,
    "range": [
      3704,
      3705
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3706,
    "end": 3707,
    "range": [
      3706,
      3707
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3708,
    "end": 3709,
    "range": [
      3708,
      3709
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3710,
    "end": 3717,
    "range": [
      3710,
      3717
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3717,
    "end": 3718,
    "range": [
      3717,
      3718
    ]
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 3719,
    "end": 3728,
    "range": [
      3719,
      3728
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3728,
    "end": 3729,
    "range": [
      3728,
      3729
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3730,
    "end": 3739,
    "range": [
      3730,
      3739
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3739,
    "end": 3740,
    "range": [
      3739,
      3740
    ]
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 3741,
    "end": 3750,
    "range": [
      3741,
      3750
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3751,
    "end": 3752,
    "range": [
      3751,
      3752
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3753,
    "end": 3754,
    "range": [
      3753,
      3754
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 3755,
    "end": 3757,
    "range": [
      3755,
      3757
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3758,
    "end": 3759,
    "range": [
      3758,
      3759
    ]
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 3759,
    "end": 3769,
    "range": [
      3759,
      3769
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3769,
    "end": 3770,
    "range": [
      3769,
      3770
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3770,
    "end": 3771,
    "range": [
      3770,
      3771
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3771,
    "end": 3772,
    "range": [
      3771,
      3772
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3772,
    "end": 3773,
    "range": [
      3772,
      3773
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3773,
    "end": 3774,
    "range": [
      3773,
      3774
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3775,
    "end": 3779,
    "range": [
      3775,
      3779
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3779,
    "end": 3780,
    "range": [
      3779,
      3780
    ]
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 3781,
    "end": 3788,
    "range": [
      3781,
      3788
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3788,
    "end": 3789,
    "range": [
      3788,
      3789
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 3790,
    "end": 3796,
    "range": [
      3790,
      3796
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3796,
    "end": 3797,
    "range": [
      3796,
      3797
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3798,
    "end": 3799,
    "range": [
      3798,
      3799
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3800,
    "end": 3807,
    "range": [
      3800,
      3807
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3807,
    "end": 3808,
    "range": [
      3807,
      3808
    ]
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 3809,
    "end": 3817,
    "range": [
      3809,
      3817
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3817,
    "end": 3818,
    "range": [
      3817,
      3818
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3819,
    "end": 3828,
    "range": [
      3819,
      3828
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3828,
    "end": 3829,
    "range": [
      3828,
      3829
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 3830,
    "end": 3836,
    "range": [
      3830,
      3836
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3837,
    "end": 3838,
    "range": [
      3837,
      3838
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3839,
    "end": 3840,
    "range": [
      3839,
      3840
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3840,
    "end": 3841,
    "range": [
      3840,
      3841
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3846,
    "end": 3847,
    "range": [
      3846,
      3847
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3848,
    "end": 3852,
    "range": [
      3848,
      3852
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3852,
    "end": 3853,
    "range": [
      3852,
      3853
    ]
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 3854,
    "end": 3863,
    "range": [
      3854,
      3863
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3863,
    "end": 3864,
    "range": [
      3863,
      3864
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 3865,
    "end": 3871,
    "range": [
      3865,
      3871
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3871,
    "end": 3872,
    "range": [
      3871,
      3872
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3873,
    "end": 3874,
    "range": [
      3873,
      3874
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3875,
    "end": 3882,
    "range": [
      3875,
      3882
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3882,
    "end": 3883,
    "range": [
      3882,
      3883
    ]
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 3884,
    "end": 3894,
    "range": [
      3884,
      3894
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3894,
    "end": 3895,
    "range": [
      3894,
      3895
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3896,
    "end": 3905,
    "range": [
      3896,
      3905
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3905,
    "end": 3906,
    "range": [
      3905,
      3906
    ]
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 3907,
    "end": 3915,
    "range": [
      3907,
      3915
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3916,
    "end": 3917,
    "range": [
      3916,
      3917
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3918,
    "end": 3919,
    "range": [
      3918,
      3919
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3919,
    "end": 3920,
    "range": [
      3919,
      3920
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3920,
    "end": 3921,
    "range": [
      3920,
      3921
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3922,
    "end": 3923,
    "range": [
      3922,
      3923
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3928,
    "end": 3935,
    "range": [
      3928,
      3935
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3935,
    "end": 3936,
    "range": [
      3935,
      3936
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3936,
    "end": 3939,
    "range": [
      3936,
      3939
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3939,
    "end": 3940,
    "range": [
      3939,
      3940
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3940,
    "end": 3945,
    "range": [
      3940,
      3945
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3945,
    "end": 3946,
    "range": [
      3945,
      3946
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3946,
    "end": 3947,
    "range": [
      3946,
      3947
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3948,
    "end": 3949,
    "range": [
      3948,
      3949
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3951,
    "end": 3954,
    "range": [
      3951,
      3954
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3955,
    "end": 3956,
    "range": [
      3955,
      3956
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3956,
    "end": 3957,
    "range": [
      3956,
      3957
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3958,
    "end": 3962,
    "range": [
      3958,
      3962
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3963,
    "end": 3964,
    "range": [
      3963,
      3964
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 3965,
    "end": 3973,
    "range": [
      3965,
      3973
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3973,
    "end": 3974,
    "range": [
      3973,
      3974
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 3975,
    "end": 3980,
    "range": [
      3975,
      3980
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3982,
    "end": 3983,
    "range": [
      3982,
      3983
    ]
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 3984,
    "end": 3993,
    "range": [
      3984,
      3993
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3994,
    "end": 3995,
    "range": [
      3994,
      3995
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 3996,
    "end": 3998,
    "range": [
      3996,
      3998
    ]
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 3999,
    "end": 4005,
    "range": [
      3999,
      4005
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4005,
    "end": 4006,
    "range": [
      4005,
      4006
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4007,
    "end": 4008,
    "range": [
      4007,
      4008
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 4013,
    "end": 4020,
    "range": [
      4013,
      4020
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4020,
    "end": 4021,
    "range": [
      4020,
      4021
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 4021,
    "end": 4024,
    "range": [
      4021,
      4024
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4024,
    "end": 4025,
    "range": [
      4024,
      4025
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 4025,
    "end": 4030,
    "range": [
      4025,
      4030
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4030,
    "end": 4031,
    "range": [
      4030,
      4031
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4031,
    "end": 4032,
    "range": [
      4031,
      4032
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4033,
    "end": 4034,
    "range": [
      4033,
      4034
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 4035,
    "end": 4038,
    "range": [
      4035,
      4038
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4039,
    "end": 4040,
    "range": [
      4039,
      4040
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4040,
    "end": 4041,
    "range": [
      4040,
      4041
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4042,
    "end": 4046,
    "range": [
      4042,
      4046
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4047,
    "end": 4048,
    "range": [
      4047,
      4048
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 4049,
    "end": 4057,
    "range": [
      4049,
      4057
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4057,
    "end": 4058,
    "range": [
      4057,
      4058
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 4059,
    "end": 4064,
    "range": [
      4059,
      4064
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4065,
    "end": 4066,
    "range": [
      4065,
      4066
    ]
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 4067,
    "end": 4076,
    "range": [
      4067,
      4076
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4078,
    "end": 4079,
    "range": [
      4078,
      4079
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 4080,
    "end": 4082,
    "range": [
      4080,
      4082
    ]
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 4083,
    "end": 4092,
    "range": [
      4083,
      4092
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4092,
    "end": 4093,
    "range": [
      4092,
      4093
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4093,
    "end": 4094,
    "range": [
      4093,
      4094
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4094,
    "end": 4095,
    "range": [
      4094,
      4095
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4096,
    "end": 4097,
    "range": [
      4096,
      4097
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 4102,
    "end": 4109,
    "range": [
      4102,
      4109
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4109,
    "end": 4110,
    "range": [
      4109,
      4110
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 4110,
    "end": 4113,
    "range": [
      4110,
      4113
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4113,
    "end": 4114,
    "range": [
      4113,
      4114
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 4114,
    "end": 4119,
    "range": [
      4114,
      4119
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4119,
    "end": 4120,
    "range": [
      4119,
      4120
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4120,
    "end": 4121,
    "range": [
      4120,
      4121
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4122,
    "end": 4123,
    "range": [
      4122,
      4123
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 4124,
    "end": 4127,
    "range": [
      4124,
      4127
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4128,
    "end": 4129,
    "range": [
      4128,
      4129
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4129,
    "end": 4130,
    "range": [
      4129,
      4130
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4131,
    "end": 4135,
    "range": [
      4131,
      4135
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4136,
    "end": 4137,
    "range": [
      4136,
      4137
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 4138,
    "end": 4146,
    "range": [
      4138,
      4146
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4146,
    "end": 4147,
    "range": [
      4146,
      4147
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 4148,
    "end": 4153,
    "range": [
      4148,
      4153
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4155,
    "end": 4156,
    "range": [
      4155,
      4156
    ]
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 4157,
    "end": 4166,
    "range": [
      4157,
      4166
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4167,
    "end": 4168,
    "range": [
      4167,
      4168
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 4169,
    "end": 4171,
    "range": [
      4169,
      4171
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4172,
    "end": 4173,
    "range": [
      4172,
      4173
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4173,
    "end": 4174,
    "range": [
      4173,
      4174
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4175,
    "end": 4179,
    "range": [
      4175,
      4179
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4179,
    "end": 4180,
    "range": [
      4179,
      4180
    ]
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 4181,
    "end": 4188,
    "range": [
      4181,
      4188
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4188,
    "end": 4189,
    "range": [
      4188,
      4189
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 4190,
    "end": 4195,
    "range": [
      4190,
      4195
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4195,
    "end": 4196,
    "range": [
      4195,
      4196
    ]
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 4197,
    "end": 4205,
    "range": [
      4197,
      4205
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4206,
    "end": 4207,
    "range": [
      4206,
      4207
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4207,
    "end": 4208,
    "range": [
      4207,
      4208
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4209,
    "end": 4210,
    "range": [
      4209,
      4210
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4211,
    "end": 4215,
    "range": [
      4211,
      4215
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4215,
    "end": 4216,
    "range": [
      4215,
      4216
    ]
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 4217,
    "end": 4226,
    "range": [
      4217,
      4226
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4226,
    "end": 4227,
    "range": [
      4226,
      4227
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 4228,
    "end": 4233,
    "range": [
      4228,
      4233
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4233,
    "end": 4234,
    "range": [
      4233,
      4234
    ]
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 4235,
    "end": 4245,
    "range": [
      4235,
      4245
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4246,
    "end": 4247,
    "range": [
      4246,
      4247
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4247,
    "end": 4248,
    "range": [
      4247,
      4248
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4248,
    "end": 4249,
    "range": [
      4248,
      4249
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4250,
    "end": 4251,
    "range": [
      4250,
      4251
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 4256,
    "end": 4263,
    "range": [
      4256,
      4263
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4263,
    "end": 4264,
    "range": [
      4263,
      4264
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 4264,
    "end": 4267,
    "range": [
      4264,
      4267
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4267,
    "end": 4268,
    "range": [
      4267,
      4268
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 4268,
    "end": 4273,
    "range": [
      4268,
      4273
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4273,
    "end": 4274,
    "range": [
      4273,
      4274
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4274,
    "end": 4275,
    "range": [
      4274,
      4275
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4276,
    "end": 4277,
    "range": [
      4276,
      4277
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 4278,
    "end": 4281,
    "range": [
      4278,
      4281
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4282,
    "end": 4283,
    "range": [
      4282,
      4283
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4283,
    "end": 4284,
    "range": [
      4283,
      4284
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4289,
    "end": 4293,
    "range": [
      4289,
      4293
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4294,
    "end": 4295,
    "range": [
      4294,
      4295
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 4296,
    "end": 4304,
    "range": [
      4296,
      4304
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4304,
    "end": 4305,
    "range": [
      4304,
      4305
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 4310,
    "end": 4316,
    "range": [
      4310,
      4316
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4316,
    "end": 4317,
    "range": [
      4316,
      4317
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4318,
    "end": 4319,
    "range": [
      4318,
      4319
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 4328,
    "end": 4335,
    "range": [
      4328,
      4335
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4336,
    "end": 4337,
    "range": [
      4336,
      4337
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 4338,
    "end": 4347,
    "range": [
      4338,
      4347
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4347,
    "end": 4348,
    "range": [
      4347,
      4348
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 4357,
    "end": 4366,
    "range": [
      4357,
      4366
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4367,
    "end": 4368,
    "range": [
      4367,
      4368
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 4369,
    "end": 4380,
    "range": [
      4369,
      4380
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4385,
    "end": 4386,
    "range": [
      4385,
      4386
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4387,
    "end": 4388,
    "range": [
      4387,
      4388
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4389,
    "end": 4390,
    "range": [
      4389,
      4390
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 4391,
    "end": 4398,
    "range": [
      4391,
      4398
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4398,
    "end": 4399,
    "range": [
      4398,
      4399
    ]
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 4400,
    "end": 4409,
    "range": [
      4400,
      4409
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4409,
    "end": 4410,
    "range": [
      4409,
      4410
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 4411,
    "end": 4420,
    "range": [
      4411,
      4420
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4420,
    "end": 4421,
    "range": [
      4420,
      4421
    ]
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 4422,
    "end": 4431,
    "range": [
      4422,
      4431
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4432,
    "end": 4433,
    "range": [
      4432,
      4433
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4434,
    "end": 4435,
    "range": [
      4434,
      4435
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 4436,
    "end": 4438,
    "range": [
      4436,
      4438
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 4439,
    "end": 4450,
    "range": [
      4439,
      4450
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4450,
    "end": 4451,
    "range": [
      4450,
      4451
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4452,
    "end": 4453,
    "range": [
      4452,
      4453
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 4458,
    "end": 4465,
    "range": [
      4458,
      4465
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4465,
    "end": 4466,
    "range": [
      4465,
      4466
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 4466,
    "end": 4469,
    "range": [
      4466,
      4469
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4469,
    "end": 4470,
    "range": [
      4469,
      4470
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 4470,
    "end": 4475,
    "range": [
      4470,
      4475
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4475,
    "end": 4476,
    "range": [
      4475,
      4476
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4476,
    "end": 4477,
    "range": [
      4476,
      4477
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4478,
    "end": 4479,
    "range": [
      4478,
      4479
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 4480,
    "end": 4483,
    "range": [
      4480,
      4483
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4484,
    "end": 4485,
    "range": [
      4484,
      4485
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4485,
    "end": 4486,
    "range": [
      4485,
      4486
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4491,
    "end": 4495,
    "range": [
      4491,
      4495
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4496,
    "end": 4497,
    "range": [
      4496,
      4497
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 4498,
    "end": 4506,
    "range": [
      4498,
      4506
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4506,
    "end": 4507,
    "range": [
      4506,
      4507
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 4512,
    "end": 4518,
    "range": [
      4512,
      4518
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4518,
    "end": 4519,
    "range": [
      4518,
      4519
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4520,
    "end": 4521,
    "range": [
      4520,
      4521
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 4530,
    "end": 4537,
    "range": [
      4530,
      4537
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4538,
    "end": 4539,
    "range": [
      4538,
      4539
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 4540,
    "end": 4549,
    "range": [
      4540,
      4549
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4549,
    "end": 4550,
    "range": [
      4549,
      4550
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 4559,
    "end": 4568,
    "range": [
      4559,
      4568
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4569,
    "end": 4570,
    "range": [
      4569,
      4570
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 4571,
    "end": 4582,
    "range": [
      4571,
      4582
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4587,
    "end": 4588,
    "range": [
      4587,
      4588
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4589,
    "end": 4590,
    "range": [
      4589,
      4590
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4591,
    "end": 4592,
    "range": [
      4591,
      4592
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 4593,
    "end": 4600,
    "range": [
      4593,
      4600
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4600,
    "end": 4601,
    "range": [
      4600,
      4601
    ]
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 4602,
    "end": 4611,
    "range": [
      4602,
      4611
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4611,
    "end": 4612,
    "range": [
      4611,
      4612
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 4613,
    "end": 4622,
    "range": [
      4613,
      4622
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4622,
    "end": 4623,
    "range": [
      4622,
      4623
    ]
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 4624,
    "end": 4633,
    "range": [
      4624,
      4633
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4634,
    "end": 4635,
    "range": [
      4634,
      4635
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4636,
    "end": 4637,
    "range": [
      4636,
      4637
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 4638,
    "end": 4640,
    "range": [
      4638,
      4640
    ]
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 4641,
    "end": 4655,
    "range": [
      4641,
      4655
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4655,
    "end": 4656,
    "range": [
      4655,
      4656
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4656,
    "end": 4657,
    "range": [
      4656,
      4657
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4657,
    "end": 4658,
    "range": [
      4657,
      4658
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4659,
    "end": 4660,
    "range": [
      4659,
      4660
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 4665,
    "end": 4672,
    "range": [
      4665,
      4672
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4672,
    "end": 4673,
    "range": [
      4672,
      4673
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 4673,
    "end": 4676,
    "range": [
      4673,
      4676
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4676,
    "end": 4677,
    "range": [
      4676,
      4677
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 4677,
    "end": 4682,
    "range": [
      4677,
      4682
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4682,
    "end": 4683,
    "range": [
      4682,
      4683
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4683,
    "end": 4684,
    "range": [
      4683,
      4684
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4685,
    "end": 4686,
    "range": [
      4685,
      4686
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 4687,
    "end": 4690,
    "range": [
      4687,
      4690
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4691,
    "end": 4692,
    "range": [
      4691,
      4692
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4692,
    "end": 4693,
    "range": [
      4692,
      4693
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4698,
    "end": 4702,
    "range": [
      4698,
      4702
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4703,
    "end": 4704,
    "range": [
      4703,
      4704
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 4705,
    "end": 4713,
    "range": [
      4705,
      4713
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4713,
    "end": 4714,
    "range": [
      4713,
      4714
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 4719,
    "end": 4725,
    "range": [
      4719,
      4725
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4725,
    "end": 4726,
    "range": [
      4725,
      4726
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4727,
    "end": 4728,
    "range": [
      4727,
      4728
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 4737,
    "end": 4744,
    "range": [
      4737,
      4744
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4745,
    "end": 4746,
    "range": [
      4745,
      4746
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 4747,
    "end": 4756,
    "range": [
      4747,
      4756
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4756,
    "end": 4757,
    "range": [
      4756,
      4757
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 4766,
    "end": 4775,
    "range": [
      4766,
      4775
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4776,
    "end": 4777,
    "range": [
      4776,
      4777
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 4778,
    "end": 4789,
    "range": [
      4778,
      4789
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4794,
    "end": 4795,
    "range": [
      4794,
      4795
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4796,
    "end": 4797,
    "range": [
      4796,
      4797
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4798,
    "end": 4799,
    "range": [
      4798,
      4799
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 4800,
    "end": 4807,
    "range": [
      4800,
      4807
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4807,
    "end": 4808,
    "range": [
      4807,
      4808
    ]
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 4809,
    "end": 4818,
    "range": [
      4809,
      4818
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4818,
    "end": 4819,
    "range": [
      4818,
      4819
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 4820,
    "end": 4829,
    "range": [
      4820,
      4829
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4829,
    "end": 4830,
    "range": [
      4829,
      4830
    ]
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 4831,
    "end": 4840,
    "range": [
      4831,
      4840
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4841,
    "end": 4842,
    "range": [
      4841,
      4842
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4843,
    "end": 4844,
    "range": [
      4843,
      4844
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 4845,
    "end": 4847,
    "range": [
      4845,
      4847
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4848,
    "end": 4849,
    "range": [
      4848,
      4849
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4849,
    "end": 4850,
    "range": [
      4849,
      4850
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4851,
    "end": 4855,
    "range": [
      4851,
      4855
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4855,
    "end": 4856,
    "range": [
      4855,
      4856
    ]
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 4857,
    "end": 4864,
    "range": [
      4857,
      4864
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4864,
    "end": 4865,
    "range": [
      4864,
      4865
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 4866,
    "end": 4872,
    "range": [
      4866,
      4872
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4872,
    "end": 4873,
    "range": [
      4872,
      4873
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4874,
    "end": 4875,
    "range": [
      4874,
      4875
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 4876,
    "end": 4883,
    "range": [
      4876,
      4883
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4883,
    "end": 4884,
    "range": [
      4883,
      4884
    ]
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 4885,
    "end": 4893,
    "range": [
      4885,
      4893
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4893,
    "end": 4894,
    "range": [
      4893,
      4894
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 4895,
    "end": 4904,
    "range": [
      4895,
      4904
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4904,
    "end": 4905,
    "range": [
      4904,
      4905
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 4906,
    "end": 4912,
    "range": [
      4906,
      4912
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4913,
    "end": 4914,
    "range": [
      4913,
      4914
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4915,
    "end": 4916,
    "range": [
      4915,
      4916
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4916,
    "end": 4917,
    "range": [
      4916,
      4917
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4922,
    "end": 4923,
    "range": [
      4922,
      4923
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4924,
    "end": 4928,
    "range": [
      4924,
      4928
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4928,
    "end": 4929,
    "range": [
      4928,
      4929
    ]
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 4930,
    "end": 4939,
    "range": [
      4930,
      4939
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4939,
    "end": 4940,
    "range": [
      4939,
      4940
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 4941,
    "end": 4947,
    "range": [
      4941,
      4947
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4947,
    "end": 4948,
    "range": [
      4947,
      4948
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4949,
    "end": 4950,
    "range": [
      4949,
      4950
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 4951,
    "end": 4958,
    "range": [
      4951,
      4958
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4958,
    "end": 4959,
    "range": [
      4958,
      4959
    ]
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 4960,
    "end": 4970,
    "range": [
      4960,
      4970
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4970,
    "end": 4971,
    "range": [
      4970,
      4971
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 4972,
    "end": 4981,
    "range": [
      4972,
      4981
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4981,
    "end": 4982,
    "range": [
      4981,
      4982
    ]
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 4983,
    "end": 4991,
    "range": [
      4983,
      4991
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4992,
    "end": 4993,
    "range": [
      4992,
      4993
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4994,
    "end": 4995,
    "range": [
      4994,
      4995
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4995,
    "end": 4996,
    "range": [
      4995,
      4996
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4996,
    "end": 4997,
    "range": [
      4996,
      4997
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4998,
    "end": 4999,
    "range": [
      4998,
      4999
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 5004,
    "end": 5011,
    "range": [
      5004,
      5011
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5011,
    "end": 5012,
    "range": [
      5011,
      5012
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 5012,
    "end": 5015,
    "range": [
      5012,
      5015
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5015,
    "end": 5016,
    "range": [
      5015,
      5016
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 5016,
    "end": 5021,
    "range": [
      5016,
      5021
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5021,
    "end": 5022,
    "range": [
      5021,
      5022
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5022,
    "end": 5023,
    "range": [
      5022,
      5023
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5024,
    "end": 5025,
    "range": [
      5024,
      5025
    ]
  }
]
```
