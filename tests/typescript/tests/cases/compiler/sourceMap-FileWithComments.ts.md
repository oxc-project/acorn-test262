__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IPoint",
        "optional": false,
        "typeAnnotation": null,
        "start": 23,
        "end": 29
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getDist",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 43
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 47,
                "end": 53
              },
              "start": 45,
              "end": 53
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 36,
            "end": 54
          }
        ],
        "start": 30,
        "end": 56
      },
      "declare": false,
      "start": 13,
      "end": 56
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shapes",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 84
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
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 118,
                "end": 123
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IPoint",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 135,
                    "end": 141
                  },
                  "typeArguments": null,
                  "start": 135,
                  "end": 141
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 175,
                      "end": 186
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 197,
                                "end": 203
                              },
                              "start": 195,
                              "end": 203
                            },
                            "start": 194,
                            "end": 203
                          },
                          "readonly": false,
                          "static": false,
                          "start": 187,
                          "end": 203
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 215,
                                "end": 221
                              },
                              "start": 213,
                              "end": 221
                            },
                            "start": 212,
                            "end": 221
                          },
                          "readonly": false,
                          "static": false,
                          "start": 205,
                          "end": 221
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 223,
                        "end": 226
                      },
                      "expression": false,
                      "start": 186,
                      "end": 226
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 175,
                    "end": 226
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getDist",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 263,
                      "end": 270
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Math",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 282,
                                  "end": 286
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "sqrt",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 287,
                                  "end": 291
                                },
                                "optional": false,
                                "computed": false,
                                "start": 282,
                                "end": 291
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 292,
                                        "end": 296
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 297,
                                        "end": 298
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 292,
                                      "end": 298
                                    },
                                    "operator": "*",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 301,
                                        "end": 305
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 306,
                                        "end": 307
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 301,
                                      "end": 307
                                    },
                                    "start": 292,
                                    "end": 307
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 310,
                                        "end": 314
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 315,
                                        "end": 316
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 310,
                                      "end": 316
                                    },
                                    "operator": "*",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 319,
                                        "end": 323
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 324,
                                        "end": 325
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 319,
                                      "end": 325
                                    },
                                    "start": 310,
                                    "end": 325
                                  },
                                  "start": 292,
                                  "end": 325
                                }
                              ],
                              "optional": false,
                              "start": 282,
                              "end": 326
                            },
                            "start": 275,
                            "end": 327
                          }
                        ],
                        "start": 273,
                        "end": 329
                      },
                      "expression": false,
                      "start": 270,
                      "end": 329
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 263,
                    "end": 329
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "origin",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 371,
                      "end": 377
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 384,
                        "end": 389
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 390,
                          "end": 391
                        },
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 393,
                          "end": 394
                        }
                      ],
                      "start": 380,
                      "end": 395
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 364,
                    "end": 396
                  }
                ],
                "start": 142,
                "end": 402
              },
              "abstract": false,
              "declare": false,
              "start": 112,
              "end": 402
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 105,
            "end": 402
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 448,
                  "end": 449
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 452,
                  "end": 454
                },
                "definite": false,
                "start": 448,
                "end": 454
              }
            ],
            "declare": false,
            "start": 444,
            "end": 455
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 477,
                "end": 480
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
                "start": 483,
                "end": 490
              },
              "expression": false,
              "start": 468,
              "end": 490
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 461,
            "end": 490
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 570,
                  "end": 571
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 574,
                  "end": 576
                },
                "definite": false,
                "start": 570,
                "end": 576
              }
            ],
            "declare": false,
            "start": 566,
            "end": 577
          }
        ],
        "start": 85,
        "end": 579
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 68,
      "end": 579
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
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPoint",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 610,
                  "end": 616
                },
                "typeArguments": null,
                "start": 610,
                "end": 616
              },
              "start": 608,
              "end": 616
            },
            "start": 607,
            "end": 616
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shapes",
                "optional": false,
                "typeAnnotation": null,
                "start": 623,
                "end": 629
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 630,
                "end": 635
              },
              "optional": false,
              "computed": false,
              "start": 623,
              "end": 635
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 636,
                "end": 637
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 639,
                "end": 640
              }
            ],
            "start": 619,
            "end": 641
          },
          "definite": false,
          "start": 607,
          "end": 641
        }
      ],
      "declare": false,
      "start": 603,
      "end": 642
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
            "name": "dist",
            "optional": false,
            "typeAnnotation": null,
            "start": 647,
            "end": 651
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 654,
                "end": 655
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getDist",
                "optional": false,
                "typeAnnotation": null,
                "start": 656,
                "end": 663
              },
              "optional": false,
              "computed": false,
              "start": 654,
              "end": 663
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 654,
            "end": 665
          },
          "definite": false,
          "start": 647,
          "end": 665
        }
      ],
      "declare": false,
      "start": 643,
      "end": 666
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 13,
  "end": 666
}
```
