__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Model",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 19
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 21
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MR",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 32
              },
              "typeArguments": null,
              "start": 30,
              "end": 32
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 20,
            "end": 32
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "MR",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 36
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 45,
              "end": 47
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 34,
            "end": 47
          }
        ],
        "start": 19,
        "end": 48
      },
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
              "name": "getField2",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 71
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 72,
                      "end": 73
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "M",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 88,
                          "end": 89
                        },
                        "typeArguments": null,
                        "start": 88,
                        "end": 89
                      },
                      "start": 82,
                      "end": 89
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 72,
                    "end": 89
                  }
                ],
                "start": 71,
                "end": 90
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Field",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 99
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "M",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 100,
                            "end": 101
                          },
                          "typeArguments": null,
                          "start": 100,
                          "end": 101
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 102,
                            "end": 103
                          },
                          "typeArguments": null,
                          "start": 102,
                          "end": 103
                        },
                        "start": 100,
                        "end": 104
                      },
                      {
                        "type": "TSConditionalType",
                        "checkType": {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 107,
                                "end": 108
                              },
                              "typeArguments": null,
                              "start": 107,
                              "end": 108
                            }
                          ],
                          "start": 106,
                          "end": 109
                        },
                        "extendsType": {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSTypeOperator",
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "MR",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 125,
                                  "end": 127
                                },
                                "typeArguments": null,
                                "start": 125,
                                "end": 127
                              },
                              "start": 119,
                              "end": 127
                            }
                          ],
                          "start": 118,
                          "end": 128
                        },
                        "trueType": {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "MR",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 131,
                              "end": 133
                            },
                            "typeArguments": null,
                            "start": 131,
                            "end": 133
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 134,
                              "end": 135
                            },
                            "typeArguments": null,
                            "start": 134,
                            "end": 135
                          },
                          "start": 131,
                          "end": 136
                        },
                        "falseType": {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "M",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 139,
                              "end": 140
                            },
                            "typeArguments": null,
                            "start": 139,
                            "end": 140
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 141,
                              "end": 142
                            },
                            "typeArguments": null,
                            "start": 141,
                            "end": 142
                          },
                          "start": 139,
                          "end": 143
                        },
                        "start": 106,
                        "end": 143
                      }
                    ],
                    "start": 99,
                    "end": 144
                  },
                  "start": 94,
                  "end": 144
                },
                "start": 92,
                "end": 144
              },
              "body": null,
              "expression": false,
              "start": 71,
              "end": 144
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 55,
            "end": 144
          }
        ],
        "start": 49,
        "end": 146
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 146
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Field",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 167
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
              "start": 168,
              "end": 169
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TR",
                "optional": false,
                "typeAnnotation": null,
                "start": 178,
                "end": 180
              },
              "typeArguments": null,
              "start": 178,
              "end": 180
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 168,
            "end": 180
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TR",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 184
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 182,
            "end": 184
          }
        ],
        "start": 167,
        "end": 185
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 186,
        "end": 189
      },
      "abstract": false,
      "declare": true,
      "start": 148,
      "end": 189
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 189
}
```
