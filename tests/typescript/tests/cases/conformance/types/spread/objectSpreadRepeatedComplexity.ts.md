__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cnd",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 16,
                "end": 22
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 23,
                    "end": 29
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 31,
                    "end": 38
                  }
                ],
                "start": 22,
                "end": 39
              },
              "start": 16,
              "end": 39
            },
            "start": 14,
            "end": 39
          },
          "start": 11,
          "end": 39
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cnd",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 200,
                          "end": 203
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 204,
                          "end": 205
                        },
                        "optional": false,
                        "computed": true,
                        "start": 200,
                        "end": 206
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cnd",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 222,
                          "end": 225
                        },
                        "property": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 226,
                          "end": 227
                        },
                        "optional": false,
                        "computed": true,
                        "start": 222,
                        "end": 228
                      },
                      "start": 200,
                      "end": 228
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop0",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 246,
                            "end": 251
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 253,
                            "end": 254
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 246,
                          "end": 254
                        }
                      ],
                      "start": 232,
                      "end": 265
                    },
                    "start": 200,
                    "end": 265
                  },
                  "start": 196,
                  "end": 266
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 354,
                        "end": 357
                      },
                      "property": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 358,
                        "end": 359
                      },
                      "optional": false,
                      "computed": true,
                      "start": 354,
                      "end": 360
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop3a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 378,
                            "end": 384
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 386,
                            "end": 387
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 378,
                          "end": 387
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop3b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 401,
                            "end": 407
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 409,
                            "end": 410
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 401,
                          "end": 410
                        }
                      ],
                      "start": 364,
                      "end": 421
                    },
                    "start": 354,
                    "end": 421
                  },
                  "start": 350,
                  "end": 422
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 436,
                        "end": 439
                      },
                      "property": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 440,
                        "end": 441
                      },
                      "optional": false,
                      "computed": true,
                      "start": 436,
                      "end": 442
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop4a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 460,
                            "end": 466
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 468,
                            "end": 469
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 460,
                          "end": 469
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop4b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 483,
                            "end": 489
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 491,
                            "end": 492
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 483,
                          "end": 492
                        }
                      ],
                      "start": 446,
                      "end": 503
                    },
                    "start": 436,
                    "end": 503
                  },
                  "start": 432,
                  "end": 504
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 518,
                        "end": 521
                      },
                      "property": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 522,
                        "end": 523
                      },
                      "optional": false,
                      "computed": true,
                      "start": 518,
                      "end": 524
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop5a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 542,
                            "end": 548
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 550,
                            "end": 551
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 542,
                          "end": 551
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop5b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 565,
                            "end": 571
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 573,
                            "end": 574
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 565,
                          "end": 574
                        }
                      ],
                      "start": 528,
                      "end": 585
                    },
                    "start": 518,
                    "end": 585
                  },
                  "start": 514,
                  "end": 586
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 600,
                        "end": 603
                      },
                      "property": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 604,
                        "end": 605
                      },
                      "optional": false,
                      "computed": true,
                      "start": 600,
                      "end": 606
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop6a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 624,
                            "end": 630
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 632,
                            "end": 633
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 624,
                          "end": 633
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop6b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 647,
                            "end": 653
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 655,
                            "end": 656
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 647,
                          "end": 656
                        }
                      ],
                      "start": 610,
                      "end": 667
                    },
                    "start": 600,
                    "end": 667
                  },
                  "start": 596,
                  "end": 668
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 682,
                        "end": 685
                      },
                      "property": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 686,
                        "end": 687
                      },
                      "optional": false,
                      "computed": true,
                      "start": 682,
                      "end": 688
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop7a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 706,
                            "end": 712
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 714,
                            "end": 715
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 706,
                          "end": 715
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop7b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 729,
                            "end": 735
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 737,
                            "end": 738
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 729,
                          "end": 738
                        }
                      ],
                      "start": 692,
                      "end": 749
                    },
                    "start": 682,
                    "end": 749
                  },
                  "start": 678,
                  "end": 750
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 764,
                        "end": 767
                      },
                      "property": {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 768,
                        "end": 769
                      },
                      "optional": false,
                      "computed": true,
                      "start": 764,
                      "end": 770
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop8a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 788,
                            "end": 794
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 796,
                            "end": 797
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 788,
                          "end": 797
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop8b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 811,
                            "end": 817
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 819,
                            "end": 820
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 811,
                          "end": 820
                        }
                      ],
                      "start": 774,
                      "end": 831
                    },
                    "start": 764,
                    "end": 831
                  },
                  "start": 760,
                  "end": 832
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 846,
                        "end": 849
                      },
                      "property": {
                        "type": "Literal",
                        "value": 9,
                        "raw": "9",
                        "start": 850,
                        "end": 851
                      },
                      "optional": false,
                      "computed": true,
                      "start": 846,
                      "end": 852
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop9a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 870,
                            "end": 876
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 878,
                            "end": 879
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 870,
                          "end": 879
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop9b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 893,
                            "end": 899
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 901,
                            "end": 902
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 893,
                          "end": 902
                        }
                      ],
                      "start": 856,
                      "end": 913
                    },
                    "start": 846,
                    "end": 913
                  },
                  "start": 842,
                  "end": 914
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 928,
                        "end": 931
                      },
                      "property": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 932,
                        "end": 934
                      },
                      "optional": false,
                      "computed": true,
                      "start": 928,
                      "end": 935
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop10a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 953,
                            "end": 960
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 962,
                            "end": 963
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 953,
                          "end": 963
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop10b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 977,
                            "end": 984
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 986,
                            "end": 987
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 977,
                          "end": 987
                        }
                      ],
                      "start": 939,
                      "end": 998
                    },
                    "start": 928,
                    "end": 998
                  },
                  "start": 924,
                  "end": 999
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1013,
                        "end": 1016
                      },
                      "property": {
                        "type": "Literal",
                        "value": 11,
                        "raw": "11",
                        "start": 1017,
                        "end": 1019
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1013,
                      "end": 1020
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop11a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1038,
                            "end": 1045
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1047,
                            "end": 1048
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1038,
                          "end": 1048
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop11b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1062,
                            "end": 1069
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1071,
                            "end": 1072
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1062,
                          "end": 1072
                        }
                      ],
                      "start": 1024,
                      "end": 1083
                    },
                    "start": 1013,
                    "end": 1083
                  },
                  "start": 1009,
                  "end": 1084
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1098,
                        "end": 1101
                      },
                      "property": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 1102,
                        "end": 1104
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1098,
                      "end": 1105
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop12a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1123,
                            "end": 1130
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1132,
                            "end": 1133
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1123,
                          "end": 1133
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop12b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1147,
                            "end": 1154
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1156,
                            "end": 1157
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1147,
                          "end": 1157
                        }
                      ],
                      "start": 1109,
                      "end": 1168
                    },
                    "start": 1098,
                    "end": 1168
                  },
                  "start": 1094,
                  "end": 1169
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1183,
                        "end": 1186
                      },
                      "property": {
                        "type": "Literal",
                        "value": 13,
                        "raw": "13",
                        "start": 1187,
                        "end": 1189
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1183,
                      "end": 1190
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop13a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1208,
                            "end": 1215
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1217,
                            "end": 1218
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1208,
                          "end": 1218
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop13b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1232,
                            "end": 1239
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1241,
                            "end": 1242
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1232,
                          "end": 1242
                        }
                      ],
                      "start": 1194,
                      "end": 1253
                    },
                    "start": 1183,
                    "end": 1253
                  },
                  "start": 1179,
                  "end": 1254
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1268,
                        "end": 1271
                      },
                      "property": {
                        "type": "Literal",
                        "value": 14,
                        "raw": "14",
                        "start": 1272,
                        "end": 1274
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1268,
                      "end": 1275
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop14a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1293,
                            "end": 1300
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1302,
                            "end": 1303
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1293,
                          "end": 1303
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop14b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1317,
                            "end": 1324
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1326,
                            "end": 1327
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1317,
                          "end": 1327
                        }
                      ],
                      "start": 1279,
                      "end": 1338
                    },
                    "start": 1268,
                    "end": 1338
                  },
                  "start": 1264,
                  "end": 1339
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1353,
                        "end": 1356
                      },
                      "property": {
                        "type": "Literal",
                        "value": 15,
                        "raw": "15",
                        "start": 1357,
                        "end": 1359
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1353,
                      "end": 1360
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop15a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1378,
                            "end": 1385
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1387,
                            "end": 1388
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1378,
                          "end": 1388
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop15b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1402,
                            "end": 1409
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1411,
                            "end": 1412
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1402,
                          "end": 1412
                        }
                      ],
                      "start": 1364,
                      "end": 1423
                    },
                    "start": 1353,
                    "end": 1423
                  },
                  "start": 1349,
                  "end": 1424
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1438,
                        "end": 1441
                      },
                      "property": {
                        "type": "Literal",
                        "value": 16,
                        "raw": "16",
                        "start": 1442,
                        "end": 1444
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1438,
                      "end": 1445
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop16a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1463,
                            "end": 1470
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1472,
                            "end": 1473
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1463,
                          "end": 1473
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop16b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1487,
                            "end": 1494
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1496,
                            "end": 1497
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1487,
                          "end": 1497
                        }
                      ],
                      "start": 1449,
                      "end": 1508
                    },
                    "start": 1438,
                    "end": 1508
                  },
                  "start": 1434,
                  "end": 1509
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1523,
                        "end": 1526
                      },
                      "property": {
                        "type": "Literal",
                        "value": 17,
                        "raw": "17",
                        "start": 1527,
                        "end": 1529
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1523,
                      "end": 1530
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop17a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1548,
                            "end": 1555
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1557,
                            "end": 1558
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1548,
                          "end": 1558
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop17b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1572,
                            "end": 1579
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1581,
                            "end": 1582
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1572,
                          "end": 1582
                        }
                      ],
                      "start": 1534,
                      "end": 1593
                    },
                    "start": 1523,
                    "end": 1593
                  },
                  "start": 1519,
                  "end": 1594
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1608,
                        "end": 1611
                      },
                      "property": {
                        "type": "Literal",
                        "value": 18,
                        "raw": "18",
                        "start": 1612,
                        "end": 1614
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1608,
                      "end": 1615
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop18a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1633,
                            "end": 1640
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1642,
                            "end": 1643
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1633,
                          "end": 1643
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop18b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1657,
                            "end": 1664
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1666,
                            "end": 1667
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1657,
                          "end": 1667
                        }
                      ],
                      "start": 1619,
                      "end": 1678
                    },
                    "start": 1608,
                    "end": 1678
                  },
                  "start": 1604,
                  "end": 1679
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1693,
                        "end": 1696
                      },
                      "property": {
                        "type": "Literal",
                        "value": 19,
                        "raw": "19",
                        "start": 1697,
                        "end": 1699
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1693,
                      "end": 1700
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop19a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1718,
                            "end": 1725
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1727,
                            "end": 1728
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1718,
                          "end": 1728
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop19b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1742,
                            "end": 1749
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1751,
                            "end": 1752
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1742,
                          "end": 1752
                        }
                      ],
                      "start": 1704,
                      "end": 1763
                    },
                    "start": 1693,
                    "end": 1763
                  },
                  "start": 1689,
                  "end": 1764
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1778,
                        "end": 1781
                      },
                      "property": {
                        "type": "Literal",
                        "value": 20,
                        "raw": "20",
                        "start": 1782,
                        "end": 1784
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1778,
                      "end": 1785
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop20a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1803,
                            "end": 1810
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1812,
                            "end": 1813
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1803,
                          "end": 1813
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop20b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1827,
                            "end": 1834
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1836,
                            "end": 1837
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1827,
                          "end": 1837
                        }
                      ],
                      "start": 1789,
                      "end": 1848
                    },
                    "start": 1778,
                    "end": 1848
                  },
                  "start": 1774,
                  "end": 1849
                }
              ],
              "start": 136,
              "end": 1856
            },
            "start": 129,
            "end": 1857
          }
        ],
        "start": 40,
        "end": 1859
      },
      "expression": false,
      "start": 0,
      "end": 1859
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1859
}
```
