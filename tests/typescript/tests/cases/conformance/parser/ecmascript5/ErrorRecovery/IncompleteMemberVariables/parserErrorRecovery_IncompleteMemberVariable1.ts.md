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
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "con",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 160,
                      "end": 163
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "hello",
                          "raw": "\"hello\"",
                          "start": 165,
                          "end": 172
                        },
                        "start": 165,
                        "end": 172
                      },
                      "start": 163,
                      "end": 172
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
                    "start": 153,
                    "end": 173
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
                      "start": 205,
                      "end": 216
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
                                "start": 228,
                                "end": 234
                              },
                              "start": 226,
                              "end": 234
                            },
                            "start": 225,
                            "end": 234
                          },
                          "readonly": false,
                          "static": false,
                          "start": 218,
                          "end": 234
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
                                "start": 246,
                                "end": 252
                              },
                              "start": 244,
                              "end": 252
                            },
                            "start": 243,
                            "end": 252
                          },
                          "readonly": false,
                          "static": false,
                          "start": 236,
                          "end": 252
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 254,
                        "end": 257
                      },
                      "expression": false,
                      "start": 217,
                      "end": 257
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 205,
                    "end": 257
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
                      "start": 294,
                      "end": 301
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
                                  "start": 313,
                                  "end": 317
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "sqrt",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 318,
                                  "end": 322
                                },
                                "optional": false,
                                "computed": false,
                                "start": 313,
                                "end": 322
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
                                        "start": 323,
                                        "end": 327
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 328,
                                        "end": 329
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 323,
                                      "end": 329
                                    },
                                    "operator": "*",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 332,
                                        "end": 336
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 337,
                                        "end": 338
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 332,
                                      "end": 338
                                    },
                                    "start": 323,
                                    "end": 338
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 341,
                                        "end": 345
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 346,
                                        "end": 347
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 341,
                                      "end": 347
                                    },
                                    "operator": "*",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 350,
                                        "end": 354
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 355,
                                        "end": 356
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 350,
                                      "end": 356
                                    },
                                    "start": 341,
                                    "end": 356
                                  },
                                  "start": 323,
                                  "end": 356
                                }
                              ],
                              "optional": false,
                              "start": 313,
                              "end": 357
                            },
                            "start": 306,
                            "end": 358
                          }
                        ],
                        "start": 304,
                        "end": 360
                      },
                      "expression": false,
                      "start": 301,
                      "end": 360
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 294,
                    "end": 360
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
                      "start": 402,
                      "end": 408
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
                        "start": 415,
                        "end": 420
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 421,
                          "end": 422
                        },
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 424,
                          "end": 425
                        }
                      ],
                      "start": 411,
                      "end": 426
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 395,
                    "end": 427
                  }
                ],
                "start": 142,
                "end": 433
              },
              "abstract": false,
              "declare": false,
              "start": 112,
              "end": 433
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 105,
            "end": 433
          }
        ],
        "start": 85,
        "end": 436
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 68,
      "end": 436
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
                  "start": 464,
                  "end": 470
                },
                "typeArguments": null,
                "start": 464,
                "end": 470
              },
              "start": 462,
              "end": 470
            },
            "start": 461,
            "end": 470
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
                "start": 477,
                "end": 483
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 484,
                "end": 489
              },
              "optional": false,
              "computed": false,
              "start": 477,
              "end": 489
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 490,
                "end": 491
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 493,
                "end": 494
              }
            ],
            "start": 473,
            "end": 495
          },
          "definite": false,
          "start": 461,
          "end": 495
        }
      ],
      "declare": false,
      "start": 457,
      "end": 496
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
            "start": 501,
            "end": 505
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
                "start": 508,
                "end": 509
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getDist",
                "optional": false,
                "typeAnnotation": null,
                "start": 510,
                "end": 517
              },
              "optional": false,
              "computed": false,
              "start": 508,
              "end": 517
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 508,
            "end": 519
          },
          "definite": false,
          "start": 501,
          "end": 519
        }
      ],
      "declare": false,
      "start": 497,
      "end": 520
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 13,
  "end": 520
}
```
