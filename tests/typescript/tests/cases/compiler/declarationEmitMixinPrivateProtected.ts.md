__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mix",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TMix",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 25
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 21,
            "end": 25
          }
        ],
        "start": 20,
        "end": 26
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "mixin",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TMix",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 38
              },
              "typeArguments": null,
              "start": 34,
              "end": 38
            },
            "start": 32,
            "end": 38
          },
          "start": 27,
          "end": 38
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TMix",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 45
          },
          "typeArguments": null,
          "start": 41,
          "end": 45
        },
        "start": 39,
        "end": 45
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 46
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "DisposableMixin",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 69
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "name": "_onDispose",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 104
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 117,
                                "end": 121
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_assertIsStripped",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 122,
                                "end": 139
                              },
                              "optional": false,
                              "computed": false,
                              "start": 117,
                              "end": 139
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 117,
                            "end": 141
                          },
                          "directive": null,
                          "start": 117,
                          "end": 141
                        }
                      ],
                      "start": 107,
                      "end": 147
                    },
                    "expression": false,
                    "start": 104,
                    "end": 147
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "protected",
                  "start": 84,
                  "end": 147
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_assertIsStripped",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 160,
                    "end": 177
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 180,
                      "end": 187
                    },
                    "expression": false,
                    "start": 177,
                    "end": 187
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 152,
                  "end": 187
                }
              ],
              "start": 78,
              "end": 189
            },
            "abstract": false,
            "declare": false,
            "start": 72,
            "end": 189
          },
          "definite": false,
          "start": 54,
          "end": 189
        }
      ],
      "declare": false,
      "start": 48,
      "end": 190
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mix",
          "optional": false,
          "typeAnnotation": null,
          "start": 246,
          "end": 249
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "DisposableMixin",
            "optional": false,
            "typeAnnotation": null,
            "start": 250,
            "end": 265
          }
        ],
        "optional": false,
        "start": 246,
        "end": 266
      },
      "exportKind": "value",
      "start": 231,
      "end": 267
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Monitor",
          "optional": false,
          "typeAnnotation": null,
          "start": 281,
          "end": 288
        },
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "mix",
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 300
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "DisposableMixin",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 316
            }
          ],
          "optional": false,
          "start": 297,
          "end": 317
        },
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
                "name": "_onDispose",
                "optional": false,
                "typeAnnotation": null,
                "start": 334,
                "end": 344
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 347,
                  "end": 354
                },
                "expression": false,
                "start": 344,
                "end": 354
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "protected",
              "start": 324,
              "end": 354
            }
          ],
          "start": 318,
          "end": 356
        },
        "abstract": false,
        "declare": false,
        "start": 275,
        "end": 356
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 268,
      "end": 356
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 357
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mix",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TMix",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 25
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 21,
            "end": 25
          }
        ],
        "start": 20,
        "end": 26
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "mixin",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TMix",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 38
              },
              "typeArguments": null,
              "start": 34,
              "end": 38
            },
            "start": 32,
            "end": 38
          },
          "start": 27,
          "end": 38
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TMix",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 45
          },
          "typeArguments": null,
          "start": 41,
          "end": 45
        },
        "start": 39,
        "end": 45
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 46
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "DisposableMixin",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 69
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "name": "_onDispose",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 104
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 117,
                                "end": 121
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_assertIsStripped",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 122,
                                "end": 139
                              },
                              "optional": false,
                              "computed": false,
                              "start": 117,
                              "end": 139
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 117,
                            "end": 141
                          },
                          "directive": null,
                          "start": 117,
                          "end": 141
                        }
                      ],
                      "start": 107,
                      "end": 147
                    },
                    "expression": false,
                    "start": 104,
                    "end": 147
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "protected",
                  "start": 84,
                  "end": 147
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_assertIsStripped",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 160,
                    "end": 177
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 180,
                      "end": 187
                    },
                    "expression": false,
                    "start": 177,
                    "end": 187
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 152,
                  "end": 187
                }
              ],
              "start": 78,
              "end": 189
            },
            "abstract": false,
            "declare": false,
            "start": 72,
            "end": 189
          },
          "definite": false,
          "start": 54,
          "end": 189
        }
      ],
      "declare": false,
      "start": 48,
      "end": 190
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": null,
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "mix",
            "optional": false,
            "typeAnnotation": null,
            "start": 221,
            "end": 224
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "DisposableMixin",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 240
            }
          ],
          "optional": false,
          "start": 221,
          "end": 241
        },
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
                "name": "_onDispose",
                "optional": false,
                "typeAnnotation": null,
                "start": 258,
                "end": 268
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 271,
                  "end": 278
                },
                "expression": false,
                "start": 268,
                "end": 278
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "protected",
              "start": 248,
              "end": 278
            }
          ],
          "start": 242,
          "end": 280
        },
        "abstract": false,
        "declare": false,
        "start": 207,
        "end": 280
      },
      "exportKind": "value",
      "start": 192,
      "end": 280
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 280
}
```
