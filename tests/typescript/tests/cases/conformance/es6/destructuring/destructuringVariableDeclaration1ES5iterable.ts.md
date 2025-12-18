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
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 171
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 171
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 169,
                "end": 171
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 173,
                  "end": 175
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 173,
                  "end": 175
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 173,
                "end": 175
              }
            ],
            "optional": false,
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
                      "name": "a1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 180,
                      "end": 182
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 184,
                        "end": 190
                      },
                      "start": 182,
                      "end": 190
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 180,
                    "end": 191
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 192,
                      "end": 194
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 196,
                        "end": 202
                      },
                      "start": 194,
                      "end": 202
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 192,
                    "end": 202
                  }
                ],
                "start": 178,
                "end": 204
              },
              "start": 176,
              "end": 204
            },
            "start": 168,
            "end": 204
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
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 211
                },
                "value": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 213,
                  "end": 215
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 209,
                "end": 215
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 217,
                  "end": 219
                },
                "value": {
                  "type": "Literal",
                  "value": "world",
                  "raw": "\"world\"",
                  "start": 221,
                  "end": 228
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 217,
                "end": 228
              }
            ],
            "start": 207,
            "end": 230
          },
          "definite": false,
          "start": 168,
          "end": 230
        }
      ],
      "declare": false,
      "start": 164,
      "end": 230
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a3",
                "optional": false,
                "typeAnnotation": null,
                "start": 236,
                "end": 238
              },
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 242,
                        "end": 244
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 241,
                    "end": 245
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 246
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a5",
                "optional": false,
                "typeAnnotation": null,
                "start": 248,
                "end": 250
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 254,
                    "end": 260
                  },
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 264,
                            "end": 270
                          }
                        ],
                        "start": 263,
                        "end": 271
                      }
                    ],
                    "start": 262,
                    "end": 272
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 274,
                    "end": 281
                  }
                ],
                "start": 253,
                "end": 282
              },
              "start": 251,
              "end": 282
            },
            "start": 235,
            "end": 282
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 286,
                "end": 287
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 291,
                        "end": 298
                      }
                    ],
                    "start": 290,
                    "end": 299
                  }
                ],
                "start": 289,
                "end": 300
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 302,
                "end": 306
              }
            ],
            "start": 285,
            "end": 307
          },
          "definite": false,
          "start": 235,
          "end": 307
        }
      ],
      "declare": false,
      "start": 231,
      "end": 308
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
                  "name": "b1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 529,
                  "end": 531
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
                          "name": "b11",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 535,
                          "end": 538
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b11",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 535,
                          "end": 538
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 535,
                        "end": 538
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 533,
                    "end": 540
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
                          "name": "b11",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 545,
                          "end": 548
                        },
                        "value": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 550,
                          "end": 558
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 545,
                        "end": 558
                      }
                    ],
                    "start": 543,
                    "end": 560
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 533,
                  "end": 560
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 529,
                "end": 560
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 527,
            "end": 563
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
                  "name": "b1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 568,
                  "end": 570
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
                        "name": "b11",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 574,
                        "end": 577
                      },
                      "value": {
                        "type": "Literal",
                        "value": "world",
                        "raw": "\"world\"",
                        "start": 579,
                        "end": 586
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 574,
                      "end": 586
                    }
                  ],
                  "start": 572,
                  "end": 588
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 568,
                "end": 588
              }
            ],
            "start": 566,
            "end": 590
          },
          "definite": false,
          "start": 527,
          "end": 590
        }
      ],
      "declare": false,
      "start": 523,
      "end": 591
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
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 596,
            "end": 600
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
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 605,
                  "end": 607
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 609,
                  "end": 613
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 605,
                "end": 613
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 615,
                  "end": 617
                },
                "value": {
                  "type": "Literal",
                  "value": "false",
                  "raw": "\"false\"",
                  "start": 619,
                  "end": 626
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 615,
                "end": 626
              }
            ],
            "start": 603,
            "end": 628
          },
          "definite": false,
          "start": 596,
          "end": 628
        }
      ],
      "declare": false,
      "start": 592,
      "end": 629
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 635,
                  "end": 637
                },
                "right": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 640,
                  "end": 641
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 635,
                "end": 641
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 643,
                  "end": 645
                },
                "right": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 648,
                  "end": 652
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 643,
                "end": 652
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 654,
                  "end": 656
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "temp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 659,
                  "end": 663
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 654,
                "end": 663
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 634,
            "end": 664
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 668,
                "end": 669
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 671,
                "end": 676
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
                      "name": "t1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 680,
                      "end": 682
                    },
                    "value": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 684,
                      "end": 689
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 680,
                    "end": 689
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 691,
                      "end": 693
                    },
                    "value": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 695,
                      "end": 702
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 691,
                    "end": 702
                  }
                ],
                "start": 678,
                "end": 704
              }
            ],
            "start": 667,
            "end": 705
          },
          "definite": false,
          "start": 634,
          "end": 705
        }
      ],
      "declare": false,
      "start": 630,
      "end": 706
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 712,
                  "end": 714
                },
                "right": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 717,
                  "end": 718
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 712,
                "end": 718
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 720,
                  "end": 722
                },
                "right": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 725,
                  "end": 729
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 720,
                "end": 729
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 731,
                  "end": 733
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "temp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 736,
                  "end": 740
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 731,
                "end": 740
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 711,
            "end": 741
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 745,
                "end": 754
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 756,
                "end": 765
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 767,
                "end": 776
              }
            ],
            "start": 744,
            "end": 777
          },
          "definite": false,
          "start": 711,
          "end": 777
        }
      ],
      "declare": false,
      "start": 707,
      "end": 778
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1024,
                  "end": 1026
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 1021,
                "end": 1026
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1020,
            "end": 1027
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1031,
                "end": 1032
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1033,
                "end": 1034
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1035,
                "end": 1036
              }
            ],
            "start": 1030,
            "end": 1037
          },
          "definite": false,
          "start": 1020,
          "end": 1037
        }
      ],
      "declare": false,
      "start": 1016,
      "end": 1038
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1047,
                  "end": 1049
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 1044,
                "end": 1049
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1043,
            "end": 1050
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1054,
                "end": 1055
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1056,
                "end": 1057
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1058,
                "end": 1059
              },
              {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 1061,
                "end": 1069
              }
            ],
            "start": 1053,
            "end": 1070
          },
          "definite": false,
          "start": 1043,
          "end": 1070
        }
      ],
      "declare": false,
      "start": 1039,
      "end": 1071
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1406,
                "end": 1408
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1409,
                "end": 1411
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1405,
            "end": 1412
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1416,
                "end": 1417
              },
              {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 1418,
                "end": 1426
              }
            ],
            "start": 1415,
            "end": 1427
          },
          "definite": false,
          "start": 1405,
          "end": 1427
        }
      ],
      "declare": false,
      "start": 1401,
      "end": 1427
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
            "name": "temp1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1679,
            "end": 1684
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1688,
                "end": 1692
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 1694,
                "end": 1699
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1701,
                "end": 1705
              }
            ],
            "start": 1687,
            "end": 1706
          },
          "definite": false,
          "start": 1679,
          "end": 1706
        }
      ],
      "declare": false,
      "start": 1675,
      "end": 1706
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1712,
                "end": 1714
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1716,
                "end": 1718
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1711,
            "end": 1719
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1723,
                "end": 1724
              },
              {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 1726,
                "end": 1734
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "temp1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1739,
                  "end": 1744
                },
                "start": 1736,
                "end": 1744
              }
            ],
            "start": 1722,
            "end": 1745
          },
          "definite": false,
          "start": 1711,
          "end": 1745
        }
      ],
      "declare": false,
      "start": 1707,
      "end": 1746
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
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1796,
                  "end": 1797
                },
                "value": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1800,
                      "end": 1802
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1804,
                      "end": 1806
                    },
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1808,
                        "end": 1810
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
                              "name": "b1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1815,
                              "end": 1817
                            },
                            "value": {
                              "type": "Literal",
                              "value": 1000,
                              "raw": "1000",
                              "start": 1819,
                              "end": 1823
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1815,
                            "end": 1823
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b4",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1825,
                              "end": 1827
                            },
                            "value": {
                              "type": "Literal",
                              "value": 200,
                              "raw": "200",
                              "start": 1829,
                              "end": 1832
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1825,
                            "end": 1832
                          }
                        ],
                        "start": 1813,
                        "end": 1834
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1808,
                      "end": 1834
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1799,
                  "end": 1835
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1796,
                "end": 1835
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1795,
            "end": 1836
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
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1841,
                  "end": 1842
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1845,
                      "end": 1846
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1848,
                      "end": 1849
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
                            "name": "b1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1853,
                            "end": 1855
                          },
                          "value": {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4",
                            "start": 1857,
                            "end": 1858
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1853,
                          "end": 1858
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b4",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1860,
                            "end": 1862
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1864,
                            "end": 1865
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1860,
                          "end": 1865
                        }
                      ],
                      "start": 1851,
                      "end": 1867
                    }
                  ],
                  "start": 1844,
                  "end": 1868
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1841,
                "end": 1868
              }
            ],
            "start": 1839,
            "end": 1870
          },
          "definite": false,
          "start": 1795,
          "end": 1870
        }
      ],
      "declare": false,
      "start": 1791,
      "end": 1871
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1877,
                  "end": 1878
                },
                "value": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1881,
                      "end": 1883
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1885,
                      "end": 1887
                    },
                    {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1891,
                            "end": 1893
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f4",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1895,
                            "end": 1897
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1891,
                          "end": 1897
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f5",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1899,
                            "end": 1901
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f5",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1899,
                            "end": 1901
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 1899,
                          "end": 1901
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1889,
                      "end": 1903
                    },
                    null
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1880,
                  "end": 1908
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1877,
                "end": 1908
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1876,
            "end": 1909
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1914,
                  "end": 1915
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1918,
                      "end": 1919
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1921,
                      "end": 1922
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
                            "name": "f3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1926,
                            "end": 1928
                          },
                          "value": {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4",
                            "start": 1930,
                            "end": 1931
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1926,
                          "end": 1931
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f5",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1933,
                            "end": 1935
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1937,
                            "end": 1938
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1933,
                          "end": 1938
                        }
                      ],
                      "start": 1924,
                      "end": 1940
                    }
                  ],
                  "start": 1917,
                  "end": 1941
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1914,
                "end": 1941
              }
            ],
            "start": 1912,
            "end": 1943
          },
          "definite": false,
          "start": 1876,
          "end": 1943
        }
      ],
      "declare": false,
      "start": 1872,
      "end": 1944
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
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2271,
                  "end": 2272
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
                        "name": "g1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2275,
                        "end": 2277
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "g1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2275,
                          "end": 2277
                        },
                        "right": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2281,
                              "end": 2290
                            },
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 2292,
                              "end": 2296
                            }
                          ],
                          "start": 2280,
                          "end": 2297
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2275,
                        "end": 2297
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 2275,
                      "end": 2297
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2274,
                  "end": 2298
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2271,
                "end": 2298
              }
            ],
            "optional": false,
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
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2303,
                      "end": 2304
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
                              "name": "g1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2308,
                              "end": 2310
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 2312,
                                  "end": 2315
                                },
                                "start": 2312,
                                "end": 2317
                              },
                              "start": 2310,
                              "end": 2317
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2308,
                            "end": 2317
                          }
                        ],
                        "start": 2306,
                        "end": 2319
                      },
                      "start": 2304,
                      "end": 2319
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2303,
                    "end": 2319
                  }
                ],
                "start": 2301,
                "end": 2321
              },
              "start": 2299,
              "end": 2321
            },
            "start": 2270,
            "end": 2321
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
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2326,
                  "end": 2327
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
                        "name": "g1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2331,
                        "end": 2333
                      },
                      "value": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2336,
                            "end": 2337
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 2339,
                            "end": 2340
                          }
                        ],
                        "start": 2335,
                        "end": 2341
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2331,
                      "end": 2341
                    }
                  ],
                  "start": 2329,
                  "end": 2343
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2326,
                "end": 2343
              }
            ],
            "start": 2324,
            "end": 2345
          },
          "definite": false,
          "start": 2270,
          "end": 2345
        }
      ],
      "declare": false,
      "start": 2266,
      "end": 2346
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
                  "name": "h",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2352,
                  "end": 2353
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
                        "name": "h1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2356,
                        "end": 2358
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "h1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2356,
                          "end": 2358
                        },
                        "right": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2362,
                              "end": 2371
                            },
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 2373,
                              "end": 2377
                            }
                          ],
                          "start": 2361,
                          "end": 2378
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2356,
                        "end": 2378
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 2356,
                      "end": 2378
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2355,
                  "end": 2379
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2352,
                "end": 2379
              }
            ],
            "optional": false,
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
                      "name": "h",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2384,
                      "end": 2385
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
                              "name": "h1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2389,
                              "end": 2391
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 2393,
                                  "end": 2399
                                },
                                "start": 2393,
                                "end": 2401
                              },
                              "start": 2391,
                              "end": 2401
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2389,
                            "end": 2401
                          }
                        ],
                        "start": 2387,
                        "end": 2403
                      },
                      "start": 2385,
                      "end": 2403
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2384,
                    "end": 2403
                  }
                ],
                "start": 2382,
                "end": 2405
              },
              "start": 2380,
              "end": 2405
            },
            "start": 2351,
            "end": 2405
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
                  "name": "h",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2410,
                  "end": 2411
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
                        "name": "h1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2415,
                        "end": 2417
                      },
                      "value": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2420,
                            "end": 2421
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 2423,
                            "end": 2424
                          }
                        ],
                        "start": 2419,
                        "end": 2425
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2415,
                      "end": 2425
                    }
                  ],
                  "start": 2413,
                  "end": 2427
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2410,
                "end": 2427
              }
            ],
            "start": 2408,
            "end": 2429
          },
          "definite": false,
          "start": 2351,
          "end": 2429
        }
      ],
      "declare": false,
      "start": 2347,
      "end": 2430
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 164,
  "end": 2431
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 164,
    "end": 167,
    "range": [
      164,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 169,
    "end": 171,
    "range": [
      169,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 173,
    "end": 175,
    "range": [
      173,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 180,
    "end": 182,
    "range": [
      180,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 184,
    "end": 190,
    "range": [
      184,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 192,
    "end": 194,
    "range": [
      192,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 196,
    "end": 202,
    "range": [
      196,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 209,
    "end": 211,
    "range": [
      209,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 213,
    "end": 215,
    "range": [
      213,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 217,
    "end": 219,
    "range": [
      217,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 221,
    "end": 228,
    "range": [
      221,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 231,
    "end": 234,
    "range": [
      231,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 236,
    "end": 238,
    "range": [
      236,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 242,
    "end": 244,
    "range": [
      242,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 248,
    "end": 250,
    "range": [
      248,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 254,
    "end": 260,
    "range": [
      254,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 264,
    "end": 270,
    "range": [
      264,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 274,
    "end": 281,
    "range": [
      274,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 291,
    "end": 298,
    "range": [
      291,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 302,
    "end": 306,
    "range": [
      302,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 523,
    "end": 526,
    "range": [
      523,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 529,
    "end": 531,
    "range": [
      529,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 535,
    "end": 538,
    "range": [
      535,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 545,
    "end": 548,
    "range": [
      545,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 550,
    "end": 558,
    "range": [
      550,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 568,
    "end": 570,
    "range": [
      568,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 574,
    "end": 577,
    "range": [
      574,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 579,
    "end": 586,
    "range": [
      579,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 592,
    "end": 595,
    "range": [
      592,
      595
    ]
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 596,
    "end": 600,
    "range": [
      596,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 605,
    "end": 607,
    "range": [
      605,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 609,
    "end": 613,
    "range": [
      609,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 615,
    "end": 617,
    "range": [
      615,
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
    "type": "String",
    "value": "\"false\"",
    "start": 619,
    "end": 626,
    "range": [
      619,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 630,
    "end": 633,
    "range": [
      630,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 635,
    "end": 637,
    "range": [
      635,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 643,
    "end": 645,
    "range": [
      643,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 648,
    "end": 652,
    "range": [
      648,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 654,
    "end": 656,
    "range": [
      654,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 659,
    "end": 663,
    "range": [
      659,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 671,
    "end": 676,
    "range": [
      671,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 680,
    "end": 682,
    "range": [
      680,
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
    "type": "Boolean",
    "value": "false",
    "start": 684,
    "end": 689,
    "range": [
      684,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 691,
    "end": 693,
    "range": [
      691,
      693
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 695,
    "end": 702,
    "range": [
      695,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 707,
    "end": 710,
    "range": [
      707,
      710
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 712,
    "end": 714,
    "range": [
      712,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 720,
    "end": 722,
    "range": [
      720,
      722
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 723,
    "end": 724,
    "range": [
      723,
      724
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 725,
    "end": 729,
    "range": [
      725,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 731,
    "end": 733,
    "range": [
      731,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 736,
    "end": 740,
    "range": [
      736,
      740
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 740,
    "end": 741,
    "range": [
      740,
      741
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 745,
    "end": 754,
    "range": [
      745,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 756,
    "end": 765,
    "range": [
      756,
      765
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 767,
    "end": 776,
    "range": [
      767,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1016,
    "end": 1019,
    "range": [
      1016,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1020,
    "end": 1021,
    "range": [
      1020,
      1021
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1021,
    "end": 1024,
    "range": [
      1021,
      1024
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1024,
    "end": 1026,
    "range": [
      1024,
      1026
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1026,
    "end": 1027,
    "range": [
      1026,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1028,
    "end": 1029,
    "range": [
      1028,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1033,
    "end": 1034,
    "range": [
      1033,
      1034
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1035,
    "end": 1036,
    "range": [
      1035,
      1036
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1036,
    "end": 1037,
    "range": [
      1036,
      1037
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1037,
    "end": 1038,
    "range": [
      1037,
      1038
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1039,
    "end": 1042,
    "range": [
      1039,
      1042
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1044,
    "end": 1047,
    "range": [
      1044,
      1047
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1047,
    "end": 1049,
    "range": [
      1047,
      1049
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1054,
    "end": 1055,
    "range": [
      1054,
      1055
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1056,
    "end": 1057,
    "range": [
      1056,
      1057
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1057,
    "end": 1058,
    "range": [
      1057,
      1058
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1058,
    "end": 1059,
    "range": [
      1058,
      1059
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1061,
    "end": 1069,
    "range": [
      1061,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1401,
    "end": 1404,
    "range": [
      1401,
      1404
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1405,
    "end": 1406,
    "range": [
      1405,
      1406
    ]
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 1406,
    "end": 1408,
    "range": [
      1406,
      1408
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1408,
    "end": 1409,
    "range": [
      1408,
      1409
    ]
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1409,
    "end": 1411,
    "range": [
      1409,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1413,
    "end": 1414,
    "range": [
      1413,
      1414
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1416,
    "end": 1417,
    "range": [
      1416,
      1417
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1417,
    "end": 1418,
    "range": [
      1417,
      1418
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1418,
    "end": 1426,
    "range": [
      1418,
      1426
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1426,
    "end": 1427,
    "range": [
      1426,
      1427
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1675,
    "end": 1678,
    "range": [
      1675,
      1678
    ]
  },
  {
    "type": "Identifier",
    "value": "temp1",
    "start": 1679,
    "end": 1684,
    "range": [
      1679,
      1684
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1685,
    "end": 1686,
    "range": [
      1685,
      1686
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1687,
    "end": 1688,
    "range": [
      1687,
      1688
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1688,
    "end": 1692,
    "range": [
      1688,
      1692
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1692,
    "end": 1693,
    "range": [
      1692,
      1693
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1694,
    "end": 1699,
    "range": [
      1694,
      1699
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1699,
    "end": 1700,
    "range": [
      1699,
      1700
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1701,
    "end": 1705,
    "range": [
      1701,
      1705
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1705,
    "end": 1706,
    "range": [
      1705,
      1706
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1707,
    "end": 1710,
    "range": [
      1707,
      1710
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1711,
    "end": 1712,
    "range": [
      1711,
      1712
    ]
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 1712,
    "end": 1714,
    "range": [
      1712,
      1714
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1714,
    "end": 1715,
    "range": [
      1714,
      1715
    ]
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 1716,
    "end": 1718,
    "range": [
      1716,
      1718
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1718,
    "end": 1719,
    "range": [
      1718,
      1719
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1720,
    "end": 1721,
    "range": [
      1720,
      1721
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1724,
    "end": 1725,
    "range": [
      1724,
      1725
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1726,
    "end": 1734,
    "range": [
      1726,
      1734
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1736,
    "end": 1739,
    "range": [
      1736,
      1739
    ]
  },
  {
    "type": "Identifier",
    "value": "temp1",
    "start": 1739,
    "end": 1744,
    "range": [
      1739,
      1744
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1744,
    "end": 1745,
    "range": [
      1744,
      1745
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1745,
    "end": 1746,
    "range": [
      1745,
      1746
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1791,
    "end": 1794,
    "range": [
      1791,
      1794
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1795,
    "end": 1796,
    "range": [
      1795,
      1796
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1796,
    "end": 1797,
    "range": [
      1796,
      1797
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1797,
    "end": 1798,
    "range": [
      1797,
      1798
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1799,
    "end": 1800,
    "range": [
      1799,
      1800
    ]
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 1800,
    "end": 1802,
    "range": [
      1800,
      1802
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1802,
    "end": 1803,
    "range": [
      1802,
      1803
    ]
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 1804,
    "end": 1806,
    "range": [
      1804,
      1806
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1806,
    "end": 1807,
    "range": [
      1806,
      1807
    ]
  },
  {
    "type": "Identifier",
    "value": "e3",
    "start": 1808,
    "end": 1810,
    "range": [
      1808,
      1810
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1811,
    "end": 1812,
    "range": [
      1811,
      1812
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1813,
    "end": 1814,
    "range": [
      1813,
      1814
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1815,
    "end": 1817,
    "range": [
      1815,
      1817
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1817,
    "end": 1818,
    "range": [
      1817,
      1818
    ]
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 1819,
    "end": 1823,
    "range": [
      1819,
      1823
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1823,
    "end": 1824,
    "range": [
      1823,
      1824
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1825,
    "end": 1827,
    "range": [
      1825,
      1827
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1827,
    "end": 1828,
    "range": [
      1827,
      1828
    ]
  },
  {
    "type": "Numeric",
    "value": "200",
    "start": 1829,
    "end": 1832,
    "range": [
      1829,
      1832
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1833,
    "end": 1834,
    "range": [
      1833,
      1834
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1834,
    "end": 1835,
    "range": [
      1834,
      1835
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1835,
    "end": 1836,
    "range": [
      1835,
      1836
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1837,
    "end": 1838,
    "range": [
      1837,
      1838
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
    "value": "e",
    "start": 1841,
    "end": 1842,
    "range": [
      1841,
      1842
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1842,
    "end": 1843,
    "range": [
      1842,
      1843
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1844,
    "end": 1845,
    "range": [
      1844,
      1845
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1845,
    "end": 1846,
    "range": [
      1845,
      1846
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1846,
    "end": 1847,
    "range": [
      1846,
      1847
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1848,
    "end": 1849,
    "range": [
      1848,
      1849
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1849,
    "end": 1850,
    "range": [
      1849,
      1850
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1851,
    "end": 1852,
    "range": [
      1851,
      1852
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1853,
    "end": 1855,
    "range": [
      1853,
      1855
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1855,
    "end": 1856,
    "range": [
      1855,
      1856
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1857,
    "end": 1858,
    "range": [
      1857,
      1858
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1858,
    "end": 1859,
    "range": [
      1858,
      1859
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1860,
    "end": 1862,
    "range": [
      1860,
      1862
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1862,
    "end": 1863,
    "range": [
      1862,
      1863
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1864,
    "end": 1865,
    "range": [
      1864,
      1865
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1866,
    "end": 1867,
    "range": [
      1866,
      1867
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1867,
    "end": 1868,
    "range": [
      1867,
      1868
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1869,
    "end": 1870,
    "range": [
      1869,
      1870
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1870,
    "end": 1871,
    "range": [
      1870,
      1871
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1872,
    "end": 1875,
    "range": [
      1872,
      1875
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1876,
    "end": 1877,
    "range": [
      1876,
      1877
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1877,
    "end": 1878,
    "range": [
      1877,
      1878
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1878,
    "end": 1879,
    "range": [
      1878,
      1879
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1880,
    "end": 1881,
    "range": [
      1880,
      1881
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1881,
    "end": 1883,
    "range": [
      1881,
      1883
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1883,
    "end": 1884,
    "range": [
      1883,
      1884
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1885,
    "end": 1887,
    "range": [
      1885,
      1887
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1887,
    "end": 1888,
    "range": [
      1887,
      1888
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1889,
    "end": 1890,
    "range": [
      1889,
      1890
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 1891,
    "end": 1893,
    "range": [
      1891,
      1893
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1893,
    "end": 1894,
    "range": [
      1893,
      1894
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 1895,
    "end": 1897,
    "range": [
      1895,
      1897
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1897,
    "end": 1898,
    "range": [
      1897,
      1898
    ]
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1899,
    "end": 1901,
    "range": [
      1899,
      1901
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1902,
    "end": 1903,
    "range": [
      1902,
      1903
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1903,
    "end": 1904,
    "range": [
      1903,
      1904
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1905,
    "end": 1906,
    "range": [
      1905,
      1906
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1907,
    "end": 1908,
    "range": [
      1907,
      1908
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1908,
    "end": 1909,
    "range": [
      1908,
      1909
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1910,
    "end": 1911,
    "range": [
      1910,
      1911
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1912,
    "end": 1913,
    "range": [
      1912,
      1913
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1914,
    "end": 1915,
    "range": [
      1914,
      1915
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1915,
    "end": 1916,
    "range": [
      1915,
      1916
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1917,
    "end": 1918,
    "range": [
      1917,
      1918
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1918,
    "end": 1919,
    "range": [
      1918,
      1919
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1919,
    "end": 1920,
    "range": [
      1919,
      1920
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1921,
    "end": 1922,
    "range": [
      1921,
      1922
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1922,
    "end": 1923,
    "range": [
      1922,
      1923
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1924,
    "end": 1925,
    "range": [
      1924,
      1925
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 1926,
    "end": 1928,
    "range": [
      1926,
      1928
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1928,
    "end": 1929,
    "range": [
      1928,
      1929
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1930,
    "end": 1931,
    "range": [
      1930,
      1931
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1933,
    "end": 1935,
    "range": [
      1933,
      1935
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1935,
    "end": 1936,
    "range": [
      1935,
      1936
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1937,
    "end": 1938,
    "range": [
      1937,
      1938
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1939,
    "end": 1940,
    "range": [
      1939,
      1940
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1940,
    "end": 1941,
    "range": [
      1940,
      1941
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1942,
    "end": 1943,
    "range": [
      1942,
      1943
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1943,
    "end": 1944,
    "range": [
      1943,
      1944
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2266,
    "end": 2269,
    "range": [
      2266,
      2269
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2270,
    "end": 2271,
    "range": [
      2270,
      2271
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 2271,
    "end": 2272,
    "range": [
      2271,
      2272
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2272,
    "end": 2273,
    "range": [
      2272,
      2273
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2274,
    "end": 2275,
    "range": [
      2274,
      2275
    ]
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 2275,
    "end": 2277,
    "range": [
      2275,
      2277
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2278,
    "end": 2279,
    "range": [
      2278,
      2279
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2280,
    "end": 2281,
    "range": [
      2280,
      2281
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2281,
    "end": 2290,
    "range": [
      2281,
      2290
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2290,
    "end": 2291,
    "range": [
      2290,
      2291
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2292,
    "end": 2296,
    "range": [
      2292,
      2296
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2296,
    "end": 2297,
    "range": [
      2296,
      2297
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2297,
    "end": 2298,
    "range": [
      2297,
      2298
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2298,
    "end": 2299,
    "range": [
      2298,
      2299
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2299,
    "end": 2300,
    "range": [
      2299,
      2300
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2301,
    "end": 2302,
    "range": [
      2301,
      2302
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 2303,
    "end": 2304,
    "range": [
      2303,
      2304
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2304,
    "end": 2305,
    "range": [
      2304,
      2305
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2306,
    "end": 2307,
    "range": [
      2306,
      2307
    ]
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 2308,
    "end": 2310,
    "range": [
      2308,
      2310
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2310,
    "end": 2311,
    "range": [
      2310,
      2311
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2312,
    "end": 2315,
    "range": [
      2312,
      2315
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2315,
    "end": 2316,
    "range": [
      2315,
      2316
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2316,
    "end": 2317,
    "range": [
      2316,
      2317
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2318,
    "end": 2319,
    "range": [
      2318,
      2319
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2320,
    "end": 2321,
    "range": [
      2320,
      2321
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2322,
    "end": 2323,
    "range": [
      2322,
      2323
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2324,
    "end": 2325,
    "range": [
      2324,
      2325
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 2326,
    "end": 2327,
    "range": [
      2326,
      2327
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2327,
    "end": 2328,
    "range": [
      2327,
      2328
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2329,
    "end": 2330,
    "range": [
      2329,
      2330
    ]
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 2331,
    "end": 2333,
    "range": [
      2331,
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
    "type": "Punctuator",
    "value": "[",
    "start": 2335,
    "end": 2336,
    "range": [
      2335,
      2336
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2336,
    "end": 2337,
    "range": [
      2336,
      2337
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2337,
    "end": 2338,
    "range": [
      2337,
      2338
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2339,
    "end": 2340,
    "range": [
      2339,
      2340
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2340,
    "end": 2341,
    "range": [
      2340,
      2341
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2342,
    "end": 2343,
    "range": [
      2342,
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
    "value": ";",
    "start": 2345,
    "end": 2346,
    "range": [
      2345,
      2346
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2347,
    "end": 2350,
    "range": [
      2347,
      2350
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2351,
    "end": 2352,
    "range": [
      2351,
      2352
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 2352,
    "end": 2353,
    "range": [
      2352,
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
    "type": "Punctuator",
    "value": "{",
    "start": 2355,
    "end": 2356,
    "range": [
      2355,
      2356
    ]
  },
  {
    "type": "Identifier",
    "value": "h1",
    "start": 2356,
    "end": 2358,
    "range": [
      2356,
      2358
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2359,
    "end": 2360,
    "range": [
      2359,
      2360
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2361,
    "end": 2362,
    "range": [
      2361,
      2362
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2362,
    "end": 2371,
    "range": [
      2362,
      2371
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2371,
    "end": 2372,
    "range": [
      2371,
      2372
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2373,
    "end": 2377,
    "range": [
      2373,
      2377
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2377,
    "end": 2378,
    "range": [
      2377,
      2378
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2378,
    "end": 2379,
    "range": [
      2378,
      2379
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2379,
    "end": 2380,
    "range": [
      2379,
      2380
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2380,
    "end": 2381,
    "range": [
      2380,
      2381
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2382,
    "end": 2383,
    "range": [
      2382,
      2383
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 2384,
    "end": 2385,
    "range": [
      2384,
      2385
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2385,
    "end": 2386,
    "range": [
      2385,
      2386
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2387,
    "end": 2388,
    "range": [
      2387,
      2388
    ]
  },
  {
    "type": "Identifier",
    "value": "h1",
    "start": 2389,
    "end": 2391,
    "range": [
      2389,
      2391
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2391,
    "end": 2392,
    "range": [
      2391,
      2392
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2393,
    "end": 2399,
    "range": [
      2393,
      2399
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2399,
    "end": 2400,
    "range": [
      2399,
      2400
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2400,
    "end": 2401,
    "range": [
      2400,
      2401
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2402,
    "end": 2403,
    "range": [
      2402,
      2403
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2404,
    "end": 2405,
    "range": [
      2404,
      2405
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2406,
    "end": 2407,
    "range": [
      2406,
      2407
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2408,
    "end": 2409,
    "range": [
      2408,
      2409
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 2410,
    "end": 2411,
    "range": [
      2410,
      2411
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2411,
    "end": 2412,
    "range": [
      2411,
      2412
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2413,
    "end": 2414,
    "range": [
      2413,
      2414
    ]
  },
  {
    "type": "Identifier",
    "value": "h1",
    "start": 2415,
    "end": 2417,
    "range": [
      2415,
      2417
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2417,
    "end": 2418,
    "range": [
      2417,
      2418
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2419,
    "end": 2420,
    "range": [
      2419,
      2420
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2420,
    "end": 2421,
    "range": [
      2420,
      2421
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2421,
    "end": 2422,
    "range": [
      2421,
      2422
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2423,
    "end": 2424,
    "range": [
      2423,
      2424
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2424,
    "end": 2425,
    "range": [
      2424,
      2425
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2426,
    "end": 2427,
    "range": [
      2426,
      2427
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2428,
    "end": 2429,
    "range": [
      2428,
      2429
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2429,
    "end": 2430,
    "range": [
      2429,
      2430
    ]
  }
]
```
