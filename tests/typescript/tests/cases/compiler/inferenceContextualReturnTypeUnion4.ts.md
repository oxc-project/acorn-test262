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
          "name": "Storage",
          "optional": false,
          "typeAnnotation": null,
          "start": 79,
          "end": 86
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSAbstractMethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null,
                "start": 102,
                "end": 105
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 106,
                        "end": 107
                      },
                      "constraint": {
                        "type": "TSStringKeyword",
                        "start": 116,
                        "end": 122
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 106,
                      "end": 122
                    }
                  ],
                  "start": 105,
                  "end": 123
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 127,
                          "end": 128
                        },
                        "typeArguments": null,
                        "start": 127,
                        "end": 128
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 131,
                          "end": 138
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
                                "start": 139,
                                "end": 140
                              },
                              "typeArguments": null,
                              "start": 139,
                              "end": 140
                            }
                          ],
                          "start": 138,
                          "end": 141
                        },
                        "start": 131,
                        "end": 141
                      }
                    ],
                    "start": 127,
                    "end": 141
                  },
                  "start": 125,
                  "end": 141
                },
                "body": null,
                "expression": false,
                "start": 105,
                "end": 142
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 93,
              "end": 142
            }
          ],
          "start": 87,
          "end": 144
        },
        "abstract": true,
        "declare": false,
        "start": 64,
        "end": 144
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 57,
      "end": 144
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SyncStorage",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 179
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Storage",
          "optional": false,
          "typeAnnotation": null,
          "start": 188,
          "end": 195
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSAbstractMethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null,
                "start": 220,
                "end": 223
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 224,
                        "end": 225
                      },
                      "constraint": {
                        "type": "TSStringKeyword",
                        "start": 234,
                        "end": 240
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 224,
                      "end": 240
                    }
                  ],
                  "start": 223,
                  "end": 241
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 245,
                      "end": 246
                    },
                    "typeArguments": null,
                    "start": 245,
                    "end": 246
                  },
                  "start": 243,
                  "end": 246
                },
                "body": null,
                "expression": false,
                "start": 223,
                "end": 247
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": true,
              "optional": false,
              "accessibility": null,
              "start": 202,
              "end": 247
            }
          ],
          "start": 196,
          "end": 249
        },
        "abstract": true,
        "declare": false,
        "start": 153,
        "end": 249
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 146,
      "end": 249
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ASyncStorage",
          "optional": false,
          "typeAnnotation": null,
          "start": 273,
          "end": 285
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Storage",
          "optional": false,
          "typeAnnotation": null,
          "start": 294,
          "end": 301
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSAbstractMethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null,
                "start": 326,
                "end": 329
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 330,
                        "end": 331
                      },
                      "constraint": {
                        "type": "TSStringKeyword",
                        "start": 340,
                        "end": 346
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 330,
                      "end": 346
                    }
                  ],
                  "start": 329,
                  "end": 347
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 351,
                      "end": 358
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
                            "start": 359,
                            "end": 360
                          },
                          "typeArguments": null,
                          "start": 359,
                          "end": 360
                        }
                      ],
                      "start": 358,
                      "end": 361
                    },
                    "start": 351,
                    "end": 361
                  },
                  "start": 349,
                  "end": 361
                },
                "body": null,
                "expression": false,
                "start": 329,
                "end": 362
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": true,
              "optional": false,
              "accessibility": null,
              "start": 308,
              "end": 362
            }
          ],
          "start": 302,
          "end": 364
        },
        "abstract": true,
        "declare": false,
        "start": 258,
        "end": 364
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 251,
      "end": 364
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 364
}
```
