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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 17,
        "decorators": [],
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 18,
        "end": 366,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 24,
            "end": 364,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 31,
              "end": 364,
              "id": {
                "type": "Identifier",
                "start": 38,
                "end": 57,
                "decorators": [],
                "name": "CompilerDiagnostics",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 58,
                "end": 364,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 69,
                    "end": 156,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 76,
                      "end": 156,
                      "id": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 103,
                        "decorators": [],
                        "name": "IDiagnosticWriter",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 104,
                        "end": 156,
                        "body": [
                          {
                            "type": "TSMethodSignature",
                            "start": 118,
                            "end": 146,
                            "key": {
                              "type": "Identifier",
                              "start": 118,
                              "end": 123,
                              "decorators": [],
                              "name": "Alert",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "computed": false,
                            "optional": false,
                            "kind": "method",
                            "typeParameters": null,
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
                            "accessibility": null,
                            "readonly": false,
                            "static": false
                          }
                        ]
                      },
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 166,
                    "end": 201,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 173,
                      "end": 201,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 177,
                          "end": 200,
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
                            "value": null,
                            "raw": "null"
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 211,
                    "end": 358,
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 218,
                      "end": 358,
                      "id": {
                        "type": "Identifier",
                        "start": 227,
                        "end": 232,
                        "decorators": [],
                        "name": "Alert",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
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
                      "body": {
                        "type": "BlockStatement",
                        "start": 249,
                        "end": 358,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 263,
                            "end": 348,
                            "test": {
                              "type": "Identifier",
                              "start": 267,
                              "end": 283,
                              "decorators": [],
                              "name": "diagnosticWriter",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 285,
                              "end": 348,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 303,
                                  "end": 334,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 303,
                                    "end": 333,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 303,
                                      "end": 325,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 303,
                                        "end": 319,
                                        "decorators": [],
                                        "name": "diagnosticWriter",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 320,
                                        "end": 325,
                                        "decorators": [],
                                        "name": "Alert",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "typeArguments": null,
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
                                    "optional": false
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "alternate": null
                          }
                        ]
                      },
                      "expression": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
