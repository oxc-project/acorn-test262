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
        "name": "_modes",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
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
                "name": "IMode",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 42
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 43,
                "end": 50
              },
              "declare": false,
              "start": 27,
              "end": 50
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 20,
            "end": 50
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Mode",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 64
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 65,
              "end": 72
            },
            "abstract": false,
            "declare": false,
            "start": 54,
            "end": 72
          }
        ],
        "start": 17,
        "end": 74
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 74
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "editor",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 169
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "modes",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 185
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "_modes",
              "optional": false,
              "typeAnnotation": null,
              "start": 188,
              "end": 194
            },
            "importKind": "value",
            "start": 173,
            "end": 195
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "modes",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 207,
                          "end": 212
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IMode",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 213,
                          "end": 218
                        },
                        "start": 207,
                        "end": 218
                      },
                      "typeArguments": null,
                      "start": 207,
                      "end": 218
                    },
                    "start": 205,
                    "end": 218
                  },
                  "start": 203,
                  "end": 218
                },
                "init": null,
                "definite": false,
                "start": 203,
                "end": 218
              }
            ],
            "declare": false,
            "start": 199,
            "end": 219
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bug",
              "optional": false,
              "typeAnnotation": null,
              "start": 305,
              "end": 308
            },
            "typeParameters": null,
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
                    "start": 316,
                    "end": 327
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
                        "name": "p1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "modes",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 332,
                              "end": 337
                            },
                            "typeArguments": null,
                            "start": 332,
                            "end": 337
                          },
                          "start": 330,
                          "end": 337
                        },
                        "start": 328,
                        "end": 337
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "modes",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 343,
                                "end": 348
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Mode",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 349,
                                "end": 353
                              },
                              "start": 343,
                              "end": 353
                            },
                            "typeArguments": null,
                            "start": 343,
                            "end": 353
                          },
                          "start": 341,
                          "end": 353
                        },
                        "start": 339,
                        "end": 353
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
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
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "modes",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 419,
                                        "end": 424
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Mode",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 425,
                                        "end": 429
                                      },
                                      "start": 419,
                                      "end": 429
                                    },
                                    "typeArguments": null,
                                    "start": 419,
                                    "end": 429
                                  },
                                  "start": 418,
                                  "end": 429
                                },
                                "start": 417,
                                "end": 429
                              },
                              "init": null,
                              "definite": false,
                              "start": 417,
                              "end": 429
                            }
                          ],
                          "declare": false,
                          "start": 413,
                          "end": 430
                        }
                      ],
                      "start": 355,
                      "end": 437
                    },
                    "expression": false,
                    "start": 327,
                    "end": 437
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 316,
                  "end": 437
                }
              ],
              "start": 309,
              "end": 445
            },
            "abstract": false,
            "declare": false,
            "start": 299,
            "end": 445
          }
        ],
        "start": 170,
        "end": 447
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 153,
      "end": 447
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 447
}
```
