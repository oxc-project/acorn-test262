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
        "start": 7,
        "end": 14
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
                "start": 38,
                "end": 48
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
                      "start": 59,
                      "end": 64
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
                        "start": 68,
                        "end": 71
                      },
                      "start": 66,
                      "end": 71
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 59,
                    "end": 72
                  }
                ],
                "start": 49,
                "end": 78
              },
              "declare": false,
              "start": 28,
              "end": 78
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 21,
            "end": 78
          }
        ],
        "start": 15,
        "end": 80
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 80
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Number",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 98
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
              "start": 107,
              "end": 114
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ICloneable",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 125
            },
            "optional": false,
            "computed": false,
            "start": 107,
            "end": 125
          },
          "typeArguments": null,
          "start": 107,
          "end": 125
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 126,
        "end": 129
      },
      "declare": false,
      "start": 82,
      "end": 129
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
          "start": 138,
          "end": 145
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Tweening",
          "optional": false,
          "typeAnnotation": null,
          "start": 146,
          "end": 154
        },
        "start": 138,
        "end": 154
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
                "start": 174,
                "end": 179
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
                      "start": 180,
                      "end": 181
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ICloneable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 190,
                        "end": 200
                      },
                      "typeArguments": null,
                      "start": 190,
                      "end": 200
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 180,
                    "end": 200
                  }
                ],
                "start": 179,
                "end": 201
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
                      "start": 219,
                      "end": 224
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
                          "start": 226,
                          "end": 227
                        },
                        "typeArguments": null,
                        "start": 226,
                        "end": 227
                      },
                      "start": 224,
                      "end": 227
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
                    "start": 211,
                    "end": 228
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
                      "start": 238,
                      "end": 249
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
                                "start": 256,
                                "end": 257
                              },
                              "typeArguments": null,
                              "start": 256,
                              "end": 257
                            },
                            "start": 254,
                            "end": 257
                          },
                          "start": 250,
                          "end": 257
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
                                  "start": 273,
                                  "end": 277
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_from",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 278,
                                  "end": 283
                                },
                                "optional": false,
                                "computed": false,
                                "start": 273,
                                "end": 283
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
                                    "start": 286,
                                    "end": 290
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Clone",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 291,
                                    "end": 296
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 286,
                                  "end": 296
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 286,
                                "end": 298
                              },
                              "start": 273,
                              "end": 298
                            },
                            "directive": null,
                            "start": 273,
                            "end": 299
                          }
                        ],
                        "start": 259,
                        "end": 309
                      },
                      "expression": false,
                      "start": 249,
                      "end": 309
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 238,
                    "end": 309
                  }
                ],
                "start": 201,
                "end": 315
              },
              "abstract": false,
              "declare": false,
              "start": 168,
              "end": 315
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 161,
            "end": 315
          }
        ],
        "start": 155,
        "end": 317
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 131,
      "end": 317
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
          "start": 326,
          "end": 333
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Tweening",
          "optional": false,
          "typeAnnotation": null,
          "start": 334,
          "end": 342
        },
        "start": 326,
        "end": 342
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
                "start": 362,
                "end": 373
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Tween",
                "optional": false,
                "typeAnnotation": null,
                "start": 382,
                "end": 387
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
                      "start": 388,
                      "end": 394
                    },
                    "typeArguments": null,
                    "start": 388,
                    "end": 394
                  }
                ],
                "start": 387,
                "end": 395
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
                      "start": 405,
                      "end": 416
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
                              "start": 423,
                              "end": 429
                            },
                            "start": 421,
                            "end": 429
                          },
                          "start": 417,
                          "end": 429
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
                                "start": 445,
                                "end": 450
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "from",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 451,
                                  "end": 455
                                }
                              ],
                              "optional": false,
                              "start": 445,
                              "end": 456
                            },
                            "directive": null,
                            "start": 445,
                            "end": 457
                          }
                        ],
                        "start": 431,
                        "end": 467
                      },
                      "expression": false,
                      "start": 416,
                      "end": 467
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 405,
                    "end": 467
                  }
                ],
                "start": 395,
                "end": 473
              },
              "abstract": false,
              "declare": false,
              "start": 356,
              "end": 473
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 349,
            "end": 473
          }
        ],
        "start": 343,
        "end": 475
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 319,
      "end": 475
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 475
}
```
