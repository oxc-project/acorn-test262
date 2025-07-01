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
        "start": 7,
        "end": 17
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
                "start": 38,
                "end": 57
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
                        "start": 86,
                        "end": 103
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
                              "start": 118,
                              "end": 123
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
                                    "start": 132,
                                    "end": 138
                                  },
                                  "start": 130,
                                  "end": 138
                                },
                                "start": 124,
                                "end": 138
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 141,
                                "end": 145
                              },
                              "start": 139,
                              "end": 145
                            },
                            "accessibility": null,
                            "readonly": false,
                            "static": false,
                            "start": 118,
                            "end": 146
                          }
                        ],
                        "start": 104,
                        "end": 156
                      },
                      "declare": false,
                      "start": 76,
                      "end": 156
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 69,
                    "end": 156
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
                            "start": 177,
                            "end": 193
                          },
                          "init": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 196,
                            "end": 200
                          },
                          "definite": false,
                          "start": 177,
                          "end": 200
                        }
                      ],
                      "declare": false,
                      "start": 173,
                      "end": 201
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 166,
                    "end": 201
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
                        "start": 227,
                        "end": 232
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
                              "start": 241,
                              "end": 247
                            },
                            "start": 239,
                            "end": 247
                          },
                          "start": 233,
                          "end": 247
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
                              "start": 267,
                              "end": 283
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
                                        "start": 303,
                                        "end": 319
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Alert",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 320,
                                        "end": 325
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 303,
                                      "end": 325
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "output",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 326,
                                        "end": 332
                                      }
                                    ],
                                    "optional": false,
                                    "start": 303,
                                    "end": 333
                                  },
                                  "directive": null,
                                  "start": 303,
                                  "end": 334
                                }
                              ],
                              "start": 285,
                              "end": 348
                            },
                            "alternate": null,
                            "start": 263,
                            "end": 348
                          }
                        ],
                        "start": 249,
                        "end": 358
                      },
                      "expression": false,
                      "start": 218,
                      "end": 358
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 211,
                    "end": 358
                  }
                ],
                "start": 58,
                "end": 364
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 31,
              "end": 364
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 24,
            "end": 364
          }
        ],
        "start": 18,
        "end": 366
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 366
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 366
}
```
