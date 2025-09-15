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
        "name": "EndGate",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 17
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
                "name": "ICloneable",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 51
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
                      "name": "Clone",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 62,
                      "end": 67
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 71,
                        "end": 74
                      },
                      "start": 69,
                      "end": 74
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 62,
                    "end": 75
                  }
                ],
                "start": 52,
                "end": 81
              },
              "declare": false,
              "start": 31,
              "end": 81
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 24,
            "end": 81
          }
        ],
        "start": 18,
        "end": 83
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 83
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Number",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 101
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "EndGate",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 117
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ICloneable",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 128
            },
            "optional": false,
            "computed": false,
            "start": 110,
            "end": 128
          },
          "typeArguments": null,
          "start": 110,
          "end": 128
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 129,
        "end": 132
      },
      "declare": false,
      "start": 85,
      "end": 132
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "EndGate",
          "optional": false,
          "typeAnnotation": null,
          "start": 144,
          "end": 151
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Tweening",
          "optional": false,
          "typeAnnotation": null,
          "start": 152,
          "end": 160
        },
        "start": 144,
        "end": 160
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
                "name": "Tween",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 185
              },
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
                      "start": 186,
                      "end": 187
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ICloneable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 196,
                        "end": 206
                      },
                      "typeArguments": null,
                      "start": 196,
                      "end": 206
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 186,
                    "end": 206
                  }
                ],
                "start": 185,
                "end": 207
              },
              "superClass": null,
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
                      "name": "_from",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 225,
                      "end": 230
                    },
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
                          "start": 232,
                          "end": 233
                        },
                        "typeArguments": null,
                        "start": 232,
                        "end": 233
                      },
                      "start": 230,
                      "end": 233
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 217,
                    "end": 234
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
                      "start": 244,
                      "end": 255
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
                          "name": "from",
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
                                "start": 262,
                                "end": 263
                              },
                              "typeArguments": null,
                              "start": 262,
                              "end": 263
                            },
                            "start": 260,
                            "end": 263
                          },
                          "start": 256,
                          "end": 263
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 279,
                                  "end": 283
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_from",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 284,
                                  "end": 289
                                },
                                "optional": false,
                                "computed": false,
                                "start": 279,
                                "end": 289
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "from",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 292,
                                    "end": 296
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Clone",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 297,
                                    "end": 302
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 292,
                                  "end": 302
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 292,
                                "end": 304
                              },
                              "start": 279,
                              "end": 304
                            },
                            "directive": null,
                            "start": 279,
                            "end": 305
                          }
                        ],
                        "start": 265,
                        "end": 315
                      },
                      "expression": false,
                      "start": 255,
                      "end": 315
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 244,
                    "end": 315
                  }
                ],
                "start": 207,
                "end": 321
              },
              "abstract": false,
              "declare": false,
              "start": 174,
              "end": 321
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 167,
            "end": 321
          }
        ],
        "start": 161,
        "end": 323
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 134,
      "end": 323
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "EndGate",
          "optional": false,
          "typeAnnotation": null,
          "start": 335,
          "end": 342
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Tweening",
          "optional": false,
          "typeAnnotation": null,
          "start": 343,
          "end": 351
        },
        "start": 335,
        "end": 351
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
                "name": "NumberTween",
                "optional": false,
                "typeAnnotation": null,
                "start": 371,
                "end": 382
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Tween",
                "optional": false,
                "typeAnnotation": null,
                "start": 391,
                "end": 396
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 397,
                      "end": 403
                    },
                    "typeArguments": null,
                    "start": 397,
                    "end": 403
                  }
                ],
                "start": 396,
                "end": 404
              },
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
                      "start": 414,
                      "end": 425
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
                          "name": "from",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 432,
                              "end": 438
                            },
                            "start": 430,
                            "end": 438
                          },
                          "start": 426,
                          "end": 438
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
                                "type": "Super",
                                "start": 454,
                                "end": 459
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "from",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 460,
                                  "end": 464
                                }
                              ],
                              "optional": false,
                              "start": 454,
                              "end": 465
                            },
                            "directive": null,
                            "start": 454,
                            "end": 466
                          }
                        ],
                        "start": 440,
                        "end": 476
                      },
                      "expression": false,
                      "start": 425,
                      "end": 476
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 414,
                    "end": 476
                  }
                ],
                "start": 404,
                "end": 482
              },
              "abstract": false,
              "declare": false,
              "start": 365,
              "end": 482
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 358,
            "end": 482
          }
        ],
        "start": 352,
        "end": 484
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 325,
      "end": 484
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 484
}
```
