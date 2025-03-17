__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 367,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 366,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 17,
        "name": "TypeScript",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "CompilerDiagnostics",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                        "name": "IDiagnosticWriter",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "extends": [],
                      "typeParameters": null,
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
                              "name": "Alert",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                                "name": "output",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 130,
                                  "end": 138,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 132,
                                    "end": 138
                                  }
                                },
                                "decorators": [],
                                "optional": false
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
                    "attributes": [],
                    "exportKind": "type"
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 166,
                    "end": 201,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 173,
                      "end": 201,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 177,
                          "end": 200,
                          "id": {
                            "type": "Identifier",
                            "start": 177,
                            "end": 193,
                            "name": "diagnosticWriter",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                      "kind": "var",
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
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
                        "name": "Alert",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 233,
                          "end": 247,
                          "name": "output",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 239,
                            "end": 247,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 241,
                              "end": 247
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                              "name": "diagnosticWriter",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                                        "name": "diagnosticWriter",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 320,
                                        "end": 325,
                                        "name": "Alert",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 326,
                                        "end": 332,
                                        "name": "output",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
                                    "optional": false,
                                    "typeArguments": null
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "alternate": null
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
