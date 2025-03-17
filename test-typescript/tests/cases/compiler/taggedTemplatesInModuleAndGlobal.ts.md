__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 217,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 217,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "n",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 217,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 18,
            "end": 67,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 29,
              "name": "id",
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
                "start": 33,
                "end": 37,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 34,
                  "end": 37,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 36,
                    "end": 37,
                    "typeName": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 37,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
              "start": 42,
              "end": 67,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 52,
                  "end": 61,
                  "argument": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 29,
              "end": 32,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 30,
                  "end": 31,
                  "name": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 41,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 40,
                "end": 41,
                "typeName": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 41,
                  "name": "T",
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
            "start": 73,
            "end": 145,
            "id": {
              "type": "Identifier",
              "start": 82,
              "end": 103,
              "name": "templateObjectFactory",
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
              "start": 106,
              "end": 145,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 116,
                  "end": 139,
                  "argument": {
                    "type": "TaggedTemplateExpression",
                    "start": 123,
                    "end": 138,
                    "tag": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 125,
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "quasi": {
                      "type": "TemplateLiteral",
                      "start": 125,
                      "end": 138,
                      "expressions": [],
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 125,
                          "end": 138,
                          "value": {
                            "cooked": "hello world",
                            "raw": "hello world"
                          },
                          "tail": true
                        }
                      ]
                    },
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "VariableDeclaration",
            "start": 150,
            "end": 215,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 154,
                "end": 214,
                "id": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 160,
                  "name": "result",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 163,
                  "end": 214,
                  "left": {
                    "type": "CallExpression",
                    "start": 163,
                    "end": 186,
                    "callee": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 184,
                      "name": "templateObjectFactory",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "CallExpression",
                    "start": 191,
                    "end": 214,
                    "callee": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 212,
                      "name": "templateObjectFactory",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 185,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 11,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 22,
        "name": "id",
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
          "start": 26,
          "end": 30,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 30,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 29,
              "end": 30,
              "typeName": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
        "start": 35,
        "end": 52,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 41,
            "end": 50,
            "argument": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 22,
        "end": 25,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 23,
            "end": 24,
            "name": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 34,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 33,
          "end": 34,
          "typeName": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "name": "T",
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
      "start": 54,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 84,
        "name": "templateObjectFactory",
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
        "start": 87,
        "end": 118,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 93,
            "end": 116,
            "argument": {
              "type": "TaggedTemplateExpression",
              "start": 100,
              "end": 115,
              "tag": {
                "type": "Identifier",
                "start": 100,
                "end": 102,
                "name": "id",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "quasi": {
                "type": "TemplateLiteral",
                "start": 102,
                "end": 115,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 102,
                    "end": 115,
                    "value": {
                      "cooked": "hello world",
                      "raw": "hello world"
                    },
                    "tail": true
                  }
                ]
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 183,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 129,
            "name": "result",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 132,
            "end": 183,
            "left": {
              "type": "CallExpression",
              "start": 132,
              "end": 155,
              "callee": {
                "type": "Identifier",
                "start": 132,
                "end": 153,
                "name": "templateObjectFactory",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "operator": "===",
            "right": {
              "type": "CallExpression",
              "start": 160,
              "end": 183,
              "callee": {
                "type": "Identifier",
                "start": 160,
                "end": 181,
                "name": "templateObjectFactory",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
