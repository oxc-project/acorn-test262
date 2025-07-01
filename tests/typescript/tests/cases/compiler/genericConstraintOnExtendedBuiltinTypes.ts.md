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
        "start": 15,
        "end": 22
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
                "start": 46,
                "end": 56
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
                      "start": 67,
                      "end": 72
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
                        "start": 76,
                        "end": 79
                      },
                      "start": 74,
                      "end": 79
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 67,
                    "end": 80
                  }
                ],
                "start": 57,
                "end": 86
              },
              "declare": false,
              "start": 36,
              "end": 86
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 29,
            "end": 86
          }
        ],
        "start": 23,
        "end": 88
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 88
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Number",
        "optional": false,
        "typeAnnotation": null,
        "start": 100,
        "end": 106
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
              "start": 115,
              "end": 122
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ICloneable",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 133
            },
            "optional": false,
            "computed": false,
            "start": 115,
            "end": 133
          },
          "typeArguments": null,
          "start": 115,
          "end": 133
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 134,
        "end": 137
      },
      "declare": false,
      "start": 90,
      "end": 137
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
          "start": 146,
          "end": 153
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Tweening",
          "optional": false,
          "typeAnnotation": null,
          "start": 154,
          "end": 162
        },
        "start": 146,
        "end": 162
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
                "start": 182,
                "end": 187
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
                      "start": 188,
                      "end": 189
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ICloneable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 198,
                        "end": 208
                      },
                      "typeArguments": null,
                      "start": 198,
                      "end": 208
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 188,
                    "end": 208
                  }
                ],
                "start": 187,
                "end": 209
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
                      "start": 227,
                      "end": 232
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
                          "start": 234,
                          "end": 235
                        },
                        "typeArguments": null,
                        "start": 234,
                        "end": 235
                      },
                      "start": 232,
                      "end": 235
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
                    "start": 219,
                    "end": 236
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
                      "start": 247,
                      "end": 258
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
                                "start": 265,
                                "end": 266
                              },
                              "typeArguments": null,
                              "start": 265,
                              "end": 266
                            },
                            "start": 263,
                            "end": 266
                          },
                          "start": 259,
                          "end": 266
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
                                  "start": 282,
                                  "end": 286
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_from",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 287,
                                  "end": 292
                                },
                                "optional": false,
                                "computed": false,
                                "start": 282,
                                "end": 292
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
                                    "start": 295,
                                    "end": 299
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Clone",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 300,
                                    "end": 305
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 295,
                                  "end": 305
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 295,
                                "end": 307
                              },
                              "start": 282,
                              "end": 307
                            },
                            "directive": null,
                            "start": 282,
                            "end": 308
                          }
                        ],
                        "start": 268,
                        "end": 318
                      },
                      "expression": false,
                      "start": 258,
                      "end": 318
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 247,
                    "end": 318
                  }
                ],
                "start": 209,
                "end": 324
              },
              "abstract": false,
              "declare": false,
              "start": 176,
              "end": 324
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 169,
            "end": 324
          }
        ],
        "start": 163,
        "end": 326
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 139,
      "end": 326
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
                    "type": "TSNumberKeyword",
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
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 328,
      "end": 484
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 484
}
```
