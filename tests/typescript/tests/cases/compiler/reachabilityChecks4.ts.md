__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1351,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 214,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 19,
        "end": 214,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 25,
            "end": 212,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 46,
                "end": 53,
                "consequent": [],
                "test": {
                  "type": "Literal",
                  "start": 51,
                  "end": 52,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "SwitchCase",
                "start": 62,
                "end": 91,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 82,
                    "end": 91,
                    "argument": {
                      "type": "Literal",
                      "start": 89,
                      "end": 90,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 67,
                  "end": 68,
                  "raw": "2",
                  "value": 2
                }
              },
              {
                "type": "SwitchCase",
                "start": 100,
                "end": 168,
                "consequent": [
                  {
                    "type": "IfStatement",
                    "start": 120,
                    "end": 168,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 127,
                      "end": 168,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 145,
                          "end": 154,
                          "argument": {
                            "type": "Literal",
                            "start": 152,
                            "end": 153,
                            "raw": "2",
                            "value": 2
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 125,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 105,
                  "end": 106,
                  "raw": "3",
                  "value": 3
                }
              },
              {
                "type": "SwitchCase",
                "start": 177,
                "end": 206,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 197,
                    "end": 206,
                    "argument": {
                      "type": "Literal",
                      "start": 204,
                      "end": 205,
                      "raw": "3",
                      "value": 3
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 182,
                  "end": 183,
                  "raw": "4",
                  "value": 4
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 16,
          "end": 17,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 216,
      "end": 246,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 237,
        "decorators": [],
        "name": "noop",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 239,
        "end": 245,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 241,
          "end": 245
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 247,
      "end": 278,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 264,
        "end": 268,
        "decorators": [],
        "name": "fail",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 270,
        "end": 277,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 272,
          "end": 277
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 280,
      "end": 440,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 306,
        "end": 440,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 312,
            "end": 438,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 333,
                "end": 360,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 353,
                    "end": 360,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 353,
                      "end": 359,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 353,
                        "end": 357,
                        "decorators": [],
                        "name": "fail",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 338,
                  "end": 339,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "SwitchCase",
                "start": 369,
                "end": 396,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 389,
                    "end": 396,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 389,
                      "end": 395,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 389,
                        "end": 393,
                        "decorators": [],
                        "name": "noop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 374,
                  "end": 375,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "SwitchCase",
                "start": 405,
                "end": 432,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 425,
                    "end": 432,
                    "argument": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 410,
                  "end": 411,
                  "raw": "2",
                  "value": 2
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 320,
              "end": 321,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 289,
        "end": 291,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 292,
          "end": 304,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 293,
            "end": 304,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 295,
              "end": 304,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 295,
                  "end": 296,
                  "literal": {
                    "type": "Literal",
                    "start": 295,
                    "end": 296,
                    "raw": "0",
                    "value": 0
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 299,
                  "end": 300,
                  "literal": {
                    "type": "Literal",
                    "start": 299,
                    "end": 300,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 303,
                  "end": 304,
                  "literal": {
                    "type": "Literal",
                    "start": 303,
                    "end": 304,
                    "raw": "2",
                    "value": 2
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 464,
      "end": 501,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 469,
        "end": 477,
        "decorators": [],
        "name": "Behavior",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 480,
        "end": 501,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 480,
            "end": 487,
            "literal": {
              "type": "Literal",
              "start": 480,
              "end": 487,
              "raw": "'SLIDE'",
              "value": "SLIDE"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 490,
            "end": 501,
            "literal": {
              "type": "Literal",
              "start": 490,
              "end": 501,
              "raw": "'SLIDE_OUT'",
              "value": "SLIDE_OUT"
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 502,
      "end": 554,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 507,
        "end": 516,
        "decorators": [],
        "name": "Direction",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 519,
        "end": 554,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 519,
            "end": 525,
            "literal": {
              "type": "Literal",
              "start": 519,
              "end": 525,
              "raw": "'LEFT'",
              "value": "LEFT"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 528,
            "end": 535,
            "literal": {
              "type": "Literal",
              "start": 528,
              "end": 535,
              "raw": "'RIGHT'",
              "value": "RIGHT"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 538,
            "end": 543,
            "literal": {
              "type": "Literal",
              "start": 538,
              "end": 543,
              "raw": "'TOP'",
              "value": "TOP"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 546,
            "end": 554,
            "literal": {
              "type": "Literal",
              "start": 546,
              "end": 554,
              "raw": "'BOTTOM'",
              "value": "BOTTOM"
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 556,
      "end": 624,
      "body": {
        "type": "TSInterfaceBody",
        "start": 577,
        "end": 624,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 581,
            "end": 599,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 581,
              "end": 589,
              "decorators": [],
              "name": "behavior",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 589,
              "end": 599,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 591,
                "end": 599,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 591,
                  "end": 599,
                  "decorators": [],
                  "name": "Behavior",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 602,
            "end": 622,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 602,
              "end": 611,
              "decorators": [],
              "name": "direction",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 611,
              "end": 622,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 613,
                "end": 622,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 613,
                  "end": 622,
                  "decorators": [],
                  "name": "Direction",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 566,
        "end": 576,
        "decorators": [],
        "name": "Transition",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 626,
      "end": 1351,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 667,
        "end": 1351,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 673,
            "end": 1349,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 712,
                "end": 1021,
                "consequent": [
                  {
                    "type": "SwitchStatement",
                    "start": 738,
                    "end": 1021,
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "start": 786,
                        "end": 828,
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "start": 819,
                            "end": 828,
                            "argument": {
                              "type": "ArrayExpression",
                              "start": 826,
                              "end": 828,
                              "elements": []
                            }
                          }
                        ],
                        "test": {
                          "type": "Literal",
                          "start": 791,
                          "end": 797,
                          "raw": "'LEFT'",
                          "value": "LEFT"
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "start": 845,
                        "end": 888,
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "start": 879,
                            "end": 888,
                            "argument": {
                              "type": "ArrayExpression",
                              "start": 886,
                              "end": 888,
                              "elements": []
                            }
                          }
                        ],
                        "test": {
                          "type": "Literal",
                          "start": 850,
                          "end": 857,
                          "raw": "'RIGHT'",
                          "value": "RIGHT"
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "start": 905,
                        "end": 946,
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "start": 937,
                            "end": 946,
                            "argument": {
                              "type": "ArrayExpression",
                              "start": 944,
                              "end": 946,
                              "elements": []
                            }
                          }
                        ],
                        "test": {
                          "type": "Literal",
                          "start": 910,
                          "end": 915,
                          "raw": "'TOP'",
                          "value": "TOP"
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "start": 963,
                        "end": 1007,
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "start": 998,
                            "end": 1007,
                            "argument": {
                              "type": "ArrayExpression",
                              "start": 1005,
                              "end": 1007,
                              "elements": []
                            }
                          }
                        ],
                        "test": {
                          "type": "Literal",
                          "start": 968,
                          "end": 976,
                          "raw": "'BOTTOM'",
                          "value": "BOTTOM"
                        }
                      }
                    ],
                    "discriminant": {
                      "type": "MemberExpression",
                      "start": 746,
                      "end": 766,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 746,
                        "end": 756,
                        "decorators": [],
                        "name": "transition",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 757,
                        "end": 766,
                        "decorators": [],
                        "name": "direction",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 717,
                  "end": 724,
                  "raw": "'SLIDE'",
                  "value": "SLIDE"
                }
              },
              {
                "type": "SwitchCase",
                "start": 1030,
                "end": 1343,
                "consequent": [
                  {
                    "type": "SwitchStatement",
                    "start": 1060,
                    "end": 1343,
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "start": 1108,
                        "end": 1150,
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "start": 1141,
                            "end": 1150,
                            "argument": {
                              "type": "ArrayExpression",
                              "start": 1148,
                              "end": 1150,
                              "elements": []
                            }
                          }
                        ],
                        "test": {
                          "type": "Literal",
                          "start": 1113,
                          "end": 1119,
                          "raw": "'LEFT'",
                          "value": "LEFT"
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "start": 1167,
                        "end": 1210,
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "start": 1201,
                            "end": 1210,
                            "argument": {
                              "type": "ArrayExpression",
                              "start": 1208,
                              "end": 1210,
                              "elements": []
                            }
                          }
                        ],
                        "test": {
                          "type": "Literal",
                          "start": 1172,
                          "end": 1179,
                          "raw": "'RIGHT'",
                          "value": "RIGHT"
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "start": 1227,
                        "end": 1268,
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "start": 1259,
                            "end": 1268,
                            "argument": {
                              "type": "ArrayExpression",
                              "start": 1266,
                              "end": 1268,
                              "elements": []
                            }
                          }
                        ],
                        "test": {
                          "type": "Literal",
                          "start": 1232,
                          "end": 1237,
                          "raw": "'TOP'",
                          "value": "TOP"
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "start": 1285,
                        "end": 1329,
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "start": 1320,
                            "end": 1329,
                            "argument": {
                              "type": "ArrayExpression",
                              "start": 1327,
                              "end": 1329,
                              "elements": []
                            }
                          }
                        ],
                        "test": {
                          "type": "Literal",
                          "start": 1290,
                          "end": 1298,
                          "raw": "'BOTTOM'",
                          "value": "BOTTOM"
                        }
                      }
                    ],
                    "discriminant": {
                      "type": "MemberExpression",
                      "start": 1068,
                      "end": 1088,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1068,
                        "end": 1078,
                        "decorators": [],
                        "name": "transition",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1079,
                        "end": 1088,
                        "decorators": [],
                        "name": "direction",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 1035,
                  "end": 1046,
                  "raw": "'SLIDE_OUT'",
                  "value": "SLIDE_OUT"
                }
              }
            ],
            "discriminant": {
              "type": "MemberExpression",
              "start": 681,
              "end": 700,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 681,
                "end": 691,
                "decorators": [],
                "name": "transition",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 692,
                "end": 700,
                "decorators": [],
                "name": "behavior",
                "optional": false,
                "typeAnnotation": null
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
        "start": 635,
        "end": 637,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 638,
          "end": 660,
          "decorators": [],
          "name": "transition",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 648,
            "end": 660,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 650,
              "end": 660,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 650,
                "end": 660,
                "decorators": [],
                "name": "Transition",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 661,
        "end": 666,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 663,
          "end": 666
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
