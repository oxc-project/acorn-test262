__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 366,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 366,
      "body": {
        "type": "TSModuleBlock",
        "start": 18,
        "end": 366,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 24,
            "end": 364,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 31,
              "end": 364,
              "body": {
                "type": "TSModuleBlock",
                "start": 58,
                "end": 364,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 69,
                    "end": 156,
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 76,
                      "end": 156,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 104,
                        "end": 156,
                        "body": [
                          {
                            "type": "TSMethodSignature",
                            "start": 118,
                            "end": 146,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 118,
                              "end": 123,
                              "decorators": [],
                              "name": "Alert",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "method",
                            "optional": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 124,
                                "end": 138,
                                "decorators": [],
                                "name": "output",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 130,
                                  "end": 138,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 132,
                                    "end": 138
                                  }
                                }
                              }
                            ],
                            "readonly": false,
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 139,
                              "end": 145,
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 141,
                                "end": 145
                              }
                            },
                            "static": false,
                            "typeParameters": null
                          }
                        ]
                      },
                      "declare": false,
                      "extends": [],
                      "id": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 103,
                        "decorators": [],
                        "name": "IDiagnosticWriter",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null
                    },
                    "exportKind": "type",
                    "source": null,
                    "specifiers": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 166,
                    "end": 201,
                    "attributes": [],
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 173,
                      "end": 201,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 177,
                          "end": 200,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 177,
                            "end": 193,
                            "decorators": [],
                            "name": "diagnosticWriter",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Literal",
                            "start": 196,
                            "end": 200,
                            "raw": "null",
                            "value": null
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var"
                    },
                    "exportKind": "value",
                    "source": null,
                    "specifiers": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 211,
                    "end": 358,
                    "attributes": [],
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 218,
                      "end": 358,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 249,
                        "end": 358,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 263,
                            "end": 348,
                            "alternate": null,
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 285,
                              "end": 348,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 303,
                                  "end": 334,
                                  "directive": null,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 303,
                                    "end": 333,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 326,
                                        "end": 332,
                                        "decorators": [],
                                        "name": "output",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 303,
                                      "end": 325,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 303,
                                        "end": 319,
                                        "decorators": [],
                                        "name": "diagnosticWriter",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 320,
                                        "end": 325,
                                        "decorators": [],
                                        "name": "Alert",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "optional": false,
                                    "typeArguments": null
                                  }
                                }
                              ]
                            },
                            "test": {
                              "type": "Identifier",
                              "start": 267,
                              "end": 283,
                              "decorators": [],
                              "name": "diagnosticWriter",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": {
                        "type": "Identifier",
                        "start": 227,
                        "end": 232,
                        "decorators": [],
                        "name": "Alert",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 233,
                          "end": 247,
                          "decorators": [],
                          "name": "output",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 239,
                            "end": 247,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 241,
                              "end": 247
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    },
                    "exportKind": "value",
                    "source": null,
                    "specifiers": []
                  }
                ]
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "start": 38,
                "end": 57,
                "decorators": [],
                "name": "CompilerDiagnostics",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "module"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 17,
        "decorators": [],
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
