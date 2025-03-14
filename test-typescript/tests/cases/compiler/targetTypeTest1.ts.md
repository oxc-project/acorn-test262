__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1506,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 190,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 20,
        "end": 190,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 28,
            "end": 62,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 39,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 39,
              "end": 62,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 40,
                  "end": 49,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 41,
                    "end": 49,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 43,
                      "end": 49
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 51,
                  "end": 60,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 52,
                    "end": 60,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 54,
                      "end": 60
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 69,
            "end": 86,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 85,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 79,
                "end": 85
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 93,
            "end": 110,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 109,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 103,
                "end": 109
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 117,
            "end": 159,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 127,
              "decorators": [],
              "name": "add",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 127,
              "end": 159,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 128,
                  "end": 138,
                  "decorators": [],
                  "name": "dx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 130,
                    "end": 138,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 132,
                      "end": 138
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 140,
                  "end": 150,
                  "decorators": [],
                  "name": "dy",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 142,
                    "end": 150,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 144,
                      "end": 150
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 151,
                "end": 158,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 153,
                  "end": 158,
                  "typeName": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 158,
                    "decorators": [],
                    "name": "Point",
                    "optional": false
                  }
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 166,
            "end": 187,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 179,
              "decorators": [],
              "name": "origin",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 186,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 181,
                "end": 186,
                "typeName": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 186,
                  "decorators": [],
                  "name": "Point",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 19,
        "decorators": [],
        "name": "Point",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 346,
      "end": 402,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 367,
        "end": 402,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 373,
            "end": 384,
            "expression": {
              "type": "AssignmentExpression",
              "start": 373,
              "end": 383,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 373,
                "end": 379,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 373,
                  "end": 377
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 378,
                  "end": 379,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              },
              "right": {
                "type": "Identifier",
                "start": 382,
                "end": 383,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 389,
            "end": 400,
            "expression": {
              "type": "AssignmentExpression",
              "start": 389,
              "end": 399,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 389,
                "end": 395,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 389,
                  "end": 393
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 394,
                  "end": 395,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              },
              "right": {
                "type": "Identifier",
                "start": 398,
                "end": 399,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 355,
        "end": 360,
        "decorators": [],
        "name": "Point",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 361,
          "end": 362,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 364,
          "end": 365,
          "decorators": [],
          "name": "y",
          "optional": false
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 404,
      "end": 452,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 421,
        "end": 424,
        "decorators": [],
        "name": "EF1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 425,
          "end": 433,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 426,
            "end": 433,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 427,
              "end": 433
            }
          }
        },
        {
          "type": "Identifier",
          "start": 435,
          "end": 443,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 436,
            "end": 443,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 437,
              "end": 443
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 444,
        "end": 451,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 445,
          "end": 451
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 454,
      "end": 487,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 472,
        "end": 487,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 474,
            "end": 485,
            "argument": {
              "type": "BinaryExpression",
              "start": 481,
              "end": 484,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 481,
                "end": 482,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 483,
                "end": 484,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 463,
        "end": 466,
        "decorators": [],
        "name": "EF1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 467,
          "end": 468,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 469,
          "end": 470,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 489,
      "end": 506,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 493,
          "end": 505,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 493,
            "end": 494,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 497,
            "end": 505,
            "arguments": [
              {
                "type": "Literal",
                "start": 501,
                "end": 502,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 503,
                "end": 504,
                "raw": "2",
                "value": 2
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 497,
              "end": 500,
              "decorators": [],
              "name": "EF1",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 547,
      "end": 578,
      "expression": {
        "type": "AssignmentExpression",
        "start": 547,
        "end": 577,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 547,
          "end": 559,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 547,
            "end": 552,
            "decorators": [],
            "name": "Point",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 553,
            "end": 559,
            "decorators": [],
            "name": "origin",
            "optional": false
          }
        },
        "right": {
          "type": "NewExpression",
          "start": 562,
          "end": 577,
          "arguments": [
            {
              "type": "Literal",
              "start": 572,
              "end": 573,
              "raw": "0",
              "value": 0
            },
            {
              "type": "Literal",
              "start": 575,
              "end": 576,
              "raw": "0",
              "value": 0
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 566,
            "end": 571,
            "decorators": [],
            "name": "Point",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 735,
      "end": 826,
      "expression": {
        "type": "AssignmentExpression",
        "start": 735,
        "end": 825,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 735,
          "end": 754,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 735,
            "end": 750,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 735,
              "end": 740,
              "decorators": [],
              "name": "Point",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 741,
              "end": 750,
              "decorators": [],
              "name": "prototype",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 751,
            "end": 754,
            "decorators": [],
            "name": "add",
            "optional": false
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 757,
          "end": 825,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 774,
            "end": 825,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 780,
                "end": 823,
                "argument": {
                  "type": "NewExpression",
                  "start": 787,
                  "end": 822,
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "start": 797,
                      "end": 808,
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "start": 797,
                        "end": 803,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 797,
                          "end": 801
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 802,
                          "end": 803,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 806,
                        "end": 808,
                        "decorators": [],
                        "name": "dx",
                        "optional": false
                      }
                    },
                    {
                      "type": "BinaryExpression",
                      "start": 810,
                      "end": 821,
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "start": 810,
                        "end": 816,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 810,
                          "end": 814
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 815,
                          "end": 816,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 819,
                        "end": 821,
                        "decorators": [],
                        "name": "dy",
                        "optional": false
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 791,
                    "end": 796,
                    "decorators": [],
                    "name": "Point",
                    "optional": false
                  }
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 766,
              "end": 768,
              "decorators": [],
              "name": "dx",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 770,
              "end": 772,
              "decorators": [],
              "name": "dy",
              "optional": false
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 828,
      "end": 847,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 832,
          "end": 846,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 832,
            "end": 842,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 834,
              "end": 842,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 836,
                "end": 842
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 845,
            "end": 846,
            "raw": "5",
            "value": 5
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1039,
      "end": 1167,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1039,
        "end": 1166,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1039,
          "end": 1054,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1039,
            "end": 1044,
            "decorators": [],
            "name": "Point",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1045,
            "end": 1054,
            "decorators": [],
            "name": "prototype",
            "optional": false
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 1057,
          "end": 1166,
          "properties": [
            {
              "type": "Property",
              "start": 1063,
              "end": 1067,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1063,
                "end": 1064,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 1066,
                "end": 1067,
                "raw": "0",
                "value": 0
              }
            },
            {
              "type": "Property",
              "start": 1073,
              "end": 1077,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1073,
                "end": 1074,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 1076,
                "end": 1077,
                "raw": "0",
                "value": 0
              }
            },
            {
              "type": "Property",
              "start": 1083,
              "end": 1164,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1083,
                "end": 1086,
                "decorators": [],
                "name": "add",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "FunctionExpression",
                "start": 1088,
                "end": 1164,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1105,
                  "end": 1164,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1115,
                      "end": 1158,
                      "argument": {
                        "type": "NewExpression",
                        "start": 1122,
                        "end": 1157,
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "start": 1132,
                            "end": 1143,
                            "operator": "+",
                            "left": {
                              "type": "MemberExpression",
                              "start": 1132,
                              "end": 1138,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 1132,
                                "end": 1136
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 1137,
                                "end": 1138,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 1141,
                              "end": 1143,
                              "decorators": [],
                              "name": "dx",
                              "optional": false
                            }
                          },
                          {
                            "type": "BinaryExpression",
                            "start": 1145,
                            "end": 1156,
                            "operator": "+",
                            "left": {
                              "type": "MemberExpression",
                              "start": 1145,
                              "end": 1151,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 1145,
                                "end": 1149
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 1150,
                                "end": 1151,
                                "decorators": [],
                                "name": "y",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 1154,
                              "end": 1156,
                              "decorators": [],
                              "name": "dy",
                              "optional": false
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 1126,
                          "end": 1131,
                          "decorators": [],
                          "name": "Point",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1097,
                    "end": 1099,
                    "decorators": [],
                    "name": "dx",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1101,
                    "end": 1103,
                    "decorators": [],
                    "name": "dy",
                    "optional": false
                  }
                ]
              }
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1169,
      "end": 1183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1181,
          "end": 1182,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1181,
            "end": 1182,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1184,
      "end": 1217,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1184,
        "end": 1217,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1184,
          "end": 1185,
          "decorators": [],
          "name": "z",
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 1188,
          "end": 1217,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 1208,
            "end": 1217,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 1214,
                "end": 1215,
                "expression": {
                  "type": "Identifier",
                  "start": 1214,
                  "end": 1215,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 1197,
              "end": 1206,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1198,
                "end": 1206,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1200,
                  "end": 1206
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1219,
      "end": 1351,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1235,
        "end": 1351,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1241,
            "end": 1273,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1241,
              "end": 1252,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1252,
              "end": 1273,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1253,
                  "end": 1261,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1254,
                    "end": 1261,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1255,
                      "end": 1261
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1263,
                  "end": 1271,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1264,
                    "end": 1271,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1265,
                      "end": 1271
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1275,
            "end": 1293,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1282,
              "end": 1283,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1284,
              "end": 1292,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1286,
                "end": 1292
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1295,
            "end": 1312,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1302,
              "end": 1303,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1303,
              "end": 1311,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1305,
                "end": 1311
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 1318,
            "end": 1349,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1318,
              "end": 1322,
              "decorators": [],
              "name": "C1M1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1322,
              "end": 1349,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1323,
                  "end": 1331,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1324,
                    "end": 1331,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1325,
                      "end": 1331
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1332,
                  "end": 1340,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1333,
                    "end": 1340,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1334,
                      "end": 1340
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1341,
                "end": 1348,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1342,
                  "end": 1348
                }
              }
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1233,
        "end": 1234,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1354,
      "end": 1395,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1370,
        "end": 1395,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1373,
            "end": 1382,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1373,
              "end": 1381,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1373,
                "end": 1379,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 1373,
                  "end": 1377
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1378,
                  "end": 1379,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
              "right": {
                "type": "Identifier",
                "start": 1380,
                "end": 1381,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1384,
            "end": 1393,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1384,
              "end": 1392,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1384,
                "end": 1390,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 1384,
                  "end": 1388
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1389,
                  "end": 1390,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                }
              },
              "right": {
                "type": "Identifier",
                "start": 1391,
                "end": 1392,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1363,
        "end": 1364,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1365,
          "end": 1366,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1367,
          "end": 1368,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 1397,
      "end": 1505,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1397,
        "end": 1504,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1397,
          "end": 1408,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1397,
            "end": 1398,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1399,
            "end": 1408,
            "decorators": [],
            "name": "prototype",
            "optional": false
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 1413,
          "end": 1504,
          "properties": [
            {
              "type": "Property",
              "start": 1415,
              "end": 1418,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1415,
                "end": 1416,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 1417,
                "end": 1418,
                "raw": "0",
                "value": 0
              }
            },
            {
              "type": "Property",
              "start": 1422,
              "end": 1425,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1422,
                "end": 1423,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 1424,
                "end": 1425,
                "raw": "0",
                "value": 0
              }
            },
            {
              "type": "Property",
              "start": 1430,
              "end": 1501,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1430,
                "end": 1434,
                "decorators": [],
                "name": "C1M1",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "FunctionExpression",
                "start": 1436,
                "end": 1501,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1450,
                  "end": 1501,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1461,
                      "end": 1496,
                      "argument": {
                        "type": "BinaryExpression",
                        "start": 1468,
                        "end": 1495,
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1469,
                          "end": 1479,
                          "operator": "+",
                          "left": {
                            "type": "MemberExpression",
                            "start": 1469,
                            "end": 1475,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1469,
                              "end": 1473
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1474,
                              "end": 1475,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1478,
                            "end": 1479,
                            "decorators": [],
                            "name": "c",
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "start": 1484,
                          "end": 1494,
                          "operator": "+",
                          "left": {
                            "type": "MemberExpression",
                            "start": 1484,
                            "end": 1490,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1484,
                              "end": 1488
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1489,
                              "end": 1490,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1493,
                            "end": 1494,
                            "decorators": [],
                            "name": "d",
                            "optional": false
                          }
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1445,
                    "end": 1446,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1447,
                    "end": 1448,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  }
                ]
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
