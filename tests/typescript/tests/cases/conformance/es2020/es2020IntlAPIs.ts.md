__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "count",
            "optional": false,
            "typeAnnotation": null,
            "start": 133,
            "end": 138
          },
          "init": {
            "type": "Literal",
            "value": 26254.39,
            "raw": "26254.39",
            "start": 141,
            "end": 149
          },
          "definite": false,
          "start": 133,
          "end": 149
        }
      ],
      "declare": false,
      "start": 127,
      "end": 150
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "date",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 161
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 172
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "2012-05-24",
                "raw": "\"2012-05-24\"",
                "start": 173,
                "end": 185
              }
            ],
            "start": 164,
            "end": 186
          },
          "definite": false,
          "start": 157,
          "end": 186
        }
      ],
      "declare": false,
      "start": 151,
      "end": 187
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "log",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 201
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "locale",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 210,
              "end": 216
            },
            "start": 208,
            "end": 216
          },
          "start": 202,
          "end": 216
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 222,
                  "end": 229
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 230,
                  "end": 233
                },
                "optional": false,
                "computed": false,
                "start": 222,
                "end": 233
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false,
                      "start": 239,
                      "end": 242
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": " ",
                        "cooked": " "
                      },
                      "tail": false,
                      "start": 286,
                      "end": 290
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 333,
                      "end": 335
                    }
                  ],
                  "expressions": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Intl",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 246,
                              "end": 250
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "DateTimeFormat",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 251,
                              "end": 265
                            },
                            "optional": false,
                            "computed": false,
                            "start": 246,
                            "end": 265
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "locale",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 266,
                              "end": 272
                            }
                          ],
                          "start": 242,
                          "end": 273
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "format",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 274,
                          "end": 280
                        },
                        "optional": false,
                        "computed": false,
                        "start": 242,
                        "end": 280
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "date",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 281,
                          "end": 285
                        }
                      ],
                      "optional": false,
                      "start": 242,
                      "end": 286
                    },
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Intl",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 294,
                              "end": 298
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "NumberFormat",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 299,
                              "end": 311
                            },
                            "optional": false,
                            "computed": false,
                            "start": 294,
                            "end": 311
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "locale",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 312,
                              "end": 318
                            }
                          ],
                          "start": 290,
                          "end": 319
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "format",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 320,
                          "end": 326
                        },
                        "optional": false,
                        "computed": false,
                        "start": 290,
                        "end": 326
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "count",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 327,
                          "end": 332
                        }
                      ],
                      "optional": false,
                      "start": 290,
                      "end": 333
                    }
                  ],
                  "start": 239,
                  "end": 335
                }
              ],
              "optional": false,
              "start": 222,
              "end": 339
            },
            "directive": null,
            "start": 222,
            "end": 340
          }
        ],
        "start": 218,
        "end": 342
      },
      "expression": false,
      "start": 189,
      "end": 342
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "log",
          "optional": false,
          "typeAnnotation": null,
          "start": 344,
          "end": 347
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "en-US",
            "raw": "\"en-US\"",
            "start": 348,
            "end": 355
          }
        ],
        "optional": false,
        "start": 344,
        "end": 356
      },
      "directive": null,
      "start": 344,
      "end": 357
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "log",
          "optional": false,
          "typeAnnotation": null,
          "start": 399,
          "end": 402
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "de-DE",
            "raw": "\"de-DE\"",
            "start": 403,
            "end": 410
          }
        ],
        "optional": false,
        "start": 399,
        "end": 411
      },
      "directive": null,
      "start": 399,
      "end": 412
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "rtf1",
            "optional": false,
            "typeAnnotation": null,
            "start": 568,
            "end": 572
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 579,
                "end": 583
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "RelativeTimeFormat",
                "optional": false,
                "typeAnnotation": null,
                "start": 584,
                "end": 602
              },
              "optional": false,
              "computed": false,
              "start": 579,
              "end": 602
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "en",
                "raw": "'en'",
                "start": 603,
                "end": 607
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
                      "name": "style",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 611,
                      "end": 616
                    },
                    "value": {
                      "type": "Literal",
                      "value": "narrow",
                      "raw": "'narrow'",
                      "start": 618,
                      "end": 626
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 611,
                    "end": 626
                  }
                ],
                "start": 609,
                "end": 628
              }
            ],
            "start": 575,
            "end": 629
          },
          "definite": false,
          "start": 568,
          "end": 629
        }
      ],
      "declare": false,
      "start": 562,
      "end": 630
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 632,
            "end": 639
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 640,
            "end": 643
          },
          "optional": false,
          "computed": false,
          "start": 632,
          "end": 643
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rtf1",
                "optional": false,
                "typeAnnotation": null,
                "start": 644,
                "end": 648
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "format",
                "optional": false,
                "typeAnnotation": null,
                "start": 649,
                "end": 655
              },
              "optional": false,
              "computed": false,
              "start": 644,
              "end": 655
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 656,
                "end": 657
              },
              {
                "type": "Literal",
                "value": "quarter",
                "raw": "'quarter'",
                "start": 659,
                "end": 668
              }
            ],
            "optional": false,
            "start": 644,
            "end": 669
          }
        ],
        "optional": false,
        "start": 632,
        "end": 670
      },
      "directive": null,
      "start": 632,
      "end": 671
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 705,
            "end": 712
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 713,
            "end": 716
          },
          "optional": false,
          "computed": false,
          "start": 705,
          "end": 716
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rtf1",
                "optional": false,
                "typeAnnotation": null,
                "start": 717,
                "end": 721
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "format",
                "optional": false,
                "typeAnnotation": null,
                "start": 722,
                "end": 728
              },
              "optional": false,
              "computed": false,
              "start": 717,
              "end": 728
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 730,
                  "end": 731
                },
                "prefix": true,
                "start": 729,
                "end": 731
              },
              {
                "type": "Literal",
                "value": "day",
                "raw": "'day'",
                "start": 733,
                "end": 738
              }
            ],
            "optional": false,
            "start": 717,
            "end": 739
          }
        ],
        "optional": false,
        "start": 705,
        "end": 740
      },
      "directive": null,
      "start": 705,
      "end": 741
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "rtf2",
            "optional": false,
            "typeAnnotation": null,
            "start": 780,
            "end": 784
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 791,
                "end": 795
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "RelativeTimeFormat",
                "optional": false,
                "typeAnnotation": null,
                "start": 796,
                "end": 814
              },
              "optional": false,
              "computed": false,
              "start": 791,
              "end": 814
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "es",
                "raw": "'es'",
                "start": 815,
                "end": 819
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
                      "name": "numeric",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 823,
                      "end": 830
                    },
                    "value": {
                      "type": "Literal",
                      "value": "auto",
                      "raw": "'auto'",
                      "start": 832,
                      "end": 838
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 823,
                    "end": 838
                  }
                ],
                "start": 821,
                "end": 840
              }
            ],
            "start": 787,
            "end": 841
          },
          "definite": false,
          "start": 780,
          "end": 841
        }
      ],
      "declare": false,
      "start": 774,
      "end": 842
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 844,
            "end": 851
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 852,
            "end": 855
          },
          "optional": false,
          "computed": false,
          "start": 844,
          "end": 855
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rtf2",
                "optional": false,
                "typeAnnotation": null,
                "start": 856,
                "end": 860
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "format",
                "optional": false,
                "typeAnnotation": null,
                "start": 861,
                "end": 867
              },
              "optional": false,
              "computed": false,
              "start": 856,
              "end": 867
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 868,
                "end": 869
              },
              {
                "type": "Literal",
                "value": "day",
                "raw": "'day'",
                "start": 871,
                "end": 876
              }
            ],
            "optional": false,
            "start": 856,
            "end": 877
          }
        ],
        "optional": false,
        "start": 844,
        "end": 878
      },
      "directive": null,
      "start": 844,
      "end": 879
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "regionNamesInEnglish",
            "optional": false,
            "typeAnnotation": null,
            "start": 1024,
            "end": 1044
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 1051,
                "end": 1055
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "DisplayNames",
                "optional": false,
                "typeAnnotation": null,
                "start": 1056,
                "end": 1068
              },
              "optional": false,
              "computed": false,
              "start": 1051,
              "end": 1068
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "en",
                    "raw": "'en'",
                    "start": 1070,
                    "end": 1074
                  }
                ],
                "start": 1069,
                "end": 1075
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
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1079,
                      "end": 1083
                    },
                    "value": {
                      "type": "Literal",
                      "value": "region",
                      "raw": "'region'",
                      "start": 1085,
                      "end": 1093
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1079,
                    "end": 1093
                  }
                ],
                "start": 1077,
                "end": 1095
              }
            ],
            "start": 1047,
            "end": 1096
          },
          "definite": false,
          "start": 1024,
          "end": 1096
        }
      ],
      "declare": false,
      "start": 1018,
      "end": 1097
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "regionNamesInTraditionalChinese",
            "optional": false,
            "typeAnnotation": null,
            "start": 1104,
            "end": 1135
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 1142,
                "end": 1146
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "DisplayNames",
                "optional": false,
                "typeAnnotation": null,
                "start": 1147,
                "end": 1159
              },
              "optional": false,
              "computed": false,
              "start": 1142,
              "end": 1159
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "zh-Hant",
                    "raw": "'zh-Hant'",
                    "start": 1161,
                    "end": 1170
                  }
                ],
                "start": 1160,
                "end": 1171
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
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1175,
                      "end": 1179
                    },
                    "value": {
                      "type": "Literal",
                      "value": "region",
                      "raw": "'region'",
                      "start": 1181,
                      "end": 1189
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1175,
                    "end": 1189
                  }
                ],
                "start": 1173,
                "end": 1191
              }
            ],
            "start": 1138,
            "end": 1192
          },
          "definite": false,
          "start": 1104,
          "end": 1192
        }
      ],
      "declare": false,
      "start": 1098,
      "end": 1193
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 1195,
            "end": 1202
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 1203,
            "end": 1206
          },
          "optional": false,
          "computed": false,
          "start": 1195,
          "end": 1206
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "regionNamesInEnglish",
                "optional": false,
                "typeAnnotation": null,
                "start": 1207,
                "end": 1227
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "of",
                "optional": false,
                "typeAnnotation": null,
                "start": 1228,
                "end": 1230
              },
              "optional": false,
              "computed": false,
              "start": 1207,
              "end": 1230
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "US",
                "raw": "'US'",
                "start": 1231,
                "end": 1235
              }
            ],
            "optional": false,
            "start": 1207,
            "end": 1236
          }
        ],
        "optional": false,
        "start": 1195,
        "end": 1237
      },
      "directive": null,
      "start": 1195,
      "end": 1238
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 1276,
            "end": 1283
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 1284,
            "end": 1287
          },
          "optional": false,
          "computed": false,
          "start": 1276,
          "end": 1287
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "regionNamesInTraditionalChinese",
                "optional": false,
                "typeAnnotation": null,
                "start": 1288,
                "end": 1319
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "of",
                "optional": false,
                "typeAnnotation": null,
                "start": 1320,
                "end": 1322
              },
              "optional": false,
              "computed": false,
              "start": 1288,
              "end": 1322
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "US",
                "raw": "'US'",
                "start": 1323,
                "end": 1327
              }
            ],
            "optional": false,
            "start": 1288,
            "end": 1328
          }
        ],
        "optional": false,
        "start": 1276,
        "end": 1329
      },
      "directive": null,
      "start": 1276,
      "end": 1330
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "locales1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1363,
            "end": 1371
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "ban",
                "raw": "'ban'",
                "start": 1375,
                "end": 1380
              },
              {
                "type": "Literal",
                "value": "id-u-co-pinyin",
                "raw": "'id-u-co-pinyin'",
                "start": 1382,
                "end": 1398
              },
              {
                "type": "Literal",
                "value": "de-ID",
                "raw": "'de-ID'",
                "start": 1400,
                "end": 1407
              }
            ],
            "start": 1374,
            "end": 1408
          },
          "definite": false,
          "start": 1363,
          "end": 1408
        }
      ],
      "declare": false,
      "start": 1357,
      "end": 1409
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "options1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1416,
            "end": 1424
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "localeMatcher",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1429,
                    "end": 1442
                  },
                  "value": {
                    "type": "Literal",
                    "value": "lookup",
                    "raw": "'lookup'",
                    "start": 1444,
                    "end": 1452
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1429,
                  "end": 1452
                }
              ],
              "start": 1427,
              "end": 1454
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1458,
                "end": 1463
              },
              "typeArguments": null,
              "start": 1458,
              "end": 1463
            },
            "start": 1427,
            "end": 1463
          },
          "definite": false,
          "start": 1416,
          "end": 1463
        }
      ],
      "declare": false,
      "start": 1410,
      "end": 1464
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 1465,
            "end": 1472
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 1473,
            "end": 1476
          },
          "optional": false,
          "computed": false,
          "start": 1465,
          "end": 1476
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Intl",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1477,
                      "end": 1481
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DisplayNames",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1482,
                      "end": 1494
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1477,
                    "end": 1494
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "supportedLocalesOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1495,
                    "end": 1513
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1477,
                  "end": 1513
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "locales1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1514,
                    "end": 1522
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1524,
                    "end": 1532
                  }
                ],
                "optional": false,
                "start": 1477,
                "end": 1533
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "join",
                "optional": false,
                "typeAnnotation": null,
                "start": 1534,
                "end": 1538
              },
              "optional": false,
              "computed": false,
              "start": 1477,
              "end": 1538
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": ", ",
                "raw": "', '",
                "start": 1539,
                "end": 1543
              }
            ],
            "optional": false,
            "start": 1477,
            "end": 1544
          }
        ],
        "optional": false,
        "start": 1465,
        "end": 1545
      },
      "directive": null,
      "start": 1465,
      "end": 1546
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1552,
            "end": 1556
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Locale",
            "optional": false,
            "typeAnnotation": null,
            "start": 1557,
            "end": 1563
          },
          "optional": false,
          "computed": false,
          "start": 1552,
          "end": 1563
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1548,
        "end": 1565
      },
      "directive": null,
      "start": 1548,
      "end": 1566
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1587,
            "end": 1591
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Locale",
            "optional": false,
            "typeAnnotation": null,
            "start": 1592,
            "end": 1598
          },
          "optional": false,
          "computed": false,
          "start": 1587,
          "end": 1598
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 1603,
                "end": 1607
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Locale",
                "optional": false,
                "typeAnnotation": null,
                "start": 1608,
                "end": 1614
              },
              "optional": false,
              "computed": false,
              "start": 1603,
              "end": 1614
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "en-US",
                "raw": "'en-US'",
                "start": 1615,
                "end": 1622
              }
            ],
            "start": 1599,
            "end": 1623
          }
        ],
        "start": 1583,
        "end": 1624
      },
      "directive": null,
      "start": 1583,
      "end": 1625
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1631,
            "end": 1635
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "DisplayNames",
            "optional": false,
            "typeAnnotation": null,
            "start": 1636,
            "end": 1648
          },
          "optional": false,
          "computed": false,
          "start": 1631,
          "end": 1648
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1627,
        "end": 1650
      },
      "directive": null,
      "start": 1627,
      "end": 1651
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1687,
            "end": 1691
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "DisplayNames",
            "optional": false,
            "typeAnnotation": null,
            "start": 1692,
            "end": 1704
          },
          "optional": false,
          "computed": false,
          "start": 1687,
          "end": 1704
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "en",
            "raw": "'en'",
            "start": 1705,
            "end": 1709
          }
        ],
        "start": 1683,
        "end": 1710
      },
      "directive": null,
      "start": 1683,
      "end": 1711
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1747,
            "end": 1751
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "DisplayNames",
            "optional": false,
            "typeAnnotation": null,
            "start": 1752,
            "end": 1764
          },
          "optional": false,
          "computed": false,
          "start": 1747,
          "end": 1764
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "en",
            "raw": "'en'",
            "start": 1765,
            "end": 1769
          },
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 1771,
            "end": 1773
          }
        ],
        "start": 1743,
        "end": 1774
      },
      "directive": null,
      "start": 1743,
      "end": 1775
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 1807,
            "end": 1814
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 1815,
            "end": 1818
          },
          "optional": false,
          "computed": false,
          "start": 1807,
          "end": 1818
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1824,
                    "end": 1828
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DisplayNames",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1829,
                    "end": 1841
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1824,
                  "end": 1841
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1842,
                    "end": 1851
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
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1854,
                          "end": 1858
                        },
                        "value": {
                          "type": "Literal",
                          "value": "language",
                          "raw": "'language'",
                          "start": 1860,
                          "end": 1870
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1854,
                        "end": 1870
                      }
                    ],
                    "start": 1853,
                    "end": 1871
                  }
                ],
                "start": 1820,
                "end": 1872
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "of",
                "optional": false,
                "typeAnnotation": null,
                "start": 1874,
                "end": 1876
              },
              "optional": false,
              "computed": false,
              "start": 1819,
              "end": 1876
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "en-GB",
                "raw": "'en-GB'",
                "start": 1877,
                "end": 1884
              }
            ],
            "optional": false,
            "start": 1819,
            "end": 1885
          }
        ],
        "optional": false,
        "start": 1807,
        "end": 1886
      },
      "directive": null,
      "start": 1807,
      "end": 1887
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "localesArg",
            "optional": false,
            "typeAnnotation": null,
            "start": 1916,
            "end": 1926
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "es-ES",
                "raw": "\"es-ES\"",
                "start": 1930,
                "end": 1937
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1943,
                    "end": 1947
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Locale",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1948,
                    "end": 1954
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1943,
                  "end": 1954
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "en-US",
                    "raw": "\"en-US\"",
                    "start": 1955,
                    "end": 1962
                  }
                ],
                "start": 1939,
                "end": 1963
              }
            ],
            "start": 1929,
            "end": 1964
          },
          "definite": false,
          "start": 1916,
          "end": 1964
        }
      ],
      "declare": false,
      "start": 1910,
      "end": 1965
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 1966,
            "end": 1973
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 1974,
            "end": 1977
          },
          "optional": false,
          "computed": false,
          "start": 1966,
          "end": 1977
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Intl",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1983,
                      "end": 1987
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DisplayNames",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1988,
                      "end": 2000
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1983,
                    "end": 2000
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "localesArg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2001,
                      "end": 2011
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
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2014,
                            "end": 2018
                          },
                          "value": {
                            "type": "Literal",
                            "value": "language",
                            "raw": "'language'",
                            "start": 2020,
                            "end": 2030
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2014,
                          "end": 2030
                        }
                      ],
                      "start": 2013,
                      "end": 2031
                    }
                  ],
                  "start": 1979,
                  "end": 2032
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolvedOptions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2034,
                  "end": 2049
                },
                "optional": false,
                "computed": false,
                "start": 1978,
                "end": 2049
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1978,
              "end": 2051
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "locale",
              "optional": false,
              "typeAnnotation": null,
              "start": 2052,
              "end": 2058
            },
            "optional": false,
            "computed": false,
            "start": 1978,
            "end": 2058
          }
        ],
        "optional": false,
        "start": 1966,
        "end": 2059
      },
      "directive": null,
      "start": 1966,
      "end": 2060
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 2072,
            "end": 2079
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 2080,
            "end": 2083
          },
          "optional": false,
          "computed": false,
          "start": 2072,
          "end": 2083
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Intl",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2084,
                  "end": 2088
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DisplayNames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2089,
                  "end": 2101
                },
                "optional": false,
                "computed": false,
                "start": 2084,
                "end": 2101
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "supportedLocalesOf",
                "optional": false,
                "typeAnnotation": null,
                "start": 2102,
                "end": 2120
              },
              "optional": false,
              "computed": false,
              "start": 2084,
              "end": 2120
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "localesArg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2121,
                "end": 2131
              }
            ],
            "optional": false,
            "start": 2084,
            "end": 2132
          }
        ],
        "optional": false,
        "start": 2072,
        "end": 2133
      },
      "directive": null,
      "start": 2072,
      "end": 2134
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 2157,
            "end": 2164
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 2165,
            "end": 2168
          },
          "optional": false,
          "computed": false,
          "start": 2157,
          "end": 2168
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Intl",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2169,
                  "end": 2173
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DisplayNames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2174,
                  "end": 2186
                },
                "optional": false,
                "computed": false,
                "start": 2169,
                "end": 2186
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "supportedLocalesOf",
                "optional": false,
                "typeAnnotation": null,
                "start": 2187,
                "end": 2205
              },
              "optional": false,
              "computed": false,
              "start": 2169,
              "end": 2205
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 2169,
            "end": 2207
          }
        ],
        "optional": false,
        "start": 2157,
        "end": 2208
      },
      "directive": null,
      "start": 2157,
      "end": 2209
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 2216,
            "end": 2223
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 2224,
            "end": 2227
          },
          "optional": false,
          "computed": false,
          "start": 2216,
          "end": 2227
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Intl",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2228,
                  "end": 2232
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DisplayNames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2233,
                  "end": 2245
                },
                "optional": false,
                "computed": false,
                "start": 2228,
                "end": 2245
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "supportedLocalesOf",
                "optional": false,
                "typeAnnotation": null,
                "start": 2246,
                "end": 2264
              },
              "optional": false,
              "computed": false,
              "start": 2228,
              "end": 2264
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "localesArg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2265,
                "end": 2275
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 2277,
                "end": 2279
              }
            ],
            "optional": false,
            "start": 2228,
            "end": 2280
          }
        ],
        "optional": false,
        "start": 2216,
        "end": 2281
      },
      "directive": null,
      "start": 2216,
      "end": 2282
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 127,
  "end": 2304
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 127,
    "end": 132,
    "range": [
      127,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 133,
    "end": 138,
    "range": [
      133,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Numeric",
    "value": "26254.39",
    "start": 141,
    "end": 149,
    "range": [
      141,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 151,
    "end": 156,
    "range": [
      151,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "date",
    "start": 157,
    "end": 161,
    "range": [
      157,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 164,
    "end": 167,
    "range": [
      164,
      167
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 168,
    "end": 172,
    "range": [
      168,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "String",
    "value": "\"2012-05-24\"",
    "start": 173,
    "end": 185,
    "range": [
      173,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 189,
    "end": 197,
    "range": [
      189,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 198,
    "end": 201,
    "range": [
      198,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "locale",
    "start": 202,
    "end": 208,
    "range": [
      202,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 210,
    "end": 216,
    "range": [
      210,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 222,
    "end": 229,
    "range": [
      222,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 230,
    "end": 233,
    "range": [
      230,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 239,
    "end": 242,
    "range": [
      239,
      242
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 242,
    "end": 245,
    "range": [
      242,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 246,
    "end": 250,
    "range": [
      246,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "DateTimeFormat",
    "start": 251,
    "end": 265,
    "range": [
      251,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "locale",
    "start": 266,
    "end": 272,
    "range": [
      266,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "format",
    "start": 274,
    "end": 280,
    "range": [
      274,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Identifier",
    "value": "date",
    "start": 281,
    "end": 285,
    "range": [
      281,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Template",
    "value": "} ${",
    "start": 286,
    "end": 290,
    "range": [
      286,
      290
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 290,
    "end": 293,
    "range": [
      290,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 294,
    "end": 298,
    "range": [
      294,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 299,
    "end": 311,
    "range": [
      299,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Identifier",
    "value": "locale",
    "start": 312,
    "end": 318,
    "range": [
      312,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Identifier",
    "value": "format",
    "start": 320,
    "end": 326,
    "range": [
      320,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 327,
    "end": 332,
    "range": [
      327,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 333,
    "end": 335,
    "range": [
      333,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 344,
    "end": 347,
    "range": [
      344,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "String",
    "value": "\"en-US\"",
    "start": 348,
    "end": 355,
    "range": [
      348,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 399,
    "end": 402,
    "range": [
      399,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "String",
    "value": "\"de-DE\"",
    "start": 403,
    "end": 410,
    "range": [
      403,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 562,
    "end": 567,
    "range": [
      562,
      567
    ]
  },
  {
    "type": "Identifier",
    "value": "rtf1",
    "start": 568,
    "end": 572,
    "range": [
      568,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 575,
    "end": 578,
    "range": [
      575,
      578
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 579,
    "end": 583,
    "range": [
      579,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Identifier",
    "value": "RelativeTimeFormat",
    "start": 584,
    "end": 602,
    "range": [
      584,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "String",
    "value": "'en'",
    "start": 603,
    "end": 607,
    "range": [
      603,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 611,
    "end": 616,
    "range": [
      611,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "String",
    "value": "'narrow'",
    "start": 618,
    "end": 626,
    "range": [
      618,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 632,
    "end": 639,
    "range": [
      632,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 640,
    "end": 643,
    "range": [
      640,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Identifier",
    "value": "rtf1",
    "start": 644,
    "end": 648,
    "range": [
      644,
      648
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Identifier",
    "value": "format",
    "start": 649,
    "end": 655,
    "range": [
      649,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "String",
    "value": "'quarter'",
    "start": 659,
    "end": 668,
    "range": [
      659,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 705,
    "end": 712,
    "range": [
      705,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 713,
    "end": 716,
    "range": [
      713,
      716
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Identifier",
    "value": "rtf1",
    "start": 717,
    "end": 721,
    "range": [
      717,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Identifier",
    "value": "format",
    "start": 722,
    "end": 728,
    "range": [
      722,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "String",
    "value": "'day'",
    "start": 733,
    "end": 738,
    "range": [
      733,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 740,
    "end": 741,
    "range": [
      740,
      741
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 774,
    "end": 779,
    "range": [
      774,
      779
    ]
  },
  {
    "type": "Identifier",
    "value": "rtf2",
    "start": 780,
    "end": 784,
    "range": [
      780,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 787,
    "end": 790,
    "range": [
      787,
      790
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 791,
    "end": 795,
    "range": [
      791,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Identifier",
    "value": "RelativeTimeFormat",
    "start": 796,
    "end": 814,
    "range": [
      796,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "String",
    "value": "'es'",
    "start": 815,
    "end": 819,
    "range": [
      815,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Identifier",
    "value": "numeric",
    "start": 823,
    "end": 830,
    "range": [
      823,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "String",
    "value": "'auto'",
    "start": 832,
    "end": 838,
    "range": [
      832,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 844,
    "end": 851,
    "range": [
      844,
      851
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 852,
    "end": 855,
    "range": [
      852,
      855
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Identifier",
    "value": "rtf2",
    "start": 856,
    "end": 860,
    "range": [
      856,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Identifier",
    "value": "format",
    "start": 861,
    "end": 867,
    "range": [
      861,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "String",
    "value": "'day'",
    "start": 871,
    "end": 876,
    "range": [
      871,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1018,
    "end": 1023,
    "range": [
      1018,
      1023
    ]
  },
  {
    "type": "Identifier",
    "value": "regionNamesInEnglish",
    "start": 1024,
    "end": 1044,
    "range": [
      1024,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1047,
    "end": 1050,
    "range": [
      1047,
      1050
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1051,
    "end": 1055,
    "range": [
      1051,
      1055
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Identifier",
    "value": "DisplayNames",
    "start": 1056,
    "end": 1068,
    "range": [
      1056,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "String",
    "value": "'en'",
    "start": 1070,
    "end": 1074,
    "range": [
      1070,
      1074
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1074,
    "end": 1075,
    "range": [
      1074,
      1075
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1075,
    "end": 1076,
    "range": [
      1075,
      1076
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1079,
    "end": 1083,
    "range": [
      1079,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1083,
    "end": 1084,
    "range": [
      1083,
      1084
    ]
  },
  {
    "type": "String",
    "value": "'region'",
    "start": 1085,
    "end": 1093,
    "range": [
      1085,
      1093
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1096,
    "end": 1097,
    "range": [
      1096,
      1097
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1098,
    "end": 1103,
    "range": [
      1098,
      1103
    ]
  },
  {
    "type": "Identifier",
    "value": "regionNamesInTraditionalChinese",
    "start": 1104,
    "end": 1135,
    "range": [
      1104,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1136,
    "end": 1137,
    "range": [
      1136,
      1137
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1138,
    "end": 1141,
    "range": [
      1138,
      1141
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1142,
    "end": 1146,
    "range": [
      1142,
      1146
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1146,
    "end": 1147,
    "range": [
      1146,
      1147
    ]
  },
  {
    "type": "Identifier",
    "value": "DisplayNames",
    "start": 1147,
    "end": 1159,
    "range": [
      1147,
      1159
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1160,
    "end": 1161,
    "range": [
      1160,
      1161
    ]
  },
  {
    "type": "String",
    "value": "'zh-Hant'",
    "start": 1161,
    "end": 1170,
    "range": [
      1161,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1170,
    "end": 1171,
    "range": [
      1170,
      1171
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1171,
    "end": 1172,
    "range": [
      1171,
      1172
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1173,
    "end": 1174,
    "range": [
      1173,
      1174
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1175,
    "end": 1179,
    "range": [
      1175,
      1179
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1179,
    "end": 1180,
    "range": [
      1179,
      1180
    ]
  },
  {
    "type": "String",
    "value": "'region'",
    "start": 1181,
    "end": 1189,
    "range": [
      1181,
      1189
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1190,
    "end": 1191,
    "range": [
      1190,
      1191
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1191,
    "end": 1192,
    "range": [
      1191,
      1192
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1192,
    "end": 1193,
    "range": [
      1192,
      1193
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1195,
    "end": 1202,
    "range": [
      1195,
      1202
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1202,
    "end": 1203,
    "range": [
      1202,
      1203
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1203,
    "end": 1206,
    "range": [
      1203,
      1206
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1206,
    "end": 1207,
    "range": [
      1206,
      1207
    ]
  },
  {
    "type": "Identifier",
    "value": "regionNamesInEnglish",
    "start": 1207,
    "end": 1227,
    "range": [
      1207,
      1227
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1228,
    "end": 1230,
    "range": [
      1228,
      1230
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1230,
    "end": 1231,
    "range": [
      1230,
      1231
    ]
  },
  {
    "type": "String",
    "value": "'US'",
    "start": 1231,
    "end": 1235,
    "range": [
      1231,
      1235
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1235,
    "end": 1236,
    "range": [
      1235,
      1236
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1276,
    "end": 1283,
    "range": [
      1276,
      1283
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1283,
    "end": 1284,
    "range": [
      1283,
      1284
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1284,
    "end": 1287,
    "range": [
      1284,
      1287
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1287,
    "end": 1288,
    "range": [
      1287,
      1288
    ]
  },
  {
    "type": "Identifier",
    "value": "regionNamesInTraditionalChinese",
    "start": 1288,
    "end": 1319,
    "range": [
      1288,
      1319
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1319,
    "end": 1320,
    "range": [
      1319,
      1320
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1320,
    "end": 1322,
    "range": [
      1320,
      1322
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1322,
    "end": 1323,
    "range": [
      1322,
      1323
    ]
  },
  {
    "type": "String",
    "value": "'US'",
    "start": 1323,
    "end": 1327,
    "range": [
      1323,
      1327
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1327,
    "end": 1328,
    "range": [
      1327,
      1328
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1328,
    "end": 1329,
    "range": [
      1328,
      1329
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1329,
    "end": 1330,
    "range": [
      1329,
      1330
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1357,
    "end": 1362,
    "range": [
      1357,
      1362
    ]
  },
  {
    "type": "Identifier",
    "value": "locales1",
    "start": 1363,
    "end": 1371,
    "range": [
      1363,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1372,
    "end": 1373,
    "range": [
      1372,
      1373
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1374,
    "end": 1375,
    "range": [
      1374,
      1375
    ]
  },
  {
    "type": "String",
    "value": "'ban'",
    "start": 1375,
    "end": 1380,
    "range": [
      1375,
      1380
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1380,
    "end": 1381,
    "range": [
      1380,
      1381
    ]
  },
  {
    "type": "String",
    "value": "'id-u-co-pinyin'",
    "start": 1382,
    "end": 1398,
    "range": [
      1382,
      1398
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1398,
    "end": 1399,
    "range": [
      1398,
      1399
    ]
  },
  {
    "type": "String",
    "value": "'de-ID'",
    "start": 1400,
    "end": 1407,
    "range": [
      1400,
      1407
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1407,
    "end": 1408,
    "range": [
      1407,
      1408
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1408,
    "end": 1409,
    "range": [
      1408,
      1409
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1410,
    "end": 1415,
    "range": [
      1410,
      1415
    ]
  },
  {
    "type": "Identifier",
    "value": "options1",
    "start": 1416,
    "end": 1424,
    "range": [
      1416,
      1424
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1425,
    "end": 1426,
    "range": [
      1425,
      1426
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1427,
    "end": 1428,
    "range": [
      1427,
      1428
    ]
  },
  {
    "type": "Identifier",
    "value": "localeMatcher",
    "start": 1429,
    "end": 1442,
    "range": [
      1429,
      1442
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1442,
    "end": 1443,
    "range": [
      1442,
      1443
    ]
  },
  {
    "type": "String",
    "value": "'lookup'",
    "start": 1444,
    "end": 1452,
    "range": [
      1444,
      1452
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1453,
    "end": 1454,
    "range": [
      1453,
      1454
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1455,
    "end": 1457,
    "range": [
      1455,
      1457
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1458,
    "end": 1463,
    "range": [
      1458,
      1463
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1463,
    "end": 1464,
    "range": [
      1463,
      1464
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1465,
    "end": 1472,
    "range": [
      1465,
      1472
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1472,
    "end": 1473,
    "range": [
      1472,
      1473
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1473,
    "end": 1476,
    "range": [
      1473,
      1476
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1476,
    "end": 1477,
    "range": [
      1476,
      1477
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1477,
    "end": 1481,
    "range": [
      1477,
      1481
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1481,
    "end": 1482,
    "range": [
      1481,
      1482
    ]
  },
  {
    "type": "Identifier",
    "value": "DisplayNames",
    "start": 1482,
    "end": 1494,
    "range": [
      1482,
      1494
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1494,
    "end": 1495,
    "range": [
      1494,
      1495
    ]
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 1495,
    "end": 1513,
    "range": [
      1495,
      1513
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1513,
    "end": 1514,
    "range": [
      1513,
      1514
    ]
  },
  {
    "type": "Identifier",
    "value": "locales1",
    "start": 1514,
    "end": 1522,
    "range": [
      1514,
      1522
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1522,
    "end": 1523,
    "range": [
      1522,
      1523
    ]
  },
  {
    "type": "Identifier",
    "value": "options1",
    "start": 1524,
    "end": 1532,
    "range": [
      1524,
      1532
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1532,
    "end": 1533,
    "range": [
      1532,
      1533
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1533,
    "end": 1534,
    "range": [
      1533,
      1534
    ]
  },
  {
    "type": "Identifier",
    "value": "join",
    "start": 1534,
    "end": 1538,
    "range": [
      1534,
      1538
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1538,
    "end": 1539,
    "range": [
      1538,
      1539
    ]
  },
  {
    "type": "String",
    "value": "', '",
    "start": 1539,
    "end": 1543,
    "range": [
      1539,
      1543
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1543,
    "end": 1544,
    "range": [
      1543,
      1544
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1544,
    "end": 1545,
    "range": [
      1544,
      1545
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1545,
    "end": 1546,
    "range": [
      1545,
      1546
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1548,
    "end": 1551,
    "range": [
      1548,
      1551
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1552,
    "end": 1556,
    "range": [
      1552,
      1556
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1556,
    "end": 1557,
    "range": [
      1556,
      1557
    ]
  },
  {
    "type": "Identifier",
    "value": "Locale",
    "start": 1557,
    "end": 1563,
    "range": [
      1557,
      1563
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1563,
    "end": 1564,
    "range": [
      1563,
      1564
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1564,
    "end": 1565,
    "range": [
      1564,
      1565
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1565,
    "end": 1566,
    "range": [
      1565,
      1566
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1583,
    "end": 1586,
    "range": [
      1583,
      1586
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1587,
    "end": 1591,
    "range": [
      1587,
      1591
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1591,
    "end": 1592,
    "range": [
      1591,
      1592
    ]
  },
  {
    "type": "Identifier",
    "value": "Locale",
    "start": 1592,
    "end": 1598,
    "range": [
      1592,
      1598
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1598,
    "end": 1599,
    "range": [
      1598,
      1599
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1599,
    "end": 1602,
    "range": [
      1599,
      1602
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1603,
    "end": 1607,
    "range": [
      1603,
      1607
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1607,
    "end": 1608,
    "range": [
      1607,
      1608
    ]
  },
  {
    "type": "Identifier",
    "value": "Locale",
    "start": 1608,
    "end": 1614,
    "range": [
      1608,
      1614
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1614,
    "end": 1615,
    "range": [
      1614,
      1615
    ]
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 1615,
    "end": 1622,
    "range": [
      1615,
      1622
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1622,
    "end": 1623,
    "range": [
      1622,
      1623
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1623,
    "end": 1624,
    "range": [
      1623,
      1624
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1624,
    "end": 1625,
    "range": [
      1624,
      1625
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1627,
    "end": 1630,
    "range": [
      1627,
      1630
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1631,
    "end": 1635,
    "range": [
      1631,
      1635
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1635,
    "end": 1636,
    "range": [
      1635,
      1636
    ]
  },
  {
    "type": "Identifier",
    "value": "DisplayNames",
    "start": 1636,
    "end": 1648,
    "range": [
      1636,
      1648
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1648,
    "end": 1649,
    "range": [
      1648,
      1649
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1649,
    "end": 1650,
    "range": [
      1649,
      1650
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1650,
    "end": 1651,
    "range": [
      1650,
      1651
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1683,
    "end": 1686,
    "range": [
      1683,
      1686
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1687,
    "end": 1691,
    "range": [
      1687,
      1691
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1691,
    "end": 1692,
    "range": [
      1691,
      1692
    ]
  },
  {
    "type": "Identifier",
    "value": "DisplayNames",
    "start": 1692,
    "end": 1704,
    "range": [
      1692,
      1704
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1704,
    "end": 1705,
    "range": [
      1704,
      1705
    ]
  },
  {
    "type": "String",
    "value": "'en'",
    "start": 1705,
    "end": 1709,
    "range": [
      1705,
      1709
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1709,
    "end": 1710,
    "range": [
      1709,
      1710
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1710,
    "end": 1711,
    "range": [
      1710,
      1711
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1743,
    "end": 1746,
    "range": [
      1743,
      1746
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1747,
    "end": 1751,
    "range": [
      1747,
      1751
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1751,
    "end": 1752,
    "range": [
      1751,
      1752
    ]
  },
  {
    "type": "Identifier",
    "value": "DisplayNames",
    "start": 1752,
    "end": 1764,
    "range": [
      1752,
      1764
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1764,
    "end": 1765,
    "range": [
      1764,
      1765
    ]
  },
  {
    "type": "String",
    "value": "'en'",
    "start": 1765,
    "end": 1769,
    "range": [
      1765,
      1769
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1769,
    "end": 1770,
    "range": [
      1769,
      1770
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1771,
    "end": 1772,
    "range": [
      1771,
      1772
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1772,
    "end": 1773,
    "range": [
      1772,
      1773
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1773,
    "end": 1774,
    "range": [
      1773,
      1774
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1774,
    "end": 1775,
    "range": [
      1774,
      1775
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1807,
    "end": 1814,
    "range": [
      1807,
      1814
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1814,
    "end": 1815,
    "range": [
      1814,
      1815
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1815,
    "end": 1818,
    "range": [
      1815,
      1818
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1818,
    "end": 1819,
    "range": [
      1818,
      1819
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1819,
    "end": 1820,
    "range": [
      1819,
      1820
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1820,
    "end": 1823,
    "range": [
      1820,
      1823
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1824,
    "end": 1828,
    "range": [
      1824,
      1828
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1828,
    "end": 1829,
    "range": [
      1828,
      1829
    ]
  },
  {
    "type": "Identifier",
    "value": "DisplayNames",
    "start": 1829,
    "end": 1841,
    "range": [
      1829,
      1841
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1841,
    "end": 1842,
    "range": [
      1841,
      1842
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1842,
    "end": 1851,
    "range": [
      1842,
      1851
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1851,
    "end": 1852,
    "range": [
      1851,
      1852
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1853,
    "end": 1854,
    "range": [
      1853,
      1854
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1854,
    "end": 1858,
    "range": [
      1854,
      1858
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1858,
    "end": 1859,
    "range": [
      1858,
      1859
    ]
  },
  {
    "type": "String",
    "value": "'language'",
    "start": 1860,
    "end": 1870,
    "range": [
      1860,
      1870
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1870,
    "end": 1871,
    "range": [
      1870,
      1871
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1871,
    "end": 1872,
    "range": [
      1871,
      1872
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1872,
    "end": 1873,
    "range": [
      1872,
      1873
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1873,
    "end": 1874,
    "range": [
      1873,
      1874
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1874,
    "end": 1876,
    "range": [
      1874,
      1876
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1876,
    "end": 1877,
    "range": [
      1876,
      1877
    ]
  },
  {
    "type": "String",
    "value": "'en-GB'",
    "start": 1877,
    "end": 1884,
    "range": [
      1877,
      1884
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1884,
    "end": 1885,
    "range": [
      1884,
      1885
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1885,
    "end": 1886,
    "range": [
      1885,
      1886
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1886,
    "end": 1887,
    "range": [
      1886,
      1887
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1910,
    "end": 1915,
    "range": [
      1910,
      1915
    ]
  },
  {
    "type": "Identifier",
    "value": "localesArg",
    "start": 1916,
    "end": 1926,
    "range": [
      1916,
      1926
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1927,
    "end": 1928,
    "range": [
      1927,
      1928
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1929,
    "end": 1930,
    "range": [
      1929,
      1930
    ]
  },
  {
    "type": "String",
    "value": "\"es-ES\"",
    "start": 1930,
    "end": 1937,
    "range": [
      1930,
      1937
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1937,
    "end": 1938,
    "range": [
      1937,
      1938
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1939,
    "end": 1942,
    "range": [
      1939,
      1942
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1943,
    "end": 1947,
    "range": [
      1943,
      1947
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1947,
    "end": 1948,
    "range": [
      1947,
      1948
    ]
  },
  {
    "type": "Identifier",
    "value": "Locale",
    "start": 1948,
    "end": 1954,
    "range": [
      1948,
      1954
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1954,
    "end": 1955,
    "range": [
      1954,
      1955
    ]
  },
  {
    "type": "String",
    "value": "\"en-US\"",
    "start": 1955,
    "end": 1962,
    "range": [
      1955,
      1962
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1962,
    "end": 1963,
    "range": [
      1962,
      1963
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1963,
    "end": 1964,
    "range": [
      1963,
      1964
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1964,
    "end": 1965,
    "range": [
      1964,
      1965
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1966,
    "end": 1973,
    "range": [
      1966,
      1973
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1973,
    "end": 1974,
    "range": [
      1973,
      1974
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1974,
    "end": 1977,
    "range": [
      1974,
      1977
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1977,
    "end": 1978,
    "range": [
      1977,
      1978
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1978,
    "end": 1979,
    "range": [
      1978,
      1979
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1979,
    "end": 1982,
    "range": [
      1979,
      1982
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1983,
    "end": 1987,
    "range": [
      1983,
      1987
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1987,
    "end": 1988,
    "range": [
      1987,
      1988
    ]
  },
  {
    "type": "Identifier",
    "value": "DisplayNames",
    "start": 1988,
    "end": 2000,
    "range": [
      1988,
      2000
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2000,
    "end": 2001,
    "range": [
      2000,
      2001
    ]
  },
  {
    "type": "Identifier",
    "value": "localesArg",
    "start": 2001,
    "end": 2011,
    "range": [
      2001,
      2011
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2011,
    "end": 2012,
    "range": [
      2011,
      2012
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2013,
    "end": 2014,
    "range": [
      2013,
      2014
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2014,
    "end": 2018,
    "range": [
      2014,
      2018
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2018,
    "end": 2019,
    "range": [
      2018,
      2019
    ]
  },
  {
    "type": "String",
    "value": "'language'",
    "start": 2020,
    "end": 2030,
    "range": [
      2020,
      2030
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2030,
    "end": 2031,
    "range": [
      2030,
      2031
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2031,
    "end": 2032,
    "range": [
      2031,
      2032
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2032,
    "end": 2033,
    "range": [
      2032,
      2033
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2033,
    "end": 2034,
    "range": [
      2033,
      2034
    ]
  },
  {
    "type": "Identifier",
    "value": "resolvedOptions",
    "start": 2034,
    "end": 2049,
    "range": [
      2034,
      2049
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2049,
    "end": 2050,
    "range": [
      2049,
      2050
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2050,
    "end": 2051,
    "range": [
      2050,
      2051
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2051,
    "end": 2052,
    "range": [
      2051,
      2052
    ]
  },
  {
    "type": "Identifier",
    "value": "locale",
    "start": 2052,
    "end": 2058,
    "range": [
      2052,
      2058
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2058,
    "end": 2059,
    "range": [
      2058,
      2059
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2059,
    "end": 2060,
    "range": [
      2059,
      2060
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2072,
    "end": 2079,
    "range": [
      2072,
      2079
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2079,
    "end": 2080,
    "range": [
      2079,
      2080
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2080,
    "end": 2083,
    "range": [
      2080,
      2083
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2083,
    "end": 2084,
    "range": [
      2083,
      2084
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 2084,
    "end": 2088,
    "range": [
      2084,
      2088
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2088,
    "end": 2089,
    "range": [
      2088,
      2089
    ]
  },
  {
    "type": "Identifier",
    "value": "DisplayNames",
    "start": 2089,
    "end": 2101,
    "range": [
      2089,
      2101
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2101,
    "end": 2102,
    "range": [
      2101,
      2102
    ]
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 2102,
    "end": 2120,
    "range": [
      2102,
      2120
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2120,
    "end": 2121,
    "range": [
      2120,
      2121
    ]
  },
  {
    "type": "Identifier",
    "value": "localesArg",
    "start": 2121,
    "end": 2131,
    "range": [
      2121,
      2131
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2131,
    "end": 2132,
    "range": [
      2131,
      2132
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2132,
    "end": 2133,
    "range": [
      2132,
      2133
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2133,
    "end": 2134,
    "range": [
      2133,
      2134
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2157,
    "end": 2164,
    "range": [
      2157,
      2164
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2164,
    "end": 2165,
    "range": [
      2164,
      2165
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2165,
    "end": 2168,
    "range": [
      2165,
      2168
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2168,
    "end": 2169,
    "range": [
      2168,
      2169
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 2169,
    "end": 2173,
    "range": [
      2169,
      2173
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2173,
    "end": 2174,
    "range": [
      2173,
      2174
    ]
  },
  {
    "type": "Identifier",
    "value": "DisplayNames",
    "start": 2174,
    "end": 2186,
    "range": [
      2174,
      2186
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2186,
    "end": 2187,
    "range": [
      2186,
      2187
    ]
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 2187,
    "end": 2205,
    "range": [
      2187,
      2205
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2205,
    "end": 2206,
    "range": [
      2205,
      2206
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2206,
    "end": 2207,
    "range": [
      2206,
      2207
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2207,
    "end": 2208,
    "range": [
      2207,
      2208
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2208,
    "end": 2209,
    "range": [
      2208,
      2209
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2216,
    "end": 2223,
    "range": [
      2216,
      2223
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2223,
    "end": 2224,
    "range": [
      2223,
      2224
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2224,
    "end": 2227,
    "range": [
      2224,
      2227
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2227,
    "end": 2228,
    "range": [
      2227,
      2228
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 2228,
    "end": 2232,
    "range": [
      2228,
      2232
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2232,
    "end": 2233,
    "range": [
      2232,
      2233
    ]
  },
  {
    "type": "Identifier",
    "value": "DisplayNames",
    "start": 2233,
    "end": 2245,
    "range": [
      2233,
      2245
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2245,
    "end": 2246,
    "range": [
      2245,
      2246
    ]
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 2246,
    "end": 2264,
    "range": [
      2246,
      2264
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2264,
    "end": 2265,
    "range": [
      2264,
      2265
    ]
  },
  {
    "type": "Identifier",
    "value": "localesArg",
    "start": 2265,
    "end": 2275,
    "range": [
      2265,
      2275
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2275,
    "end": 2276,
    "range": [
      2275,
      2276
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2277,
    "end": 2278,
    "range": [
      2277,
      2278
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2278,
    "end": 2279,
    "range": [
      2278,
      2279
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2279,
    "end": 2280,
    "range": [
      2279,
      2280
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2280,
    "end": 2281,
    "range": [
      2280,
      2281
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2281,
    "end": 2282,
    "range": [
      2281,
      2282
    ]
  }
]
```
