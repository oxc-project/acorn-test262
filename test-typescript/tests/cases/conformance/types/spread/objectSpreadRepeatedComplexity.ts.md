__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1859,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 1859,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 39,
          "name": "cnd",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 39,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 16,
              "end": 39,
              "typeName": {
                "type": "Identifier",
                "start": 16,
                "end": 22,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 22,
                "end": 39,
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
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 40,
        "end": 1859,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 129,
            "end": 1857,
            "argument": {
              "type": "ObjectExpression",
              "start": 136,
              "end": 1856,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 196,
                  "end": 266,
                  "argument": {
                    "type": "LogicalExpression",
                    "start": 200,
                    "end": 265,
                    "left": {
                      "type": "LogicalExpression",
                      "start": 200,
                      "end": 228,
                      "left": {
                        "type": "MemberExpression",
                        "start": 200,
                        "end": 206,
                        "object": {
                          "type": "Identifier",
                          "start": 200,
                          "end": 203,
                          "name": "cnd",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Literal",
                          "start": 204,
                          "end": 205,
                          "value": 1,
                          "raw": "1"
                        },
                        "computed": true,
                        "optional": false
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "start": 222,
                        "end": 228,
                        "object": {
                          "type": "Identifier",
                          "start": 222,
                          "end": 225,
                          "name": "cnd",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Literal",
                          "start": 226,
                          "end": 227,
                          "value": 2,
                          "raw": "2"
                        },
                        "computed": true,
                        "optional": false
                      }
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 232,
                      "end": 265,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 246,
                          "end": 254,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 246,
                            "end": 251,
                            "name": "prop0",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 253,
                            "end": 254,
                            "value": 0,
                            "raw": "0"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 350,
                  "end": 422,
                  "argument": {
                    "type": "LogicalExpression",
                    "start": 354,
                    "end": 421,
                    "left": {
                      "type": "MemberExpression",
                      "start": 354,
                      "end": 360,
                      "object": {
                        "type": "Identifier",
                        "start": 354,
                        "end": 357,
                        "name": "cnd",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Literal",
                        "start": 358,
                        "end": 359,
                        "value": 3,
                        "raw": "3"
                      },
                      "computed": true,
                      "optional": false
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 364,
                      "end": 421,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 378,
                          "end": 387,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 378,
                            "end": 384,
                            "name": "prop3a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 386,
                            "end": 387,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 401,
                          "end": 410,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 401,
                            "end": 407,
                            "name": "prop3b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 409,
                            "end": 410,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 432,
                  "end": 504,
                  "argument": {
                    "type": "LogicalExpression",
                    "start": 436,
                    "end": 503,
                    "left": {
                      "type": "MemberExpression",
                      "start": 436,
                      "end": 442,
                      "object": {
                        "type": "Identifier",
                        "start": 436,
                        "end": 439,
                        "name": "cnd",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Literal",
                        "start": 440,
                        "end": 441,
                        "value": 4,
                        "raw": "4"
                      },
                      "computed": true,
                      "optional": false
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 446,
                      "end": 503,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 460,
                          "end": 469,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 460,
                            "end": 466,
                            "name": "prop4a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 468,
                            "end": 469,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 483,
                          "end": 492,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 483,
                            "end": 489,
                            "name": "prop4b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 491,
                            "end": 492,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 514,
                  "end": 586,
                  "argument": {
                    "type": "LogicalExpression",
                    "start": 518,
                    "end": 585,
                    "left": {
                      "type": "MemberExpression",
                      "start": 518,
                      "end": 524,
                      "object": {
                        "type": "Identifier",
                        "start": 518,
                        "end": 521,
                        "name": "cnd",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Literal",
                        "start": 522,
                        "end": 523,
                        "value": 5,
                        "raw": "5"
                      },
                      "computed": true,
                      "optional": false
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 528,
                      "end": 585,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 542,
                          "end": 551,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 542,
                            "end": 548,
                            "name": "prop5a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 550,
                            "end": 551,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 565,
                          "end": 574,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 565,
                            "end": 571,
                            "name": "prop5b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 573,
                            "end": 574,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 596,
                  "end": 668,
                  "argument": {
                    "type": "LogicalExpression",
                    "start": 600,
                    "end": 667,
                    "left": {
                      "type": "MemberExpression",
                      "start": 600,
                      "end": 606,
                      "object": {
                        "type": "Identifier",
                        "start": 600,
                        "end": 603,
                        "name": "cnd",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Literal",
                        "start": 604,
                        "end": 605,
                        "value": 6,
                        "raw": "6"
                      },
                      "computed": true,
                      "optional": false
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 610,
                      "end": 667,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 624,
                          "end": 633,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 624,
                            "end": 630,
                            "name": "prop6a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 632,
                            "end": 633,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 647,
                          "end": 656,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 647,
                            "end": 653,
                            "name": "prop6b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 655,
                            "end": 656,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 678,
                  "end": 750,
                  "argument": {
                    "type": "LogicalExpression",
                    "start": 682,
                    "end": 749,
                    "left": {
                      "type": "MemberExpression",
                      "start": 682,
                      "end": 688,
                      "object": {
                        "type": "Identifier",
                        "start": 682,
                        "end": 685,
                        "name": "cnd",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Literal",
                        "start": 686,
                        "end": 687,
                        "value": 7,
                        "raw": "7"
                      },
                      "computed": true,
                      "optional": false
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 692,
                      "end": 749,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 706,
                          "end": 715,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 706,
                            "end": 712,
                            "name": "prop7a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 714,
                            "end": 715,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 729,
                          "end": 738,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 729,
                            "end": 735,
                            "name": "prop7b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 737,
                            "end": 738,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 760,
                  "end": 832,
                  "argument": {
                    "type": "LogicalExpression",
                    "start": 764,
                    "end": 831,
                    "left": {
                      "type": "MemberExpression",
                      "start": 764,
                      "end": 770,
                      "object": {
                        "type": "Identifier",
                        "start": 764,
                        "end": 767,
                        "name": "cnd",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Literal",
                        "start": 768,
                        "end": 769,
                        "value": 8,
                        "raw": "8"
                      },
                      "computed": true,
                      "optional": false
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 774,
                      "end": 831,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 788,
                          "end": 797,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 788,
                            "end": 794,
                            "name": "prop8a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 796,
                            "end": 797,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 811,
                          "end": 820,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 811,
                            "end": 817,
                            "name": "prop8b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 819,
                            "end": 820,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 842,
                  "end": 914,
                  "argument": {
                    "type": "LogicalExpression",
                    "start": 846,
                    "end": 913,
                    "left": {
                      "type": "MemberExpression",
                      "start": 846,
                      "end": 852,
                      "object": {
                        "type": "Identifier",
                        "start": 846,
                        "end": 849,
                        "name": "cnd",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Literal",
                        "start": 850,
                        "end": 851,
                        "value": 9,
                        "raw": "9"
                      },
                      "computed": true,
                      "optional": false
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 856,
                      "end": 913,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 870,
                          "end": 879,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 870,
                            "end": 876,
                            "name": "prop9a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 878,
                            "end": 879,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 893,
                          "end": 902,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 893,
                            "end": 899,
                            "name": "prop9b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 901,
                            "end": 902,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 924,
                  "end": 999,
                  "argument": {
                    "type": "LogicalExpression",
                    "start": 928,
                    "end": 998,
                    "left": {
                      "type": "MemberExpression",
                      "start": 928,
                      "end": 935,
                      "object": {
                        "type": "Identifier",
                        "start": 928,
                        "end": 931,
                        "name": "cnd",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Literal",
                        "start": 932,
                        "end": 934,
                        "value": 10,
                        "raw": "10"
                      },
                      "computed": true,
                      "optional": false
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 939,
                      "end": 998,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 953,
                          "end": 963,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 953,
                            "end": 960,
                            "name": "prop10a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 962,
                            "end": 963,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 977,
                          "end": 987,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 977,
                            "end": 984,
                            "name": "prop10b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 986,
                            "end": 987,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 1009,
                  "end": 1084,
                  "argument": {
                    "type": "LogicalExpression",
                    "start": 1013,
                    "end": 1083,
                    "left": {
                      "type": "MemberExpression",
                      "start": 1013,
                      "end": 1020,
                      "object": {
                        "type": "Identifier",
                        "start": 1013,
                        "end": 1016,
                        "name": "cnd",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Literal",
                        "start": 1017,
                        "end": 1019,
                        "value": 11,
                        "raw": "11"
                      },
                      "computed": true,
                      "optional": false
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 1024,
                      "end": 1083,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1038,
                          "end": 1048,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1038,
                            "end": 1045,
                            "name": "prop11a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1047,
                            "end": 1048,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1062,
                          "end": 1072,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1062,
                            "end": 1069,
                            "name": "prop11b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1071,
                            "end": 1072,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 1094,
                  "end": 1169,
                  "argument": {
                    "type": "LogicalExpression",
                    "start": 1098,
                    "end": 1168,
                    "left": {
                      "type": "MemberExpression",
                      "start": 1098,
                      "end": 1105,
                      "object": {
                        "type": "Identifier",
                        "start": 1098,
                        "end": 1101,
                        "name": "cnd",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Literal",
                        "start": 1102,
                        "end": 1104,
                        "value": 12,
                        "raw": "12"
                      },
                      "computed": true,
                      "optional": false
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 1109,
                      "end": 1168,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1123,
                          "end": 1133,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1123,
                            "end": 1130,
                            "name": "prop12a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1132,
                            "end": 1133,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1147,
                          "end": 1157,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1147,
                            "end": 1154,
                            "name": "prop12b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1156,
                            "end": 1157,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 1179,
                  "end": 1254,
                  "argument": {
                    "type": "LogicalExpression",
                    "start": 1183,
                    "end": 1253,
                    "left": {
                      "type": "MemberExpression",
                      "start": 1183,
                      "end": 1190,
                      "object": {
                        "type": "Identifier",
                        "start": 1183,
                        "end": 1186,
                        "name": "cnd",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Literal",
                        "start": 1187,
                        "end": 1189,
                        "value": 13,
                        "raw": "13"
                      },
                      "computed": true,
                      "optional": false
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 1194,
                      "end": 1253,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1208,
                          "end": 1218,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1208,
                            "end": 1215,
                            "name": "prop13a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1217,
                            "end": 1218,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1232,
                          "end": 1242,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1232,
                            "end": 1239,
                            "name": "prop13b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1241,
                            "end": 1242,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 1264,
                  "end": 1339,
                  "argument": {
                    "type": "LogicalExpression",
                    "start": 1268,
                    "end": 1338,
                    "left": {
                      "type": "MemberExpression",
                      "start": 1268,
                      "end": 1275,
                      "object": {
                        "type": "Identifier",
                        "start": 1268,
                        "end": 1271,
                        "name": "cnd",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Literal",
                        "start": 1272,
                        "end": 1274,
                        "value": 14,
                        "raw": "14"
                      },
                      "computed": true,
                      "optional": false
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 1279,
                      "end": 1338,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1293,
                          "end": 1303,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1293,
                            "end": 1300,
                            "name": "prop14a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1302,
                            "end": 1303,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1317,
                          "end": 1327,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1317,
                            "end": 1324,
                            "name": "prop14b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1326,
                            "end": 1327,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 1349,
                  "end": 1424,
                  "argument": {
                    "type": "LogicalExpression",
                    "start": 1353,
                    "end": 1423,
                    "left": {
                      "type": "MemberExpression",
                      "start": 1353,
                      "end": 1360,
                      "object": {
                        "type": "Identifier",
                        "start": 1353,
                        "end": 1356,
                        "name": "cnd",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Literal",
                        "start": 1357,
                        "end": 1359,
                        "value": 15,
                        "raw": "15"
                      },
                      "computed": true,
                      "optional": false
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 1364,
                      "end": 1423,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1378,
                          "end": 1388,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1378,
                            "end": 1385,
                            "name": "prop15a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1387,
                            "end": 1388,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1402,
                          "end": 1412,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1402,
                            "end": 1409,
                            "name": "prop15b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1411,
                            "end": 1412,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 1434,
                  "end": 1509,
                  "argument": {
                    "type": "LogicalExpression",
                    "start": 1438,
                    "end": 1508,
                    "left": {
                      "type": "MemberExpression",
                      "start": 1438,
                      "end": 1445,
                      "object": {
                        "type": "Identifier",
                        "start": 1438,
                        "end": 1441,
                        "name": "cnd",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Literal",
                        "start": 1442,
                        "end": 1444,
                        "value": 16,
                        "raw": "16"
                      },
                      "computed": true,
                      "optional": false
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 1449,
                      "end": 1508,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1463,
                          "end": 1473,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1463,
                            "end": 1470,
                            "name": "prop16a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1472,
                            "end": 1473,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1487,
                          "end": 1497,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1487,
                            "end": 1494,
                            "name": "prop16b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1496,
                            "end": 1497,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 1519,
                  "end": 1594,
                  "argument": {
                    "type": "LogicalExpression",
                    "start": 1523,
                    "end": 1593,
                    "left": {
                      "type": "MemberExpression",
                      "start": 1523,
                      "end": 1530,
                      "object": {
                        "type": "Identifier",
                        "start": 1523,
                        "end": 1526,
                        "name": "cnd",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Literal",
                        "start": 1527,
                        "end": 1529,
                        "value": 17,
                        "raw": "17"
                      },
                      "computed": true,
                      "optional": false
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 1534,
                      "end": 1593,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1548,
                          "end": 1558,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1548,
                            "end": 1555,
                            "name": "prop17a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1557,
                            "end": 1558,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1572,
                          "end": 1582,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1572,
                            "end": 1579,
                            "name": "prop17b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1581,
                            "end": 1582,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 1604,
                  "end": 1679,
                  "argument": {
                    "type": "LogicalExpression",
                    "start": 1608,
                    "end": 1678,
                    "left": {
                      "type": "MemberExpression",
                      "start": 1608,
                      "end": 1615,
                      "object": {
                        "type": "Identifier",
                        "start": 1608,
                        "end": 1611,
                        "name": "cnd",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Literal",
                        "start": 1612,
                        "end": 1614,
                        "value": 18,
                        "raw": "18"
                      },
                      "computed": true,
                      "optional": false
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 1619,
                      "end": 1678,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1633,
                          "end": 1643,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1633,
                            "end": 1640,
                            "name": "prop18a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1642,
                            "end": 1643,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1657,
                          "end": 1667,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1657,
                            "end": 1664,
                            "name": "prop18b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1666,
                            "end": 1667,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 1689,
                  "end": 1764,
                  "argument": {
                    "type": "LogicalExpression",
                    "start": 1693,
                    "end": 1763,
                    "left": {
                      "type": "MemberExpression",
                      "start": 1693,
                      "end": 1700,
                      "object": {
                        "type": "Identifier",
                        "start": 1693,
                        "end": 1696,
                        "name": "cnd",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Literal",
                        "start": 1697,
                        "end": 1699,
                        "value": 19,
                        "raw": "19"
                      },
                      "computed": true,
                      "optional": false
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 1704,
                      "end": 1763,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1718,
                          "end": 1728,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1718,
                            "end": 1725,
                            "name": "prop19a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1727,
                            "end": 1728,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1742,
                          "end": 1752,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1742,
                            "end": 1749,
                            "name": "prop19b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1751,
                            "end": 1752,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 1774,
                  "end": 1849,
                  "argument": {
                    "type": "LogicalExpression",
                    "start": 1778,
                    "end": 1848,
                    "left": {
                      "type": "MemberExpression",
                      "start": 1778,
                      "end": 1785,
                      "object": {
                        "type": "Identifier",
                        "start": 1778,
                        "end": 1781,
                        "name": "cnd",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Literal",
                        "start": 1782,
                        "end": 1784,
                        "value": 20,
                        "raw": "20"
                      },
                      "computed": true,
                      "optional": false
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 1789,
                      "end": 1848,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1803,
                          "end": 1813,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1803,
                            "end": 1810,
                            "name": "prop20a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1812,
                            "end": 1813,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1827,
                          "end": 1837,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1827,
                            "end": 1834,
                            "name": "prop20b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1836,
                            "end": 1837,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
