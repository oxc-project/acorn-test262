first.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 357,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 46,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "mix",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 27,
          "end": 38,
          "decorators": [],
          "name": "mixin",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 32,
            "end": 38,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 34,
              "end": 38,
              "typeName": {
                "type": "Identifier",
                "start": 34,
                "end": 38,
                "decorators": [],
                "name": "TMix",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 39,
        "end": 45,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 41,
          "end": 45,
          "typeName": {
            "type": "Identifier",
            "start": 41,
            "end": 45,
            "decorators": [],
            "name": "TMix",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 26,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 25,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 25,
              "decorators": [],
              "name": "TMix",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 190,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 189,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 69,
            "decorators": [],
            "name": "DisposableMixin",
            "optional": false
          },
          "init": {
            "type": "ClassExpression",
            "start": 72,
            "end": 189,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 78,
              "end": 189,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 84,
                  "end": 147,
                  "accessibility": "protected",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 104,
                    "decorators": [],
                    "name": "_onDispose",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 104,
                    "end": 147,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 107,
                      "end": 147,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 117,
                          "end": 141,
                          "expression": {
                            "type": "CallExpression",
                            "start": 117,
                            "end": 141,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 117,
                              "end": 139,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 117,
                                "end": 121
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 122,
                                "end": 139,
                                "decorators": [],
                                "name": "_assertIsStripped",
                                "optional": false
                              }
                            },
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 152,
                  "end": 187,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 177,
                    "decorators": [],
                    "name": "_assertIsStripped",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 177,
                    "end": 187,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 180,
                      "end": 187,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": null,
            "implements": [],
            "superClass": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 231,
      "end": 267,
      "declaration": {
        "type": "CallExpression",
        "start": 246,
        "end": 266,
        "arguments": [
          {
            "type": "Identifier",
            "start": 250,
            "end": 265,
            "decorators": [],
            "name": "DisposableMixin",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 246,
          "end": 249,
          "decorators": [],
          "name": "mix",
          "optional": false
        },
        "optional": false
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 268,
      "end": 356,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 275,
        "end": 356,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 318,
          "end": 356,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 324,
              "end": 354,
              "accessibility": "protected",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 334,
                "end": 344,
                "decorators": [],
                "name": "_onDispose",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 344,
                "end": 354,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 347,
                  "end": 354,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 281,
          "end": 288,
          "decorators": [],
          "name": "Monitor",
          "optional": false
        },
        "implements": [],
        "superClass": {
          "type": "CallExpression",
          "start": 297,
          "end": 317,
          "arguments": [
            {
              "type": "Identifier",
              "start": 301,
              "end": 316,
              "decorators": [],
              "name": "DisposableMixin",
              "optional": false
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 297,
            "end": 300,
            "decorators": [],
            "name": "mix",
            "optional": false
          },
          "optional": false
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
another.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 280,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 46,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "mix",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 27,
          "end": 38,
          "decorators": [],
          "name": "mixin",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 32,
            "end": 38,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 34,
              "end": 38,
              "typeName": {
                "type": "Identifier",
                "start": 34,
                "end": 38,
                "decorators": [],
                "name": "TMix",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 39,
        "end": 45,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 41,
          "end": 45,
          "typeName": {
            "type": "Identifier",
            "start": 41,
            "end": 45,
            "decorators": [],
            "name": "TMix",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 26,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 25,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 25,
              "decorators": [],
              "name": "TMix",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 190,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 189,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 69,
            "decorators": [],
            "name": "DisposableMixin",
            "optional": false
          },
          "init": {
            "type": "ClassExpression",
            "start": 72,
            "end": 189,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 78,
              "end": 189,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 84,
                  "end": 147,
                  "accessibility": "protected",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 104,
                    "decorators": [],
                    "name": "_onDispose",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 104,
                    "end": 147,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 107,
                      "end": 147,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 117,
                          "end": 141,
                          "expression": {
                            "type": "CallExpression",
                            "start": 117,
                            "end": 141,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 117,
                              "end": 139,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 117,
                                "end": 121
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 122,
                                "end": 139,
                                "decorators": [],
                                "name": "_assertIsStripped",
                                "optional": false
                              }
                            },
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 152,
                  "end": 187,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 177,
                    "decorators": [],
                    "name": "_assertIsStripped",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 177,
                    "end": 187,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 180,
                      "end": 187,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": null,
            "implements": [],
            "superClass": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 192,
      "end": 280,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 207,
        "end": 280,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 242,
          "end": 280,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 248,
              "end": 278,
              "accessibility": "protected",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 258,
                "end": 268,
                "decorators": [],
                "name": "_onDispose",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 268,
                "end": 278,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 271,
                  "end": 278,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": null,
        "implements": [],
        "superClass": {
          "type": "CallExpression",
          "start": 221,
          "end": 241,
          "arguments": [
            {
              "type": "Identifier",
              "start": 225,
              "end": 240,
              "decorators": [],
              "name": "DisposableMixin",
              "optional": false
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 221,
            "end": 224,
            "decorators": [],
            "name": "mix",
            "optional": false
          },
          "optional": false
        }
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module"
}
```
