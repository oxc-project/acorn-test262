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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 15,
        "name": "OuterMod",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 16,
        "end": 175,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 73,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 26,
              "end": 73,
              "id": {
                "type": "Identifier",
                "start": 35,
                "end": 56,
                "name": "someExportedOuterFunc",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "operator": "-",
                      "prefix": true,
                      "argument": {
                        "type": "Literal",
                        "start": 69,
                        "end": 70,
                        "value": 1,
                        "raw": "1"
                      }
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
            "start": 76,
            "end": 173,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 83,
              "end": 173,
              "id": {
                "type": "Identifier",
                "start": 90,
                "end": 103,
                "name": "OuterInnerMod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 104,
                "end": 173,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 108,
                    "end": 170,
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 115,
                      "end": 170,
                      "id": {
                        "type": "Identifier",
                        "start": 124,
                        "end": 150,
                        "name": "someExportedOuterInnerFunc",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": "foo",
                              "raw": "\"foo\""
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
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 177,
      "end": 225,
      "id": {
        "type": "Identifier",
        "start": 184,
        "end": 199,
        "name": "OuterInnerAlias",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 202,
        "end": 224,
        "left": {
          "type": "Identifier",
          "start": 202,
          "end": 210,
          "name": "OuterMod",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 211,
          "end": 224,
          "name": "OuterInnerMod",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 227,
      "end": 1055,
      "id": {
        "type": "Identifier",
        "start": 234,
        "end": 235,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 236,
        "end": 1055,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 240,
            "end": 324,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 247,
              "end": 324,
              "id": {
                "type": "Identifier",
                "start": 254,
                "end": 262,
                "name": "InnerMod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 263,
                "end": 324,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 267,
                    "end": 321,
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 274,
                      "end": 321,
                      "id": {
                        "type": "Identifier",
                        "start": 283,
                        "end": 304,
                        "name": "someExportedInnerFunc",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "operator": "-",
                              "prefix": true,
                              "argument": {
                                "type": "Literal",
                                "start": 317,
                                "end": 318,
                                "value": 2,
                                "raw": "2"
                              }
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
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 327,
            "end": 360,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 334,
              "end": 360,
              "id": {
                "type": "Identifier",
                "start": 339,
                "end": 340,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 345,
                  "end": 346,
                  "id": {
                    "type": "Identifier",
                    "start": 345,
                    "end": 346,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 350,
                  "end": 351,
                  "id": {
                    "type": "Identifier",
                    "start": 350,
                    "end": 351,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 355,
                  "end": 356,
                  "id": {
                    "type": "Identifier",
                    "start": 355,
                    "end": 356,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                }
              ],
              "const": false,
              "declare": false,
              "body": {
                "type": "TSEnumBody",
                "start": 341,
                "end": 360,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 345,
                    "end": 346,
                    "id": {
                      "type": "Identifier",
                      "start": 345,
                      "end": 346,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 350,
                    "end": 351,
                    "id": {
                      "type": "Identifier",
                      "start": 350,
                      "end": 351,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 355,
                    "end": 356,
                    "id": {
                      "type": "Identifier",
                      "start": 355,
                      "end": 356,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": null,
                    "computed": false
                  }
                ]
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 363,
            "end": 380,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 370,
              "end": 380,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 374,
                  "end": 379,
                  "id": {
                    "type": "Identifier",
                    "start": 374,
                    "end": 375,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 378,
                    "end": 379,
                    "value": 5,
                    "raw": "5"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 382,
            "end": 414,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 389,
              "end": 414,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 401,
                  "end": 413,
                  "id": {
                    "type": "Identifier",
                    "start": 401,
                    "end": 413,
                    "name": "exported_var",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": true
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
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
                "id": {
                  "type": "Identifier",
                  "start": 421,
                  "end": 422,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 425,
                  "end": 430,
                  "left": {
                    "type": "Identifier",
                    "start": 425,
                    "end": 426,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 429,
                    "end": 430,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 435,
            "end": 481,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 442,
              "end": 481,
              "id": {
                "type": "Identifier",
                "start": 452,
                "end": 453,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 454,
                "end": 481,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 458,
                    "end": 478,
                    "key": {
                      "type": "Identifier",
                      "start": 458,
                      "end": 468,
                      "name": "someMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
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
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ClassDeclaration",
            "start": 485,
            "end": 508,
            "id": {
              "type": "Identifier",
              "start": 491,
              "end": 492,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 493,
              "end": 508,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 494,
                  "end": 507,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 501,
                    "end": 502,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 505,
                    "end": 506,
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
          {
            "type": "ExportNamedDeclaration",
            "start": 512,
            "end": 983,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 519,
              "end": 983,
              "id": {
                "type": "Identifier",
                "start": 525,
                "end": 526,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 540,
                "end": 983,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 544,
                    "end": 640,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 551,
                      "end": 583,
                      "name": "someMethodThatCallsAnOuterMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 583,
                      "end": 640,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "MemberExpression",
                                "start": 594,
                                "end": 636,
                                "object": {
                                  "type": "Identifier",
                                  "start": 594,
                                  "end": 609,
                                  "name": "OuterInnerAlias",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 610,
                                  "end": 636,
                                  "name": "someExportedOuterInnerFunc",
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
                            }
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
                    "start": 643,
                    "end": 727,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 650,
                      "end": 682,
                      "name": "someMethodThatCallsAnInnerMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 682,
                      "end": 727,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "MemberExpression",
                                "start": 693,
                                "end": 723,
                                "object": {
                                  "type": "Identifier",
                                  "start": 693,
                                  "end": 701,
                                  "name": "InnerMod",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 702,
                                  "end": 723,
                                  "name": "someExportedInnerFunc",
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
                            }
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
                    "start": 730,
                    "end": 819,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 737,
                      "end": 774,
                      "name": "someMethodThatCallsAnOuterInnerMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 774,
                      "end": 819,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "MemberExpression",
                                "start": 785,
                                "end": 815,
                                "object": {
                                  "type": "Identifier",
                                  "start": 785,
                                  "end": 793,
                                  "name": "OuterMod",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 794,
                                  "end": 815,
                                  "name": "someExportedOuterFunc",
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
                            }
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
                    "start": 822,
                    "end": 855,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 829,
                      "end": 839,
                      "name": "someMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 839,
                      "end": 855,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": 0,
                              "raw": "0"
                            }
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
                    "type": "PropertyDefinition",
                    "start": 858,
                    "end": 878,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 865,
                      "end": 873,
                      "name": "someProp",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 876,
                      "end": 877,
                      "value": 1,
                      "raw": "1"
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
                    "start": 882,
                    "end": 980,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 882,
                      "end": 893,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 893,
                      "end": 980,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 896,
                        "end": 980,
                        "body": [
                          {
                            "type": "FunctionDeclaration",
                            "start": 904,
                            "end": 942,
                            "id": {
                              "type": "Identifier",
                              "start": 913,
                              "end": 926,
                              "name": "someInnerFunc",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
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
                                    "value": 2,
                                    "raw": "2"
                                  }
                                }
                              ]
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
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
                                "id": {
                                  "type": "Identifier",
                                  "start": 959,
                                  "end": 971,
                                  "name": "someInnerVar",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "Literal",
                                  "start": 974,
                                  "end": 975,
                                  "value": 3,
                                  "raw": "3"
                                },
                                "definite": false
                              }
                            ],
                            "kind": "var",
                            "declare": false
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
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 538,
                  "end": 539,
                  "expression": {
                    "type": "Identifier",
                    "start": 538,
                    "end": 539,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
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
            "type": "VariableDeclaration",
            "start": 986,
            "end": 1008,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 990,
                "end": 1007,
                "id": {
                  "type": "Identifier",
                  "start": 990,
                  "end": 1003,
                  "name": "someModuleVar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1006,
                  "end": 1007,
                  "value": 4,
                  "raw": "4"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 1011,
            "end": 1053,
            "id": {
              "type": "Identifier",
              "start": 1020,
              "end": 1038,
              "name": "someModuleFunction",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
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
                    "value": 5,
                    "raw": "5"
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1057,
      "end": 1113,
      "id": {
        "type": "Identifier",
        "start": 1064,
        "end": 1065,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1066,
        "end": 1113,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1069,
            "end": 1086,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1076,
              "end": 1086,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1080,
                  "end": 1085,
                  "id": {
                    "type": "Identifier",
                    "start": 1080,
                    "end": 1081,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 1084,
                    "end": 1085,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1088,
            "end": 1111,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1095,
              "end": 1111,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1099,
                  "end": 1110,
                  "id": {
                    "type": "Identifier",
                    "start": 1099,
                    "end": 1102,
                    "name": "meb",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 1105,
                    "end": 1110,
                    "object": {
                      "type": "MemberExpression",
                      "start": 1105,
                      "end": 1108,
                      "object": {
                        "type": "Identifier",
                        "start": 1105,
                        "end": 1106,
                        "name": "M",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1107,
                        "end": 1108,
                        "name": "E",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1109,
                      "end": 1110,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1119,
            "end": 1131,
            "name": "cprime",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1126,
              "end": 1131,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1128,
                "end": 1131,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 1128,
                  "end": 1131,
                  "left": {
                    "type": "Identifier",
                    "start": 1128,
                    "end": 1129,
                    "name": "M",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1130,
                    "end": 1131,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1134,
            "end": 1143,
            "expression": {
              "type": "Literal",
              "start": 1139,
              "end": 1143,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1135,
              "end": 1138,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 1135,
                "end": 1138,
                "left": {
                  "type": "Identifier",
                  "start": 1135,
                  "end": 1136,
                  "name": "M",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 1137,
                  "end": 1138,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
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
      "type": "VariableDeclaration",
      "start": 1146,
      "end": 1164,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1150,
          "end": 1163,
          "id": {
            "type": "Identifier",
            "start": 1150,
            "end": 1151,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1154,
            "end": 1163,
            "callee": {
              "type": "MemberExpression",
              "start": 1158,
              "end": 1161,
              "object": {
                "type": "Identifier",
                "start": 1158,
                "end": 1159,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1160,
                "end": 1161,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1169,
            "end": 1170,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1173,
            "end": 1176,
            "object": {
              "type": "Identifier",
              "start": 1173,
              "end": 1174,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1175,
              "end": 1176,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1182,
            "end": 1187,
            "name": "alpha",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1190,
            "end": 1195,
            "object": {
              "type": "MemberExpression",
              "start": 1190,
              "end": 1193,
              "object": {
                "type": "Identifier",
                "start": 1190,
                "end": 1191,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1192,
                "end": 1193,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1194,
              "end": 1195,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1201,
            "end": 1206,
            "name": "omega",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1209,
            "end": 1223,
            "object": {
              "type": "Identifier",
              "start": 1209,
              "end": 1210,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1211,
              "end": 1223,
              "name": "exported_var",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1225,
      "end": 1262,
      "expression": {
        "type": "CallExpression",
        "start": 1225,
        "end": 1261,
        "callee": {
          "type": "MemberExpression",
          "start": 1225,
          "end": 1259,
          "object": {
            "type": "Identifier",
            "start": 1225,
            "end": 1226,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1227,
            "end": 1259,
            "name": "someMethodThatCallsAnOuterMethod",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
