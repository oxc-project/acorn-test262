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
