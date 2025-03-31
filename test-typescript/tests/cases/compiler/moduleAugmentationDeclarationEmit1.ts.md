__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 282,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 41,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 19,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "name": "Observable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "name": "Observable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 27,
        "end": 41,
        "value": "./observable",
        "raw": "\"./observable\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 43,
      "end": 91,
      "expression": {
        "type": "AssignmentExpression",
        "start": 43,
        "end": 91,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 43,
          "end": 74,
          "object": {
            "type": "TSTypeAssertion",
            "start": 44,
            "end": 69,
            "expression": {
              "type": "MemberExpression",
              "start": 49,
              "end": 69,
              "object": {
                "type": "Identifier",
                "start": 49,
                "end": 59,
                "name": "Observable",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 60,
                "end": 69,
                "name": "prototype",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 45,
              "end": 48
            }
          },
          "property": {
            "type": "Identifier",
            "start": 71,
            "end": 74,
            "name": "map",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 77,
          "end": 91,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "BlockStatement",
            "start": 88,
            "end": 91,
            "body": []
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 93,
      "end": 281,
      "id": {
        "type": "Literal",
        "start": 108,
        "end": 122,
        "value": "./observable",
        "raw": "\"./observable\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 123,
        "end": 281,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 129,
            "end": 208,
            "id": {
              "type": "Identifier",
              "start": 139,
              "end": 149,
              "name": "Observable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 149,
              "end": 152,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 150,
                  "end": 151,
                  "name": {
                    "type": "Identifier",
                    "start": 150,
                    "end": 151,
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
            "body": {
              "type": "TSInterfaceBody",
              "start": 153,
              "end": 208,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 163,
                  "end": 202,
                  "key": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 166,
                    "name": "map",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 166,
                    "end": 169,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 167,
                        "end": 168,
                        "name": {
                          "type": "Identifier",
                          "start": 167,
                          "end": 168,
                          "name": "U",
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
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 170,
                      "end": 186,
                      "name": "proj",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 174,
                        "end": 186,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 176,
                          "end": 186,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 177,
                              "end": 180,
                              "name": "e",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 178,
                                "end": 180,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 179,
                                  "end": 180,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 179,
                                    "end": 180,
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
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 182,
                            "end": 186,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 185,
                              "end": 186,
                              "typeName": {
                                "type": "Identifier",
                                "start": 185,
                                "end": 186,
                                "name": "U",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 187,
                    "end": 202,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 189,
                      "end": 202,
                      "typeName": {
                        "type": "Identifier",
                        "start": 189,
                        "end": 199,
                        "name": "Observable",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 199,
                        "end": 202,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 200,
                            "end": 201,
                            "typeName": {
                              "type": "Identifier",
                              "start": 200,
                              "end": 201,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
            "start": 213,
            "end": 279,
            "id": {
              "type": "Identifier",
              "start": 223,
              "end": 233,
              "name": "Observable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 234,
              "end": 279,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 244,
                  "end": 273,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 248,
                      "end": 272,
                      "id": {
                        "type": "Identifier",
                        "start": 248,
                        "end": 272,
                        "name": "someAnotherValue",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 264,
                          "end": 272,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 266,
                            "end": 272
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
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
  "end": 151,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 89,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 89,
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 31,
          "name": "Observable",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 35,
          "end": 89,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 41,
              "end": 87,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 41,
                "end": 47,
                "name": "filter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 47,
                "end": 87,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 48,
                    "end": 70,
                    "name": "pred",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 52,
                      "end": 70,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 54,
                        "end": 70,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 55,
                            "end": 58,
                            "name": "e",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 56,
                              "end": 58,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 57,
                                "end": 58,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 57,
                                  "end": 58,
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
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 60,
                          "end": 70,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 63,
                            "end": 70
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": null,
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 71,
                  "end": 86,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 73,
                    "end": 86,
                    "typeName": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 83,
                      "name": "Observable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 83,
                      "end": 86,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 84,
                          "end": 85,
                          "typeName": {
                            "type": "Identifier",
                            "start": 84,
                            "end": 85,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 31,
          "end": 34,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 32,
              "end": 33,
              "name": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
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
        "implements": [],
        "abstract": false,
        "declare": true,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 91,
      "end": 149,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 98,
        "end": 149,
        "id": {
          "type": "Identifier",
          "start": 108,
          "end": 118,
          "name": "Observable",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 119,
          "end": 149,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 125,
              "end": 147,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 129,
                  "end": 146,
                  "id": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 146,
                    "name": "someValue",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 138,
                      "end": 146,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 140,
                        "end": 146
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
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
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 112,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 41,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 19,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "name": "Observable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "name": "Observable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 27,
        "end": 41,
        "value": "./observable",
        "raw": "\"./observable\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 42,
      "end": 57,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 49,
        "end": 56,
        "value": "./map",
        "raw": "\"./map\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 59,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 84,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 84,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 84,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 66,
                "end": 84,
                "typeName": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 76,
                  "name": "Observable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 76,
                  "end": 84,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 77,
                      "end": 83
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 112,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 111,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 94,
            "end": 111,
            "callee": {
              "type": "MemberExpression",
              "start": 94,
              "end": 99,
              "object": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 96,
                "end": 99,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 100,
                "end": 110,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 100,
                    "end": 101,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BinaryExpression",
                  "start": 105,
                  "end": 110,
                  "left": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 106,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 109,
                    "end": 110,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
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
