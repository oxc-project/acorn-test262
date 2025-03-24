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
      "id": {
        "type": "Identifier",
        "start": 218,
        "end": 228,
        "name": "TypeScript",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 229,
        "end": 1876,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 286,
            "end": 1464,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 293,
              "end": 1464,
              "id": {
                "type": "Identifier",
                "start": 299,
                "end": 311,
                "name": "PrintContext",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 312,
                "end": 1464,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 322,
                    "end": 342,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 329,
                      "end": 336,
                      "name": "builder",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 339,
                      "end": 341,
                      "value": "",
                      "raw": "\"\""
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
                    "accessibility": "public"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 351,
                    "end": 373,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 358,
                      "end": 365,
                      "name": "indent1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 368,
                      "end": 372,
                      "value": "  ",
                      "raw": "\"  \""
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
                    "accessibility": "public"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 382,
                    "end": 418,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 389,
                      "end": 402,
                      "name": "indentStrings",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "start": 415,
                      "end": 417,
                      "elements": []
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
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
                    "accessibility": "public"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 427,
                    "end": 448,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 434,
                      "end": 443,
                      "name": "indentAmt",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 446,
                      "end": 447,
                      "value": 0,
                      "raw": "0"
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 458,
                    "end": 534,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 458,
                      "end": 469,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 470,
                      "end": 534,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
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
                            "name": "outfile",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 485,
                              "end": 498,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 487,
                                "end": 498,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 487,
                                  "end": 498,
                                  "name": "ITextWriter",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
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
                            "name": "parser",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 513,
                              "end": 521,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 515,
                                "end": 521,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 515,
                                  "end": 521,
                                  "name": "Parser",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 523,
                        "end": 534,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 544,
                    "end": 609,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 551,
                      "end": 565,
                      "name": "increaseIndent",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 565,
                      "end": 609,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 568,
                        "end": 609,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 582,
                            "end": 599,
                            "expression": {
                              "type": "UpdateExpression",
                              "start": 582,
                              "end": 598,
                              "operator": "++",
                              "prefix": false,
                              "argument": {
                                "type": "MemberExpression",
                                "start": 582,
                                "end": 596,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 582,
                                  "end": 586
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 587,
                                  "end": 596,
                                  "name": "indentAmt",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              }
                            },
                            "directive": null
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 619,
                    "end": 684,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 626,
                      "end": 640,
                      "name": "decreaseIndent",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 640,
                      "end": 684,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 643,
                        "end": 684,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 657,
                            "end": 674,
                            "expression": {
                              "type": "UpdateExpression",
                              "start": 657,
                              "end": 673,
                              "operator": "--",
                              "prefix": false,
                              "argument": {
                                "type": "MemberExpression",
                                "start": 657,
                                "end": 671,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 657,
                                  "end": 661
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 662,
                                  "end": 671,
                                  "name": "indentAmt",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              }
                            },
                            "directive": null
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 694,
                    "end": 1236,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 701,
                      "end": 710,
                      "name": "startLine",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 710,
                      "end": 1236,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 713,
                        "end": 1236,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 727,
                            "end": 828,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 731,
                              "end": 754,
                              "left": {
                                "type": "MemberExpression",
                                "start": 731,
                                "end": 750,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 731,
                                  "end": 743,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 731,
                                    "end": 735
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 736,
                                    "end": 743,
                                    "name": "builder",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 744,
                                  "end": 750,
                                  "name": "length",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "operator": ">",
                              "right": {
                                "type": "Literal",
                                "start": 753,
                                "end": 754,
                                "value": 0,
                                "raw": "0"
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 756,
                              "end": 828,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 774,
                                  "end": 814,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 774,
                                    "end": 813,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 774,
                                      "end": 799,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 774,
                                        "end": 793,
                                        "name": "CompilerDiagnostics",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 794,
                                        "end": 799,
                                        "name": "Alert",
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
                                        "start": 800,
                                        "end": 812,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 800,
                                          "end": 804
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 805,
                                          "end": 812,
                                          "name": "builder",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
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
                            "alternate": null
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
                                "id": {
                                  "type": "Identifier",
                                  "start": 845,
                                  "end": 857,
                                  "name": "indentString",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "start": 860,
                                  "end": 894,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 860,
                                    "end": 878,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 860,
                                      "end": 864
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 865,
                                      "end": 878,
                                      "name": "indentStrings",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "MemberExpression",
                                    "start": 879,
                                    "end": 893,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 879,
                                      "end": 883
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 884,
                                      "end": 893,
                                      "name": "indentAmt",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "computed": true,
                                  "optional": false
                                },
                                "definite": false
                              }
                            ],
                            "kind": "var",
                            "declare": false
                          },
                          {
                            "type": "IfStatement",
                            "start": 908,
                            "end": 1184,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 912,
                              "end": 938,
                              "left": {
                                "type": "Identifier",
                                "start": 912,
                                "end": 924,
                                "name": "indentString",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "===",
                              "right": {
                                "type": "Identifier",
                                "start": 929,
                                "end": 938,
                                "name": "undefined",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 940,
                              "end": 1184,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 958,
                                  "end": 976,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 958,
                                    "end": 975,
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 958,
                                      "end": 970,
                                      "name": "indentString",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "start": 973,
                                      "end": 975,
                                      "value": "",
                                      "raw": "\"\""
                                    }
                                  },
                                  "directive": null
                                },
                                {
                                  "type": "ForStatement",
                                  "start": 993,
                                  "end": 1103,
                                  "init": {
                                    "type": "VariableDeclaration",
                                    "start": 998,
                                    "end": 1007,
                                    "declarations": [
                                      {
                                        "type": "VariableDeclarator",
                                        "start": 1002,
                                        "end": 1007,
                                        "id": {
                                          "type": "Identifier",
                                          "start": 1002,
                                          "end": 1003,
                                          "name": "i",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "init": {
                                          "type": "Literal",
                                          "start": 1006,
                                          "end": 1007,
                                          "value": 0,
                                          "raw": "0"
                                        },
                                        "definite": false
                                      }
                                    ],
                                    "kind": "var",
                                    "declare": false
                                  },
                                  "test": {
                                    "type": "BinaryExpression",
                                    "start": 1009,
                                    "end": 1027,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 1009,
                                      "end": 1010,
                                      "name": "i",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "operator": "<",
                                    "right": {
                                      "type": "MemberExpression",
                                      "start": 1013,
                                      "end": 1027,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 1013,
                                        "end": 1017
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1018,
                                        "end": 1027,
                                        "name": "indentAmt",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    }
                                  },
                                  "update": {
                                    "type": "UpdateExpression",
                                    "start": 1029,
                                    "end": 1032,
                                    "operator": "++",
                                    "prefix": false,
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 1029,
                                      "end": 1030,
                                      "name": "i",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  },
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 1034,
                                    "end": 1103,
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 1056,
                                        "end": 1085,
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "start": 1056,
                                          "end": 1084,
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "start": 1056,
                                            "end": 1068,
                                            "name": "indentString",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "right": {
                                            "type": "MemberExpression",
                                            "start": 1072,
                                            "end": 1084,
                                            "object": {
                                              "type": "ThisExpression",
                                              "start": 1072,
                                              "end": 1076
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 1077,
                                              "end": 1084,
                                              "name": "indent1",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "computed": false,
                                            "optional": false
                                          }
                                        },
                                        "directive": null
                                      }
                                    ]
                                  }
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "start": 1120,
                                  "end": 1170,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 1120,
                                    "end": 1169,
                                    "operator": "=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 1120,
                                      "end": 1154,
                                      "object": {
                                        "type": "MemberExpression",
                                        "start": 1120,
                                        "end": 1138,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1120,
                                          "end": 1124
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 1125,
                                          "end": 1138,
                                          "name": "indentStrings",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "MemberExpression",
                                        "start": 1139,
                                        "end": 1153,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1139,
                                          "end": 1143
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 1144,
                                          "end": 1153,
                                          "name": "indentAmt",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "computed": true,
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 1157,
                                      "end": 1169,
                                      "name": "indentString",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "alternate": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1197,
                            "end": 1226,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1197,
                              "end": 1225,
                              "operator": "+=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 1197,
                                "end": 1209,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1197,
                                  "end": 1201
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1202,
                                  "end": 1209,
                                  "name": "builder",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 1213,
                                "end": 1225,
                                "name": "indentString",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "directive": null
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1246,
                    "end": 1304,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1253,
                      "end": 1258,
                      "name": "write",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1258,
                      "end": 1304,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1259,
                          "end": 1260,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 1262,
                        "end": 1304,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 1276,
                            "end": 1294,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1276,
                              "end": 1293,
                              "operator": "+=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 1276,
                                "end": 1288,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1276,
                                  "end": 1280
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1281,
                                  "end": 1288,
                                  "name": "builder",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 1292,
                                "end": 1293,
                                "name": "s",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "directive": null
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1314,
                    "end": 1457,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1321,
                      "end": 1330,
                      "name": "writeLine",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1330,
                      "end": 1457,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1331,
                          "end": 1332,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 1334,
                        "end": 1457,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 1348,
                            "end": 1366,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1348,
                              "end": 1365,
                              "operator": "+=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 1348,
                                "end": 1360,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1348,
                                  "end": 1352
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1353,
                                  "end": 1360,
                                  "name": "builder",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 1364,
                                "end": 1365,
                                "name": "s",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "directive": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1379,
                            "end": 1416,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1379,
                              "end": 1415,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1379,
                                "end": 1401,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 1379,
                                  "end": 1391,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1379,
                                    "end": 1383
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1384,
                                    "end": 1391,
                                    "name": "outfile",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1392,
                                  "end": 1401,
                                  "name": "WriteLine",
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
                                  "start": 1402,
                                  "end": 1414,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1402,
                                    "end": 1406
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1407,
                                    "end": 1414,
                                    "name": "builder",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "directive": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1429,
                            "end": 1447,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1429,
                              "end": 1446,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 1429,
                                "end": 1441,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1429,
                                  "end": 1433
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1434,
                                  "end": 1441,
                                  "name": "builder",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "right": {
                                "type": "Literal",
                                "start": 1444,
                                "end": 1446,
                                "value": "",
                                "raw": "\"\""
                              }
                            },
                            "directive": null
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1470,
            "end": 1680,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 1477,
              "end": 1680,
              "id": {
                "type": "Identifier",
                "start": 1486,
                "end": 1497,
                "name": "prePrintAST",
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
                  "start": 1498,
                  "end": 1506,
                  "name": "ast",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1501,
                    "end": 1506,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1503,
                      "end": 1506,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1503,
                        "end": 1506,
                        "name": "AST",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1508,
                  "end": 1519,
                  "name": "parent",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1514,
                    "end": 1519,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1516,
                      "end": 1519,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1516,
                        "end": 1519,
                        "name": "AST",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1521,
                  "end": 1539,
                  "name": "walker",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1527,
                    "end": 1539,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1529,
                      "end": 1539,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1529,
                        "end": 1539,
                        "name": "IAstWalker",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "id": {
                          "type": "Identifier",
                          "start": 1555,
                          "end": 1571,
                          "name": "pc",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1557,
                            "end": 1571,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1559,
                              "end": 1571,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1559,
                                "end": 1571,
                                "name": "PrintContext",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 1574,
                          "end": 1600,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 1588,
                            "end": 1600,
                            "object": {
                              "type": "Identifier",
                              "start": 1588,
                              "end": 1594,
                              "name": "walker",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1595,
                              "end": 1600,
                              "name": "state",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1575,
                            "end": 1587,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1575,
                              "end": 1587,
                              "name": "PrintContext",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1611,
                    "end": 1625,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1611,
                      "end": 1624,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1611,
                        "end": 1620,
                        "object": {
                          "type": "Identifier",
                          "start": 1611,
                          "end": 1614,
                          "name": "ast",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1615,
                          "end": 1620,
                          "name": "print",
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
                          "start": 1621,
                          "end": 1623,
                          "name": "pc",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1634,
                    "end": 1654,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1634,
                      "end": 1653,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1634,
                        "end": 1651,
                        "object": {
                          "type": "Identifier",
                          "start": 1634,
                          "end": 1636,
                          "name": "pc",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1637,
                          "end": 1651,
                          "name": "increaseIndent",
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
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1663,
                    "end": 1674,
                    "argument": {
                      "type": "Identifier",
                      "start": 1670,
                      "end": 1673,
                      "name": "ast",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1687,
            "end": 1874,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 1694,
              "end": 1874,
              "id": {
                "type": "Identifier",
                "start": 1703,
                "end": 1715,
                "name": "postPrintAST",
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
                  "start": 1716,
                  "end": 1724,
                  "name": "ast",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1719,
                    "end": 1724,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1721,
                      "end": 1724,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1721,
                        "end": 1724,
                        "name": "AST",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1726,
                  "end": 1737,
                  "name": "parent",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1732,
                    "end": 1737,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1734,
                      "end": 1737,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1734,
                        "end": 1737,
                        "name": "AST",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1739,
                  "end": 1757,
                  "name": "walker",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1745,
                    "end": 1757,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1747,
                      "end": 1757,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1747,
                        "end": 1757,
                        "name": "IAstWalker",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "id": {
                          "type": "Identifier",
                          "start": 1773,
                          "end": 1789,
                          "name": "pc",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1775,
                            "end": 1789,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1777,
                              "end": 1789,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1777,
                                "end": 1789,
                                "name": "PrintContext",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 1792,
                          "end": 1818,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 1806,
                            "end": 1818,
                            "object": {
                              "type": "Identifier",
                              "start": 1806,
                              "end": 1812,
                              "name": "walker",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1813,
                              "end": 1818,
                              "name": "state",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1793,
                            "end": 1805,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1793,
                              "end": 1805,
                              "name": "PrintContext",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1828,
                    "end": 1848,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1828,
                      "end": 1847,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1828,
                        "end": 1845,
                        "object": {
                          "type": "Identifier",
                          "start": 1828,
                          "end": 1830,
                          "name": "pc",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1831,
                          "end": 1845,
                          "name": "decreaseIndent",
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
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1857,
                    "end": 1868,
                    "argument": {
                      "type": "Identifier",
                      "start": 1864,
                      "end": 1867,
                      "name": "ast",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
