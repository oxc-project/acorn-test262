__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 250,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 40,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 40,
        "body": {
          "type": "TSModuleBlock",
          "start": 18,
          "end": 40,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 21,
              "end": 38,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 28,
                "end": 38,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 36,
                  "end": 38,
                  "body": []
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "implements": [],
                "superClass": null,
                "superTypeArguments": null,
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
          "start": 14,
          "end": 17,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 42,
      "end": 250,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 49,
        "end": 250,
        "body": {
          "type": "TSModuleBlock",
          "start": 60,
          "end": 250,
          "body": [
            {
              "type": "FunctionDeclaration",
              "start": 64,
              "end": 134,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 83,
                "end": 134,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 87,
                    "end": 113,
                    "alternate": null,
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
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 106,
                              "end": 109,
                              "decorators": [],
                              "name": "Bar",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "Literal",
                      "start": 91,
                      "end": 95,
                      "raw": "true",
                      "value": true
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 116,
                    "end": 131,
                    "argument": {
                      "type": "NewExpression",
                      "start": 123,
                      "end": 130,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 127,
                        "end": 128,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 73,
                "end": 76,
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 79,
                "end": 82,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 81,
                  "end": 82,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 82,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            },
            {
              "type": "FunctionDeclaration",
              "start": 137,
              "end": 193,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 164,
                          "end": 165,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 168,
                          "end": 173,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 168,
                            "end": 171,
                            "decorators": [],
                            "name": "Baz",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 177,
                    "end": 190,
                    "argument": {
                      "type": "CallExpression",
                      "start": 184,
                      "end": 189,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 184,
                        "end": 187,
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 146,
                "end": 149,
                "decorators": [],
                "name": "Baz",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 152,
                "end": 155,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 154,
                  "end": 155,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 155,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            },
            {
              "type": "FunctionDeclaration",
              "start": 196,
              "end": 246,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 219,
                          "end": 224,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 221,
                            "end": 224,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 223,
                              "end": 224,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 223,
                                "end": 224,
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 227,
                          "end": 232,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 227,
                            "end": 230,
                            "decorators": [],
                            "name": "Baz",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 205,
                "end": 208,
                "decorators": [],
                "name": "Gar",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 56,
          "end": 59,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
