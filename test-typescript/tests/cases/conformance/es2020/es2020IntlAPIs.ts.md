__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 127,
  "end": 2305,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 149,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 138,
            "name": "count",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 141,
            "end": 149,
            "value": 26254.39,
            "raw": "26254.39"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 187,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 186,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 161,
            "name": "date",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 164,
            "end": 186,
            "callee": {
              "type": "Identifier",
              "start": 168,
              "end": 172,
              "name": "Date",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 173,
                "end": 185,
                "value": "2012-05-24",
                "raw": "\"2012-05-24\""
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 189,
      "end": 342,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 201,
        "name": "log",
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
          "start": 202,
          "end": 216,
          "name": "locale",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 208,
            "end": 216,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 210,
              "end": 216
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 218,
        "end": 342,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 222,
            "end": 340,
            "expression": {
              "type": "CallExpression",
              "start": 222,
              "end": 339,
              "callee": {
                "type": "MemberExpression",
                "start": 222,
                "end": 233,
                "object": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 229,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 233,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "TemplateLiteral",
                  "start": 239,
                  "end": 335,
                  "expressions": [
                    {
                      "type": "CallExpression",
                      "start": 242,
                      "end": 286,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 242,
                        "end": 280,
                        "object": {
                          "type": "NewExpression",
                          "start": 242,
                          "end": 273,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 246,
                            "end": 265,
                            "object": {
                              "type": "Identifier",
                              "start": 246,
                              "end": 250,
                              "name": "Intl",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 251,
                              "end": 265,
                              "name": "DateTimeFormat",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 266,
                              "end": 272,
                              "name": "locale",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "typeArguments": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 274,
                          "end": 280,
                          "name": "format",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 281,
                          "end": 285,
                          "name": "date",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    {
                      "type": "CallExpression",
                      "start": 290,
                      "end": 333,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 290,
                        "end": 326,
                        "object": {
                          "type": "NewExpression",
                          "start": 290,
                          "end": 319,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 294,
                            "end": 311,
                            "object": {
                              "type": "Identifier",
                              "start": 294,
                              "end": 298,
                              "name": "Intl",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 299,
                              "end": 311,
                              "name": "NumberFormat",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 312,
                              "end": 318,
                              "name": "locale",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "typeArguments": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 320,
                          "end": 326,
                          "name": "format",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 327,
                          "end": 332,
                          "name": "count",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 239,
                      "end": 242,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 286,
                      "end": 290,
                      "value": {
                        "cooked": " ",
                        "raw": " "
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 333,
                      "end": 335,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "tail": true
                    }
                  ]
                }
              ],
              "optional": false,
              "typeArguments": null
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
      "start": 344,
      "end": 357,
      "expression": {
        "type": "CallExpression",
        "start": 344,
        "end": 356,
        "callee": {
          "type": "Identifier",
          "start": 344,
          "end": 347,
          "name": "log",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 348,
            "end": 355,
            "value": "en-US",
            "raw": "\"en-US\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 399,
      "end": 412,
      "expression": {
        "type": "CallExpression",
        "start": 399,
        "end": 411,
        "callee": {
          "type": "Identifier",
          "start": 399,
          "end": 402,
          "name": "log",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 403,
            "end": 410,
            "value": "de-DE",
            "raw": "\"de-DE\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 562,
      "end": 630,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 568,
          "end": 629,
          "id": {
            "type": "Identifier",
            "start": 568,
            "end": 572,
            "name": "rtf1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 575,
            "end": 629,
            "callee": {
              "type": "MemberExpression",
              "start": 579,
              "end": 602,
              "object": {
                "type": "Identifier",
                "start": 579,
                "end": 583,
                "name": "Intl",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 584,
                "end": 602,
                "name": "RelativeTimeFormat",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 603,
                "end": 607,
                "value": "en",
                "raw": "'en'"
              },
              {
                "type": "ObjectExpression",
                "start": 609,
                "end": 628,
                "properties": [
                  {
                    "type": "Property",
                    "start": 611,
                    "end": 626,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 611,
                      "end": 616,
                      "name": "style",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 618,
                      "end": 626,
                      "value": "narrow",
                      "raw": "'narrow'"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 632,
      "end": 671,
      "expression": {
        "type": "CallExpression",
        "start": 632,
        "end": 670,
        "callee": {
          "type": "MemberExpression",
          "start": 632,
          "end": 643,
          "object": {
            "type": "Identifier",
            "start": 632,
            "end": 639,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 640,
            "end": 643,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 644,
            "end": 669,
            "callee": {
              "type": "MemberExpression",
              "start": 644,
              "end": 655,
              "object": {
                "type": "Identifier",
                "start": 644,
                "end": 648,
                "name": "rtf1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 649,
                "end": 655,
                "name": "format",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 656,
                "end": 657,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 659,
                "end": 668,
                "value": "quarter",
                "raw": "'quarter'"
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 705,
      "end": 741,
      "expression": {
        "type": "CallExpression",
        "start": 705,
        "end": 740,
        "callee": {
          "type": "MemberExpression",
          "start": 705,
          "end": 716,
          "object": {
            "type": "Identifier",
            "start": 705,
            "end": 712,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 713,
            "end": 716,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 717,
            "end": 739,
            "callee": {
              "type": "MemberExpression",
              "start": 717,
              "end": 728,
              "object": {
                "type": "Identifier",
                "start": 717,
                "end": 721,
                "name": "rtf1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 722,
                "end": 728,
                "name": "format",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "UnaryExpression",
                "start": 729,
                "end": 731,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 730,
                  "end": 731,
                  "value": 1,
                  "raw": "1"
                }
              },
              {
                "type": "Literal",
                "start": 733,
                "end": 738,
                "value": "day",
                "raw": "'day'"
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 774,
      "end": 842,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 780,
          "end": 841,
          "id": {
            "type": "Identifier",
            "start": 780,
            "end": 784,
            "name": "rtf2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 787,
            "end": 841,
            "callee": {
              "type": "MemberExpression",
              "start": 791,
              "end": 814,
              "object": {
                "type": "Identifier",
                "start": 791,
                "end": 795,
                "name": "Intl",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 796,
                "end": 814,
                "name": "RelativeTimeFormat",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 815,
                "end": 819,
                "value": "es",
                "raw": "'es'"
              },
              {
                "type": "ObjectExpression",
                "start": 821,
                "end": 840,
                "properties": [
                  {
                    "type": "Property",
                    "start": 823,
                    "end": 838,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 823,
                      "end": 830,
                      "name": "numeric",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 832,
                      "end": 838,
                      "value": "auto",
                      "raw": "'auto'"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 844,
      "end": 879,
      "expression": {
        "type": "CallExpression",
        "start": 844,
        "end": 878,
        "callee": {
          "type": "MemberExpression",
          "start": 844,
          "end": 855,
          "object": {
            "type": "Identifier",
            "start": 844,
            "end": 851,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 852,
            "end": 855,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 856,
            "end": 877,
            "callee": {
              "type": "MemberExpression",
              "start": 856,
              "end": 867,
              "object": {
                "type": "Identifier",
                "start": 856,
                "end": 860,
                "name": "rtf2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 861,
                "end": 867,
                "name": "format",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 868,
                "end": 869,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 871,
                "end": 876,
                "value": "day",
                "raw": "'day'"
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1018,
      "end": 1097,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1024,
          "end": 1096,
          "id": {
            "type": "Identifier",
            "start": 1024,
            "end": 1044,
            "name": "regionNamesInEnglish",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1047,
            "end": 1096,
            "callee": {
              "type": "MemberExpression",
              "start": 1051,
              "end": 1068,
              "object": {
                "type": "Identifier",
                "start": 1051,
                "end": 1055,
                "name": "Intl",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1056,
                "end": 1068,
                "name": "DisplayNames",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 1069,
                "end": 1075,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1070,
                    "end": 1074,
                    "value": "en",
                    "raw": "'en'"
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 1077,
                "end": 1095,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1079,
                    "end": 1093,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1079,
                      "end": 1083,
                      "name": "type",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1085,
                      "end": 1093,
                      "value": "region",
                      "raw": "'region'"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1098,
      "end": 1193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1104,
          "end": 1192,
          "id": {
            "type": "Identifier",
            "start": 1104,
            "end": 1135,
            "name": "regionNamesInTraditionalChinese",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1138,
            "end": 1192,
            "callee": {
              "type": "MemberExpression",
              "start": 1142,
              "end": 1159,
              "object": {
                "type": "Identifier",
                "start": 1142,
                "end": 1146,
                "name": "Intl",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1147,
                "end": 1159,
                "name": "DisplayNames",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 1160,
                "end": 1171,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1161,
                    "end": 1170,
                    "value": "zh-Hant",
                    "raw": "'zh-Hant'"
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 1173,
                "end": 1191,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1175,
                    "end": 1189,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1175,
                      "end": 1179,
                      "name": "type",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1181,
                      "end": 1189,
                      "value": "region",
                      "raw": "'region'"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1195,
      "end": 1238,
      "expression": {
        "type": "CallExpression",
        "start": 1195,
        "end": 1237,
        "callee": {
          "type": "MemberExpression",
          "start": 1195,
          "end": 1206,
          "object": {
            "type": "Identifier",
            "start": 1195,
            "end": 1202,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1203,
            "end": 1206,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 1207,
            "end": 1236,
            "callee": {
              "type": "MemberExpression",
              "start": 1207,
              "end": 1230,
              "object": {
                "type": "Identifier",
                "start": 1207,
                "end": 1227,
                "name": "regionNamesInEnglish",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1228,
                "end": 1230,
                "name": "of",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1231,
                "end": 1235,
                "value": "US",
                "raw": "'US'"
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1276,
      "end": 1330,
      "expression": {
        "type": "CallExpression",
        "start": 1276,
        "end": 1329,
        "callee": {
          "type": "MemberExpression",
          "start": 1276,
          "end": 1287,
          "object": {
            "type": "Identifier",
            "start": 1276,
            "end": 1283,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1284,
            "end": 1287,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 1288,
            "end": 1328,
            "callee": {
              "type": "MemberExpression",
              "start": 1288,
              "end": 1322,
              "object": {
                "type": "Identifier",
                "start": 1288,
                "end": 1319,
                "name": "regionNamesInTraditionalChinese",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1320,
                "end": 1322,
                "name": "of",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1323,
                "end": 1327,
                "value": "US",
                "raw": "'US'"
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1357,
      "end": 1409,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1363,
          "end": 1408,
          "id": {
            "type": "Identifier",
            "start": 1363,
            "end": 1371,
            "name": "locales1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1374,
            "end": 1408,
            "elements": [
              {
                "type": "Literal",
                "start": 1375,
                "end": 1380,
                "value": "ban",
                "raw": "'ban'"
              },
              {
                "type": "Literal",
                "start": 1382,
                "end": 1398,
                "value": "id-u-co-pinyin",
                "raw": "'id-u-co-pinyin'"
              },
              {
                "type": "Literal",
                "start": 1400,
                "end": 1407,
                "value": "de-ID",
                "raw": "'de-ID'"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1410,
      "end": 1464,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1416,
          "end": 1463,
          "id": {
            "type": "Identifier",
            "start": 1416,
            "end": 1424,
            "name": "options1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1427,
            "end": 1463,
            "expression": {
              "type": "ObjectExpression",
              "start": 1427,
              "end": 1454,
              "properties": [
                {
                  "type": "Property",
                  "start": 1429,
                  "end": 1452,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1429,
                    "end": 1442,
                    "name": "localeMatcher",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1444,
                    "end": 1452,
                    "value": "lookup",
                    "raw": "'lookup'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1458,
              "end": 1463,
              "typeName": {
                "type": "Identifier",
                "start": 1458,
                "end": 1463,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1465,
      "end": 1546,
      "expression": {
        "type": "CallExpression",
        "start": 1465,
        "end": 1545,
        "callee": {
          "type": "MemberExpression",
          "start": 1465,
          "end": 1476,
          "object": {
            "type": "Identifier",
            "start": 1465,
            "end": 1472,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1473,
            "end": 1476,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 1477,
            "end": 1544,
            "callee": {
              "type": "MemberExpression",
              "start": 1477,
              "end": 1538,
              "object": {
                "type": "CallExpression",
                "start": 1477,
                "end": 1533,
                "callee": {
                  "type": "MemberExpression",
                  "start": 1477,
                  "end": 1513,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1477,
                    "end": 1494,
                    "object": {
                      "type": "Identifier",
                      "start": 1477,
                      "end": 1481,
                      "name": "Intl",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1482,
                      "end": 1494,
                      "name": "DisplayNames",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1495,
                    "end": 1513,
                    "name": "supportedLocalesOf",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1514,
                    "end": 1522,
                    "name": "locales1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1524,
                    "end": 1532,
                    "name": "options1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 1534,
                "end": 1538,
                "name": "join",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1539,
                "end": 1543,
                "value": ", ",
                "raw": "', '"
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1548,
      "end": 1566,
      "expression": {
        "type": "NewExpression",
        "start": 1548,
        "end": 1565,
        "callee": {
          "type": "MemberExpression",
          "start": 1552,
          "end": 1563,
          "object": {
            "type": "Identifier",
            "start": 1552,
            "end": 1556,
            "name": "Intl",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1557,
            "end": 1563,
            "name": "Locale",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1583,
      "end": 1625,
      "expression": {
        "type": "NewExpression",
        "start": 1583,
        "end": 1624,
        "callee": {
          "type": "MemberExpression",
          "start": 1587,
          "end": 1598,
          "object": {
            "type": "Identifier",
            "start": 1587,
            "end": 1591,
            "name": "Intl",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1592,
            "end": 1598,
            "name": "Locale",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "NewExpression",
            "start": 1599,
            "end": 1623,
            "callee": {
              "type": "MemberExpression",
              "start": 1603,
              "end": 1614,
              "object": {
                "type": "Identifier",
                "start": 1603,
                "end": 1607,
                "name": "Intl",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1608,
                "end": 1614,
                "name": "Locale",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1615,
                "end": 1622,
                "value": "en-US",
                "raw": "'en-US'"
              }
            ],
            "typeArguments": null
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1627,
      "end": 1651,
      "expression": {
        "type": "NewExpression",
        "start": 1627,
        "end": 1650,
        "callee": {
          "type": "MemberExpression",
          "start": 1631,
          "end": 1648,
          "object": {
            "type": "Identifier",
            "start": 1631,
            "end": 1635,
            "name": "Intl",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1636,
            "end": 1648,
            "name": "DisplayNames",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1683,
      "end": 1711,
      "expression": {
        "type": "NewExpression",
        "start": 1683,
        "end": 1710,
        "callee": {
          "type": "MemberExpression",
          "start": 1687,
          "end": 1704,
          "object": {
            "type": "Identifier",
            "start": 1687,
            "end": 1691,
            "name": "Intl",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1692,
            "end": 1704,
            "name": "DisplayNames",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1705,
            "end": 1709,
            "value": "en",
            "raw": "'en'"
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1743,
      "end": 1775,
      "expression": {
        "type": "NewExpression",
        "start": 1743,
        "end": 1774,
        "callee": {
          "type": "MemberExpression",
          "start": 1747,
          "end": 1764,
          "object": {
            "type": "Identifier",
            "start": 1747,
            "end": 1751,
            "name": "Intl",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1752,
            "end": 1764,
            "name": "DisplayNames",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1765,
            "end": 1769,
            "value": "en",
            "raw": "'en'"
          },
          {
            "type": "ObjectExpression",
            "start": 1771,
            "end": 1773,
            "properties": []
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1807,
      "end": 1887,
      "expression": {
        "type": "CallExpression",
        "start": 1807,
        "end": 1886,
        "callee": {
          "type": "MemberExpression",
          "start": 1807,
          "end": 1818,
          "object": {
            "type": "Identifier",
            "start": 1807,
            "end": 1814,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1815,
            "end": 1818,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 1819,
            "end": 1885,
            "callee": {
              "type": "MemberExpression",
              "start": 1819,
              "end": 1876,
              "object": {
                "type": "NewExpression",
                "start": 1820,
                "end": 1872,
                "callee": {
                  "type": "MemberExpression",
                  "start": 1824,
                  "end": 1841,
                  "object": {
                    "type": "Identifier",
                    "start": 1824,
                    "end": 1828,
                    "name": "Intl",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1829,
                    "end": 1841,
                    "name": "DisplayNames",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1842,
                    "end": 1851,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "ObjectExpression",
                    "start": 1853,
                    "end": 1871,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1854,
                        "end": 1870,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1854,
                          "end": 1858,
                          "name": "type",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 1860,
                          "end": 1870,
                          "value": "language",
                          "raw": "'language'"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                ],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 1874,
                "end": 1876,
                "name": "of",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1877,
                "end": 1884,
                "value": "en-GB",
                "raw": "'en-GB'"
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1910,
      "end": 1965,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1916,
          "end": 1964,
          "id": {
            "type": "Identifier",
            "start": 1916,
            "end": 1926,
            "name": "localesArg",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1929,
            "end": 1964,
            "elements": [
              {
                "type": "Literal",
                "start": 1930,
                "end": 1937,
                "value": "es-ES",
                "raw": "\"es-ES\""
              },
              {
                "type": "NewExpression",
                "start": 1939,
                "end": 1963,
                "callee": {
                  "type": "MemberExpression",
                  "start": 1943,
                  "end": 1954,
                  "object": {
                    "type": "Identifier",
                    "start": 1943,
                    "end": 1947,
                    "name": "Intl",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1948,
                    "end": 1954,
                    "name": "Locale",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 1955,
                    "end": 1962,
                    "value": "en-US",
                    "raw": "\"en-US\""
                  }
                ],
                "typeArguments": null
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1966,
      "end": 2060,
      "expression": {
        "type": "CallExpression",
        "start": 1966,
        "end": 2059,
        "callee": {
          "type": "MemberExpression",
          "start": 1966,
          "end": 1977,
          "object": {
            "type": "Identifier",
            "start": 1966,
            "end": 1973,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1974,
            "end": 1977,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 1978,
            "end": 2058,
            "object": {
              "type": "CallExpression",
              "start": 1978,
              "end": 2051,
              "callee": {
                "type": "MemberExpression",
                "start": 1978,
                "end": 2049,
                "object": {
                  "type": "NewExpression",
                  "start": 1979,
                  "end": 2032,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1983,
                    "end": 2000,
                    "object": {
                      "type": "Identifier",
                      "start": 1983,
                      "end": 1987,
                      "name": "Intl",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1988,
                      "end": 2000,
                      "name": "DisplayNames",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2001,
                      "end": 2011,
                      "name": "localesArg",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "ObjectExpression",
                      "start": 2013,
                      "end": 2031,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2014,
                          "end": 2030,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2014,
                            "end": 2018,
                            "name": "type",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2020,
                            "end": 2030,
                            "value": "language",
                            "raw": "'language'"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "typeArguments": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2034,
                  "end": 2049,
                  "name": "resolvedOptions",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "property": {
              "type": "Identifier",
              "start": 2052,
              "end": 2058,
              "name": "locale",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2072,
      "end": 2134,
      "expression": {
        "type": "CallExpression",
        "start": 2072,
        "end": 2133,
        "callee": {
          "type": "MemberExpression",
          "start": 2072,
          "end": 2083,
          "object": {
            "type": "Identifier",
            "start": 2072,
            "end": 2079,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2080,
            "end": 2083,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 2084,
            "end": 2132,
            "callee": {
              "type": "MemberExpression",
              "start": 2084,
              "end": 2120,
              "object": {
                "type": "MemberExpression",
                "start": 2084,
                "end": 2101,
                "object": {
                  "type": "Identifier",
                  "start": 2084,
                  "end": 2088,
                  "name": "Intl",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2089,
                  "end": 2101,
                  "name": "DisplayNames",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2102,
                "end": 2120,
                "name": "supportedLocalesOf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 2121,
                "end": 2131,
                "name": "localesArg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2157,
      "end": 2209,
      "expression": {
        "type": "CallExpression",
        "start": 2157,
        "end": 2208,
        "callee": {
          "type": "MemberExpression",
          "start": 2157,
          "end": 2168,
          "object": {
            "type": "Identifier",
            "start": 2157,
            "end": 2164,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2165,
            "end": 2168,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 2169,
            "end": 2207,
            "callee": {
              "type": "MemberExpression",
              "start": 2169,
              "end": 2205,
              "object": {
                "type": "MemberExpression",
                "start": 2169,
                "end": 2186,
                "object": {
                  "type": "Identifier",
                  "start": 2169,
                  "end": 2173,
                  "name": "Intl",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2174,
                  "end": 2186,
                  "name": "DisplayNames",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2187,
                "end": 2205,
                "name": "supportedLocalesOf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2216,
      "end": 2282,
      "expression": {
        "type": "CallExpression",
        "start": 2216,
        "end": 2281,
        "callee": {
          "type": "MemberExpression",
          "start": 2216,
          "end": 2227,
          "object": {
            "type": "Identifier",
            "start": 2216,
            "end": 2223,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2224,
            "end": 2227,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 2228,
            "end": 2280,
            "callee": {
              "type": "MemberExpression",
              "start": 2228,
              "end": 2264,
              "object": {
                "type": "MemberExpression",
                "start": 2228,
                "end": 2245,
                "object": {
                  "type": "Identifier",
                  "start": 2228,
                  "end": 2232,
                  "name": "Intl",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2233,
                  "end": 2245,
                  "name": "DisplayNames",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2246,
                "end": 2264,
                "name": "supportedLocalesOf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 2265,
                "end": 2275,
                "name": "localesArg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ObjectExpression",
                "start": 2277,
                "end": 2279,
                "properties": []
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
