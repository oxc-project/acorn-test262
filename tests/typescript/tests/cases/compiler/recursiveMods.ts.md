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
          "start": 17,
          "end": 20
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
                  "start": 37,
                  "end": 38
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 39,
                  "end": 41
                },
                "abstract": false,
                "declare": false,
                "start": 31,
                "end": 41
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 24,
              "end": 41
            }
          ],
          "start": 21,
          "end": 43
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 43
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 43
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
          "start": 62,
          "end": 65
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
                "start": 79,
                "end": 82
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
                    "start": 87,
                    "end": 88
                  },
                  "typeArguments": null,
                  "start": 87,
                  "end": 88
                },
                "start": 85,
                "end": 88
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
                      "start": 97,
                      "end": 101
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
                              "start": 112,
                              "end": 115
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 112,
                            "end": 117
                          },
                          "start": 105,
                          "end": 118
                        }
                      ],
                      "start": 103,
                      "end": 119
                    },
                    "alternate": null,
                    "start": 93,
                    "end": 119
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
                        "start": 133,
                        "end": 134
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 129,
                      "end": 136
                    },
                    "start": 122,
                    "end": 137
                  }
                ],
                "start": 89,
                "end": 140
              },
              "expression": false,
              "start": 70,
              "end": 140
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Baz",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 155
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
                    "start": 160,
                    "end": 161
                  },
                  "typeArguments": null,
                  "start": 160,
                  "end": 161
                },
                "start": 158,
                "end": 161
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
                          "start": 170,
                          "end": 171
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Baz",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 174,
                            "end": 177
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 174,
                          "end": 179
                        },
                        "definite": false,
                        "start": 170,
                        "end": 179
                      }
                    ],
                    "declare": false,
                    "start": 166,
                    "end": 180
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
                        "start": 190,
                        "end": 193
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 190,
                      "end": 195
                    },
                    "start": 183,
                    "end": 196
                  }
                ],
                "start": 162,
                "end": 199
              },
              "expression": false,
              "start": 143,
              "end": 199
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Gar",
                "optional": false,
                "typeAnnotation": null,
                "start": 211,
                "end": 214
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
                                "start": 229,
                                "end": 230
                              },
                              "typeArguments": null,
                              "start": 229,
                              "end": 230
                            },
                            "start": 227,
                            "end": 230
                          },
                          "start": 225,
                          "end": 230
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Baz",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 233,
                            "end": 236
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 233,
                          "end": 238
                        },
                        "definite": false,
                        "start": 225,
                        "end": 238
                      }
                    ],
                    "declare": false,
                    "start": 221,
                    "end": 239
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 242,
                    "end": 249
                  }
                ],
                "start": 217,
                "end": 252
              },
              "expression": false,
              "start": 202,
              "end": 252
            }
          ],
          "start": 66,
          "end": 256
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 52,
        "end": 256
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 45,
      "end": 256
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 256
}
```
