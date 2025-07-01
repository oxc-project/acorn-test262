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
        "start": 218,
        "end": 228
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
                "start": 299,
                "end": 311
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
                      "start": 329,
                      "end": 336
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 339,
                      "end": 341
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 322,
                    "end": 342
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
                      "start": 358,
                      "end": 365
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": "  ",
                      "raw": "\"  \"",
                      "start": 368,
                      "end": 372
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 351,
                    "end": 373
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
                      "start": 389,
                      "end": 402
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 404,
                          "end": 410
                        },
                        "start": 404,
                        "end": 412
                      },
                      "start": 402,
                      "end": 412
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 415,
                      "end": 417
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 382,
                    "end": 418
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
                      "start": 434,
                      "end": 443
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 446,
                      "end": 447
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 427,
                    "end": 448
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
                      "start": 458,
                      "end": 469
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
                                  "start": 487,
                                  "end": 498
                                },
                                "typeArguments": null,
                                "start": 487,
                                "end": 498
                              },
                              "start": 485,
                              "end": 498
                            },
                            "start": 478,
                            "end": 498
                          },
                          "readonly": false,
                          "static": false,
                          "start": 471,
                          "end": 498
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
                                  "start": 515,
                                  "end": 521
                                },
                                "typeArguments": null,
                                "start": 515,
                                "end": 521
                              },
                              "start": 513,
                              "end": 521
                            },
                            "start": 507,
                            "end": 521
                          },
                          "readonly": false,
                          "static": false,
                          "start": 500,
                          "end": 521
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 523,
                        "end": 534
                      },
                      "expression": false,
                      "start": 470,
                      "end": 534
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 458,
                    "end": 534
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
                      "start": 551,
                      "end": 565
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
                                  "start": 582,
                                  "end": 586
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "indentAmt",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 587,
                                  "end": 596
                                },
                                "optional": false,
                                "computed": false,
                                "start": 582,
                                "end": 596
                              },
                              "start": 582,
                              "end": 598
                            },
                            "directive": null,
                            "start": 582,
                            "end": 599
                          }
                        ],
                        "start": 568,
                        "end": 609
                      },
                      "expression": false,
                      "start": 565,
                      "end": 609
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 544,
                    "end": 609
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
                      "start": 626,
                      "end": 640
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
                                  "start": 657,
                                  "end": 661
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "indentAmt",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 662,
                                  "end": 671
                                },
                                "optional": false,
                                "computed": false,
                                "start": 657,
                                "end": 671
                              },
                              "start": 657,
                              "end": 673
                            },
                            "directive": null,
                            "start": 657,
                            "end": 674
                          }
                        ],
                        "start": 643,
                        "end": 684
                      },
                      "expression": false,
                      "start": 640,
                      "end": 684
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 619,
                    "end": 684
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
                      "start": 701,
                      "end": 710
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
                                    "start": 731,
                                    "end": 735
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "builder",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 736,
                                    "end": 743
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 731,
                                  "end": 743
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 744,
                                  "end": 750
                                },
                                "optional": false,
                                "computed": false,
                                "start": 731,
                                "end": 750
                              },
                              "operator": ">",
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 753,
                                "end": 754
                              },
                              "start": 731,
                              "end": 754
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
                                        "start": 774,
                                        "end": 793
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Alert",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 794,
                                        "end": 799
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 774,
                                      "end": 799
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 800,
                                          "end": 804
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "builder",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 805,
                                          "end": 812
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 800,
                                        "end": 812
                                      }
                                    ],
                                    "optional": false,
                                    "start": 774,
                                    "end": 813
                                  },
                                  "directive": null,
                                  "start": 774,
                                  "end": 814
                                }
                              ],
                              "start": 756,
                              "end": 828
                            },
                            "alternate": null,
                            "start": 727,
                            "end": 828
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
                                  "start": 845,
                                  "end": 857
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 860,
                                      "end": 864
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "indentStrings",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 865,
                                      "end": 878
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 860,
                                    "end": 878
                                  },
                                  "property": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 879,
                                      "end": 883
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "indentAmt",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 884,
                                      "end": 893
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 879,
                                    "end": 893
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 860,
                                  "end": 894
                                },
                                "definite": false,
                                "start": 845,
                                "end": 894
                              }
                            ],
                            "declare": false,
                            "start": 841,
                            "end": 895
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
                                "start": 912,
                                "end": 924
                              },
                              "operator": "===",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "undefined",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 929,
                                "end": 938
                              },
                              "start": 912,
                              "end": 938
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
                                      "start": 958,
                                      "end": 970
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": "",
                                      "raw": "\"\"",
                                      "start": 973,
                                      "end": 975
                                    },
                                    "start": 958,
                                    "end": 975
                                  },
                                  "directive": null,
                                  "start": 958,
                                  "end": 976
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
                                          "start": 1002,
                                          "end": 1003
                                        },
                                        "init": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 1006,
                                          "end": 1007
                                        },
                                        "definite": false,
                                        "start": 1002,
                                        "end": 1007
                                      }
                                    ],
                                    "declare": false,
                                    "start": 998,
                                    "end": 1007
                                  },
                                  "test": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "i",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1009,
                                      "end": 1010
                                    },
                                    "operator": "<",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 1013,
                                        "end": 1017
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "indentAmt",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1018,
                                        "end": 1027
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1013,
                                      "end": 1027
                                    },
                                    "start": 1009,
                                    "end": 1027
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
                                      "start": 1029,
                                      "end": 1030
                                    },
                                    "start": 1029,
                                    "end": 1032
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
                                            "start": 1056,
                                            "end": 1068
                                          },
                                          "right": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "ThisExpression",
                                              "start": 1072,
                                              "end": 1076
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "indent1",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1077,
                                              "end": 1084
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 1072,
                                            "end": 1084
                                          },
                                          "start": 1056,
                                          "end": 1084
                                        },
                                        "directive": null,
                                        "start": 1056,
                                        "end": 1085
                                      }
                                    ],
                                    "start": 1034,
                                    "end": 1103
                                  },
                                  "start": 993,
                                  "end": 1103
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
                                          "start": 1120,
                                          "end": 1124
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "indentStrings",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1125,
                                          "end": 1138
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1120,
                                        "end": 1138
                                      },
                                      "property": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1139,
                                          "end": 1143
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "indentAmt",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1144,
                                          "end": 1153
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1139,
                                        "end": 1153
                                      },
                                      "optional": false,
                                      "computed": true,
                                      "start": 1120,
                                      "end": 1154
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "indentString",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1157,
                                      "end": 1169
                                    },
                                    "start": 1120,
                                    "end": 1169
                                  },
                                  "directive": null,
                                  "start": 1120,
                                  "end": 1170
                                }
                              ],
                              "start": 940,
                              "end": 1184
                            },
                            "alternate": null,
                            "start": 908,
                            "end": 1184
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
                                  "start": 1197,
                                  "end": 1201
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "builder",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1202,
                                  "end": 1209
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1197,
                                "end": 1209
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "indentString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1213,
                                "end": 1225
                              },
                              "start": 1197,
                              "end": 1225
                            },
                            "directive": null,
                            "start": 1197,
                            "end": 1226
                          }
                        ],
                        "start": 713,
                        "end": 1236
                      },
                      "expression": false,
                      "start": 710,
                      "end": 1236
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 694,
                    "end": 1236
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
                      "start": 1253,
                      "end": 1258
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
                          "start": 1259,
                          "end": 1260
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
                                  "start": 1276,
                                  "end": 1280
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "builder",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1281,
                                  "end": 1288
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1276,
                                "end": 1288
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1292,
                                "end": 1293
                              },
                              "start": 1276,
                              "end": 1293
                            },
                            "directive": null,
                            "start": 1276,
                            "end": 1294
                          }
                        ],
                        "start": 1262,
                        "end": 1304
                      },
                      "expression": false,
                      "start": 1258,
                      "end": 1304
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1246,
                    "end": 1304
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
                      "start": 1321,
                      "end": 1330
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
                          "start": 1331,
                          "end": 1332
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
                                  "start": 1348,
                                  "end": 1352
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "builder",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1353,
                                  "end": 1360
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1348,
                                "end": 1360
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1364,
                                "end": 1365
                              },
                              "start": 1348,
                              "end": 1365
                            },
                            "directive": null,
                            "start": 1348,
                            "end": 1366
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
                                    "start": 1379,
                                    "end": 1383
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "outfile",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1384,
                                    "end": 1391
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1379,
                                  "end": 1391
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "WriteLine",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1392,
                                  "end": 1401
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1379,
                                "end": 1401
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1402,
                                    "end": 1406
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "builder",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1407,
                                    "end": 1414
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1402,
                                  "end": 1414
                                }
                              ],
                              "optional": false,
                              "start": 1379,
                              "end": 1415
                            },
                            "directive": null,
                            "start": 1379,
                            "end": 1416
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
                                  "start": 1429,
                                  "end": 1433
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "builder",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1434,
                                  "end": 1441
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1429,
                                "end": 1441
                              },
                              "right": {
                                "type": "Literal",
                                "value": "",
                                "raw": "\"\"",
                                "start": 1444,
                                "end": 1446
                              },
                              "start": 1429,
                              "end": 1446
                            },
                            "directive": null,
                            "start": 1429,
                            "end": 1447
                          }
                        ],
                        "start": 1334,
                        "end": 1457
                      },
                      "expression": false,
                      "start": 1330,
                      "end": 1457
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1314,
                    "end": 1457
                  }
                ],
                "start": 312,
                "end": 1464
              },
              "abstract": false,
              "declare": false,
              "start": 293,
              "end": 1464
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 286,
            "end": 1464
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
                "start": 1486,
                "end": 1497
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
                        "start": 1503,
                        "end": 1506
                      },
                      "typeArguments": null,
                      "start": 1503,
                      "end": 1506
                    },
                    "start": 1501,
                    "end": 1506
                  },
                  "start": 1498,
                  "end": 1506
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
                        "start": 1516,
                        "end": 1519
                      },
                      "typeArguments": null,
                      "start": 1516,
                      "end": 1519
                    },
                    "start": 1514,
                    "end": 1519
                  },
                  "start": 1508,
                  "end": 1519
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
                        "start": 1529,
                        "end": 1539
                      },
                      "typeArguments": null,
                      "start": 1529,
                      "end": 1539
                    },
                    "start": 1527,
                    "end": 1539
                  },
                  "start": 1521,
                  "end": 1539
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
                                "start": 1559,
                                "end": 1571
                              },
                              "typeArguments": null,
                              "start": 1559,
                              "end": 1571
                            },
                            "start": 1557,
                            "end": 1571
                          },
                          "start": 1555,
                          "end": 1571
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
                              "start": 1575,
                              "end": 1587
                            },
                            "typeArguments": null,
                            "start": 1575,
                            "end": 1587
                          },
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "walker",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1588,
                              "end": 1594
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "state",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1595,
                              "end": 1600
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1588,
                            "end": 1600
                          },
                          "start": 1574,
                          "end": 1600
                        },
                        "definite": false,
                        "start": 1555,
                        "end": 1600
                      }
                    ],
                    "declare": false,
                    "start": 1551,
                    "end": 1601
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
                          "start": 1611,
                          "end": 1614
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "print",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1615,
                          "end": 1620
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1611,
                        "end": 1620
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pc",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1621,
                          "end": 1623
                        }
                      ],
                      "optional": false,
                      "start": 1611,
                      "end": 1624
                    },
                    "directive": null,
                    "start": 1611,
                    "end": 1625
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
                          "start": 1634,
                          "end": 1636
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "increaseIndent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1637,
                          "end": 1651
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1634,
                        "end": 1651
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1634,
                      "end": 1653
                    },
                    "directive": null,
                    "start": 1634,
                    "end": 1654
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ast",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1670,
                      "end": 1673
                    },
                    "start": 1663,
                    "end": 1674
                  }
                ],
                "start": 1541,
                "end": 1680
              },
              "expression": false,
              "start": 1477,
              "end": 1680
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1470,
            "end": 1680
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
                "start": 1703,
                "end": 1715
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
                        "start": 1721,
                        "end": 1724
                      },
                      "typeArguments": null,
                      "start": 1721,
                      "end": 1724
                    },
                    "start": 1719,
                    "end": 1724
                  },
                  "start": 1716,
                  "end": 1724
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
                        "start": 1734,
                        "end": 1737
                      },
                      "typeArguments": null,
                      "start": 1734,
                      "end": 1737
                    },
                    "start": 1732,
                    "end": 1737
                  },
                  "start": 1726,
                  "end": 1737
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
                        "start": 1747,
                        "end": 1757
                      },
                      "typeArguments": null,
                      "start": 1747,
                      "end": 1757
                    },
                    "start": 1745,
                    "end": 1757
                  },
                  "start": 1739,
                  "end": 1757
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
                                "start": 1777,
                                "end": 1789
                              },
                              "typeArguments": null,
                              "start": 1777,
                              "end": 1789
                            },
                            "start": 1775,
                            "end": 1789
                          },
                          "start": 1773,
                          "end": 1789
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
                              "start": 1793,
                              "end": 1805
                            },
                            "typeArguments": null,
                            "start": 1793,
                            "end": 1805
                          },
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "walker",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1806,
                              "end": 1812
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "state",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1813,
                              "end": 1818
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1806,
                            "end": 1818
                          },
                          "start": 1792,
                          "end": 1818
                        },
                        "definite": false,
                        "start": 1773,
                        "end": 1818
                      }
                    ],
                    "declare": false,
                    "start": 1769,
                    "end": 1819
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
                          "start": 1828,
                          "end": 1830
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "decreaseIndent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1831,
                          "end": 1845
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1828,
                        "end": 1845
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1828,
                      "end": 1847
                    },
                    "directive": null,
                    "start": 1828,
                    "end": 1848
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ast",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1864,
                      "end": 1867
                    },
                    "start": 1857,
                    "end": 1868
                  }
                ],
                "start": 1759,
                "end": 1874
              },
              "expression": false,
              "start": 1694,
              "end": 1874
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1687,
            "end": 1874
          }
        ],
        "start": 229,
        "end": 1876
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 211,
      "end": 1876
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 211,
  "end": 1876
}
```
