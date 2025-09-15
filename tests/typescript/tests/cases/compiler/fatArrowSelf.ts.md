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
        "start": 10,
        "end": 16
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
                "start": 40,
                "end": 56
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
                            "start": 74,
                            "end": 77
                          },
                          "start": 73,
                          "end": 77
                        },
                        "start": 68,
                        "end": 77
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 79,
                        "end": 83
                      },
                      "start": 78,
                      "end": 83
                    },
                    "start": 67,
                    "end": 84
                  }
                ],
                "start": 57,
                "end": 90
              },
              "declare": false,
              "start": 30,
              "end": 90
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 23,
            "end": 90
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
                "start": 108,
                "end": 120
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
                      "start": 139,
                      "end": 150
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
                              "start": 156,
                              "end": 162
                            },
                            "start": 155,
                            "end": 162
                          },
                          "start": 151,
                          "end": 162
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
                                "start": 173,
                                "end": 189
                              },
                              "typeArguments": null,
                              "start": 173,
                              "end": 189
                            },
                            "start": 172,
                            "end": 189
                          },
                          "start": 164,
                          "end": 189
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 191,
                        "end": 203
                      },
                      "expression": false,
                      "start": 150,
                      "end": 203
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 132,
                    "end": 203
                  }
                ],
                "start": 121,
                "end": 209
              },
              "abstract": false,
              "declare": false,
              "start": 102,
              "end": 209
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 95,
            "end": 209
          }
        ],
        "start": 17,
        "end": 211
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 211
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Consumer",
        "optional": false,
        "typeAnnotation": null,
        "start": 223,
        "end": 231
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
              "start": 244,
              "end": 265
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
                    "start": 276,
                    "end": 287
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
                                  "start": 306,
                                  "end": 312
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "EventEmitter",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 313,
                                  "end": 325
                                },
                                "start": 306,
                                "end": 325
                              },
                              "typeArguments": null,
                              "start": 306,
                              "end": 325
                            },
                            "start": 304,
                            "end": 325
                          },
                          "start": 297,
                          "end": 325
                        },
                        "readonly": false,
                        "static": false,
                        "start": 289,
                        "end": 325
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 327,
                      "end": 330
                    },
                    "expression": false,
                    "start": 288,
                    "end": 330
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 276,
                  "end": 330
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
                    "start": 348,
                    "end": 356
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
                                  "start": 373,
                                  "end": 377
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "emitter",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 378,
                                  "end": 385
                                },
                                "optional": false,
                                "computed": false,
                                "start": 373,
                                "end": 385
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "addListener",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 386,
                                "end": 397
                              },
                              "optional": false,
                              "computed": false,
                              "start": 373,
                              "end": 397
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "change",
                                "raw": "'change'",
                                "start": 398,
                                "end": 406
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
                                    "start": 409,
                                    "end": 410
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
                                            "start": 433,
                                            "end": 437
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "changed",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 438,
                                            "end": 445
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 433,
                                          "end": 445
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 433,
                                        "end": 447
                                      },
                                      "directive": null,
                                      "start": 433,
                                      "end": 448
                                    }
                                  ],
                                  "start": 415,
                                  "end": 462
                                },
                                "id": null,
                                "generator": false,
                                "start": 408,
                                "end": 462
                              }
                            ],
                            "optional": false,
                            "start": 373,
                            "end": 463
                          },
                          "directive": null,
                          "start": 373,
                          "end": 464
                        }
                      ],
                      "start": 359,
                      "end": 474
                    },
                    "expression": false,
                    "start": 356,
                    "end": 474
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 340,
                  "end": 474
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
                    "start": 498,
                    "end": 505
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
                      "start": 508,
                      "end": 519
                    },
                    "expression": false,
                    "start": 505,
                    "end": 519
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 490,
                  "end": 519
                }
              ],
              "start": 266,
              "end": 525
            },
            "abstract": false,
            "declare": false,
            "start": 238,
            "end": 525
          }
        ],
        "start": 232,
        "end": 527
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 213,
      "end": 527
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 527
}
```
