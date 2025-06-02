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
        "decorators": [],
        "name": "n",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 37,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
                "typeName": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 41,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
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
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 73,
            "end": 145,
            "id": {
              "type": "Identifier",
              "start": 82,
              "end": 103,
              "decorators": [],
              "name": "templateObjectFactory",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
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
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "quasi": {
                      "type": "TemplateLiteral",
                      "start": 125,
                      "end": 138,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 125,
                          "end": 138,
                          "value": {
                            "raw": "hello world",
                            "cooked": "hello world"
                          },
                          "tail": true
                        }
                      ],
                      "expressions": []
                    }
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "VariableDeclaration",
            "start": 150,
            "end": 215,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 154,
                "end": 214,
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
                  "left": {
                    "type": "CallExpression",
                    "start": 163,
                    "end": 186,
                    "callee": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 184,
                      "decorators": [],
                      "name": "templateObjectFactory",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
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
                      "decorators": [],
                      "name": "templateObjectFactory",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
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
  "end": 184,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 11,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 22,
        "decorators": [],
        "name": "id",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
              "typeName": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
          "typeName": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 54,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 84,
        "decorators": [],
        "name": "templateObjectFactory",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 102,
                "end": 115,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 102,
                    "end": 115,
                    "value": {
                      "raw": "hello world",
                      "cooked": "hello world"
                    },
                    "tail": true
                  }
                ],
                "expressions": []
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 184,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 183,
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
            "left": {
              "type": "CallExpression",
              "start": 132,
              "end": 155,
              "callee": {
                "type": "Identifier",
                "start": 132,
                "end": 153,
                "decorators": [],
                "name": "templateObjectFactory",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
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
                "decorators": [],
                "name": "templateObjectFactory",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
