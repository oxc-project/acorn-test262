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
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 35
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 38,
                    "end": 44
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 47,
                    "end": 53
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 56,
                    "end": 63
                  }
                ],
                "start": 38,
                "end": 63
              },
              "declare": false,
              "start": 25,
              "end": 64
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 18,
            "end": 64
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 83,
                          "end": 88
                        },
                        "typeArguments": null,
                        "start": 83,
                        "end": 88
                      },
                      "start": 81,
                      "end": 88
                    },
                    "start": 80,
                    "end": 88
                  },
                  "init": null,
                  "definite": false,
                  "start": 80,
                  "end": 88
                }
              ],
              "declare": false,
              "start": 76,
              "end": 89
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 69,
            "end": 89
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 109
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 110,
                "end": 117
              },
              "abstract": false,
              "declare": false,
              "start": 102,
              "end": 117
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 95,
            "end": 117
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 135,
                "end": 136
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 139,
                  "end": 140
                },
                "typeArguments": null,
                "start": 139,
                "end": 140
              },
              "declare": false,
              "start": 130,
              "end": 141
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 123,
            "end": 141
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 164,
                "end": 165
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
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 189,
                        "end": 190
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 191,
                        "end": 202
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 183,
                      "end": 202
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 176,
                    "end": 202
                  }
                ],
                "start": 166,
                "end": 208
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 154,
              "end": 208
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 147,
            "end": 208
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "MC",
                "optional": false,
                "typeAnnotation": null,
                "start": 226,
                "end": 228
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 231,
                    "end": 232
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 233,
                    "end": 234
                  },
                  "start": 231,
                  "end": 234
                },
                "typeArguments": null,
                "start": 231,
                "end": 234
              },
              "declare": false,
              "start": 221,
              "end": 235
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 214,
            "end": 235
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "fc",
                "optional": false,
                "typeAnnotation": null,
                "start": 253,
                "end": 255
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 264,
                      "end": 265
                    },
                    "typeArguments": null,
                    "start": 264,
                    "end": 265
                  },
                  "start": 261,
                  "end": 265
                },
                "start": 258,
                "end": 265
              },
              "declare": false,
              "start": 248,
              "end": 266
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 241,
            "end": 266
          }
        ],
        "start": 12,
        "end": 268
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 268
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Window",
        "optional": false,
        "typeAnnotation": null,
        "start": 280,
        "end": 286
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
              "name": "someMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 293,
              "end": 303
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 293,
            "end": 306
          }
        ],
        "start": 287,
        "end": 308
      },
      "declare": false,
      "start": 270,
      "end": 308
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 320,
        "end": 321
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "W",
                "optional": false,
                "typeAnnotation": null,
                "start": 340,
                "end": 341
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Window",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 344,
                      "end": 350
                    },
                    "typeArguments": null,
                    "start": 344,
                    "end": 350
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 353,
                    "end": 359
                  }
                ],
                "start": 344,
                "end": 359
              },
              "declare": false,
              "start": 335,
              "end": 360
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 328,
            "end": 360
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 382,
                "end": 383
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
                        "name": "Window",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 407,
                        "end": 413
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 414,
                        "end": 417
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 401,
                      "end": 417
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 394,
                    "end": 417
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
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
                                  "name": "W",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 440,
                                  "end": 441
                                },
                                "typeArguments": null,
                                "start": 440,
                                "end": 441
                              },
                              "start": 438,
                              "end": 441
                            },
                            "start": 437,
                            "end": 441
                          },
                          "init": null,
                          "definite": false,
                          "start": 437,
                          "end": 441
                        }
                      ],
                      "declare": false,
                      "start": 433,
                      "end": 442
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 426,
                    "end": 442
                  }
                ],
                "start": 384,
                "end": 448
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 372,
              "end": 448
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 365,
            "end": 448
          }
        ],
        "start": 322,
        "end": 450
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 310,
      "end": 450
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 450
}
```
