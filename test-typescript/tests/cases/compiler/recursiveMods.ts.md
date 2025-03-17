__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 251,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 40,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 40,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 17,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 18,
          "end": 40,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 21,
              "end": 38,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 28,
                "end": 38,
                "id": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 36,
                  "end": 38,
                  "body": []
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 42,
      "end": 250,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 49,
        "end": 250,
        "id": {
          "type": "Identifier",
          "start": 56,
          "end": 59,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 60,
          "end": 250,
          "body": [
            {
              "type": "FunctionDeclaration",
              "start": 64,
              "end": 134,
              "id": {
                "type": "Identifier",
                "start": 73,
                "end": 76,
                "name": "Bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 83,
                "end": 134,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 87,
                    "end": 113,
                    "test": {
                      "type": "Literal",
                      "start": 91,
                      "end": 95,
                      "value": true,
                      "raw": "true"
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 97,
                      "end": 113,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 99,
                          "end": 112,
                          "argument": {
                            "type": "CallExpression",
                            "start": 106,
                            "end": 111,
                            "callee": {
                              "type": "Identifier",
                              "start": 106,
                              "end": 109,
                              "name": "Bar",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 116,
                    "end": 131,
                    "argument": {
                      "type": "NewExpression",
                      "start": 123,
                      "end": 130,
                      "callee": {
                        "type": "Identifier",
                        "start": 127,
                        "end": 128,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 79,
                "end": 82,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 81,
                  "end": 82,
                  "typeName": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 82,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            {
              "type": "FunctionDeclaration",
              "start": 137,
              "end": 193,
              "id": {
                "type": "Identifier",
                "start": 146,
                "end": 149,
                "name": "Baz",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 156,
                "end": 193,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 160,
                    "end": 174,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 164,
                        "end": 173,
                        "id": {
                          "type": "Identifier",
                          "start": 164,
                          "end": 165,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 168,
                          "end": 173,
                          "callee": {
                            "type": "Identifier",
                            "start": 168,
                            "end": 171,
                            "name": "Baz",
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
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 177,
                    "end": 190,
                    "argument": {
                      "type": "CallExpression",
                      "start": 184,
                      "end": 189,
                      "callee": {
                        "type": "Identifier",
                        "start": 184,
                        "end": 187,
                        "name": "Bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 152,
                "end": 155,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 154,
                  "end": 155,
                  "typeName": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 155,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            {
              "type": "FunctionDeclaration",
              "start": 196,
              "end": 246,
              "id": {
                "type": "Identifier",
                "start": 205,
                "end": 208,
                "name": "Gar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 211,
                "end": 246,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 215,
                    "end": 233,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 219,
                        "end": 232,
                        "id": {
                          "type": "Identifier",
                          "start": 219,
                          "end": 224,
                          "name": "c",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 221,
                            "end": 224,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 223,
                              "end": 224,
                              "typeName": {
                                "type": "Identifier",
                                "start": 223,
                                "end": 224,
                                "name": "C",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 227,
                          "end": 232,
                          "callee": {
                            "type": "Identifier",
                            "start": 227,
                            "end": 230,
                            "name": "Baz",
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
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 236,
                    "end": 243,
                    "argument": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
