__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 71
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 73
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 92,
                        "end": 96
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "start": 98,
                            "end": 101
                          },
                          "start": 98,
                          "end": 103
                        },
                        "start": 96,
                        "end": 103
                      },
                      "value": null,
                      "start": 89,
                      "end": 103
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 106,
                      "end": 108
                    },
                    "start": 104,
                    "end": 108
                  },
                  "start": 84,
                  "end": 108
                }
              ],
              "start": 82,
              "end": 110
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 72,
            "end": 110
          }
        ],
        "start": 71,
        "end": 111
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "superclass",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 124,
                "end": 125
              },
              "typeArguments": null,
              "start": 124,
              "end": 125
            },
            "start": 122,
            "end": 125
          },
          "start": 112,
          "end": 125
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "superclass",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 162
              },
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
                      "name": "validationTarget",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 173,
                      "end": 189
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "HTMLElement",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 193,
                            "end": 204
                          },
                          "typeArguments": null,
                          "start": 193,
                          "end": 204
                        },
                        "start": 191,
                        "end": 204
                      },
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
                                  "name": "document",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 220,
                                  "end": 228
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "createElement",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 229,
                                  "end": 242
                                },
                                "optional": false,
                                "computed": false,
                                "start": 220,
                                "end": 242
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "input",
                                  "raw": "\"input\"",
                                  "start": 243,
                                  "end": 250
                                }
                              ],
                              "optional": false,
                              "start": 220,
                              "end": 251
                            },
                            "start": 213,
                            "end": 252
                          }
                        ],
                        "start": 205,
                        "end": 258
                      },
                      "expression": false,
                      "start": 189,
                      "end": 258
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 169,
                    "end": 258
                  }
                ],
                "start": 163,
                "end": 262
              },
              "abstract": false,
              "declare": false,
              "start": 138,
              "end": 262
            },
            "start": 131,
            "end": 263
          }
        ],
        "start": 127,
        "end": 265
      },
      "expression": false,
      "start": 57,
      "end": 265
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 273,
        "end": 282
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
              "name": "validationTarget",
              "optional": false,
              "typeAnnotation": null,
              "start": 291,
              "end": 307
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "HTMLElement",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 311,
                    "end": 322
                  },
                  "typeArguments": null,
                  "start": 311,
                  "end": 322
                },
                "start": 309,
                "end": 322
              },
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
                          "name": "document",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 336,
                          "end": 344
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "createElement",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 345,
                          "end": 358
                        },
                        "optional": false,
                        "computed": false,
                        "start": 336,
                        "end": 358
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "div",
                          "raw": "\"div\"",
                          "start": 359,
                          "end": 364
                        }
                      ],
                      "optional": false,
                      "start": 336,
                      "end": 365
                    },
                    "start": 329,
                    "end": 366
                  }
                ],
                "start": 323,
                "end": 370
              },
              "expression": false,
              "start": 307,
              "end": 370
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 287,
            "end": 370
          }
        ],
        "start": 283,
        "end": 372
      },
      "abstract": false,
      "declare": false,
      "start": 267,
      "end": 372
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 380,
        "end": 387
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mixin",
          "optional": false,
          "typeAnnotation": null,
          "start": 396,
          "end": 401
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "BaseClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 402,
            "end": 411
          }
        ],
        "optional": false,
        "start": 396,
        "end": 412
      },
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
              "name": "validationTarget",
              "optional": false,
              "typeAnnotation": null,
              "start": 421,
              "end": 437
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "HTMLElement",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 441,
                    "end": 452
                  },
                  "typeArguments": null,
                  "start": 441,
                  "end": 452
                },
                "start": 439,
                "end": 452
              },
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
                          "name": "document",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 466,
                          "end": 474
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "createElement",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 475,
                          "end": 488
                        },
                        "optional": false,
                        "computed": false,
                        "start": 466,
                        "end": 488
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "select",
                          "raw": "\"select\"",
                          "start": 489,
                          "end": 497
                        }
                      ],
                      "optional": false,
                      "start": 466,
                      "end": 498
                    },
                    "start": 459,
                    "end": 499
                  }
                ],
                "start": 453,
                "end": 503
              },
              "expression": false,
              "start": 437,
              "end": 503
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 417,
            "end": 503
          }
        ],
        "start": 413,
        "end": 505
      },
      "abstract": false,
      "declare": false,
      "start": 374,
      "end": 505
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 505
}
```
