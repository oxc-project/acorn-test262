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
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "CompilerDiagnostics",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 63
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
                        "name": "IDiagnosticWriter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 92,
                        "end": 109
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
                              "name": "Alert",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 124,
                              "end": 129
                            },
                            "computed": false,
                            "optional": false,
                            "kind": "method",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "output",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 138,
                                    "end": 144
                                  },
                                  "start": 136,
                                  "end": 144
                                },
                                "start": 130,
                                "end": 144
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 147,
                                "end": 151
                              },
                              "start": 145,
                              "end": 151
                            },
                            "accessibility": null,
                            "readonly": false,
                            "static": false,
                            "start": 124,
                            "end": 152
                          }
                        ],
                        "start": 110,
                        "end": 162
                      },
                      "declare": false,
                      "start": 82,
                      "end": 162
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 75,
                    "end": 162
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
                            "name": "diagnosticWriter",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 183,
                            "end": 199
                          },
                          "init": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 202,
                            "end": 206
                          },
                          "definite": false,
                          "start": 183,
                          "end": 206
                        }
                      ],
                      "declare": false,
                      "start": 179,
                      "end": 207
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 172,
                    "end": 207
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Alert",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 233,
                        "end": 238
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "output",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 247,
                              "end": 253
                            },
                            "start": 245,
                            "end": 253
                          },
                          "start": 239,
                          "end": 253
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "diagnosticWriter",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 273,
                              "end": 289
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "diagnosticWriter",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 309,
                                        "end": 325
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Alert",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 326,
                                        "end": 331
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 309,
                                      "end": 331
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "output",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 332,
                                        "end": 338
                                      }
                                    ],
                                    "optional": false,
                                    "start": 309,
                                    "end": 339
                                  },
                                  "directive": null,
                                  "start": 309,
                                  "end": 340
                                }
                              ],
                              "start": 291,
                              "end": 354
                            },
                            "alternate": null,
                            "start": 269,
                            "end": 354
                          }
                        ],
                        "start": 255,
                        "end": 364
                      },
                      "expression": false,
                      "start": 224,
                      "end": 364
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 217,
                    "end": 364
                  }
                ],
                "start": 64,
                "end": 370
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 34,
              "end": 370
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 27,
            "end": 370
          }
        ],
        "start": 21,
        "end": 372
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 372
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 372
}
```
