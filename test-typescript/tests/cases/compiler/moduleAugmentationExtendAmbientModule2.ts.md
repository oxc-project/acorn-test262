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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 27,
        "end": 39,
        "raw": "\"observable\"",
        "value": "observable"
      },
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 41,
      "end": 89,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 41,
        "end": 89,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 41,
          "end": 72,
          "computed": false,
          "object": {
            "type": "TSTypeAssertion",
            "start": 42,
            "end": 67,
            "expression": {
              "type": "MemberExpression",
              "start": 47,
              "end": 67,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 47,
                "end": 57,
                "decorators": [],
                "name": "Observable",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 58,
                "end": 67,
                "decorators": [],
                "name": "prototype",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 43,
              "end": 46
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 69,
            "end": 72,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 75,
          "end": 89,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 86,
            "end": 89,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 91,
      "end": 277,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 119,
        "end": 277,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 125,
            "end": 204,
            "body": {
              "type": "TSInterfaceBody",
              "start": 149,
              "end": 204,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 159,
                  "end": 198,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 162,
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
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
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 175,
                                    "end": 176,
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
                            "start": 178,
                            "end": 182,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 181,
                              "end": 182,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 181,
                                "end": 182,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          "typeParameters": null
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 183,
                    "end": 198,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 185,
                      "end": 198,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 195,
                        "end": 198,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 196,
                            "end": 197,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 196,
                              "end": 197,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 185,
                        "end": 195,
                        "decorators": [],
                        "name": "Observable",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 162,
                    "end": 165,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 163,
                        "end": 164,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 163,
                          "end": 164,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    ]
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
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
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 147,
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
            "type": "TSModuleDeclaration",
            "start": 209,
            "end": 275,
            "body": {
              "type": "TSModuleBlock",
              "start": 230,
              "end": 275,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 240,
                  "end": 269,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 244,
                      "end": 268,
                      "definite": false,
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
                            "type": "TSStringKeyword",
                            "start": 262,
                            "end": 268
                          }
                        }
                      },
                      "init": null
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
              "start": 219,
              "end": 229,
              "decorators": [],
              "name": "Observable",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "namespace"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 106,
        "end": 118,
        "raw": "\"observable\"",
        "value": "observable"
      }
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
  "end": 190,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 189,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 28,
        "end": 189,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 34,
            "end": 116,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 54,
              "end": 116,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 64,
                  "end": 110,
                  "accessibility": null,
                  "computed": false,
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
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 70,
                    "end": 110,
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
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
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 80,
                                      "end": 81,
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
                              "start": 83,
                              "end": 93,
                              "typeAnnotation": {
                                "type": "TSBooleanKeyword",
                                "start": 86,
                                "end": 93
                              }
                            },
                            "typeParameters": null
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
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 106,
                          "end": 109,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 107,
                              "end": 108,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 107,
                                "end": 108,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 96,
                          "end": 106,
                          "decorators": [],
                          "name": "Observable",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  }
                }
              ]
            },
            "declare": false,
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
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 50,
              "end": 53,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 51,
                  "end": 52,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
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
            "type": "TSModuleDeclaration",
            "start": 121,
            "end": 187,
            "body": {
              "type": "TSModuleBlock",
              "start": 142,
              "end": 187,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 152,
                  "end": 181,
                  "attributes": [],
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 159,
                    "end": 181,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 163,
                        "end": 180,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 163,
                          "end": 180,
                          "decorators": [],
                          "name": "someValue",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 172,
                            "end": 180,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 174,
                              "end": 180
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 131,
              "end": 141,
              "decorators": [],
              "name": "Observable",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "namespace"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 27,
        "raw": "\"observable\"",
        "value": "observable"
      }
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
  "end": 243,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 40,
      "end": 79,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 67,
        "end": 79,
        "raw": "\"observable\"",
        "value": "observable"
      },
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 49,
            "end": 59,
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 80,
      "end": 95,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 87,
        "end": 94,
        "raw": "\"./map\"",
        "value": "./map"
      },
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 97,
      "end": 123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 122,
          "definite": false,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 114,
                  "decorators": [],
                  "name": "Observable",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 124,
      "end": 150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 149,
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 138,
                "end": 148,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 143,
                  "end": 148,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 144,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 147,
                    "end": 148,
                    "raw": "1",
                    "value": 1
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
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
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 132,
              "end": 137,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 132,
                "end": 133,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 134,
                "end": 137,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 190,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 157,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 160,
            "end": 190,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 160,
              "end": 188,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 160,
                "end": 180,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 170,
                  "decorators": [],
                  "name": "Observable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 180,
                  "decorators": [],
                  "name": "someValue",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 181,
                "end": 188,
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 192,
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 242,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 198,
            "decorators": [],
            "name": "z2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 201,
            "end": 242,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 201,
              "end": 240,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 201,
                "end": 228,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 211,
                  "decorators": [],
                  "name": "Observable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 228,
                  "decorators": [],
                  "name": "someAnotherValue",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 229,
                "end": 240,
                "decorators": [],
                "name": "toLowerCase",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
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
