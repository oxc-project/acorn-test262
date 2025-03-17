__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 380,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 213,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 213,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 19,
          "name": "ns",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 20,
          "end": 213,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 26,
              "end": 137,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 33,
                "end": 137,
                "id": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 52,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "TSModuleBlock",
                  "start": 53,
                  "end": 137,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 63,
                      "end": 89,
                      "declaration": {
                        "type": "VariableDeclaration",
                        "start": 70,
                        "end": 89,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 76,
                            "end": 88,
                            "id": {
                              "type": "Identifier",
                              "start": 76,
                              "end": 77,
                              "name": "s",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 80,
                              "end": 88,
                              "callee": {
                                "type": "Identifier",
                                "start": 80,
                                "end": 86,
                                "name": "Symbol",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "optional": false,
                              "typeArguments": null
                            },
                            "definite": false
                          }
                        ],
                        "kind": "const",
                        "declare": false
                      },
                      "specifiers": [],
                      "source": null,
                      "attributes": [],
                      "exportKind": "value"
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 98,
                      "end": 131,
                      "declaration": {
                        "type": "TSTypeAliasDeclaration",
                        "start": 105,
                        "end": 131,
                        "id": {
                          "type": "Identifier",
                          "start": 110,
                          "end": 119,
                          "name": "undefined",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "start": 122,
                          "end": 130,
                          "exprName": {
                            "type": "Identifier",
                            "start": 129,
                            "end": 130,
                            "name": "s",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "declare": false
                      },
                      "specifiers": [],
                      "source": null,
                      "attributes": [],
                      "exportKind": "type"
                    }
                  ]
                },
                "kind": "namespace",
                "declare": false,
                "global": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "EmptyStatement",
              "start": 137,
              "end": 138
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 143,
              "end": 211,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 150,
                "end": 211,
                "id": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 160,
                  "name": "x",
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
                    "start": 161,
                    "end": 173,
                    "name": "p",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 162,
                      "end": 173,
                      "typeAnnotation": {
                        "type": "TSUndefinedKeyword",
                        "start": 164,
                        "end": 173
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 186,
                  "end": 211,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 196,
                      "end": 205,
                      "argument": {
                        "type": "Identifier",
                        "start": 203,
                        "end": 204,
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 174,
                  "end": 185,
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 176,
                    "end": 185
                  }
                }
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 215,
      "end": 277,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 222,
        "end": 277,
        "id": {
          "type": "Identifier",
          "start": 231,
          "end": 232,
          "name": "x",
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
            "end": 258,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 234,
              "end": 258,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 236,
                "end": 258,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 236,
                  "end": 258,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 236,
                    "end": 248,
                    "left": {
                      "type": "Identifier",
                      "start": 236,
                      "end": 238,
                      "name": "ns",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 239,
                      "end": 248,
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 249,
                    "end": 258,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 260,
          "end": 277,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 266,
              "end": 275,
              "argument": {
                "type": "Identifier",
                "start": 273,
                "end": 274,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 279,
      "end": 378,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 286,
        "end": 378,
        "id": {
          "type": "Identifier",
          "start": 296,
          "end": 305,
          "name": "undefined",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 306,
          "end": 378,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 312,
              "end": 338,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 319,
                "end": 338,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 325,
                    "end": 337,
                    "id": {
                      "type": "Identifier",
                      "start": 325,
                      "end": 326,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "CallExpression",
                      "start": 329,
                      "end": 337,
                      "callee": {
                        "type": "Identifier",
                        "start": 329,
                        "end": 335,
                        "name": "Symbol",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "definite": false
                  }
                ],
                "kind": "const",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 343,
              "end": 376,
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "start": 350,
                "end": 376,
                "id": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 364,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 367,
                  "end": 375,
                  "exprName": {
                    "type": "Identifier",
                    "start": 374,
                    "end": 375,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "type"
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "EmptyStatement",
      "start": 378,
      "end": 379
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
