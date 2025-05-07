__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 164,
  "end": 2431,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 164,
      "end": 230,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 230,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 168,
            "end": 204,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 169,
                "end": 171,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 171,
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 171,
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 173,
                "end": 175,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 175,
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 175,
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 180,
                      "end": 182,
                      "decorators": [],
                      "name": "a1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 182,
                      "end": 190,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 184,
                        "end": 190
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 192,
                    "end": 202,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 192,
                      "end": 194,
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 194,
                      "end": 202,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 196,
                        "end": 202
                      }
                    }
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 211,
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 213,
                  "end": 215,
                  "raw": "10",
                  "value": 10,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 217,
                "end": 228,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 217,
                  "end": 219,
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 221,
                  "end": 228,
                  "raw": "\"world\"",
                  "value": "world",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 231,
      "end": 308,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 307,
          "definite": false,
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
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
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
                        "raw": "\"hello\"",
                        "value": "hello",
                        "regex": null,
                        "bigint": null
                      }
                    ]
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 302,
                "end": 306,
                "raw": "true",
                "value": true,
                "regex": null,
                "bigint": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 523,
      "end": 591,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 527,
          "end": 590,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 527,
            "end": 563,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 529,
                "end": 560,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 529,
                  "end": 531,
                  "decorators": [],
                  "name": "b1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
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
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 535,
                        "end": 538,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 535,
                          "end": 538,
                          "decorators": [],
                          "name": "b11",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 535,
                          "end": 538,
                          "decorators": [],
                          "name": "b11",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "ObjectExpression",
                    "start": 543,
                    "end": 560,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 545,
                        "end": 558,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 545,
                          "end": 548,
                          "decorators": [],
                          "name": "b11",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 550,
                          "end": 558,
                          "raw": "\"string\"",
                          "value": "string",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  },
                  "typeAnnotation": null
                }
              }
            ],
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 568,
                  "end": 570,
                  "decorators": [],
                  "name": "b1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 572,
                  "end": 588,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 574,
                      "end": 586,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 574,
                        "end": 577,
                        "decorators": [],
                        "name": "b11",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 579,
                        "end": 586,
                        "raw": "\"world\"",
                        "value": "world",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 592,
      "end": 629,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 596,
          "end": 628,
          "definite": false,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 605,
                  "end": 607,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 609,
                  "end": 613,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 615,
                "end": 626,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 615,
                  "end": 617,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 619,
                  "end": 626,
                  "raw": "\"false\"",
                  "value": "false",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 630,
      "end": 706,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 634,
          "end": 705,
          "definite": false,
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
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 640,
                  "end": 641,
                  "raw": "3",
                  "value": 3,
                  "regex": null,
                  "bigint": null
                },
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
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 648,
                  "end": 652,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                },
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
                "optional": false,
                "right": {
                  "type": "Identifier",
                  "start": 659,
                  "end": 663,
                  "decorators": [],
                  "name": "temp",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                "raw": "3",
                "value": 3,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 671,
                "end": 676,
                "raw": "false",
                "value": false,
                "regex": null,
                "bigint": null
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 680,
                      "end": 682,
                      "decorators": [],
                      "name": "t1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 684,
                      "end": 689,
                      "raw": "false",
                      "value": false,
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 691,
                    "end": 702,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 691,
                      "end": 693,
                      "decorators": [],
                      "name": "t2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 695,
                      "end": 702,
                      "raw": "\"hello\"",
                      "value": "hello",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 707,
      "end": 778,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 711,
          "end": 777,
          "definite": false,
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
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 717,
                  "end": 718,
                  "raw": "3",
                  "value": 3,
                  "regex": null,
                  "bigint": null
                },
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
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 725,
                  "end": 729,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                },
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
                "optional": false,
                "right": {
                  "type": "Identifier",
                  "start": 736,
                  "end": 740,
                  "decorators": [],
                  "name": "temp",
                  "optional": false,
                  "typeAnnotation": null
                },
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1016,
      "end": 1038,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1020,
          "end": 1037,
          "definite": false,
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
                "argument": {
                  "type": "Identifier",
                  "start": 1024,
                  "end": 1026,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
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
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 1033,
                "end": 1034,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 1035,
                "end": 1036,
                "raw": "3",
                "value": 3,
                "regex": null,
                "bigint": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1039,
      "end": 1071,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1043,
          "end": 1070,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 1043,
            "end": 1050,
            "decorators": [],
            "elements": [
              {
                "type": "RestElement",
                "start": 1044,
                "end": 1049,
                "argument": {
                  "type": "Identifier",
                  "start": 1047,
                  "end": 1049,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
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
            "start": 1053,
            "end": 1070,
            "elements": [
              {
                "type": "Literal",
                "start": 1054,
                "end": 1055,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 1056,
                "end": 1057,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 1058,
                "end": 1059,
                "raw": "3",
                "value": 3,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 1061,
                "end": 1069,
                "raw": "\"string\"",
                "value": "string",
                "regex": null,
                "bigint": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1401,
      "end": 1427,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1405,
          "end": 1427,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 1405,
            "end": 1412,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 1406,
                "end": 1408,
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1409,
                "end": 1411,
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
            "start": 1415,
            "end": 1427,
            "elements": [
              {
                "type": "Literal",
                "start": 1416,
                "end": 1417,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 1418,
                "end": 1426,
                "raw": "\"string\"",
                "value": "string",
                "regex": null,
                "bigint": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1675,
      "end": 1706,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1679,
          "end": 1706,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1679,
            "end": 1684,
            "decorators": [],
            "name": "temp1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1687,
            "end": 1706,
            "elements": [
              {
                "type": "Literal",
                "start": 1688,
                "end": 1692,
                "raw": "true",
                "value": true,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 1694,
                "end": 1699,
                "raw": "false",
                "value": false,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 1701,
                "end": 1705,
                "raw": "true",
                "value": true,
                "regex": null,
                "bigint": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1707,
      "end": 1746,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1711,
          "end": 1745,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 1711,
            "end": 1719,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 1712,
                "end": 1714,
                "decorators": [],
                "name": "d3",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1716,
                "end": 1718,
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
            "start": 1722,
            "end": 1745,
            "elements": [
              {
                "type": "Literal",
                "start": 1723,
                "end": 1724,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 1726,
                "end": 1734,
                "raw": "\"string\"",
                "value": "string",
                "regex": null,
                "bigint": null
              },
              {
                "type": "SpreadElement",
                "start": 1736,
                "end": 1744,
                "argument": {
                  "type": "Identifier",
                  "start": 1739,
                  "end": 1744,
                  "decorators": [],
                  "name": "temp1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1791,
      "end": 1871,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1795,
          "end": 1870,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 1795,
            "end": 1836,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 1796,
                "end": 1835,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1796,
                  "end": 1797,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrayPattern",
                  "start": 1799,
                  "end": 1835,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 1800,
                      "end": 1802,
                      "decorators": [],
                      "name": "e1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 1804,
                      "end": 1806,
                      "decorators": [],
                      "name": "e2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "AssignmentPattern",
                      "start": 1808,
                      "end": 1834,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 1808,
                        "end": 1810,
                        "decorators": [],
                        "name": "e3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "right": {
                        "type": "ObjectExpression",
                        "start": 1813,
                        "end": 1834,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1815,
                            "end": 1823,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1815,
                              "end": 1817,
                              "decorators": [],
                              "name": "b1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 1819,
                              "end": 1823,
                              "raw": "1000",
                              "value": 1000,
                              "regex": null,
                              "bigint": null
                            }
                          },
                          {
                            "type": "Property",
                            "start": 1825,
                            "end": 1832,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1825,
                              "end": 1827,
                              "decorators": [],
                              "name": "b4",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 1829,
                              "end": 1832,
                              "raw": "200",
                              "value": 200,
                              "regex": null,
                              "bigint": null
                            }
                          }
                        ]
                      },
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1839,
            "end": 1870,
            "properties": [
              {
                "type": "Property",
                "start": 1841,
                "end": 1868,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1841,
                  "end": 1842,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrayExpression",
                  "start": 1844,
                  "end": 1868,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 1845,
                      "end": 1846,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 1848,
                      "end": 1849,
                      "raw": "2",
                      "value": 2,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "ObjectExpression",
                      "start": 1851,
                      "end": 1867,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1853,
                          "end": 1858,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1853,
                            "end": 1855,
                            "decorators": [],
                            "name": "b1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 1857,
                            "end": 1858,
                            "raw": "4",
                            "value": 4,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 1860,
                          "end": 1865,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1860,
                            "end": 1862,
                            "decorators": [],
                            "name": "b4",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 1864,
                            "end": 1865,
                            "raw": "0",
                            "value": 0,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1872,
      "end": 1944,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1876,
          "end": 1943,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 1876,
            "end": 1909,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 1877,
                "end": 1908,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1877,
                  "end": 1878,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrayPattern",
                  "start": 1880,
                  "end": 1908,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 1881,
                      "end": 1883,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 1885,
                      "end": 1887,
                      "decorators": [],
                      "name": "f2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "ObjectPattern",
                      "start": 1889,
                      "end": 1903,
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1891,
                          "end": 1897,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1891,
                            "end": 1893,
                            "decorators": [],
                            "name": "f3",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Identifier",
                            "start": 1895,
                            "end": 1897,
                            "decorators": [],
                            "name": "f4",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 1899,
                          "end": 1901,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1899,
                            "end": 1901,
                            "decorators": [],
                            "name": "f5",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "start": 1899,
                            "end": 1901,
                            "decorators": [],
                            "name": "f5",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "typeAnnotation": null
                    },
                    null
                  ],
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1912,
            "end": 1943,
            "properties": [
              {
                "type": "Property",
                "start": 1914,
                "end": 1941,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1914,
                  "end": 1915,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrayExpression",
                  "start": 1917,
                  "end": 1941,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 1918,
                      "end": 1919,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 1921,
                      "end": 1922,
                      "raw": "2",
                      "value": 2,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "ObjectExpression",
                      "start": 1924,
                      "end": 1940,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1926,
                          "end": 1931,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1926,
                            "end": 1928,
                            "decorators": [],
                            "name": "f3",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 1930,
                            "end": 1931,
                            "raw": "4",
                            "value": 4,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 1933,
                          "end": 1938,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1933,
                            "end": 1935,
                            "decorators": [],
                            "name": "f5",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 1937,
                            "end": 1938,
                            "raw": "0",
                            "value": 0,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2266,
      "end": 2346,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2270,
          "end": 2345,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 2270,
            "end": 2321,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 2271,
                "end": 2298,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2271,
                  "end": 2272,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectPattern",
                  "start": 2274,
                  "end": 2298,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2275,
                      "end": 2297,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2275,
                        "end": 2277,
                        "decorators": [],
                        "name": "g1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 2275,
                        "end": 2297,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2275,
                          "end": 2277,
                          "decorators": [],
                          "name": "g1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "right": {
                          "type": "ArrayExpression",
                          "start": 2280,
                          "end": 2297,
                          "elements": [
                            {
                              "type": "Identifier",
                              "start": 2281,
                              "end": 2290,
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            {
                              "type": "Literal",
                              "start": 2292,
                              "end": 2296,
                              "raw": "null",
                              "value": null,
                              "regex": null,
                              "bigint": null
                            }
                          ]
                        },
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2299,
              "end": 2321,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2301,
                "end": 2321,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 2303,
                    "end": 2319,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2303,
                      "end": 2304,
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2304,
                      "end": 2319,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 2306,
                        "end": 2319,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 2308,
                            "end": 2317,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2308,
                              "end": 2310,
                              "decorators": [],
                              "name": "g1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2310,
                              "end": 2317,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 2312,
                                "end": 2317,
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 2312,
                                  "end": 2315
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2324,
            "end": 2345,
            "properties": [
              {
                "type": "Property",
                "start": 2326,
                "end": 2343,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2326,
                  "end": 2327,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 2329,
                  "end": 2343,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2331,
                      "end": 2341,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2331,
                        "end": 2333,
                        "decorators": [],
                        "name": "g1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrayExpression",
                        "start": 2335,
                        "end": 2341,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 2336,
                            "end": 2337,
                            "raw": "1",
                            "value": 1,
                            "regex": null,
                            "bigint": null
                          },
                          {
                            "type": "Literal",
                            "start": 2339,
                            "end": 2340,
                            "raw": "2",
                            "value": 2,
                            "regex": null,
                            "bigint": null
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2347,
      "end": 2430,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2351,
          "end": 2429,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 2351,
            "end": 2405,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 2352,
                "end": 2379,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2352,
                  "end": 2353,
                  "decorators": [],
                  "name": "h",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectPattern",
                  "start": 2355,
                  "end": 2379,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2356,
                      "end": 2378,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2356,
                        "end": 2358,
                        "decorators": [],
                        "name": "h1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 2356,
                        "end": 2378,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2356,
                          "end": 2358,
                          "decorators": [],
                          "name": "h1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "right": {
                          "type": "ArrayExpression",
                          "start": 2361,
                          "end": 2378,
                          "elements": [
                            {
                              "type": "Identifier",
                              "start": 2362,
                              "end": 2371,
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            {
                              "type": "Literal",
                              "start": 2373,
                              "end": 2377,
                              "raw": "null",
                              "value": null,
                              "regex": null,
                              "bigint": null
                            }
                          ]
                        },
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2380,
              "end": 2405,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2382,
                "end": 2405,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 2384,
                    "end": 2403,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2384,
                      "end": 2385,
                      "decorators": [],
                      "name": "h",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2385,
                      "end": 2403,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 2387,
                        "end": 2403,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 2389,
                            "end": 2401,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2389,
                              "end": 2391,
                              "decorators": [],
                              "name": "h1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2391,
                              "end": 2401,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 2393,
                                "end": 2401,
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 2393,
                                  "end": 2399
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2408,
            "end": 2429,
            "properties": [
              {
                "type": "Property",
                "start": 2410,
                "end": 2427,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2410,
                  "end": 2411,
                  "decorators": [],
                  "name": "h",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 2413,
                  "end": 2427,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2415,
                      "end": 2425,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2415,
                        "end": 2417,
                        "decorators": [],
                        "name": "h1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrayExpression",
                        "start": 2419,
                        "end": 2425,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 2420,
                            "end": 2421,
                            "raw": "1",
                            "value": 1,
                            "regex": null,
                            "bigint": null
                          },
                          {
                            "type": "Literal",
                            "start": 2423,
                            "end": 2424,
                            "raw": "2",
                            "value": 2,
                            "regex": null,
                            "bigint": null
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
