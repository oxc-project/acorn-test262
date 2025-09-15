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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 34
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 45,
                    "end": 46
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 48,
                      "end": 54
                    },
                    "start": 46,
                    "end": 54
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 45,
                  "end": 55
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 65
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 67,
                      "end": 73
                    },
                    "start": 65,
                    "end": 73
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 64,
                  "end": 74
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fromOrigin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 84,
                    "end": 94
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
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
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 98,
                            "end": 103
                          },
                          "typeArguments": null,
                          "start": 98,
                          "end": 103
                        },
                        "start": 96,
                        "end": 103
                      },
                      "start": 95,
                      "end": 103
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 106,
                      "end": 112
                    },
                    "start": 104,
                    "end": 112
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 84,
                  "end": 113
                }
              ],
              "start": 35,
              "end": 119
            },
            "declare": false,
            "start": 19,
            "end": 119
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point2d",
                "optional": false,
                "typeAnnotation": null,
                "start": 138,
                "end": 145
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
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 157,
                    "end": 162
                  },
                  "typeArguments": null,
                  "start": 157,
                  "end": 162
                }
              ],
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
                      "start": 173,
                      "end": 184
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
                                "start": 195,
                                "end": 201
                              },
                              "start": 193,
                              "end": 201
                            },
                            "start": 192,
                            "end": 201
                          },
                          "readonly": false,
                          "static": false,
                          "start": 185,
                          "end": 201
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
                                "start": 213,
                                "end": 219
                              },
                              "start": 211,
                              "end": 219
                            },
                            "start": 210,
                            "end": 219
                          },
                          "readonly": false,
                          "static": false,
                          "start": 203,
                          "end": 219
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 221,
                        "end": 224
                      },
                      "expression": false,
                      "start": 184,
                      "end": 224
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 173,
                    "end": 224
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromOrigin",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 234,
                      "end": 244
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Point",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 248,
                                "end": 253
                              },
                              "typeArguments": null,
                              "start": 248,
                              "end": 253
                            },
                            "start": 246,
                            "end": 253
                          },
                          "start": 245,
                          "end": 253
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 276,
                              "end": 277
                            },
                            "start": 269,
                            "end": 278
                          }
                        ],
                        "start": 255,
                        "end": 288
                      },
                      "expression": false,
                      "start": 244,
                      "end": 288
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 234,
                    "end": 288
                  }
                ],
                "start": 163,
                "end": 294
              },
              "abstract": false,
              "declare": false,
              "start": 132,
              "end": 294
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 125,
            "end": 294
          }
        ],
        "start": 12,
        "end": 296
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 296
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 297
}
```
