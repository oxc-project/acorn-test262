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
        "start": 7,
        "end": 8
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
              "start": 26,
              "end": 31
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
                    "start": 42,
                    "end": 43
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 45,
                      "end": 51
                    },
                    "start": 43,
                    "end": 51
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 42,
                  "end": 52
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
                    "start": 61,
                    "end": 62
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 64,
                      "end": 70
                    },
                    "start": 62,
                    "end": 70
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 61,
                  "end": 71
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fromOrigin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 81,
                    "end": 91
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
                            "start": 95,
                            "end": 100
                          },
                          "typeArguments": null,
                          "start": 95,
                          "end": 100
                        },
                        "start": 93,
                        "end": 100
                      },
                      "start": 92,
                      "end": 100
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 103,
                      "end": 109
                    },
                    "start": 101,
                    "end": 109
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 81,
                  "end": 110
                }
              ],
              "start": 32,
              "end": 116
            },
            "declare": false,
            "start": 16,
            "end": 116
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
                "start": 135,
                "end": 142
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
                    "start": 154,
                    "end": 159
                  },
                  "typeArguments": null,
                  "start": 154,
                  "end": 159
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
                      "start": 170,
                      "end": 181
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
                                "start": 192,
                                "end": 198
                              },
                              "start": 190,
                              "end": 198
                            },
                            "start": 189,
                            "end": 198
                          },
                          "readonly": false,
                          "static": false,
                          "start": 182,
                          "end": 198
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
                                "start": 210,
                                "end": 216
                              },
                              "start": 208,
                              "end": 216
                            },
                            "start": 207,
                            "end": 216
                          },
                          "readonly": false,
                          "static": false,
                          "start": 200,
                          "end": 216
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 218,
                        "end": 221
                      },
                      "expression": false,
                      "start": 181,
                      "end": 221
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 170,
                    "end": 221
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
                      "start": 231,
                      "end": 241
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
                                "start": 245,
                                "end": 250
                              },
                              "typeArguments": null,
                              "start": 245,
                              "end": 250
                            },
                            "start": 243,
                            "end": 250
                          },
                          "start": 242,
                          "end": 250
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
                              "start": 273,
                              "end": 274
                            },
                            "start": 266,
                            "end": 275
                          }
                        ],
                        "start": 252,
                        "end": 285
                      },
                      "expression": false,
                      "start": 241,
                      "end": 285
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 231,
                    "end": 285
                  }
                ],
                "start": 160,
                "end": 291
              },
              "abstract": false,
              "declare": false,
              "start": 129,
              "end": 291
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 122,
            "end": 291
          }
        ],
        "start": 9,
        "end": 293
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 293
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 294
}
```
