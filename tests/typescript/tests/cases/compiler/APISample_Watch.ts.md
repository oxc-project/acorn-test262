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
            "name": "process",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 334,
                "end": 337
              },
              "start": 332,
              "end": 337
            },
            "start": 325,
            "end": 337
          },
          "init": null,
          "definite": false,
          "start": 325,
          "end": 337
        }
      ],
      "declare": true,
      "start": 313,
      "end": 338
    },
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
                "start": 360,
                "end": 363
              },
              "start": 358,
              "end": 363
            },
            "start": 351,
            "end": 363
          },
          "init": null,
          "definite": false,
          "start": 351,
          "end": 363
        }
      ],
      "declare": true,
      "start": 339,
      "end": 364
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "os",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 381,
                "end": 384
              },
              "start": 379,
              "end": 384
            },
            "start": 377,
            "end": 384
          },
          "init": null,
          "definite": false,
          "start": 377,
          "end": 384
        }
      ],
      "declare": true,
      "start": 365,
      "end": 385
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ts",
        "optional": false,
        "typeAnnotation": null,
        "start": 394,
        "end": 396
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "typescript",
          "raw": "\"typescript\"",
          "start": 407,
          "end": 419
        },
        "start": 399,
        "end": 420
      },
      "importKind": "value",
      "start": 387,
      "end": 421
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
            "name": "formatHost",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ts",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 441,
                    "end": 443
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FormatDiagnosticsHost",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 444,
                    "end": 465
                  },
                  "start": 441,
                  "end": 465
                },
                "typeArguments": null,
                "start": 441,
                "end": 465
              },
              "start": 439,
              "end": 465
            },
            "start": 429,
            "end": 465
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getCanonicalFileName",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 474,
                  "end": 494
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "path",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 496,
                      "end": 500
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "path",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 504,
                    "end": 508
                  },
                  "id": null,
                  "generator": false,
                  "start": 496,
                  "end": 508
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 474,
                "end": 508
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getCurrentDirectory",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 514,
                  "end": 533
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 535,
                      "end": 537
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "sys",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 538,
                      "end": 541
                    },
                    "optional": false,
                    "computed": false,
                    "start": 535,
                    "end": 541
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getCurrentDirectory",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 542,
                    "end": 561
                  },
                  "optional": false,
                  "computed": false,
                  "start": 535,
                  "end": 561
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 514,
                "end": 561
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getNewLine",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 567,
                  "end": 577
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ts",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 585,
                        "end": 587
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 588,
                        "end": 591
                      },
                      "optional": false,
                      "computed": false,
                      "start": 585,
                      "end": 591
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "newLine",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 592,
                      "end": 599
                    },
                    "optional": false,
                    "computed": false,
                    "start": 585,
                    "end": 599
                  },
                  "id": null,
                  "generator": false,
                  "start": 579,
                  "end": 599
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 567,
                "end": 599
              }
            ],
            "start": 468,
            "end": 602
          },
          "definite": false,
          "start": 429,
          "end": 602
        }
      ],
      "declare": false,
      "start": 423,
      "end": 602
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "watchMain",
        "optional": false,
        "typeAnnotation": null,
        "start": 613,
        "end": 622
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
                  "start": 637,
                  "end": 647
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
                      "start": 650,
                      "end": 652
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "findConfigFile",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 653,
                      "end": 667
                    },
                    "optional": false,
                    "computed": false,
                    "start": 650,
                    "end": 667
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "./",
                      "raw": "\"./\"",
                      "start": 683,
                      "end": 687
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
                          "start": 689,
                          "end": 691
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "sys",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 692,
                          "end": 695
                        },
                        "optional": false,
                        "computed": false,
                        "start": 689,
                        "end": 695
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fileExists",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 696,
                        "end": 706
                      },
                      "optional": false,
                      "computed": false,
                      "start": 689,
                      "end": 706
                    },
                    {
                      "type": "Literal",
                      "value": "tsconfig.json",
                      "raw": "\"tsconfig.json\"",
                      "start": 708,
                      "end": 723
                    }
                  ],
                  "optional": false,
                  "start": 650,
                  "end": 724
                },
                "definite": false,
                "start": 637,
                "end": 724
              }
            ],
            "declare": false,
            "start": 631,
            "end": 725
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
                "start": 735,
                "end": 745
              },
              "prefix": true,
              "start": 734,
              "end": 745
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
                      "start": 767,
                      "end": 772
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Could not find a valid 'tsconfig.json'.",
                        "raw": "\"Could not find a valid 'tsconfig.json'.\"",
                        "start": 773,
                        "end": 814
                      }
                    ],
                    "start": 763,
                    "end": 815
                  },
                  "start": 757,
                  "end": 816
                }
              ],
              "start": 747,
              "end": 822
            },
            "alternate": null,
            "start": 730,
            "end": 822
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
                  "start": 1808,
                  "end": 1812
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
                      "start": 1815,
                      "end": 1817
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "createWatchCompilerHost",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1818,
                      "end": 1841
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1815,
                    "end": 1841
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "configPath",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1842,
                      "end": 1852
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 1854,
                      "end": 1856
                    },
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ts",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1858,
                        "end": 1860
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1861,
                        "end": 1864
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1858,
                      "end": 1864
                    },
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ts",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1874,
                        "end": 1876
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "createSemanticDiagnosticsBuilderProgram",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1877,
                        "end": 1916
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1874,
                      "end": 1916
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reportDiagnostic",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1926,
                      "end": 1942
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reportWatchStatusChanged",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1952,
                      "end": 1976
                    }
                  ],
                  "optional": false,
                  "start": 1815,
                  "end": 1983
                },
                "definite": false,
                "start": 1808,
                "end": 1983
              }
            ],
            "declare": false,
            "start": 1802,
            "end": 1984
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
                  "start": 2202,
                  "end": 2219
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2222,
                    "end": 2226
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "createProgram",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2227,
                    "end": 2240
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2222,
                  "end": 2240
                },
                "definite": false,
                "start": 2202,
                "end": 2240
              }
            ],
            "declare": false,
            "start": 2196,
            "end": 2241
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
                  "start": 2246,
                  "end": 2250
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "createProgram",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2251,
                  "end": 2264
                },
                "optional": false,
                "computed": false,
                "start": 2246,
                "end": 2264
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
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ReadonlyArray",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2279,
                          "end": 2292
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 2293,
                              "end": 2299
                            }
                          ],
                          "start": 2292,
                          "end": 2300
                        },
                        "start": 2279,
                        "end": 2300
                      },
                      "start": 2277,
                      "end": 2300
                    },
                    "start": 2268,
                    "end": 2300
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2302,
                    "end": 2309
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2311,
                    "end": 2315
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "oldProgram",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2317,
                    "end": 2327
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
                            "start": 2342,
                            "end": 2349
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2350,
                            "end": 2353
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2342,
                          "end": 2353
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "** We're about to create the program! **",
                            "raw": "\"** We're about to create the program! **\"",
                            "start": 2354,
                            "end": 2396
                          }
                        ],
                        "optional": false,
                        "start": 2342,
                        "end": 2397
                      },
                      "directive": null,
                      "start": 2342,
                      "end": 2398
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
                          "start": 2414,
                          "end": 2431
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rootNames",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2432,
                            "end": 2441
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2443,
                            "end": 2450
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "host",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2452,
                            "end": 2456
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "oldProgram",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2458,
                            "end": 2468
                          }
                        ],
                        "optional": false,
                        "start": 2414,
                        "end": 2469
                      },
                      "start": 2407,
                      "end": 2470
                    }
                  ],
                  "start": 2332,
                  "end": 2476
                },
                "id": null,
                "generator": false,
                "start": 2267,
                "end": 2476
              },
              "start": 2246,
              "end": 2476
            },
            "directive": null,
            "start": 2246,
            "end": 2476
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
                  "start": 2487,
                  "end": 2508
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2511,
                    "end": 2515
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "afterProgramCreate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2516,
                    "end": 2534
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2511,
                  "end": 2534
                },
                "definite": false,
                "start": 2487,
                "end": 2534
              }
            ],
            "declare": false,
            "start": 2481,
            "end": 2535
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
                  "start": 2541,
                  "end": 2545
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "afterProgramCreate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2546,
                  "end": 2564
                },
                "optional": false,
                "computed": false,
                "start": 2541,
                "end": 2564
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
                    "start": 2567,
                    "end": 2574
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
                            "start": 2588,
                            "end": 2595
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2596,
                            "end": 2599
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2588,
                          "end": 2599
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "** We finished making the program! **",
                            "raw": "\"** We finished making the program! **\"",
                            "start": 2600,
                            "end": 2639
                          }
                        ],
                        "optional": false,
                        "start": 2588,
                        "end": 2640
                      },
                      "directive": null,
                      "start": 2588,
                      "end": 2641
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
                            "start": 2650,
                            "end": 2671
                          },
                          "start": 2650,
                          "end": 2672
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "program",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2673,
                            "end": 2680
                          }
                        ],
                        "optional": false,
                        "start": 2650,
                        "end": 2681
                      },
                      "directive": null,
                      "start": 2650,
                      "end": 2682
                    }
                  ],
                  "start": 2578,
                  "end": 2688
                },
                "id": null,
                "generator": false,
                "start": 2567,
                "end": 2688
              },
              "start": 2541,
              "end": 2688
            },
            "directive": null,
            "start": 2541,
            "end": 2689
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
                  "start": 2801,
                  "end": 2803
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "createWatchProgram",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2804,
                  "end": 2822
                },
                "optional": false,
                "computed": false,
                "start": 2801,
                "end": 2822
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2823,
                  "end": 2827
                }
              ],
              "optional": false,
              "start": 2801,
              "end": 2828
            },
            "directive": null,
            "start": 2801,
            "end": 2829
          }
        ],
        "start": 625,
        "end": 2831
      },
      "expression": false,
      "start": 604,
      "end": 2831
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "reportDiagnostic",
        "optional": false,
        "typeAnnotation": null,
        "start": 2842,
        "end": 2858
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "diagnostic",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2871,
                  "end": 2873
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Diagnostic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2874,
                  "end": 2884
                },
                "start": 2871,
                "end": 2884
              },
              "typeArguments": null,
              "start": 2871,
              "end": 2884
            },
            "start": 2869,
            "end": 2884
          },
          "start": 2859,
          "end": 2884
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
                  "start": 2892,
                  "end": 2899
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2900,
                  "end": 2905
                },
                "optional": false,
                "computed": false,
                "start": 2892,
                "end": 2905
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Error",
                  "raw": "\"Error\"",
                  "start": 2906,
                  "end": 2913
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "diagnostic",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2915,
                    "end": 2925
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "code",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2926,
                    "end": 2930
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2915,
                  "end": 2930
                },
                {
                  "type": "Literal",
                  "value": ":",
                  "raw": "\":\"",
                  "start": 2932,
                  "end": 2935
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2945,
                      "end": 2947
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "flattenDiagnosticMessageText",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2948,
                      "end": 2976
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2945,
                    "end": 2976
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "diagnostic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2977,
                        "end": 2987
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "messageText",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2988,
                        "end": 2999
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2977,
                      "end": 2999
                    },
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "formatHost",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3001,
                          "end": 3011
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getNewLine",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3012,
                          "end": 3022
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3001,
                        "end": 3022
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 3001,
                      "end": 3024
                    }
                  ],
                  "optional": false,
                  "start": 2945,
                  "end": 3025
                }
              ],
              "optional": false,
              "start": 2892,
              "end": 3031
            },
            "directive": null,
            "start": 2892,
            "end": 3032
          }
        ],
        "start": 2886,
        "end": 3034
      },
      "expression": false,
      "start": 2833,
      "end": 3034
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "reportWatchStatusChanged",
        "optional": false,
        "typeAnnotation": null,
        "start": 3200,
        "end": 3224
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "diagnostic",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3237,
                  "end": 3239
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Diagnostic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3240,
                  "end": 3250
                },
                "start": 3237,
                "end": 3250
              },
              "typeArguments": null,
              "start": 3237,
              "end": 3250
            },
            "start": 3235,
            "end": 3250
          },
          "start": 3225,
          "end": 3250
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
                  "start": 3258,
                  "end": 3265
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "info",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3266,
                  "end": 3270
                },
                "optional": false,
                "computed": false,
                "start": 3258,
                "end": 3270
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3271,
                      "end": 3273
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "formatDiagnostic",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3274,
                      "end": 3290
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3271,
                    "end": 3290
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "diagnostic",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3291,
                      "end": 3301
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "formatHost",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3303,
                      "end": 3313
                    }
                  ],
                  "optional": false,
                  "start": 3271,
                  "end": 3314
                }
              ],
              "optional": false,
              "start": 3258,
              "end": 3315
            },
            "directive": null,
            "start": 3258,
            "end": 3316
          }
        ],
        "start": 3252,
        "end": 3318
      },
      "expression": false,
      "start": 3191,
      "end": 3318
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
          "start": 3320,
          "end": 3329
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 3320,
        "end": 3331
      },
      "directive": null,
      "start": 3320,
      "end": 3332
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 313,
  "end": 3332
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 313,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 321,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "process",
    "start": 325,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 334,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 339,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 347,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 351,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 360,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 365,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 373,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "os",
    "start": 377,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 381,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 387,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 394,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 399,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 406,
    "end": 407
  },
  {
    "type": "String",
    "value": "\"typescript\"",
    "start": 407,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 423,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "formatHost",
    "start": 429,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 441,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "FormatDiagnosticsHost",
    "start": 444,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "getCanonicalFileName",
    "start": 474,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 496,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 501,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 504,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "getCurrentDirectory",
    "start": 514,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 535,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "sys",
    "start": 538,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "getCurrentDirectory",
    "start": 542,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "getNewLine",
    "start": 567,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 582,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 585,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "sys",
    "start": 588,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "newLine",
    "start": 592,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 601,
    "end": 602
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 604,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "watchMain",
    "start": 613,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 625,
    "end": 626
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 631,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "configPath",
    "start": 637,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 650,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "findConfigFile",
    "start": 653,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 667,
    "end": 668
  },
  {
    "type": "String",
    "value": "\"./\"",
    "start": 683,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 689,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "sys",
    "start": 692,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "fileExists",
    "start": 696,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 706,
    "end": 707
  },
  {
    "type": "String",
    "value": "\"tsconfig.json\"",
    "start": 708,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 724,
    "end": 725
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 730,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "configPath",
    "start": 735,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 747,
    "end": 748
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 757,
    "end": 762
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 763,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 767,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 772,
    "end": 773
  },
  {
    "type": "String",
    "value": "\"Could not find a valid 'tsconfig.json'.\"",
    "start": 773,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 821,
    "end": 822
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1802,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 1808,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1815,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "createWatchCompilerHost",
    "start": 1818,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "configPath",
    "start": 1842,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1858,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "sys",
    "start": 1861,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1874,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Identifier",
    "value": "createSemanticDiagnosticsBuilderProgram",
    "start": 1877,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "reportDiagnostic",
    "start": 1926,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Identifier",
    "value": "reportWatchStatusChanged",
    "start": 1952,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2196,
    "end": 2201
  },
  {
    "type": "Identifier",
    "value": "origCreateProgram",
    "start": 2202,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 2222,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Identifier",
    "value": "createProgram",
    "start": 2227,
    "end": 2240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 2246,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Identifier",
    "value": "createProgram",
    "start": 2251,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Identifier",
    "value": "rootNames",
    "start": 2268,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 2279,
    "end": 2292
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2293,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 2302,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 2311,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Identifier",
    "value": "oldProgram",
    "start": 2317,
    "end": 2327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2329,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2342,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2350,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "String",
    "value": "\"** We're about to create the program! **\"",
    "start": 2354,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2407,
    "end": 2413
  },
  {
    "type": "Identifier",
    "value": "origCreateProgram",
    "start": 2414,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Identifier",
    "value": "rootNames",
    "start": 2432,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 2443,
    "end": 2450
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 2452,
    "end": 2456
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Identifier",
    "value": "oldProgram",
    "start": 2458,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2481,
    "end": 2486
  },
  {
    "type": "Identifier",
    "value": "origPostProgramCreate",
    "start": 2487,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2509,
    "end": 2510
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 2511,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Identifier",
    "value": "afterProgramCreate",
    "start": 2516,
    "end": 2534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 2541,
    "end": 2545
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Identifier",
    "value": "afterProgramCreate",
    "start": 2546,
    "end": 2564
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2565,
    "end": 2566
  },
  {
    "type": "Identifier",
    "value": "program",
    "start": 2567,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2575,
    "end": 2577
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2578,
    "end": 2579
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2588,
    "end": 2595
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2596,
    "end": 2599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2599,
    "end": 2600
  },
  {
    "type": "String",
    "value": "\"** We finished making the program! **\"",
    "start": 2600,
    "end": 2639
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2639,
    "end": 2640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Identifier",
    "value": "origPostProgramCreate",
    "start": 2650,
    "end": 2671
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2672,
    "end": 2673
  },
  {
    "type": "Identifier",
    "value": "program",
    "start": 2673,
    "end": 2680
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2680,
    "end": 2681
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2687,
    "end": 2688
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2688,
    "end": 2689
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2801,
    "end": 2803
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2803,
    "end": 2804
  },
  {
    "type": "Identifier",
    "value": "createWatchProgram",
    "start": 2804,
    "end": 2822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2822,
    "end": 2823
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 2823,
    "end": 2827
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2827,
    "end": 2828
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2828,
    "end": 2829
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2830,
    "end": 2831
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2833,
    "end": 2841
  },
  {
    "type": "Identifier",
    "value": "reportDiagnostic",
    "start": 2842,
    "end": 2858
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Identifier",
    "value": "diagnostic",
    "start": 2859,
    "end": 2869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2869,
    "end": 2870
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2871,
    "end": 2873
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Identifier",
    "value": "Diagnostic",
    "start": 2874,
    "end": 2884
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2884,
    "end": 2885
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2892,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2899,
    "end": 2900
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 2900,
    "end": 2905
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2905,
    "end": 2906
  },
  {
    "type": "String",
    "value": "\"Error\"",
    "start": 2906,
    "end": 2913
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2913,
    "end": 2914
  },
  {
    "type": "Identifier",
    "value": "diagnostic",
    "start": 2915,
    "end": 2925
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2925,
    "end": 2926
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 2926,
    "end": 2930
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "String",
    "value": "\":\"",
    "start": 2932,
    "end": 2935
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2945,
    "end": 2947
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2947,
    "end": 2948
  },
  {
    "type": "Identifier",
    "value": "flattenDiagnosticMessageText",
    "start": 2948,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2976,
    "end": 2977
  },
  {
    "type": "Identifier",
    "value": "diagnostic",
    "start": 2977,
    "end": 2987
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2987,
    "end": 2988
  },
  {
    "type": "Identifier",
    "value": "messageText",
    "start": 2988,
    "end": 2999
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2999,
    "end": 3000
  },
  {
    "type": "Identifier",
    "value": "formatHost",
    "start": 3001,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Identifier",
    "value": "getNewLine",
    "start": 3012,
    "end": 3022
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3023,
    "end": 3024
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3024,
    "end": 3025
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3030,
    "end": 3031
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3031,
    "end": 3032
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3033,
    "end": 3034
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3191,
    "end": 3199
  },
  {
    "type": "Identifier",
    "value": "reportWatchStatusChanged",
    "start": 3200,
    "end": 3224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3224,
    "end": 3225
  },
  {
    "type": "Identifier",
    "value": "diagnostic",
    "start": 3225,
    "end": 3235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3235,
    "end": 3236
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 3237,
    "end": 3239
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3239,
    "end": 3240
  },
  {
    "type": "Identifier",
    "value": "Diagnostic",
    "start": 3240,
    "end": 3250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3250,
    "end": 3251
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3252,
    "end": 3253
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3258,
    "end": 3265
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3265,
    "end": 3266
  },
  {
    "type": "Identifier",
    "value": "info",
    "start": 3266,
    "end": 3270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3270,
    "end": 3271
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 3271,
    "end": 3273
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3273,
    "end": 3274
  },
  {
    "type": "Identifier",
    "value": "formatDiagnostic",
    "start": 3274,
    "end": 3290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3290,
    "end": 3291
  },
  {
    "type": "Identifier",
    "value": "diagnostic",
    "start": 3291,
    "end": 3301
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3301,
    "end": 3302
  },
  {
    "type": "Identifier",
    "value": "formatHost",
    "start": 3303,
    "end": 3313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3313,
    "end": 3314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3314,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3315,
    "end": 3316
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3317,
    "end": 3318
  },
  {
    "type": "Identifier",
    "value": "watchMain",
    "start": 3320,
    "end": 3329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3329,
    "end": 3330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3330,
    "end": 3331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3331,
    "end": 3332
  }
]
```
