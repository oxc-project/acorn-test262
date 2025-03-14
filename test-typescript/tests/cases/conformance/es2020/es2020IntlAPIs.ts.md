es2020IntlAPIs.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 138,
            "decorators": [],
            "name": "count",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 141,
            "end": 149,
            "raw": "26254.39",
            "value": 26254.39
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 161,
            "decorators": [],
            "name": "date",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 164,
            "end": 186,
            "arguments": [
              {
                "type": "Literal",
                "start": 173,
                "end": 185,
                "raw": "\"2012-05-24\"",
                "value": "2012-05-24"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 168,
              "end": 172,
              "decorators": [],
              "name": "Date",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 189,
      "end": 342,
      "async": false,
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 281,
                          "end": 285,
                          "decorators": [],
                          "name": "date",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 242,
                        "end": 280,
                        "computed": false,
                        "object": {
                          "type": "NewExpression",
                          "start": 242,
                          "end": 273,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 266,
                              "end": 272,
                              "decorators": [],
                              "name": "locale",
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 246,
                            "end": 265,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 246,
                              "end": 250,
                              "decorators": [],
                              "name": "Intl",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 251,
                              "end": 265,
                              "decorators": [],
                              "name": "DateTimeFormat",
                              "optional": false
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 274,
                          "end": 280,
                          "decorators": [],
                          "name": "format",
                          "optional": false
                        }
                      },
                      "optional": false
                    },
                    {
                      "type": "CallExpression",
                      "start": 290,
                      "end": 333,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 327,
                          "end": 332,
                          "decorators": [],
                          "name": "count",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 290,
                        "end": 326,
                        "computed": false,
                        "object": {
                          "type": "NewExpression",
                          "start": 290,
                          "end": 319,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 312,
                              "end": 318,
                              "decorators": [],
                              "name": "locale",
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 294,
                            "end": 311,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 294,
                              "end": 298,
                              "decorators": [],
                              "name": "Intl",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 299,
                              "end": 311,
                              "decorators": [],
                              "name": "NumberFormat",
                              "optional": false
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 320,
                          "end": 326,
                          "decorators": [],
                          "name": "format",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 239,
                      "end": 242,
                      "tail": false,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 286,
                      "end": 290,
                      "tail": false,
                      "value": {
                        "cooked": " ",
                        "raw": " "
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 333,
                      "end": 335,
                      "tail": true,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 222,
                "end": 233,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 229,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 233,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 201,
        "decorators": [],
        "name": "log",
        "optional": false
      },
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
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 344,
      "end": 357,
      "expression": {
        "type": "CallExpression",
        "start": 344,
        "end": 356,
        "arguments": [
          {
            "type": "Literal",
            "start": 348,
            "end": 355,
            "raw": "\"en-US\"",
            "value": "en-US"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 344,
          "end": 347,
          "decorators": [],
          "name": "log",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 399,
      "end": 412,
      "expression": {
        "type": "CallExpression",
        "start": 399,
        "end": 411,
        "arguments": [
          {
            "type": "Literal",
            "start": 403,
            "end": 410,
            "raw": "\"de-DE\"",
            "value": "de-DE"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 399,
          "end": 402,
          "decorators": [],
          "name": "log",
          "optional": false
        },
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 568,
            "end": 572,
            "decorators": [],
            "name": "rtf1",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 575,
            "end": 629,
            "arguments": [
              {
                "type": "Literal",
                "start": 603,
                "end": 607,
                "raw": "'en'",
                "value": "en"
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 611,
                      "end": 616,
                      "decorators": [],
                      "name": "style",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 618,
                      "end": 626,
                      "raw": "'narrow'",
                      "value": "narrow"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 579,
              "end": 602,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 579,
                "end": 583,
                "decorators": [],
                "name": "Intl",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 584,
                "end": 602,
                "decorators": [],
                "name": "RelativeTimeFormat",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 632,
      "end": 671,
      "expression": {
        "type": "CallExpression",
        "start": 632,
        "end": 670,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 644,
            "end": 669,
            "arguments": [
              {
                "type": "Literal",
                "start": 656,
                "end": 657,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 659,
                "end": 668,
                "raw": "'quarter'",
                "value": "quarter"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 644,
              "end": 655,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 644,
                "end": 648,
                "decorators": [],
                "name": "rtf1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 649,
                "end": 655,
                "decorators": [],
                "name": "format",
                "optional": false
              }
            },
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 632,
          "end": 643,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 632,
            "end": 639,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 640,
            "end": 643,
            "decorators": [],
            "name": "log",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 705,
      "end": 741,
      "expression": {
        "type": "CallExpression",
        "start": 705,
        "end": 740,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 717,
            "end": 739,
            "arguments": [
              {
                "type": "UnaryExpression",
                "start": 729,
                "end": 731,
                "argument": {
                  "type": "Literal",
                  "start": 730,
                  "end": 731,
                  "raw": "1",
                  "value": 1
                },
                "operator": "-",
                "prefix": true
              },
              {
                "type": "Literal",
                "start": 733,
                "end": 738,
                "raw": "'day'",
                "value": "day"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 717,
              "end": 728,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 717,
                "end": 721,
                "decorators": [],
                "name": "rtf1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 722,
                "end": 728,
                "decorators": [],
                "name": "format",
                "optional": false
              }
            },
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 705,
          "end": 716,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 705,
            "end": 712,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 713,
            "end": 716,
            "decorators": [],
            "name": "log",
            "optional": false
          }
        },
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 780,
            "end": 784,
            "decorators": [],
            "name": "rtf2",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 787,
            "end": 841,
            "arguments": [
              {
                "type": "Literal",
                "start": 815,
                "end": 819,
                "raw": "'es'",
                "value": "es"
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 823,
                      "end": 830,
                      "decorators": [],
                      "name": "numeric",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 832,
                      "end": 838,
                      "raw": "'auto'",
                      "value": "auto"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 791,
              "end": 814,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 791,
                "end": 795,
                "decorators": [],
                "name": "Intl",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 796,
                "end": 814,
                "decorators": [],
                "name": "RelativeTimeFormat",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 844,
      "end": 879,
      "expression": {
        "type": "CallExpression",
        "start": 844,
        "end": 878,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 856,
            "end": 877,
            "arguments": [
              {
                "type": "Literal",
                "start": 868,
                "end": 869,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 871,
                "end": 876,
                "raw": "'day'",
                "value": "day"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 856,
              "end": 867,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 856,
                "end": 860,
                "decorators": [],
                "name": "rtf2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 861,
                "end": 867,
                "decorators": [],
                "name": "format",
                "optional": false
              }
            },
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 844,
          "end": 855,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 844,
            "end": 851,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 852,
            "end": 855,
            "decorators": [],
            "name": "log",
            "optional": false
          }
        },
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1024,
            "end": 1044,
            "decorators": [],
            "name": "regionNamesInEnglish",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1047,
            "end": 1096,
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
                    "raw": "'en'",
                    "value": "en"
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1079,
                      "end": 1083,
                      "decorators": [],
                      "name": "type",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 1085,
                      "end": 1093,
                      "raw": "'region'",
                      "value": "region"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1051,
              "end": 1068,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1051,
                "end": 1055,
                "decorators": [],
                "name": "Intl",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1056,
                "end": 1068,
                "decorators": [],
                "name": "DisplayNames",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1104,
            "end": 1135,
            "decorators": [],
            "name": "regionNamesInTraditionalChinese",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1138,
            "end": 1192,
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
                    "raw": "'zh-Hant'",
                    "value": "zh-Hant"
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1175,
                      "end": 1179,
                      "decorators": [],
                      "name": "type",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 1181,
                      "end": 1189,
                      "raw": "'region'",
                      "value": "region"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1142,
              "end": 1159,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1142,
                "end": 1146,
                "decorators": [],
                "name": "Intl",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1147,
                "end": 1159,
                "decorators": [],
                "name": "DisplayNames",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 1195,
      "end": 1238,
      "expression": {
        "type": "CallExpression",
        "start": 1195,
        "end": 1237,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 1207,
            "end": 1236,
            "arguments": [
              {
                "type": "Literal",
                "start": 1231,
                "end": 1235,
                "raw": "'US'",
                "value": "US"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1207,
              "end": 1230,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1207,
                "end": 1227,
                "decorators": [],
                "name": "regionNamesInEnglish",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1228,
                "end": 1230,
                "decorators": [],
                "name": "of",
                "optional": false
              }
            },
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1195,
          "end": 1206,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1195,
            "end": 1202,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1203,
            "end": 1206,
            "decorators": [],
            "name": "log",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1276,
      "end": 1330,
      "expression": {
        "type": "CallExpression",
        "start": 1276,
        "end": 1329,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 1288,
            "end": 1328,
            "arguments": [
              {
                "type": "Literal",
                "start": 1323,
                "end": 1327,
                "raw": "'US'",
                "value": "US"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1288,
              "end": 1322,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1288,
                "end": 1319,
                "decorators": [],
                "name": "regionNamesInTraditionalChinese",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1320,
                "end": 1322,
                "decorators": [],
                "name": "of",
                "optional": false
              }
            },
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1276,
          "end": 1287,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1276,
            "end": 1283,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1284,
            "end": 1287,
            "decorators": [],
            "name": "log",
            "optional": false
          }
        },
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1363,
            "end": 1371,
            "decorators": [],
            "name": "locales1",
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
                "raw": "'ban'",
                "value": "ban"
              },
              {
                "type": "Literal",
                "start": 1382,
                "end": 1398,
                "raw": "'id-u-co-pinyin'",
                "value": "id-u-co-pinyin"
              },
              {
                "type": "Literal",
                "start": 1400,
                "end": 1407,
                "raw": "'de-ID'",
                "value": "de-ID"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1416,
            "end": 1424,
            "decorators": [],
            "name": "options1",
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1429,
                    "end": 1442,
                    "decorators": [],
                    "name": "localeMatcher",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1444,
                    "end": 1452,
                    "raw": "'lookup'",
                    "value": "lookup"
                  }
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
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 1465,
      "end": 1546,
      "expression": {
        "type": "CallExpression",
        "start": 1465,
        "end": 1545,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 1477,
            "end": 1544,
            "arguments": [
              {
                "type": "Literal",
                "start": 1539,
                "end": 1543,
                "raw": "', '",
                "value": ", "
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1477,
              "end": 1538,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 1477,
                "end": 1533,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1514,
                    "end": 1522,
                    "decorators": [],
                    "name": "locales1",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1524,
                    "end": 1532,
                    "decorators": [],
                    "name": "options1",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 1477,
                  "end": 1513,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1477,
                    "end": 1494,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1477,
                      "end": 1481,
                      "decorators": [],
                      "name": "Intl",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1482,
                      "end": 1494,
                      "decorators": [],
                      "name": "DisplayNames",
                      "optional": false
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1495,
                    "end": 1513,
                    "decorators": [],
                    "name": "supportedLocalesOf",
                    "optional": false
                  }
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1534,
                "end": 1538,
                "decorators": [],
                "name": "join",
                "optional": false
              }
            },
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1465,
          "end": 1476,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1465,
            "end": 1472,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1473,
            "end": 1476,
            "decorators": [],
            "name": "log",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1548,
      "end": 1566,
      "expression": {
        "type": "NewExpression",
        "start": 1548,
        "end": 1565,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 1552,
          "end": 1563,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1552,
            "end": 1556,
            "decorators": [],
            "name": "Intl",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1557,
            "end": 1563,
            "decorators": [],
            "name": "Locale",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1583,
      "end": 1625,
      "expression": {
        "type": "NewExpression",
        "start": 1583,
        "end": 1624,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 1599,
            "end": 1623,
            "arguments": [
              {
                "type": "Literal",
                "start": 1615,
                "end": 1622,
                "raw": "'en-US'",
                "value": "en-US"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1603,
              "end": 1614,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1603,
                "end": 1607,
                "decorators": [],
                "name": "Intl",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1608,
                "end": 1614,
                "decorators": [],
                "name": "Locale",
                "optional": false
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1587,
          "end": 1598,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1587,
            "end": 1591,
            "decorators": [],
            "name": "Intl",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1592,
            "end": 1598,
            "decorators": [],
            "name": "Locale",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1627,
      "end": 1651,
      "expression": {
        "type": "NewExpression",
        "start": 1627,
        "end": 1650,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 1631,
          "end": 1648,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1631,
            "end": 1635,
            "decorators": [],
            "name": "Intl",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1636,
            "end": 1648,
            "decorators": [],
            "name": "DisplayNames",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1683,
      "end": 1711,
      "expression": {
        "type": "NewExpression",
        "start": 1683,
        "end": 1710,
        "arguments": [
          {
            "type": "Literal",
            "start": 1705,
            "end": 1709,
            "raw": "'en'",
            "value": "en"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1687,
          "end": 1704,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1687,
            "end": 1691,
            "decorators": [],
            "name": "Intl",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1692,
            "end": 1704,
            "decorators": [],
            "name": "DisplayNames",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1743,
      "end": 1775,
      "expression": {
        "type": "NewExpression",
        "start": 1743,
        "end": 1774,
        "arguments": [
          {
            "type": "Literal",
            "start": 1765,
            "end": 1769,
            "raw": "'en'",
            "value": "en"
          },
          {
            "type": "ObjectExpression",
            "start": 1771,
            "end": 1773,
            "properties": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1747,
          "end": 1764,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1747,
            "end": 1751,
            "decorators": [],
            "name": "Intl",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1752,
            "end": 1764,
            "decorators": [],
            "name": "DisplayNames",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1807,
      "end": 1887,
      "expression": {
        "type": "CallExpression",
        "start": 1807,
        "end": 1886,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 1819,
            "end": 1885,
            "arguments": [
              {
                "type": "Literal",
                "start": 1877,
                "end": 1884,
                "raw": "'en-GB'",
                "value": "en-GB"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1819,
              "end": 1876,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 1820,
                "end": 1872,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1842,
                    "end": 1851,
                    "decorators": [],
                    "name": "undefined",
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
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1854,
                          "end": 1858,
                          "decorators": [],
                          "name": "type",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 1860,
                          "end": 1870,
                          "raw": "'language'",
                          "value": "language"
                        }
                      }
                    ]
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 1824,
                  "end": 1841,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1824,
                    "end": 1828,
                    "decorators": [],
                    "name": "Intl",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1829,
                    "end": 1841,
                    "decorators": [],
                    "name": "DisplayNames",
                    "optional": false
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1874,
                "end": 1876,
                "decorators": [],
                "name": "of",
                "optional": false
              }
            },
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1807,
          "end": 1818,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1807,
            "end": 1814,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1815,
            "end": 1818,
            "decorators": [],
            "name": "log",
            "optional": false
          }
        },
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1916,
            "end": 1926,
            "decorators": [],
            "name": "localesArg",
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
                "raw": "\"es-ES\"",
                "value": "es-ES"
              },
              {
                "type": "NewExpression",
                "start": 1939,
                "end": 1963,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 1955,
                    "end": 1962,
                    "raw": "\"en-US\"",
                    "value": "en-US"
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 1943,
                  "end": 1954,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1943,
                    "end": 1947,
                    "decorators": [],
                    "name": "Intl",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1948,
                    "end": 1954,
                    "decorators": [],
                    "name": "Locale",
                    "optional": false
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 1966,
      "end": 2060,
      "expression": {
        "type": "CallExpression",
        "start": 1966,
        "end": 2059,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 1978,
            "end": 2058,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 1978,
              "end": 2051,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 1978,
                "end": 2049,
                "computed": false,
                "object": {
                  "type": "NewExpression",
                  "start": 1979,
                  "end": 2032,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2001,
                      "end": 2011,
                      "decorators": [],
                      "name": "localesArg",
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
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2014,
                            "end": 2018,
                            "decorators": [],
                            "name": "type",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 2020,
                            "end": 2030,
                            "raw": "'language'",
                            "value": "language"
                          }
                        }
                      ]
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1983,
                    "end": 2000,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1983,
                      "end": 1987,
                      "decorators": [],
                      "name": "Intl",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1988,
                      "end": 2000,
                      "decorators": [],
                      "name": "DisplayNames",
                      "optional": false
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2034,
                  "end": 2049,
                  "decorators": [],
                  "name": "resolvedOptions",
                  "optional": false
                }
              },
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2052,
              "end": 2058,
              "decorators": [],
              "name": "locale",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1966,
          "end": 1977,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1966,
            "end": 1973,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1974,
            "end": 1977,
            "decorators": [],
            "name": "log",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2072,
      "end": 2134,
      "expression": {
        "type": "CallExpression",
        "start": 2072,
        "end": 2133,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 2084,
            "end": 2132,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2121,
                "end": 2131,
                "decorators": [],
                "name": "localesArg",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2084,
              "end": 2120,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 2084,
                "end": 2101,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2084,
                  "end": 2088,
                  "decorators": [],
                  "name": "Intl",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2089,
                  "end": 2101,
                  "decorators": [],
                  "name": "DisplayNames",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2102,
                "end": 2120,
                "decorators": [],
                "name": "supportedLocalesOf",
                "optional": false
              }
            },
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 2072,
          "end": 2083,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 2072,
            "end": 2079,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2080,
            "end": 2083,
            "decorators": [],
            "name": "log",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2157,
      "end": 2209,
      "expression": {
        "type": "CallExpression",
        "start": 2157,
        "end": 2208,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 2169,
            "end": 2207,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 2169,
              "end": 2205,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 2169,
                "end": 2186,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2169,
                  "end": 2173,
                  "decorators": [],
                  "name": "Intl",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2174,
                  "end": 2186,
                  "decorators": [],
                  "name": "DisplayNames",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2187,
                "end": 2205,
                "decorators": [],
                "name": "supportedLocalesOf",
                "optional": false
              }
            },
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 2157,
          "end": 2168,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 2157,
            "end": 2164,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2165,
            "end": 2168,
            "decorators": [],
            "name": "log",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2216,
      "end": 2282,
      "expression": {
        "type": "CallExpression",
        "start": 2216,
        "end": 2281,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 2228,
            "end": 2280,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2265,
                "end": 2275,
                "decorators": [],
                "name": "localesArg",
                "optional": false
              },
              {
                "type": "ObjectExpression",
                "start": 2277,
                "end": 2279,
                "properties": []
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2228,
              "end": 2264,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 2228,
                "end": 2245,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2228,
                  "end": 2232,
                  "decorators": [],
                  "name": "Intl",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2233,
                  "end": 2245,
                  "decorators": [],
                  "name": "DisplayNames",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2246,
                "end": 2264,
                "decorators": [],
                "name": "supportedLocalesOf",
                "optional": false
              }
            },
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 2216,
          "end": 2227,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 2216,
            "end": 2223,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2224,
            "end": 2227,
            "decorators": [],
            "name": "log",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
