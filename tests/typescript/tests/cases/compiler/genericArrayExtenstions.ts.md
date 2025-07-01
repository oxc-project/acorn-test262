__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ObservableArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 21,
          "end": 36
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
                "start": 37,
                "end": 38
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 37,
              "end": 38
            }
          ],
          "start": 36,
          "end": 39
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 56
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 57,
                    "end": 58
                  },
                  "typeArguments": null,
                  "start": 57,
                  "end": 58
                }
              ],
              "start": 56,
              "end": 59
            },
            "start": 51,
            "end": 59
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
                "name": "concat",
                "optional": false,
                "typeAnnotation": null,
                "start": 98,
                "end": 104
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 105,
                        "end": 106
                      },
                      "constraint": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 115,
                            "end": 116
                          },
                          "typeArguments": null,
                          "start": 115,
                          "end": 116
                        },
                        "start": 115,
                        "end": 118
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 105,
                      "end": 118
                    }
                  ],
                  "start": 104,
                  "end": 119
                },
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "items",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 123,
                      "end": 128
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 130,
                            "end": 131
                          },
                          "typeArguments": null,
                          "start": 130,
                          "end": 131
                        },
                        "start": 130,
                        "end": 133
                      },
                      "start": 128,
                      "end": 133
                    },
                    "value": null,
                    "start": 120,
                    "end": 133
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 136,
                        "end": 137
                      },
                      "typeArguments": null,
                      "start": 136,
                      "end": 137
                    },
                    "start": 136,
                    "end": 139
                  },
                  "start": 134,
                  "end": 139
                },
                "body": null,
                "expression": false,
                "start": 104,
                "end": 140
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 98,
              "end": 140
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "concat",
                "optional": false,
                "typeAnnotation": null,
                "start": 141,
                "end": 147
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "items",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 151,
                      "end": 156
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 158,
                            "end": 159
                          },
                          "typeArguments": null,
                          "start": 158,
                          "end": 159
                        },
                        "start": 158,
                        "end": 161
                      },
                      "start": 156,
                      "end": 161
                    },
                    "value": null,
                    "start": 148,
                    "end": 161
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 164,
                        "end": 165
                      },
                      "typeArguments": null,
                      "start": 164,
                      "end": 165
                    },
                    "start": 164,
                    "end": 167
                  },
                  "start": 162,
                  "end": 167
                },
                "body": null,
                "expression": false,
                "start": 147,
                "end": 168
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 141,
              "end": 168
            }
          ],
          "start": 60,
          "end": 170
        },
        "abstract": false,
        "declare": true,
        "start": 7,
        "end": 170
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 170
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 170
}
```
