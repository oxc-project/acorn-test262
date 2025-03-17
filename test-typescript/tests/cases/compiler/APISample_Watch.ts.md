__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 313,
  "end": 3333,
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
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 337,
            "name": "process",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 332,
              "end": 337,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 334,
                "end": 337
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
      "type": "VariableDeclaration",
      "start": 339,
      "end": 364,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 351,
          "end": 363,
          "id": {
            "type": "Identifier",
            "start": 351,
            "end": 363,
            "name": "console",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 358,
              "end": 363,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 360,
                "end": 363
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
      "type": "VariableDeclaration",
      "start": 365,
      "end": 385,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 377,
          "end": 384,
          "id": {
            "type": "Identifier",
            "start": 377,
            "end": 384,
            "name": "os",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 379,
              "end": 384,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 381,
                "end": 384
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
      "start": 387,
      "end": 421,
      "id": {
        "type": "Identifier",
        "start": 394,
        "end": 396,
        "name": "ts",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 399,
        "end": 420,
        "expression": {
          "type": "Literal",
          "start": 407,
          "end": 419,
          "value": "typescript",
          "raw": "\"typescript\""
        }
      },
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 429,
            "end": 465,
            "name": "formatHost",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 439,
              "end": 465,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 441,
                "end": 465,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 441,
                  "end": 465,
                  "left": {
                    "type": "Identifier",
                    "start": 441,
                    "end": 443,
                    "name": "ts",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 444,
                    "end": 465,
                    "name": "FormatDiagnosticsHost",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 494,
                  "name": "getCanonicalFileName",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 496,
                  "end": 508,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 496,
                      "end": 500,
                      "name": "path",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 504,
                    "end": 508,
                    "name": "path",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 514,
                "end": 561,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 514,
                  "end": 533,
                  "name": "getCurrentDirectory",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 535,
                  "end": 561,
                  "object": {
                    "type": "MemberExpression",
                    "start": 535,
                    "end": 541,
                    "object": {
                      "type": "Identifier",
                      "start": 535,
                      "end": 537,
                      "name": "ts",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 538,
                      "end": 541,
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
                    "start": 542,
                    "end": 561,
                    "name": "getCurrentDirectory",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 567,
                "end": 599,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 567,
                  "end": 577,
                  "name": "getNewLine",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 579,
                  "end": 599,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "MemberExpression",
                    "start": 585,
                    "end": 599,
                    "object": {
                      "type": "MemberExpression",
                      "start": 585,
                      "end": 591,
                      "object": {
                        "type": "Identifier",
                        "start": 585,
                        "end": 587,
                        "name": "ts",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 588,
                        "end": 591,
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
                      "start": 592,
                      "end": 599,
                      "name": "newLine",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
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
      "type": "FunctionDeclaration",
      "start": 604,
      "end": 2831,
      "id": {
        "type": "Identifier",
        "start": 613,
        "end": 622,
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
                "id": {
                  "type": "Identifier",
                  "start": 637,
                  "end": 647,
                  "name": "configPath",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 650,
                  "end": 724,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 650,
                    "end": 667,
                    "object": {
                      "type": "Identifier",
                      "start": 650,
                      "end": 652,
                      "name": "ts",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 653,
                      "end": 667,
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
                      "start": 683,
                      "end": 687,
                      "value": "./",
                      "raw": "\"./\""
                    },
                    {
                      "type": "MemberExpression",
                      "start": 689,
                      "end": 706,
                      "object": {
                        "type": "MemberExpression",
                        "start": 689,
                        "end": 695,
                        "object": {
                          "type": "Identifier",
                          "start": 689,
                          "end": 691,
                          "name": "ts",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 692,
                          "end": 695,
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
                        "start": 696,
                        "end": 706,
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
                      "start": 708,
                      "end": 723,
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
            "start": 730,
            "end": 822,
            "test": {
              "type": "UnaryExpression",
              "start": 734,
              "end": 745,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 735,
                "end": 745,
                "name": "configPath",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
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
                    "callee": {
                      "type": "Identifier",
                      "start": 767,
                      "end": 772,
                      "name": "Error",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 773,
                        "end": 814,
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
            "start": 1802,
            "end": 1984,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1808,
                "end": 1983,
                "id": {
                  "type": "Identifier",
                  "start": 1808,
                  "end": 1812,
                  "name": "host",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1815,
                  "end": 1983,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1815,
                    "end": 1841,
                    "object": {
                      "type": "Identifier",
                      "start": 1815,
                      "end": 1817,
                      "name": "ts",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1818,
                      "end": 1841,
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
                      "start": 1842,
                      "end": 1852,
                      "name": "configPath",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "object": {
                        "type": "Identifier",
                        "start": 1858,
                        "end": 1860,
                        "name": "ts",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1861,
                        "end": 1864,
                        "name": "sys",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "MemberExpression",
                      "start": 1874,
                      "end": 1916,
                      "object": {
                        "type": "Identifier",
                        "start": 1874,
                        "end": 1876,
                        "name": "ts",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1877,
                        "end": 1916,
                        "name": "createSemanticDiagnosticsBuilderProgram",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1926,
                      "end": 1942,
                      "name": "reportDiagnostic",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1952,
                      "end": 1976,
                      "name": "reportWatchStatusChanged",
                      "typeAnnotation": null,
                      "decorators": [],
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
            "start": 2196,
            "end": 2241,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2202,
                "end": 2240,
                "id": {
                  "type": "Identifier",
                  "start": 2202,
                  "end": 2219,
                  "name": "origCreateProgram",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2222,
                  "end": 2240,
                  "object": {
                    "type": "Identifier",
                    "start": 2222,
                    "end": 2226,
                    "name": "host",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2227,
                    "end": 2240,
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
            "start": 2246,
            "end": 2476,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2246,
              "end": 2476,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 2246,
                "end": 2264,
                "object": {
                  "type": "Identifier",
                  "start": 2246,
                  "end": 2250,
                  "name": "host",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2251,
                  "end": 2264,
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
                "start": 2267,
                "end": 2476,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2268,
                    "end": 2300,
                    "name": "rootNames",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2277,
                      "end": 2300,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2279,
                        "end": 2300,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2279,
                          "end": 2292,
                          "name": "ReadonlyArray",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2302,
                    "end": 2309,
                    "name": "options",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2311,
                    "end": 2315,
                    "name": "host",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2317,
                    "end": 2327,
                    "name": "oldProgram",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 2332,
                  "end": 2476,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 2342,
                      "end": 2398,
                      "expression": {
                        "type": "CallExpression",
                        "start": 2342,
                        "end": 2397,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2342,
                          "end": 2353,
                          "object": {
                            "type": "Identifier",
                            "start": 2342,
                            "end": 2349,
                            "name": "console",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2350,
                            "end": 2353,
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
                            "start": 2354,
                            "end": 2396,
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
                      "start": 2407,
                      "end": 2470,
                      "argument": {
                        "type": "CallExpression",
                        "start": 2414,
                        "end": 2469,
                        "callee": {
                          "type": "Identifier",
                          "start": 2414,
                          "end": 2431,
                          "name": "origCreateProgram",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 2432,
                            "end": 2441,
                            "name": "rootNames",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 2443,
                            "end": 2450,
                            "name": "options",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 2452,
                            "end": 2456,
                            "name": "host",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 2458,
                            "end": 2468,
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
            "start": 2481,
            "end": 2535,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2487,
                "end": 2534,
                "id": {
                  "type": "Identifier",
                  "start": 2487,
                  "end": 2508,
                  "name": "origPostProgramCreate",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2511,
                  "end": 2534,
                  "object": {
                    "type": "Identifier",
                    "start": 2511,
                    "end": 2515,
                    "name": "host",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2516,
                    "end": 2534,
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
            "start": 2541,
            "end": 2689,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2541,
              "end": 2688,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 2541,
                "end": 2564,
                "object": {
                  "type": "Identifier",
                  "start": 2541,
                  "end": 2545,
                  "name": "host",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2546,
                  "end": 2564,
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
                "start": 2567,
                "end": 2688,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2567,
                    "end": 2574,
                    "name": "program",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 2578,
                  "end": 2688,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 2588,
                      "end": 2641,
                      "expression": {
                        "type": "CallExpression",
                        "start": 2588,
                        "end": 2640,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2588,
                          "end": 2599,
                          "object": {
                            "type": "Identifier",
                            "start": 2588,
                            "end": 2595,
                            "name": "console",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2596,
                            "end": 2599,
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
                            "start": 2600,
                            "end": 2639,
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
                      "start": 2650,
                      "end": 2682,
                      "expression": {
                        "type": "CallExpression",
                        "start": 2650,
                        "end": 2681,
                        "callee": {
                          "type": "TSNonNullExpression",
                          "start": 2650,
                          "end": 2672,
                          "expression": {
                            "type": "Identifier",
                            "start": 2650,
                            "end": 2671,
                            "name": "origPostProgramCreate",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 2673,
                            "end": 2680,
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
            "start": 2801,
            "end": 2829,
            "expression": {
              "type": "CallExpression",
              "start": 2801,
              "end": 2828,
              "callee": {
                "type": "MemberExpression",
                "start": 2801,
                "end": 2822,
                "object": {
                  "type": "Identifier",
                  "start": 2801,
                  "end": 2803,
                  "name": "ts",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2804,
                  "end": 2822,
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
                  "start": 2823,
                  "end": 2827,
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
      "type": "FunctionDeclaration",
      "start": 2833,
      "end": 3034,
      "id": {
        "type": "Identifier",
        "start": 2842,
        "end": 2858,
        "name": "reportDiagnostic",
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
          "start": 2859,
          "end": 2884,
          "name": "diagnostic",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2869,
            "end": 2884,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2871,
              "end": 2884,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 2871,
                "end": 2884,
                "left": {
                  "type": "Identifier",
                  "start": 2871,
                  "end": 2873,
                  "name": "ts",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 2874,
                  "end": 2884,
                  "name": "Diagnostic",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2886,
        "end": 3034,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2892,
            "end": 3032,
            "expression": {
              "type": "CallExpression",
              "start": 2892,
              "end": 3031,
              "callee": {
                "type": "MemberExpression",
                "start": 2892,
                "end": 2905,
                "object": {
                  "type": "Identifier",
                  "start": 2892,
                  "end": 2899,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2900,
                  "end": 2905,
                  "name": "error",
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
                  "start": 2906,
                  "end": 2913,
                  "value": "Error",
                  "raw": "\"Error\""
                },
                {
                  "type": "MemberExpression",
                  "start": 2915,
                  "end": 2930,
                  "object": {
                    "type": "Identifier",
                    "start": 2915,
                    "end": 2925,
                    "name": "diagnostic",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2926,
                    "end": 2930,
                    "name": "code",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Literal",
                  "start": 2932,
                  "end": 2935,
                  "value": ":",
                  "raw": "\":\""
                },
                {
                  "type": "CallExpression",
                  "start": 2945,
                  "end": 3025,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2945,
                    "end": 2976,
                    "object": {
                      "type": "Identifier",
                      "start": 2945,
                      "end": 2947,
                      "name": "ts",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2948,
                      "end": 2976,
                      "name": "flattenDiagnosticMessageText",
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
                      "start": 2977,
                      "end": 2999,
                      "object": {
                        "type": "Identifier",
                        "start": 2977,
                        "end": 2987,
                        "name": "diagnostic",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2988,
                        "end": 2999,
                        "name": "messageText",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "CallExpression",
                      "start": 3001,
                      "end": 3024,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3001,
                        "end": 3022,
                        "object": {
                          "type": "Identifier",
                          "start": 3001,
                          "end": 3011,
                          "name": "formatHost",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3012,
                          "end": 3022,
                          "name": "getNewLine",
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
      "type": "FunctionDeclaration",
      "start": 3191,
      "end": 3318,
      "id": {
        "type": "Identifier",
        "start": 3200,
        "end": 3224,
        "name": "reportWatchStatusChanged",
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
          "start": 3225,
          "end": 3250,
          "name": "diagnostic",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3235,
            "end": 3250,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3237,
              "end": 3250,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 3237,
                "end": 3250,
                "left": {
                  "type": "Identifier",
                  "start": 3237,
                  "end": 3239,
                  "name": "ts",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 3240,
                  "end": 3250,
                  "name": "Diagnostic",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3252,
        "end": 3318,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3258,
            "end": 3316,
            "expression": {
              "type": "CallExpression",
              "start": 3258,
              "end": 3315,
              "callee": {
                "type": "MemberExpression",
                "start": 3258,
                "end": 3270,
                "object": {
                  "type": "Identifier",
                  "start": 3258,
                  "end": 3265,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 3266,
                  "end": 3270,
                  "name": "info",
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
                  "start": 3271,
                  "end": 3314,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3271,
                    "end": 3290,
                    "object": {
                      "type": "Identifier",
                      "start": 3271,
                      "end": 3273,
                      "name": "ts",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3274,
                      "end": 3290,
                      "name": "formatDiagnostic",
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
                      "start": 3291,
                      "end": 3301,
                      "name": "diagnostic",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 3303,
                      "end": 3313,
                      "name": "formatHost",
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
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3320,
      "end": 3332,
      "expression": {
        "type": "CallExpression",
        "start": 3320,
        "end": 3331,
        "callee": {
          "type": "Identifier",
          "start": 3320,
          "end": 3329,
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
