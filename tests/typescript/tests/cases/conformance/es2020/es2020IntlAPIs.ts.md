__ESTREE_TEST__:PASS:
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
