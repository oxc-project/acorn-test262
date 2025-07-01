__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Events",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ListenerCallback",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 53
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 71,
                            "end": 74
                          },
                          "start": 70,
                          "end": 74
                        },
                        "start": 65,
                        "end": 74
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 76,
                        "end": 80
                      },
                      "start": 75,
                      "end": 80
                    },
                    "start": 64,
                    "end": 81
                  }
                ],
                "start": 54,
                "end": 87
              },
              "declare": false,
              "start": 27,
              "end": 87
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 20,
            "end": 87
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "EventEmitter",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 117
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
                      "name": "addListener",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 136,
                      "end": 147
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 153,
                              "end": 159
                            },
                            "start": 152,
                            "end": 159
                          },
                          "start": 148,
                          "end": 159
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "listener",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ListenerCallback",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 170,
                                "end": 186
                              },
                              "typeArguments": null,
                              "start": 170,
                              "end": 186
                            },
                            "start": 169,
                            "end": 186
                          },
                          "start": 161,
                          "end": 186
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 188,
                        "end": 200
                      },
                      "expression": false,
                      "start": 147,
                      "end": 200
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 129,
                    "end": 200
                  }
                ],
                "start": 118,
                "end": 206
              },
              "abstract": false,
              "declare": false,
              "start": 99,
              "end": 206
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 92,
            "end": 206
          }
        ],
        "start": 14,
        "end": 208
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 208
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Consumer",
        "optional": false,
        "typeAnnotation": null,
        "start": 217,
        "end": 225
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "EventEmitterConsummer",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 259
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
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 270,
                    "end": 281
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
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "emitter",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Events",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 300,
                                  "end": 306
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "EventEmitter",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 307,
                                  "end": 319
                                },
                                "start": 300,
                                "end": 319
                              },
                              "typeArguments": null,
                              "start": 300,
                              "end": 319
                            },
                            "start": 298,
                            "end": 319
                          },
                          "start": 291,
                          "end": 319
                        },
                        "readonly": false,
                        "static": false,
                        "start": 283,
                        "end": 319
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 321,
                      "end": 324
                    },
                    "expression": false,
                    "start": 282,
                    "end": 324
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 270,
                  "end": 324
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "register",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 342,
                    "end": 350
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
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 367,
                                  "end": 371
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "emitter",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 372,
                                  "end": 379
                                },
                                "optional": false,
                                "computed": false,
                                "start": 367,
                                "end": 379
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "addListener",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 380,
                                "end": 391
                              },
                              "optional": false,
                              "computed": false,
                              "start": 367,
                              "end": 391
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "change",
                                "raw": "'change'",
                                "start": 392,
                                "end": 400
                              },
                              {
                                "type": "ArrowFunctionExpression",
                                "expression": false,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "e",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 403,
                                    "end": 404
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 427,
                                            "end": 431
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "changed",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 432,
                                            "end": 439
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 427,
                                          "end": 439
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 427,
                                        "end": 441
                                      },
                                      "directive": null,
                                      "start": 427,
                                      "end": 442
                                    }
                                  ],
                                  "start": 409,
                                  "end": 456
                                },
                                "id": null,
                                "generator": false,
                                "start": 402,
                                "end": 456
                              }
                            ],
                            "optional": false,
                            "start": 367,
                            "end": 457
                          },
                          "directive": null,
                          "start": 367,
                          "end": 458
                        }
                      ],
                      "start": 353,
                      "end": 468
                    },
                    "expression": false,
                    "start": 350,
                    "end": 468
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 334,
                  "end": 468
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "changed",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 492,
                    "end": 499
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
                      "body": [],
                      "start": 502,
                      "end": 513
                    },
                    "expression": false,
                    "start": 499,
                    "end": 513
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 484,
                  "end": 513
                }
              ],
              "start": 260,
              "end": 519
            },
            "abstract": false,
            "declare": false,
            "start": 232,
            "end": 519
          }
        ],
        "start": 226,
        "end": 521
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 210,
      "end": 521
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 521
}
```
