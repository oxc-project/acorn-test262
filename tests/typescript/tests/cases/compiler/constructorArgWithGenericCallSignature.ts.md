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
        "start": 7,
        "end": 11
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
                "start": 35,
                "end": 41
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
                            "start": 53,
                            "end": 54
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 53,
                          "end": 54
                        }
                      ],
                      "start": 52,
                      "end": 55
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
                              "start": 64,
                              "end": 65
                            },
                            "typeArguments": null,
                            "start": 64,
                            "end": 65
                          },
                          "start": 62,
                          "end": 65
                        },
                        "start": 56,
                        "end": 65
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
                          "start": 68,
                          "end": 69
                        },
                        "typeArguments": null,
                        "start": 68,
                        "end": 69
                      },
                      "start": 66,
                      "end": 69
                    },
                    "start": 52,
                    "end": 70
                  }
                ],
                "start": 42,
                "end": 76
              },
              "declare": false,
              "start": 25,
              "end": 76
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 18,
            "end": 76
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
                "start": 94,
                "end": 101
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
                      "start": 112,
                      "end": 123
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
                                "start": 130,
                                "end": 136
                              },
                              "typeArguments": null,
                              "start": 130,
                              "end": 136
                            },
                            "start": 128,
                            "end": 136
                          },
                          "start": 124,
                          "end": 136
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 138,
                        "end": 141
                      },
                      "expression": false,
                      "start": 123,
                      "end": 141
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 112,
                    "end": 141
                  }
                ],
                "start": 102,
                "end": 147
              },
              "abstract": false,
              "declare": false,
              "start": 88,
              "end": 147
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 81,
            "end": 147
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
                "start": 167,
                "end": 168
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
                        "start": 175,
                        "end": 181
                      },
                      "typeArguments": null,
                      "start": 175,
                      "end": 181
                    },
                    "start": 173,
                    "end": 181
                  },
                  "start": 169,
                  "end": 181
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 183,
                "end": 186
              },
              "expression": false,
              "start": 158,
              "end": 186
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 151,
            "end": 186
          }
        ],
        "start": 12,
        "end": 188
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 188
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
                    "start": 199,
                    "end": 203
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyFunc",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 204,
                    "end": 210
                  },
                  "start": 199,
                  "end": 210
                },
                "typeArguments": null,
                "start": 199,
                "end": 210
              },
              "start": 197,
              "end": 210
            },
            "start": 193,
            "end": 210
          },
          "init": null,
          "definite": false,
          "start": 193,
          "end": 210
        }
      ],
      "declare": false,
      "start": 189,
      "end": 211
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
            "start": 212,
            "end": 216
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 218
          },
          "optional": false,
          "computed": false,
          "start": 212,
          "end": 218
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 223
          }
        ],
        "optional": false,
        "start": 212,
        "end": 224
      },
      "directive": null,
      "start": 212,
      "end": 225
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
            "start": 236,
            "end": 240
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
                "start": 247,
                "end": 251
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 259
              },
              "optional": false,
              "computed": false,
              "start": 247,
              "end": 259
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null,
                "start": 260,
                "end": 264
              }
            ],
            "start": 243,
            "end": 265
          },
          "definite": false,
          "start": 236,
          "end": 265
        }
      ],
      "declare": false,
      "start": 232,
      "end": 266
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 282
}
```
