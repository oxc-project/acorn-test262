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
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
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
                "name": "MyFunc",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 44
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 56,
                            "end": 57
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 56,
                          "end": 57
                        }
                      ],
                      "start": 55,
                      "end": 58
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 67,
                              "end": 68
                            },
                            "typeArguments": null,
                            "start": 67,
                            "end": 68
                          },
                          "start": 65,
                          "end": 68
                        },
                        "start": 59,
                        "end": 68
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 71,
                          "end": 72
                        },
                        "typeArguments": null,
                        "start": 71,
                        "end": 72
                      },
                      "start": 69,
                      "end": 72
                    },
                    "start": 55,
                    "end": 73
                  }
                ],
                "start": 45,
                "end": 79
              },
              "declare": false,
              "start": 28,
              "end": 79
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 21,
            "end": 79
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 97,
                "end": 104
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 115,
                      "end": 126
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyFunc",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 133,
                                "end": 139
                              },
                              "typeArguments": null,
                              "start": 133,
                              "end": 139
                            },
                            "start": 131,
                            "end": 139
                          },
                          "start": 127,
                          "end": 139
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 141,
                        "end": 144
                      },
                      "expression": false,
                      "start": 126,
                      "end": 144
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 115,
                    "end": 144
                  }
                ],
                "start": 105,
                "end": 150
              },
              "abstract": false,
              "declare": false,
              "start": 91,
              "end": 150
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 84,
            "end": 150
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 171
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "func",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyFunc",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 178,
                        "end": 184
                      },
                      "typeArguments": null,
                      "start": 178,
                      "end": 184
                    },
                    "start": 176,
                    "end": 184
                  },
                  "start": 172,
                  "end": 184
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 186,
                "end": 189
              },
              "expression": false,
              "start": 161,
              "end": 189
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 154,
            "end": 189
          }
        ],
        "start": 15,
        "end": 191
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 191
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 202,
                    "end": 206
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyFunc",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 207,
                    "end": 213
                  },
                  "start": 202,
                  "end": 213
                },
                "typeArguments": null,
                "start": 202,
                "end": 213
              },
              "start": 200,
              "end": 213
            },
            "start": 196,
            "end": 213
          },
          "init": null,
          "definite": false,
          "start": 196,
          "end": 213
        }
      ],
      "declare": false,
      "start": 192,
      "end": 214
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Test",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 219
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 221
          },
          "optional": false,
          "computed": false,
          "start": 215,
          "end": 221
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 226
          }
        ],
        "optional": false,
        "start": 215,
        "end": 227
      },
      "directive": null,
      "start": 215,
      "end": 228
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 243
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Test",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 254
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 262
              },
              "optional": false,
              "computed": false,
              "start": 250,
              "end": 262
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null,
                "start": 263,
                "end": 267
              }
            ],
            "start": 246,
            "end": 268
          },
          "definite": false,
          "start": 239,
          "end": 268
        }
      ],
      "declare": false,
      "start": 235,
      "end": 269
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 285
}
```
