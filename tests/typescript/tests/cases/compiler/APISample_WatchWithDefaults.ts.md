__ESTREE_TEST__:PASS:
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
