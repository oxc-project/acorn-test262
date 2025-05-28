__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1237,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 175,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 15,
        "decorators": [],
        "name": "OuterMod",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "someExportedOuterFunc",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "argument": {
                        "type": "Literal",
                        "start": 69,
                        "end": 70,
                        "value": 1,
                        "raw": "1"
                      },
                      "prefix": true
                    }
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
                "decorators": [],
                "name": "OuterInnerMod",
                "optional": false,
                "typeAnnotation": null
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
                        "decorators": [],
                        "name": "someExportedOuterInnerFunc",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
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
                      "expression": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
        "decorators": [],
        "name": "OuterInnerAlias",
        "optional": false,
        "typeAnnotation": null
      },
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
      },
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 227,
      "end": 1030,
      "id": {
        "type": "Identifier",
        "start": 234,
        "end": 235,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 236,
        "end": 1030,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 240,
            "end": 317,
            "id": {
              "type": "Identifier",
              "start": 247,
              "end": 255,
              "decorators": [],
              "name": "InnerMod",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 256,
              "end": 317,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 260,
                  "end": 314,
                  "declaration": {
                    "type": "FunctionDeclaration",
                    "start": 267,
                    "end": 314,
                    "id": {
                      "type": "Identifier",
                      "start": 276,
                      "end": 297,
                      "decorators": [],
                      "name": "someExportedInnerFunc",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 300,
                      "end": 314,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 302,
                          "end": 312,
                          "argument": {
                            "type": "UnaryExpression",
                            "start": 309,
                            "end": 311,
                            "operator": "-",
                            "argument": {
                              "type": "Literal",
                              "start": 310,
                              "end": 311,
                              "value": 2,
                              "raw": "2"
                            },
                            "prefix": true
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": []
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "TSEnumDeclaration",
            "start": 320,
            "end": 346,
            "id": {
              "type": "Identifier",
              "start": 325,
              "end": 326,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSEnumBody",
              "start": 327,
              "end": 346,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 331,
                  "end": 332,
                  "id": {
                    "type": "Identifier",
                    "start": 331,
                    "end": 332,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": null,
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 336,
                  "end": 337,
                  "id": {
                    "type": "Identifier",
                    "start": 336,
                    "end": 337,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": null,
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 341,
                  "end": 342,
                  "id": {
                    "type": "Identifier",
                    "start": 341,
                    "end": 342,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": null,
                  "computed": false
                }
              ]
            },
            "const": false,
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 349,
            "end": 359,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 353,
                "end": 358,
                "id": {
                  "type": "Identifier",
                  "start": 353,
                  "end": 354,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 357,
                  "end": 358,
                  "value": 5,
                  "raw": "5"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 361,
            "end": 393,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 368,
              "end": 393,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 380,
                  "end": 392,
                  "id": {
                    "type": "Identifier",
                    "start": 380,
                    "end": 392,
                    "decorators": [],
                    "name": "exported_var",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": true
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 396,
            "end": 410,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 400,
                "end": 409,
                "id": {
                  "type": "Identifier",
                  "start": 400,
                  "end": 401,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 404,
                  "end": 409,
                  "left": {
                    "type": "Identifier",
                    "start": 404,
                    "end": 405,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 408,
                    "end": 409,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 414,
            "end": 453,
            "id": {
              "type": "Identifier",
              "start": 424,
              "end": 425,
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 426,
              "end": 453,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 430,
                  "end": 450,
                  "key": {
                    "type": "Identifier",
                    "start": 430,
                    "end": 440,
                    "decorators": [],
                    "name": "someMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 442,
                    "end": 449,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 443,
                      "end": 449
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
          {
            "type": "ClassDeclaration",
            "start": 457,
            "end": 480,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 463,
              "end": 464,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 465,
              "end": 480,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 466,
                  "end": 479,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 473,
                    "end": 474,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Literal",
                    "start": 477,
                    "end": 478,
                    "value": 0,
                    "raw": "0"
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public"
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 484,
            "end": 958,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 491,
              "end": 958,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 497,
                "end": 498,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 510,
                  "end": 511,
                  "expression": {
                    "type": "Identifier",
                    "start": 510,
                    "end": 511,
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "ClassBody",
                "start": 512,
                "end": 958,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 516,
                    "end": 612,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 523,
                      "end": 555,
                      "decorators": [],
                      "name": "someMethodThatCallsAnOuterMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 555,
                      "end": 612,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 558,
                        "end": 612,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 559,
                            "end": 611,
                            "argument": {
                              "type": "CallExpression",
                              "start": 566,
                              "end": 610,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 566,
                                "end": 608,
                                "object": {
                                  "type": "Identifier",
                                  "start": 566,
                                  "end": 581,
                                  "decorators": [],
                                  "name": "OuterInnerAlias",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 582,
                                  "end": 608,
                                  "decorators": [],
                                  "name": "someExportedOuterInnerFunc",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 615,
                    "end": 699,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 622,
                      "end": 654,
                      "decorators": [],
                      "name": "someMethodThatCallsAnInnerMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 654,
                      "end": 699,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 657,
                        "end": 699,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 658,
                            "end": 698,
                            "argument": {
                              "type": "CallExpression",
                              "start": 665,
                              "end": 697,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 665,
                                "end": 695,
                                "object": {
                                  "type": "Identifier",
                                  "start": 665,
                                  "end": 673,
                                  "decorators": [],
                                  "name": "InnerMod",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 674,
                                  "end": 695,
                                  "decorators": [],
                                  "name": "someExportedInnerFunc",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 702,
                    "end": 791,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 709,
                      "end": 746,
                      "decorators": [],
                      "name": "someMethodThatCallsAnOuterInnerMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 746,
                      "end": 791,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 749,
                        "end": 791,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 750,
                            "end": 790,
                            "argument": {
                              "type": "CallExpression",
                              "start": 757,
                              "end": 789,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 757,
                                "end": 787,
                                "object": {
                                  "type": "Identifier",
                                  "start": 757,
                                  "end": 765,
                                  "decorators": [],
                                  "name": "OuterMod",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 766,
                                  "end": 787,
                                  "decorators": [],
                                  "name": "someExportedOuterFunc",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 794,
                    "end": 827,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 801,
                      "end": 811,
                      "decorators": [],
                      "name": "someMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 811,
                      "end": 827,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 814,
                        "end": 827,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 816,
                            "end": 825,
                            "argument": {
                              "type": "Literal",
                              "start": 823,
                              "end": 824,
                              "value": 0,
                              "raw": "0"
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 830,
                    "end": 850,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 837,
                      "end": 845,
                      "decorators": [],
                      "name": "someProp",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "start": 848,
                      "end": 849,
                      "value": 1,
                      "raw": "1"
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 854,
                    "end": 952,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 854,
                      "end": 865,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 865,
                      "end": 952,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 868,
                        "end": 952,
                        "body": [
                          {
                            "type": "FunctionDeclaration",
                            "start": 876,
                            "end": 914,
                            "id": {
                              "type": "Identifier",
                              "start": 885,
                              "end": 898,
                              "decorators": [],
                              "name": "someInnerFunc",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 901,
                              "end": 914,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 903,
                                  "end": 912,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 910,
                                    "end": 911,
                                    "value": 2,
                                    "raw": "2"
                                  }
                                }
                              ]
                            },
                            "expression": false
                          },
                          {
                            "type": "VariableDeclaration",
                            "start": 927,
                            "end": 948,
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 931,
                                "end": 947,
                                "id": {
                                  "type": "Identifier",
                                  "start": 931,
                                  "end": 943,
                                  "decorators": [],
                                  "name": "someInnerVar",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "Literal",
                                  "start": 946,
                                  "end": 947,
                                  "value": 3,
                                  "raw": "3"
                                },
                                "definite": false
                              }
                            ],
                            "declare": false
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 961,
            "end": 983,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 965,
                "end": 982,
                "id": {
                  "type": "Identifier",
                  "start": 965,
                  "end": 978,
                  "decorators": [],
                  "name": "someModuleVar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 981,
                  "end": 982,
                  "value": 4,
                  "raw": "4"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 986,
            "end": 1028,
            "id": {
              "type": "Identifier",
              "start": 995,
              "end": 1013,
              "decorators": [],
              "name": "someModuleFunction",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 1016,
              "end": 1028,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1018,
                  "end": 1027,
                  "argument": {
                    "type": "Literal",
                    "start": 1025,
                    "end": 1026,
                    "value": 5,
                    "raw": "5"
                  }
                }
              ]
            },
            "expression": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1032,
      "end": 1088,
      "id": {
        "type": "Identifier",
        "start": 1039,
        "end": 1040,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1041,
        "end": 1088,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1044,
            "end": 1061,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1051,
              "end": 1061,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1055,
                  "end": 1060,
                  "id": {
                    "type": "Identifier",
                    "start": 1055,
                    "end": 1056,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 1059,
                    "end": 1060,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1063,
            "end": 1086,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1070,
              "end": 1086,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1074,
                  "end": 1085,
                  "id": {
                    "type": "Identifier",
                    "start": 1074,
                    "end": 1077,
                    "decorators": [],
                    "name": "meb",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 1080,
                    "end": 1085,
                    "object": {
                      "type": "MemberExpression",
                      "start": 1080,
                      "end": 1083,
                      "object": {
                        "type": "Identifier",
                        "start": 1080,
                        "end": 1081,
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1082,
                        "end": 1083,
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1084,
                      "end": 1085,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1090,
      "end": 1119,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1094,
          "end": 1118,
          "id": {
            "type": "Identifier",
            "start": 1094,
            "end": 1106,
            "decorators": [],
            "name": "cprime",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1101,
              "end": 1106,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1103,
                "end": 1106,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 1103,
                  "end": 1106,
                  "left": {
                    "type": "Identifier",
                    "start": 1103,
                    "end": 1104,
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1105,
                    "end": 1106,
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1109,
            "end": 1118,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1110,
              "end": 1113,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 1110,
                "end": 1113,
                "left": {
                  "type": "Identifier",
                  "start": 1110,
                  "end": 1111,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 1112,
                  "end": 1113,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            },
            "expression": {
              "type": "Literal",
              "start": 1114,
              "end": 1118,
              "value": null,
              "raw": "null"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1121,
      "end": 1139,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1125,
          "end": 1138,
          "id": {
            "type": "Identifier",
            "start": 1125,
            "end": 1126,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1129,
            "end": 1138,
            "callee": {
              "type": "MemberExpression",
              "start": 1133,
              "end": 1136,
              "object": {
                "type": "Identifier",
                "start": 1133,
                "end": 1134,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1135,
                "end": 1136,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1140,
      "end": 1152,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1144,
          "end": 1151,
          "id": {
            "type": "Identifier",
            "start": 1144,
            "end": 1145,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1148,
            "end": 1151,
            "object": {
              "type": "Identifier",
              "start": 1148,
              "end": 1149,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1150,
              "end": 1151,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1153,
      "end": 1171,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1157,
          "end": 1170,
          "id": {
            "type": "Identifier",
            "start": 1157,
            "end": 1162,
            "decorators": [],
            "name": "alpha",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1165,
            "end": 1170,
            "object": {
              "type": "MemberExpression",
              "start": 1165,
              "end": 1168,
              "object": {
                "type": "Identifier",
                "start": 1165,
                "end": 1166,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1167,
                "end": 1168,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 1169,
              "end": 1170,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1172,
      "end": 1199,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1176,
          "end": 1198,
          "id": {
            "type": "Identifier",
            "start": 1176,
            "end": 1181,
            "decorators": [],
            "name": "omega",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1184,
            "end": 1198,
            "object": {
              "type": "Identifier",
              "start": 1184,
              "end": 1185,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1186,
              "end": 1198,
              "decorators": [],
              "name": "exported_var",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1200,
      "end": 1237,
      "expression": {
        "type": "CallExpression",
        "start": 1200,
        "end": 1236,
        "callee": {
          "type": "MemberExpression",
          "start": 1200,
          "end": 1234,
          "object": {
            "type": "Identifier",
            "start": 1200,
            "end": 1201,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1202,
            "end": 1234,
            "decorators": [],
            "name": "someMethodThatCallsAnOuterMethod",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
