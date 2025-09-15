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
        "start": 18,
        "end": 25
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
                "start": 49,
                "end": 59
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
                      "start": 70,
                      "end": 75
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
                        "start": 79,
                        "end": 82
                      },
                      "start": 77,
                      "end": 82
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 70,
                    "end": 83
                  }
                ],
                "start": 60,
                "end": 89
              },
              "declare": false,
              "start": 39,
              "end": 89
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 32,
            "end": 89
          }
        ],
        "start": 26,
        "end": 91
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 91
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Number",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 109
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
              "start": 118,
              "end": 125
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ICloneable",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 136
            },
            "optional": false,
            "computed": false,
            "start": 118,
            "end": 136
          },
          "typeArguments": null,
          "start": 118,
          "end": 136
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 137,
        "end": 140
      },
      "declare": false,
      "start": 93,
      "end": 140
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
          "start": 152,
          "end": 159
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Tweening",
          "optional": false,
          "typeAnnotation": null,
          "start": 160,
          "end": 168
        },
        "start": 152,
        "end": 168
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
                "start": 188,
                "end": 193
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
                      "start": 194,
                      "end": 195
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ICloneable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 204,
                        "end": 214
                      },
                      "typeArguments": null,
                      "start": 204,
                      "end": 214
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 194,
                    "end": 214
                  }
                ],
                "start": 193,
                "end": 215
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
                      "start": 233,
                      "end": 238
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
                          "start": 240,
                          "end": 241
                        },
                        "typeArguments": null,
                        "start": 240,
                        "end": 241
                      },
                      "start": 238,
                      "end": 241
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
                    "start": 225,
                    "end": 242
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
                      "start": 253,
                      "end": 264
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
                                "start": 271,
                                "end": 272
                              },
                              "typeArguments": null,
                              "start": 271,
                              "end": 272
                            },
                            "start": 269,
                            "end": 272
                          },
                          "start": 265,
                          "end": 272
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
                                  "start": 288,
                                  "end": 292
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_from",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 293,
                                  "end": 298
                                },
                                "optional": false,
                                "computed": false,
                                "start": 288,
                                "end": 298
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
                                    "start": 301,
                                    "end": 305
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Clone",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 306,
                                    "end": 311
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 301,
                                  "end": 311
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 301,
                                "end": 313
                              },
                              "start": 288,
                              "end": 313
                            },
                            "directive": null,
                            "start": 288,
                            "end": 314
                          }
                        ],
                        "start": 274,
                        "end": 324
                      },
                      "expression": false,
                      "start": 264,
                      "end": 324
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 253,
                    "end": 324
                  }
                ],
                "start": 215,
                "end": 330
              },
              "abstract": false,
              "declare": false,
              "start": 182,
              "end": 330
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 175,
            "end": 330
          }
        ],
        "start": 169,
        "end": 332
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 142,
      "end": 332
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
          "start": 344,
          "end": 351
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Tweening",
          "optional": false,
          "typeAnnotation": null,
          "start": 352,
          "end": 360
        },
        "start": 344,
        "end": 360
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
                "start": 380,
                "end": 391
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Tween",
                "optional": false,
                "typeAnnotation": null,
                "start": 400,
                "end": 405
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 406,
                    "end": 412
                  }
                ],
                "start": 405,
                "end": 413
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
                      "start": 423,
                      "end": 434
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
                              "start": 441,
                              "end": 447
                            },
                            "start": 439,
                            "end": 447
                          },
                          "start": 435,
                          "end": 447
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
                                "start": 463,
                                "end": 468
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "from",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 469,
                                  "end": 473
                                }
                              ],
                              "optional": false,
                              "start": 463,
                              "end": 474
                            },
                            "directive": null,
                            "start": 463,
                            "end": 475
                          }
                        ],
                        "start": 449,
                        "end": 485
                      },
                      "expression": false,
                      "start": 434,
                      "end": 485
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 423,
                    "end": 485
                  }
                ],
                "start": 413,
                "end": 491
              },
              "abstract": false,
              "declare": false,
              "start": 374,
              "end": 491
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 367,
            "end": 491
          }
        ],
        "start": 361,
        "end": 493
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 334,
      "end": 493
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 493
}
```
