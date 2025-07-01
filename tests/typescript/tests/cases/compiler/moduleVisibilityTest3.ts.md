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
        "start": 7,
        "end": 13
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
                "start": 34,
                "end": 39
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 40,
                "end": 47
              },
              "declare": false,
              "start": 24,
              "end": 47
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 17,
            "end": 47
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
              "start": 57,
              "end": 61
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 62,
              "end": 69
            },
            "abstract": false,
            "declare": false,
            "start": 51,
            "end": 69
          }
        ],
        "start": 14,
        "end": 71
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 71
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "editor",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 163
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
              "start": 174,
              "end": 179
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "_modes",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 188
            },
            "importKind": "value",
            "start": 167,
            "end": 189
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
                          "start": 201,
                          "end": 206
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IMode",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 207,
                          "end": 212
                        },
                        "start": 201,
                        "end": 212
                      },
                      "typeArguments": null,
                      "start": 201,
                      "end": 212
                    },
                    "start": 199,
                    "end": 212
                  },
                  "start": 197,
                  "end": 212
                },
                "init": null,
                "definite": false,
                "start": 197,
                "end": 212
              }
            ],
            "declare": false,
            "start": 193,
            "end": 213
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
              "start": 299,
              "end": 302
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
                    "start": 310,
                    "end": 321
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
                              "start": 326,
                              "end": 331
                            },
                            "typeArguments": null,
                            "start": 326,
                            "end": 331
                          },
                          "start": 324,
                          "end": 331
                        },
                        "start": 322,
                        "end": 331
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
                                "start": 337,
                                "end": 342
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Mode",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 343,
                                "end": 347
                              },
                              "start": 337,
                              "end": 347
                            },
                            "typeArguments": null,
                            "start": 337,
                            "end": 347
                          },
                          "start": 335,
                          "end": 347
                        },
                        "start": 333,
                        "end": 347
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
                                        "start": 413,
                                        "end": 418
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Mode",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 419,
                                        "end": 423
                                      },
                                      "start": 413,
                                      "end": 423
                                    },
                                    "typeArguments": null,
                                    "start": 413,
                                    "end": 423
                                  },
                                  "start": 412,
                                  "end": 423
                                },
                                "start": 411,
                                "end": 423
                              },
                              "init": null,
                              "definite": false,
                              "start": 411,
                              "end": 423
                            }
                          ],
                          "declare": false,
                          "start": 407,
                          "end": 424
                        }
                      ],
                      "start": 349,
                      "end": 431
                    },
                    "expression": false,
                    "start": 321,
                    "end": 431
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 310,
                  "end": 431
                }
              ],
              "start": 303,
              "end": 439
            },
            "abstract": false,
            "declare": false,
            "start": 293,
            "end": 439
          }
        ],
        "start": 164,
        "end": 441
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 150,
      "end": 441
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 441
}
```
