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
        "decorators": [],
        "name": "Events",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "ListenerCallback",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
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
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 70,
                          "end": 74,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 71,
                            "end": 74
                          }
                        }
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
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 92,
            "end": 206,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 99,
              "end": 206,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 105,
                "end": 117,
                "decorators": [],
                "name": "EventEmitter",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 118,
                "end": 206,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 129,
                    "end": 200,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 147,
                      "decorators": [],
                      "name": "addListener",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 147,
                      "end": 200,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 148,
                          "end": 159,
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 152,
                            "end": 159,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 153,
                              "end": 159
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 161,
                          "end": 186,
                          "decorators": [],
                          "name": "listener",
                          "optional": false,
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
                                "decorators": [],
                                "name": "ListenerCallback",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 188,
                        "end": 200,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
        "decorators": [],
        "name": "Consumer",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 238,
              "end": 259,
              "decorators": [],
              "name": "EventEmitterConsummer",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 260,
              "end": 519,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 270,
                  "end": 324,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 270,
                    "end": 281,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 282,
                    "end": 324,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
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
                          "decorators": [],
                          "name": "emitter",
                          "optional": false,
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
                                  "decorators": [],
                                  "name": "Events",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 307,
                                  "end": 319,
                                  "decorators": [],
                                  "name": "EventEmitter",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 321,
                      "end": 324,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 334,
                  "end": 468,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 342,
                    "end": 350,
                    "decorators": [],
                    "name": "register",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 350,
                    "end": 468,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                                  "decorators": [],
                                  "name": "emitter",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 380,
                                "end": 391,
                                "decorators": [],
                                "name": "addListener",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
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
                                "expression": false,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 403,
                                    "end": 404,
                                    "decorators": [],
                                    "name": "e",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "returnType": null,
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
                                            "decorators": [],
                                            "name": "changed",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false
                                      },
                                      "directive": null
                                    }
                                  ]
                                },
                                "id": null,
                                "generator": false
                              }
                            ],
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 484,
                  "end": 513,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 492,
                    "end": 499,
                    "decorators": [],
                    "name": "changed",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 499,
                    "end": 513,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 502,
                      "end": 513,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                }
              ]
            },
            "abstract": false,
            "declare": false
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
