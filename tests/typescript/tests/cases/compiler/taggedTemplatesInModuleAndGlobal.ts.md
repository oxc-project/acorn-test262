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
        "name": "n",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 29
            },
            "generator": false,
            "async": false,
            "declare": false,
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
                    "start": 30,
                    "end": 31
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 30,
                  "end": 31
                }
              ],
              "start": 29,
              "end": 32
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
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
                      "start": 36,
                      "end": 37
                    },
                    "typeArguments": null,
                    "start": 36,
                    "end": 37
                  },
                  "start": 34,
                  "end": 37
                },
                "start": 33,
                "end": 37
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
                  "start": 40,
                  "end": 41
                },
                "typeArguments": null,
                "start": 40,
                "end": 41
              },
              "start": 38,
              "end": 41
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 59,
                    "end": 60
                  },
                  "start": 52,
                  "end": 61
                }
              ],
              "start": 42,
              "end": 67
            },
            "expression": false,
            "start": 18,
            "end": 67
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "templateObjectFactory",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 103
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TaggedTemplateExpression",
                    "tag": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 123,
                      "end": 125
                    },
                    "typeArguments": null,
                    "quasi": {
                      "type": "TemplateLiteral",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "hello world",
                            "cooked": "hello world"
                          },
                          "tail": true,
                          "start": 125,
                          "end": 138
                        }
                      ],
                      "expressions": [],
                      "start": 125,
                      "end": 138
                    },
                    "start": 123,
                    "end": 138
                  },
                  "start": 116,
                  "end": 139
                }
              ],
              "start": 106,
              "end": 145
            },
            "expression": false,
            "start": 73,
            "end": 145
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 160
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "templateObjectFactory",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 163,
                      "end": 184
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 163,
                    "end": 186
                  },
                  "operator": "===",
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "templateObjectFactory",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 191,
                      "end": 212
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 191,
                    "end": 214
                  },
                  "start": 163,
                  "end": 214
                },
                "definite": false,
                "start": 154,
                "end": 214
              }
            ],
            "declare": false,
            "start": 150,
            "end": 215
          }
        ],
        "start": 12,
        "end": 217
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 217
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 217
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "id",
        "optional": false,
        "typeAnnotation": null,
        "start": 20,
        "end": 22
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 23,
              "end": 24
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 23,
            "end": 24
          }
        ],
        "start": 22,
        "end": 25
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 29,
                "end": 30
              },
              "typeArguments": null,
              "start": 29,
              "end": 30
            },
            "start": 27,
            "end": 30
          },
          "start": 26,
          "end": 30
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
            "start": 33,
            "end": 34
          },
          "typeArguments": null,
          "start": 33,
          "end": 34
        },
        "start": 31,
        "end": 34
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 49
            },
            "start": 41,
            "end": 50
          }
        ],
        "start": 35,
        "end": 52
      },
      "expression": false,
      "start": 11,
      "end": 52
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "templateObjectFactory",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 84
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
            "type": "ReturnStatement",
            "argument": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 102
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "hello world",
                      "cooked": "hello world"
                    },
                    "tail": true,
                    "start": 102,
                    "end": 115
                  }
                ],
                "expressions": [],
                "start": 102,
                "end": 115
              },
              "start": 100,
              "end": 115
            },
            "start": 93,
            "end": 116
          }
        ],
        "start": 87,
        "end": 118
      },
      "expression": false,
      "start": 54,
      "end": 118
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 129
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "templateObjectFactory",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 153
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 132,
              "end": 155
            },
            "operator": "===",
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "templateObjectFactory",
                "optional": false,
                "typeAnnotation": null,
                "start": 160,
                "end": 181
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 160,
              "end": 183
            },
            "start": 132,
            "end": 183
          },
          "definite": false,
          "start": 123,
          "end": 183
        }
      ],
      "declare": false,
      "start": 119,
      "end": 184
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 184
}
```
