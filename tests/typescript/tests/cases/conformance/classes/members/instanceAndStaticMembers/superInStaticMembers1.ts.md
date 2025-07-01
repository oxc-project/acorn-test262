__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reflect",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 20
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 21,
          "end": 23
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 23
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 23
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 41,
          "end": 44
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 45,
          "end": 47
        },
        "declare": false,
        "start": 31,
        "end": 47
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 24,
      "end": 47
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 76
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 85
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 88,
                "end": 95
              },
              "declare": false,
              "start": 79,
              "end": 96
            }
          ],
          "start": 77,
          "end": 98
        },
        "kind": "namespace",
        "declare": true,
        "global": false,
        "start": 55,
        "end": 98
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 48,
      "end": 98
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 117,
          "end": 120
        },
        "body": {
          "type": "TSEnumBody",
          "members": [],
          "start": 121,
          "end": 123
        },
        "const": true,
        "declare": false,
        "start": 106,
        "end": 123
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 99,
      "end": 123
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": null,
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 145,
          "end": 147
        },
        "abstract": false,
        "declare": false,
        "start": 139,
        "end": 147
      },
      "exportKind": "value",
      "start": 124,
      "end": 147
    },
    {
      "type": "EmptyStatement",
      "start": 147,
      "end": 148
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 149
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 58
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 68
      },
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 83
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
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
                                "name": "Reflect",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 121,
                                "end": 128
                              },
                              "init": null,
                              "definite": false,
                              "start": 121,
                              "end": 128
                            }
                          ],
                          "declare": false,
                          "start": 117,
                          "end": 129
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 176,
                                "end": 181
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "w",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 182,
                                "end": 183
                              },
                              "optional": false,
                              "computed": false,
                              "start": 176,
                              "end": 183
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 176,
                            "end": 185
                          },
                          "directive": null,
                          "start": 176,
                          "end": 186
                        }
                      ],
                      "start": 103,
                      "end": 196
                    },
                    "id": null,
                    "generator": false,
                    "start": 97,
                    "end": 196
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 96,
                  "end": 199
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
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
                                "type": "ObjectPattern",
                                "decorators": [],
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Reflect",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 236,
                                      "end": 243
                                    },
                                    "value": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Reflect",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 236,
                                      "end": 243
                                    },
                                    "method": false,
                                    "shorthand": true,
                                    "computed": false,
                                    "optional": false,
                                    "start": 236,
                                    "end": 243
                                  }
                                ],
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 234,
                                "end": 245
                              },
                              "init": {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Reflect",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 250,
                                      "end": 257
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null",
                                      "start": 259,
                                      "end": 263
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 250,
                                    "end": 263
                                  }
                                ],
                                "start": 248,
                                "end": 265
                              },
                              "definite": false,
                              "start": 234,
                              "end": 265
                            }
                          ],
                          "declare": false,
                          "start": 230,
                          "end": 266
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 313,
                                "end": 318
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "w",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 319,
                                "end": 320
                              },
                              "optional": false,
                              "computed": false,
                              "start": 313,
                              "end": 320
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 313,
                            "end": 322
                          },
                          "directive": null,
                          "start": 313,
                          "end": 323
                        }
                      ],
                      "start": 216,
                      "end": 333
                    },
                    "id": null,
                    "generator": false,
                    "start": 210,
                    "end": 333
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 209,
                  "end": 336
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
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
                                "type": "ArrayPattern",
                                "decorators": [],
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Reflect",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 372,
                                    "end": 379
                                  }
                                ],
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 371,
                                "end": 380
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null",
                                    "start": 384,
                                    "end": 388
                                  }
                                ],
                                "start": 383,
                                "end": 389
                              },
                              "definite": false,
                              "start": 371,
                              "end": 389
                            }
                          ],
                          "declare": false,
                          "start": 367,
                          "end": 390
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 437,
                                "end": 442
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "w",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 443,
                                "end": 444
                              },
                              "optional": false,
                              "computed": false,
                              "start": 437,
                              "end": 444
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 437,
                            "end": 446
                          },
                          "directive": null,
                          "start": 437,
                          "end": 447
                        }
                      ],
                      "start": 353,
                      "end": 457
                    },
                    "id": null,
                    "generator": false,
                    "start": 347,
                    "end": 457
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 346,
                  "end": 460
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ClassDeclaration",
                          "decorators": [],
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Reflect",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 497,
                            "end": 504
                          },
                          "typeParameters": null,
                          "superClass": null,
                          "superTypeArguments": null,
                          "implements": [],
                          "body": {
                            "type": "ClassBody",
                            "body": [],
                            "start": 505,
                            "end": 507
                          },
                          "abstract": false,
                          "declare": false,
                          "start": 491,
                          "end": 507
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 554,
                                "end": 559
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "w",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 560,
                                "end": 561
                              },
                              "optional": false,
                              "computed": false,
                              "start": 554,
                              "end": 561
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 554,
                            "end": 563
                          },
                          "directive": null,
                          "start": 554,
                          "end": 564
                        }
                      ],
                      "start": 477,
                      "end": 574
                    },
                    "id": null,
                    "generator": false,
                    "start": 471,
                    "end": 574
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 470,
                  "end": 577
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "FunctionDeclaration",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Reflect",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 617,
                            "end": 624
                          },
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 627,
                            "end": 629
                          },
                          "expression": false,
                          "start": 608,
                          "end": 629
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 676,
                                "end": 681
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "w",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 682,
                                "end": 683
                              },
                              "optional": false,
                              "computed": false,
                              "start": 676,
                              "end": 683
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 676,
                            "end": 685
                          },
                          "directive": null,
                          "start": 676,
                          "end": 686
                        }
                      ],
                      "start": 594,
                      "end": 696
                    },
                    "id": null,
                    "generator": false,
                    "start": 588,
                    "end": 696
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 587,
                  "end": 699
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "TSEnumDeclaration",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Reflect",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 735,
                            "end": 742
                          },
                          "body": {
                            "type": "TSEnumBody",
                            "members": [],
                            "start": 743,
                            "end": 745
                          },
                          "const": false,
                          "declare": false,
                          "start": 730,
                          "end": 745
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 792,
                                "end": 797
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "w",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 798,
                                "end": 799
                              },
                              "optional": false,
                              "computed": false,
                              "start": 792,
                              "end": 799
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 792,
                            "end": 801
                          },
                          "directive": null,
                          "start": 792,
                          "end": 802
                        }
                      ],
                      "start": 716,
                      "end": 812
                    },
                    "id": null,
                    "generator": false,
                    "start": 710,
                    "end": 812
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 709,
                  "end": 815
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "TSEnumDeclaration",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Reflect",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 857,
                            "end": 864
                          },
                          "body": {
                            "type": "TSEnumBody",
                            "members": [],
                            "start": 865,
                            "end": 867
                          },
                          "const": true,
                          "declare": false,
                          "start": 846,
                          "end": 867
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 914,
                                "end": 919
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "w",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 920,
                                "end": 921
                              },
                              "optional": false,
                              "computed": false,
                              "start": 914,
                              "end": 921
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 914,
                            "end": 923
                          },
                          "directive": null,
                          "start": 914,
                          "end": 924
                        }
                      ],
                      "start": 832,
                      "end": 934
                    },
                    "id": null,
                    "generator": false,
                    "start": 826,
                    "end": 934
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 825,
                  "end": 937
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "TSTypeAliasDeclaration",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Reflect",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 973,
                            "end": 980
                          },
                          "typeParameters": null,
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 983,
                            "end": 990
                          },
                          "declare": false,
                          "start": 968,
                          "end": 991
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 1020,
                                "end": 1025
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "w",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1026,
                                "end": 1027
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1020,
                              "end": 1027
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1020,
                            "end": 1029
                          },
                          "directive": null,
                          "start": 1020,
                          "end": 1030
                        }
                      ],
                      "start": 954,
                      "end": 1040
                    },
                    "id": null,
                    "generator": false,
                    "start": 948,
                    "end": 1040
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 947,
                  "end": 1043
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "TSInterfaceDeclaration",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Reflect",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1084,
                            "end": 1091
                          },
                          "typeParameters": null,
                          "extends": [],
                          "body": {
                            "type": "TSInterfaceBody",
                            "body": [],
                            "start": 1092,
                            "end": 1094
                          },
                          "declare": false,
                          "start": 1074,
                          "end": 1094
                        },
                        {
                          "type": "EmptyStatement",
                          "start": 1094,
                          "end": 1095
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 1124,
                                "end": 1129
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "w",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1130,
                                "end": 1131
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1124,
                              "end": 1131
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1124,
                            "end": 1133
                          },
                          "directive": null,
                          "start": 1124,
                          "end": 1134
                        }
                      ],
                      "start": 1060,
                      "end": 1144
                    },
                    "id": null,
                    "generator": false,
                    "start": 1054,
                    "end": 1144
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1053,
                  "end": 1147
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "ClassExpression",
                            "decorators": [],
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Reflect",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1185,
                              "end": 1192
                            },
                            "typeParameters": null,
                            "superClass": null,
                            "superTypeArguments": null,
                            "implements": [],
                            "body": {
                              "type": "ClassBody",
                              "body": [],
                              "start": 1193,
                              "end": 1195
                            },
                            "abstract": false,
                            "declare": false,
                            "start": 1179,
                            "end": 1195
                          },
                          "directive": null,
                          "start": 1178,
                          "end": 1197
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 1226,
                                "end": 1231
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "w",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1232,
                                "end": 1233
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1226,
                              "end": 1233
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1226,
                            "end": 1235
                          },
                          "directive": null,
                          "start": 1226,
                          "end": 1236
                        }
                      ],
                      "start": 1164,
                      "end": 1246
                    },
                    "id": null,
                    "generator": false,
                    "start": 1158,
                    "end": 1246
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1157,
                  "end": 1249
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "FunctionExpression",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Reflect",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1290,
                              "end": 1297
                            },
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 1300,
                              "end": 1302
                            },
                            "expression": false,
                            "start": 1281,
                            "end": 1302
                          },
                          "directive": null,
                          "start": 1280,
                          "end": 1304
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 1333,
                                "end": 1338
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "w",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1339,
                                "end": 1340
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1333,
                              "end": 1340
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1333,
                            "end": 1342
                          },
                          "directive": null,
                          "start": 1333,
                          "end": 1343
                        }
                      ],
                      "start": 1266,
                      "end": 1353
                    },
                    "id": null,
                    "generator": false,
                    "start": 1260,
                    "end": 1353
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1259,
                  "end": 1356
                }
              ],
              "start": 86,
              "end": 1363
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 75,
            "end": 1364
          },
          {
            "type": "StaticBlock",
            "body": [
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
                            "name": "Reflect",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1393,
                            "end": 1400
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Reflect",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1393,
                            "end": 1400
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 1393,
                          "end": 1400
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1391,
                      "end": 1402
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Reflect",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1407,
                            "end": 1414
                          },
                          "value": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 1416,
                            "end": 1420
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1407,
                          "end": 1420
                        }
                      ],
                      "start": 1405,
                      "end": 1422
                    },
                    "definite": false,
                    "start": 1391,
                    "end": 1422
                  }
                ],
                "declare": false,
                "start": 1387,
                "end": 1423
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 1466,
                      "end": 1471
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1472,
                      "end": 1473
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1466,
                    "end": 1473
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1466,
                  "end": 1475
                },
                "directive": null,
                "start": 1466,
                "end": 1476
              }
            ],
            "start": 1370,
            "end": 1482
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Reflect",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1510,
                          "end": 1517
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1509,
                      "end": 1518
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 1522,
                          "end": 1526
                        }
                      ],
                      "start": 1521,
                      "end": 1527
                    },
                    "definite": false,
                    "start": 1509,
                    "end": 1527
                  }
                ],
                "declare": false,
                "start": 1505,
                "end": 1528
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 1571,
                      "end": 1576
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1577,
                      "end": 1578
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1571,
                    "end": 1578
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1571,
                  "end": 1580
                },
                "directive": null,
                "start": 1571,
                "end": 1581
              }
            ],
            "start": 1488,
            "end": 1587
          },
          {
            "type": "StaticBlock",
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
                      "name": "Reflect",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1614,
                      "end": 1621
                    },
                    "init": null,
                    "definite": false,
                    "start": 1614,
                    "end": 1621
                  }
                ],
                "declare": false,
                "start": 1610,
                "end": 1622
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 1665,
                      "end": 1670
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1671,
                      "end": 1672
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1665,
                    "end": 1672
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1665,
                  "end": 1674
                },
                "directive": null,
                "start": 1665,
                "end": 1675
              }
            ],
            "start": 1593,
            "end": 1681
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1710,
                  "end": 1717
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 1718,
                  "end": 1720
                },
                "abstract": false,
                "declare": false,
                "start": 1704,
                "end": 1720
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 1763,
                      "end": 1768
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1769,
                      "end": 1770
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1763,
                    "end": 1770
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1763,
                  "end": 1772
                },
                "directive": null,
                "start": 1763,
                "end": 1773
              }
            ],
            "start": 1687,
            "end": 1779
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1811,
                  "end": 1818
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1821,
                  "end": 1823
                },
                "expression": false,
                "start": 1802,
                "end": 1823
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 1866,
                      "end": 1871
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1872,
                      "end": 1873
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1866,
                    "end": 1873
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1866,
                  "end": 1875
                },
                "directive": null,
                "start": 1866,
                "end": 1876
              }
            ],
            "start": 1785,
            "end": 1882
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "TSEnumDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1910,
                  "end": 1917
                },
                "body": {
                  "type": "TSEnumBody",
                  "members": [],
                  "start": 1918,
                  "end": 1920
                },
                "const": false,
                "declare": false,
                "start": 1905,
                "end": 1920
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 1963,
                      "end": 1968
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1969,
                      "end": 1970
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1963,
                    "end": 1970
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1963,
                  "end": 1972
                },
                "directive": null,
                "start": 1963,
                "end": 1973
              }
            ],
            "start": 1888,
            "end": 1979
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "TSEnumDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2013,
                  "end": 2020
                },
                "body": {
                  "type": "TSEnumBody",
                  "members": [],
                  "start": 2021,
                  "end": 2023
                },
                "const": true,
                "declare": false,
                "start": 2002,
                "end": 2023
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 2066,
                      "end": 2071
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2072,
                      "end": 2073
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2066,
                    "end": 2073
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2066,
                  "end": 2075
                },
                "directive": null,
                "start": 2066,
                "end": 2076
              }
            ],
            "start": 1985,
            "end": 2082
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "TSTypeAliasDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2110,
                  "end": 2117
                },
                "typeParameters": null,
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 2120,
                  "end": 2127
                },
                "declare": false,
                "start": 2105,
                "end": 2128
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 2153,
                      "end": 2158
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2159,
                      "end": 2160
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2153,
                    "end": 2160
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2153,
                  "end": 2162
                },
                "directive": null,
                "start": 2153,
                "end": 2163
              }
            ],
            "start": 2088,
            "end": 2169
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2202,
                  "end": 2209
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 2210,
                  "end": 2212
                },
                "declare": false,
                "start": 2192,
                "end": 2212
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 2237,
                      "end": 2242
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2243,
                      "end": 2244
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2237,
                    "end": 2244
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2237,
                  "end": 2246
                },
                "directive": null,
                "start": 2237,
                "end": 2247
              }
            ],
            "start": 2175,
            "end": 2253
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Reflect",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2283,
                    "end": 2290
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [],
                    "start": 2291,
                    "end": 2293
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 2277,
                  "end": 2293
                },
                "directive": null,
                "start": 2276,
                "end": 2294
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 2319,
                      "end": 2324
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2325,
                      "end": 2326
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2319,
                    "end": 2326
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2319,
                  "end": 2328
                },
                "directive": null,
                "start": 2319,
                "end": 2329
              }
            ],
            "start": 2259,
            "end": 2335
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "FunctionExpression",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Reflect",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2368,
                    "end": 2375
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 2378,
                    "end": 2380
                  },
                  "expression": false,
                  "start": 2359,
                  "end": 2380
                },
                "directive": null,
                "start": 2358,
                "end": 2381
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 2406,
                      "end": 2411
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2412,
                      "end": 2413
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2406,
                    "end": 2413
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2406,
                  "end": 2415
                },
                "directive": null,
                "start": 2406,
                "end": 2416
              }
            ],
            "start": 2341,
            "end": 2422
          }
        ],
        "start": 69,
        "end": 2424
      },
      "abstract": false,
      "declare": false,
      "start": 51,
      "end": 2424
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2425
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
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
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 62
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 65,
            "end": 69
          },
          "definite": false,
          "start": 55,
          "end": 69
        }
      ],
      "declare": false,
      "start": 51,
      "end": 70
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 112
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 122
      },
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 137
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 140,
                  "end": 145
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 146,
                  "end": 147
                },
                "optional": false,
                "computed": false,
                "start": 140,
                "end": 147
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 140,
              "end": 149
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 129,
            "end": 150
          }
        ],
        "start": 123,
        "end": 152
      },
      "abstract": false,
      "declare": false,
      "start": 105,
      "end": 152
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 153
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
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
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 64
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 64
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 57,
                "end": 64
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 66
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 78
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 80,
                  "end": 84
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 71,
                "end": 84
              }
            ],
            "start": 69,
            "end": 86
          },
          "definite": false,
          "start": 55,
          "end": 86
        }
      ],
      "declare": false,
      "start": 51,
      "end": 87
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 129
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 139
      },
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 154
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 157,
                  "end": 162
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 163,
                  "end": 164
                },
                "optional": false,
                "computed": false,
                "start": 157,
                "end": 164
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 157,
              "end": 166
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 146,
            "end": 167
          }
        ],
        "start": 140,
        "end": 169
      },
      "abstract": false,
      "declare": false,
      "start": 122,
      "end": 169
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 170
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 63
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 64
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 68,
                "end": 72
              }
            ],
            "start": 67,
            "end": 73
          },
          "definite": false,
          "start": 55,
          "end": 73
        }
      ],
      "declare": false,
      "start": 51,
      "end": 74
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 116
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 126
      },
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 141
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 144,
                  "end": 149
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 150,
                  "end": 151
                },
                "optional": false,
                "computed": false,
                "start": 144,
                "end": 151
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 144,
              "end": 153
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 133,
            "end": 154
          }
        ],
        "start": 127,
        "end": 156
      },
      "abstract": false,
      "declare": false,
      "start": 109,
      "end": 156
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 157
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
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
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 62
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 65,
            "end": 69
          },
          "definite": false,
          "start": 55,
          "end": 69
        }
      ],
      "declare": false,
      "start": 51,
      "end": 70
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 112
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 122
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 138,
                      "end": 143
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 144,
                      "end": 145
                    },
                    "optional": false,
                    "computed": false,
                    "start": 138,
                    "end": 145
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 138,
                  "end": 147
                },
                "directive": null,
                "start": 138,
                "end": 148
              }
            ],
            "start": 129,
            "end": 150
          }
        ],
        "start": 123,
        "end": 152
      },
      "abstract": false,
      "declare": false,
      "start": 105,
      "end": 152
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 153
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
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
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 64
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 64
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 57,
                "end": 64
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 66
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reflect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 78
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 80,
                  "end": 84
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 71,
                "end": 84
              }
            ],
            "start": 69,
            "end": 86
          },
          "definite": false,
          "start": 55,
          "end": 86
        }
      ],
      "declare": false,
      "start": 51,
      "end": 87
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 129
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 139
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 155,
                      "end": 160
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 161,
                      "end": 162
                    },
                    "optional": false,
                    "computed": false,
                    "start": 155,
                    "end": 162
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 155,
                  "end": 164
                },
                "directive": null,
                "start": 155,
                "end": 165
              }
            ],
            "start": 146,
            "end": 167
          }
        ],
        "start": 140,
        "end": 169
      },
      "abstract": false,
      "declare": false,
      "start": 122,
      "end": 169
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 170
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 63
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 64
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 68,
                "end": 72
              }
            ],
            "start": 67,
            "end": 73
          },
          "definite": false,
          "start": 55,
          "end": 73
        }
      ],
      "declare": false,
      "start": 51,
      "end": 74
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 116
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 126
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 142,
                      "end": 147
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 148,
                      "end": 149
                    },
                    "optional": false,
                    "computed": false,
                    "start": 142,
                    "end": 149
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 142,
                  "end": 151
                },
                "directive": null,
                "start": 142,
                "end": 152
              }
            ],
            "start": 133,
            "end": 154
          }
        ],
        "start": 127,
        "end": 156
      },
      "abstract": false,
      "declare": false,
      "start": 109,
      "end": 156
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 157
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 64
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 65,
        "end": 67
      },
      "abstract": false,
      "declare": false,
      "start": 51,
      "end": 67
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 109
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 119
      },
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 134
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 137,
                  "end": 142
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 143,
                  "end": 144
                },
                "optional": false,
                "computed": false,
                "start": 137,
                "end": 144
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 137,
              "end": 146
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 126,
            "end": 147
          }
        ],
        "start": 120,
        "end": 149
      },
      "abstract": false,
      "declare": false,
      "start": 102,
      "end": 149
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 150
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 64
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 65,
        "end": 67
      },
      "abstract": false,
      "declare": false,
      "start": 51,
      "end": 67
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 109
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 119
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 135,
                      "end": 140
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 141,
                      "end": 142
                    },
                    "optional": false,
                    "computed": false,
                    "start": 135,
                    "end": 142
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 135,
                  "end": 144
                },
                "directive": null,
                "start": 135,
                "end": 145
              }
            ],
            "start": 126,
            "end": 147
          }
        ],
        "start": 120,
        "end": 149
      },
      "abstract": false,
      "declare": false,
      "start": 102,
      "end": 149
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 150
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 67
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 70,
        "end": 72
      },
      "expression": false,
      "start": 51,
      "end": 72
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 114
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 124
      },
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 139
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 142,
                  "end": 147
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 149
                },
                "optional": false,
                "computed": false,
                "start": 142,
                "end": 149
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 142,
              "end": 151
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 131,
            "end": 152
          }
        ],
        "start": 125,
        "end": 154
      },
      "abstract": false,
      "declare": false,
      "start": 107,
      "end": 154
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 155
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 67
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 70,
        "end": 72
      },
      "expression": false,
      "start": 51,
      "end": 72
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 114
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 124
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 140,
                      "end": 145
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 146,
                      "end": 147
                    },
                    "optional": false,
                    "computed": false,
                    "start": 140,
                    "end": 147
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 140,
                  "end": 149
                },
                "directive": null,
                "start": 140,
                "end": 150
              }
            ],
            "start": 131,
            "end": 152
          }
        ],
        "start": 125,
        "end": 154
      },
      "abstract": false,
      "declare": false,
      "start": 107,
      "end": 154
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 155
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 68
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 69,
        "end": 71
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 51,
      "end": 71
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 113
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 123
      },
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 138
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 141,
                  "end": 146
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 147,
                  "end": 148
                },
                "optional": false,
                "computed": false,
                "start": 141,
                "end": 148
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 141,
              "end": 150
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 130,
            "end": 151
          }
        ],
        "start": 124,
        "end": 153
      },
      "abstract": false,
      "declare": false,
      "start": 106,
      "end": 153
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 154
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 68
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 69,
        "end": 71
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 51,
      "end": 71
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 113
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 123
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 139,
                      "end": 144
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 145,
                      "end": 146
                    },
                    "optional": false,
                    "computed": false,
                    "start": 139,
                    "end": 146
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 139,
                  "end": 148
                },
                "directive": null,
                "start": 139,
                "end": 149
              }
            ],
            "start": 130,
            "end": 151
          }
        ],
        "start": 124,
        "end": 153
      },
      "abstract": false,
      "declare": false,
      "start": 106,
      "end": 153
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 154
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 63
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 64,
        "end": 66
      },
      "const": false,
      "declare": false,
      "start": 51,
      "end": 66
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 108
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 118
      },
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 133
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 136,
                  "end": 141
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 143
                },
                "optional": false,
                "computed": false,
                "start": 136,
                "end": 143
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 136,
              "end": 145
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 125,
            "end": 146
          }
        ],
        "start": 119,
        "end": 148
      },
      "abstract": false,
      "declare": false,
      "start": 101,
      "end": 148
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 149
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 63
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 64,
        "end": 66
      },
      "const": false,
      "declare": false,
      "start": 51,
      "end": 66
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 108
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 118
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 134,
                      "end": 139
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 140,
                      "end": 141
                    },
                    "optional": false,
                    "computed": false,
                    "start": 134,
                    "end": 141
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 134,
                  "end": 143
                },
                "directive": null,
                "start": 134,
                "end": 144
              }
            ],
            "start": 125,
            "end": 146
          }
        ],
        "start": 119,
        "end": 148
      },
      "abstract": false,
      "declare": false,
      "start": 101,
      "end": 148
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 149
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 69
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 70,
        "end": 72
      },
      "const": true,
      "declare": false,
      "start": 51,
      "end": 72
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 114
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 124
      },
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 139
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 142,
                  "end": 147
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 149
                },
                "optional": false,
                "computed": false,
                "start": 142,
                "end": 149
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 142,
              "end": 151
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 131,
            "end": 152
          }
        ],
        "start": 125,
        "end": 154
      },
      "abstract": false,
      "declare": false,
      "start": 107,
      "end": 154
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 155
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 69
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 70,
        "end": 72
      },
      "const": true,
      "declare": false,
      "start": 51,
      "end": 72
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 114
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 124
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 140,
                      "end": 145
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 146,
                      "end": 147
                    },
                    "optional": false,
                    "computed": false,
                    "start": 140,
                    "end": 147
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 140,
                  "end": 149
                },
                "directive": null,
                "start": 140,
                "end": 150
              }
            ],
            "start": 131,
            "end": 152
          }
        ],
        "start": 125,
        "end": 154
      },
      "abstract": false,
      "declare": false,
      "start": 107,
      "end": 154
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 155
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 70
          },
          "start": 58,
          "end": 70
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 76,
        "end": 88
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 89
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 130,
        "end": 131
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 140,
        "end": 141
      },
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 156
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 159,
                  "end": 164
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 165,
                  "end": 166
                },
                "optional": false,
                "computed": false,
                "start": 159,
                "end": 166
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 159,
              "end": 168
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 148,
            "end": 169
          }
        ],
        "start": 142,
        "end": 171
      },
      "abstract": false,
      "declare": false,
      "start": 124,
      "end": 171
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 172
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 70
          },
          "start": 58,
          "end": 70
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 76,
        "end": 88
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 89
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 130,
        "end": 131
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 140,
        "end": 141
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 157,
                      "end": 162
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 163,
                      "end": 164
                    },
                    "optional": false,
                    "computed": false,
                    "start": 157,
                    "end": 164
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 157,
                  "end": 166
                },
                "directive": null,
                "start": 157,
                "end": 167
              }
            ],
            "start": 148,
            "end": 169
          }
        ],
        "start": 142,
        "end": 171
      },
      "abstract": false,
      "declare": false,
      "start": 124,
      "end": 171
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 172
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 67
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 67
          },
          "importKind": "value",
          "start": 60,
          "end": 67
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 75,
        "end": 87
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 88
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 129,
        "end": 130
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 139,
        "end": 140
      },
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 155
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 158,
                  "end": 163
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 164,
                  "end": 165
                },
                "optional": false,
                "computed": false,
                "start": 158,
                "end": 165
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 158,
              "end": 167
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 147,
            "end": 168
          }
        ],
        "start": 141,
        "end": 170
      },
      "abstract": false,
      "declare": false,
      "start": 123,
      "end": 170
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 171
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 67
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 67
          },
          "importKind": "value",
          "start": 60,
          "end": 67
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 75,
        "end": 87
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 88
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 129,
        "end": 130
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 139,
        "end": 140
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 156,
                      "end": 161
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 162,
                      "end": 163
                    },
                    "optional": false,
                    "computed": false,
                    "start": 156,
                    "end": 163
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 156,
                  "end": 165
                },
                "directive": null,
                "start": 156,
                "end": 166
              }
            ],
            "start": 147,
            "end": 168
          }
        ],
        "start": 141,
        "end": 170
      },
      "abstract": false,
      "declare": false,
      "start": 123,
      "end": 170
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 171
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 63
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 74
          },
          "importKind": "value",
          "start": 60,
          "end": 74
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 82,
        "end": 94
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 95
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 160,
        "end": 161
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 170,
        "end": 171
      },
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 186
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 189,
                  "end": 194
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 195,
                  "end": 196
                },
                "optional": false,
                "computed": false,
                "start": 189,
                "end": 196
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 189,
              "end": 198
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 178,
            "end": 199
          }
        ],
        "start": 172,
        "end": 201
      },
      "abstract": false,
      "declare": false,
      "start": 154,
      "end": 201
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 202
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 63
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 74
          },
          "importKind": "value",
          "start": 60,
          "end": 74
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 82,
        "end": 94
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 95
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 160,
        "end": 161
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 170,
        "end": 171
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 187,
                      "end": 192
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 193,
                      "end": 194
                    },
                    "optional": false,
                    "computed": false,
                    "start": 187,
                    "end": 194
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 187,
                  "end": 196
                },
                "directive": null,
                "start": 187,
                "end": 197
              }
            ],
            "start": 178,
            "end": 199
          }
        ],
        "start": 172,
        "end": 201
      },
      "abstract": false,
      "declare": false,
      "start": 154,
      "end": 201
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 202
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 63
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 74
          },
          "importKind": "value",
          "start": 60,
          "end": 74
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 82,
        "end": 94
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 95
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 160,
        "end": 161
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 170,
        "end": 171
      },
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 186
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 189,
                  "end": 194
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 195,
                  "end": 196
                },
                "optional": false,
                "computed": false,
                "start": 189,
                "end": 196
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 189,
              "end": 198
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 178,
            "end": 199
          }
        ],
        "start": 172,
        "end": 201
      },
      "abstract": false,
      "declare": false,
      "start": 154,
      "end": 201
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 202
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 63
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 74
          },
          "importKind": "value",
          "start": 60,
          "end": 74
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 82,
        "end": 94
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 95
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 160,
        "end": 161
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 170,
        "end": 171
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 187,
                      "end": 192
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 193,
                      "end": 194
                    },
                    "optional": false,
                    "computed": false,
                    "start": 187,
                    "end": 194
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 187,
                  "end": 196
                },
                "directive": null,
                "start": 187,
                "end": 197
              }
            ],
            "start": 178,
            "end": 199
          }
        ],
        "start": 172,
        "end": 201
      },
      "abstract": false,
      "declare": false,
      "start": 154,
      "end": 201
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 202
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 63
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 74
          },
          "importKind": "value",
          "start": 60,
          "end": 74
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 82,
        "end": 94
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 95
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 137
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 147
      },
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 162
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 165,
                  "end": 170
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 171,
                  "end": 172
                },
                "optional": false,
                "computed": false,
                "start": 165,
                "end": 172
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 165,
              "end": 174
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 154,
            "end": 175
          }
        ],
        "start": 148,
        "end": 177
      },
      "abstract": false,
      "declare": false,
      "start": 130,
      "end": 177
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 178
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 63
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 74
          },
          "importKind": "value",
          "start": 60,
          "end": 74
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 82,
        "end": 94
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 95
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 137
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 147
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 163,
                      "end": 168
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 169,
                      "end": 170
                    },
                    "optional": false,
                    "computed": false,
                    "start": 163,
                    "end": 170
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 163,
                  "end": 172
                },
                "directive": null,
                "start": 163,
                "end": 173
              }
            ],
            "start": 154,
            "end": 175
          }
        ],
        "start": 148,
        "end": 177
      },
      "abstract": false,
      "declare": false,
      "start": 130,
      "end": 177
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 178
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 72
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 72
          },
          "importKind": "value",
          "start": 65,
          "end": 72
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 80,
        "end": 92
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 51,
      "end": 93
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 117
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 127
      },
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 142
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 145,
                  "end": 150
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 152
                },
                "optional": false,
                "computed": false,
                "start": 145,
                "end": 152
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 145,
              "end": 154
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 134,
            "end": 155
          }
        ],
        "start": 128,
        "end": 157
      },
      "abstract": false,
      "declare": false,
      "start": 110,
      "end": 157
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 158
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 72
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 72
          },
          "importKind": "value",
          "start": 65,
          "end": 72
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 80,
        "end": 92
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 51,
      "end": 93
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 117
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 127
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 143,
                      "end": 148
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 149,
                      "end": 150
                    },
                    "optional": false,
                    "computed": false,
                    "start": 143,
                    "end": 150
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 143,
                  "end": 152
                },
                "directive": null,
                "start": 143,
                "end": 153
              }
            ],
            "start": 134,
            "end": 155
          }
        ],
        "start": 128,
        "end": 157
      },
      "abstract": false,
      "declare": false,
      "start": 110,
      "end": 157
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 158
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 65
          },
          "start": 58,
          "end": 65
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 71,
        "end": 83
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 84
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 126
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 136
      },
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 151
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 154,
                  "end": 159
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 160,
                  "end": 161
                },
                "optional": false,
                "computed": false,
                "start": 154,
                "end": 161
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 154,
              "end": 163
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 143,
            "end": 164
          }
        ],
        "start": 137,
        "end": 166
      },
      "abstract": false,
      "declare": false,
      "start": 119,
      "end": 166
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 167
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 65
          },
          "start": 58,
          "end": 65
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 71,
        "end": 83
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 84
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 126
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 136
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 152,
                      "end": 157
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 158,
                      "end": 159
                    },
                    "optional": false,
                    "computed": false,
                    "start": 152,
                    "end": 159
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 152,
                  "end": 161
                },
                "directive": null,
                "start": 152,
                "end": 162
              }
            ],
            "start": 143,
            "end": 164
          }
        ],
        "start": 137,
        "end": 166
      },
      "abstract": false,
      "declare": false,
      "start": 119,
      "end": 166
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 167
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 70
          },
          "start": 63,
          "end": 70
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 76,
        "end": 88
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 51,
      "end": 89
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 113
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 123
      },
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 138
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 141,
                  "end": 146
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 147,
                  "end": 148
                },
                "optional": false,
                "computed": false,
                "start": 141,
                "end": 148
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 141,
              "end": 150
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 130,
            "end": 151
          }
        ],
        "start": 124,
        "end": 153
      },
      "abstract": false,
      "declare": false,
      "start": 106,
      "end": 153
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 154
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 70
          },
          "start": 63,
          "end": 70
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./external",
        "raw": "\"./external\"",
        "start": 76,
        "end": 88
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 51,
      "end": 89
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 113
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 123
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 139,
                      "end": 144
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 145,
                      "end": 146
                    },
                    "optional": false,
                    "computed": false,
                    "start": 139,
                    "end": 146
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 139,
                  "end": 148
                },
                "directive": null,
                "start": 139,
                "end": 149
              }
            ],
            "start": 130,
            "end": 151
          }
        ],
        "start": 124,
        "end": 153
      },
      "abstract": false,
      "declare": false,
      "start": 106,
      "end": 153
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 154
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 63
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnknownKeyword",
        "start": 66,
        "end": 73
      },
      "declare": false,
      "start": 51,
      "end": 74
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 98
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 108
      },
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 123
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 126,
                  "end": 131
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 133
                },
                "optional": false,
                "computed": false,
                "start": 126,
                "end": 133
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 126,
              "end": 135
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 115,
            "end": 136
          }
        ],
        "start": 109,
        "end": 138
      },
      "abstract": false,
      "declare": false,
      "start": 91,
      "end": 138
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 139
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 63
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnknownKeyword",
        "start": 66,
        "end": 73
      },
      "declare": false,
      "start": 51,
      "end": 74
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 98
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 108
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 124,
                      "end": 129
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 130,
                      "end": 131
                    },
                    "optional": false,
                    "computed": false,
                    "start": 124,
                    "end": 131
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 124,
                  "end": 133
                },
                "directive": null,
                "start": 124,
                "end": 134
              }
            ],
            "start": 115,
            "end": 136
          }
        ],
        "start": 109,
        "end": 138
      },
      "abstract": false,
      "declare": false,
      "start": 91,
      "end": 138
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 139
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 68
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 69,
        "end": 71
      },
      "declare": false,
      "start": 51,
      "end": 71
    },
    {
      "type": "EmptyStatement",
      "start": 71,
      "end": 72
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 96
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 106
      },
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 121
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 124,
                  "end": 129
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 130,
                  "end": 131
                },
                "optional": false,
                "computed": false,
                "start": 124,
                "end": 131
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 124,
              "end": 133
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 113,
            "end": 134
          }
        ],
        "start": 107,
        "end": 136
      },
      "abstract": false,
      "declare": false,
      "start": 89,
      "end": 136
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 137
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 68
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 69,
        "end": 71
      },
      "declare": false,
      "start": 51,
      "end": 71
    },
    {
      "type": "EmptyStatement",
      "start": 71,
      "end": 72
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 96
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 106
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 122,
                      "end": 127
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 128,
                      "end": 129
                    },
                    "optional": false,
                    "computed": false,
                    "start": 122,
                    "end": 129
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 122,
                  "end": 131
                },
                "directive": null,
                "start": 122,
                "end": 132
              }
            ],
            "start": 113,
            "end": 134
          }
        ],
        "start": 107,
        "end": 136
      },
      "abstract": false,
      "declare": false,
      "start": 89,
      "end": 136
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 137
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 76
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 85
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 88,
              "end": 95
            },
            "declare": false,
            "start": 79,
            "end": 96
          }
        ],
        "start": 77,
        "end": 98
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 51,
      "end": 98
    },
    {
      "type": "EmptyStatement",
      "start": 98,
      "end": 99
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 123
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 133
      },
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 148
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 151,
                  "end": 156
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 158
                },
                "optional": false,
                "computed": false,
                "start": 151,
                "end": 158
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 151,
              "end": 160
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 140,
            "end": 161
          }
        ],
        "start": 134,
        "end": 163
      },
      "abstract": false,
      "declare": false,
      "start": 116,
      "end": 163
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 164
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reflect",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 76
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 85
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 88,
              "end": 95
            },
            "declare": false,
            "start": 79,
            "end": 96
          }
        ],
        "start": 77,
        "end": 98
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 51,
      "end": 98
    },
    {
      "type": "EmptyStatement",
      "start": 98,
      "end": 99
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 123
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 133
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 149,
                      "end": 154
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 155,
                      "end": 156
                    },
                    "optional": false,
                    "computed": false,
                    "start": 149,
                    "end": 156
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 149,
                  "end": 158
                },
                "directive": null,
                "start": 149,
                "end": 159
              }
            ],
            "start": 140,
            "end": 161
          }
        ],
        "start": 134,
        "end": 163
      },
      "abstract": false,
      "declare": false,
      "start": 116,
      "end": 163
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 164
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ClassExpression",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reflect",
          "optional": false,
          "typeAnnotation": null,
          "start": 58,
          "end": 65
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 66,
          "end": 68
        },
        "abstract": false,
        "declare": false,
        "start": 52,
        "end": 68
      },
      "directive": null,
      "start": 51,
      "end": 70
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 94
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 104
      },
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 119
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 122,
                  "end": 127
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 128,
                  "end": 129
                },
                "optional": false,
                "computed": false,
                "start": 122,
                "end": 129
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 122,
              "end": 131
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 111,
            "end": 132
          }
        ],
        "start": 105,
        "end": 134
      },
      "abstract": false,
      "declare": false,
      "start": 87,
      "end": 134
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 135
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ClassExpression",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reflect",
          "optional": false,
          "typeAnnotation": null,
          "start": 58,
          "end": 65
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 66,
          "end": 68
        },
        "abstract": false,
        "declare": false,
        "start": 52,
        "end": 68
      },
      "directive": null,
      "start": 51,
      "end": 70
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 94
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 104
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 120,
                      "end": 125
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 126,
                      "end": 127
                    },
                    "optional": false,
                    "computed": false,
                    "start": 120,
                    "end": 127
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 120,
                  "end": 129
                },
                "directive": null,
                "start": 120,
                "end": 130
              }
            ],
            "start": 111,
            "end": 132
          }
        ],
        "start": 105,
        "end": 134
      },
      "abstract": false,
      "declare": false,
      "start": 87,
      "end": 134
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 135
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ClassExpression",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reflect",
          "optional": false,
          "typeAnnotation": null,
          "start": 58,
          "end": 65
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "StaticBlock",
              "body": [
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 129,
                    "end": 130
                  },
                  "typeParameters": null,
                  "superClass": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 139,
                    "end": 140
                  },
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
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 162,
                          "end": 163
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 166,
                              "end": 171
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "w",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 172,
                              "end": 173
                            },
                            "optional": false,
                            "computed": false,
                            "start": 166,
                            "end": 173
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 166,
                          "end": 175
                        },
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 155,
                        "end": 176
                      }
                    ],
                    "start": 141,
                    "end": 186
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 123,
                  "end": 186
                }
              ],
              "start": 106,
              "end": 192
            }
          ],
          "start": 66,
          "end": 194
        },
        "abstract": false,
        "declare": false,
        "start": 52,
        "end": 194
      },
      "directive": null,
      "start": 51,
      "end": 196
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 197
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ClassExpression",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reflect",
          "optional": false,
          "typeAnnotation": null,
          "start": 58,
          "end": 65
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "StaticBlock",
              "body": [
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 129,
                    "end": 130
                  },
                  "typeParameters": null,
                  "superClass": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 139,
                    "end": 140
                  },
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [
                      {
                        "type": "StaticBlock",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 164,
                                  "end": 169
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "w",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 170,
                                  "end": 171
                                },
                                "optional": false,
                                "computed": false,
                                "start": 164,
                                "end": 171
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 164,
                              "end": 173
                            },
                            "directive": null,
                            "start": 164,
                            "end": 174
                          }
                        ],
                        "start": 155,
                        "end": 176
                      }
                    ],
                    "start": 141,
                    "end": 186
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 123,
                  "end": 186
                }
              ],
              "start": 106,
              "end": 192
            }
          ],
          "start": 66,
          "end": 194
        },
        "abstract": false,
        "declare": false,
        "start": 52,
        "end": 194
      },
      "directive": null,
      "start": 51,
      "end": 196
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 197
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "FunctionExpression",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reflect",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 68
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 71,
          "end": 73
        },
        "expression": false,
        "start": 52,
        "end": 73
      },
      "directive": null,
      "start": 51,
      "end": 75
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 99
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 109
      },
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 124
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 127,
                  "end": 132
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 133,
                  "end": 134
                },
                "optional": false,
                "computed": false,
                "start": 127,
                "end": 134
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 127,
              "end": 136
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 116,
            "end": 137
          }
        ],
        "start": 110,
        "end": 139
      },
      "abstract": false,
      "declare": false,
      "start": 92,
      "end": 139
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 140
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "FunctionExpression",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reflect",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 68
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 71,
          "end": 73
        },
        "expression": false,
        "start": 52,
        "end": 73
      },
      "directive": null,
      "start": 51,
      "end": 75
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 99
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 109
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 125,
                      "end": 130
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 131,
                      "end": 132
                    },
                    "optional": false,
                    "computed": false,
                    "start": 125,
                    "end": 132
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 125,
                  "end": 134
                },
                "directive": null,
                "start": 125,
                "end": 135
              }
            ],
            "start": 116,
            "end": 137
          }
        ],
        "start": 110,
        "end": 139
      },
      "abstract": false,
      "declare": false,
      "start": 92,
      "end": 139
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 140
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "FunctionExpression",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reflect",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 68
        },
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
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 118
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 128
              },
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
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 146,
                      "end": 147
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 150,
                          "end": 155
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "w",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 156,
                          "end": 157
                        },
                        "optional": false,
                        "computed": false,
                        "start": 150,
                        "end": 157
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 150,
                      "end": 159
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 139,
                    "end": 160
                  }
                ],
                "start": 129,
                "end": 166
              },
              "abstract": false,
              "declare": false,
              "start": 111,
              "end": 166
            }
          ],
          "start": 71,
          "end": 168
        },
        "expression": false,
        "start": 52,
        "end": 168
      },
      "directive": null,
      "start": 51,
      "end": 170
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 171
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "body": null,
              "expression": false,
              "start": 37,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 27,
        "end": 50
      },
      "abstract": false,
      "declare": true,
      "start": 11,
      "end": 50
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "FunctionExpression",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reflect",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 68
        },
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
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 118
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 128
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "StaticBlock",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 148,
                              "end": 153
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "w",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 154,
                              "end": 155
                            },
                            "optional": false,
                            "computed": false,
                            "start": 148,
                            "end": 155
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 148,
                          "end": 157
                        },
                        "directive": null,
                        "start": 148,
                        "end": 158
                      }
                    ],
                    "start": 139,
                    "end": 160
                  }
                ],
                "start": 129,
                "end": 166
              },
              "abstract": false,
              "declare": false,
              "start": 111,
              "end": 166
            }
          ],
          "start": 71,
          "end": 168
        },
        "expression": false,
        "start": 52,
        "end": 168
      },
      "directive": null,
      "start": 51,
      "end": 170
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 170
}
```
