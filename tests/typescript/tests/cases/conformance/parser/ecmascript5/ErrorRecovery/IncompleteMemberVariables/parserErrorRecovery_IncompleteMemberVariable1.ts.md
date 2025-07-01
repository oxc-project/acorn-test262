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
        "start": 75,
        "end": 81
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
                "start": 115,
                "end": 120
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
                    "start": 132,
                    "end": 138
                  },
                  "typeArguments": null,
                  "start": 132,
                  "end": 138
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "con",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 157,
                      "end": 160
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "hello",
                          "raw": "\"hello\"",
                          "start": 162,
                          "end": 169
                        },
                        "start": 162,
                        "end": 169
                      },
                      "start": 160,
                      "end": 169
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 150,
                    "end": 170
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
                      "start": 202,
                      "end": 213
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
                                "start": 225,
                                "end": 231
                              },
                              "start": 223,
                              "end": 231
                            },
                            "start": 222,
                            "end": 231
                          },
                          "readonly": false,
                          "static": false,
                          "start": 215,
                          "end": 231
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
                                "start": 243,
                                "end": 249
                              },
                              "start": 241,
                              "end": 249
                            },
                            "start": 240,
                            "end": 249
                          },
                          "readonly": false,
                          "static": false,
                          "start": 233,
                          "end": 249
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 251,
                        "end": 254
                      },
                      "expression": false,
                      "start": 214,
                      "end": 254
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 202,
                    "end": 254
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
                      "start": 291,
                      "end": 298
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
                                  "start": 310,
                                  "end": 314
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "sqrt",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 315,
                                  "end": 319
                                },
                                "optional": false,
                                "computed": false,
                                "start": 310,
                                "end": 319
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
                                        "start": 320,
                                        "end": 324
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 325,
                                        "end": 326
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 320,
                                      "end": 326
                                    },
                                    "operator": "*",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 329,
                                        "end": 333
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 334,
                                        "end": 335
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 329,
                                      "end": 335
                                    },
                                    "start": 320,
                                    "end": 335
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 338,
                                        "end": 342
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 343,
                                        "end": 344
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 338,
                                      "end": 344
                                    },
                                    "operator": "*",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 347,
                                        "end": 351
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 352,
                                        "end": 353
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 347,
                                      "end": 353
                                    },
                                    "start": 338,
                                    "end": 353
                                  },
                                  "start": 320,
                                  "end": 353
                                }
                              ],
                              "optional": false,
                              "start": 310,
                              "end": 354
                            },
                            "start": 303,
                            "end": 355
                          }
                        ],
                        "start": 301,
                        "end": 357
                      },
                      "expression": false,
                      "start": 298,
                      "end": 357
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 291,
                    "end": 357
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
                      "start": 399,
                      "end": 405
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
                        "start": 412,
                        "end": 417
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 418,
                          "end": 419
                        },
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 421,
                          "end": 422
                        }
                      ],
                      "start": 408,
                      "end": 423
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 392,
                    "end": 424
                  }
                ],
                "start": 139,
                "end": 430
              },
              "abstract": false,
              "declare": false,
              "start": 109,
              "end": 430
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 102,
            "end": 430
          }
        ],
        "start": 82,
        "end": 433
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 68,
      "end": 433
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
                  "start": 461,
                  "end": 467
                },
                "typeArguments": null,
                "start": 461,
                "end": 467
              },
              "start": 459,
              "end": 467
            },
            "start": 458,
            "end": 467
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
                "start": 474,
                "end": 480
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 481,
                "end": 486
              },
              "optional": false,
              "computed": false,
              "start": 474,
              "end": 486
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 487,
                "end": 488
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 490,
                "end": 491
              }
            ],
            "start": 470,
            "end": 492
          },
          "definite": false,
          "start": 458,
          "end": 492
        }
      ],
      "declare": false,
      "start": 454,
      "end": 493
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
            "start": 498,
            "end": 502
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
                "start": 505,
                "end": 506
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getDist",
                "optional": false,
                "typeAnnotation": null,
                "start": 507,
                "end": 514
              },
              "optional": false,
              "computed": false,
              "start": 505,
              "end": 514
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 505,
            "end": 516
          },
          "definite": false,
          "start": 498,
          "end": 516
        }
      ],
      "declare": false,
      "start": 494,
      "end": 517
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 13,
  "end": 517
}
```
