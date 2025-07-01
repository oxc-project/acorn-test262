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
              "start": 7,
              "end": 15
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Controls",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 24
            },
            "start": 7,
            "end": 24
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 29
          },
          "start": 7,
          "end": 29
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ItemList",
          "optional": false,
          "typeAnnotation": null,
          "start": 30,
          "end": 38
        },
        "start": 7,
        "end": 38
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
                "start": 63,
                "end": 72
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
                      "start": 73,
                      "end": 79
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 73,
                    "end": 79
                  }
                ],
                "start": 72,
                "end": 80
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
                      "start": 156,
                      "end": 163
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
                          "start": 165,
                          "end": 174
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
                                "start": 175,
                                "end": 181
                              },
                              "typeArguments": null,
                              "start": 175,
                              "end": 181
                            }
                          ],
                          "start": 174,
                          "end": 182
                        },
                        "start": 165,
                        "end": 182
                      },
                      "start": 163,
                      "end": 182
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 156,
                    "end": 183
                  }
                ],
                "start": 81,
                "end": 189
              },
              "declare": false,
              "start": 53,
              "end": 189
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 46,
            "end": 189
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
                "start": 212,
                "end": 221
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
                      "start": 222,
                      "end": 223
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 222,
                    "end": 223
                  }
                ],
                "start": 221,
                "end": 224
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
                      "start": 235,
                      "end": 246
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
                                "start": 254,
                                "end": 255
                              },
                              "typeArguments": null,
                              "start": 254,
                              "end": 255
                            },
                            "start": 252,
                            "end": 255
                          },
                          "start": 247,
                          "end": 255
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 257,
                        "end": 268
                      },
                      "expression": false,
                      "start": 246,
                      "end": 268
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 235,
                    "end": 268
                  }
                ],
                "start": 225,
                "end": 274
              },
              "abstract": false,
              "declare": false,
              "start": 206,
              "end": 274
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 199,
            "end": 274
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
                "start": 298,
                "end": 307
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
                      "start": 308,
                      "end": 314
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 308,
                    "end": 314
                  }
                ],
                "start": 307,
                "end": 315
              },
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "ItemValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 324,
                "end": 333
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
                      "start": 334,
                      "end": 340
                    },
                    "typeArguments": null,
                    "start": 334,
                    "end": 340
                  }
                ],
                "start": 333,
                "end": 341
              },
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 342,
                "end": 349
              },
              "abstract": false,
              "declare": false,
              "start": 292,
              "end": 349
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 285,
            "end": 349
          }
        ],
        "start": 39,
        "end": 351
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 351
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 623
}
```
