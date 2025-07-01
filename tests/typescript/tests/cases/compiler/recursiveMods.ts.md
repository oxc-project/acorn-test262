__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 17
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
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 35
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 36,
                  "end": 38
                },
                "abstract": false,
                "declare": false,
                "start": 28,
                "end": 38
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 21,
              "end": 38
            }
          ],
          "start": 18,
          "end": 40
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 40
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 40
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 56,
          "end": 59
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 73,
                "end": 76
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 81,
                    "end": 82
                  },
                  "typeArguments": null,
                  "start": 81,
                  "end": 82
                },
                "start": 79,
                "end": 82
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 91,
                      "end": 95
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Bar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 106,
                              "end": 109
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 106,
                            "end": 111
                          },
                          "start": 99,
                          "end": 112
                        }
                      ],
                      "start": 97,
                      "end": 113
                    },
                    "alternate": null,
                    "start": 87,
                    "end": 113
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 127,
                        "end": 128
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 123,
                      "end": 130
                    },
                    "start": 116,
                    "end": 131
                  }
                ],
                "start": 83,
                "end": 134
              },
              "expression": false,
              "start": 64,
              "end": 134
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Baz",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 149
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 154,
                    "end": 155
                  },
                  "typeArguments": null,
                  "start": 154,
                  "end": 155
                },
                "start": 152,
                "end": 155
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 164,
                          "end": 165
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Baz",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 168,
                            "end": 171
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 168,
                          "end": 173
                        },
                        "definite": false,
                        "start": 164,
                        "end": 173
                      }
                    ],
                    "declare": false,
                    "start": 160,
                    "end": 174
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 184,
                        "end": 187
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 184,
                      "end": 189
                    },
                    "start": 177,
                    "end": 190
                  }
                ],
                "start": 156,
                "end": 193
              },
              "expression": false,
              "start": 137,
              "end": 193
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Gar",
                "optional": false,
                "typeAnnotation": null,
                "start": 205,
                "end": 208
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 223,
                                "end": 224
                              },
                              "typeArguments": null,
                              "start": 223,
                              "end": 224
                            },
                            "start": 221,
                            "end": 224
                          },
                          "start": 219,
                          "end": 224
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Baz",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 227,
                            "end": 230
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 227,
                          "end": 232
                        },
                        "definite": false,
                        "start": 219,
                        "end": 232
                      }
                    ],
                    "declare": false,
                    "start": 215,
                    "end": 233
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 236,
                    "end": 243
                  }
                ],
                "start": 211,
                "end": 246
              },
              "expression": false,
              "start": 196,
              "end": 246
            }
          ],
          "start": 60,
          "end": 250
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 49,
        "end": 250
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 42,
      "end": 250
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 250
}
```
