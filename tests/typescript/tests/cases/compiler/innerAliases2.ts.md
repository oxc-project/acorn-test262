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
        "start": 7,
        "end": 16
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
                "start": 48,
                "end": 59
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
                      "start": 101,
                      "end": 104
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
                        "start": 107,
                        "end": 142
                      },
                      "expression": false,
                      "start": 104,
                      "end": 142
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 94,
                    "end": 142
                  }
                ],
                "start": 60,
                "end": 160
              },
              "abstract": false,
              "declare": false,
              "start": 42,
              "end": 160
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 35,
            "end": 160
          }
        ],
        "start": 17,
        "end": 162
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 162
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "consumer",
        "optional": false,
        "typeAnnotation": null,
        "start": 171,
        "end": 179
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
              "start": 205,
              "end": 213
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "_provider",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 225
            },
            "importKind": "value",
            "start": 198,
            "end": 226
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
                          "start": 266,
                          "end": 274
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "UsefulClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 275,
                          "end": 286
                        },
                        "start": 266,
                        "end": 286
                      },
                      "typeArguments": null,
                      "start": 266,
                      "end": 286
                    },
                    "start": 265,
                    "end": 286
                  },
                  "start": 264,
                  "end": 286
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 288,
                  "end": 292
                },
                "definite": false,
                "start": 264,
                "end": 292
              }
            ],
            "declare": false,
            "start": 260,
            "end": 293
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null,
              "start": 336,
              "end": 339
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
                    "start": 342,
                    "end": 350
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "UsefulClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 351,
                    "end": 362
                  },
                  "start": 342,
                  "end": 362
                },
                "typeArguments": null,
                "start": 342,
                "end": 362
              },
              "start": 341,
              "end": 362
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
                                "start": 405,
                                "end": 413
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "UsefulClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 414,
                                "end": 425
                              },
                              "start": 405,
                              "end": 425
                            },
                            "typeArguments": null,
                            "start": 405,
                            "end": 425
                          },
                          "start": 404,
                          "end": 425
                        },
                        "start": 402,
                        "end": 425
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
                            "start": 431,
                            "end": 439
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "UsefulClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 440,
                            "end": 451
                          },
                          "optional": false,
                          "computed": false,
                          "start": 431,
                          "end": 451
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 427,
                        "end": 453
                      },
                      "definite": false,
                      "start": 402,
                      "end": 453
                    }
                  ],
                  "declare": false,
                  "start": 398,
                  "end": 454
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 494,
                    "end": 496
                  },
                  "start": 487,
                  "end": 497
                }
              ],
              "start": 363,
              "end": 516
            },
            "expression": false,
            "start": 327,
            "end": 516
          }
        ],
        "start": 180,
        "end": 518
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 164,
      "end": 518
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 519
}
```
