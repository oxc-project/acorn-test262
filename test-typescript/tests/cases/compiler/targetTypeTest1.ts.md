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
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 19,
        "name": "Point",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 20,
        "end": 190,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 28,
            "end": 62,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 39,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 39,
              "end": 62,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 40,
                  "end": 49,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 41,
                    "end": 49,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 43,
                      "end": 49
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 51,
                  "end": 60,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 52,
                    "end": 60,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 54,
                      "end": 60
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 69,
            "end": 86,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 93,
            "end": 110,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 117,
            "end": 159,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 127,
              "name": "add",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 127,
              "end": 159,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 128,
                  "end": 138,
                  "name": "dx",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 130,
                    "end": 138,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 132,
                      "end": 138
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 140,
                  "end": 150,
                  "name": "dy",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 142,
                    "end": 150,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 144,
                      "end": 150
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
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
                    "name": "Point",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 166,
            "end": 187,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 179,
              "name": "origin",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                  "name": "Point",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 346,
      "end": 402,
      "id": {
        "type": "Identifier",
        "start": 355,
        "end": 360,
        "name": "Point",
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
          "start": 361,
          "end": 362,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 364,
          "end": 365,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
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
                "object": {
                  "type": "ThisExpression",
                  "start": 373,
                  "end": 377
                },
                "property": {
                  "type": "Identifier",
                  "start": 378,
                  "end": 379,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 382,
                "end": 383,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
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
                "object": {
                  "type": "ThisExpression",
                  "start": 389,
                  "end": 393
                },
                "property": {
                  "type": "Identifier",
                  "start": 394,
                  "end": 395,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 398,
                "end": 399,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 404,
      "end": 452,
      "id": {
        "type": "Identifier",
        "start": 421,
        "end": 424,
        "name": "EF1",
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
          "start": 425,
          "end": 433,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 426,
            "end": 433,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 427,
              "end": 433
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 435,
          "end": 443,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 436,
            "end": 443,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 437,
              "end": 443
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
      "id": {
        "type": "Identifier",
        "start": 463,
        "end": 466,
        "name": "EF1",
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
          "start": 467,
          "end": 468,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 469,
          "end": 470,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
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
              "left": {
                "type": "Identifier",
                "start": 481,
                "end": 482,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 483,
                "end": 484,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 493,
            "end": 494,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 497,
            "end": 505,
            "callee": {
              "type": "Identifier",
              "start": 497,
              "end": 500,
              "name": "EF1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 501,
                "end": 502,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 503,
                "end": 504,
                "value": 2,
                "raw": "2"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "object": {
            "type": "Identifier",
            "start": 547,
            "end": 552,
            "name": "Point",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 553,
            "end": 559,
            "name": "origin",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 562,
          "end": 577,
          "callee": {
            "type": "Identifier",
            "start": 566,
            "end": 571,
            "name": "Point",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 572,
              "end": 573,
              "value": 0,
              "raw": "0"
            },
            {
              "type": "Literal",
              "start": 575,
              "end": 576,
              "value": 0,
              "raw": "0"
            }
          ],
          "typeArguments": null
        }
      },
      "directive": null
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
          "object": {
            "type": "MemberExpression",
            "start": 735,
            "end": 750,
            "object": {
              "type": "Identifier",
              "start": 735,
              "end": 740,
              "name": "Point",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 741,
              "end": 750,
              "name": "prototype",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 751,
            "end": 754,
            "name": "add",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 757,
          "end": 825,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 766,
              "end": 768,
              "name": "dx",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 770,
              "end": 772,
              "name": "dy",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
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
                  "callee": {
                    "type": "Identifier",
                    "start": 791,
                    "end": 796,
                    "name": "Point",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "start": 797,
                      "end": 808,
                      "left": {
                        "type": "MemberExpression",
                        "start": 797,
                        "end": 803,
                        "object": {
                          "type": "ThisExpression",
                          "start": 797,
                          "end": 801
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 802,
                          "end": 803,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 806,
                        "end": 808,
                        "name": "dx",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    {
                      "type": "BinaryExpression",
                      "start": 810,
                      "end": 821,
                      "left": {
                        "type": "MemberExpression",
                        "start": 810,
                        "end": 816,
                        "object": {
                          "type": "ThisExpression",
                          "start": 810,
                          "end": 814
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 815,
                          "end": 816,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 819,
                        "end": 821,
                        "name": "dy",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ],
                  "typeArguments": null
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 832,
            "end": 842,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 834,
              "end": 842,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 836,
                "end": 842
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 845,
            "end": 846,
            "value": 5,
            "raw": "5"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "object": {
            "type": "Identifier",
            "start": 1039,
            "end": 1044,
            "name": "Point",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1045,
            "end": 1054,
            "name": "prototype",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1063,
                "end": 1064,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 1066,
                "end": 1067,
                "value": 0,
                "raw": "0"
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 1073,
              "end": 1077,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1073,
                "end": 1074,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 1076,
                "end": 1077,
                "value": 0,
                "raw": "0"
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 1083,
              "end": 1164,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1083,
                "end": 1086,
                "name": "add",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "FunctionExpression",
                "start": 1088,
                "end": 1164,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1097,
                    "end": 1099,
                    "name": "dx",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1101,
                    "end": 1103,
                    "name": "dy",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "callee": {
                          "type": "Identifier",
                          "start": 1126,
                          "end": 1131,
                          "name": "Point",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "start": 1132,
                            "end": 1143,
                            "left": {
                              "type": "MemberExpression",
                              "start": 1132,
                              "end": 1138,
                              "object": {
                                "type": "ThisExpression",
                                "start": 1132,
                                "end": 1136
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1137,
                                "end": 1138,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 1141,
                              "end": 1143,
                              "name": "dx",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          {
                            "type": "BinaryExpression",
                            "start": 1145,
                            "end": 1156,
                            "left": {
                              "type": "MemberExpression",
                              "start": 1145,
                              "end": 1151,
                              "object": {
                                "type": "ThisExpression",
                                "start": 1145,
                                "end": 1149
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1150,
                                "end": 1151,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 1154,
                              "end": 1156,
                              "name": "dy",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        ],
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 1181,
            "end": 1182,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
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
          "name": "z",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 1188,
          "end": 1217,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 1197,
              "end": 1206,
              "name": "a",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1198,
                "end": 1206,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1200,
                  "end": 1206
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
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
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "directive": null
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1219,
      "end": 1351,
      "id": {
        "type": "Identifier",
        "start": 1233,
        "end": 1234,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1235,
        "end": 1351,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1241,
            "end": 1273,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1241,
              "end": 1252,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1252,
              "end": 1273,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1253,
                  "end": 1261,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1254,
                    "end": 1261,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1255,
                      "end": 1261
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1263,
                  "end": 1271,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1264,
                    "end": 1271,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1265,
                      "end": 1271
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1275,
            "end": 1293,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1282,
              "end": 1283,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 1295,
            "end": 1312,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1302,
              "end": 1303,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 1318,
            "end": 1349,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1318,
              "end": 1322,
              "name": "C1M1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1322,
              "end": 1349,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1323,
                  "end": 1331,
                  "name": "c",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1324,
                    "end": 1331,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1325,
                      "end": 1331
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1332,
                  "end": 1340,
                  "name": "d",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1333,
                    "end": 1340,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1334,
                      "end": 1340
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
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
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1354,
      "end": 1395,
      "id": {
        "type": "Identifier",
        "start": 1363,
        "end": 1364,
        "name": "C",
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
          "start": 1365,
          "end": 1366,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1367,
          "end": 1368,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
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
                "object": {
                  "type": "ThisExpression",
                  "start": 1373,
                  "end": 1377
                },
                "property": {
                  "type": "Identifier",
                  "start": 1378,
                  "end": 1379,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1380,
                "end": 1381,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
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
                "object": {
                  "type": "ThisExpression",
                  "start": 1384,
                  "end": 1388
                },
                "property": {
                  "type": "Identifier",
                  "start": 1389,
                  "end": 1390,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1391,
                "end": 1392,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "object": {
            "type": "Identifier",
            "start": 1397,
            "end": 1398,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1399,
            "end": 1408,
            "name": "prototype",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1415,
                "end": 1416,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 1417,
                "end": 1418,
                "value": 0,
                "raw": "0"
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 1422,
              "end": 1425,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1422,
                "end": 1423,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 1424,
                "end": 1425,
                "value": 0,
                "raw": "0"
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 1430,
              "end": 1501,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1430,
                "end": 1434,
                "name": "C1M1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "FunctionExpression",
                "start": 1436,
                "end": 1501,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1445,
                    "end": 1446,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1447,
                    "end": 1448,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1469,
                          "end": 1479,
                          "left": {
                            "type": "MemberExpression",
                            "start": 1469,
                            "end": 1475,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1469,
                              "end": 1473
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1474,
                              "end": 1475,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "start": 1478,
                            "end": 1479,
                            "name": "c",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "operator": "+",
                        "right": {
                          "type": "BinaryExpression",
                          "start": 1484,
                          "end": 1494,
                          "left": {
                            "type": "MemberExpression",
                            "start": 1484,
                            "end": 1490,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1484,
                              "end": 1488
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1489,
                              "end": 1490,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "start": 1493,
                            "end": 1494,
                            "name": "d",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
