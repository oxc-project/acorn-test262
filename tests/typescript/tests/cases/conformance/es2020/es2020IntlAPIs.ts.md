__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 127,
  "end": 2304,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 150,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 149,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 138,
            "decorators": [],
            "name": "count",
            "optional": false,
            "typeAnnotation": null
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 187,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 186,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 161,
            "decorators": [],
            "name": "date",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 164,
            "end": 186,
            "callee": {
              "type": "Identifier",
              "start": 168,
              "end": 172,
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 173,
                "end": 185,
                "value": "2012-05-24",
                "raw": "\"2012-05-24\""
              }
            ]
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "log",
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
          "start": 202,
          "end": 216,
          "decorators": [],
          "name": "locale",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 208,
            "end": 216,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 210,
              "end": 216
            }
          }
        }
      ],
      "returnType": null,
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
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 233,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TemplateLiteral",
                  "start": 239,
                  "end": 335,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 239,
                      "end": 242,
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 286,
                      "end": 290,
                      "value": {
                        "raw": " ",
                        "cooked": " "
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 333,
                      "end": 335,
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true
                    }
                  ],
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
                              "decorators": [],
                              "name": "Intl",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 251,
                              "end": 265,
                              "decorators": [],
                              "name": "DateTimeFormat",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 266,
                              "end": 272,
                              "decorators": [],
                              "name": "locale",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ]
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 274,
                          "end": 280,
                          "decorators": [],
                          "name": "format",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 281,
                          "end": 285,
                          "decorators": [],
                          "name": "date",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
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
                              "decorators": [],
                              "name": "Intl",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 299,
                              "end": 311,
                              "decorators": [],
                              "name": "NumberFormat",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 312,
                              "end": 318,
                              "decorators": [],
                              "name": "locale",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ]
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 320,
                          "end": 326,
                          "decorators": [],
                          "name": "format",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 327,
                          "end": 332,
                          "decorators": [],
                          "name": "count",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
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
          "decorators": [],
          "name": "log",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 348,
            "end": 355,
            "value": "en-US",
            "raw": "\"en-US\""
          }
        ],
        "optional": false
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
          "decorators": [],
          "name": "log",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 403,
            "end": 410,
            "value": "de-DE",
            "raw": "\"de-DE\""
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 562,
      "end": 630,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 568,
          "end": 629,
          "id": {
            "type": "Identifier",
            "start": 568,
            "end": 572,
            "decorators": [],
            "name": "rtf1",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 584,
                "end": 602,
                "decorators": [],
                "name": "RelativeTimeFormat",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 611,
                      "end": 616,
                      "decorators": [],
                      "name": "style",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 618,
                      "end": 626,
                      "value": "narrow",
                      "raw": "'narrow'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 640,
            "end": 643,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
                "decorators": [],
                "name": "rtf1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 649,
                "end": 655,
                "decorators": [],
                "name": "format",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
            "optional": false
          }
        ],
        "optional": false
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
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 713,
            "end": 716,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
                "decorators": [],
                "name": "rtf1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 722,
                "end": 728,
                "decorators": [],
                "name": "format",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "UnaryExpression",
                "start": 729,
                "end": 731,
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "start": 730,
                  "end": 731,
                  "value": 1,
                  "raw": "1"
                },
                "prefix": true
              },
              {
                "type": "Literal",
                "start": 733,
                "end": 738,
                "value": "day",
                "raw": "'day'"
              }
            ],
            "optional": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 774,
      "end": 842,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 780,
          "end": 841,
          "id": {
            "type": "Identifier",
            "start": 780,
            "end": 784,
            "decorators": [],
            "name": "rtf2",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 796,
                "end": 814,
                "decorators": [],
                "name": "RelativeTimeFormat",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 823,
                      "end": 830,
                      "decorators": [],
                      "name": "numeric",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 832,
                      "end": 838,
                      "value": "auto",
                      "raw": "'auto'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 852,
            "end": 855,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
                "decorators": [],
                "name": "rtf2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 861,
                "end": 867,
                "decorators": [],
                "name": "format",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
            "optional": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1018,
      "end": 1097,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1024,
          "end": 1096,
          "id": {
            "type": "Identifier",
            "start": 1024,
            "end": 1044,
            "decorators": [],
            "name": "regionNamesInEnglish",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1056,
                "end": 1068,
                "decorators": [],
                "name": "DisplayNames",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1079,
                      "end": 1083,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1085,
                      "end": 1093,
                      "value": "region",
                      "raw": "'region'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1098,
      "end": 1193,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1104,
          "end": 1192,
          "id": {
            "type": "Identifier",
            "start": 1104,
            "end": 1135,
            "decorators": [],
            "name": "regionNamesInTraditionalChinese",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1147,
                "end": 1159,
                "decorators": [],
                "name": "DisplayNames",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1175,
                      "end": 1179,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1181,
                      "end": 1189,
                      "value": "region",
                      "raw": "'region'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1203,
            "end": 1206,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
                "decorators": [],
                "name": "regionNamesInEnglish",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1228,
                "end": 1230,
                "decorators": [],
                "name": "of",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1231,
                "end": 1235,
                "value": "US",
                "raw": "'US'"
              }
            ],
            "optional": false
          }
        ],
        "optional": false
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
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1284,
            "end": 1287,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
                "decorators": [],
                "name": "regionNamesInTraditionalChinese",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1320,
                "end": 1322,
                "decorators": [],
                "name": "of",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1323,
                "end": 1327,
                "value": "US",
                "raw": "'US'"
              }
            ],
            "optional": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1357,
      "end": 1409,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1363,
          "end": 1408,
          "id": {
            "type": "Identifier",
            "start": 1363,
            "end": 1371,
            "decorators": [],
            "name": "locales1",
            "optional": false,
            "typeAnnotation": null
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1410,
      "end": 1464,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1416,
          "end": 1463,
          "id": {
            "type": "Identifier",
            "start": 1416,
            "end": 1424,
            "decorators": [],
            "name": "options1",
            "optional": false,
            "typeAnnotation": null
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1429,
                    "end": 1442,
                    "decorators": [],
                    "name": "localeMatcher",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1444,
                    "end": 1452,
                    "value": "lookup",
                    "raw": "'lookup'"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
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
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1473,
            "end": 1476,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
                      "decorators": [],
                      "name": "Intl",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1482,
                      "end": 1494,
                      "decorators": [],
                      "name": "DisplayNames",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1495,
                    "end": 1513,
                    "decorators": [],
                    "name": "supportedLocalesOf",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1514,
                    "end": 1522,
                    "decorators": [],
                    "name": "locales1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1524,
                    "end": 1532,
                    "decorators": [],
                    "name": "options1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1534,
                "end": 1538,
                "decorators": [],
                "name": "join",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1539,
                "end": 1543,
                "value": ", ",
                "raw": "', '"
              }
            ],
            "optional": false
          }
        ],
        "optional": false
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
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1557,
            "end": 1563,
            "decorators": [],
            "name": "Locale",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": []
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
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1592,
            "end": 1598,
            "decorators": [],
            "name": "Locale",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1608,
                "end": 1614,
                "decorators": [],
                "name": "Locale",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1615,
                "end": 1622,
                "value": "en-US",
                "raw": "'en-US'"
              }
            ]
          }
        ]
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
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1636,
            "end": 1648,
            "decorators": [],
            "name": "DisplayNames",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": []
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
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1692,
            "end": 1704,
            "decorators": [],
            "name": "DisplayNames",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1705,
            "end": 1709,
            "value": "en",
            "raw": "'en'"
          }
        ]
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
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1752,
            "end": 1764,
            "decorators": [],
            "name": "DisplayNames",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
        ]
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
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1815,
            "end": 1818,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1829,
                    "end": 1841,
                    "decorators": [],
                    "name": "DisplayNames",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1842,
                    "end": 1851,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1854,
                          "end": 1858,
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 1860,
                          "end": 1870,
                          "value": "language",
                          "raw": "'language'"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 1874,
                "end": 1876,
                "decorators": [],
                "name": "of",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1877,
                "end": 1884,
                "value": "en-GB",
                "raw": "'en-GB'"
              }
            ],
            "optional": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1910,
      "end": 1965,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1916,
          "end": 1964,
          "id": {
            "type": "Identifier",
            "start": 1916,
            "end": 1926,
            "decorators": [],
            "name": "localesArg",
            "optional": false,
            "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1948,
                    "end": 1954,
                    "decorators": [],
                    "name": "Locale",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 1955,
                    "end": 1962,
                    "value": "en-US",
                    "raw": "\"en-US\""
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1974,
            "end": 1977,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
                      "decorators": [],
                      "name": "Intl",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1988,
                      "end": 2000,
                      "decorators": [],
                      "name": "DisplayNames",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2001,
                      "end": 2011,
                      "decorators": [],
                      "name": "localesArg",
                      "optional": false,
                      "typeAnnotation": null
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2014,
                            "end": 2018,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2020,
                            "end": 2030,
                            "value": "language",
                            "raw": "'language'"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
                  ]
                },
                "property": {
                  "type": "Identifier",
                  "start": 2034,
                  "end": 2049,
                  "decorators": [],
                  "name": "resolvedOptions",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2052,
              "end": 2058,
              "decorators": [],
              "name": "locale",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        ],
        "optional": false
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
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 2080,
            "end": 2083,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
                  "decorators": [],
                  "name": "Intl",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2089,
                  "end": 2101,
                  "decorators": [],
                  "name": "DisplayNames",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 2102,
                "end": 2120,
                "decorators": [],
                "name": "supportedLocalesOf",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2121,
                "end": 2131,
                "decorators": [],
                "name": "localesArg",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          }
        ],
        "optional": false
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
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 2165,
            "end": 2168,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
                  "decorators": [],
                  "name": "Intl",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2174,
                  "end": 2186,
                  "decorators": [],
                  "name": "DisplayNames",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 2187,
                "end": 2205,
                "decorators": [],
                "name": "supportedLocalesOf",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          }
        ],
        "optional": false
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
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 2224,
            "end": 2227,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
                  "decorators": [],
                  "name": "Intl",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2233,
                  "end": 2245,
                  "decorators": [],
                  "name": "DisplayNames",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 2246,
                "end": 2264,
                "decorators": [],
                "name": "supportedLocalesOf",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2265,
                "end": 2275,
                "decorators": [],
                "name": "localesArg",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ObjectExpression",
                "start": 2277,
                "end": 2279,
                "properties": []
              }
            ],
            "optional": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
