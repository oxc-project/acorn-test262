__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 313,
  "end": 3332,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 313,
      "end": 338,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 337,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 337,
            "decorators": [],
            "name": "process",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 332,
              "end": 337,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 334,
                "end": 337
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
      "type": "VariableDeclaration",
      "start": 339,
      "end": 364,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 351,
          "end": 363,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 351,
            "end": 363,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 358,
              "end": 363,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 360,
                "end": 363
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
      "type": "VariableDeclaration",
      "start": 365,
      "end": 385,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 377,
          "end": 384,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 377,
            "end": 384,
            "decorators": [],
            "name": "os",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 379,
              "end": 384,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 381,
                "end": 384
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
      "start": 387,
      "end": 421,
      "id": {
        "type": "Identifier",
        "start": 394,
        "end": 396,
        "decorators": [],
        "name": "ts",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 399,
        "end": 420,
        "expression": {
          "type": "Literal",
          "start": 407,
          "end": 419,
          "raw": "\"typescript\"",
          "value": "typescript",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 423,
      "end": 602,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 429,
          "end": 602,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 429,
            "end": 465,
            "decorators": [],
            "name": "formatHost",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 439,
              "end": 465,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 441,
                "end": 465,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 441,
                  "end": 465,
                  "left": {
                    "type": "Identifier",
                    "start": 441,
                    "end": 443,
                    "decorators": [],
                    "name": "ts",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 444,
                    "end": 465,
                    "decorators": [],
                    "name": "FormatDiagnosticsHost",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 468,
            "end": 602,
            "properties": [
              {
                "type": "Property",
                "start": 474,
                "end": 508,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 494,
                  "decorators": [],
                  "name": "getCanonicalFileName",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 496,
                  "end": 508,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 504,
                    "end": 508,
                    "decorators": [],
                    "name": "path",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 496,
                      "end": 500,
                      "decorators": [],
                      "name": "path",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 514,
                "end": 561,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 514,
                  "end": 533,
                  "decorators": [],
                  "name": "getCurrentDirectory",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "start": 535,
                  "end": 561,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 535,
                    "end": 541,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 535,
                      "end": 537,
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 538,
                      "end": 541,
                      "decorators": [],
                      "name": "sys",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 542,
                    "end": 561,
                    "decorators": [],
                    "name": "getCurrentDirectory",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              {
                "type": "Property",
                "start": 567,
                "end": 599,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 567,
                  "end": 577,
                  "decorators": [],
                  "name": "getNewLine",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 579,
                  "end": 599,
                  "async": false,
                  "body": {
                    "type": "MemberExpression",
                    "start": 585,
                    "end": 599,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 585,
                      "end": 591,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 585,
                        "end": 587,
                        "decorators": [],
                        "name": "ts",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 588,
                        "end": 591,
                        "decorators": [],
                        "name": "sys",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 592,
                      "end": 599,
                      "decorators": [],
                      "name": "newLine",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
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
      "type": "FunctionDeclaration",
      "start": 604,
      "end": 2831,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 625,
        "end": 2831,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 631,
            "end": 725,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 637,
                "end": 724,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 637,
                  "end": 647,
                  "decorators": [],
                  "name": "configPath",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 650,
                  "end": 724,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 683,
                      "end": 687,
                      "raw": "\"./\"",
                      "value": "./",
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "MemberExpression",
                      "start": 689,
                      "end": 706,
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "start": 689,
                        "end": 695,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 689,
                          "end": 691,
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 692,
                          "end": 695,
                          "decorators": [],
                          "name": "sys",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 696,
                        "end": 706,
                        "decorators": [],
                        "name": "fileExists",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Literal",
                      "start": 708,
                      "end": 723,
                      "raw": "\"tsconfig.json\"",
                      "value": "tsconfig.json",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 650,
                    "end": 667,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 650,
                      "end": 652,
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 653,
                      "end": 667,
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
            "start": 730,
            "end": 822,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 747,
              "end": 822,
              "body": [
                {
                  "type": "ThrowStatement",
                  "start": 757,
                  "end": 816,
                  "argument": {
                    "type": "NewExpression",
                    "start": 763,
                    "end": 815,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 773,
                        "end": 814,
                        "raw": "\"Could not find a valid 'tsconfig.json'.\"",
                        "value": "Could not find a valid 'tsconfig.json'.",
                        "regex": null,
                        "bigint": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 767,
                      "end": 772,
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
              "start": 734,
              "end": 745,
              "argument": {
                "type": "Identifier",
                "start": 735,
                "end": 745,
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
            "start": 1802,
            "end": 1984,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1808,
                "end": 1983,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1808,
                  "end": 1812,
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1815,
                  "end": 1983,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1842,
                      "end": 1852,
                      "decorators": [],
                      "name": "configPath",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "ObjectExpression",
                      "start": 1854,
                      "end": 1856,
                      "properties": []
                    },
                    {
                      "type": "MemberExpression",
                      "start": 1858,
                      "end": 1864,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1858,
                        "end": 1860,
                        "decorators": [],
                        "name": "ts",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1861,
                        "end": 1864,
                        "decorators": [],
                        "name": "sys",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "MemberExpression",
                      "start": 1874,
                      "end": 1916,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1874,
                        "end": 1876,
                        "decorators": [],
                        "name": "ts",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1877,
                        "end": 1916,
                        "decorators": [],
                        "name": "createSemanticDiagnosticsBuilderProgram",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 1926,
                      "end": 1942,
                      "decorators": [],
                      "name": "reportDiagnostic",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 1952,
                      "end": 1976,
                      "decorators": [],
                      "name": "reportWatchStatusChanged",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1815,
                    "end": 1841,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1815,
                      "end": 1817,
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1818,
                      "end": 1841,
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
            "start": 2196,
            "end": 2241,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2202,
                "end": 2240,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2202,
                  "end": 2219,
                  "decorators": [],
                  "name": "origCreateProgram",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2222,
                  "end": 2240,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2222,
                    "end": 2226,
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2227,
                    "end": 2240,
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
            "start": 2246,
            "end": 2476,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2246,
              "end": 2476,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 2246,
                "end": 2264,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2246,
                  "end": 2250,
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2251,
                  "end": 2264,
                  "decorators": [],
                  "name": "createProgram",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "start": 2267,
                "end": 2476,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 2332,
                  "end": 2476,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 2342,
                      "end": 2398,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 2342,
                        "end": 2397,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 2354,
                            "end": 2396,
                            "raw": "\"** We're about to create the program! **\"",
                            "value": "** We're about to create the program! **",
                            "regex": null,
                            "bigint": null
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2342,
                          "end": 2353,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 2342,
                            "end": 2349,
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 2350,
                            "end": 2353,
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
                      "start": 2407,
                      "end": 2470,
                      "argument": {
                        "type": "CallExpression",
                        "start": 2414,
                        "end": 2469,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 2432,
                            "end": 2441,
                            "decorators": [],
                            "name": "rootNames",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          {
                            "type": "Identifier",
                            "start": 2443,
                            "end": 2450,
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          {
                            "type": "Identifier",
                            "start": 2452,
                            "end": 2456,
                            "decorators": [],
                            "name": "host",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          {
                            "type": "Identifier",
                            "start": 2458,
                            "end": 2468,
                            "decorators": [],
                            "name": "oldProgram",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 2414,
                          "end": 2431,
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
                    "start": 2268,
                    "end": 2300,
                    "decorators": [],
                    "name": "rootNames",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2277,
                      "end": 2300,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2279,
                        "end": 2300,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2292,
                          "end": 2300,
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 2293,
                              "end": 2299
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 2279,
                          "end": 2292,
                          "decorators": [],
                          "name": "ReadonlyArray",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2302,
                    "end": 2309,
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 2311,
                    "end": 2315,
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 2317,
                    "end": 2327,
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
            "start": 2481,
            "end": 2535,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2487,
                "end": 2534,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2487,
                  "end": 2508,
                  "decorators": [],
                  "name": "origPostProgramCreate",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2511,
                  "end": 2534,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2511,
                    "end": 2515,
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2516,
                    "end": 2534,
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
            "start": 2541,
            "end": 2689,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2541,
              "end": 2688,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 2541,
                "end": 2564,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2541,
                  "end": 2545,
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2546,
                  "end": 2564,
                  "decorators": [],
                  "name": "afterProgramCreate",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "start": 2567,
                "end": 2688,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 2578,
                  "end": 2688,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 2588,
                      "end": 2641,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 2588,
                        "end": 2640,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 2600,
                            "end": 2639,
                            "raw": "\"** We finished making the program! **\"",
                            "value": "** We finished making the program! **",
                            "regex": null,
                            "bigint": null
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2588,
                          "end": 2599,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 2588,
                            "end": 2595,
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 2596,
                            "end": 2599,
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
                      "start": 2650,
                      "end": 2682,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 2650,
                        "end": 2681,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 2673,
                            "end": 2680,
                            "decorators": [],
                            "name": "program",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "callee": {
                          "type": "TSNonNullExpression",
                          "start": 2650,
                          "end": 2672,
                          "expression": {
                            "type": "Identifier",
                            "start": 2650,
                            "end": 2671,
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
                    "start": 2567,
                    "end": 2574,
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
            "start": 2801,
            "end": 2829,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2801,
              "end": 2828,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2823,
                  "end": 2827,
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2801,
                "end": 2822,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2801,
                  "end": 2803,
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2804,
                  "end": 2822,
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
        "start": 613,
        "end": 622,
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
      "type": "FunctionDeclaration",
      "start": 2833,
      "end": 3034,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2886,
        "end": 3034,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2892,
            "end": 3032,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2892,
              "end": 3031,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2906,
                  "end": 2913,
                  "raw": "\"Error\"",
                  "value": "Error",
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "MemberExpression",
                  "start": 2915,
                  "end": 2930,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2915,
                    "end": 2925,
                    "decorators": [],
                    "name": "diagnostic",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2926,
                    "end": 2930,
                    "decorators": [],
                    "name": "code",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Literal",
                  "start": 2932,
                  "end": 2935,
                  "raw": "\":\"",
                  "value": ":",
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "CallExpression",
                  "start": 2945,
                  "end": 3025,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 2977,
                      "end": 2999,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 2977,
                        "end": 2987,
                        "decorators": [],
                        "name": "diagnostic",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 2988,
                        "end": 2999,
                        "decorators": [],
                        "name": "messageText",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "CallExpression",
                      "start": 3001,
                      "end": 3024,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3001,
                        "end": 3022,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 3001,
                          "end": 3011,
                          "decorators": [],
                          "name": "formatHost",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 3012,
                          "end": 3022,
                          "decorators": [],
                          "name": "getNewLine",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2945,
                    "end": 2976,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2945,
                      "end": 2947,
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2948,
                      "end": 2976,
                      "decorators": [],
                      "name": "flattenDiagnosticMessageText",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2892,
                "end": 2905,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2892,
                  "end": 2899,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2900,
                  "end": 2905,
                  "decorators": [],
                  "name": "error",
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
        "start": 2842,
        "end": 2858,
        "decorators": [],
        "name": "reportDiagnostic",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2859,
          "end": 2884,
          "decorators": [],
          "name": "diagnostic",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2869,
            "end": 2884,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2871,
              "end": 2884,
              "typeArguments": null,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 2871,
                "end": 2884,
                "left": {
                  "type": "Identifier",
                  "start": 2871,
                  "end": 2873,
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 2874,
                  "end": 2884,
                  "decorators": [],
                  "name": "Diagnostic",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3191,
      "end": 3318,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3252,
        "end": 3318,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3258,
            "end": 3316,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 3258,
              "end": 3315,
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 3271,
                  "end": 3314,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 3291,
                      "end": 3301,
                      "decorators": [],
                      "name": "diagnostic",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 3303,
                      "end": 3313,
                      "decorators": [],
                      "name": "formatHost",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3271,
                    "end": 3290,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3271,
                      "end": 3273,
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3274,
                      "end": 3290,
                      "decorators": [],
                      "name": "formatDiagnostic",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 3258,
                "end": 3270,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 3258,
                  "end": 3265,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 3266,
                  "end": 3270,
                  "decorators": [],
                  "name": "info",
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
        "start": 3200,
        "end": 3224,
        "decorators": [],
        "name": "reportWatchStatusChanged",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3225,
          "end": 3250,
          "decorators": [],
          "name": "diagnostic",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3235,
            "end": 3250,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3237,
              "end": 3250,
              "typeArguments": null,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 3237,
                "end": 3250,
                "left": {
                  "type": "Identifier",
                  "start": 3237,
                  "end": 3239,
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 3240,
                  "end": 3250,
                  "decorators": [],
                  "name": "Diagnostic",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3320,
      "end": 3332,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 3320,
        "end": 3331,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 3320,
          "end": 3329,
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
