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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 222,
          "end": 234,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 249,
        "end": 270,
        "expression": {
          "type": "Literal",
          "start": 257,
          "end": 269,
          "raw": "\"typescript\"",
          "value": "typescript"
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 273,
      "end": 2359,
      "async": false,
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
                "definite": false,
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
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 352,
                      "end": 356,
                      "raw": "\"./\"",
                      "value": "./"
                    },
                    {
                      "type": "MemberExpression",
                      "start": 358,
                      "end": 375,
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "start": 358,
                        "end": 364,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 358,
                          "end": 360,
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 361,
                          "end": 364,
                          "decorators": [],
                          "name": "sys",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 365,
                        "end": 375,
                        "decorators": [],
                        "name": "fileExists",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Literal",
                      "start": 377,
                      "end": 392,
                      "raw": "\"tsconfig.json\"",
                      "value": "tsconfig.json"
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 319,
                    "end": 336,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 319,
                      "end": 321,
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 322,
                      "end": 336,
                      "decorators": [],
                      "name": "findConfigFile",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 399,
            "end": 491,
            "alternate": null,
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
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 442,
                        "end": 483,
                        "raw": "\"Could not find a valid 'tsconfig.json'.\"",
                        "value": "Could not find a valid 'tsconfig.json'."
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 436,
                      "end": 441,
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "UnaryExpression",
              "start": 403,
              "end": 414,
              "argument": {
                "type": "Identifier",
                "start": 404,
                "end": 414,
                "decorators": [],
                "name": "configPath",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!",
              "prefix": true
            }
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
                "definite": false,
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
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1527,
                        "end": 1529,
                        "decorators": [],
                        "name": "ts",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1530,
                        "end": 1533,
                        "decorators": [],
                        "name": "sys",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1484,
                    "end": 1510,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1484,
                      "end": 1486,
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1487,
                      "end": 1510,
                      "decorators": [],
                      "name": "createWatchCompilerHost",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
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
                "definite": false,
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
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1773,
                    "end": 1777,
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1778,
                    "end": 1791,
                    "decorators": [],
                    "name": "createProgram",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 1797,
            "end": 2004,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1797,
              "end": 2004,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1797,
                "end": 1815,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1797,
                  "end": 1801,
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1802,
                  "end": 1815,
                  "decorators": [],
                  "name": "createProgram",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "start": 1818,
                "end": 2004,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1860,
                  "end": 2004,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 1870,
                      "end": 1926,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1870,
                        "end": 1925,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1882,
                            "end": 1924,
                            "raw": "\"** We're about to create the program! **\"",
                            "value": "** We're about to create the program! **"
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1870,
                          "end": 1881,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 1870,
                            "end": 1877,
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1878,
                            "end": 1881,
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 1935,
                      "end": 1998,
                      "argument": {
                        "type": "CallExpression",
                        "start": 1942,
                        "end": 1997,
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
                        "callee": {
                          "type": "Identifier",
                          "start": 1942,
                          "end": 1959,
                          "decorators": [],
                          "name": "origCreateProgram",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
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
                "typeParameters": null
              }
            }
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
                "definite": false,
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
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2039,
                    "end": 2043,
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2044,
                    "end": 2062,
                    "decorators": [],
                    "name": "afterProgramCreate",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 2069,
            "end": 2217,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2069,
              "end": 2216,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 2069,
                "end": 2092,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2069,
                  "end": 2073,
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2074,
                  "end": 2092,
                  "decorators": [],
                  "name": "afterProgramCreate",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "start": 2095,
                "end": 2216,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 2106,
                  "end": 2216,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 2116,
                      "end": 2169,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 2116,
                        "end": 2168,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 2128,
                            "end": 2167,
                            "raw": "\"** We finished making the program! **\"",
                            "value": "** We finished making the program! **"
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2116,
                          "end": 2127,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 2116,
                            "end": 2123,
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 2124,
                            "end": 2127,
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 2178,
                      "end": 2210,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 2178,
                        "end": 2209,
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
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
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
                "typeParameters": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2329,
            "end": 2357,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2329,
              "end": 2356,
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
              "callee": {
                "type": "MemberExpression",
                "start": 2329,
                "end": 2350,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2329,
                  "end": 2331,
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2332,
                  "end": 2350,
                  "decorators": [],
                  "name": "createWatchProgram",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 282,
        "end": 291,
        "decorators": [],
        "name": "watchMain",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2361,
      "end": 2373,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 2361,
        "end": 2372,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 2361,
          "end": 2370,
          "decorators": [],
          "name": "watchMain",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
