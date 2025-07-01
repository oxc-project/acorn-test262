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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 17
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 34
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 51,
                  "end": 52
                },
                "consequent": [],
                "start": 46,
                "end": 53
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 67,
                  "end": 68
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 89,
                      "end": 90
                    },
                    "start": 82,
                    "end": 91
                  }
                ],
                "start": 62,
                "end": 91
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 105,
                  "end": 106
                },
                "consequent": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 124,
                      "end": 125
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 152,
                            "end": 153
                          },
                          "start": 145,
                          "end": 154
                        }
                      ],
                      "start": 127,
                      "end": 168
                    },
                    "alternate": null,
                    "start": 120,
                    "end": 168
                  }
                ],
                "start": 100,
                "end": 168
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 182,
                  "end": 183
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 204,
                      "end": 205
                    },
                    "start": 197,
                    "end": 206
                  }
                ],
                "start": 177,
                "end": 206
              }
            ],
            "start": 25,
            "end": 212
          }
        ],
        "start": 19,
        "end": 214
      },
      "expression": false,
      "start": 0,
      "end": 214
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "noop",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 237
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 241,
          "end": 245
        },
        "start": 239,
        "end": 245
      },
      "body": null,
      "expression": false,
      "start": 216,
      "end": 246
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fail",
        "optional": false,
        "typeAnnotation": null,
        "start": 264,
        "end": 268
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 272,
          "end": 277
        },
        "start": 270,
        "end": 277
      },
      "body": null,
      "expression": false,
      "start": 247,
      "end": 278
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 289,
        "end": 291
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 295,
                    "end": 296
                  },
                  "start": 295,
                  "end": 296
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 299,
                    "end": 300
                  },
                  "start": 299,
                  "end": 300
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 303,
                    "end": 304
                  },
                  "start": 303,
                  "end": 304
                }
              ],
              "start": 295,
              "end": 304
            },
            "start": 293,
            "end": 304
          },
          "start": 292,
          "end": 304
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 320,
              "end": 321
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 338,
                  "end": 339
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fail",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 353,
                        "end": 357
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 353,
                      "end": 359
                    },
                    "directive": null,
                    "start": 353,
                    "end": 360
                  }
                ],
                "start": 333,
                "end": 360
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 374,
                  "end": 375
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "noop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 389,
                        "end": 393
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 389,
                      "end": 395
                    },
                    "directive": null,
                    "start": 389,
                    "end": 396
                  }
                ],
                "start": 369,
                "end": 396
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 410,
                  "end": 411
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 425,
                    "end": 432
                  }
                ],
                "start": 405,
                "end": 432
              }
            ],
            "start": 312,
            "end": 438
          }
        ],
        "start": 306,
        "end": 440
      },
      "expression": false,
      "start": 280,
      "end": 440
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Behavior",
        "optional": false,
        "typeAnnotation": null,
        "start": 469,
        "end": 477
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "SLIDE",
              "raw": "'SLIDE'",
              "start": 480,
              "end": 487
            },
            "start": 480,
            "end": 487
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "SLIDE_OUT",
              "raw": "'SLIDE_OUT'",
              "start": 490,
              "end": 501
            },
            "start": 490,
            "end": 501
          }
        ],
        "start": 480,
        "end": 501
      },
      "declare": false,
      "start": 464,
      "end": 501
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Direction",
        "optional": false,
        "typeAnnotation": null,
        "start": 507,
        "end": 516
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "LEFT",
              "raw": "'LEFT'",
              "start": 519,
              "end": 525
            },
            "start": 519,
            "end": 525
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "RIGHT",
              "raw": "'RIGHT'",
              "start": 528,
              "end": 535
            },
            "start": 528,
            "end": 535
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "TOP",
              "raw": "'TOP'",
              "start": 538,
              "end": 543
            },
            "start": 538,
            "end": 543
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "BOTTOM",
              "raw": "'BOTTOM'",
              "start": 546,
              "end": 554
            },
            "start": 546,
            "end": 554
          }
        ],
        "start": 519,
        "end": 554
      },
      "declare": false,
      "start": 502,
      "end": 554
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Transition",
        "optional": false,
        "typeAnnotation": null,
        "start": 566,
        "end": 576
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "behavior",
              "optional": false,
              "typeAnnotation": null,
              "start": 581,
              "end": 589
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Behavior",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 591,
                  "end": 599
                },
                "typeArguments": null,
                "start": 591,
                "end": 599
              },
              "start": 589,
              "end": 599
            },
            "accessibility": null,
            "static": false,
            "start": 581,
            "end": 599
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "direction",
              "optional": false,
              "typeAnnotation": null,
              "start": 602,
              "end": 611
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Direction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 613,
                  "end": 622
                },
                "typeArguments": null,
                "start": 613,
                "end": 622
              },
              "start": 611,
              "end": 622
            },
            "accessibility": null,
            "static": false,
            "start": 602,
            "end": 622
          }
        ],
        "start": 577,
        "end": 624
      },
      "declare": false,
      "start": 556,
      "end": 624
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 635,
        "end": 637
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "transition",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Transition",
                "optional": false,
                "typeAnnotation": null,
                "start": 650,
                "end": 660
              },
              "typeArguments": null,
              "start": 650,
              "end": 660
            },
            "start": 648,
            "end": 660
          },
          "start": 638,
          "end": 660
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 663,
          "end": 666
        },
        "start": 661,
        "end": 666
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "transition",
                "optional": false,
                "typeAnnotation": null,
                "start": 681,
                "end": 691
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "behavior",
                "optional": false,
                "typeAnnotation": null,
                "start": 692,
                "end": 700
              },
              "optional": false,
              "computed": false,
              "start": 681,
              "end": 700
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "SLIDE",
                  "raw": "'SLIDE'",
                  "start": 717,
                  "end": 724
                },
                "consequent": [
                  {
                    "type": "SwitchStatement",
                    "discriminant": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "transition",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 746,
                        "end": 756
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "direction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 757,
                        "end": 766
                      },
                      "optional": false,
                      "computed": false,
                      "start": 746,
                      "end": 766
                    },
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "LEFT",
                          "raw": "'LEFT'",
                          "start": 791,
                          "end": 797
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 826,
                              "end": 828
                            },
                            "start": 819,
                            "end": 828
                          }
                        ],
                        "start": 786,
                        "end": 828
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "RIGHT",
                          "raw": "'RIGHT'",
                          "start": 850,
                          "end": 857
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 886,
                              "end": 888
                            },
                            "start": 879,
                            "end": 888
                          }
                        ],
                        "start": 845,
                        "end": 888
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "TOP",
                          "raw": "'TOP'",
                          "start": 910,
                          "end": 915
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 944,
                              "end": 946
                            },
                            "start": 937,
                            "end": 946
                          }
                        ],
                        "start": 905,
                        "end": 946
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "BOTTOM",
                          "raw": "'BOTTOM'",
                          "start": 968,
                          "end": 976
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 1005,
                              "end": 1007
                            },
                            "start": 998,
                            "end": 1007
                          }
                        ],
                        "start": 963,
                        "end": 1007
                      }
                    ],
                    "start": 738,
                    "end": 1021
                  }
                ],
                "start": 712,
                "end": 1021
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "SLIDE_OUT",
                  "raw": "'SLIDE_OUT'",
                  "start": 1035,
                  "end": 1046
                },
                "consequent": [
                  {
                    "type": "SwitchStatement",
                    "discriminant": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "transition",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1068,
                        "end": 1078
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "direction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1079,
                        "end": 1088
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1068,
                      "end": 1088
                    },
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "LEFT",
                          "raw": "'LEFT'",
                          "start": 1113,
                          "end": 1119
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 1148,
                              "end": 1150
                            },
                            "start": 1141,
                            "end": 1150
                          }
                        ],
                        "start": 1108,
                        "end": 1150
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "RIGHT",
                          "raw": "'RIGHT'",
                          "start": 1172,
                          "end": 1179
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 1208,
                              "end": 1210
                            },
                            "start": 1201,
                            "end": 1210
                          }
                        ],
                        "start": 1167,
                        "end": 1210
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "TOP",
                          "raw": "'TOP'",
                          "start": 1232,
                          "end": 1237
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 1266,
                              "end": 1268
                            },
                            "start": 1259,
                            "end": 1268
                          }
                        ],
                        "start": 1227,
                        "end": 1268
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "BOTTOM",
                          "raw": "'BOTTOM'",
                          "start": 1290,
                          "end": 1298
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 1327,
                              "end": 1329
                            },
                            "start": 1320,
                            "end": 1329
                          }
                        ],
                        "start": 1285,
                        "end": 1329
                      }
                    ],
                    "start": 1060,
                    "end": 1343
                  }
                ],
                "start": 1030,
                "end": 1343
              }
            ],
            "start": 673,
            "end": 1349
          }
        ],
        "start": 667,
        "end": 1351
      },
      "expression": false,
      "start": 626,
      "end": 1351
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1351
}
```
