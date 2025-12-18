__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 231,
                "end": 234
              },
              "start": 229,
              "end": 234
            },
            "start": 222,
            "end": 234
          },
          "init": null,
          "definite": false,
          "start": 222,
          "end": 234
        }
      ],
      "declare": true,
      "start": 210,
      "end": 235
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ts",
        "optional": false,
        "typeAnnotation": null,
        "start": 244,
        "end": 246
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "typescript",
          "raw": "\"typescript\"",
          "start": 257,
          "end": 269
        },
        "start": 249,
        "end": 270
      },
      "importKind": "value",
      "start": 237,
      "end": 271
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "watchMain",
        "optional": false,
        "typeAnnotation": null,
        "start": 282,
        "end": 291
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "configPath",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 306,
                  "end": 316
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 319,
                      "end": 321
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "findConfigFile",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 322,
                      "end": 336
                    },
                    "optional": false,
                    "computed": false,
                    "start": 319,
                    "end": 336
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "./",
                      "raw": "\"./\"",
                      "start": 352,
                      "end": 356
                    },
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 358,
                          "end": 360
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "sys",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 361,
                          "end": 364
                        },
                        "optional": false,
                        "computed": false,
                        "start": 358,
                        "end": 364
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fileExists",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 365,
                        "end": 375
                      },
                      "optional": false,
                      "computed": false,
                      "start": 358,
                      "end": 375
                    },
                    {
                      "type": "Literal",
                      "value": "tsconfig.json",
                      "raw": "\"tsconfig.json\"",
                      "start": 377,
                      "end": 392
                    }
                  ],
                  "optional": false,
                  "start": 319,
                  "end": 393
                },
                "definite": false,
                "start": 306,
                "end": 393
              }
            ],
            "declare": false,
            "start": 300,
            "end": 394
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "configPath",
                "optional": false,
                "typeAnnotation": null,
                "start": 404,
                "end": 414
              },
              "prefix": true,
              "start": 403,
              "end": 414
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 436,
                      "end": 441
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Could not find a valid 'tsconfig.json'.",
                        "raw": "\"Could not find a valid 'tsconfig.json'.\"",
                        "start": 442,
                        "end": 483
                      }
                    ],
                    "start": 432,
                    "end": 484
                  },
                  "start": 426,
                  "end": 485
                }
              ],
              "start": 416,
              "end": 491
            },
            "alternate": null,
            "start": 399,
            "end": 491
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
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1477,
                  "end": 1481
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1484,
                      "end": 1486
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "createWatchCompilerHost",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1487,
                      "end": 1510
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1484,
                    "end": 1510
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "configPath",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1511,
                      "end": 1521
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 1523,
                      "end": 1525
                    },
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ts",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1527,
                        "end": 1529
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1530,
                        "end": 1533
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1527,
                      "end": 1533
                    }
                  ],
                  "optional": false,
                  "start": 1484,
                  "end": 1534
                },
                "definite": false,
                "start": 1477,
                "end": 1534
              }
            ],
            "declare": false,
            "start": 1471,
            "end": 1535
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
                  "name": "origCreateProgram",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1753,
                  "end": 1770
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1773,
                    "end": 1777
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "createProgram",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1778,
                    "end": 1791
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1773,
                  "end": 1791
                },
                "definite": false,
                "start": 1753,
                "end": 1791
              }
            ],
            "declare": false,
            "start": 1747,
            "end": 1792
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1797,
                  "end": 1801
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "createProgram",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1802,
                  "end": 1815
                },
                "optional": false,
                "computed": false,
                "start": 1797,
                "end": 1815
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rootNames",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1819,
                    "end": 1828
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1830,
                    "end": 1837
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1839,
                    "end": 1843
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "oldProgram",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1845,
                    "end": 1855
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
                            "start": 1870,
                            "end": 1877
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1878,
                            "end": 1881
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1870,
                          "end": 1881
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "** We're about to create the program! **",
                            "raw": "\"** We're about to create the program! **\"",
                            "start": 1882,
                            "end": 1924
                          }
                        ],
                        "optional": false,
                        "start": 1870,
                        "end": 1925
                      },
                      "directive": null,
                      "start": 1870,
                      "end": 1926
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "origCreateProgram",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1942,
                          "end": 1959
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rootNames",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1960,
                            "end": 1969
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1971,
                            "end": 1978
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "host",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1980,
                            "end": 1984
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "oldProgram",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1986,
                            "end": 1996
                          }
                        ],
                        "optional": false,
                        "start": 1942,
                        "end": 1997
                      },
                      "start": 1935,
                      "end": 1998
                    }
                  ],
                  "start": 1860,
                  "end": 2004
                },
                "id": null,
                "generator": false,
                "start": 1818,
                "end": 2004
              },
              "start": 1797,
              "end": 2004
            },
            "directive": null,
            "start": 1797,
            "end": 2004
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
                  "name": "origPostProgramCreate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2015,
                  "end": 2036
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2039,
                    "end": 2043
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "afterProgramCreate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2044,
                    "end": 2062
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2039,
                  "end": 2062
                },
                "definite": false,
                "start": 2015,
                "end": 2062
              }
            ],
            "declare": false,
            "start": 2009,
            "end": 2063
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2069,
                  "end": 2073
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "afterProgramCreate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2074,
                  "end": 2092
                },
                "optional": false,
                "computed": false,
                "start": 2069,
                "end": 2092
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "program",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2095,
                    "end": 2102
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
                            "start": 2116,
                            "end": 2123
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2124,
                            "end": 2127
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2116,
                          "end": 2127
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "** We finished making the program! **",
                            "raw": "\"** We finished making the program! **\"",
                            "start": 2128,
                            "end": 2167
                          }
                        ],
                        "optional": false,
                        "start": 2116,
                        "end": 2168
                      },
                      "directive": null,
                      "start": 2116,
                      "end": 2169
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "TSNonNullExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "origPostProgramCreate",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2178,
                            "end": 2199
                          },
                          "start": 2178,
                          "end": 2200
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "program",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2201,
                            "end": 2208
                          }
                        ],
                        "optional": false,
                        "start": 2178,
                        "end": 2209
                      },
                      "directive": null,
                      "start": 2178,
                      "end": 2210
                    }
                  ],
                  "start": 2106,
                  "end": 2216
                },
                "id": null,
                "generator": false,
                "start": 2095,
                "end": 2216
              },
              "start": 2069,
              "end": 2216
            },
            "directive": null,
            "start": 2069,
            "end": 2217
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
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2329,
                  "end": 2331
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "createWatchProgram",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2332,
                  "end": 2350
                },
                "optional": false,
                "computed": false,
                "start": 2329,
                "end": 2350
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2351,
                  "end": 2355
                }
              ],
              "optional": false,
              "start": 2329,
              "end": 2356
            },
            "directive": null,
            "start": 2329,
            "end": 2357
          }
        ],
        "start": 294,
        "end": 2359
      },
      "expression": false,
      "start": 273,
      "end": 2359
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "watchMain",
          "optional": false,
          "typeAnnotation": null,
          "start": 2361,
          "end": 2370
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2361,
        "end": 2372
      },
      "directive": null,
      "start": 2361,
      "end": 2373
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 210,
  "end": 2373
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 210,
    "end": 217,
    "range": [
      210,
      217
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 218,
    "end": 221,
    "range": [
      218,
      221
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
    "value": ":",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 231,
    "end": 234,
    "range": [
      231,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 237,
    "end": 243,
    "range": [
      237,
      243
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 244,
    "end": 246,
    "range": [
      244,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 249,
    "end": 256,
    "range": [
      249,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "String",
    "value": "\"typescript\"",
    "start": 257,
    "end": 269,
    "range": [
      257,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 273,
    "end": 281,
    "range": [
      273,
      281
    ]
  },
  {
    "type": "Identifier",
    "value": "watchMain",
    "start": 282,
    "end": 291,
    "range": [
      282,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 300,
    "end": 305,
    "range": [
      300,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "configPath",
    "start": 306,
    "end": 316,
    "range": [
      306,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 319,
    "end": 321,
    "range": [
      319,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "findConfigFile",
    "start": 322,
    "end": 336,
    "range": [
      322,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "String",
    "value": "\"./\"",
    "start": 352,
    "end": 356,
    "range": [
      352,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 358,
    "end": 360,
    "range": [
      358,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Identifier",
    "value": "sys",
    "start": 361,
    "end": 364,
    "range": [
      361,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Identifier",
    "value": "fileExists",
    "start": 365,
    "end": 375,
    "range": [
      365,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "String",
    "value": "\"tsconfig.json\"",
    "start": 377,
    "end": 392,
    "range": [
      377,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 399,
    "end": 401,
    "range": [
      399,
      401
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
    "type": "Punctuator",
    "value": "!",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "configPath",
    "start": 404,
    "end": 414,
    "range": [
      404,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 426,
    "end": 431,
    "range": [
      426,
      431
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 432,
    "end": 435,
    "range": [
      432,
      435
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 436,
    "end": 441,
    "range": [
      436,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "String",
    "value": "\"Could not find a valid 'tsconfig.json'.\"",
    "start": 442,
    "end": 483,
    "range": [
      442,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1471,
    "end": 1476,
    "range": [
      1471,
      1476
    ]
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 1477,
    "end": 1481,
    "range": [
      1477,
      1481
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1482,
    "end": 1483,
    "range": [
      1482,
      1483
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1484,
    "end": 1486,
    "range": [
      1484,
      1486
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1486,
    "end": 1487,
    "range": [
      1486,
      1487
    ]
  },
  {
    "type": "Identifier",
    "value": "createWatchCompilerHost",
    "start": 1487,
    "end": 1510,
    "range": [
      1487,
      1510
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1510,
    "end": 1511,
    "range": [
      1510,
      1511
    ]
  },
  {
    "type": "Identifier",
    "value": "configPath",
    "start": 1511,
    "end": 1521,
    "range": [
      1511,
      1521
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1521,
    "end": 1522,
    "range": [
      1521,
      1522
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1523,
    "end": 1524,
    "range": [
      1523,
      1524
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1524,
    "end": 1525,
    "range": [
      1524,
      1525
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1525,
    "end": 1526,
    "range": [
      1525,
      1526
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1527,
    "end": 1529,
    "range": [
      1527,
      1529
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1529,
    "end": 1530,
    "range": [
      1529,
      1530
    ]
  },
  {
    "type": "Identifier",
    "value": "sys",
    "start": 1530,
    "end": 1533,
    "range": [
      1530,
      1533
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1533,
    "end": 1534,
    "range": [
      1533,
      1534
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1534,
    "end": 1535,
    "range": [
      1534,
      1535
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1747,
    "end": 1752,
    "range": [
      1747,
      1752
    ]
  },
  {
    "type": "Identifier",
    "value": "origCreateProgram",
    "start": 1753,
    "end": 1770,
    "range": [
      1753,
      1770
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1771,
    "end": 1772,
    "range": [
      1771,
      1772
    ]
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 1773,
    "end": 1777,
    "range": [
      1773,
      1777
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1777,
    "end": 1778,
    "range": [
      1777,
      1778
    ]
  },
  {
    "type": "Identifier",
    "value": "createProgram",
    "start": 1778,
    "end": 1791,
    "range": [
      1778,
      1791
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1791,
    "end": 1792,
    "range": [
      1791,
      1792
    ]
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 1797,
    "end": 1801,
    "range": [
      1797,
      1801
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1801,
    "end": 1802,
    "range": [
      1801,
      1802
    ]
  },
  {
    "type": "Identifier",
    "value": "createProgram",
    "start": 1802,
    "end": 1815,
    "range": [
      1802,
      1815
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1816,
    "end": 1817,
    "range": [
      1816,
      1817
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
    "type": "Identifier",
    "value": "rootNames",
    "start": 1819,
    "end": 1828,
    "range": [
      1819,
      1828
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1828,
    "end": 1829,
    "range": [
      1828,
      1829
    ]
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 1830,
    "end": 1837,
    "range": [
      1830,
      1837
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1837,
    "end": 1838,
    "range": [
      1837,
      1838
    ]
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 1839,
    "end": 1843,
    "range": [
      1839,
      1843
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1843,
    "end": 1844,
    "range": [
      1843,
      1844
    ]
  },
  {
    "type": "Identifier",
    "value": "oldProgram",
    "start": 1845,
    "end": 1855,
    "range": [
      1845,
      1855
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1855,
    "end": 1856,
    "range": [
      1855,
      1856
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1857,
    "end": 1859,
    "range": [
      1857,
      1859
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1860,
    "end": 1861,
    "range": [
      1860,
      1861
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1870,
    "end": 1877,
    "range": [
      1870,
      1877
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1877,
    "end": 1878,
    "range": [
      1877,
      1878
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1878,
    "end": 1881,
    "range": [
      1878,
      1881
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1881,
    "end": 1882,
    "range": [
      1881,
      1882
    ]
  },
  {
    "type": "String",
    "value": "\"** We're about to create the program! **\"",
    "start": 1882,
    "end": 1924,
    "range": [
      1882,
      1924
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1924,
    "end": 1925,
    "range": [
      1924,
      1925
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1925,
    "end": 1926,
    "range": [
      1925,
      1926
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1935,
    "end": 1941,
    "range": [
      1935,
      1941
    ]
  },
  {
    "type": "Identifier",
    "value": "origCreateProgram",
    "start": 1942,
    "end": 1959,
    "range": [
      1942,
      1959
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1959,
    "end": 1960,
    "range": [
      1959,
      1960
    ]
  },
  {
    "type": "Identifier",
    "value": "rootNames",
    "start": 1960,
    "end": 1969,
    "range": [
      1960,
      1969
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1969,
    "end": 1970,
    "range": [
      1969,
      1970
    ]
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 1971,
    "end": 1978,
    "range": [
      1971,
      1978
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1978,
    "end": 1979,
    "range": [
      1978,
      1979
    ]
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 1980,
    "end": 1984,
    "range": [
      1980,
      1984
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1984,
    "end": 1985,
    "range": [
      1984,
      1985
    ]
  },
  {
    "type": "Identifier",
    "value": "oldProgram",
    "start": 1986,
    "end": 1996,
    "range": [
      1986,
      1996
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1996,
    "end": 1997,
    "range": [
      1996,
      1997
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1997,
    "end": 1998,
    "range": [
      1997,
      1998
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2003,
    "end": 2004,
    "range": [
      2003,
      2004
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2009,
    "end": 2014,
    "range": [
      2009,
      2014
    ]
  },
  {
    "type": "Identifier",
    "value": "origPostProgramCreate",
    "start": 2015,
    "end": 2036,
    "range": [
      2015,
      2036
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2037,
    "end": 2038,
    "range": [
      2037,
      2038
    ]
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 2039,
    "end": 2043,
    "range": [
      2039,
      2043
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2043,
    "end": 2044,
    "range": [
      2043,
      2044
    ]
  },
  {
    "type": "Identifier",
    "value": "afterProgramCreate",
    "start": 2044,
    "end": 2062,
    "range": [
      2044,
      2062
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2062,
    "end": 2063,
    "range": [
      2062,
      2063
    ]
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 2069,
    "end": 2073,
    "range": [
      2069,
      2073
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2073,
    "end": 2074,
    "range": [
      2073,
      2074
    ]
  },
  {
    "type": "Identifier",
    "value": "afterProgramCreate",
    "start": 2074,
    "end": 2092,
    "range": [
      2074,
      2092
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2093,
    "end": 2094,
    "range": [
      2093,
      2094
    ]
  },
  {
    "type": "Identifier",
    "value": "program",
    "start": 2095,
    "end": 2102,
    "range": [
      2095,
      2102
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2103,
    "end": 2105,
    "range": [
      2103,
      2105
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2106,
    "end": 2107,
    "range": [
      2106,
      2107
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2116,
    "end": 2123,
    "range": [
      2116,
      2123
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2123,
    "end": 2124,
    "range": [
      2123,
      2124
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2124,
    "end": 2127,
    "range": [
      2124,
      2127
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2127,
    "end": 2128,
    "range": [
      2127,
      2128
    ]
  },
  {
    "type": "String",
    "value": "\"** We finished making the program! **\"",
    "start": 2128,
    "end": 2167,
    "range": [
      2128,
      2167
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2167,
    "end": 2168,
    "range": [
      2167,
      2168
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2168,
    "end": 2169,
    "range": [
      2168,
      2169
    ]
  },
  {
    "type": "Identifier",
    "value": "origPostProgramCreate",
    "start": 2178,
    "end": 2199,
    "range": [
      2178,
      2199
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2199,
    "end": 2200,
    "range": [
      2199,
      2200
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2200,
    "end": 2201,
    "range": [
      2200,
      2201
    ]
  },
  {
    "type": "Identifier",
    "value": "program",
    "start": 2201,
    "end": 2208,
    "range": [
      2201,
      2208
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2208,
    "end": 2209,
    "range": [
      2208,
      2209
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2209,
    "end": 2210,
    "range": [
      2209,
      2210
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2215,
    "end": 2216,
    "range": [
      2215,
      2216
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2216,
    "end": 2217,
    "range": [
      2216,
      2217
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2329,
    "end": 2331,
    "range": [
      2329,
      2331
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2331,
    "end": 2332,
    "range": [
      2331,
      2332
    ]
  },
  {
    "type": "Identifier",
    "value": "createWatchProgram",
    "start": 2332,
    "end": 2350,
    "range": [
      2332,
      2350
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2350,
    "end": 2351,
    "range": [
      2350,
      2351
    ]
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 2351,
    "end": 2355,
    "range": [
      2351,
      2355
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2355,
    "end": 2356,
    "range": [
      2355,
      2356
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2356,
    "end": 2357,
    "range": [
      2356,
      2357
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2358,
    "end": 2359,
    "range": [
      2358,
      2359
    ]
  },
  {
    "type": "Identifier",
    "value": "watchMain",
    "start": 2361,
    "end": 2370,
    "range": [
      2361,
      2370
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2370,
    "end": 2371,
    "range": [
      2370,
      2371
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2371,
    "end": 2372,
    "range": [
      2371,
      2372
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2372,
    "end": 2373,
    "range": [
      2372,
      2373
    ]
  }
]
```
