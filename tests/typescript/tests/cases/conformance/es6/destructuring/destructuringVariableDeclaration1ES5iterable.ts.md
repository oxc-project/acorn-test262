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
