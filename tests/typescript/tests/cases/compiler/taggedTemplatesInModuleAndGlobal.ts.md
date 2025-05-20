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
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 217,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 18,
            "end": 67,
            "async": false,
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
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 29,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [
              {
                "type": "Identifier",
                "start": 33,
                "end": 37,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 34,
                  "end": 37,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 36,
                    "end": 37,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 37,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 41,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 40,
                "end": 41,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 41,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 29,
              "end": 32,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 30,
                  "end": 31,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "FunctionDeclaration",
            "start": 73,
            "end": 145,
            "async": false,
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
                          "tail": true,
                          "value": {
                            "cooked": "hello world",
                            "raw": "hello world"
                          }
                        }
                      ]
                    },
                    "tag": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 125,
                      "decorators": [],
                      "name": "id",
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
              "start": 82,
              "end": 103,
              "decorators": [],
              "name": "templateObjectFactory",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 160,
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 163,
                  "end": 214,
                  "operator": "===",
                  "left": {
                    "type": "CallExpression",
                    "start": 163,
                    "end": 186,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 184,
                      "decorators": [],
                      "name": "templateObjectFactory",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "right": {
                    "type": "CallExpression",
                    "start": 191,
                    "end": 214,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 212,
                      "decorators": [],
                      "name": "templateObjectFactory",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "n",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
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
  "end": 184,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 11,
      "end": 52,
      "async": false,
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 22,
        "decorators": [],
        "name": "id",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 26,
          "end": 30,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 30,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 29,
              "end": 30,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 34,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 33,
          "end": 34,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 22,
        "end": 25,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 23,
            "end": 24,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 54,
      "end": 118,
      "async": false,
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
                    "tail": true,
                    "value": {
                      "cooked": "hello world",
                      "raw": "hello world"
                    }
                  }
                ]
              },
              "tag": {
                "type": "Identifier",
                "start": 100,
                "end": 102,
                "decorators": [],
                "name": "id",
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
        "start": 63,
        "end": 84,
        "decorators": [],
        "name": "templateObjectFactory",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 129,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 132,
            "end": 183,
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "start": 132,
              "end": 155,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 132,
                "end": 153,
                "decorators": [],
                "name": "templateObjectFactory",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "right": {
              "type": "CallExpression",
              "start": 160,
              "end": 183,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 160,
                "end": 181,
                "decorators": [],
                "name": "templateObjectFactory",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
