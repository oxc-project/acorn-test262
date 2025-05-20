__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 211,
  "end": 1876,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 211,
      "end": 1876,
      "body": {
        "type": "TSModuleBlock",
        "start": 229,
        "end": 1876,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 286,
            "end": 1464,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 293,
              "end": 1464,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 312,
                "end": 1464,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 322,
                    "end": 342,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 329,
                      "end": 336,
                      "decorators": [],
                      "name": "builder",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "start": 339,
                      "end": 341,
                      "raw": "\"\"",
                      "value": ""
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 351,
                    "end": 373,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 358,
                      "end": 365,
                      "decorators": [],
                      "name": "indent1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "start": 368,
                      "end": 372,
                      "raw": "\"  \"",
                      "value": "  "
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 382,
                    "end": 418,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 389,
                      "end": 402,
                      "decorators": [],
                      "name": "indentStrings",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 402,
                      "end": 412,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 404,
                        "end": 412,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 404,
                          "end": 410
                        }
                      }
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "start": 415,
                      "end": 417,
                      "elements": []
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 427,
                    "end": 448,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 434,
                      "end": 443,
                      "decorators": [],
                      "name": "indentAmt",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "start": 446,
                      "end": 447,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 458,
                    "end": 534,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 458,
                      "end": 469,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 470,
                      "end": 534,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 523,
                        "end": 534,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 471,
                          "end": 498,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 478,
                            "end": 498,
                            "decorators": [],
                            "name": "outfile",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 485,
                              "end": 498,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 487,
                                "end": 498,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 487,
                                  "end": 498,
                                  "decorators": [],
                                  "name": "ITextWriter",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 500,
                          "end": 521,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 507,
                            "end": 521,
                            "decorators": [],
                            "name": "parser",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 513,
                              "end": 521,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 515,
                                "end": 521,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 515,
                                  "end": 521,
                                  "decorators": [],
                                  "name": "Parser",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 544,
                    "end": 609,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 551,
                      "end": 565,
                      "decorators": [],
                      "name": "increaseIndent",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 565,
                      "end": 609,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 568,
                        "end": 609,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 582,
                            "end": 599,
                            "directive": null,
                            "expression": {
                              "type": "UpdateExpression",
                              "start": 582,
                              "end": 598,
                              "argument": {
                                "type": "MemberExpression",
                                "start": 582,
                                "end": 596,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 582,
                                  "end": 586
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 587,
                                  "end": 596,
                                  "decorators": [],
                                  "name": "indentAmt",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "operator": "++",
                              "prefix": false
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 619,
                    "end": 684,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 626,
                      "end": 640,
                      "decorators": [],
                      "name": "decreaseIndent",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 640,
                      "end": 684,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 643,
                        "end": 684,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 657,
                            "end": 674,
                            "directive": null,
                            "expression": {
                              "type": "UpdateExpression",
                              "start": 657,
                              "end": 673,
                              "argument": {
                                "type": "MemberExpression",
                                "start": 657,
                                "end": 671,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 657,
                                  "end": 661
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 662,
                                  "end": 671,
                                  "decorators": [],
                                  "name": "indentAmt",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "operator": "--",
                              "prefix": false
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 694,
                    "end": 1236,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 701,
                      "end": 710,
                      "decorators": [],
                      "name": "startLine",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 710,
                      "end": 1236,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 713,
                        "end": 1236,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 727,
                            "end": 828,
                            "alternate": null,
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 756,
                              "end": 828,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 774,
                                  "end": 814,
                                  "directive": null,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 774,
                                    "end": 813,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "start": 800,
                                        "end": 812,
                                        "computed": false,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 800,
                                          "end": 804
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 805,
                                          "end": 812,
                                          "decorators": [],
                                          "name": "builder",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    ],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 774,
                                      "end": 799,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 774,
                                        "end": 793,
                                        "decorators": [],
                                        "name": "CompilerDiagnostics",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 794,
                                        "end": 799,
                                        "decorators": [],
                                        "name": "Alert",
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
                            "test": {
                              "type": "BinaryExpression",
                              "start": 731,
                              "end": 754,
                              "operator": ">",
                              "left": {
                                "type": "MemberExpression",
                                "start": 731,
                                "end": 750,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 731,
                                  "end": 743,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 731,
                                    "end": 735
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 736,
                                    "end": 743,
                                    "decorators": [],
                                    "name": "builder",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 744,
                                  "end": 750,
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 753,
                                "end": 754,
                                "raw": "0",
                                "value": 0
                              }
                            }
                          },
                          {
                            "type": "VariableDeclaration",
                            "start": 841,
                            "end": 895,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 845,
                                "end": 894,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 845,
                                  "end": 857,
                                  "decorators": [],
                                  "name": "indentString",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "start": 860,
                                  "end": 894,
                                  "computed": true,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 860,
                                    "end": 878,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 860,
                                      "end": 864
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 865,
                                      "end": 878,
                                      "decorators": [],
                                      "name": "indentStrings",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "MemberExpression",
                                    "start": 879,
                                    "end": 893,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 879,
                                      "end": 883
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 884,
                                      "end": 893,
                                      "decorators": [],
                                      "name": "indentAmt",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var"
                          },
                          {
                            "type": "IfStatement",
                            "start": 908,
                            "end": 1184,
                            "alternate": null,
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 940,
                              "end": 1184,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 958,
                                  "end": 976,
                                  "directive": null,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 958,
                                    "end": 975,
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 958,
                                      "end": 970,
                                      "decorators": [],
                                      "name": "indentString",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "start": 973,
                                      "end": 975,
                                      "raw": "\"\"",
                                      "value": ""
                                    }
                                  }
                                },
                                {
                                  "type": "ForStatement",
                                  "start": 993,
                                  "end": 1103,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 1034,
                                    "end": 1103,
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 1056,
                                        "end": 1085,
                                        "directive": null,
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "start": 1056,
                                          "end": 1084,
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "start": 1056,
                                            "end": 1068,
                                            "decorators": [],
                                            "name": "indentString",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "right": {
                                            "type": "MemberExpression",
                                            "start": 1072,
                                            "end": 1084,
                                            "computed": false,
                                            "object": {
                                              "type": "ThisExpression",
                                              "start": 1072,
                                              "end": 1076
                                            },
                                            "optional": false,
                                            "property": {
                                              "type": "Identifier",
                                              "start": 1077,
                                              "end": 1084,
                                              "decorators": [],
                                              "name": "indent1",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  "init": {
                                    "type": "VariableDeclaration",
                                    "start": 998,
                                    "end": 1007,
                                    "declarations": [
                                      {
                                        "type": "VariableDeclarator",
                                        "start": 1002,
                                        "end": 1007,
                                        "definite": false,
                                        "id": {
                                          "type": "Identifier",
                                          "start": 1002,
                                          "end": 1003,
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "init": {
                                          "type": "Literal",
                                          "start": 1006,
                                          "end": 1007,
                                          "raw": "0",
                                          "value": 0
                                        }
                                      }
                                    ],
                                    "declare": false,
                                    "kind": "var"
                                  },
                                  "test": {
                                    "type": "BinaryExpression",
                                    "start": 1009,
                                    "end": 1027,
                                    "operator": "<",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 1009,
                                      "end": 1010,
                                      "decorators": [],
                                      "name": "i",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "start": 1013,
                                      "end": 1027,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 1013,
                                        "end": 1017
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1018,
                                        "end": 1027,
                                        "decorators": [],
                                        "name": "indentAmt",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  },
                                  "update": {
                                    "type": "UpdateExpression",
                                    "start": 1029,
                                    "end": 1032,
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 1029,
                                      "end": 1030,
                                      "decorators": [],
                                      "name": "i",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "operator": "++",
                                    "prefix": false
                                  }
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "start": 1120,
                                  "end": 1170,
                                  "directive": null,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 1120,
                                    "end": 1169,
                                    "operator": "=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 1120,
                                      "end": 1154,
                                      "computed": true,
                                      "object": {
                                        "type": "MemberExpression",
                                        "start": 1120,
                                        "end": 1138,
                                        "computed": false,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1120,
                                          "end": 1124
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 1125,
                                          "end": 1138,
                                          "decorators": [],
                                          "name": "indentStrings",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "MemberExpression",
                                        "start": 1139,
                                        "end": 1153,
                                        "computed": false,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1139,
                                          "end": 1143
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 1144,
                                          "end": 1153,
                                          "decorators": [],
                                          "name": "indentAmt",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 1157,
                                      "end": 1169,
                                      "decorators": [],
                                      "name": "indentString",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              ]
                            },
                            "test": {
                              "type": "BinaryExpression",
                              "start": 912,
                              "end": 938,
                              "operator": "===",
                              "left": {
                                "type": "Identifier",
                                "start": 912,
                                "end": 924,
                                "decorators": [],
                                "name": "indentString",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 929,
                                "end": 938,
                                "decorators": [],
                                "name": "undefined",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1197,
                            "end": 1226,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1197,
                              "end": 1225,
                              "operator": "+=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 1197,
                                "end": 1209,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1197,
                                  "end": 1201
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1202,
                                  "end": 1209,
                                  "decorators": [],
                                  "name": "builder",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 1213,
                                "end": 1225,
                                "decorators": [],
                                "name": "indentString",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1246,
                    "end": 1304,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1253,
                      "end": 1258,
                      "decorators": [],
                      "name": "write",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1258,
                      "end": 1304,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1262,
                        "end": 1304,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 1276,
                            "end": 1294,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1276,
                              "end": 1293,
                              "operator": "+=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 1276,
                                "end": 1288,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1276,
                                  "end": 1280
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1281,
                                  "end": 1288,
                                  "decorators": [],
                                  "name": "builder",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 1292,
                                "end": 1293,
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1259,
                          "end": 1260,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1314,
                    "end": 1457,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1321,
                      "end": 1330,
                      "decorators": [],
                      "name": "writeLine",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1330,
                      "end": 1457,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1334,
                        "end": 1457,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 1348,
                            "end": 1366,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1348,
                              "end": 1365,
                              "operator": "+=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 1348,
                                "end": 1360,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1348,
                                  "end": 1352
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1353,
                                  "end": 1360,
                                  "decorators": [],
                                  "name": "builder",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 1364,
                                "end": 1365,
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1379,
                            "end": 1416,
                            "directive": null,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1379,
                              "end": 1415,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 1402,
                                  "end": 1414,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1402,
                                    "end": 1406
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1407,
                                    "end": 1414,
                                    "decorators": [],
                                    "name": "builder",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1379,
                                "end": 1401,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 1379,
                                  "end": 1391,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1379,
                                    "end": 1383
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1384,
                                    "end": 1391,
                                    "decorators": [],
                                    "name": "outfile",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1392,
                                  "end": 1401,
                                  "decorators": [],
                                  "name": "WriteLine",
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
                            "start": 1429,
                            "end": 1447,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1429,
                              "end": 1446,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 1429,
                                "end": 1441,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1429,
                                  "end": 1433
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1434,
                                  "end": 1441,
                                  "decorators": [],
                                  "name": "builder",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 1444,
                                "end": 1446,
                                "raw": "\"\"",
                                "value": ""
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1331,
                          "end": 1332,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 299,
                "end": 311,
                "decorators": [],
                "name": "PrintContext",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1470,
            "end": 1680,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 1477,
              "end": 1680,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1541,
                "end": 1680,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1551,
                    "end": 1601,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1555,
                        "end": 1600,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1555,
                          "end": 1571,
                          "decorators": [],
                          "name": "pc",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1557,
                            "end": 1571,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1559,
                              "end": 1571,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1559,
                                "end": 1571,
                                "decorators": [],
                                "name": "PrintContext",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 1574,
                          "end": 1600,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 1588,
                            "end": 1600,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 1588,
                              "end": 1594,
                              "decorators": [],
                              "name": "walker",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1595,
                              "end": 1600,
                              "decorators": [],
                              "name": "state",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1575,
                            "end": 1587,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1575,
                              "end": 1587,
                              "decorators": [],
                              "name": "PrintContext",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1611,
                    "end": 1625,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1611,
                      "end": 1624,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1621,
                          "end": 1623,
                          "decorators": [],
                          "name": "pc",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1611,
                        "end": 1620,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1611,
                          "end": 1614,
                          "decorators": [],
                          "name": "ast",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1615,
                          "end": 1620,
                          "decorators": [],
                          "name": "print",
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
                    "start": 1634,
                    "end": 1654,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1634,
                      "end": 1653,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1634,
                        "end": 1651,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1634,
                          "end": 1636,
                          "decorators": [],
                          "name": "pc",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1637,
                          "end": 1651,
                          "decorators": [],
                          "name": "increaseIndent",
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
                    "start": 1663,
                    "end": 1674,
                    "argument": {
                      "type": "Identifier",
                      "start": 1670,
                      "end": 1673,
                      "decorators": [],
                      "name": "ast",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 1486,
                "end": 1497,
                "decorators": [],
                "name": "prePrintAST",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 1498,
                  "end": 1506,
                  "decorators": [],
                  "name": "ast",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1501,
                    "end": 1506,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1503,
                      "end": 1506,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1503,
                        "end": 1506,
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1508,
                  "end": 1519,
                  "decorators": [],
                  "name": "parent",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1514,
                    "end": 1519,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1516,
                      "end": 1519,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1516,
                        "end": 1519,
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1521,
                  "end": 1539,
                  "decorators": [],
                  "name": "walker",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1527,
                    "end": 1539,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1529,
                      "end": 1539,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1529,
                        "end": 1539,
                        "decorators": [],
                        "name": "IAstWalker",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1687,
            "end": 1874,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 1694,
              "end": 1874,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1759,
                "end": 1874,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1769,
                    "end": 1819,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1773,
                        "end": 1818,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1773,
                          "end": 1789,
                          "decorators": [],
                          "name": "pc",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1775,
                            "end": 1789,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1777,
                              "end": 1789,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1777,
                                "end": 1789,
                                "decorators": [],
                                "name": "PrintContext",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 1792,
                          "end": 1818,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 1806,
                            "end": 1818,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 1806,
                              "end": 1812,
                              "decorators": [],
                              "name": "walker",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1813,
                              "end": 1818,
                              "decorators": [],
                              "name": "state",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1793,
                            "end": 1805,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1793,
                              "end": 1805,
                              "decorators": [],
                              "name": "PrintContext",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1828,
                    "end": 1848,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1828,
                      "end": 1847,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1828,
                        "end": 1845,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1828,
                          "end": 1830,
                          "decorators": [],
                          "name": "pc",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1831,
                          "end": 1845,
                          "decorators": [],
                          "name": "decreaseIndent",
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
                    "start": 1857,
                    "end": 1868,
                    "argument": {
                      "type": "Identifier",
                      "start": 1864,
                      "end": 1867,
                      "decorators": [],
                      "name": "ast",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 1703,
                "end": 1715,
                "decorators": [],
                "name": "postPrintAST",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 1716,
                  "end": 1724,
                  "decorators": [],
                  "name": "ast",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1719,
                    "end": 1724,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1721,
                      "end": 1724,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1721,
                        "end": 1724,
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1726,
                  "end": 1737,
                  "decorators": [],
                  "name": "parent",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1732,
                    "end": 1737,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1734,
                      "end": 1737,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1734,
                        "end": 1737,
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1739,
                  "end": 1757,
                  "decorators": [],
                  "name": "walker",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1745,
                    "end": 1757,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1747,
                      "end": 1757,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1747,
                        "end": 1757,
                        "decorators": [],
                        "name": "IAstWalker",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 218,
        "end": 228,
        "decorators": [],
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
