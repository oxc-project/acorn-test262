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
        "name": "_provider",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 19
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
                "name": "UsefulClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 62
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 104,
                      "end": 107
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 110,
                        "end": 145
                      },
                      "expression": false,
                      "start": 107,
                      "end": 145
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 97,
                    "end": 145
                  }
                ],
                "start": 63,
                "end": 163
              },
              "abstract": false,
              "declare": false,
              "start": 45,
              "end": 163
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 38,
            "end": 163
          }
        ],
        "start": 20,
        "end": 165
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 165
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "consumer",
        "optional": false,
        "typeAnnotation": null,
        "start": 177,
        "end": 185
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "provider",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 219
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "_provider",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 231
            },
            "importKind": "value",
            "start": 204,
            "end": 232
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
                  "name": "g",
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
                          "name": "provider",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 272,
                          "end": 280
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "UsefulClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 281,
                          "end": 292
                        },
                        "start": 272,
                        "end": 292
                      },
                      "typeArguments": null,
                      "start": 272,
                      "end": 292
                    },
                    "start": 271,
                    "end": 292
                  },
                  "start": 270,
                  "end": 292
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 294,
                  "end": 298
                },
                "definite": false,
                "start": 270,
                "end": 298
              }
            ],
            "declare": false,
            "start": 266,
            "end": 299
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null,
              "start": 342,
              "end": 345
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "provider",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 348,
                    "end": 356
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "UsefulClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 357,
                    "end": 368
                  },
                  "start": 348,
                  "end": 368
                },
                "typeArguments": null,
                "start": 348,
                "end": 368
              },
              "start": 347,
              "end": 368
            },
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
                                "name": "provider",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 411,
                                "end": 419
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "UsefulClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 420,
                                "end": 431
                              },
                              "start": 411,
                              "end": 431
                            },
                            "typeArguments": null,
                            "start": 411,
                            "end": 431
                          },
                          "start": 410,
                          "end": 431
                        },
                        "start": 408,
                        "end": 431
                      },
                      "init": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "provider",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 437,
                            "end": 445
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "UsefulClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 446,
                            "end": 457
                          },
                          "optional": false,
                          "computed": false,
                          "start": 437,
                          "end": 457
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 433,
                        "end": 459
                      },
                      "definite": false,
                      "start": 408,
                      "end": 459
                    }
                  ],
                  "declare": false,
                  "start": 404,
                  "end": 460
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 500,
                    "end": 502
                  },
                  "start": 493,
                  "end": 503
                }
              ],
              "start": 369,
              "end": 522
            },
            "expression": false,
            "start": 333,
            "end": 522
          }
        ],
        "start": 186,
        "end": 524
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 167,
      "end": 524
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 525
}
```
