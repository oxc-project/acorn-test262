__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 521,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 208,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 13,
        "name": "Events",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 208,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 20,
            "end": 87,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 27,
              "end": 87,
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 53,
                "name": "ListenerCallback",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 54,
                "end": 87,
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 64,
                    "end": 81,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 65,
                        "end": 74,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 70,
                          "end": 74,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 71,
                            "end": 74
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 75,
                      "end": 80,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 76,
                        "end": 80
                      }
                    }
                  }
                ]
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
            "start": 92,
            "end": 206,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 99,
              "end": 206,
              "id": {
                "type": "Identifier",
                "start": 105,
                "end": 117,
                "name": "EventEmitter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 118,
                "end": 206,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 129,
                    "end": 200,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 147,
                      "name": "addListener",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 147,
                      "end": 200,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 148,
                          "end": 159,
                          "name": "type",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 152,
                            "end": 159,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 153,
                              "end": 159
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 161,
                          "end": 186,
                          "name": "listener",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 169,
                            "end": 186,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 170,
                              "end": 186,
                              "typeName": {
                                "type": "Identifier",
                                "start": 170,
                                "end": 186,
                                "name": "ListenerCallback",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 188,
                        "end": 200,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 210,
      "end": 521,
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 225,
        "name": "Consumer",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 226,
        "end": 521,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 232,
            "end": 519,
            "id": {
              "type": "Identifier",
              "start": 238,
              "end": 259,
              "name": "EventEmitterConsummer",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 260,
              "end": 519,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 270,
                  "end": 324,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 270,
                    "end": 281,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 282,
                    "end": 324,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "TSParameterProperty",
                        "start": 283,
                        "end": 319,
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 291,
                          "end": 319,
                          "name": "emitter",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 298,
                            "end": 319,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 300,
                              "end": 319,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 300,
                                "end": 319,
                                "left": {
                                  "type": "Identifier",
                                  "start": 300,
                                  "end": 306,
                                  "name": "Events",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 307,
                                  "end": 319,
                                  "name": "EventEmitter",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "readonly": false,
                        "static": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 321,
                      "end": 324,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 334,
                  "end": 468,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 342,
                    "end": 350,
                    "name": "register",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 350,
                    "end": 468,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 353,
                      "end": 468,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 367,
                          "end": 458,
                          "expression": {
                            "type": "CallExpression",
                            "start": 367,
                            "end": 457,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 367,
                              "end": 391,
                              "object": {
                                "type": "MemberExpression",
                                "start": 367,
                                "end": 379,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 367,
                                  "end": 371
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 372,
                                  "end": 379,
                                  "name": "emitter",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 380,
                                "end": 391,
                                "name": "addListener",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 392,
                                "end": 400,
                                "value": "change",
                                "raw": "'change'"
                              },
                              {
                                "type": "ArrowFunctionExpression",
                                "start": 402,
                                "end": 456,
                                "id": null,
                                "expression": false,
                                "generator": false,
                                "async": false,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 403,
                                    "end": 404,
                                    "name": "e",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 409,
                                  "end": 456,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 427,
                                      "end": 442,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 427,
                                        "end": 441,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 427,
                                          "end": 439,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 427,
                                            "end": 431
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 432,
                                            "end": 439,
                                            "name": "changed",
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
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "directive": null
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 484,
                  "end": 513,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 492,
                    "end": 499,
                    "name": "changed",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 499,
                    "end": 513,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 502,
                      "end": 513,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
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
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
