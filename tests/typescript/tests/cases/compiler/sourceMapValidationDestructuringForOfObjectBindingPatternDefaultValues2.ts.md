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
