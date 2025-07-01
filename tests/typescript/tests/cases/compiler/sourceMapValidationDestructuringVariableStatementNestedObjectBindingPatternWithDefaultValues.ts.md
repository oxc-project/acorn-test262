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
                            "type": "TSStringKeyword",
                            "start": 36,
                            "end": 42
                          },
                          "start": 34,
                          "end": 42
                        },
                        "start": 31,
                        "end": 42
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 45,
                        "end": 49
                      },
                      "start": 43,
                      "end": 49
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 27,
                    "end": 50
                  }
                ],
                "start": 21,
                "end": 52
              },
              "start": 19,
              "end": 52
            },
            "start": 12,
            "end": 52
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 52
        }
      ],
      "declare": true,
      "start": 0,
      "end": 52
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 68
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
              "start": 75,
              "end": 79
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              },
              "start": 79,
              "end": 87
            },
            "accessibility": null,
            "static": false,
            "start": 75,
            "end": 88
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
              "start": 93,
              "end": 99
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
                      "start": 111,
                      "end": 118
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 121,
                        "end": 127
                      },
                      "start": 119,
                      "end": 127
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 111,
                    "end": 128
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
                      "start": 137,
                      "end": 146
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 149,
                        "end": 155
                      },
                      "start": 147,
                      "end": 155
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 137,
                    "end": 156
                  }
                ],
                "start": 101,
                "end": 162
              },
              "start": 99,
              "end": 162
            },
            "accessibility": null,
            "static": false,
            "start": 93,
            "end": 163
          }
        ],
        "start": 69,
        "end": 165
      },
      "declare": false,
      "start": 53,
      "end": 165
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 183
                },
                "typeArguments": null,
                "start": 178,
                "end": 183
              },
              "start": 176,
              "end": 183
            },
            "start": 170,
            "end": 183
          },
          "init": {
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
                  "start": 188,
                  "end": 192
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 194,
                  "end": 201
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 188,
                "end": 201
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
                  "start": 203,
                  "end": 209
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
                        "start": 213,
                        "end": 220
                      },
                      "value": {
                        "type": "Literal",
                        "value": "mowing",
                        "raw": "\"mowing\"",
                        "start": 222,
                        "end": 230
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 213,
                      "end": 230
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
                        "start": 232,
                        "end": 241
                      },
                      "value": {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 243,
                        "end": 249
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 232,
                      "end": 249
                    }
                  ],
                  "start": 211,
                  "end": 251
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 203,
                "end": 251
              }
            ],
            "start": 186,
            "end": 253
          },
          "definite": false,
          "start": 170,
          "end": 253
        }
      ],
      "declare": false,
      "start": 166,
      "end": 254
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 267,
                  "end": 272
                },
                "typeArguments": null,
                "start": 267,
                "end": 272
              },
              "start": 265,
              "end": 272
            },
            "start": 259,
            "end": 272
          },
          "init": {
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
                  "start": 277,
                  "end": 281
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 283,
                  "end": 292
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 277,
                "end": 292
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
                  "start": 294,
                  "end": 300
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
                        "start": 304,
                        "end": 311
                      },
                      "value": {
                        "type": "Literal",
                        "value": "trimming",
                        "raw": "\"trimming\"",
                        "start": 313,
                        "end": 323
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 304,
                      "end": 323
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
                        "start": 325,
                        "end": 334
                      },
                      "value": {
                        "type": "Literal",
                        "value": "edging",
                        "raw": "\"edging\"",
                        "start": 336,
                        "end": 344
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 325,
                      "end": 344
                    }
                  ],
                  "start": 302,
                  "end": 346
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 294,
                "end": 346
              }
            ],
            "start": 275,
            "end": 348
          },
          "definite": false,
          "start": 259,
          "end": 348
        }
      ],
      "declare": false,
      "start": 255,
      "end": 349
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                  "start": 361,
                  "end": 367
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
                          "start": 379,
                          "end": 386
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
                            "start": 388,
                            "end": 396
                          },
                          "right": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 399,
                            "end": 408
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 388,
                          "end": 408
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 379,
                        "end": 408
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
                          "start": 418,
                          "end": 427
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
                            "start": 429,
                            "end": 439
                          },
                          "right": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 442,
                            "end": 451
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 429,
                          "end": 451
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 418,
                        "end": 451
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 369,
                    "end": 457
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
                          "start": 462,
                          "end": 469
                        },
                        "value": {
                          "type": "Literal",
                          "value": "noSkill",
                          "raw": "\"noSkill\"",
                          "start": 471,
                          "end": 480
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 462,
                        "end": 480
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
                          "start": 482,
                          "end": 491
                        },
                        "value": {
                          "type": "Literal",
                          "value": "noSkill",
                          "raw": "\"noSkill\"",
                          "start": 493,
                          "end": 502
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 482,
                        "end": 502
                      }
                    ],
                    "start": 460,
                    "end": 504
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 369,
                  "end": 504
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 361,
                "end": 504
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 355,
            "end": 506
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 509,
            "end": 515
          },
          "definite": false,
          "start": 355,
          "end": 515
        }
      ],
      "declare": false,
      "start": 351,
      "end": 516
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                  "start": 527,
                  "end": 531
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 533,
                    "end": 538
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noNameSpecified",
                    "raw": "\"noNameSpecified\"",
                    "start": 541,
                    "end": 558
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 533,
                  "end": 558
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 527,
                "end": 558
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
                  "start": 564,
                  "end": 570
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
                          "start": 582,
                          "end": 589
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primaryB",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 591,
                            "end": 599
                          },
                          "right": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 602,
                            "end": 611
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 591,
                          "end": 611
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 582,
                        "end": 611
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
                          "start": 621,
                          "end": 630
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondaryB",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 632,
                            "end": 642
                          },
                          "right": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 645,
                            "end": 654
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 632,
                          "end": 654
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 621,
                        "end": 654
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 572,
                    "end": 660
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
                          "start": 665,
                          "end": 672
                        },
                        "value": {
                          "type": "Literal",
                          "value": "noSkill",
                          "raw": "\"noSkill\"",
                          "start": 674,
                          "end": 683
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 665,
                        "end": 683
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
                          "start": 685,
                          "end": 694
                        },
                        "value": {
                          "type": "Literal",
                          "value": "noSkill",
                          "raw": "\"noSkill\"",
                          "start": 696,
                          "end": 705
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 685,
                        "end": 705
                      }
                    ],
                    "start": 663,
                    "end": 707
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 572,
                  "end": 707
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 564,
                "end": 707
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 521,
            "end": 709
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 712,
            "end": 718
          },
          "definite": false,
          "start": 521,
          "end": 718
        }
      ],
      "declare": false,
      "start": 517,
      "end": 719
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                  "start": 730,
                  "end": 734
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameC",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 736,
                    "end": 741
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noNameSpecified",
                    "raw": "\"noNameSpecified\"",
                    "start": 744,
                    "end": 761
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 736,
                  "end": 761
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 730,
                "end": 761
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
                  "start": 767,
                  "end": 773
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
                          "start": 785,
                          "end": 792
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primaryB",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 794,
                            "end": 802
                          },
                          "right": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 805,
                            "end": 814
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 794,
                          "end": 814
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 785,
                        "end": 814
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
                          "start": 824,
                          "end": 833
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondaryB",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 835,
                            "end": 845
                          },
                          "right": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 848,
                            "end": 857
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 835,
                          "end": 857
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 824,
                        "end": 857
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 775,
                    "end": 863
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
                          "start": 868,
                          "end": 875
                        },
                        "value": {
                          "type": "Literal",
                          "value": "noSkill",
                          "raw": "\"noSkill\"",
                          "start": 877,
                          "end": 886
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 868,
                        "end": 886
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
                          "start": 888,
                          "end": 897
                        },
                        "value": {
                          "type": "Literal",
                          "value": "noSkill",
                          "raw": "\"noSkill\"",
                          "start": 899,
                          "end": 908
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 888,
                        "end": 908
                      }
                    ],
                    "start": 866,
                    "end": 910
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 910
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 767,
                "end": 910
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 724,
            "end": 912
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "typeAnnotation": null,
                "start": 916,
                "end": 921
              },
              "typeArguments": null,
              "start": 916,
              "end": 921
            },
            "expression": {
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
                    "start": 924,
                    "end": 928
                  },
                  "value": {
                    "type": "Literal",
                    "value": "Edger",
                    "raw": "\"Edger\"",
                    "start": 930,
                    "end": 937
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 924,
                  "end": 937
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
                    "start": 939,
                    "end": 945
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
                          "start": 949,
                          "end": 956
                        },
                        "value": {
                          "type": "Literal",
                          "value": "edging",
                          "raw": "\"edging\"",
                          "start": 958,
                          "end": 966
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 949,
                        "end": 966
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
                          "start": 968,
                          "end": 977
                        },
                        "value": {
                          "type": "Literal",
                          "value": "branch trimming",
                          "raw": "\"branch trimming\"",
                          "start": 979,
                          "end": 996
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 968,
                        "end": 996
                      }
                    ],
                    "start": 947,
                    "end": 998
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 939,
                  "end": 998
                }
              ],
              "start": 922,
              "end": 1000
            },
            "start": 915,
            "end": 1000
          },
          "definite": false,
          "start": 724,
          "end": 1000
        }
      ],
      "declare": false,
      "start": 720,
      "end": 1001
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameB",
          "optional": false,
          "typeAnnotation": null,
          "start": 1007,
          "end": 1012
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameB",
          "optional": false,
          "typeAnnotation": null,
          "start": 1016,
          "end": 1021
        },
        "start": 1007,
        "end": 1021
      },
      "consequent": {
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
                  "start": 1029,
                  "end": 1036
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1037,
                  "end": 1040
                },
                "optional": false,
                "computed": false,
                "start": 1029,
                "end": 1040
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1041,
                  "end": 1046
                }
              ],
              "optional": false,
              "start": 1029,
              "end": 1047
            },
            "directive": null,
            "start": 1029,
            "end": 1048
          }
        ],
        "start": 1023,
        "end": 1050
      },
      "alternate": {
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
                  "start": 1062,
                  "end": 1069
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1070,
                  "end": 1073
                },
                "optional": false,
                "computed": false,
                "start": 1062,
                "end": 1073
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1074,
                  "end": 1079
                }
              ],
              "optional": false,
              "start": 1062,
              "end": 1080
            },
            "directive": null,
            "start": 1062,
            "end": 1081
          }
        ],
        "start": 1056,
        "end": 1083
      },
      "start": 1003,
      "end": 1083
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1083
}
```
