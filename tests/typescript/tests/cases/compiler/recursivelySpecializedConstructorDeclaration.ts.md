__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "MsPortal",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 18
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Controls",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 27
            },
            "start": 10,
            "end": 27
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 32
          },
          "start": 10,
          "end": 32
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ItemList",
          "optional": false,
          "typeAnnotation": null,
          "start": 33,
          "end": 41
        },
        "start": 10,
        "end": 41
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
                "name": "Interface",
                "optional": false,
                "typeAnnotation": null,
                "start": 66,
                "end": 75
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TValue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 76,
                      "end": 82
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 76,
                    "end": 82
                  }
                ],
                "start": 75,
                "end": 83
              },
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
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 159,
                      "end": 166
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ViewModel",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 168,
                          "end": 177
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TValue",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 178,
                                "end": 184
                              },
                              "typeArguments": null,
                              "start": 178,
                              "end": 184
                            }
                          ],
                          "start": 177,
                          "end": 185
                        },
                        "start": 168,
                        "end": 185
                      },
                      "start": 166,
                      "end": 185
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 159,
                    "end": 186
                  }
                ],
                "start": 84,
                "end": 192
              },
              "declare": false,
              "start": 56,
              "end": 192
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 49,
            "end": 192
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ItemValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 215,
                "end": 224
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
                      "start": 225,
                      "end": 226
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 225,
                    "end": 226
                  }
                ],
                "start": 224,
                "end": 227
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
                          "name": "value",
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
                                "start": 257,
                                "end": 258
                              },
                              "typeArguments": null,
                              "start": 257,
                              "end": 258
                            },
                            "start": 255,
                            "end": 258
                          },
                          "start": 250,
                          "end": 258
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 260,
                        "end": 271
                      },
                      "expression": false,
                      "start": 249,
                      "end": 271
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 238,
                    "end": 271
                  }
                ],
                "start": 228,
                "end": 277
              },
              "abstract": false,
              "declare": false,
              "start": 209,
              "end": 277
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 202,
            "end": 277
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ViewModel",
                "optional": false,
                "typeAnnotation": null,
                "start": 301,
                "end": 310
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TValue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 311,
                      "end": 317
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 311,
                    "end": 317
                  }
                ],
                "start": 310,
                "end": 318
              },
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "ItemValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 327,
                "end": 336
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TValue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 337,
                      "end": 343
                    },
                    "typeArguments": null,
                    "start": 337,
                    "end": 343
                  }
                ],
                "start": 336,
                "end": 344
              },
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 345,
                "end": 352
              },
              "abstract": false,
              "declare": false,
              "start": 295,
              "end": 352
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 288,
            "end": 352
          }
        ],
        "start": 42,
        "end": 354
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 354
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 629
}
```
