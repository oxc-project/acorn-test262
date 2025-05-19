__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 149,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 23,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 21,
          "end": 23,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 20,
          "decorators": [],
          "name": "Reflect",
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
      "start": 24,
      "end": 47,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 31,
        "end": 47,
        "body": {
          "type": "TSInterfaceBody",
          "start": 45,
          "end": 47,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 41,
          "end": 44,
          "decorators": [],
          "name": "Foo",
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
      "type": "ExportNamedDeclaration",
      "start": 48,
      "end": 98,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 55,
        "end": 98,
        "body": {
          "type": "TSModuleBlock",
          "start": 77,
          "end": 98,
          "body": [
            {
              "type": "TSTypeAliasDeclaration",
              "start": 79,
              "end": 96,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 88,
                "end": 95
              },
              "typeParameters": null
            }
          ]
        },
        "declare": true,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 73,
          "end": 76,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "namespace"
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 99,
      "end": 123,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 106,
        "end": 123,
        "body": {
          "type": "TSEnumBody",
          "start": 121,
          "end": 123,
          "members": []
        },
        "const": true,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 117,
          "end": 120,
          "decorators": [],
          "name": "Baz",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 124,
      "end": 147,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 139,
        "end": 147,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 145,
          "end": 147,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": null,
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value"
    },
    {
      "type": "EmptyStatement",
      "start": 147,
      "end": 148
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2425,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "ClassDeclaration",
      "start": 51,
      "end": 2424,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 69,
        "end": 2424,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 75,
            "end": 1364,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "ArrayExpression",
              "start": 86,
              "end": 1363,
              "elements": [
                {
                  "type": "CallExpression",
                  "start": 96,
                  "end": 199,
                  "arguments": [],
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 97,
                    "end": 196,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 103,
                      "end": 196,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 117,
                          "end": 129,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 121,
                              "end": 128,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 121,
                                "end": 128,
                                "decorators": [],
                                "name": "Reflect",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": null
                            }
                          ],
                          "declare": false,
                          "kind": "var"
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 176,
                          "end": 186,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 176,
                            "end": 185,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 176,
                              "end": 183,
                              "computed": false,
                              "object": {
                                "type": "Super",
                                "start": 176,
                                "end": 181
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 182,
                                "end": 183,
                                "decorators": [],
                                "name": "w",
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
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                {
                  "type": "CallExpression",
                  "start": 209,
                  "end": 336,
                  "arguments": [],
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 210,
                    "end": 333,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 216,
                      "end": 333,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 230,
                          "end": 266,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 234,
                              "end": 265,
                              "definite": false,
                              "id": {
                                "type": "ObjectPattern",
                                "start": 234,
                                "end": 245,
                                "decorators": [],
                                "optional": false,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 236,
                                    "end": 243,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 236,
                                      "end": 243,
                                      "decorators": [],
                                      "name": "Reflect",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": true,
                                    "value": {
                                      "type": "Identifier",
                                      "start": 236,
                                      "end": 243,
                                      "decorators": [],
                                      "name": "Reflect",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ],
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "ObjectExpression",
                                "start": 248,
                                "end": 265,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 250,
                                    "end": 263,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 250,
                                      "end": 257,
                                      "decorators": [],
                                      "name": "Reflect",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "Literal",
                                      "start": 259,
                                      "end": 263,
                                      "raw": "null",
                                      "value": null
                                    }
                                  }
                                ]
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 313,
                          "end": 323,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 313,
                            "end": 322,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 313,
                              "end": 320,
                              "computed": false,
                              "object": {
                                "type": "Super",
                                "start": 313,
                                "end": 318
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 319,
                                "end": 320,
                                "decorators": [],
                                "name": "w",
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
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                {
                  "type": "CallExpression",
                  "start": 346,
                  "end": 460,
                  "arguments": [],
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 347,
                    "end": 457,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 353,
                      "end": 457,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 367,
                          "end": 390,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 371,
                              "end": 389,
                              "definite": false,
                              "id": {
                                "type": "ArrayPattern",
                                "start": 371,
                                "end": 380,
                                "decorators": [],
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "start": 372,
                                    "end": 379,
                                    "decorators": [],
                                    "name": "Reflect",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 383,
                                "end": 389,
                                "elements": [
                                  {
                                    "type": "Literal",
                                    "start": 384,
                                    "end": 388,
                                    "raw": "null",
                                    "value": null
                                  }
                                ]
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 437,
                          "end": 447,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 437,
                            "end": 446,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 437,
                              "end": 444,
                              "computed": false,
                              "object": {
                                "type": "Super",
                                "start": 437,
                                "end": 442
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 443,
                                "end": 444,
                                "decorators": [],
                                "name": "w",
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
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                {
                  "type": "CallExpression",
                  "start": 470,
                  "end": 577,
                  "arguments": [],
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 471,
                    "end": 574,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 477,
                      "end": 574,
                      "body": [
                        {
                          "type": "ClassDeclaration",
                          "start": 491,
                          "end": 507,
                          "abstract": false,
                          "body": {
                            "type": "ClassBody",
                            "start": 505,
                            "end": 507,
                            "body": []
                          },
                          "declare": false,
                          "decorators": [],
                          "id": {
                            "type": "Identifier",
                            "start": 497,
                            "end": 504,
                            "decorators": [],
                            "name": "Reflect",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "implements": [],
                          "superClass": null,
                          "superTypeArguments": null,
                          "typeParameters": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 554,
                          "end": 564,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 554,
                            "end": 563,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 554,
                              "end": 561,
                              "computed": false,
                              "object": {
                                "type": "Super",
                                "start": 554,
                                "end": 559
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 560,
                                "end": 561,
                                "decorators": [],
                                "name": "w",
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
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                {
                  "type": "CallExpression",
                  "start": 587,
                  "end": 699,
                  "arguments": [],
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 588,
                    "end": 696,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 594,
                      "end": 696,
                      "body": [
                        {
                          "type": "FunctionDeclaration",
                          "start": 608,
                          "end": 629,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 627,
                            "end": 629,
                            "body": []
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": {
                            "type": "Identifier",
                            "start": 617,
                            "end": 624,
                            "decorators": [],
                            "name": "Reflect",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "params": [],
                          "returnType": null,
                          "typeParameters": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 676,
                          "end": 686,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 676,
                            "end": 685,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 676,
                              "end": 683,
                              "computed": false,
                              "object": {
                                "type": "Super",
                                "start": 676,
                                "end": 681
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 682,
                                "end": 683,
                                "decorators": [],
                                "name": "w",
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
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                {
                  "type": "CallExpression",
                  "start": 709,
                  "end": 815,
                  "arguments": [],
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 710,
                    "end": 812,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 716,
                      "end": 812,
                      "body": [
                        {
                          "type": "TSEnumDeclaration",
                          "start": 730,
                          "end": 745,
                          "body": {
                            "type": "TSEnumBody",
                            "start": 743,
                            "end": 745,
                            "members": []
                          },
                          "const": false,
                          "declare": false,
                          "id": {
                            "type": "Identifier",
                            "start": 735,
                            "end": 742,
                            "decorators": [],
                            "name": "Reflect",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 792,
                          "end": 802,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 792,
                            "end": 801,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 792,
                              "end": 799,
                              "computed": false,
                              "object": {
                                "type": "Super",
                                "start": 792,
                                "end": 797
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 798,
                                "end": 799,
                                "decorators": [],
                                "name": "w",
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
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                {
                  "type": "CallExpression",
                  "start": 825,
                  "end": 937,
                  "arguments": [],
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 826,
                    "end": 934,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 832,
                      "end": 934,
                      "body": [
                        {
                          "type": "TSEnumDeclaration",
                          "start": 846,
                          "end": 867,
                          "body": {
                            "type": "TSEnumBody",
                            "start": 865,
                            "end": 867,
                            "members": []
                          },
                          "const": true,
                          "declare": false,
                          "id": {
                            "type": "Identifier",
                            "start": 857,
                            "end": 864,
                            "decorators": [],
                            "name": "Reflect",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 914,
                          "end": 924,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 914,
                            "end": 923,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 914,
                              "end": 921,
                              "computed": false,
                              "object": {
                                "type": "Super",
                                "start": 914,
                                "end": 919
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 920,
                                "end": 921,
                                "decorators": [],
                                "name": "w",
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
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                {
                  "type": "CallExpression",
                  "start": 947,
                  "end": 1043,
                  "arguments": [],
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 948,
                    "end": 1040,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 954,
                      "end": 1040,
                      "body": [
                        {
                          "type": "TSTypeAliasDeclaration",
                          "start": 968,
                          "end": 991,
                          "declare": false,
                          "id": {
                            "type": "Identifier",
                            "start": 973,
                            "end": 980,
                            "decorators": [],
                            "name": "Reflect",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 983,
                            "end": 990
                          },
                          "typeParameters": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1020,
                          "end": 1030,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 1020,
                            "end": 1029,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1020,
                              "end": 1027,
                              "computed": false,
                              "object": {
                                "type": "Super",
                                "start": 1020,
                                "end": 1025
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 1026,
                                "end": 1027,
                                "decorators": [],
                                "name": "w",
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
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                {
                  "type": "CallExpression",
                  "start": 1053,
                  "end": 1147,
                  "arguments": [],
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 1054,
                    "end": 1144,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1060,
                      "end": 1144,
                      "body": [
                        {
                          "type": "TSInterfaceDeclaration",
                          "start": 1074,
                          "end": 1094,
                          "body": {
                            "type": "TSInterfaceBody",
                            "start": 1092,
                            "end": 1094,
                            "body": []
                          },
                          "declare": false,
                          "extends": [],
                          "id": {
                            "type": "Identifier",
                            "start": 1084,
                            "end": 1091,
                            "decorators": [],
                            "name": "Reflect",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeParameters": null
                        },
                        {
                          "type": "EmptyStatement",
                          "start": 1094,
                          "end": 1095
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1124,
                          "end": 1134,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 1124,
                            "end": 1133,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1124,
                              "end": 1131,
                              "computed": false,
                              "object": {
                                "type": "Super",
                                "start": 1124,
                                "end": 1129
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 1130,
                                "end": 1131,
                                "decorators": [],
                                "name": "w",
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
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                {
                  "type": "CallExpression",
                  "start": 1157,
                  "end": 1249,
                  "arguments": [],
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 1158,
                    "end": 1246,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1164,
                      "end": 1246,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1178,
                          "end": 1197,
                          "directive": null,
                          "expression": {
                            "type": "ClassExpression",
                            "start": 1179,
                            "end": 1195,
                            "abstract": false,
                            "body": {
                              "type": "ClassBody",
                              "start": 1193,
                              "end": 1195,
                              "body": []
                            },
                            "declare": false,
                            "decorators": [],
                            "id": {
                              "type": "Identifier",
                              "start": 1185,
                              "end": 1192,
                              "decorators": [],
                              "name": "Reflect",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "implements": [],
                            "superClass": null,
                            "superTypeArguments": null,
                            "typeParameters": null
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1226,
                          "end": 1236,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 1226,
                            "end": 1235,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1226,
                              "end": 1233,
                              "computed": false,
                              "object": {
                                "type": "Super",
                                "start": 1226,
                                "end": 1231
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 1232,
                                "end": 1233,
                                "decorators": [],
                                "name": "w",
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
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                {
                  "type": "CallExpression",
                  "start": 1259,
                  "end": 1356,
                  "arguments": [],
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 1260,
                    "end": 1353,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1266,
                      "end": 1353,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1280,
                          "end": 1304,
                          "directive": null,
                          "expression": {
                            "type": "FunctionExpression",
                            "start": 1281,
                            "end": 1302,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 1300,
                              "end": 1302,
                              "body": []
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": {
                              "type": "Identifier",
                              "start": 1290,
                              "end": 1297,
                              "decorators": [],
                              "name": "Reflect",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "params": [],
                            "returnType": null,
                            "typeParameters": null
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1333,
                          "end": 1343,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 1333,
                            "end": 1342,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1333,
                              "end": 1340,
                              "computed": false,
                              "object": {
                                "type": "Super",
                                "start": 1333,
                                "end": 1338
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 1339,
                                "end": 1340,
                                "decorators": [],
                                "name": "w",
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
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "StaticBlock",
            "start": 1370,
            "end": 1482,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 1387,
                "end": 1423,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1391,
                    "end": 1422,
                    "definite": false,
                    "id": {
                      "type": "ObjectPattern",
                      "start": 1391,
                      "end": 1402,
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1393,
                          "end": 1400,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1393,
                            "end": 1400,
                            "decorators": [],
                            "name": "Reflect",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "start": 1393,
                            "end": 1400,
                            "decorators": [],
                            "name": "Reflect",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "start": 1405,
                      "end": 1422,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1407,
                          "end": 1420,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1407,
                            "end": 1414,
                            "decorators": [],
                            "name": "Reflect",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 1416,
                            "end": 1420,
                            "raw": "null",
                            "value": null
                          }
                        }
                      ]
                    }
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              {
                "type": "ExpressionStatement",
                "start": 1466,
                "end": 1476,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 1466,
                  "end": 1475,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1466,
                    "end": 1473,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 1466,
                      "end": 1471
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1472,
                      "end": 1473,
                      "decorators": [],
                      "name": "w",
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
          {
            "type": "StaticBlock",
            "start": 1488,
            "end": 1587,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 1505,
                "end": 1528,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1509,
                    "end": 1527,
                    "definite": false,
                    "id": {
                      "type": "ArrayPattern",
                      "start": 1509,
                      "end": 1518,
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 1510,
                          "end": 1517,
                          "decorators": [],
                          "name": "Reflect",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "start": 1521,
                      "end": 1527,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 1522,
                          "end": 1526,
                          "raw": "null",
                          "value": null
                        }
                      ]
                    }
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              {
                "type": "ExpressionStatement",
                "start": 1571,
                "end": 1581,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 1571,
                  "end": 1580,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1571,
                    "end": 1578,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 1571,
                      "end": 1576
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1577,
                      "end": 1578,
                      "decorators": [],
                      "name": "w",
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
          {
            "type": "StaticBlock",
            "start": 1593,
            "end": 1681,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 1610,
                "end": 1622,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1614,
                    "end": 1621,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1614,
                      "end": 1621,
                      "decorators": [],
                      "name": "Reflect",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": null
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              {
                "type": "ExpressionStatement",
                "start": 1665,
                "end": 1675,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 1665,
                  "end": 1674,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1665,
                    "end": 1672,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 1665,
                      "end": 1670
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1671,
                      "end": 1672,
                      "decorators": [],
                      "name": "w",
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
          {
            "type": "StaticBlock",
            "start": 1687,
            "end": 1779,
            "body": [
              {
                "type": "ClassDeclaration",
                "start": 1704,
                "end": 1720,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 1718,
                  "end": 1720,
                  "body": []
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 1710,
                  "end": 1717,
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null
                },
                "implements": [],
                "superClass": null,
                "superTypeArguments": null,
                "typeParameters": null
              },
              {
                "type": "ExpressionStatement",
                "start": 1763,
                "end": 1773,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 1763,
                  "end": 1772,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1763,
                    "end": 1770,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 1763,
                      "end": 1768
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1769,
                      "end": 1770,
                      "decorators": [],
                      "name": "w",
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
          {
            "type": "StaticBlock",
            "start": 1785,
            "end": 1882,
            "body": [
              {
                "type": "FunctionDeclaration",
                "start": 1802,
                "end": 1823,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1821,
                  "end": 1823,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": {
                  "type": "Identifier",
                  "start": 1811,
                  "end": 1818,
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null
                },
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ExpressionStatement",
                "start": 1866,
                "end": 1876,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 1866,
                  "end": 1875,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1866,
                    "end": 1873,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 1866,
                      "end": 1871
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1872,
                      "end": 1873,
                      "decorators": [],
                      "name": "w",
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
          {
            "type": "StaticBlock",
            "start": 1888,
            "end": 1979,
            "body": [
              {
                "type": "TSEnumDeclaration",
                "start": 1905,
                "end": 1920,
                "body": {
                  "type": "TSEnumBody",
                  "start": 1918,
                  "end": 1920,
                  "members": []
                },
                "const": false,
                "declare": false,
                "id": {
                  "type": "Identifier",
                  "start": 1910,
                  "end": 1917,
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 1963,
                "end": 1973,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 1963,
                  "end": 1972,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1963,
                    "end": 1970,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 1963,
                      "end": 1968
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1969,
                      "end": 1970,
                      "decorators": [],
                      "name": "w",
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
          {
            "type": "StaticBlock",
            "start": 1985,
            "end": 2082,
            "body": [
              {
                "type": "TSEnumDeclaration",
                "start": 2002,
                "end": 2023,
                "body": {
                  "type": "TSEnumBody",
                  "start": 2021,
                  "end": 2023,
                  "members": []
                },
                "const": true,
                "declare": false,
                "id": {
                  "type": "Identifier",
                  "start": 2013,
                  "end": 2020,
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 2066,
                "end": 2076,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 2066,
                  "end": 2075,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2066,
                    "end": 2073,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 2066,
                      "end": 2071
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2072,
                      "end": 2073,
                      "decorators": [],
                      "name": "w",
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
          {
            "type": "StaticBlock",
            "start": 2088,
            "end": 2169,
            "body": [
              {
                "type": "TSTypeAliasDeclaration",
                "start": 2105,
                "end": 2128,
                "declare": false,
                "id": {
                  "type": "Identifier",
                  "start": 2110,
                  "end": 2117,
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 2120,
                  "end": 2127
                },
                "typeParameters": null
              },
              {
                "type": "ExpressionStatement",
                "start": 2153,
                "end": 2163,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 2153,
                  "end": 2162,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2153,
                    "end": 2160,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 2153,
                      "end": 2158
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2159,
                      "end": 2160,
                      "decorators": [],
                      "name": "w",
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
          {
            "type": "StaticBlock",
            "start": 2175,
            "end": 2253,
            "body": [
              {
                "type": "TSInterfaceDeclaration",
                "start": 2192,
                "end": 2212,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 2210,
                  "end": 2212,
                  "body": []
                },
                "declare": false,
                "extends": [],
                "id": {
                  "type": "Identifier",
                  "start": 2202,
                  "end": 2209,
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null
              },
              {
                "type": "ExpressionStatement",
                "start": 2237,
                "end": 2247,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 2237,
                  "end": 2246,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2237,
                    "end": 2244,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 2237,
                      "end": 2242
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2243,
                      "end": 2244,
                      "decorators": [],
                      "name": "w",
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
          {
            "type": "StaticBlock",
            "start": 2259,
            "end": 2335,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 2276,
                "end": 2294,
                "directive": null,
                "expression": {
                  "type": "ClassExpression",
                  "start": 2277,
                  "end": 2293,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 2291,
                    "end": 2293,
                    "body": []
                  },
                  "declare": false,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "start": 2283,
                    "end": 2290,
                    "decorators": [],
                    "name": "Reflect",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "implements": [],
                  "superClass": null,
                  "superTypeArguments": null,
                  "typeParameters": null
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 2319,
                "end": 2329,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 2319,
                  "end": 2328,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2319,
                    "end": 2326,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 2319,
                      "end": 2324
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2325,
                      "end": 2326,
                      "decorators": [],
                      "name": "w",
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
          {
            "type": "StaticBlock",
            "start": 2341,
            "end": 2422,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 2358,
                "end": 2381,
                "directive": null,
                "expression": {
                  "type": "FunctionExpression",
                  "start": 2359,
                  "end": 2380,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 2378,
                    "end": 2380,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 2368,
                    "end": 2375,
                    "decorators": [],
                    "name": "Reflect",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 2406,
                "end": 2416,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 2406,
                  "end": 2415,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2406,
                    "end": 2413,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 2406,
                      "end": 2411
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2412,
                      "end": 2413,
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 67,
        "end": 68,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 153,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "VariableDeclaration",
      "start": 51,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 69,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 62,
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 65,
            "end": 69,
            "raw": "null",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 105,
      "end": 152,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 123,
        "end": 152,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 129,
            "end": 150,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 137,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 140,
              "end": 149,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 140,
                "end": 147,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 140,
                  "end": 145
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 147,
                  "decorators": [],
                  "name": "w",
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 112,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 121,
        "end": 122,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 170,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "VariableDeclaration",
      "start": 51,
      "end": 87,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 86,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 55,
            "end": 66,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 57,
                "end": 64,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 64,
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 64,
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 69,
            "end": 86,
            "properties": [
              {
                "type": "Property",
                "start": 71,
                "end": 84,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 78,
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 80,
                  "end": 84,
                  "raw": "null",
                  "value": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 122,
      "end": 169,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 140,
        "end": 169,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 146,
            "end": 167,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 154,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 157,
              "end": 166,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 157,
                "end": 164,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 157,
                  "end": 162
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 164,
                  "decorators": [],
                  "name": "w",
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 128,
        "end": 129,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 138,
        "end": 139,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 157,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "VariableDeclaration",
      "start": 51,
      "end": 74,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 73,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 55,
            "end": 64,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 56,
                "end": 63,
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 67,
            "end": 73,
            "elements": [
              {
                "type": "Literal",
                "start": 68,
                "end": 72,
                "raw": "null",
                "value": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 109,
      "end": 156,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 127,
        "end": 156,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 133,
            "end": 154,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 144,
              "end": 153,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 144,
                "end": 151,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 144,
                  "end": 149
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 151,
                  "decorators": [],
                  "name": "w",
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 116,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 125,
        "end": 126,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 153,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "VariableDeclaration",
      "start": 51,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 69,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 62,
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 65,
            "end": 69,
            "raw": "null",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 105,
      "end": 152,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 123,
        "end": 152,
        "body": [
          {
            "type": "StaticBlock",
            "start": 129,
            "end": 150,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 138,
                "end": 148,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 138,
                  "end": 147,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 138,
                    "end": 145,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 138,
                      "end": 143
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 144,
                      "end": 145,
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 112,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 121,
        "end": 122,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 170,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "VariableDeclaration",
      "start": 51,
      "end": 87,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 86,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 55,
            "end": 66,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 57,
                "end": 64,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 64,
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 64,
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 69,
            "end": 86,
            "properties": [
              {
                "type": "Property",
                "start": 71,
                "end": 84,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 78,
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 80,
                  "end": 84,
                  "raw": "null",
                  "value": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 122,
      "end": 169,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 140,
        "end": 169,
        "body": [
          {
            "type": "StaticBlock",
            "start": 146,
            "end": 167,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 155,
                "end": 165,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 155,
                  "end": 164,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 155,
                    "end": 162,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 155,
                      "end": 160
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 161,
                      "end": 162,
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 128,
        "end": 129,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 138,
        "end": 139,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 157,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "VariableDeclaration",
      "start": 51,
      "end": 74,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 73,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 55,
            "end": 64,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 56,
                "end": 63,
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 67,
            "end": 73,
            "elements": [
              {
                "type": "Literal",
                "start": 68,
                "end": 72,
                "raw": "null",
                "value": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 109,
      "end": 156,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 127,
        "end": 156,
        "body": [
          {
            "type": "StaticBlock",
            "start": 133,
            "end": 154,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 142,
                "end": 152,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 142,
                  "end": 151,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 142,
                    "end": 149,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 142,
                      "end": 147
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 149,
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 116,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 125,
        "end": 126,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 150,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "ClassDeclaration",
      "start": 51,
      "end": 67,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 65,
        "end": 67,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 64,
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 102,
      "end": 149,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 149,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 126,
            "end": 147,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 137,
              "end": 146,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 137,
                "end": 144,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 137,
                  "end": 142
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 144,
                  "decorators": [],
                  "name": "w",
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 118,
        "end": 119,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 150,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "ClassDeclaration",
      "start": 51,
      "end": 67,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 65,
        "end": 67,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 64,
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 102,
      "end": 149,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 149,
        "body": [
          {
            "type": "StaticBlock",
            "start": 126,
            "end": 147,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 135,
                "end": 145,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 135,
                  "end": 144,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 135,
                    "end": 142,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 135,
                      "end": 140
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 142,
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 118,
        "end": 119,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 155,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "FunctionDeclaration",
      "start": 51,
      "end": 72,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 70,
        "end": 72,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 67,
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 107,
      "end": 154,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 125,
        "end": 154,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 131,
            "end": 152,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 142,
              "end": 151,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 142,
                "end": 149,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 142,
                  "end": 147
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 149,
                  "decorators": [],
                  "name": "w",
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 114,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 123,
        "end": 124,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 155,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "FunctionDeclaration",
      "start": 51,
      "end": 72,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 70,
        "end": 72,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 67,
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 107,
      "end": 154,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 125,
        "end": 154,
        "body": [
          {
            "type": "StaticBlock",
            "start": 131,
            "end": 152,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 140,
                "end": 150,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 140,
                  "end": 149,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 140,
                    "end": 147,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 140,
                      "end": 145
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 147,
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 114,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 123,
        "end": 124,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 154,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "TSModuleDeclaration",
      "start": 51,
      "end": 71,
      "body": {
        "type": "TSModuleBlock",
        "start": 69,
        "end": 71,
        "body": []
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 68,
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "ClassDeclaration",
      "start": 106,
      "end": 153,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 124,
        "end": 153,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 130,
            "end": 151,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 141,
              "end": 150,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 141,
                "end": 148,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 141,
                  "end": 146
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "decorators": [],
                  "name": "w",
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 122,
        "end": 123,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 154,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "TSModuleDeclaration",
      "start": 51,
      "end": 71,
      "body": {
        "type": "TSModuleBlock",
        "start": 69,
        "end": 71,
        "body": []
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 68,
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "ClassDeclaration",
      "start": 106,
      "end": 153,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 124,
        "end": 153,
        "body": [
          {
            "type": "StaticBlock",
            "start": 130,
            "end": 151,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 139,
                "end": 149,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 139,
                  "end": 148,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 139,
                    "end": 146,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 139,
                      "end": 144
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 145,
                      "end": 146,
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 122,
        "end": 123,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 149,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "TSEnumDeclaration",
      "start": 51,
      "end": 66,
      "body": {
        "type": "TSEnumBody",
        "start": 64,
        "end": 66,
        "members": []
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 63,
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 101,
      "end": 148,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 119,
        "end": 148,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 125,
            "end": 146,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 136,
              "end": 145,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 136,
                "end": 143,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 136,
                  "end": 141
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 143,
                  "decorators": [],
                  "name": "w",
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 108,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 117,
        "end": 118,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 149,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "TSEnumDeclaration",
      "start": 51,
      "end": 66,
      "body": {
        "type": "TSEnumBody",
        "start": 64,
        "end": 66,
        "members": []
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 63,
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 101,
      "end": 148,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 119,
        "end": 148,
        "body": [
          {
            "type": "StaticBlock",
            "start": 125,
            "end": 146,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 134,
                "end": 144,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 134,
                  "end": 143,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 134,
                    "end": 141,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 134,
                      "end": 139
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 140,
                      "end": 141,
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 108,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 117,
        "end": 118,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 155,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "TSEnumDeclaration",
      "start": 51,
      "end": 72,
      "body": {
        "type": "TSEnumBody",
        "start": 70,
        "end": 72,
        "members": []
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 69,
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 107,
      "end": 154,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 125,
        "end": 154,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 131,
            "end": 152,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 142,
              "end": 151,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 142,
                "end": 149,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 142,
                  "end": 147
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 149,
                  "decorators": [],
                  "name": "w",
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 114,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 123,
        "end": 124,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 155,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "TSEnumDeclaration",
      "start": 51,
      "end": 72,
      "body": {
        "type": "TSEnumBody",
        "start": 70,
        "end": 72,
        "members": []
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 69,
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 107,
      "end": 154,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 125,
        "end": 154,
        "body": [
          {
            "type": "StaticBlock",
            "start": 131,
            "end": 152,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 140,
                "end": 150,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 140,
                  "end": 149,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 140,
                    "end": 147,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 140,
                      "end": 145
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 147,
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 114,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 123,
        "end": 124,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 172,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "ImportDeclaration",
      "start": 51,
      "end": 89,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 76,
        "end": 88,
        "raw": "\"./external\"",
        "value": "./external"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 58,
          "end": 70,
          "local": {
            "type": "Identifier",
            "start": 63,
            "end": 70,
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 124,
      "end": 171,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 142,
        "end": 171,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 148,
            "end": 169,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 159,
              "end": 168,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 159,
                "end": 166,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 159,
                  "end": 164
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 166,
                  "decorators": [],
                  "name": "w",
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 130,
        "end": 131,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 140,
        "end": 141,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 172,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "ImportDeclaration",
      "start": 51,
      "end": 89,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 76,
        "end": 88,
        "raw": "\"./external\"",
        "value": "./external"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 58,
          "end": 70,
          "local": {
            "type": "Identifier",
            "start": 63,
            "end": 70,
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 124,
      "end": 171,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 142,
        "end": 171,
        "body": [
          {
            "type": "StaticBlock",
            "start": 148,
            "end": 169,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 157,
                "end": 167,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 157,
                  "end": 166,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 157,
                    "end": 164,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 157,
                      "end": 162
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 164,
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 130,
        "end": 131,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 140,
        "end": 141,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 171,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "ImportDeclaration",
      "start": 51,
      "end": 88,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 75,
        "end": 87,
        "raw": "\"./external\"",
        "value": "./external"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 60,
          "end": 67,
          "imported": {
            "type": "Identifier",
            "start": 60,
            "end": 67,
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 60,
            "end": 67,
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 123,
      "end": 170,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 141,
        "end": 170,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 147,
            "end": 168,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 158,
              "end": 167,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 158,
                "end": 165,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 158,
                  "end": 163
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 165,
                  "decorators": [],
                  "name": "w",
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 130,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 139,
        "end": 140,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 171,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "ImportDeclaration",
      "start": 51,
      "end": 88,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 75,
        "end": 87,
        "raw": "\"./external\"",
        "value": "./external"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 60,
          "end": 67,
          "imported": {
            "type": "Identifier",
            "start": 60,
            "end": 67,
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 60,
            "end": 67,
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 123,
      "end": 170,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 141,
        "end": 170,
        "body": [
          {
            "type": "StaticBlock",
            "start": 147,
            "end": 168,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 156,
                "end": 166,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 156,
                  "end": 165,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 156,
                    "end": 163,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 156,
                      "end": 161
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 162,
                      "end": 163,
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 130,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 139,
        "end": 140,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 202,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "ImportDeclaration",
      "start": 51,
      "end": 95,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 82,
        "end": 94,
        "raw": "\"./external\"",
        "value": "./external"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 60,
          "end": 74,
          "imported": {
            "type": "Identifier",
            "start": 60,
            "end": 63,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 67,
            "end": 74,
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 154,
      "end": 201,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 172,
        "end": 201,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 178,
            "end": 199,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 189,
              "end": 198,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 189,
                "end": 196,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 189,
                  "end": 194
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "decorators": [],
                  "name": "w",
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 161,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 170,
        "end": 171,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 202,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "ImportDeclaration",
      "start": 51,
      "end": 95,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 82,
        "end": 94,
        "raw": "\"./external\"",
        "value": "./external"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 60,
          "end": 74,
          "imported": {
            "type": "Identifier",
            "start": 60,
            "end": 63,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 67,
            "end": 74,
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 154,
      "end": 201,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 172,
        "end": 201,
        "body": [
          {
            "type": "StaticBlock",
            "start": 178,
            "end": 199,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 187,
                "end": 197,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 187,
                  "end": 196,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 187,
                    "end": 194,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 187,
                      "end": 192
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 193,
                      "end": 194,
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 161,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 170,
        "end": 171,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 202,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "ImportDeclaration",
      "start": 51,
      "end": 95,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 82,
        "end": 94,
        "raw": "\"./external\"",
        "value": "./external"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 60,
          "end": 74,
          "imported": {
            "type": "Identifier",
            "start": 60,
            "end": 63,
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 67,
            "end": 74,
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 154,
      "end": 201,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 172,
        "end": 201,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 178,
            "end": 199,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 189,
              "end": 198,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 189,
                "end": 196,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 189,
                  "end": 194
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "decorators": [],
                  "name": "w",
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 161,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 170,
        "end": 171,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 202,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "ImportDeclaration",
      "start": 51,
      "end": 95,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 82,
        "end": 94,
        "raw": "\"./external\"",
        "value": "./external"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 60,
          "end": 74,
          "imported": {
            "type": "Identifier",
            "start": 60,
            "end": 63,
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 67,
            "end": 74,
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 154,
      "end": 201,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 172,
        "end": 201,
        "body": [
          {
            "type": "StaticBlock",
            "start": 178,
            "end": 199,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 187,
                "end": 197,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 187,
                  "end": 196,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 187,
                    "end": 194,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 187,
                      "end": 192
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 193,
                      "end": 194,
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 161,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 170,
        "end": 171,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 178,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "ImportDeclaration",
      "start": 51,
      "end": 95,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 82,
        "end": 94,
        "raw": "\"./external\"",
        "value": "./external"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 60,
          "end": 74,
          "imported": {
            "type": "Identifier",
            "start": 60,
            "end": 63,
            "decorators": [],
            "name": "Baz",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 67,
            "end": 74,
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 130,
      "end": 177,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 148,
        "end": 177,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 154,
            "end": 175,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 161,
              "end": 162,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 165,
              "end": 174,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 165,
                "end": 172,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 165,
                  "end": 170
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 172,
                  "decorators": [],
                  "name": "w",
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 137,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 146,
        "end": 147,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 178,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "ImportDeclaration",
      "start": 51,
      "end": 95,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 82,
        "end": 94,
        "raw": "\"./external\"",
        "value": "./external"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 60,
          "end": 74,
          "imported": {
            "type": "Identifier",
            "start": 60,
            "end": 63,
            "decorators": [],
            "name": "Baz",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 67,
            "end": 74,
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 130,
      "end": 177,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 148,
        "end": 177,
        "body": [
          {
            "type": "StaticBlock",
            "start": 154,
            "end": 175,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 163,
                "end": 173,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 163,
                  "end": 172,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 163,
                    "end": 170,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 163,
                      "end": 168
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 170,
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 137,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 146,
        "end": 147,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 158,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "ImportDeclaration",
      "start": 51,
      "end": 93,
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 80,
        "end": 92,
        "raw": "\"./external\"",
        "value": "./external"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 65,
          "end": 72,
          "imported": {
            "type": "Identifier",
            "start": 65,
            "end": 72,
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 65,
            "end": 72,
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 110,
      "end": 157,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 128,
        "end": 157,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 134,
            "end": 155,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 141,
              "end": 142,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 145,
              "end": 154,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 145,
                "end": 152,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 145,
                  "end": 150
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 152,
                  "decorators": [],
                  "name": "w",
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 117,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 126,
        "end": 127,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 158,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "ImportDeclaration",
      "start": 51,
      "end": 93,
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 80,
        "end": 92,
        "raw": "\"./external\"",
        "value": "./external"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 65,
          "end": 72,
          "imported": {
            "type": "Identifier",
            "start": 65,
            "end": 72,
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 65,
            "end": 72,
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 110,
      "end": 157,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 128,
        "end": 157,
        "body": [
          {
            "type": "StaticBlock",
            "start": 134,
            "end": 155,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 143,
                "end": 153,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 143,
                  "end": 152,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 143,
                    "end": 150,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 143,
                      "end": 148
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 149,
                      "end": 150,
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 117,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 126,
        "end": 127,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 167,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "ImportDeclaration",
      "start": 51,
      "end": 84,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 71,
        "end": 83,
        "raw": "\"./external\"",
        "value": "./external"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 58,
          "end": 65,
          "local": {
            "type": "Identifier",
            "start": 58,
            "end": 65,
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 119,
      "end": 166,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 137,
        "end": 166,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 143,
            "end": 164,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 154,
              "end": 163,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 154,
                "end": 161,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 154,
                  "end": 159
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 161,
                  "decorators": [],
                  "name": "w",
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 126,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 135,
        "end": 136,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 167,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "ImportDeclaration",
      "start": 51,
      "end": 84,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 71,
        "end": 83,
        "raw": "\"./external\"",
        "value": "./external"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 58,
          "end": 65,
          "local": {
            "type": "Identifier",
            "start": 58,
            "end": 65,
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 119,
      "end": 166,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 137,
        "end": 166,
        "body": [
          {
            "type": "StaticBlock",
            "start": 143,
            "end": 164,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 152,
                "end": 162,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 152,
                  "end": 161,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 152,
                    "end": 159,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 152,
                      "end": 157
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 158,
                      "end": 159,
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 126,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 135,
        "end": 136,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 154,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "ImportDeclaration",
      "start": 51,
      "end": 89,
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 76,
        "end": 88,
        "raw": "\"./external\"",
        "value": "./external"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 63,
          "end": 70,
          "local": {
            "type": "Identifier",
            "start": 63,
            "end": 70,
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 106,
      "end": 153,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 124,
        "end": 153,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 130,
            "end": 151,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 141,
              "end": 150,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 141,
                "end": 148,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 141,
                  "end": 146
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "decorators": [],
                  "name": "w",
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 122,
        "end": 123,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 154,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "ImportDeclaration",
      "start": 51,
      "end": 89,
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 76,
        "end": 88,
        "raw": "\"./external\"",
        "value": "./external"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 63,
          "end": 70,
          "local": {
            "type": "Identifier",
            "start": 63,
            "end": 70,
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 106,
      "end": 153,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 124,
        "end": 153,
        "body": [
          {
            "type": "StaticBlock",
            "start": 130,
            "end": 151,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 139,
                "end": 149,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 139,
                  "end": 148,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 139,
                    "end": 146,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 139,
                      "end": 144
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 145,
                      "end": 146,
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 122,
        "end": 123,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 139,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "TSTypeAliasDeclaration",
      "start": 51,
      "end": 74,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 63,
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnknownKeyword",
        "start": 66,
        "end": 73
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 91,
      "end": 138,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 109,
        "end": 138,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 115,
            "end": 136,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 126,
              "end": 135,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 126,
                "end": 133,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 126,
                  "end": 131
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 133,
                  "decorators": [],
                  "name": "w",
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 98,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 107,
        "end": 108,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 139,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "TSTypeAliasDeclaration",
      "start": 51,
      "end": 74,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 63,
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnknownKeyword",
        "start": 66,
        "end": 73
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 91,
      "end": 138,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 109,
        "end": 138,
        "body": [
          {
            "type": "StaticBlock",
            "start": 115,
            "end": 136,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 124,
                "end": 134,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 124,
                  "end": 133,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 124,
                    "end": 131,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 124,
                      "end": 129
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 131,
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 98,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 107,
        "end": 108,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 137,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "TSInterfaceDeclaration",
      "start": 51,
      "end": 71,
      "body": {
        "type": "TSInterfaceBody",
        "start": 69,
        "end": 71,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 68,
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 71,
      "end": 72
    },
    {
      "type": "ClassDeclaration",
      "start": 89,
      "end": 136,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 107,
        "end": 136,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 113,
            "end": 134,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 124,
              "end": 133,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 124,
                "end": 131,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 124,
                  "end": 129
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 131,
                  "decorators": [],
                  "name": "w",
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 96,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 105,
        "end": 106,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 137,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "TSInterfaceDeclaration",
      "start": 51,
      "end": 71,
      "body": {
        "type": "TSInterfaceBody",
        "start": 69,
        "end": 71,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 68,
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 71,
      "end": 72
    },
    {
      "type": "ClassDeclaration",
      "start": 89,
      "end": 136,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 107,
        "end": 136,
        "body": [
          {
            "type": "StaticBlock",
            "start": 113,
            "end": 134,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 122,
                "end": 132,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 122,
                  "end": 131,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 122,
                    "end": 129,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 122,
                      "end": 127
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 129,
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 96,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 105,
        "end": 106,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 164,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "TSModuleDeclaration",
      "start": 51,
      "end": 98,
      "body": {
        "type": "TSModuleBlock",
        "start": 77,
        "end": 98,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 79,
            "end": 96,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 88,
              "end": 95
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 76,
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "EmptyStatement",
      "start": 98,
      "end": 99
    },
    {
      "type": "ClassDeclaration",
      "start": 116,
      "end": 163,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 134,
        "end": 163,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 140,
            "end": 161,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 148,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 151,
              "end": 160,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 151,
                "end": 158,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 151,
                  "end": 156
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 158,
                  "decorators": [],
                  "name": "w",
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 123,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 132,
        "end": 133,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 164,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "TSModuleDeclaration",
      "start": 51,
      "end": 98,
      "body": {
        "type": "TSModuleBlock",
        "start": 77,
        "end": 98,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 79,
            "end": 96,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 88,
              "end": 95
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 76,
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "EmptyStatement",
      "start": 98,
      "end": 99
    },
    {
      "type": "ClassDeclaration",
      "start": 116,
      "end": 163,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 134,
        "end": 163,
        "body": [
          {
            "type": "StaticBlock",
            "start": 140,
            "end": 161,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 149,
                "end": 159,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 149,
                  "end": 158,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 149,
                    "end": 156,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 149,
                      "end": 154
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 155,
                      "end": 156,
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 123,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 132,
        "end": 133,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 135,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "ExpressionStatement",
      "start": 51,
      "end": 70,
      "directive": null,
      "expression": {
        "type": "ClassExpression",
        "start": 52,
        "end": 68,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 66,
          "end": 68,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 58,
          "end": 65,
          "decorators": [],
          "name": "Reflect",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 87,
      "end": 134,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 105,
        "end": 134,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 111,
            "end": 132,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 119,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 122,
              "end": 131,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 122,
                "end": 129,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 122,
                  "end": 127
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 129,
                  "decorators": [],
                  "name": "w",
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 94,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 103,
        "end": 104,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 135,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "ExpressionStatement",
      "start": 51,
      "end": 70,
      "directive": null,
      "expression": {
        "type": "ClassExpression",
        "start": 52,
        "end": 68,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 66,
          "end": 68,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 58,
          "end": 65,
          "decorators": [],
          "name": "Reflect",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 87,
      "end": 134,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 105,
        "end": 134,
        "body": [
          {
            "type": "StaticBlock",
            "start": 111,
            "end": 132,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 120,
                "end": 130,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 120,
                  "end": 129,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 120,
                    "end": 127,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 120,
                      "end": 125
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 126,
                      "end": 127,
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 94,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 103,
        "end": 104,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 197,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "ExpressionStatement",
      "start": 51,
      "end": 196,
      "directive": null,
      "expression": {
        "type": "ClassExpression",
        "start": 52,
        "end": 194,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 66,
          "end": 194,
          "body": [
            {
              "type": "StaticBlock",
              "start": 106,
              "end": 192,
              "body": [
                {
                  "type": "ClassDeclaration",
                  "start": 123,
                  "end": 186,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 141,
                    "end": 186,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 155,
                        "end": 176,
                        "accessibility": null,
                        "computed": false,
                        "declare": false,
                        "decorators": [],
                        "definite": false,
                        "key": {
                          "type": "Identifier",
                          "start": 162,
                          "end": 163,
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "override": false,
                        "readonly": false,
                        "static": true,
                        "typeAnnotation": null,
                        "value": {
                          "type": "CallExpression",
                          "start": 166,
                          "end": 175,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 166,
                            "end": 173,
                            "computed": false,
                            "object": {
                              "type": "Super",
                              "start": 166,
                              "end": 171
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 172,
                              "end": 173,
                              "decorators": [],
                              "name": "w",
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
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 130,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "implements": [],
                  "superClass": {
                    "type": "Identifier",
                    "start": 139,
                    "end": 140,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "superTypeArguments": null,
                  "typeParameters": null
                }
              ]
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 58,
          "end": 65,
          "decorators": [],
          "name": "Reflect",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 197,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "ExpressionStatement",
      "start": 51,
      "end": 196,
      "directive": null,
      "expression": {
        "type": "ClassExpression",
        "start": 52,
        "end": 194,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 66,
          "end": 194,
          "body": [
            {
              "type": "StaticBlock",
              "start": 106,
              "end": 192,
              "body": [
                {
                  "type": "ClassDeclaration",
                  "start": 123,
                  "end": 186,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 141,
                    "end": 186,
                    "body": [
                      {
                        "type": "StaticBlock",
                        "start": 155,
                        "end": 176,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 164,
                            "end": 174,
                            "directive": null,
                            "expression": {
                              "type": "CallExpression",
                              "start": 164,
                              "end": 173,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 164,
                                "end": 171,
                                "computed": false,
                                "object": {
                                  "type": "Super",
                                  "start": 164,
                                  "end": 169
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 170,
                                  "end": 171,
                                  "decorators": [],
                                  "name": "w",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            }
                          }
                        ]
                      }
                    ]
                  },
                  "declare": false,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 130,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "implements": [],
                  "superClass": {
                    "type": "Identifier",
                    "start": 139,
                    "end": 140,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "superTypeArguments": null,
                  "typeParameters": null
                }
              ]
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 58,
          "end": 65,
          "decorators": [],
          "name": "Reflect",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "ExpressionStatement",
      "start": 51,
      "end": 75,
      "directive": null,
      "expression": {
        "type": "FunctionExpression",
        "start": 52,
        "end": 73,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 71,
          "end": 73,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 61,
          "end": 68,
          "decorators": [],
          "name": "Reflect",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 92,
      "end": 139,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 110,
        "end": 139,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 116,
            "end": 137,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 127,
              "end": 136,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 127,
                "end": 134,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 127,
                  "end": 132
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 134,
                  "decorators": [],
                  "name": "w",
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 99,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "ExpressionStatement",
      "start": 51,
      "end": 75,
      "directive": null,
      "expression": {
        "type": "FunctionExpression",
        "start": 52,
        "end": 73,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 71,
          "end": 73,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 61,
          "end": 68,
          "decorators": [],
          "name": "Reflect",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 92,
      "end": 139,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 110,
        "end": 139,
        "body": [
          {
            "type": "StaticBlock",
            "start": 116,
            "end": 137,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 125,
                "end": 135,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 125,
                  "end": 134,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 125,
                    "end": 132,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 125,
                      "end": 130
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 132,
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 99,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 171,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "ExpressionStatement",
      "start": 51,
      "end": 170,
      "directive": null,
      "expression": {
        "type": "FunctionExpression",
        "start": 52,
        "end": 168,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 71,
          "end": 168,
          "body": [
            {
              "type": "ClassDeclaration",
              "start": 111,
              "end": 166,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 129,
                "end": 166,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 139,
                    "end": 160,
                    "accessibility": null,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 147,
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "typeAnnotation": null,
                    "value": {
                      "type": "CallExpression",
                      "start": 150,
                      "end": 159,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 150,
                        "end": 157,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 150,
                          "end": 155
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 156,
                          "end": 157,
                          "decorators": [],
                          "name": "w",
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "typeParameters": null
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 61,
          "end": 68,
          "decorators": [],
          "name": "Reflect",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 170,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
      "type": "ExpressionStatement",
      "start": 51,
      "end": 170,
      "directive": null,
      "expression": {
        "type": "FunctionExpression",
        "start": 52,
        "end": 168,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 71,
          "end": 168,
          "body": [
            {
              "type": "ClassDeclaration",
              "start": 111,
              "end": 166,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 129,
                "end": 166,
                "body": [
                  {
                    "type": "StaticBlock",
                    "start": 139,
                    "end": 160,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 148,
                        "end": 158,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 148,
                          "end": 157,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 148,
                            "end": 155,
                            "computed": false,
                            "object": {
                              "type": "Super",
                              "start": 148,
                              "end": 153
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 154,
                              "end": 155,
                              "decorators": [],
                              "name": "w",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ]
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "typeParameters": null
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 61,
          "end": 68,
          "decorators": [],
          "name": "Reflect",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
