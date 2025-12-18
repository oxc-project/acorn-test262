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
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "compile",
          "optional": false,
          "typeAnnotation": null,
          "start": 404,
          "end": 411
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fileNames",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 423,
                  "end": 429
                },
                "start": 423,
                "end": 431
              },
              "start": 421,
              "end": 431
            },
            "start": 412,
            "end": 431
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "options",
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
                    "start": 442,
                    "end": 444
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CompilerOptions",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 445,
                    "end": 460
                  },
                  "start": 442,
                  "end": 460
                },
                "typeArguments": null,
                "start": 442,
                "end": 460
              },
              "start": 440,
              "end": 460
            },
            "start": 433,
            "end": 460
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 463,
            "end": 467
          },
          "start": 461,
          "end": 467
        },
        "body": {
          "type": "BlockStatement",
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
                    "name": "program",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 478,
                    "end": 485
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
                        "start": 488,
                        "end": 490
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "createProgram",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 491,
                        "end": 504
                      },
                      "optional": false,
                      "computed": false,
                      "start": 488,
                      "end": 504
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fileNames",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 505,
                        "end": 514
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 516,
                        "end": 523
                      }
                    ],
                    "optional": false,
                    "start": 488,
                    "end": 524
                  },
                  "definite": false,
                  "start": 478,
                  "end": 524
                }
              ],
              "declare": false,
              "start": 474,
              "end": 525
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
                    "name": "emitResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 534,
                    "end": 544
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "program",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 547,
                        "end": 554
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "emit",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 555,
                        "end": 559
                      },
                      "optional": false,
                      "computed": false,
                      "start": 547,
                      "end": 559
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 547,
                    "end": 561
                  },
                  "definite": false,
                  "start": 534,
                  "end": 561
                }
              ],
              "declare": false,
              "start": 530,
              "end": 562
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
                    "name": "allDiagnostics",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 572,
                    "end": 586
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
                        "start": 589,
                        "end": 591
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getPreEmitDiagnostics",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 592,
                        "end": 613
                      },
                      "optional": false,
                      "computed": false,
                      "start": 589,
                      "end": 613
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "program",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 614,
                        "end": 621
                      }
                    ],
                    "optional": false,
                    "start": 589,
                    "end": 622
                  },
                  "definite": false,
                  "start": 572,
                  "end": 622
                }
              ],
              "declare": false,
              "start": 568,
              "end": 623
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
                    "name": "allDiagnostics",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 629,
                    "end": 643
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "forEach",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 644,
                    "end": 651
                  },
                  "optional": false,
                  "computed": false,
                  "start": 629,
                  "end": 651
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "diagnostic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 652,
                        "end": 662
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
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
                                "name": "message",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 680,
                                "end": 687
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
                                    "start": 690,
                                    "end": 692
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "flattenDiagnosticMessageText",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 693,
                                    "end": 721
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 690,
                                  "end": 721
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
                                      "start": 722,
                                      "end": 732
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "messageText",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 733,
                                      "end": 744
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 722,
                                    "end": 744
                                  },
                                  {
                                    "type": "Literal",
                                    "value": "\n",
                                    "raw": "'\\n'",
                                    "start": 746,
                                    "end": 750
                                  }
                                ],
                                "optional": false,
                                "start": 690,
                                "end": 751
                              },
                              "definite": false,
                              "start": 680,
                              "end": 751
                            }
                          ],
                          "declare": false,
                          "start": 676,
                          "end": 752
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
                                "name": "diagnostic",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 766,
                                "end": 776
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "file",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 777,
                                "end": 781
                              },
                              "optional": false,
                              "computed": false,
                              "start": 766,
                              "end": 781
                            },
                            "prefix": true,
                            "start": 765,
                            "end": 781
                          },
                          "consequent": {
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
                                      "start": 797,
                                      "end": 804
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 805,
                                      "end": 808
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 797,
                                    "end": 808
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "message",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 809,
                                      "end": 816
                                    }
                                  ],
                                  "optional": false,
                                  "start": 797,
                                  "end": 817
                                },
                                "directive": null,
                                "start": 797,
                                "end": 818
                              },
                              {
                                "type": "ReturnStatement",
                                "argument": null,
                                "start": 831,
                                "end": 838
                              }
                            ],
                            "start": 783,
                            "end": 848
                          },
                          "alternate": null,
                          "start": 761,
                          "end": 848
                        },
                        {
                          "type": "VariableDeclaration",
                          "kind": "var",
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
                                      "name": "line",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 863,
                                      "end": 867
                                    },
                                    "value": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "line",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 863,
                                      "end": 867
                                    },
                                    "method": false,
                                    "shorthand": true,
                                    "computed": false,
                                    "optional": false,
                                    "start": 863,
                                    "end": 867
                                  },
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "character",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 869,
                                      "end": 878
                                    },
                                    "value": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "character",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 869,
                                      "end": 878
                                    },
                                    "method": false,
                                    "shorthand": true,
                                    "computed": false,
                                    "optional": false,
                                    "start": 869,
                                    "end": 878
                                  }
                                ],
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 861,
                                "end": 880
                              },
                              "init": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "diagnostic",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 883,
                                      "end": 893
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "file",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 894,
                                      "end": 898
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 883,
                                    "end": 898
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "getLineAndCharacterOfPosition",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 899,
                                    "end": 928
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 883,
                                  "end": 928
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "TSNonNullExpression",
                                    "expression": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "diagnostic",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 929,
                                        "end": 939
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "start",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 940,
                                        "end": 945
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 929,
                                      "end": 945
                                    },
                                    "start": 929,
                                    "end": 946
                                  }
                                ],
                                "optional": false,
                                "start": 883,
                                "end": 947
                              },
                              "definite": false,
                              "start": 861,
                              "end": 947
                            }
                          ],
                          "declare": false,
                          "start": 857,
                          "end": 948
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
                                "start": 957,
                                "end": 964
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "log",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 965,
                                "end": 968
                              },
                              "optional": false,
                              "computed": false,
                              "start": 957,
                              "end": 968
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
                                    "start": 969,
                                    "end": 972
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": " (",
                                      "cooked": " ("
                                    },
                                    "tail": false,
                                    "start": 996,
                                    "end": 1001
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": ",",
                                      "cooked": ","
                                    },
                                    "tail": false,
                                    "start": 1009,
                                    "end": 1013
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "): ",
                                      "cooked": "): "
                                    },
                                    "tail": false,
                                    "start": 1026,
                                    "end": 1032
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "",
                                      "cooked": ""
                                    },
                                    "tail": true,
                                    "start": 1039,
                                    "end": 1041
                                  }
                                ],
                                "expressions": [
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "diagnostic",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 972,
                                        "end": 982
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "file",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 983,
                                        "end": 987
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 972,
                                      "end": 987
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "fileName",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 988,
                                      "end": 996
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 972,
                                    "end": 996
                                  },
                                  {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "line",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1001,
                                      "end": 1005
                                    },
                                    "operator": "+",
                                    "right": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1",
                                      "start": 1008,
                                      "end": 1009
                                    },
                                    "start": 1001,
                                    "end": 1009
                                  },
                                  {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "character",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1013,
                                      "end": 1022
                                    },
                                    "operator": "+",
                                    "right": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1",
                                      "start": 1025,
                                      "end": 1026
                                    },
                                    "start": 1013,
                                    "end": 1026
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "message",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1032,
                                    "end": 1039
                                  }
                                ],
                                "start": 969,
                                "end": 1041
                              }
                            ],
                            "optional": false,
                            "start": 957,
                            "end": 1042
                          },
                          "directive": null,
                          "start": 957,
                          "end": 1043
                        }
                      ],
                      "start": 666,
                      "end": 1049
                    },
                    "id": null,
                    "generator": false,
                    "start": 652,
                    "end": 1049
                  }
                ],
                "optional": false,
                "start": 629,
                "end": 1050
              },
              "directive": null,
              "start": 629,
              "end": 1051
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
                    "name": "exitCode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1061,
                    "end": 1069
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "emitResult",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1072,
                        "end": 1082
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "emitSkipped",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1083,
                        "end": 1094
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1072,
                      "end": 1094
                    },
                    "consequent": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1097,
                      "end": 1098
                    },
                    "alternate": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1101,
                      "end": 1102
                    },
                    "start": 1072,
                    "end": 1102
                  },
                  "definite": false,
                  "start": 1061,
                  "end": 1102
                }
              ],
              "declare": false,
              "start": 1057,
              "end": 1103
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
                    "start": 1108,
                    "end": 1115
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1116,
                    "end": 1119
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1108,
                  "end": 1119
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "Process exiting with code '",
                          "cooked": "Process exiting with code '"
                        },
                        "tail": false,
                        "start": 1120,
                        "end": 1150
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "'.",
                          "cooked": "'."
                        },
                        "tail": true,
                        "start": 1158,
                        "end": 1162
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "exitCode",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1150,
                        "end": 1158
                      }
                    ],
                    "start": 1120,
                    "end": 1162
                  }
                ],
                "optional": false,
                "start": 1108,
                "end": 1163
              },
              "directive": null,
              "start": 1108,
              "end": 1164
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
                    "name": "process",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1169,
                    "end": 1176
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "exit",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1177,
                    "end": 1181
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1169,
                  "end": 1181
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "exitCode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1182,
                    "end": 1190
                  }
                ],
                "optional": false,
                "start": 1169,
                "end": 1191
              },
              "directive": null,
              "start": 1169,
              "end": 1192
            }
          ],
          "start": 468,
          "end": 1194
        },
        "expression": false,
        "start": 395,
        "end": 1194
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 388,
      "end": 1194
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "compile",
          "optional": false,
          "typeAnnotation": null,
          "start": 1196,
          "end": 1203
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "process",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1204,
                  "end": 1211
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "argv",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1212,
                  "end": 1216
                },
                "optional": false,
                "computed": false,
                "start": 1204,
                "end": 1216
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "slice",
                "optional": false,
                "typeAnnotation": null,
                "start": 1217,
                "end": 1222
              },
              "optional": false,
              "computed": false,
              "start": 1204,
              "end": 1222
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1223,
                "end": 1224
              }
            ],
            "optional": false,
            "start": 1204,
            "end": 1225
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "noEmitOnError",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1233,
                  "end": 1246
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1248,
                  "end": 1252
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1233,
                "end": 1252
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "noImplicitAny",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1254,
                  "end": 1267
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1269,
                  "end": 1273
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1254,
                "end": 1273
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1279,
                  "end": 1285
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
                      "start": 1287,
                      "end": 1289
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ScriptTarget",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1290,
                      "end": 1302
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1287,
                    "end": 1302
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ES5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1303,
                    "end": 1306
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1287,
                  "end": 1306
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1279,
                "end": 1306
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "module",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1308,
                  "end": 1314
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
                      "start": 1316,
                      "end": 1318
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ModuleKind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1319,
                      "end": 1329
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1316,
                    "end": 1329
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CommonJS",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1330,
                    "end": 1338
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1316,
                  "end": 1338
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1308,
                "end": 1338
              }
            ],
            "start": 1227,
            "end": 1340
          }
        ],
        "optional": false,
        "start": 1196,
        "end": 1341
      },
      "directive": null,
      "start": 1196,
      "end": 1342
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 278,
  "end": 1342
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
    "value": "export",
    "start": 388,
    "end": 394,
    "range": [
      388,
      394
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 395,
    "end": 403,
    "range": [
      395,
      403
    ]
  },
  {
    "type": "Identifier",
    "value": "compile",
    "start": 404,
    "end": 411,
    "range": [
      404,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Identifier",
    "value": "fileNames",
    "start": 412,
    "end": 421,
    "range": [
      412,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 423,
    "end": 429,
    "range": [
      423,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 433,
    "end": 440,
    "range": [
      433,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 442,
    "end": 444,
    "range": [
      442,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Identifier",
    "value": "CompilerOptions",
    "start": 445,
    "end": 460,
    "range": [
      445,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 463,
    "end": 467,
    "range": [
      463,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 474,
    "end": 477,
    "range": [
      474,
      477
    ]
  },
  {
    "type": "Identifier",
    "value": "program",
    "start": 478,
    "end": 485,
    "range": [
      478,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 488,
    "end": 490,
    "range": [
      488,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "createProgram",
    "start": 491,
    "end": 504,
    "range": [
      491,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Identifier",
    "value": "fileNames",
    "start": 505,
    "end": 514,
    "range": [
      505,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 516,
    "end": 523,
    "range": [
      516,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 530,
    "end": 533,
    "range": [
      530,
      533
    ]
  },
  {
    "type": "Identifier",
    "value": "emitResult",
    "start": 534,
    "end": 544,
    "range": [
      534,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Identifier",
    "value": "program",
    "start": 547,
    "end": 554,
    "range": [
      547,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Identifier",
    "value": "emit",
    "start": 555,
    "end": 559,
    "range": [
      555,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 568,
    "end": 571,
    "range": [
      568,
      571
    ]
  },
  {
    "type": "Identifier",
    "value": "allDiagnostics",
    "start": 572,
    "end": 586,
    "range": [
      572,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 589,
    "end": 591,
    "range": [
      589,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Identifier",
    "value": "getPreEmitDiagnostics",
    "start": 592,
    "end": 613,
    "range": [
      592,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Identifier",
    "value": "program",
    "start": 614,
    "end": 621,
    "range": [
      614,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Identifier",
    "value": "allDiagnostics",
    "start": 629,
    "end": 643,
    "range": [
      629,
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
    "value": "forEach",
    "start": 644,
    "end": 651,
    "range": [
      644,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Identifier",
    "value": "diagnostic",
    "start": 652,
    "end": 662,
    "range": [
      652,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 663,
    "end": 665,
    "range": [
      663,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 676,
    "end": 679,
    "range": [
      676,
      679
    ]
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 680,
    "end": 687,
    "range": [
      680,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 690,
    "end": 692,
    "range": [
      690,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Identifier",
    "value": "flattenDiagnosticMessageText",
    "start": 693,
    "end": 721,
    "range": [
      693,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Identifier",
    "value": "diagnostic",
    "start": 722,
    "end": 732,
    "range": [
      722,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Identifier",
    "value": "messageText",
    "start": 733,
    "end": 744,
    "range": [
      733,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "String",
    "value": "'\\n'",
    "start": 746,
    "end": 750,
    "range": [
      746,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 761,
    "end": 763,
    "range": [
      761,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Identifier",
    "value": "diagnostic",
    "start": 766,
    "end": 776,
    "range": [
      766,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 777,
    "end": 781,
    "range": [
      777,
      781
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 797,
    "end": 804,
    "range": [
      797,
      804
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 805,
    "end": 808,
    "range": [
      805,
      808
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 809,
    "end": 816,
    "range": [
      809,
      816
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 831,
    "end": 837,
    "range": [
      831,
      837
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 857,
    "end": 860,
    "range": [
      857,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Identifier",
    "value": "line",
    "start": 863,
    "end": 867,
    "range": [
      863,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Identifier",
    "value": "character",
    "start": 869,
    "end": 878,
    "range": [
      869,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Identifier",
    "value": "diagnostic",
    "start": 883,
    "end": 893,
    "range": [
      883,
      893
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 894,
    "end": 898,
    "range": [
      894,
      898
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 898,
    "end": 899,
    "range": [
      898,
      899
    ]
  },
  {
    "type": "Identifier",
    "value": "getLineAndCharacterOfPosition",
    "start": 899,
    "end": 928,
    "range": [
      899,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Identifier",
    "value": "diagnostic",
    "start": 929,
    "end": 939,
    "range": [
      929,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 940,
    "end": 945,
    "range": [
      940,
      945
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 945,
    "end": 946,
    "range": [
      945,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 957,
    "end": 964,
    "range": [
      957,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 965,
    "end": 968,
    "range": [
      965,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 969,
    "end": 972,
    "range": [
      969,
      972
    ]
  },
  {
    "type": "Identifier",
    "value": "diagnostic",
    "start": 972,
    "end": 982,
    "range": [
      972,
      982
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 982,
    "end": 983,
    "range": [
      982,
      983
    ]
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 983,
    "end": 987,
    "range": [
      983,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 988,
    "end": 996,
    "range": [
      988,
      996
    ]
  },
  {
    "type": "Template",
    "value": "} (${",
    "start": 996,
    "end": 1001,
    "range": [
      996,
      1001
    ]
  },
  {
    "type": "Identifier",
    "value": "line",
    "start": 1001,
    "end": 1005,
    "range": [
      1001,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1008,
    "end": 1009,
    "range": [
      1008,
      1009
    ]
  },
  {
    "type": "Template",
    "value": "},${",
    "start": 1009,
    "end": 1013,
    "range": [
      1009,
      1013
    ]
  },
  {
    "type": "Identifier",
    "value": "character",
    "start": 1013,
    "end": 1022,
    "range": [
      1013,
      1022
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1023,
    "end": 1024,
    "range": [
      1023,
      1024
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1025,
    "end": 1026,
    "range": [
      1025,
      1026
    ]
  },
  {
    "type": "Template",
    "value": "}): ${",
    "start": 1026,
    "end": 1032,
    "range": [
      1026,
      1032
    ]
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 1032,
    "end": 1039,
    "range": [
      1032,
      1039
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1039,
    "end": 1041,
    "range": [
      1039,
      1041
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1041,
    "end": 1042,
    "range": [
      1041,
      1042
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1042,
    "end": 1043,
    "range": [
      1042,
      1043
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1057,
    "end": 1060,
    "range": [
      1057,
      1060
    ]
  },
  {
    "type": "Identifier",
    "value": "exitCode",
    "start": 1061,
    "end": 1069,
    "range": [
      1061,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Identifier",
    "value": "emitResult",
    "start": 1072,
    "end": 1082,
    "range": [
      1072,
      1082
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1082,
    "end": 1083,
    "range": [
      1082,
      1083
    ]
  },
  {
    "type": "Identifier",
    "value": "emitSkipped",
    "start": 1083,
    "end": 1094,
    "range": [
      1083,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1108,
    "end": 1115,
    "range": [
      1108,
      1115
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1115,
    "end": 1116,
    "range": [
      1115,
      1116
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1116,
    "end": 1119,
    "range": [
      1116,
      1119
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1119,
    "end": 1120,
    "range": [
      1119,
      1120
    ]
  },
  {
    "type": "Template",
    "value": "`Process exiting with code '${",
    "start": 1120,
    "end": 1150,
    "range": [
      1120,
      1150
    ]
  },
  {
    "type": "Identifier",
    "value": "exitCode",
    "start": 1150,
    "end": 1158,
    "range": [
      1150,
      1158
    ]
  },
  {
    "type": "Template",
    "value": "}'.`",
    "start": 1158,
    "end": 1162,
    "range": [
      1158,
      1162
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1162,
    "end": 1163,
    "range": [
      1162,
      1163
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1163,
    "end": 1164,
    "range": [
      1163,
      1164
    ]
  },
  {
    "type": "Identifier",
    "value": "process",
    "start": 1169,
    "end": 1176,
    "range": [
      1169,
      1176
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1176,
    "end": 1177,
    "range": [
      1176,
      1177
    ]
  },
  {
    "type": "Identifier",
    "value": "exit",
    "start": 1177,
    "end": 1181,
    "range": [
      1177,
      1181
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "Identifier",
    "value": "exitCode",
    "start": 1182,
    "end": 1190,
    "range": [
      1182,
      1190
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1190,
    "end": 1191,
    "range": [
      1190,
      1191
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1191,
    "end": 1192,
    "range": [
      1191,
      1192
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1193,
    "end": 1194,
    "range": [
      1193,
      1194
    ]
  },
  {
    "type": "Identifier",
    "value": "compile",
    "start": 1196,
    "end": 1203,
    "range": [
      1196,
      1203
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1203,
    "end": 1204,
    "range": [
      1203,
      1204
    ]
  },
  {
    "type": "Identifier",
    "value": "process",
    "start": 1204,
    "end": 1211,
    "range": [
      1204,
      1211
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1211,
    "end": 1212,
    "range": [
      1211,
      1212
    ]
  },
  {
    "type": "Identifier",
    "value": "argv",
    "start": 1212,
    "end": 1216,
    "range": [
      1212,
      1216
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1216,
    "end": 1217,
    "range": [
      1216,
      1217
    ]
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 1217,
    "end": 1222,
    "range": [
      1217,
      1222
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1222,
    "end": 1223,
    "range": [
      1222,
      1223
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1224,
    "end": 1225,
    "range": [
      1224,
      1225
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1225,
    "end": 1226,
    "range": [
      1225,
      1226
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Identifier",
    "value": "noEmitOnError",
    "start": 1233,
    "end": 1246,
    "range": [
      1233,
      1246
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1246,
    "end": 1247,
    "range": [
      1246,
      1247
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1248,
    "end": 1252,
    "range": [
      1248,
      1252
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1252,
    "end": 1253,
    "range": [
      1252,
      1253
    ]
  },
  {
    "type": "Identifier",
    "value": "noImplicitAny",
    "start": 1254,
    "end": 1267,
    "range": [
      1254,
      1267
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1267,
    "end": 1268,
    "range": [
      1267,
      1268
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1269,
    "end": 1273,
    "range": [
      1269,
      1273
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1273,
    "end": 1274,
    "range": [
      1273,
      1274
    ]
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 1279,
    "end": 1285,
    "range": [
      1279,
      1285
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1285,
    "end": 1286,
    "range": [
      1285,
      1286
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1287,
    "end": 1289,
    "range": [
      1287,
      1289
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Identifier",
    "value": "ScriptTarget",
    "start": 1290,
    "end": 1302,
    "range": [
      1290,
      1302
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1302,
    "end": 1303,
    "range": [
      1302,
      1303
    ]
  },
  {
    "type": "Identifier",
    "value": "ES5",
    "start": 1303,
    "end": 1306,
    "range": [
      1303,
      1306
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1306,
    "end": 1307,
    "range": [
      1306,
      1307
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 1308,
    "end": 1314,
    "range": [
      1308,
      1314
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1314,
    "end": 1315,
    "range": [
      1314,
      1315
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1316,
    "end": 1318,
    "range": [
      1316,
      1318
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1318,
    "end": 1319,
    "range": [
      1318,
      1319
    ]
  },
  {
    "type": "Identifier",
    "value": "ModuleKind",
    "start": 1319,
    "end": 1329,
    "range": [
      1319,
      1329
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1329,
    "end": 1330,
    "range": [
      1329,
      1330
    ]
  },
  {
    "type": "Identifier",
    "value": "CommonJS",
    "start": 1330,
    "end": 1338,
    "range": [
      1330,
      1338
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1339,
    "end": 1340,
    "range": [
      1339,
      1340
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1340,
    "end": 1341,
    "range": [
      1340,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1341,
    "end": 1342,
    "range": [
      1341,
      1342
    ]
  }
]
```
