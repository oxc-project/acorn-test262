__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 278,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 39,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 19,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 27,
        "end": 39,
        "value": "observable",
        "raw": "\"observable\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 41,
      "end": 89,
      "expression": {
        "type": "AssignmentExpression",
        "start": 41,
        "end": 89,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 41,
          "end": 72,
          "object": {
            "type": "TSTypeAssertion",
            "start": 42,
            "end": 67,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 43,
              "end": 46
            },
            "expression": {
              "type": "MemberExpression",
              "start": 47,
              "end": 67,
              "object": {
                "type": "Identifier",
                "start": 47,
                "end": 57,
                "decorators": [],
                "name": "Observable",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 58,
                "end": 67,
                "decorators": [],
                "name": "prototype",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "property": {
            "type": "Identifier",
            "start": 69,
            "end": 72,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 75,
          "end": 89,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 86,
            "end": 89,
            "body": []
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 91,
      "end": 277,
      "id": {
        "type": "Literal",
        "start": 106,
        "end": 118,
        "value": "observable",
        "raw": "\"observable\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 119,
        "end": 277,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 125,
            "end": 204,
            "id": {
              "type": "Identifier",
              "start": 135,
              "end": 145,
              "decorators": [],
              "name": "Observable",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 145,
              "end": 148,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 146,
                  "end": 147,
                  "name": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 147,
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
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 149,
              "end": 204,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 159,
                  "end": 198,
                  "key": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 162,
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 162,
                    "end": 165,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 163,
                        "end": 164,
                        "name": {
                          "type": "Identifier",
                          "start": 163,
                          "end": 164,
                          "decorators": [],
                          "name": "U",
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
                      "start": 166,
                      "end": 182,
                      "decorators": [],
                      "name": "proj",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 170,
                        "end": 182,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 172,
                          "end": 182,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 173,
                              "end": 176,
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 174,
                                "end": 176,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 175,
                                  "end": 176,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 175,
                                    "end": 176,
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
                            "start": 178,
                            "end": 182,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 181,
                              "end": 182,
                              "typeName": {
                                "type": "Identifier",
                                "start": 181,
                                "end": 182,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 183,
                    "end": 198,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 185,
                      "end": 198,
                      "typeName": {
                        "type": "Identifier",
                        "start": 185,
                        "end": 195,
                        "decorators": [],
                        "name": "Observable",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 195,
                        "end": 198,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 196,
                            "end": 197,
                            "typeName": {
                              "type": "Identifier",
                              "start": 196,
                              "end": 197,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 209,
            "end": 275,
            "id": {
              "type": "Identifier",
              "start": 219,
              "end": 229,
              "decorators": [],
              "name": "Observable",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 230,
              "end": 275,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 240,
                  "end": 269,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 244,
                      "end": 268,
                      "id": {
                        "type": "Identifier",
                        "start": 244,
                        "end": 268,
                        "decorators": [],
                        "name": "someAnotherValue",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 260,
                          "end": 268,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 262,
                            "end": 268
                          }
                        }
                      },
                      "init": null,
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
        ]
      },
      "kind": "module",
      "declare": true,
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
  "end": 183,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 182,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 27,
        "value": "observable",
        "raw": "\"observable\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 28,
        "end": 182,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 34,
            "end": 116,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 40,
              "end": 50,
              "decorators": [],
              "name": "Observable",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 50,
              "end": 53,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 51,
                  "end": 52,
                  "name": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
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
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 54,
              "end": 116,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 64,
                  "end": 110,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 70,
                    "decorators": [],
                    "name": "filter",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 70,
                    "end": 110,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 71,
                        "end": 93,
                        "decorators": [],
                        "name": "pred",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 75,
                          "end": 93,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 77,
                            "end": 93,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 78,
                                "end": 81,
                                "decorators": [],
                                "name": "e",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 79,
                                  "end": 81,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 80,
                                    "end": 81,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 80,
                                      "end": 81,
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
                              "start": 83,
                              "end": 93,
                              "typeAnnotation": {
                                "type": "TSBooleanKeyword",
                                "start": 86,
                                "end": 93
                              }
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 94,
                      "end": 109,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 96,
                        "end": 109,
                        "typeName": {
                          "type": "Identifier",
                          "start": 96,
                          "end": 106,
                          "decorators": [],
                          "name": "Observable",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 106,
                          "end": 109,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 107,
                              "end": 108,
                              "typeName": {
                                "type": "Identifier",
                                "start": 107,
                                "end": 108,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "body": null,
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 121,
            "end": 180,
            "id": {
              "type": "Identifier",
              "start": 131,
              "end": 141,
              "decorators": [],
              "name": "Observable",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 142,
              "end": 180,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 152,
                  "end": 174,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 156,
                      "end": 173,
                      "id": {
                        "type": "Identifier",
                        "start": 156,
                        "end": 173,
                        "decorators": [],
                        "name": "someValue",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 165,
                          "end": 173,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 167,
                            "end": 173
                          }
                        }
                      },
                      "init": null,
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
        ]
      },
      "kind": "module",
      "declare": true,
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
  "start": 40,
  "end": 150,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 40,
      "end": 79,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 49,
          "end": 59,
          "imported": {
            "type": "Identifier",
            "start": 49,
            "end": 59,
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 49,
            "end": 59,
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 67,
        "end": 79,
        "value": "observable",
        "raw": "\"observable\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 80,
      "end": 95,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 87,
        "end": 94,
        "value": "./map",
        "raw": "\"./map\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 97,
      "end": 123,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 122,
          "id": {
            "type": "Identifier",
            "start": 101,
            "end": 122,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 122,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 104,
                "end": 122,
                "typeName": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 114,
                  "decorators": [],
                  "name": "Observable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 114,
                  "end": 122,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 115,
                      "end": 121
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 124,
      "end": 150,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 149,
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 129,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 132,
            "end": 149,
            "callee": {
              "type": "MemberExpression",
              "start": 132,
              "end": 137,
              "object": {
                "type": "Identifier",
                "start": 132,
                "end": 133,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 134,
                "end": 137,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 138,
                "end": 148,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 138,
                    "end": 139,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "start": 143,
                  "end": 148,
                  "left": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 144,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 147,
                    "end": 148,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
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
