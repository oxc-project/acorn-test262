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
