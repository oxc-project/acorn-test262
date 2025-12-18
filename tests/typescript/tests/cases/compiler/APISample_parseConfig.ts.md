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
                "start": 299,
                "end": 302
              },
              "start": 297,
              "end": 302
            },
            "start": 290,
            "end": 302
          },
          "init": null,
          "definite": false,
          "start": 290,
          "end": 302
        }
      ],
      "declare": true,
      "start": 278,
      "end": 303
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
                "start": 325,
                "end": 328
              },
              "start": 323,
              "end": 328
            },
            "start": 316,
            "end": 328
          },
          "init": null,
          "definite": false,
          "start": 316,
          "end": 328
        }
      ],
      "declare": true,
      "start": 304,
      "end": 329
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
                "start": 346,
                "end": 349
              },
              "start": 344,
              "end": 349
            },
            "start": 342,
            "end": 349
          },
          "init": null,
          "definite": false,
          "start": 342,
          "end": 349
        }
      ],
      "declare": true,
      "start": 330,
      "end": 350
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ts",
        "optional": false,
        "typeAnnotation": null,
        "start": 359,
        "end": 361
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "typescript",
          "raw": "\"typescript\"",
          "start": 372,
          "end": 384
        },
        "start": 364,
        "end": 385
      },
      "importKind": "value",
      "start": 352,
      "end": 386
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "printError",
        "optional": false,
        "typeAnnotation": null,
        "start": 397,
        "end": 407
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "error",
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
                  "start": 415,
                  "end": 417
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Diagnostic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 418,
                  "end": 428
                },
                "start": 415,
                "end": 428
              },
              "typeArguments": null,
              "start": 415,
              "end": 428
            },
            "start": 413,
            "end": 428
          },
          "start": 408,
          "end": 428
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 431,
          "end": 435
        },
        "start": 429,
        "end": 435
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": null,
                "start": 447,
                "end": 452
              },
              "prefix": true,
              "start": 446,
              "end": 452
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 464,
                  "end": 471
                }
              ],
              "start": 454,
              "end": 477
            },
            "alternate": null,
            "start": 442,
            "end": 477
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 482,
                  "end": 489
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 490,
                  "end": 493
                },
                "optional": false,
                "computed": false,
                "start": 482,
                "end": 493
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false,
                      "start": 494,
                      "end": 497
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ": ",
                        "cooked": ": "
                      },
                      "tail": false,
                      "start": 530,
                      "end": 535
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 552,
                      "end": 554
                    }
                  ],
                  "expressions": [
                    {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "error",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 497,
                          "end": 502
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "file",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 503,
                          "end": 507
                        },
                        "optional": false,
                        "computed": false,
                        "start": 497,
                        "end": 507
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "error",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 511,
                            "end": 516
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "file",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 517,
                            "end": 521
                          },
                          "optional": false,
                          "computed": false,
                          "start": 511,
                          "end": 521
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fileName",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 522,
                          "end": 530
                        },
                        "optional": false,
                        "computed": false,
                        "start": 511,
                        "end": 530
                      },
                      "start": 497,
                      "end": 530
                    },
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 535,
                        "end": 540
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "messageText",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 541,
                        "end": 552
                      },
                      "optional": false,
                      "computed": false,
                      "start": 535,
                      "end": 552
                    }
                  ],
                  "start": 494,
                  "end": 554
                }
              ],
              "optional": false,
              "start": 482,
              "end": 555
            },
            "directive": null,
            "start": 482,
            "end": 556
          }
        ],
        "start": 436,
        "end": 558
      },
      "expression": false,
      "start": 388,
      "end": 558
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "createProgram",
          "optional": false,
          "typeAnnotation": null,
          "start": 576,
          "end": 589
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "rootFiles",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 601,
                  "end": 607
                },
                "start": 601,
                "end": 609
              },
              "start": 599,
              "end": 609
            },
            "start": 590,
            "end": 609
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "compilerOptionsJson",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 632,
                "end": 638
              },
              "start": 630,
              "end": 638
            },
            "start": 611,
            "end": 638
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ts",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 641,
                    "end": 643
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Program",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 644,
                    "end": 651
                  },
                  "start": 641,
                  "end": 651
                },
                "typeArguments": null,
                "start": 641,
                "end": 651
              },
              {
                "type": "TSUndefinedKeyword",
                "start": 654,
                "end": 663
              }
            ],
            "start": 641,
            "end": 663
          },
          "start": 639,
          "end": 663
        },
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
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "config",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 678,
                          "end": 684
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "config",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 678,
                          "end": 684
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 678,
                        "end": 684
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "error",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 686,
                          "end": 691
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "error",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 686,
                          "end": 691
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 686,
                        "end": 691
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 676,
                    "end": 693
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
                        "start": 696,
                        "end": 698
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "parseConfigFileTextToJson",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 699,
                        "end": 724
                      },
                      "optional": false,
                      "computed": false,
                      "start": 696,
                      "end": 724
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "tsconfig.json",
                        "raw": "\"tsconfig.json\"",
                        "start": 725,
                        "end": 740
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "compilerOptionsJson",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 742,
                        "end": 761
                      }
                    ],
                    "optional": false,
                    "start": 696,
                    "end": 762
                  },
                  "definite": false,
                  "start": 676,
                  "end": 762
                }
              ],
              "declare": false,
              "start": 670,
              "end": 762
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": null,
                "start": 771,
                "end": 776
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "printError",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 788,
                        "end": 798
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "error",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 799,
                          "end": 804
                        }
                      ],
                      "optional": false,
                      "start": 788,
                      "end": 805
                    },
                    "directive": null,
                    "start": 788,
                    "end": 806
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 822,
                      "end": 831
                    },
                    "start": 815,
                    "end": 832
                  }
                ],
                "start": 778,
                "end": 838
              },
              "alternate": null,
              "start": 767,
              "end": 838
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
                    "name": "basePath",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 859,
                        "end": 865
                      },
                      "start": 857,
                      "end": 865
                    },
                    "start": 849,
                    "end": 865
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "process",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 868,
                        "end": 875
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cwd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 876,
                        "end": 879
                      },
                      "optional": false,
                      "computed": false,
                      "start": 868,
                      "end": 879
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 868,
                    "end": 881
                  },
                  "definite": false,
                  "start": 849,
                  "end": 881
                }
              ],
              "declare": false,
              "start": 843,
              "end": 882
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
                    "name": "settings",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 893,
                    "end": 901
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
                        "start": 904,
                        "end": 906
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "convertCompilerOptionsFromJson",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 907,
                        "end": 937
                      },
                      "optional": false,
                      "computed": false,
                      "start": 904,
                      "end": 937
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "config",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 938,
                            "end": 944
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "config",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 945,
                            "end": 951
                          },
                          "optional": false,
                          "computed": false,
                          "start": 938,
                          "end": 951
                        },
                        "property": {
                          "type": "Literal",
                          "value": "compilerOptions",
                          "raw": "\"compilerOptions\"",
                          "start": 952,
                          "end": 969
                        },
                        "optional": false,
                        "computed": true,
                        "start": 938,
                        "end": 970
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "basePath",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 972,
                        "end": 980
                      }
                    ],
                    "optional": false,
                    "start": 904,
                    "end": 981
                  },
                  "definite": false,
                  "start": 893,
                  "end": 981
                }
              ],
              "declare": false,
              "start": 887,
              "end": 982
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "settings",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 992,
                    "end": 1000
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1001,
                    "end": 1008
                  },
                  "optional": false,
                  "computed": false,
                  "start": 992,
                  "end": 1008
                },
                "prefix": true,
                "start": 991,
                "end": 1008
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForOfStatement",
                    "await": false,
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "err",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1031,
                            "end": 1034
                          },
                          "init": null,
                          "definite": false,
                          "start": 1031,
                          "end": 1034
                        }
                      ],
                      "declare": false,
                      "start": 1025,
                      "end": 1034
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "settings",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1038,
                        "end": 1046
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "errors",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1047,
                        "end": 1053
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1038,
                      "end": 1053
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "printError",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1069,
                              "end": 1079
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "err",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1080,
                                "end": 1083
                              }
                            ],
                            "optional": false,
                            "start": 1069,
                            "end": 1084
                          },
                          "directive": null,
                          "start": 1069,
                          "end": 1085
                        }
                      ],
                      "start": 1055,
                      "end": 1095
                    },
                    "start": 1020,
                    "end": 1095
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1111,
                      "end": 1120
                    },
                    "start": 1104,
                    "end": 1121
                  }
                ],
                "start": 1010,
                "end": 1127
              },
              "alternate": null,
              "start": 987,
              "end": 1127
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ts",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1139,
                    "end": 1141
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "createProgram",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1142,
                    "end": 1155
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1139,
                  "end": 1155
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rootFiles",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1156,
                    "end": 1165
                  },
                  {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "settings",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1167,
                      "end": 1175
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1176,
                      "end": 1183
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1167,
                    "end": 1183
                  }
                ],
                "optional": false,
                "start": 1139,
                "end": 1184
              },
              "start": 1132,
              "end": 1185
            }
          ],
          "start": 664,
          "end": 1187
        },
        "expression": false,
        "start": 567,
        "end": 1187
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 560,
      "end": 1187
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 278,
  "end": 1187
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 278,
    "end": 285,
    "range": [
      278,
      285
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 286,
    "end": 289,
    "range": [
      286,
      289
    ]
  },
  {
    "type": "Identifier",
    "value": "process",
    "start": 290,
    "end": 297,
    "range": [
      290,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 299,
    "end": 302,
    "range": [
      299,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 304,
    "end": 311,
    "range": [
      304,
      311
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 312,
    "end": 315,
    "range": [
      312,
      315
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 316,
    "end": 323,
    "range": [
      316,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 325,
    "end": 328,
    "range": [
      325,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 330,
    "end": 337,
    "range": [
      330,
      337
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 338,
    "end": 341,
    "range": [
      338,
      341
    ]
  },
  {
    "type": "Identifier",
    "value": "os",
    "start": 342,
    "end": 344,
    "range": [
      342,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 346,
    "end": 349,
    "range": [
      346,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 352,
    "end": 358,
    "range": [
      352,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 359,
    "end": 361,
    "range": [
      359,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 364,
    "end": 371,
    "range": [
      364,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "String",
    "value": "\"typescript\"",
    "start": 372,
    "end": 384,
    "range": [
      372,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 388,
    "end": 396,
    "range": [
      388,
      396
    ]
  },
  {
    "type": "Identifier",
    "value": "printError",
    "start": 397,
    "end": 407,
    "range": [
      397,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 408,
    "end": 413,
    "range": [
      408,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 415,
    "end": 417,
    "range": [
      415,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Identifier",
    "value": "Diagnostic",
    "start": 418,
    "end": 428,
    "range": [
      418,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 431,
    "end": 435,
    "range": [
      431,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 442,
    "end": 444,
    "range": [
      442,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 447,
    "end": 452,
    "range": [
      447,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 464,
    "end": 470,
    "range": [
      464,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 482,
    "end": 489,
    "range": [
      482,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 490,
    "end": 493,
    "range": [
      490,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 494,
    "end": 497,
    "range": [
      494,
      497
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 497,
    "end": 502,
    "range": [
      497,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 503,
    "end": 507,
    "range": [
      503,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 508,
    "end": 510,
    "range": [
      508,
      510
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 511,
    "end": 516,
    "range": [
      511,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 517,
    "end": 521,
    "range": [
      517,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 522,
    "end": 530,
    "range": [
      522,
      530
    ]
  },
  {
    "type": "Template",
    "value": "}: ${",
    "start": 530,
    "end": 535,
    "range": [
      530,
      535
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 535,
    "end": 540,
    "range": [
      535,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Identifier",
    "value": "messageText",
    "start": 541,
    "end": 552,
    "range": [
      541,
      552
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 552,
    "end": 554,
    "range": [
      552,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 560,
    "end": 566,
    "range": [
      560,
      566
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 567,
    "end": 575,
    "range": [
      567,
      575
    ]
  },
  {
    "type": "Identifier",
    "value": "createProgram",
    "start": 576,
    "end": 589,
    "range": [
      576,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Identifier",
    "value": "rootFiles",
    "start": 590,
    "end": 599,
    "range": [
      590,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 601,
    "end": 607,
    "range": [
      601,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Identifier",
    "value": "compilerOptionsJson",
    "start": 611,
    "end": 630,
    "range": [
      611,
      630
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 632,
    "end": 638,
    "range": [
      632,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 641,
    "end": 643,
    "range": [
      641,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Identifier",
    "value": "Program",
    "start": 644,
    "end": 651,
    "range": [
      644,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 654,
    "end": 663,
    "range": [
      654,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 670,
    "end": 675,
    "range": [
      670,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 678,
    "end": 684,
    "range": [
      678,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 686,
    "end": 691,
    "range": [
      686,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 696,
    "end": 698,
    "range": [
      696,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Identifier",
    "value": "parseConfigFileTextToJson",
    "start": 699,
    "end": 724,
    "range": [
      699,
      724
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "String",
    "value": "\"tsconfig.json\"",
    "start": 725,
    "end": 740,
    "range": [
      725,
      740
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 740,
    "end": 741,
    "range": [
      740,
      741
    ]
  },
  {
    "type": "Identifier",
    "value": "compilerOptionsJson",
    "start": 742,
    "end": 761,
    "range": [
      742,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 767,
    "end": 769,
    "range": [
      767,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 771,
    "end": 776,
    "range": [
      771,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Identifier",
    "value": "printError",
    "start": 788,
    "end": 798,
    "range": [
      788,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 799,
    "end": 804,
    "range": [
      799,
      804
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 815,
    "end": 821,
    "range": [
      815,
      821
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 822,
    "end": 831,
    "range": [
      822,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 843,
    "end": 848,
    "range": [
      843,
      848
    ]
  },
  {
    "type": "Identifier",
    "value": "basePath",
    "start": 849,
    "end": 857,
    "range": [
      849,
      857
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 859,
    "end": 865,
    "range": [
      859,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Identifier",
    "value": "process",
    "start": 868,
    "end": 875,
    "range": [
      868,
      875
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 875,
    "end": 876,
    "range": [
      875,
      876
    ]
  },
  {
    "type": "Identifier",
    "value": "cwd",
    "start": 876,
    "end": 879,
    "range": [
      876,
      879
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 887,
    "end": 892,
    "range": [
      887,
      892
    ]
  },
  {
    "type": "Identifier",
    "value": "settings",
    "start": 893,
    "end": 901,
    "range": [
      893,
      901
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 902,
    "end": 903,
    "range": [
      902,
      903
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 904,
    "end": 906,
    "range": [
      904,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Identifier",
    "value": "convertCompilerOptionsFromJson",
    "start": 907,
    "end": 937,
    "range": [
      907,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 937,
    "end": 938,
    "range": [
      937,
      938
    ]
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 938,
    "end": 944,
    "range": [
      938,
      944
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 945,
    "end": 951,
    "range": [
      945,
      951
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 951,
    "end": 952,
    "range": [
      951,
      952
    ]
  },
  {
    "type": "String",
    "value": "\"compilerOptions\"",
    "start": 952,
    "end": 969,
    "range": [
      952,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Identifier",
    "value": "basePath",
    "start": 972,
    "end": 980,
    "range": [
      972,
      980
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 980,
    "end": 981,
    "range": [
      980,
      981
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 981,
    "end": 982,
    "range": [
      981,
      982
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 987,
    "end": 989,
    "range": [
      987,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 990,
    "end": 991,
    "range": [
      990,
      991
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 991,
    "end": 992,
    "range": [
      991,
      992
    ]
  },
  {
    "type": "Identifier",
    "value": "settings",
    "start": 992,
    "end": 1000,
    "range": [
      992,
      1000
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1000,
    "end": 1001,
    "range": [
      1000,
      1001
    ]
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 1001,
    "end": 1008,
    "range": [
      1001,
      1008
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1008,
    "end": 1009,
    "range": [
      1008,
      1009
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1020,
    "end": 1023,
    "range": [
      1020,
      1023
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1024,
    "end": 1025,
    "range": [
      1024,
      1025
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1025,
    "end": 1030,
    "range": [
      1025,
      1030
    ]
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 1031,
    "end": 1034,
    "range": [
      1031,
      1034
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1035,
    "end": 1037,
    "range": [
      1035,
      1037
    ]
  },
  {
    "type": "Identifier",
    "value": "settings",
    "start": 1038,
    "end": 1046,
    "range": [
      1038,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Identifier",
    "value": "errors",
    "start": 1047,
    "end": 1053,
    "range": [
      1047,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Identifier",
    "value": "printError",
    "start": 1069,
    "end": 1079,
    "range": [
      1069,
      1079
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1079,
    "end": 1080,
    "range": [
      1079,
      1080
    ]
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 1080,
    "end": 1083,
    "range": [
      1080,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1083,
    "end": 1084,
    "range": [
      1083,
      1084
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1104,
    "end": 1110,
    "range": [
      1104,
      1110
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1111,
    "end": 1120,
    "range": [
      1111,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1126,
    "end": 1127,
    "range": [
      1126,
      1127
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1132,
    "end": 1138,
    "range": [
      1132,
      1138
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1139,
    "end": 1141,
    "range": [
      1139,
      1141
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Identifier",
    "value": "createProgram",
    "start": 1142,
    "end": 1155,
    "range": [
      1142,
      1155
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1155,
    "end": 1156,
    "range": [
      1155,
      1156
    ]
  },
  {
    "type": "Identifier",
    "value": "rootFiles",
    "start": 1156,
    "end": 1165,
    "range": [
      1156,
      1165
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Identifier",
    "value": "settings",
    "start": 1167,
    "end": 1175,
    "range": [
      1167,
      1175
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 1176,
    "end": 1183,
    "range": [
      1176,
      1183
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1184,
    "end": 1185,
    "range": [
      1184,
      1185
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  }
]
```
