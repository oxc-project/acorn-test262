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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 23,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 20,
          "name": "Reflect",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 21,
          "end": 23,
          "body": []
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
      "start": 24,
      "end": 47,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 31,
        "end": 47,
        "id": {
          "type": "Identifier",
          "start": 41,
          "end": 44,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 45,
          "end": 47,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 48,
      "end": 98,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 55,
        "end": 98,
        "id": {
          "type": "Identifier",
          "start": 73,
          "end": 76,
          "name": "Bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 77,
          "end": 98,
          "body": [
            {
              "type": "TSTypeAliasDeclaration",
              "start": 79,
              "end": 96,
              "id": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "name": "_",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 88,
                "end": 95
              },
              "declare": false
            }
          ]
        },
        "kind": "namespace",
        "declare": true,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 99,
      "end": 123,
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 106,
        "end": 123,
        "id": {
          "type": "Identifier",
          "start": 117,
          "end": 120,
          "name": "Baz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "members": [],
        "const": true,
        "declare": false,
        "body": {
          "type": "TSEnumBody",
          "start": 121,
          "end": 123,
          "members": []
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 124,
      "end": 147,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 139,
        "end": 147,
        "id": null,
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 145,
          "end": 147,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 2424,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 67,
        "end": 68,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 69,
        "end": 2424,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 75,
            "end": 1364,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrayExpression",
              "start": 86,
              "end": 1363,
              "elements": [
                {
                  "type": "CallExpression",
                  "start": 96,
                  "end": 199,
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 97,
                    "end": 196,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                              "id": {
                                "type": "Identifier",
                                "start": 121,
                                "end": 128,
                                "name": "Reflect",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": null,
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 176,
                          "end": 186,
                          "expression": {
                            "type": "CallExpression",
                            "start": 176,
                            "end": 185,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 176,
                              "end": 183,
                              "object": {
                                "type": "Super",
                                "start": 176,
                                "end": 181
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 182,
                                "end": 183,
                                "name": "w",
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
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                {
                  "type": "CallExpression",
                  "start": 209,
                  "end": 336,
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 210,
                    "end": 333,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                              "id": {
                                "type": "ObjectPattern",
                                "start": 234,
                                "end": 245,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 236,
                                    "end": 243,
                                    "method": false,
                                    "shorthand": true,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 236,
                                      "end": 243,
                                      "name": "Reflect",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "value": {
                                      "type": "Identifier",
                                      "start": 236,
                                      "end": 243,
                                      "name": "Reflect",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "kind": "init",
                                    "optional": false
                                  }
                                ],
                                "decorators": [],
                                "optional": false,
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
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 250,
                                      "end": 257,
                                      "name": "Reflect",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "start": 259,
                                      "end": 263,
                                      "value": null,
                                      "raw": "null"
                                    },
                                    "kind": "init",
                                    "optional": false
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 313,
                          "end": 323,
                          "expression": {
                            "type": "CallExpression",
                            "start": 313,
                            "end": 322,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 313,
                              "end": 320,
                              "object": {
                                "type": "Super",
                                "start": 313,
                                "end": 318
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 319,
                                "end": 320,
                                "name": "w",
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
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                {
                  "type": "CallExpression",
                  "start": 346,
                  "end": 460,
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 347,
                    "end": 457,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                              "id": {
                                "type": "ArrayPattern",
                                "start": 371,
                                "end": 380,
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "start": 372,
                                    "end": 379,
                                    "name": "Reflect",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "decorators": [],
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
                                    "value": null,
                                    "raw": "null"
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 437,
                          "end": 447,
                          "expression": {
                            "type": "CallExpression",
                            "start": 437,
                            "end": 446,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 437,
                              "end": 444,
                              "object": {
                                "type": "Super",
                                "start": 437,
                                "end": 442
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 443,
                                "end": 444,
                                "name": "w",
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
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                {
                  "type": "CallExpression",
                  "start": 470,
                  "end": 577,
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 471,
                    "end": 574,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 477,
                      "end": 574,
                      "body": [
                        {
                          "type": "ClassDeclaration",
                          "start": 491,
                          "end": 507,
                          "id": {
                            "type": "Identifier",
                            "start": 497,
                            "end": 504,
                            "name": "Reflect",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "superClass": null,
                          "body": {
                            "type": "ClassBody",
                            "start": 505,
                            "end": 507,
                            "body": []
                          },
                          "decorators": [],
                          "typeParameters": null,
                          "implements": [],
                          "abstract": false,
                          "declare": false,
                          "superTypeArguments": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 554,
                          "end": 564,
                          "expression": {
                            "type": "CallExpression",
                            "start": 554,
                            "end": 563,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 554,
                              "end": 561,
                              "object": {
                                "type": "Super",
                                "start": 554,
                                "end": 559
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 560,
                                "end": 561,
                                "name": "w",
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
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                {
                  "type": "CallExpression",
                  "start": 587,
                  "end": 699,
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 588,
                    "end": 696,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 594,
                      "end": 696,
                      "body": [
                        {
                          "type": "FunctionDeclaration",
                          "start": 608,
                          "end": 629,
                          "id": {
                            "type": "Identifier",
                            "start": 617,
                            "end": 624,
                            "name": "Reflect",
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
                            "start": 627,
                            "end": 629,
                            "body": []
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 676,
                          "end": 686,
                          "expression": {
                            "type": "CallExpression",
                            "start": 676,
                            "end": 685,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 676,
                              "end": 683,
                              "object": {
                                "type": "Super",
                                "start": 676,
                                "end": 681
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 682,
                                "end": 683,
                                "name": "w",
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
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                {
                  "type": "CallExpression",
                  "start": 709,
                  "end": 815,
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 710,
                    "end": 812,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 716,
                      "end": 812,
                      "body": [
                        {
                          "type": "TSEnumDeclaration",
                          "start": 730,
                          "end": 745,
                          "id": {
                            "type": "Identifier",
                            "start": 735,
                            "end": 742,
                            "name": "Reflect",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "members": [],
                          "const": false,
                          "declare": false,
                          "body": {
                            "type": "TSEnumBody",
                            "start": 743,
                            "end": 745,
                            "members": []
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 792,
                          "end": 802,
                          "expression": {
                            "type": "CallExpression",
                            "start": 792,
                            "end": 801,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 792,
                              "end": 799,
                              "object": {
                                "type": "Super",
                                "start": 792,
                                "end": 797
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 798,
                                "end": 799,
                                "name": "w",
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
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                {
                  "type": "CallExpression",
                  "start": 825,
                  "end": 937,
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 826,
                    "end": 934,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 832,
                      "end": 934,
                      "body": [
                        {
                          "type": "TSEnumDeclaration",
                          "start": 846,
                          "end": 867,
                          "id": {
                            "type": "Identifier",
                            "start": 857,
                            "end": 864,
                            "name": "Reflect",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "members": [],
                          "const": true,
                          "declare": false,
                          "body": {
                            "type": "TSEnumBody",
                            "start": 865,
                            "end": 867,
                            "members": []
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 914,
                          "end": 924,
                          "expression": {
                            "type": "CallExpression",
                            "start": 914,
                            "end": 923,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 914,
                              "end": 921,
                              "object": {
                                "type": "Super",
                                "start": 914,
                                "end": 919
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 920,
                                "end": 921,
                                "name": "w",
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
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                {
                  "type": "CallExpression",
                  "start": 947,
                  "end": 1043,
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 948,
                    "end": 1040,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 954,
                      "end": 1040,
                      "body": [
                        {
                          "type": "TSTypeAliasDeclaration",
                          "start": 968,
                          "end": 991,
                          "id": {
                            "type": "Identifier",
                            "start": 973,
                            "end": 980,
                            "name": "Reflect",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeParameters": null,
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 983,
                            "end": 990
                          },
                          "declare": false
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1020,
                          "end": 1030,
                          "expression": {
                            "type": "CallExpression",
                            "start": 1020,
                            "end": 1029,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1020,
                              "end": 1027,
                              "object": {
                                "type": "Super",
                                "start": 1020,
                                "end": 1025
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1026,
                                "end": 1027,
                                "name": "w",
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
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                {
                  "type": "CallExpression",
                  "start": 1053,
                  "end": 1147,
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 1054,
                    "end": 1144,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1060,
                      "end": 1144,
                      "body": [
                        {
                          "type": "TSInterfaceDeclaration",
                          "start": 1074,
                          "end": 1094,
                          "id": {
                            "type": "Identifier",
                            "start": 1084,
                            "end": 1091,
                            "name": "Reflect",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "extends": [],
                          "typeParameters": null,
                          "body": {
                            "type": "TSInterfaceBody",
                            "start": 1092,
                            "end": 1094,
                            "body": []
                          },
                          "declare": false
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
                          "expression": {
                            "type": "CallExpression",
                            "start": 1124,
                            "end": 1133,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1124,
                              "end": 1131,
                              "object": {
                                "type": "Super",
                                "start": 1124,
                                "end": 1129
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1130,
                                "end": 1131,
                                "name": "w",
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
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                {
                  "type": "CallExpression",
                  "start": 1157,
                  "end": 1249,
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 1158,
                    "end": 1246,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1164,
                      "end": 1246,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1178,
                          "end": 1197,
                          "expression": {
                            "type": "ClassExpression",
                            "start": 1179,
                            "end": 1195,
                            "id": {
                              "type": "Identifier",
                              "start": 1185,
                              "end": 1192,
                              "name": "Reflect",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "superClass": null,
                            "body": {
                              "type": "ClassBody",
                              "start": 1193,
                              "end": 1195,
                              "body": []
                            },
                            "decorators": [],
                            "typeParameters": null,
                            "implements": [],
                            "abstract": false,
                            "declare": false,
                            "superTypeArguments": null
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1226,
                          "end": 1236,
                          "expression": {
                            "type": "CallExpression",
                            "start": 1226,
                            "end": 1235,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1226,
                              "end": 1233,
                              "object": {
                                "type": "Super",
                                "start": 1226,
                                "end": 1231
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1232,
                                "end": 1233,
                                "name": "w",
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
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                {
                  "type": "CallExpression",
                  "start": 1259,
                  "end": 1356,
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 1260,
                    "end": 1353,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1266,
                      "end": 1353,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1280,
                          "end": 1304,
                          "expression": {
                            "type": "FunctionExpression",
                            "start": 1281,
                            "end": 1302,
                            "id": {
                              "type": "Identifier",
                              "start": 1290,
                              "end": 1297,
                              "name": "Reflect",
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
                              "start": 1300,
                              "end": 1302,
                              "body": []
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1333,
                          "end": 1343,
                          "expression": {
                            "type": "CallExpression",
                            "start": 1333,
                            "end": 1342,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1333,
                              "end": 1340,
                              "object": {
                                "type": "Super",
                                "start": 1333,
                                "end": 1338
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1339,
                                "end": 1340,
                                "name": "w",
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
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                }
              ]
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
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
                    "id": {
                      "type": "ObjectPattern",
                      "start": 1391,
                      "end": 1402,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1393,
                          "end": 1400,
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1393,
                            "end": 1400,
                            "name": "Reflect",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1393,
                            "end": 1400,
                            "name": "Reflect",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1407,
                            "end": 1414,
                            "name": "Reflect",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1416,
                            "end": 1420,
                            "value": null,
                            "raw": "null"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              },
              {
                "type": "ExpressionStatement",
                "start": 1466,
                "end": 1476,
                "expression": {
                  "type": "CallExpression",
                  "start": 1466,
                  "end": 1475,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1466,
                    "end": 1473,
                    "object": {
                      "type": "Super",
                      "start": 1466,
                      "end": 1471
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1472,
                      "end": 1473,
                      "name": "w",
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
                    "id": {
                      "type": "ArrayPattern",
                      "start": 1509,
                      "end": 1518,
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 1510,
                          "end": 1517,
                          "name": "Reflect",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "decorators": [],
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
                          "value": null,
                          "raw": "null"
                        }
                      ]
                    },
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              },
              {
                "type": "ExpressionStatement",
                "start": 1571,
                "end": 1581,
                "expression": {
                  "type": "CallExpression",
                  "start": 1571,
                  "end": 1580,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1571,
                    "end": 1578,
                    "object": {
                      "type": "Super",
                      "start": 1571,
                      "end": 1576
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1577,
                      "end": 1578,
                      "name": "w",
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
                    "id": {
                      "type": "Identifier",
                      "start": 1614,
                      "end": 1621,
                      "name": "Reflect",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              },
              {
                "type": "ExpressionStatement",
                "start": 1665,
                "end": 1675,
                "expression": {
                  "type": "CallExpression",
                  "start": 1665,
                  "end": 1674,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1665,
                    "end": 1672,
                    "object": {
                      "type": "Super",
                      "start": 1665,
                      "end": 1670
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1671,
                      "end": 1672,
                      "name": "w",
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
                "id": {
                  "type": "Identifier",
                  "start": 1710,
                  "end": 1717,
                  "name": "Reflect",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 1718,
                  "end": 1720,
                  "body": []
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              {
                "type": "ExpressionStatement",
                "start": 1763,
                "end": 1773,
                "expression": {
                  "type": "CallExpression",
                  "start": 1763,
                  "end": 1772,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1763,
                    "end": 1770,
                    "object": {
                      "type": "Super",
                      "start": 1763,
                      "end": 1768
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1769,
                      "end": 1770,
                      "name": "w",
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
                "id": {
                  "type": "Identifier",
                  "start": 1811,
                  "end": 1818,
                  "name": "Reflect",
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
                  "start": 1821,
                  "end": 1823,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ExpressionStatement",
                "start": 1866,
                "end": 1876,
                "expression": {
                  "type": "CallExpression",
                  "start": 1866,
                  "end": 1875,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1866,
                    "end": 1873,
                    "object": {
                      "type": "Super",
                      "start": 1866,
                      "end": 1871
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1872,
                      "end": 1873,
                      "name": "w",
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
                "id": {
                  "type": "Identifier",
                  "start": 1910,
                  "end": 1917,
                  "name": "Reflect",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "members": [],
                "const": false,
                "declare": false,
                "body": {
                  "type": "TSEnumBody",
                  "start": 1918,
                  "end": 1920,
                  "members": []
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 1963,
                "end": 1973,
                "expression": {
                  "type": "CallExpression",
                  "start": 1963,
                  "end": 1972,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1963,
                    "end": 1970,
                    "object": {
                      "type": "Super",
                      "start": 1963,
                      "end": 1968
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1969,
                      "end": 1970,
                      "name": "w",
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
                "id": {
                  "type": "Identifier",
                  "start": 2013,
                  "end": 2020,
                  "name": "Reflect",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "members": [],
                "const": true,
                "declare": false,
                "body": {
                  "type": "TSEnumBody",
                  "start": 2021,
                  "end": 2023,
                  "members": []
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 2066,
                "end": 2076,
                "expression": {
                  "type": "CallExpression",
                  "start": 2066,
                  "end": 2075,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2066,
                    "end": 2073,
                    "object": {
                      "type": "Super",
                      "start": 2066,
                      "end": 2071
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2072,
                      "end": 2073,
                      "name": "w",
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
                "id": {
                  "type": "Identifier",
                  "start": 2110,
                  "end": 2117,
                  "name": "Reflect",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 2120,
                  "end": 2127
                },
                "declare": false
              },
              {
                "type": "ExpressionStatement",
                "start": 2153,
                "end": 2163,
                "expression": {
                  "type": "CallExpression",
                  "start": 2153,
                  "end": 2162,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2153,
                    "end": 2160,
                    "object": {
                      "type": "Super",
                      "start": 2153,
                      "end": 2158
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2159,
                      "end": 2160,
                      "name": "w",
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
                "id": {
                  "type": "Identifier",
                  "start": 2202,
                  "end": 2209,
                  "name": "Reflect",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [],
                "typeParameters": null,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 2210,
                  "end": 2212,
                  "body": []
                },
                "declare": false
              },
              {
                "type": "ExpressionStatement",
                "start": 2237,
                "end": 2247,
                "expression": {
                  "type": "CallExpression",
                  "start": 2237,
                  "end": 2246,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2237,
                    "end": 2244,
                    "object": {
                      "type": "Super",
                      "start": 2237,
                      "end": 2242
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2243,
                      "end": 2244,
                      "name": "w",
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
                "expression": {
                  "type": "ClassExpression",
                  "start": 2277,
                  "end": 2293,
                  "id": {
                    "type": "Identifier",
                    "start": 2283,
                    "end": 2290,
                    "name": "Reflect",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 2291,
                    "end": 2293,
                    "body": []
                  },
                  "decorators": [],
                  "typeParameters": null,
                  "implements": [],
                  "abstract": false,
                  "declare": false,
                  "superTypeArguments": null
                },
                "directive": null
              },
              {
                "type": "ExpressionStatement",
                "start": 2319,
                "end": 2329,
                "expression": {
                  "type": "CallExpression",
                  "start": 2319,
                  "end": 2328,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2319,
                    "end": 2326,
                    "object": {
                      "type": "Super",
                      "start": 2319,
                      "end": 2324
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2325,
                      "end": 2326,
                      "name": "w",
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
                "expression": {
                  "type": "FunctionExpression",
                  "start": 2359,
                  "end": 2380,
                  "id": {
                    "type": "Identifier",
                    "start": 2368,
                    "end": 2375,
                    "name": "Reflect",
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
                    "start": 2378,
                    "end": 2380,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "directive": null
              },
              {
                "type": "ExpressionStatement",
                "start": 2406,
                "end": 2416,
                "expression": {
                  "type": "CallExpression",
                  "start": 2406,
                  "end": 2415,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2406,
                    "end": 2413,
                    "object": {
                      "type": "Super",
                      "start": 2406,
                      "end": 2411
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2412,
                      "end": 2413,
                      "name": "w",
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
            ]
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 62,
            "name": "Reflect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 65,
            "end": 69,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 105,
      "end": 152,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 112,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 121,
        "end": 122,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 123,
        "end": 152,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 129,
            "end": 150,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 137,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 140,
              "end": 149,
              "callee": {
                "type": "MemberExpression",
                "start": 140,
                "end": 147,
                "object": {
                  "type": "Super",
                  "start": 140,
                  "end": 145
                },
                "property": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 147,
                  "name": "w",
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
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
          "id": {
            "type": "ObjectPattern",
            "start": 55,
            "end": 66,
            "properties": [
              {
                "type": "Property",
                "start": 57,
                "end": 64,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 64,
                  "name": "Reflect",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 64,
                  "name": "Reflect",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 78,
                  "name": "Reflect",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 80,
                  "end": 84,
                  "value": null,
                  "raw": "null"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 122,
      "end": 169,
      "id": {
        "type": "Identifier",
        "start": 128,
        "end": 129,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 138,
        "end": 139,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 140,
        "end": 169,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 146,
            "end": 167,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 154,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 157,
              "end": 166,
              "callee": {
                "type": "MemberExpression",
                "start": 157,
                "end": 164,
                "object": {
                  "type": "Super",
                  "start": 157,
                  "end": 162
                },
                "property": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 164,
                  "name": "w",
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
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
          "id": {
            "type": "ArrayPattern",
            "start": 55,
            "end": 64,
            "elements": [
              {
                "type": "Identifier",
                "start": 56,
                "end": 63,
                "name": "Reflect",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
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
                "value": null,
                "raw": "null"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 109,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 116,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 125,
        "end": 126,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 127,
        "end": 156,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 133,
            "end": 154,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 144,
              "end": 153,
              "callee": {
                "type": "MemberExpression",
                "start": 144,
                "end": 151,
                "object": {
                  "type": "Super",
                  "start": 144,
                  "end": 149
                },
                "property": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 151,
                  "name": "w",
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 62,
            "name": "Reflect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 65,
            "end": 69,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 105,
      "end": 152,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 112,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 121,
        "end": 122,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "expression": {
                  "type": "CallExpression",
                  "start": 138,
                  "end": 147,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 138,
                    "end": 145,
                    "object": {
                      "type": "Super",
                      "start": 138,
                      "end": 143
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 144,
                      "end": 145,
                      "name": "w",
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
            ]
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
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
          "id": {
            "type": "ObjectPattern",
            "start": 55,
            "end": 66,
            "properties": [
              {
                "type": "Property",
                "start": 57,
                "end": 64,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 64,
                  "name": "Reflect",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 64,
                  "name": "Reflect",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 78,
                  "name": "Reflect",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 80,
                  "end": 84,
                  "value": null,
                  "raw": "null"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 122,
      "end": 169,
      "id": {
        "type": "Identifier",
        "start": 128,
        "end": 129,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 138,
        "end": 139,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "expression": {
                  "type": "CallExpression",
                  "start": 155,
                  "end": 164,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 155,
                    "end": 162,
                    "object": {
                      "type": "Super",
                      "start": 155,
                      "end": 160
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 161,
                      "end": 162,
                      "name": "w",
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
            ]
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
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
          "id": {
            "type": "ArrayPattern",
            "start": 55,
            "end": 64,
            "elements": [
              {
                "type": "Identifier",
                "start": 56,
                "end": 63,
                "name": "Reflect",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
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
                "value": null,
                "raw": "null"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 109,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 116,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 125,
        "end": 126,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "expression": {
                  "type": "CallExpression",
                  "start": 142,
                  "end": 151,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 142,
                    "end": 149,
                    "object": {
                      "type": "Super",
                      "start": 142,
                      "end": 147
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 149,
                      "name": "w",
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
            ]
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 64,
        "name": "Reflect",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 65,
        "end": 67,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 102,
      "end": 149,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 118,
        "end": 119,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 149,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 126,
            "end": 147,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 137,
              "end": 146,
              "callee": {
                "type": "MemberExpression",
                "start": 137,
                "end": 144,
                "object": {
                  "type": "Super",
                  "start": 137,
                  "end": 142
                },
                "property": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 144,
                  "name": "w",
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 64,
        "name": "Reflect",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 65,
        "end": 67,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 102,
      "end": 149,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 118,
        "end": 119,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "expression": {
                  "type": "CallExpression",
                  "start": 135,
                  "end": 144,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 135,
                    "end": 142,
                    "object": {
                      "type": "Super",
                      "start": 135,
                      "end": 140
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 142,
                      "name": "w",
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
            ]
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 51,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 67,
        "name": "Reflect",
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
        "start": 70,
        "end": 72,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 107,
      "end": 154,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 114,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 123,
        "end": 124,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 125,
        "end": 154,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 131,
            "end": 152,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 142,
              "end": 151,
              "callee": {
                "type": "MemberExpression",
                "start": 142,
                "end": 149,
                "object": {
                  "type": "Super",
                  "start": 142,
                  "end": 147
                },
                "property": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 149,
                  "name": "w",
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 51,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 67,
        "name": "Reflect",
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
        "start": 70,
        "end": 72,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 107,
      "end": 154,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 114,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 123,
        "end": 124,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "expression": {
                  "type": "CallExpression",
                  "start": 140,
                  "end": 149,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 140,
                    "end": 147,
                    "object": {
                      "type": "Super",
                      "start": 140,
                      "end": 145
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 147,
                      "name": "w",
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
            ]
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 51,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 68,
        "name": "Reflect",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 69,
        "end": 71,
        "body": []
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 106,
      "end": 153,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 122,
        "end": 123,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 124,
        "end": 153,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 130,
            "end": 151,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 141,
              "end": 150,
              "callee": {
                "type": "MemberExpression",
                "start": 141,
                "end": 148,
                "object": {
                  "type": "Super",
                  "start": 141,
                  "end": 146
                },
                "property": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "name": "w",
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 51,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 68,
        "name": "Reflect",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 69,
        "end": 71,
        "body": []
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 106,
      "end": 153,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 122,
        "end": 123,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "expression": {
                  "type": "CallExpression",
                  "start": 139,
                  "end": 148,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 139,
                    "end": 146,
                    "object": {
                      "type": "Super",
                      "start": 139,
                      "end": 144
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 145,
                      "end": 146,
                      "name": "w",
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
            ]
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 51,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 63,
        "name": "Reflect",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 64,
        "end": 66,
        "members": []
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 101,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 108,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 117,
        "end": 118,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 119,
        "end": 148,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 125,
            "end": 146,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 136,
              "end": 145,
              "callee": {
                "type": "MemberExpression",
                "start": 136,
                "end": 143,
                "object": {
                  "type": "Super",
                  "start": 136,
                  "end": 141
                },
                "property": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 143,
                  "name": "w",
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 51,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 63,
        "name": "Reflect",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 64,
        "end": 66,
        "members": []
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 101,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 108,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 117,
        "end": 118,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "expression": {
                  "type": "CallExpression",
                  "start": 134,
                  "end": 143,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 134,
                    "end": 141,
                    "object": {
                      "type": "Super",
                      "start": 134,
                      "end": 139
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 140,
                      "end": 141,
                      "name": "w",
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
            ]
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 51,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 69,
        "name": "Reflect",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [],
      "const": true,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 70,
        "end": 72,
        "members": []
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 107,
      "end": 154,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 114,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 123,
        "end": 124,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 125,
        "end": 154,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 131,
            "end": 152,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 142,
              "end": 151,
              "callee": {
                "type": "MemberExpression",
                "start": 142,
                "end": 149,
                "object": {
                  "type": "Super",
                  "start": 142,
                  "end": 147
                },
                "property": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 149,
                  "name": "w",
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 51,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 69,
        "name": "Reflect",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [],
      "const": true,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 70,
        "end": 72,
        "members": []
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 107,
      "end": 154,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 114,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 123,
        "end": 124,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "expression": {
                  "type": "CallExpression",
                  "start": 140,
                  "end": 149,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 140,
                    "end": 147,
                    "object": {
                      "type": "Super",
                      "start": 140,
                      "end": 145
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 147,
                      "name": "w",
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
            ]
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ImportDeclaration",
      "start": 51,
      "end": 89,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 58,
          "end": 70,
          "local": {
            "type": "Identifier",
            "start": 63,
            "end": 70,
            "name": "Reflect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 76,
        "end": 88,
        "value": "./external",
        "raw": "\"./external\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 124,
      "end": 171,
      "id": {
        "type": "Identifier",
        "start": 130,
        "end": 131,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 140,
        "end": 141,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 142,
        "end": 171,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 148,
            "end": 169,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 159,
              "end": 168,
              "callee": {
                "type": "MemberExpression",
                "start": 159,
                "end": 166,
                "object": {
                  "type": "Super",
                  "start": 159,
                  "end": 164
                },
                "property": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 166,
                  "name": "w",
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ImportDeclaration",
      "start": 51,
      "end": 89,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 58,
          "end": 70,
          "local": {
            "type": "Identifier",
            "start": 63,
            "end": 70,
            "name": "Reflect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 76,
        "end": 88,
        "value": "./external",
        "raw": "\"./external\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 124,
      "end": 171,
      "id": {
        "type": "Identifier",
        "start": 130,
        "end": 131,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 140,
        "end": 141,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "expression": {
                  "type": "CallExpression",
                  "start": 157,
                  "end": 166,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 157,
                    "end": 164,
                    "object": {
                      "type": "Super",
                      "start": 157,
                      "end": 162
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 164,
                      "name": "w",
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
            ]
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ImportDeclaration",
      "start": 51,
      "end": 88,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 60,
          "end": 67,
          "imported": {
            "type": "Identifier",
            "start": 60,
            "end": 67,
            "name": "Reflect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 60,
            "end": 67,
            "name": "Reflect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 75,
        "end": 87,
        "value": "./external",
        "raw": "\"./external\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 123,
      "end": 170,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 130,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 139,
        "end": 140,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 141,
        "end": 170,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 147,
            "end": 168,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 158,
              "end": 167,
              "callee": {
                "type": "MemberExpression",
                "start": 158,
                "end": 165,
                "object": {
                  "type": "Super",
                  "start": 158,
                  "end": 163
                },
                "property": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 165,
                  "name": "w",
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ImportDeclaration",
      "start": 51,
      "end": 88,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 60,
          "end": 67,
          "imported": {
            "type": "Identifier",
            "start": 60,
            "end": 67,
            "name": "Reflect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 60,
            "end": 67,
            "name": "Reflect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 75,
        "end": 87,
        "value": "./external",
        "raw": "\"./external\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 123,
      "end": 170,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 130,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 139,
        "end": 140,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "expression": {
                  "type": "CallExpression",
                  "start": 156,
                  "end": 165,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 156,
                    "end": 163,
                    "object": {
                      "type": "Super",
                      "start": 156,
                      "end": 161
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 162,
                      "end": 163,
                      "name": "w",
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
            ]
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ImportDeclaration",
      "start": 51,
      "end": 95,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 60,
          "end": 74,
          "imported": {
            "type": "Identifier",
            "start": 60,
            "end": 63,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 67,
            "end": 74,
            "name": "Reflect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 82,
        "end": 94,
        "value": "./external",
        "raw": "\"./external\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 154,
      "end": 201,
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 161,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 170,
        "end": 171,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 172,
        "end": 201,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 178,
            "end": 199,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 189,
              "end": 198,
              "callee": {
                "type": "MemberExpression",
                "start": 189,
                "end": 196,
                "object": {
                  "type": "Super",
                  "start": 189,
                  "end": 194
                },
                "property": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "name": "w",
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ImportDeclaration",
      "start": 51,
      "end": 95,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 60,
          "end": 74,
          "imported": {
            "type": "Identifier",
            "start": 60,
            "end": 63,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 67,
            "end": 74,
            "name": "Reflect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 82,
        "end": 94,
        "value": "./external",
        "raw": "\"./external\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 154,
      "end": 201,
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 161,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 170,
        "end": 171,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "expression": {
                  "type": "CallExpression",
                  "start": 187,
                  "end": 196,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 187,
                    "end": 194,
                    "object": {
                      "type": "Super",
                      "start": 187,
                      "end": 192
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 193,
                      "end": 194,
                      "name": "w",
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
            ]
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ImportDeclaration",
      "start": 51,
      "end": 95,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 60,
          "end": 74,
          "imported": {
            "type": "Identifier",
            "start": 60,
            "end": 63,
            "name": "Bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 67,
            "end": 74,
            "name": "Reflect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 82,
        "end": 94,
        "value": "./external",
        "raw": "\"./external\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 154,
      "end": 201,
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 161,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 170,
        "end": 171,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 172,
        "end": 201,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 178,
            "end": 199,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 189,
              "end": 198,
              "callee": {
                "type": "MemberExpression",
                "start": 189,
                "end": 196,
                "object": {
                  "type": "Super",
                  "start": 189,
                  "end": 194
                },
                "property": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "name": "w",
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ImportDeclaration",
      "start": 51,
      "end": 95,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 60,
          "end": 74,
          "imported": {
            "type": "Identifier",
            "start": 60,
            "end": 63,
            "name": "Bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 67,
            "end": 74,
            "name": "Reflect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 82,
        "end": 94,
        "value": "./external",
        "raw": "\"./external\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 154,
      "end": 201,
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 161,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 170,
        "end": 171,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "expression": {
                  "type": "CallExpression",
                  "start": 187,
                  "end": 196,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 187,
                    "end": 194,
                    "object": {
                      "type": "Super",
                      "start": 187,
                      "end": 192
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 193,
                      "end": 194,
                      "name": "w",
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
            ]
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ImportDeclaration",
      "start": 51,
      "end": 95,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 60,
          "end": 74,
          "imported": {
            "type": "Identifier",
            "start": 60,
            "end": 63,
            "name": "Baz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 67,
            "end": 74,
            "name": "Reflect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 82,
        "end": 94,
        "value": "./external",
        "raw": "\"./external\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 130,
      "end": 177,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 137,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 146,
        "end": 147,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 148,
        "end": 177,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 154,
            "end": 175,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 161,
              "end": 162,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 165,
              "end": 174,
              "callee": {
                "type": "MemberExpression",
                "start": 165,
                "end": 172,
                "object": {
                  "type": "Super",
                  "start": 165,
                  "end": 170
                },
                "property": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 172,
                  "name": "w",
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ImportDeclaration",
      "start": 51,
      "end": 95,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 60,
          "end": 74,
          "imported": {
            "type": "Identifier",
            "start": 60,
            "end": 63,
            "name": "Baz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 67,
            "end": 74,
            "name": "Reflect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 82,
        "end": 94,
        "value": "./external",
        "raw": "\"./external\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 130,
      "end": 177,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 137,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 146,
        "end": 147,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "expression": {
                  "type": "CallExpression",
                  "start": 163,
                  "end": 172,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 163,
                    "end": 170,
                    "object": {
                      "type": "Super",
                      "start": 163,
                      "end": 168
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 170,
                      "name": "w",
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
            ]
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ImportDeclaration",
      "start": 51,
      "end": 93,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 65,
          "end": 72,
          "imported": {
            "type": "Identifier",
            "start": 65,
            "end": 72,
            "name": "Reflect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 65,
            "end": 72,
            "name": "Reflect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 80,
        "end": 92,
        "value": "./external",
        "raw": "\"./external\""
      },
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "ClassDeclaration",
      "start": 110,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 117,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 126,
        "end": 127,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 128,
        "end": 157,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 134,
            "end": 155,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 141,
              "end": 142,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 145,
              "end": 154,
              "callee": {
                "type": "MemberExpression",
                "start": 145,
                "end": 152,
                "object": {
                  "type": "Super",
                  "start": 145,
                  "end": 150
                },
                "property": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 152,
                  "name": "w",
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ImportDeclaration",
      "start": 51,
      "end": 93,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 65,
          "end": 72,
          "imported": {
            "type": "Identifier",
            "start": 65,
            "end": 72,
            "name": "Reflect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 65,
            "end": 72,
            "name": "Reflect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 80,
        "end": 92,
        "value": "./external",
        "raw": "\"./external\""
      },
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "ClassDeclaration",
      "start": 110,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 117,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 126,
        "end": 127,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "expression": {
                  "type": "CallExpression",
                  "start": 143,
                  "end": 152,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 143,
                    "end": 150,
                    "object": {
                      "type": "Super",
                      "start": 143,
                      "end": 148
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 149,
                      "end": 150,
                      "name": "w",
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
            ]
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ImportDeclaration",
      "start": 51,
      "end": 84,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 58,
          "end": 65,
          "local": {
            "type": "Identifier",
            "start": 58,
            "end": 65,
            "name": "Reflect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 71,
        "end": 83,
        "value": "./external",
        "raw": "\"./external\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 119,
      "end": 166,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 126,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 135,
        "end": 136,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 137,
        "end": 166,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 143,
            "end": 164,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 154,
              "end": 163,
              "callee": {
                "type": "MemberExpression",
                "start": 154,
                "end": 161,
                "object": {
                  "type": "Super",
                  "start": 154,
                  "end": 159
                },
                "property": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 161,
                  "name": "w",
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ImportDeclaration",
      "start": 51,
      "end": 84,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 58,
          "end": 65,
          "local": {
            "type": "Identifier",
            "start": 58,
            "end": 65,
            "name": "Reflect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 71,
        "end": 83,
        "value": "./external",
        "raw": "\"./external\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 119,
      "end": 166,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 126,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 135,
        "end": 136,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "expression": {
                  "type": "CallExpression",
                  "start": 152,
                  "end": 161,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 152,
                    "end": 159,
                    "object": {
                      "type": "Super",
                      "start": 152,
                      "end": 157
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 158,
                      "end": 159,
                      "name": "w",
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
            ]
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ImportDeclaration",
      "start": 51,
      "end": 89,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 63,
          "end": 70,
          "local": {
            "type": "Identifier",
            "start": 63,
            "end": 70,
            "name": "Reflect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 76,
        "end": 88,
        "value": "./external",
        "raw": "\"./external\""
      },
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "ClassDeclaration",
      "start": 106,
      "end": 153,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 122,
        "end": 123,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 124,
        "end": 153,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 130,
            "end": 151,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 141,
              "end": 150,
              "callee": {
                "type": "MemberExpression",
                "start": 141,
                "end": 148,
                "object": {
                  "type": "Super",
                  "start": 141,
                  "end": 146
                },
                "property": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "name": "w",
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ImportDeclaration",
      "start": 51,
      "end": 89,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 63,
          "end": 70,
          "local": {
            "type": "Identifier",
            "start": 63,
            "end": 70,
            "name": "Reflect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 76,
        "end": 88,
        "value": "./external",
        "raw": "\"./external\""
      },
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "ClassDeclaration",
      "start": 106,
      "end": 153,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 122,
        "end": 123,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "expression": {
                  "type": "CallExpression",
                  "start": 139,
                  "end": 148,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 139,
                    "end": 146,
                    "object": {
                      "type": "Super",
                      "start": 139,
                      "end": 144
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 145,
                      "end": 146,
                      "name": "w",
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
            ]
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 51,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 63,
        "name": "Reflect",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnknownKeyword",
        "start": 66,
        "end": 73
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 91,
      "end": 138,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 98,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 107,
        "end": 108,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 109,
        "end": 138,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 115,
            "end": 136,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 126,
              "end": 135,
              "callee": {
                "type": "MemberExpression",
                "start": 126,
                "end": 133,
                "object": {
                  "type": "Super",
                  "start": 126,
                  "end": 131
                },
                "property": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 133,
                  "name": "w",
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 51,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 63,
        "name": "Reflect",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnknownKeyword",
        "start": 66,
        "end": 73
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 91,
      "end": 138,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 98,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 107,
        "end": 108,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "expression": {
                  "type": "CallExpression",
                  "start": 124,
                  "end": 133,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 124,
                    "end": 131,
                    "object": {
                      "type": "Super",
                      "start": 124,
                      "end": 129
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 131,
                      "name": "w",
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
            ]
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 51,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 68,
        "name": "Reflect",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 69,
        "end": 71,
        "body": []
      },
      "declare": false
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
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 96,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 105,
        "end": 106,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 107,
        "end": 136,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 113,
            "end": 134,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 124,
              "end": 133,
              "callee": {
                "type": "MemberExpression",
                "start": 124,
                "end": 131,
                "object": {
                  "type": "Super",
                  "start": 124,
                  "end": 129
                },
                "property": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 131,
                  "name": "w",
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 51,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 68,
        "name": "Reflect",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 69,
        "end": 71,
        "body": []
      },
      "declare": false
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
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 96,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 105,
        "end": 106,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "expression": {
                  "type": "CallExpression",
                  "start": 122,
                  "end": 131,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 122,
                    "end": 129,
                    "object": {
                      "type": "Super",
                      "start": 122,
                      "end": 127
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 129,
                      "name": "w",
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
            ]
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 51,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 76,
        "name": "Reflect",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 77,
        "end": 98,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 79,
            "end": 96,
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 88,
              "end": 95
            },
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
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
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 123,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 132,
        "end": 133,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 134,
        "end": 163,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 140,
            "end": 161,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 148,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 151,
              "end": 160,
              "callee": {
                "type": "MemberExpression",
                "start": 151,
                "end": 158,
                "object": {
                  "type": "Super",
                  "start": 151,
                  "end": 156
                },
                "property": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 158,
                  "name": "w",
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 51,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 76,
        "name": "Reflect",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 77,
        "end": 98,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 79,
            "end": 96,
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 88,
              "end": 95
            },
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
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
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 123,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 132,
        "end": 133,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "expression": {
                  "type": "CallExpression",
                  "start": 149,
                  "end": 158,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 149,
                    "end": 156,
                    "object": {
                      "type": "Super",
                      "start": 149,
                      "end": 154
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 155,
                      "end": 156,
                      "name": "w",
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
            ]
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 70,
      "expression": {
        "type": "ClassExpression",
        "start": 52,
        "end": 68,
        "id": {
          "type": "Identifier",
          "start": 58,
          "end": 65,
          "name": "Reflect",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 66,
          "end": 68,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 87,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 94,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 103,
        "end": 104,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 105,
        "end": 134,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 111,
            "end": 132,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 119,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 122,
              "end": 131,
              "callee": {
                "type": "MemberExpression",
                "start": 122,
                "end": 129,
                "object": {
                  "type": "Super",
                  "start": 122,
                  "end": 127
                },
                "property": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 129,
                  "name": "w",
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 70,
      "expression": {
        "type": "ClassExpression",
        "start": 52,
        "end": 68,
        "id": {
          "type": "Identifier",
          "start": 58,
          "end": 65,
          "name": "Reflect",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 66,
          "end": 68,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 87,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 94,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 103,
        "end": 104,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "expression": {
                  "type": "CallExpression",
                  "start": 120,
                  "end": 129,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 120,
                    "end": 127,
                    "object": {
                      "type": "Super",
                      "start": 120,
                      "end": 125
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 126,
                      "end": 127,
                      "name": "w",
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
            ]
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 196,
      "expression": {
        "type": "ClassExpression",
        "start": 52,
        "end": 194,
        "id": {
          "type": "Identifier",
          "start": 58,
          "end": 65,
          "name": "Reflect",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
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
                  "id": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 130,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": {
                    "type": "Identifier",
                    "start": 139,
                    "end": 140,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "body": {
                    "type": "ClassBody",
                    "start": 141,
                    "end": 186,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 155,
                        "end": 176,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 162,
                          "end": 163,
                          "name": "_",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "CallExpression",
                          "start": 166,
                          "end": 175,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 166,
                            "end": 173,
                            "object": {
                              "type": "Super",
                              "start": 166,
                              "end": 171
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 172,
                              "end": 173,
                              "name": "w",
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
                        "decorators": [],
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "typeAnnotation": null,
                        "accessibility": null
                      }
                    ]
                  },
                  "decorators": [],
                  "typeParameters": null,
                  "implements": [],
                  "abstract": false,
                  "declare": false,
                  "superTypeArguments": null
                }
              ]
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
      "directive": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 196,
      "expression": {
        "type": "ClassExpression",
        "start": 52,
        "end": 194,
        "id": {
          "type": "Identifier",
          "start": 58,
          "end": 65,
          "name": "Reflect",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
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
                  "id": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 130,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": {
                    "type": "Identifier",
                    "start": 139,
                    "end": 140,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                            "expression": {
                              "type": "CallExpression",
                              "start": 164,
                              "end": 173,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 164,
                                "end": 171,
                                "object": {
                                  "type": "Super",
                                  "start": 164,
                                  "end": 169
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 170,
                                  "end": 171,
                                  "name": "w",
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
                        ]
                      }
                    ]
                  },
                  "decorators": [],
                  "typeParameters": null,
                  "implements": [],
                  "abstract": false,
                  "declare": false,
                  "superTypeArguments": null
                }
              ]
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
      "directive": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 75,
      "expression": {
        "type": "FunctionExpression",
        "start": 52,
        "end": 73,
        "id": {
          "type": "Identifier",
          "start": 61,
          "end": 68,
          "name": "Reflect",
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
          "start": 71,
          "end": 73,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 92,
      "end": 139,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 99,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 110,
        "end": 139,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 116,
            "end": 137,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 127,
              "end": 136,
              "callee": {
                "type": "MemberExpression",
                "start": 127,
                "end": 134,
                "object": {
                  "type": "Super",
                  "start": 127,
                  "end": 132
                },
                "property": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 134,
                  "name": "w",
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 75,
      "expression": {
        "type": "FunctionExpression",
        "start": 52,
        "end": 73,
        "id": {
          "type": "Identifier",
          "start": 61,
          "end": 68,
          "name": "Reflect",
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
          "start": 71,
          "end": 73,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 92,
      "end": 139,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 99,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "expression": {
                  "type": "CallExpression",
                  "start": 125,
                  "end": 134,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 125,
                    "end": 132,
                    "object": {
                      "type": "Super",
                      "start": 125,
                      "end": 130
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 132,
                      "name": "w",
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
            ]
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 170,
      "expression": {
        "type": "FunctionExpression",
        "start": 52,
        "end": 168,
        "id": {
          "type": "Identifier",
          "start": 61,
          "end": 68,
          "name": "Reflect",
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
          "start": 71,
          "end": 168,
          "body": [
            {
              "type": "ClassDeclaration",
              "start": 111,
              "end": 166,
              "id": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 129,
                "end": 166,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 139,
                    "end": 160,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 147,
                      "name": "_",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "CallExpression",
                      "start": 150,
                      "end": 159,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 150,
                        "end": 157,
                        "object": {
                          "type": "Super",
                          "start": 150,
                          "end": 155
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 156,
                          "end": 157,
                          "name": "w",
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
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "directive": null
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 37,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 170,
      "expression": {
        "type": "FunctionExpression",
        "start": 52,
        "end": 168,
        "id": {
          "type": "Identifier",
          "start": 61,
          "end": 68,
          "name": "Reflect",
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
          "start": 71,
          "end": 168,
          "body": [
            {
              "type": "ClassDeclaration",
              "start": 111,
              "end": 166,
              "id": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                        "expression": {
                          "type": "CallExpression",
                          "start": 148,
                          "end": 157,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 148,
                            "end": 155,
                            "object": {
                              "type": "Super",
                              "start": 148,
                              "end": 153
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 154,
                              "end": 155,
                              "name": "w",
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
                    ]
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
