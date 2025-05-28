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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      "body": {
        "type": "BlockStatement",
        "start": 19,
        "end": 214,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 25,
            "end": 212,
            "discriminant": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 46,
                "end": 53,
                "test": {
                  "type": "Literal",
                  "start": 51,
                  "end": 52,
                  "value": 1,
                  "raw": "1"
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 62,
                "end": 91,
                "test": {
                  "type": "Literal",
                  "start": 67,
                  "end": 68,
                  "value": 2,
                  "raw": "2"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 82,
                    "end": 91,
                    "argument": {
                      "type": "Literal",
                      "start": 89,
                      "end": 90,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 100,
                "end": 168,
                "test": {
                  "type": "Literal",
                  "start": 105,
                  "end": 106,
                  "value": 3,
                  "raw": "3"
                },
                "consequent": [
                  {
                    "type": "IfStatement",
                    "start": 120,
                    "end": 168,
                    "test": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 125,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                            "value": 2,
                            "raw": "2"
                          }
                        }
                      ]
                    },
                    "alternate": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 177,
                "end": 206,
                "test": {
                  "type": "Literal",
                  "start": 182,
                  "end": 183,
                  "value": 4,
                  "raw": "4"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 197,
                    "end": 206,
                    "argument": {
                      "type": "Literal",
                      "start": 204,
                      "end": 205,
                      "value": 3,
                      "raw": "3"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 216,
      "end": 246,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 237,
        "decorators": [],
        "name": "noop",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 247,
      "end": 278,
      "id": {
        "type": "Identifier",
        "start": 264,
        "end": 268,
        "decorators": [],
        "name": "fail",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 280,
      "end": 440,
      "id": {
        "type": "Identifier",
        "start": 289,
        "end": 291,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                    "value": 0,
                    "raw": "0"
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
                    "value": 1,
                    "raw": "1"
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
                    "value": 2,
                    "raw": "2"
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 306,
        "end": 440,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 312,
            "end": 438,
            "discriminant": {
              "type": "Identifier",
              "start": 320,
              "end": 321,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 333,
                "end": 360,
                "test": {
                  "type": "Literal",
                  "start": 338,
                  "end": 339,
                  "value": 0,
                  "raw": "0"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 353,
                    "end": 360,
                    "expression": {
                      "type": "CallExpression",
                      "start": 353,
                      "end": 359,
                      "callee": {
                        "type": "Identifier",
                        "start": 353,
                        "end": 357,
                        "decorators": [],
                        "name": "fail",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 369,
                "end": 396,
                "test": {
                  "type": "Literal",
                  "start": 374,
                  "end": 375,
                  "value": 1,
                  "raw": "1"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 389,
                    "end": 396,
                    "expression": {
                      "type": "CallExpression",
                      "start": 389,
                      "end": 395,
                      "callee": {
                        "type": "Identifier",
                        "start": 389,
                        "end": 393,
                        "decorators": [],
                        "name": "noop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 405,
                "end": 432,
                "test": {
                  "type": "Literal",
                  "start": 410,
                  "end": 411,
                  "value": 2,
                  "raw": "2"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 425,
                    "end": 432,
                    "argument": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 464,
      "end": 501,
      "id": {
        "type": "Identifier",
        "start": 469,
        "end": 477,
        "decorators": [],
        "name": "Behavior",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
              "value": "SLIDE",
              "raw": "'SLIDE'"
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
              "value": "SLIDE_OUT",
              "raw": "'SLIDE_OUT'"
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 502,
      "end": 554,
      "id": {
        "type": "Identifier",
        "start": 507,
        "end": 516,
        "decorators": [],
        "name": "Direction",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
              "value": "LEFT",
              "raw": "'LEFT'"
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
              "value": "RIGHT",
              "raw": "'RIGHT'"
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
              "value": "TOP",
              "raw": "'TOP'"
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
              "value": "BOTTOM",
              "raw": "'BOTTOM'"
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 556,
      "end": 624,
      "id": {
        "type": "Identifier",
        "start": 566,
        "end": 576,
        "decorators": [],
        "name": "Transition",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 577,
        "end": 624,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 581,
            "end": 599,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 581,
              "end": 589,
              "decorators": [],
              "name": "behavior",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 589,
              "end": 599,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 591,
                "end": 599,
                "typeName": {
                  "type": "Identifier",
                  "start": 591,
                  "end": 599,
                  "decorators": [],
                  "name": "Behavior",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 602,
            "end": 622,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 602,
              "end": 611,
              "decorators": [],
              "name": "direction",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 611,
              "end": 622,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 613,
                "end": 622,
                "typeName": {
                  "type": "Identifier",
                  "start": 613,
                  "end": 622,
                  "decorators": [],
                  "name": "Direction",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 626,
      "end": 1351,
      "id": {
        "type": "Identifier",
        "start": 635,
        "end": 637,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "typeName": {
                "type": "Identifier",
                "start": 650,
                "end": 660,
                "decorators": [],
                "name": "Transition",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
      "body": {
        "type": "BlockStatement",
        "start": 667,
        "end": 1351,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 673,
            "end": 1349,
            "discriminant": {
              "type": "MemberExpression",
              "start": 681,
              "end": 700,
              "object": {
                "type": "Identifier",
                "start": 681,
                "end": 691,
                "decorators": [],
                "name": "transition",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 692,
                "end": 700,
                "decorators": [],
                "name": "behavior",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 712,
                "end": 1021,
                "test": {
                  "type": "Literal",
                  "start": 717,
                  "end": 724,
                  "value": "SLIDE",
                  "raw": "'SLIDE'"
                },
                "consequent": [
                  {
                    "type": "SwitchStatement",
                    "start": 738,
                    "end": 1021,
                    "discriminant": {
                      "type": "MemberExpression",
                      "start": 746,
                      "end": 766,
                      "object": {
                        "type": "Identifier",
                        "start": 746,
                        "end": 756,
                        "decorators": [],
                        "name": "transition",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 757,
                        "end": 766,
                        "decorators": [],
                        "name": "direction",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "start": 786,
                        "end": 828,
                        "test": {
                          "type": "Literal",
                          "start": 791,
                          "end": 797,
                          "value": "LEFT",
                          "raw": "'LEFT'"
                        },
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
                        ]
                      },
                      {
                        "type": "SwitchCase",
                        "start": 845,
                        "end": 888,
                        "test": {
                          "type": "Literal",
                          "start": 850,
                          "end": 857,
                          "value": "RIGHT",
                          "raw": "'RIGHT'"
                        },
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
                        ]
                      },
                      {
                        "type": "SwitchCase",
                        "start": 905,
                        "end": 946,
                        "test": {
                          "type": "Literal",
                          "start": 910,
                          "end": 915,
                          "value": "TOP",
                          "raw": "'TOP'"
                        },
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
                        ]
                      },
                      {
                        "type": "SwitchCase",
                        "start": 963,
                        "end": 1007,
                        "test": {
                          "type": "Literal",
                          "start": 968,
                          "end": 976,
                          "value": "BOTTOM",
                          "raw": "'BOTTOM'"
                        },
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
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1030,
                "end": 1343,
                "test": {
                  "type": "Literal",
                  "start": 1035,
                  "end": 1046,
                  "value": "SLIDE_OUT",
                  "raw": "'SLIDE_OUT'"
                },
                "consequent": [
                  {
                    "type": "SwitchStatement",
                    "start": 1060,
                    "end": 1343,
                    "discriminant": {
                      "type": "MemberExpression",
                      "start": 1068,
                      "end": 1088,
                      "object": {
                        "type": "Identifier",
                        "start": 1068,
                        "end": 1078,
                        "decorators": [],
                        "name": "transition",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1079,
                        "end": 1088,
                        "decorators": [],
                        "name": "direction",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "start": 1108,
                        "end": 1150,
                        "test": {
                          "type": "Literal",
                          "start": 1113,
                          "end": 1119,
                          "value": "LEFT",
                          "raw": "'LEFT'"
                        },
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
                        ]
                      },
                      {
                        "type": "SwitchCase",
                        "start": 1167,
                        "end": 1210,
                        "test": {
                          "type": "Literal",
                          "start": 1172,
                          "end": 1179,
                          "value": "RIGHT",
                          "raw": "'RIGHT'"
                        },
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
                        ]
                      },
                      {
                        "type": "SwitchCase",
                        "start": 1227,
                        "end": 1268,
                        "test": {
                          "type": "Literal",
                          "start": 1232,
                          "end": 1237,
                          "value": "TOP",
                          "raw": "'TOP'"
                        },
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
                        ]
                      },
                      {
                        "type": "SwitchCase",
                        "start": 1285,
                        "end": 1329,
                        "test": {
                          "type": "Literal",
                          "start": 1290,
                          "end": 1298,
                          "value": "BOTTOM",
                          "raw": "'BOTTOM'"
                        },
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
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
