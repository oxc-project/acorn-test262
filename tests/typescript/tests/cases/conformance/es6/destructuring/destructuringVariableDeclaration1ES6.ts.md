__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 164,
  "end": 2435,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 164,
      "end": 230,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 230,
          "id": {
            "type": "ObjectPattern",
            "start": 168,
            "end": 204,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 169,
                "end": 171,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 171,
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 171,
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 173,
                "end": 175,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 175,
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 175,
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 204,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 178,
                "end": 204,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 180,
                    "end": 191,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 180,
                      "end": 182,
                      "decorators": [],
                      "name": "a1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 182,
                      "end": 190,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 184,
                        "end": 190
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 192,
                    "end": 202,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 192,
                      "end": 194,
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 194,
                      "end": 202,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 196,
                        "end": 202
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 207,
            "end": 230,
            "properties": [
              {
                "type": "Property",
                "start": 209,
                "end": 215,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 211,
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 213,
                  "end": 215,
                  "value": 10,
                  "raw": "10"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 217,
                "end": 228,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 217,
                  "end": 219,
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 221,
                  "end": 228,
                  "value": "world",
                  "raw": "\"world\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 231,
      "end": 308,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 307,
          "id": {
            "type": "ArrayPattern",
            "start": 235,
            "end": 282,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 236,
                "end": 238,
                "decorators": [],
                "name": "a3",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrayPattern",
                "start": 240,
                "end": 246,
                "decorators": [],
                "elements": [
                  {
                    "type": "ArrayPattern",
                    "start": 241,
                    "end": 245,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 242,
                        "end": 244,
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 248,
                "end": 250,
                "decorators": [],
                "name": "a5",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 251,
              "end": 282,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 253,
                "end": 282,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 254,
                    "end": 260
                  },
                  {
                    "type": "TSTupleType",
                    "start": 262,
                    "end": 272,
                    "elementTypes": [
                      {
                        "type": "TSTupleType",
                        "start": 263,
                        "end": 271,
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 264,
                            "end": 270
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 274,
                    "end": 281
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 285,
            "end": 307,
            "elements": [
              {
                "type": "Literal",
                "start": 286,
                "end": 287,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "ArrayExpression",
                "start": 289,
                "end": 300,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 290,
                    "end": 299,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 291,
                        "end": 298,
                        "value": "hello",
                        "raw": "\"hello\""
                      }
                    ]
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 302,
                "end": 306,
                "value": true,
                "raw": "true"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 523,
      "end": 591,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 527,
          "end": 590,
          "id": {
            "type": "ObjectPattern",
            "start": 527,
            "end": 563,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 529,
                "end": 560,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 529,
                  "end": 531,
                  "decorators": [],
                  "name": "b1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 533,
                  "end": 560,
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "start": 533,
                    "end": 540,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 535,
                        "end": 538,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 535,
                          "end": 538,
                          "decorators": [],
                          "name": "b11",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 535,
                          "end": 538,
                          "decorators": [],
                          "name": "b11",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "start": 543,
                    "end": 560,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 545,
                        "end": 558,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 545,
                          "end": 548,
                          "decorators": [],
                          "name": "b11",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 550,
                          "end": 558,
                          "value": "string",
                          "raw": "\"string\""
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 566,
            "end": 590,
            "properties": [
              {
                "type": "Property",
                "start": 568,
                "end": 588,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 568,
                  "end": 570,
                  "decorators": [],
                  "name": "b1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 572,
                  "end": 588,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 574,
                      "end": 586,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 574,
                        "end": 577,
                        "decorators": [],
                        "name": "b11",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 579,
                        "end": 586,
                        "value": "world",
                        "raw": "\"world\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 592,
      "end": 629,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 596,
          "end": 628,
          "id": {
            "type": "Identifier",
            "start": 596,
            "end": 600,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 603,
            "end": 628,
            "properties": [
              {
                "type": "Property",
                "start": 605,
                "end": 613,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 605,
                  "end": 607,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 609,
                  "end": 613,
                  "value": true,
                  "raw": "true"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 615,
                "end": 626,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 615,
                  "end": 617,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 619,
                  "end": 626,
                  "value": "false",
                  "raw": "\"false\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 630,
      "end": 706,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 634,
          "end": 705,
          "id": {
            "type": "ArrayPattern",
            "start": 634,
            "end": 664,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 635,
                "end": 641,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 635,
                  "end": 637,
                  "decorators": [],
                  "name": "b2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 640,
                  "end": 641,
                  "value": 3,
                  "raw": "3"
                },
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "AssignmentPattern",
                "start": 643,
                "end": 652,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 643,
                  "end": 645,
                  "decorators": [],
                  "name": "b3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 648,
                  "end": 652,
                  "value": true,
                  "raw": "true"
                },
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "AssignmentPattern",
                "start": 654,
                "end": 663,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 654,
                  "end": 656,
                  "decorators": [],
                  "name": "b4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 659,
                  "end": 663,
                  "decorators": [],
                  "name": "temp",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 667,
            "end": 705,
            "elements": [
              {
                "type": "Literal",
                "start": 668,
                "end": 669,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 671,
                "end": 676,
                "value": false,
                "raw": "false"
              },
              {
                "type": "ObjectExpression",
                "start": 678,
                "end": 704,
                "properties": [
                  {
                    "type": "Property",
                    "start": 680,
                    "end": 689,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 680,
                      "end": 682,
                      "decorators": [],
                      "name": "t1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 684,
                      "end": 689,
                      "value": false,
                      "raw": "false"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 691,
                    "end": 702,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 691,
                      "end": 693,
                      "decorators": [],
                      "name": "t2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 695,
                      "end": 702,
                      "value": "hello",
                      "raw": "\"hello\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 707,
      "end": 778,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 711,
          "end": 777,
          "id": {
            "type": "ArrayPattern",
            "start": 711,
            "end": 741,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 712,
                "end": 718,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 712,
                  "end": 714,
                  "decorators": [],
                  "name": "b5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 717,
                  "end": 718,
                  "value": 3,
                  "raw": "3"
                },
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "AssignmentPattern",
                "start": 720,
                "end": 729,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 720,
                  "end": 722,
                  "decorators": [],
                  "name": "b6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 725,
                  "end": 729,
                  "value": true,
                  "raw": "true"
                },
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "AssignmentPattern",
                "start": 731,
                "end": 740,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 731,
                  "end": 733,
                  "decorators": [],
                  "name": "b7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 736,
                  "end": 740,
                  "decorators": [],
                  "name": "temp",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 744,
            "end": 777,
            "elements": [
              {
                "type": "Identifier",
                "start": 745,
                "end": 754,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 756,
                "end": 765,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 767,
                "end": 776,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1016,
      "end": 1038,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1020,
          "end": 1037,
          "id": {
            "type": "ArrayPattern",
            "start": 1020,
            "end": 1027,
            "decorators": [],
            "elements": [
              {
                "type": "RestElement",
                "start": 1021,
                "end": 1026,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 1024,
                  "end": 1026,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1030,
            "end": 1037,
            "elements": [
              {
                "type": "Literal",
                "start": 1031,
                "end": 1032,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1033,
                "end": 1034,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 1035,
                "end": 1036,
                "value": 3,
                "raw": "3"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1040,
      "end": 1072,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1044,
          "end": 1071,
          "id": {
            "type": "ArrayPattern",
            "start": 1044,
            "end": 1051,
            "decorators": [],
            "elements": [
              {
                "type": "RestElement",
                "start": 1045,
                "end": 1050,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 1048,
                  "end": 1050,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1054,
            "end": 1071,
            "elements": [
              {
                "type": "Literal",
                "start": 1055,
                "end": 1056,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1057,
                "end": 1058,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 1059,
                "end": 1060,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 1062,
                "end": 1070,
                "value": "string",
                "raw": "\"string\""
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1403,
      "end": 1429,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1407,
          "end": 1429,
          "id": {
            "type": "ArrayPattern",
            "start": 1407,
            "end": 1414,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 1408,
                "end": 1410,
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1411,
                "end": 1413,
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1417,
            "end": 1429,
            "elements": [
              {
                "type": "Literal",
                "start": 1418,
                "end": 1419,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1420,
                "end": 1428,
                "value": "string",
                "raw": "\"string\""
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1678,
      "end": 1709,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1682,
          "end": 1709,
          "id": {
            "type": "Identifier",
            "start": 1682,
            "end": 1687,
            "decorators": [],
            "name": "temp1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1690,
            "end": 1709,
            "elements": [
              {
                "type": "Literal",
                "start": 1691,
                "end": 1695,
                "value": true,
                "raw": "true"
              },
              {
                "type": "Literal",
                "start": 1697,
                "end": 1702,
                "value": false,
                "raw": "false"
              },
              {
                "type": "Literal",
                "start": 1704,
                "end": 1708,
                "value": true,
                "raw": "true"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1710,
      "end": 1749,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1714,
          "end": 1748,
          "id": {
            "type": "ArrayPattern",
            "start": 1714,
            "end": 1722,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 1715,
                "end": 1717,
                "decorators": [],
                "name": "d3",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1719,
                "end": 1721,
                "decorators": [],
                "name": "d4",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1725,
            "end": 1748,
            "elements": [
              {
                "type": "Literal",
                "start": 1726,
                "end": 1727,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1729,
                "end": 1737,
                "value": "string",
                "raw": "\"string\""
              },
              {
                "type": "SpreadElement",
                "start": 1739,
                "end": 1747,
                "argument": {
                  "type": "Identifier",
                  "start": 1742,
                  "end": 1747,
                  "decorators": [],
                  "name": "temp1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1794,
      "end": 1874,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1798,
          "end": 1873,
          "id": {
            "type": "ObjectPattern",
            "start": 1798,
            "end": 1839,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 1799,
                "end": 1838,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1799,
                  "end": 1800,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrayPattern",
                  "start": 1802,
                  "end": 1838,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 1803,
                      "end": 1805,
                      "decorators": [],
                      "name": "e1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 1807,
                      "end": 1809,
                      "decorators": [],
                      "name": "e2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "AssignmentPattern",
                      "start": 1811,
                      "end": 1837,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 1811,
                        "end": 1813,
                        "decorators": [],
                        "name": "e3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 1816,
                        "end": 1837,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1818,
                            "end": 1826,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 1818,
                              "end": 1820,
                              "decorators": [],
                              "name": "b1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1822,
                              "end": 1826,
                              "value": 1000,
                              "raw": "1000"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 1828,
                            "end": 1835,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 1828,
                              "end": 1830,
                              "decorators": [],
                              "name": "b4",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1832,
                              "end": 1835,
                              "value": 200,
                              "raw": "200"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      },
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1842,
            "end": 1873,
            "properties": [
              {
                "type": "Property",
                "start": 1844,
                "end": 1871,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1844,
                  "end": 1845,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrayExpression",
                  "start": 1847,
                  "end": 1871,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 1848,
                      "end": 1849,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 1851,
                      "end": 1852,
                      "value": 2,
                      "raw": "2"
                    },
                    {
                      "type": "ObjectExpression",
                      "start": 1854,
                      "end": 1870,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1856,
                          "end": 1861,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1856,
                            "end": 1858,
                            "decorators": [],
                            "name": "b1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1860,
                            "end": 1861,
                            "value": 4,
                            "raw": "4"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1863,
                          "end": 1868,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1863,
                            "end": 1865,
                            "decorators": [],
                            "name": "b4",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1867,
                            "end": 1868,
                            "value": 0,
                            "raw": "0"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1876,
      "end": 1948,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1880,
          "end": 1947,
          "id": {
            "type": "ObjectPattern",
            "start": 1880,
            "end": 1913,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 1881,
                "end": 1912,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1881,
                  "end": 1882,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrayPattern",
                  "start": 1884,
                  "end": 1912,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 1885,
                      "end": 1887,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 1889,
                      "end": 1891,
                      "decorators": [],
                      "name": "f2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "ObjectPattern",
                      "start": 1893,
                      "end": 1907,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1895,
                          "end": 1901,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1895,
                            "end": 1897,
                            "decorators": [],
                            "name": "f3",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1899,
                            "end": 1901,
                            "decorators": [],
                            "name": "f4",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1903,
                          "end": 1905,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1903,
                            "end": 1905,
                            "decorators": [],
                            "name": "f5",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1903,
                            "end": 1905,
                            "decorators": [],
                            "name": "f5",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    null
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1916,
            "end": 1947,
            "properties": [
              {
                "type": "Property",
                "start": 1918,
                "end": 1945,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1918,
                  "end": 1919,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrayExpression",
                  "start": 1921,
                  "end": 1945,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 1922,
                      "end": 1923,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 1925,
                      "end": 1926,
                      "value": 2,
                      "raw": "2"
                    },
                    {
                      "type": "ObjectExpression",
                      "start": 1928,
                      "end": 1944,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1930,
                          "end": 1935,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1930,
                            "end": 1932,
                            "decorators": [],
                            "name": "f3",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1934,
                            "end": 1935,
                            "value": 4,
                            "raw": "4"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1937,
                          "end": 1942,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1937,
                            "end": 1939,
                            "decorators": [],
                            "name": "f5",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1941,
                            "end": 1942,
                            "value": 0,
                            "raw": "0"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2270,
      "end": 2350,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2274,
          "end": 2349,
          "id": {
            "type": "ObjectPattern",
            "start": 2274,
            "end": 2325,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 2275,
                "end": 2302,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2275,
                  "end": 2276,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectPattern",
                  "start": 2278,
                  "end": 2302,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2279,
                      "end": 2301,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2279,
                        "end": 2281,
                        "decorators": [],
                        "name": "g1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 2279,
                        "end": 2301,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2279,
                          "end": 2281,
                          "decorators": [],
                          "name": "g1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "ArrayExpression",
                          "start": 2284,
                          "end": 2301,
                          "elements": [
                            {
                              "type": "Identifier",
                              "start": 2285,
                              "end": 2294,
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            {
                              "type": "Literal",
                              "start": 2296,
                              "end": 2300,
                              "value": null,
                              "raw": "null"
                            }
                          ]
                        },
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2303,
              "end": 2325,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2305,
                "end": 2325,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 2307,
                    "end": 2323,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2307,
                      "end": 2308,
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2308,
                      "end": 2323,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 2310,
                        "end": 2323,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 2312,
                            "end": 2321,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2312,
                              "end": 2314,
                              "decorators": [],
                              "name": "g1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2314,
                              "end": 2321,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 2316,
                                "end": 2321,
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 2316,
                                  "end": 2319
                                }
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2328,
            "end": 2349,
            "properties": [
              {
                "type": "Property",
                "start": 2330,
                "end": 2347,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2330,
                  "end": 2331,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 2333,
                  "end": 2347,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2335,
                      "end": 2345,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2335,
                        "end": 2337,
                        "decorators": [],
                        "name": "g1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ArrayExpression",
                        "start": 2339,
                        "end": 2345,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 2340,
                            "end": 2341,
                            "value": 1,
                            "raw": "1"
                          },
                          {
                            "type": "Literal",
                            "start": 2343,
                            "end": 2344,
                            "value": 2,
                            "raw": "2"
                          }
                        ]
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2351,
      "end": 2434,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2355,
          "end": 2433,
          "id": {
            "type": "ObjectPattern",
            "start": 2355,
            "end": 2409,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 2356,
                "end": 2383,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2356,
                  "end": 2357,
                  "decorators": [],
                  "name": "h",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectPattern",
                  "start": 2359,
                  "end": 2383,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2360,
                      "end": 2382,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2360,
                        "end": 2362,
                        "decorators": [],
                        "name": "h1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 2360,
                        "end": 2382,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2360,
                          "end": 2362,
                          "decorators": [],
                          "name": "h1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "ArrayExpression",
                          "start": 2365,
                          "end": 2382,
                          "elements": [
                            {
                              "type": "Identifier",
                              "start": 2366,
                              "end": 2375,
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            {
                              "type": "Literal",
                              "start": 2377,
                              "end": 2381,
                              "value": null,
                              "raw": "null"
                            }
                          ]
                        },
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2384,
              "end": 2409,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2386,
                "end": 2409,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 2388,
                    "end": 2407,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2388,
                      "end": 2389,
                      "decorators": [],
                      "name": "h",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2389,
                      "end": 2407,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 2391,
                        "end": 2407,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 2393,
                            "end": 2405,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2393,
                              "end": 2395,
                              "decorators": [],
                              "name": "h1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2395,
                              "end": 2405,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 2397,
                                "end": 2405,
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 2397,
                                  "end": 2403
                                }
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2412,
            "end": 2433,
            "properties": [
              {
                "type": "Property",
                "start": 2414,
                "end": 2431,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2414,
                  "end": 2415,
                  "decorators": [],
                  "name": "h",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 2417,
                  "end": 2431,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2419,
                      "end": 2429,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2419,
                        "end": 2421,
                        "decorators": [],
                        "name": "h1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ArrayExpression",
                        "start": 2423,
                        "end": 2429,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 2424,
                            "end": 2425,
                            "value": 1,
                            "raw": "1"
                          },
                          {
                            "type": "Literal",
                            "start": 2427,
                            "end": 2428,
                            "value": 2,
                            "raw": "2"
                          }
                        ]
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
