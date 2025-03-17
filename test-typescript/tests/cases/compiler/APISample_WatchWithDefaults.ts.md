__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 210,
  "end": 2374,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 210,
      "end": 235,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 222,
          "end": 234,
          "id": {
            "type": "Identifier",
            "start": 222,
            "end": 234,
            "name": "console",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 229,
              "end": 234,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 231,
                "end": 234
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "ts",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "watchMain",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 294,
        "end": 2359,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 300,
            "end": 394,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 306,
                "end": 393,
                "id": {
                  "type": "Identifier",
                  "start": 306,
                  "end": 316,
                  "name": "configPath",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "ts",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 322,
                      "end": 336,
                      "name": "findConfigFile",
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
                          "name": "ts",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 361,
                          "end": 364,
                          "name": "sys",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 365,
                        "end": 375,
                        "name": "fileExists",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Literal",
                      "start": 377,
                      "end": 392,
                      "value": "tsconfig.json",
                      "raw": "\"tsconfig.json\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
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
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 404,
                "end": 414,
                "name": "configPath",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
                      "name": "Error",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 442,
                        "end": 483,
                        "value": "Could not find a valid 'tsconfig.json'.",
                        "raw": "\"Could not find a valid 'tsconfig.json'.\""
                      }
                    ],
                    "typeArguments": null
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1477,
                "end": 1534,
                "id": {
                  "type": "Identifier",
                  "start": 1477,
                  "end": 1481,
                  "name": "host",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "ts",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1487,
                      "end": 1510,
                      "name": "createWatchCompilerHost",
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
                      "start": 1511,
                      "end": 1521,
                      "name": "configPath",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                        "name": "ts",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1530,
                        "end": 1533,
                        "name": "sys",
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
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1747,
            "end": 1792,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1753,
                "end": 1791,
                "id": {
                  "type": "Identifier",
                  "start": 1753,
                  "end": 1770,
                  "name": "origCreateProgram",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1773,
                  "end": 1791,
                  "object": {
                    "type": "Identifier",
                    "start": 1773,
                    "end": 1777,
                    "name": "host",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1778,
                    "end": 1791,
                    "name": "createProgram",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
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
                  "name": "host",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1802,
                  "end": 1815,
                  "name": "createProgram",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "start": 1818,
                "end": 2004,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1819,
                    "end": 1828,
                    "name": "rootNames",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1830,
                    "end": 1837,
                    "name": "options",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1839,
                    "end": 1843,
                    "name": "host",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1845,
                    "end": 1855,
                    "name": "oldProgram",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                            "name": "console",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1878,
                            "end": 1881,
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
                            "type": "Literal",
                            "start": 1882,
                            "end": 1924,
                            "value": "** We're about to create the program! **",
                            "raw": "\"** We're about to create the program! **\""
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
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
                          "name": "origCreateProgram",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1960,
                            "end": 1969,
                            "name": "rootNames",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 1971,
                            "end": 1978,
                            "name": "options",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 1980,
                            "end": 1984,
                            "name": "host",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 1986,
                            "end": 1996,
                            "name": "oldProgram",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 2009,
            "end": 2063,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2015,
                "end": 2062,
                "id": {
                  "type": "Identifier",
                  "start": 2015,
                  "end": 2036,
                  "name": "origPostProgramCreate",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2039,
                  "end": 2062,
                  "object": {
                    "type": "Identifier",
                    "start": 2039,
                    "end": 2043,
                    "name": "host",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2044,
                    "end": 2062,
                    "name": "afterProgramCreate",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
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
                  "name": "host",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2074,
                  "end": 2092,
                  "name": "afterProgramCreate",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "start": 2095,
                "end": 2216,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2095,
                    "end": 2102,
                    "name": "program",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                            "name": "console",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2124,
                            "end": 2127,
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
                            "type": "Literal",
                            "start": 2128,
                            "end": 2167,
                            "value": "** We finished making the program! **",
                            "raw": "\"** We finished making the program! **\""
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
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
                            "name": "origPostProgramCreate",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 2201,
                            "end": 2208,
                            "name": "program",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "directive": null
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
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
                  "name": "ts",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2332,
                  "end": 2350,
                  "name": "createWatchProgram",
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
                  "start": 2351,
                  "end": 2355,
                  "name": "host",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
          "name": "watchMain",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
