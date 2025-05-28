__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 210,
  "end": 2373,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 210,
      "end": 235,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 222,
          "end": 234,
          "id": {
            "type": "Identifier",
            "start": 222,
            "end": 234,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 229,
              "end": 234,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 231,
                "end": 234
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 237,
      "end": 271,
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 246,
        "decorators": [],
        "name": "ts",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 249,
        "end": 270,
        "expression": {
          "type": "Literal",
          "start": 257,
          "end": 269,
          "value": "typescript",
          "raw": "\"typescript\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 273,
      "end": 2359,
      "id": {
        "type": "Identifier",
        "start": 282,
        "end": 291,
        "decorators": [],
        "name": "watchMain",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 294,
        "end": 2359,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 300,
            "end": 394,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 306,
                "end": 393,
                "id": {
                  "type": "Identifier",
                  "start": 306,
                  "end": 316,
                  "decorators": [],
                  "name": "configPath",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 319,
                  "end": 393,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 319,
                    "end": 336,
                    "object": {
                      "type": "Identifier",
                      "start": 319,
                      "end": 321,
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 322,
                      "end": 336,
                      "decorators": [],
                      "name": "findConfigFile",
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
                      "start": 352,
                      "end": 356,
                      "value": "./",
                      "raw": "\"./\""
                    },
                    {
                      "type": "MemberExpression",
                      "start": 358,
                      "end": 375,
                      "object": {
                        "type": "MemberExpression",
                        "start": 358,
                        "end": 364,
                        "object": {
                          "type": "Identifier",
                          "start": 358,
                          "end": 360,
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 361,
                          "end": 364,
                          "decorators": [],
                          "name": "sys",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 365,
                        "end": 375,
                        "decorators": [],
                        "name": "fileExists",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    {
                      "type": "Literal",
                      "start": 377,
                      "end": 392,
                      "value": "tsconfig.json",
                      "raw": "\"tsconfig.json\""
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 399,
            "end": 491,
            "test": {
              "type": "UnaryExpression",
              "start": 403,
              "end": 414,
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "start": 404,
                "end": 414,
                "decorators": [],
                "name": "configPath",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 416,
              "end": 491,
              "body": [
                {
                  "type": "ThrowStatement",
                  "start": 426,
                  "end": 485,
                  "argument": {
                    "type": "NewExpression",
                    "start": 432,
                    "end": 484,
                    "callee": {
                      "type": "Identifier",
                      "start": 436,
                      "end": 441,
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 442,
                        "end": 483,
                        "value": "Could not find a valid 'tsconfig.json'.",
                        "raw": "\"Could not find a valid 'tsconfig.json'.\""
                      }
                    ]
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1471,
            "end": 1535,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1477,
                "end": 1534,
                "id": {
                  "type": "Identifier",
                  "start": 1477,
                  "end": 1481,
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1484,
                  "end": 1534,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1484,
                    "end": 1510,
                    "object": {
                      "type": "Identifier",
                      "start": 1484,
                      "end": 1486,
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1487,
                      "end": 1510,
                      "decorators": [],
                      "name": "createWatchCompilerHost",
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
                      "start": 1511,
                      "end": 1521,
                      "decorators": [],
                      "name": "configPath",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "ObjectExpression",
                      "start": 1523,
                      "end": 1525,
                      "properties": []
                    },
                    {
                      "type": "MemberExpression",
                      "start": 1527,
                      "end": 1533,
                      "object": {
                        "type": "Identifier",
                        "start": 1527,
                        "end": 1529,
                        "decorators": [],
                        "name": "ts",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1530,
                        "end": 1533,
                        "decorators": [],
                        "name": "sys",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1747,
            "end": 1792,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1753,
                "end": 1791,
                "id": {
                  "type": "Identifier",
                  "start": 1753,
                  "end": 1770,
                  "decorators": [],
                  "name": "origCreateProgram",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1773,
                  "end": 1791,
                  "object": {
                    "type": "Identifier",
                    "start": 1773,
                    "end": 1777,
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1778,
                    "end": 1791,
                    "decorators": [],
                    "name": "createProgram",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1797,
            "end": 2004,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1797,
              "end": 2004,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1797,
                "end": 1815,
                "object": {
                  "type": "Identifier",
                  "start": 1797,
                  "end": 1801,
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1802,
                  "end": 1815,
                  "decorators": [],
                  "name": "createProgram",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "start": 1818,
                "end": 2004,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1819,
                    "end": 1828,
                    "decorators": [],
                    "name": "rootNames",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1830,
                    "end": 1837,
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1839,
                    "end": 1843,
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1845,
                    "end": 1855,
                    "decorators": [],
                    "name": "oldProgram",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 1860,
                  "end": 2004,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 1870,
                      "end": 1926,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1870,
                        "end": 1925,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1870,
                          "end": 1881,
                          "object": {
                            "type": "Identifier",
                            "start": 1870,
                            "end": 1877,
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1878,
                            "end": 1881,
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
                            "type": "Literal",
                            "start": 1882,
                            "end": 1924,
                            "value": "** We're about to create the program! **",
                            "raw": "\"** We're about to create the program! **\""
                          }
                        ],
                        "optional": false
                      },
                      "directive": null
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 1935,
                      "end": 1998,
                      "argument": {
                        "type": "CallExpression",
                        "start": 1942,
                        "end": 1997,
                        "callee": {
                          "type": "Identifier",
                          "start": 1942,
                          "end": 1959,
                          "decorators": [],
                          "name": "origCreateProgram",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1960,
                            "end": 1969,
                            "decorators": [],
                            "name": "rootNames",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          {
                            "type": "Identifier",
                            "start": 1971,
                            "end": 1978,
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          {
                            "type": "Identifier",
                            "start": 1980,
                            "end": 1984,
                            "decorators": [],
                            "name": "host",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          {
                            "type": "Identifier",
                            "start": 1986,
                            "end": 1996,
                            "decorators": [],
                            "name": "oldProgram",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      }
                    }
                  ]
                },
                "id": null,
                "generator": false
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 2009,
            "end": 2063,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2015,
                "end": 2062,
                "id": {
                  "type": "Identifier",
                  "start": 2015,
                  "end": 2036,
                  "decorators": [],
                  "name": "origPostProgramCreate",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2039,
                  "end": 2062,
                  "object": {
                    "type": "Identifier",
                    "start": 2039,
                    "end": 2043,
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2044,
                    "end": 2062,
                    "decorators": [],
                    "name": "afterProgramCreate",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 2069,
            "end": 2217,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2069,
              "end": 2216,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 2069,
                "end": 2092,
                "object": {
                  "type": "Identifier",
                  "start": 2069,
                  "end": 2073,
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2074,
                  "end": 2092,
                  "decorators": [],
                  "name": "afterProgramCreate",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "start": 2095,
                "end": 2216,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2095,
                    "end": 2102,
                    "decorators": [],
                    "name": "program",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 2106,
                  "end": 2216,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 2116,
                      "end": 2169,
                      "expression": {
                        "type": "CallExpression",
                        "start": 2116,
                        "end": 2168,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2116,
                          "end": 2127,
                          "object": {
                            "type": "Identifier",
                            "start": 2116,
                            "end": 2123,
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2124,
                            "end": 2127,
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
                            "type": "Literal",
                            "start": 2128,
                            "end": 2167,
                            "value": "** We finished making the program! **",
                            "raw": "\"** We finished making the program! **\""
                          }
                        ],
                        "optional": false
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 2178,
                      "end": 2210,
                      "expression": {
                        "type": "CallExpression",
                        "start": 2178,
                        "end": 2209,
                        "callee": {
                          "type": "TSNonNullExpression",
                          "start": 2178,
                          "end": 2200,
                          "expression": {
                            "type": "Identifier",
                            "start": 2178,
                            "end": 2199,
                            "decorators": [],
                            "name": "origPostProgramCreate",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 2201,
                            "end": 2208,
                            "decorators": [],
                            "name": "program",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      },
                      "directive": null
                    }
                  ]
                },
                "id": null,
                "generator": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2329,
            "end": 2357,
            "expression": {
              "type": "CallExpression",
              "start": 2329,
              "end": 2356,
              "callee": {
                "type": "MemberExpression",
                "start": 2329,
                "end": 2350,
                "object": {
                  "type": "Identifier",
                  "start": 2329,
                  "end": 2331,
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2332,
                  "end": 2350,
                  "decorators": [],
                  "name": "createWatchProgram",
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
                  "start": 2351,
                  "end": 2355,
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 2361,
      "end": 2373,
      "expression": {
        "type": "CallExpression",
        "start": 2361,
        "end": 2372,
        "callee": {
          "type": "Identifier",
          "start": 2361,
          "end": 2370,
          "decorators": [],
          "name": "watchMain",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
