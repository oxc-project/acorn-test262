__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1263,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 175,
      "body": {
        "type": "TSModuleBlock",
        "start": 16,
        "end": 175,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 73,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 26,
              "end": 73,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 59,
                "end": 73,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 61,
                    "end": 71,
                    "argument": {
                      "type": "UnaryExpression",
                      "start": 68,
                      "end": 70,
                      "argument": {
                        "type": "Literal",
                        "start": 69,
                        "end": 70,
                        "raw": "1",
                        "value": 1
                      },
                      "operator": "-",
                      "prefix": true
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 35,
                "end": 56,
                "decorators": [],
                "name": "someExportedOuterFunc",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 76,
            "end": 173,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 83,
              "end": 173,
              "body": {
                "type": "TSModuleBlock",
                "start": 104,
                "end": 173,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 108,
                    "end": 170,
                    "attributes": [],
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 115,
                      "end": 170,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 153,
                        "end": 170,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 155,
                            "end": 168,
                            "argument": {
                              "type": "Literal",
                              "start": 162,
                              "end": 167,
                              "raw": "\"foo\"",
                              "value": "foo"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": {
                        "type": "Identifier",
                        "start": 124,
                        "end": 150,
                        "decorators": [],
                        "name": "someExportedOuterInnerFunc",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "params": [],
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
                "start": 90,
                "end": 103,
                "decorators": [],
                "name": "OuterInnerMod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "module"
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
        "start": 7,
        "end": 15,
        "decorators": [],
        "name": "OuterMod",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 177,
      "end": 225,
      "id": {
        "type": "Identifier",
        "start": 184,
        "end": 199,
        "decorators": [],
        "name": "OuterInnerAlias",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 202,
        "end": 224,
        "left": {
          "type": "Identifier",
          "start": 202,
          "end": 210,
          "decorators": [],
          "name": "OuterMod",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 211,
          "end": 224,
          "decorators": [],
          "name": "OuterInnerMod",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 227,
      "end": 1055,
      "body": {
        "type": "TSModuleBlock",
        "start": 236,
        "end": 1055,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 240,
            "end": 324,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 247,
              "end": 324,
              "body": {
                "type": "TSModuleBlock",
                "start": 263,
                "end": 324,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 267,
                    "end": 321,
                    "attributes": [],
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 274,
                      "end": 321,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 307,
                        "end": 321,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 309,
                            "end": 319,
                            "argument": {
                              "type": "UnaryExpression",
                              "start": 316,
                              "end": 318,
                              "argument": {
                                "type": "Literal",
                                "start": 317,
                                "end": 318,
                                "raw": "2",
                                "value": 2
                              },
                              "operator": "-",
                              "prefix": true
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": {
                        "type": "Identifier",
                        "start": 283,
                        "end": 304,
                        "decorators": [],
                        "name": "someExportedInnerFunc",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "params": [],
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
                "start": 254,
                "end": 262,
                "decorators": [],
                "name": "InnerMod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "module"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 327,
            "end": 360,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 334,
              "end": 360,
              "body": {
                "type": "TSEnumBody",
                "start": 341,
                "end": 360,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 345,
                    "end": 346,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 345,
                      "end": 346,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 350,
                    "end": 351,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 350,
                      "end": 351,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 355,
                    "end": 356,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 355,
                      "end": 356,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null
                  }
                ]
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 339,
                "end": 340,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 363,
            "end": 380,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 370,
              "end": 380,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 374,
                  "end": 379,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 374,
                    "end": 375,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 378,
                    "end": 379,
                    "raw": "5",
                    "value": 5
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 382,
            "end": 414,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 389,
              "end": 414,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 401,
                  "end": 413,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 401,
                    "end": 413,
                    "decorators": [],
                    "name": "exported_var",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": true,
              "kind": "var"
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "VariableDeclaration",
            "start": 417,
            "end": 431,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 421,
                "end": 430,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 421,
                  "end": 422,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 425,
                  "end": 430,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 425,
                    "end": 426,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 429,
                    "end": 430,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 435,
            "end": 481,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 442,
              "end": 481,
              "body": {
                "type": "TSInterfaceBody",
                "start": 454,
                "end": 481,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 458,
                    "end": 478,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 458,
                      "end": 468,
                      "decorators": [],
                      "name": "someMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 470,
                      "end": 477,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 471,
                        "end": 477
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 452,
                "end": 453,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ClassDeclaration",
            "start": 485,
            "end": 508,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 493,
              "end": 508,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 494,
                  "end": 507,
                  "accessibility": "public",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 501,
                    "end": 502,
                    "decorators": [],
                    "name": "b",
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
                    "start": 505,
                    "end": 506,
                    "raw": "0",
                    "value": 0
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 491,
              "end": 492,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 512,
            "end": 983,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 519,
              "end": 983,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 540,
                "end": 983,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 544,
                    "end": 640,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 551,
                      "end": 583,
                      "decorators": [],
                      "name": "someMethodThatCallsAnOuterMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 583,
                      "end": 640,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 586,
                        "end": 640,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 587,
                            "end": 639,
                            "argument": {
                              "type": "CallExpression",
                              "start": 594,
                              "end": 638,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 594,
                                "end": 636,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 594,
                                  "end": 609,
                                  "decorators": [],
                                  "name": "OuterInnerAlias",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 610,
                                  "end": 636,
                                  "decorators": [],
                                  "name": "someExportedOuterInnerFunc",
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
                    "start": 643,
                    "end": 727,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 650,
                      "end": 682,
                      "decorators": [],
                      "name": "someMethodThatCallsAnInnerMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 682,
                      "end": 727,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 685,
                        "end": 727,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 686,
                            "end": 726,
                            "argument": {
                              "type": "CallExpression",
                              "start": 693,
                              "end": 725,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 693,
                                "end": 723,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 693,
                                  "end": 701,
                                  "decorators": [],
                                  "name": "InnerMod",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 702,
                                  "end": 723,
                                  "decorators": [],
                                  "name": "someExportedInnerFunc",
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
                    "start": 730,
                    "end": 819,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 737,
                      "end": 774,
                      "decorators": [],
                      "name": "someMethodThatCallsAnOuterInnerMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 774,
                      "end": 819,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 777,
                        "end": 819,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 778,
                            "end": 818,
                            "argument": {
                              "type": "CallExpression",
                              "start": 785,
                              "end": 817,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 785,
                                "end": 815,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 785,
                                  "end": 793,
                                  "decorators": [],
                                  "name": "OuterMod",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 794,
                                  "end": 815,
                                  "decorators": [],
                                  "name": "someExportedOuterFunc",
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
                    "start": 822,
                    "end": 855,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 829,
                      "end": 839,
                      "decorators": [],
                      "name": "someMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 839,
                      "end": 855,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 842,
                        "end": 855,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 844,
                            "end": 853,
                            "argument": {
                              "type": "Literal",
                              "start": 851,
                              "end": 852,
                              "raw": "0",
                              "value": 0
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
                    "type": "PropertyDefinition",
                    "start": 858,
                    "end": 878,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 865,
                      "end": 873,
                      "decorators": [],
                      "name": "someProp",
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
                      "start": 876,
                      "end": 877,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 882,
                    "end": 980,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 882,
                      "end": 893,
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
                      "start": 893,
                      "end": 980,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 896,
                        "end": 980,
                        "body": [
                          {
                            "type": "FunctionDeclaration",
                            "start": 904,
                            "end": 942,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 929,
                              "end": 942,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 931,
                                  "end": 940,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 938,
                                    "end": 939,
                                    "raw": "2",
                                    "value": 2
                                  }
                                }
                              ]
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": {
                              "type": "Identifier",
                              "start": 913,
                              "end": 926,
                              "decorators": [],
                              "name": "someInnerFunc",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "params": [],
                            "returnType": null,
                            "typeParameters": null
                          },
                          {
                            "type": "VariableDeclaration",
                            "start": 955,
                            "end": 976,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 959,
                                "end": 975,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 959,
                                  "end": 971,
                                  "decorators": [],
                                  "name": "someInnerVar",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "Literal",
                                  "start": 974,
                                  "end": 975,
                                  "raw": "3",
                                  "value": 3
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var"
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
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 525,
                "end": 526,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 538,
                  "end": 539,
                  "expression": {
                    "type": "Identifier",
                    "start": 538,
                    "end": 539,
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "VariableDeclaration",
            "start": 986,
            "end": 1008,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 990,
                "end": 1007,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 990,
                  "end": 1003,
                  "decorators": [],
                  "name": "someModuleVar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 1006,
                  "end": 1007,
                  "raw": "4",
                  "value": 4
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "FunctionDeclaration",
            "start": 1011,
            "end": 1053,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1041,
              "end": 1053,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1043,
                  "end": 1052,
                  "argument": {
                    "type": "Literal",
                    "start": 1050,
                    "end": 1051,
                    "raw": "5",
                    "value": 5
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 1020,
              "end": 1038,
              "decorators": [],
              "name": "someModuleFunction",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 234,
        "end": 235,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1057,
      "end": 1113,
      "body": {
        "type": "TSModuleBlock",
        "start": 1066,
        "end": 1113,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1069,
            "end": 1086,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1076,
              "end": 1086,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1080,
                  "end": 1085,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1080,
                    "end": 1081,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 1084,
                    "end": 1085,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1088,
            "end": 1111,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1095,
              "end": 1111,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1099,
                  "end": 1110,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1099,
                    "end": 1102,
                    "decorators": [],
                    "name": "meb",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 1105,
                    "end": 1110,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 1105,
                      "end": 1108,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1105,
                        "end": 1106,
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1107,
                        "end": 1108,
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1109,
                      "end": 1110,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var"
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
        "start": 1064,
        "end": 1065,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 1115,
      "end": 1144,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1119,
          "end": 1143,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1119,
            "end": 1131,
            "decorators": [],
            "name": "cprime",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1126,
              "end": 1131,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1128,
                "end": 1131,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 1128,
                  "end": 1131,
                  "left": {
                    "type": "Identifier",
                    "start": 1128,
                    "end": 1129,
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1130,
                    "end": 1131,
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1134,
            "end": 1143,
            "expression": {
              "type": "Literal",
              "start": 1139,
              "end": 1143,
              "raw": "null",
              "value": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1135,
              "end": 1138,
              "typeArguments": null,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 1135,
                "end": 1138,
                "left": {
                  "type": "Identifier",
                  "start": 1135,
                  "end": 1136,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 1137,
                  "end": 1138,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1146,
      "end": 1164,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1150,
          "end": 1163,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1150,
            "end": 1151,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1154,
            "end": 1163,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 1158,
              "end": 1161,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1158,
                "end": 1159,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1160,
                "end": 1161,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1165,
      "end": 1177,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1169,
          "end": 1176,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1169,
            "end": 1170,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1173,
            "end": 1176,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1173,
              "end": 1174,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1175,
              "end": 1176,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1178,
      "end": 1196,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1182,
          "end": 1195,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1182,
            "end": 1187,
            "decorators": [],
            "name": "alpha",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1190,
            "end": 1195,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 1190,
              "end": 1193,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1190,
                "end": 1191,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1192,
                "end": 1193,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1194,
              "end": 1195,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1197,
      "end": 1224,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1201,
          "end": 1223,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1201,
            "end": 1206,
            "decorators": [],
            "name": "omega",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1209,
            "end": 1223,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1209,
              "end": 1210,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1211,
              "end": 1223,
              "decorators": [],
              "name": "exported_var",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1225,
      "end": 1262,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1225,
        "end": 1261,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 1225,
          "end": 1259,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1225,
            "end": 1226,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1227,
            "end": 1259,
            "decorators": [],
            "name": "someMethodThatCallsAnOuterMethod",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
