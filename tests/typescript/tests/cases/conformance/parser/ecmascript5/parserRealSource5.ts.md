__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null,
        "start": 221,
        "end": 231
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "PrintContext",
                "optional": false,
                "typeAnnotation": null,
                "start": 302,
                "end": 314
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "builder",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 332,
                      "end": 339
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 342,
                      "end": 344
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 325,
                    "end": 345
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "indent1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 361,
                      "end": 368
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": "  ",
                      "raw": "\"  \"",
                      "start": 371,
                      "end": 375
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 354,
                    "end": 376
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "indentStrings",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 392,
                      "end": 405
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 407,
                          "end": 413
                        },
                        "start": 407,
                        "end": 415
                      },
                      "start": 405,
                      "end": 415
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 418,
                      "end": 420
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 385,
                    "end": 421
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "indentAmt",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 437,
                      "end": 446
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 449,
                      "end": 450
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 430,
                    "end": 451
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 461,
                      "end": 472
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "outfile",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ITextWriter",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 490,
                                  "end": 501
                                },
                                "typeArguments": null,
                                "start": 490,
                                "end": 501
                              },
                              "start": 488,
                              "end": 501
                            },
                            "start": 481,
                            "end": 501
                          },
                          "readonly": false,
                          "static": false,
                          "start": 474,
                          "end": 501
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "parser",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Parser",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 518,
                                  "end": 524
                                },
                                "typeArguments": null,
                                "start": 518,
                                "end": 524
                              },
                              "start": 516,
                              "end": 524
                            },
                            "start": 510,
                            "end": 524
                          },
                          "readonly": false,
                          "static": false,
                          "start": 503,
                          "end": 524
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 526,
                        "end": 537
                      },
                      "expression": false,
                      "start": 473,
                      "end": 537
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 461,
                    "end": 537
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "increaseIndent",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 554,
                      "end": 568
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "UpdateExpression",
                              "operator": "++",
                              "prefix": false,
                              "argument": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 585,
                                  "end": 589
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "indentAmt",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 590,
                                  "end": 599
                                },
                                "optional": false,
                                "computed": false,
                                "start": 585,
                                "end": 599
                              },
                              "start": 585,
                              "end": 601
                            },
                            "directive": null,
                            "start": 585,
                            "end": 602
                          }
                        ],
                        "start": 571,
                        "end": 612
                      },
                      "expression": false,
                      "start": 568,
                      "end": 612
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 547,
                    "end": 612
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "decreaseIndent",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 629,
                      "end": 643
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "UpdateExpression",
                              "operator": "--",
                              "prefix": false,
                              "argument": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 660,
                                  "end": 664
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "indentAmt",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 665,
                                  "end": 674
                                },
                                "optional": false,
                                "computed": false,
                                "start": 660,
                                "end": 674
                              },
                              "start": 660,
                              "end": 676
                            },
                            "directive": null,
                            "start": 660,
                            "end": 677
                          }
                        ],
                        "start": 646,
                        "end": 687
                      },
                      "expression": false,
                      "start": 643,
                      "end": 687
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 622,
                    "end": 687
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "startLine",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 704,
                      "end": 713
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 734,
                                    "end": 738
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "builder",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 739,
                                    "end": 746
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 734,
                                  "end": 746
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 747,
                                  "end": 753
                                },
                                "optional": false,
                                "computed": false,
                                "start": 734,
                                "end": 753
                              },
                              "operator": ">",
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 756,
                                "end": 757
                              },
                              "start": 734,
                              "end": 757
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
                                        "name": "CompilerDiagnostics",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 777,
                                        "end": 796
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Alert",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 797,
                                        "end": 802
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 777,
                                      "end": 802
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 803,
                                          "end": 807
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "builder",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 808,
                                          "end": 815
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 803,
                                        "end": 815
                                      }
                                    ],
                                    "optional": false,
                                    "start": 777,
                                    "end": 816
                                  },
                                  "directive": null,
                                  "start": 777,
                                  "end": 817
                                }
                              ],
                              "start": 759,
                              "end": 831
                            },
                            "alternate": null,
                            "start": 730,
                            "end": 831
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
                                  "name": "indentString",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 848,
                                  "end": 860
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 863,
                                      "end": 867
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "indentStrings",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 868,
                                      "end": 881
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 863,
                                    "end": 881
                                  },
                                  "property": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 882,
                                      "end": 886
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "indentAmt",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 887,
                                      "end": 896
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 882,
                                    "end": 896
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 863,
                                  "end": 897
                                },
                                "definite": false,
                                "start": 848,
                                "end": 897
                              }
                            ],
                            "declare": false,
                            "start": 844,
                            "end": 898
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "indentString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 915,
                                "end": 927
                              },
                              "operator": "===",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "undefined",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 932,
                                "end": 941
                              },
                              "start": 915,
                              "end": 941
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "indentString",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 961,
                                      "end": 973
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": "",
                                      "raw": "\"\"",
                                      "start": 976,
                                      "end": 978
                                    },
                                    "start": 961,
                                    "end": 978
                                  },
                                  "directive": null,
                                  "start": 961,
                                  "end": 979
                                },
                                {
                                  "type": "ForStatement",
                                  "init": {
                                    "type": "VariableDeclaration",
                                    "kind": "var",
                                    "declarations": [
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1005,
                                          "end": 1006
                                        },
                                        "init": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 1009,
                                          "end": 1010
                                        },
                                        "definite": false,
                                        "start": 1005,
                                        "end": 1010
                                      }
                                    ],
                                    "declare": false,
                                    "start": 1001,
                                    "end": 1010
                                  },
                                  "test": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "i",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1012,
                                      "end": 1013
                                    },
                                    "operator": "<",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 1016,
                                        "end": 1020
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "indentAmt",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1021,
                                        "end": 1030
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1016,
                                      "end": 1030
                                    },
                                    "start": 1012,
                                    "end": 1030
                                  },
                                  "update": {
                                    "type": "UpdateExpression",
                                    "operator": "++",
                                    "prefix": false,
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "i",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1032,
                                      "end": 1033
                                    },
                                    "start": 1032,
                                    "end": 1035
                                  },
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "indentString",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1059,
                                            "end": 1071
                                          },
                                          "right": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "ThisExpression",
                                              "start": 1075,
                                              "end": 1079
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "indent1",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1080,
                                              "end": 1087
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 1075,
                                            "end": 1087
                                          },
                                          "start": 1059,
                                          "end": 1087
                                        },
                                        "directive": null,
                                        "start": 1059,
                                        "end": 1088
                                      }
                                    ],
                                    "start": 1037,
                                    "end": 1106
                                  },
                                  "start": 996,
                                  "end": 1106
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1123,
                                          "end": 1127
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "indentStrings",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1128,
                                          "end": 1141
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1123,
                                        "end": 1141
                                      },
                                      "property": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1142,
                                          "end": 1146
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "indentAmt",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1147,
                                          "end": 1156
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1142,
                                        "end": 1156
                                      },
                                      "optional": false,
                                      "computed": true,
                                      "start": 1123,
                                      "end": 1157
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "indentString",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1160,
                                      "end": 1172
                                    },
                                    "start": 1123,
                                    "end": 1172
                                  },
                                  "directive": null,
                                  "start": 1123,
                                  "end": 1173
                                }
                              ],
                              "start": 943,
                              "end": 1187
                            },
                            "alternate": null,
                            "start": 911,
                            "end": 1187
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "+=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1200,
                                  "end": 1204
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "builder",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1205,
                                  "end": 1212
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1200,
                                "end": 1212
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "indentString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1216,
                                "end": 1228
                              },
                              "start": 1200,
                              "end": 1228
                            },
                            "directive": null,
                            "start": 1200,
                            "end": 1229
                          }
                        ],
                        "start": 716,
                        "end": 1239
                      },
                      "expression": false,
                      "start": 713,
                      "end": 1239
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 697,
                    "end": 1239
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "write",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1256,
                      "end": 1261
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1262,
                          "end": 1263
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "+=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1279,
                                  "end": 1283
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "builder",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1284,
                                  "end": 1291
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1279,
                                "end": 1291
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1295,
                                "end": 1296
                              },
                              "start": 1279,
                              "end": 1296
                            },
                            "directive": null,
                            "start": 1279,
                            "end": 1297
                          }
                        ],
                        "start": 1265,
                        "end": 1307
                      },
                      "expression": false,
                      "start": 1261,
                      "end": 1307
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1249,
                    "end": 1307
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "writeLine",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1324,
                      "end": 1333
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1334,
                          "end": 1335
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "+=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1351,
                                  "end": 1355
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "builder",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1356,
                                  "end": 1363
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1351,
                                "end": 1363
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1367,
                                "end": 1368
                              },
                              "start": 1351,
                              "end": 1368
                            },
                            "directive": null,
                            "start": 1351,
                            "end": 1369
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1382,
                                    "end": 1386
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "outfile",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1387,
                                    "end": 1394
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1382,
                                  "end": 1394
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "WriteLine",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1395,
                                  "end": 1404
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1382,
                                "end": 1404
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1405,
                                    "end": 1409
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "builder",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1410,
                                    "end": 1417
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1405,
                                  "end": 1417
                                }
                              ],
                              "optional": false,
                              "start": 1382,
                              "end": 1418
                            },
                            "directive": null,
                            "start": 1382,
                            "end": 1419
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1432,
                                  "end": 1436
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "builder",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1437,
                                  "end": 1444
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1432,
                                "end": 1444
                              },
                              "right": {
                                "type": "Literal",
                                "value": "",
                                "raw": "\"\"",
                                "start": 1447,
                                "end": 1449
                              },
                              "start": 1432,
                              "end": 1449
                            },
                            "directive": null,
                            "start": 1432,
                            "end": 1450
                          }
                        ],
                        "start": 1337,
                        "end": 1460
                      },
                      "expression": false,
                      "start": 1333,
                      "end": 1460
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1317,
                    "end": 1460
                  }
                ],
                "start": 315,
                "end": 1467
              },
              "abstract": false,
              "declare": false,
              "start": 296,
              "end": 1467
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 289,
            "end": 1467
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "prePrintAST",
                "optional": false,
                "typeAnnotation": null,
                "start": 1489,
                "end": 1500
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ast",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1506,
                        "end": 1509
                      },
                      "typeArguments": null,
                      "start": 1506,
                      "end": 1509
                    },
                    "start": 1504,
                    "end": 1509
                  },
                  "start": 1501,
                  "end": 1509
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parent",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1519,
                        "end": 1522
                      },
                      "typeArguments": null,
                      "start": 1519,
                      "end": 1522
                    },
                    "start": 1517,
                    "end": 1522
                  },
                  "start": 1511,
                  "end": 1522
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "walker",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IAstWalker",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1532,
                        "end": 1542
                      },
                      "typeArguments": null,
                      "start": 1532,
                      "end": 1542
                    },
                    "start": 1530,
                    "end": 1542
                  },
                  "start": 1524,
                  "end": 1542
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
                          "name": "pc",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "PrintContext",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1562,
                                "end": 1574
                              },
                              "typeArguments": null,
                              "start": 1562,
                              "end": 1574
                            },
                            "start": 1560,
                            "end": 1574
                          },
                          "start": 1558,
                          "end": 1574
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PrintContext",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1578,
                              "end": 1590
                            },
                            "typeArguments": null,
                            "start": 1578,
                            "end": 1590
                          },
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "walker",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1591,
                              "end": 1597
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "state",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1598,
                              "end": 1603
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1591,
                            "end": 1603
                          },
                          "start": 1577,
                          "end": 1603
                        },
                        "definite": false,
                        "start": 1558,
                        "end": 1603
                      }
                    ],
                    "declare": false,
                    "start": 1554,
                    "end": 1604
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
                          "name": "ast",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1614,
                          "end": 1617
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "print",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1618,
                          "end": 1623
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1614,
                        "end": 1623
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pc",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1624,
                          "end": 1626
                        }
                      ],
                      "optional": false,
                      "start": 1614,
                      "end": 1627
                    },
                    "directive": null,
                    "start": 1614,
                    "end": 1628
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
                          "name": "pc",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1637,
                          "end": 1639
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "increaseIndent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1640,
                          "end": 1654
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1637,
                        "end": 1654
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1637,
                      "end": 1656
                    },
                    "directive": null,
                    "start": 1637,
                    "end": 1657
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ast",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1673,
                      "end": 1676
                    },
                    "start": 1666,
                    "end": 1677
                  }
                ],
                "start": 1544,
                "end": 1683
              },
              "expression": false,
              "start": 1480,
              "end": 1683
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1473,
            "end": 1683
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "postPrintAST",
                "optional": false,
                "typeAnnotation": null,
                "start": 1706,
                "end": 1718
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ast",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1724,
                        "end": 1727
                      },
                      "typeArguments": null,
                      "start": 1724,
                      "end": 1727
                    },
                    "start": 1722,
                    "end": 1727
                  },
                  "start": 1719,
                  "end": 1727
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parent",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1737,
                        "end": 1740
                      },
                      "typeArguments": null,
                      "start": 1737,
                      "end": 1740
                    },
                    "start": 1735,
                    "end": 1740
                  },
                  "start": 1729,
                  "end": 1740
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "walker",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IAstWalker",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1750,
                        "end": 1760
                      },
                      "typeArguments": null,
                      "start": 1750,
                      "end": 1760
                    },
                    "start": 1748,
                    "end": 1760
                  },
                  "start": 1742,
                  "end": 1760
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
                          "name": "pc",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "PrintContext",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1780,
                                "end": 1792
                              },
                              "typeArguments": null,
                              "start": 1780,
                              "end": 1792
                            },
                            "start": 1778,
                            "end": 1792
                          },
                          "start": 1776,
                          "end": 1792
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PrintContext",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1796,
                              "end": 1808
                            },
                            "typeArguments": null,
                            "start": 1796,
                            "end": 1808
                          },
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "walker",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1809,
                              "end": 1815
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "state",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1816,
                              "end": 1821
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1809,
                            "end": 1821
                          },
                          "start": 1795,
                          "end": 1821
                        },
                        "definite": false,
                        "start": 1776,
                        "end": 1821
                      }
                    ],
                    "declare": false,
                    "start": 1772,
                    "end": 1822
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
                          "name": "pc",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1831,
                          "end": 1833
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "decreaseIndent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1834,
                          "end": 1848
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1831,
                        "end": 1848
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1831,
                      "end": 1850
                    },
                    "directive": null,
                    "start": 1831,
                    "end": 1851
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ast",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1867,
                      "end": 1870
                    },
                    "start": 1860,
                    "end": 1871
                  }
                ],
                "start": 1762,
                "end": 1877
              },
              "expression": false,
              "start": 1697,
              "end": 1877
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1690,
            "end": 1877
          }
        ],
        "start": 232,
        "end": 1879
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 211,
      "end": 1879
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 211,
  "end": 1879
}
```
