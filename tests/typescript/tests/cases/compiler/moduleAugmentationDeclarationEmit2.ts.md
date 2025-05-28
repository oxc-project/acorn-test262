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
        "end": 41,
        "value": "./observable",
        "raw": "\"./observable\""
      },
      "phase": null,
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
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 45,
              "end": 48
            },
            "expression": {
              "type": "MemberExpression",
              "start": 49,
              "end": 69,
              "object": {
                "type": "Identifier",
                "start": 49,
                "end": 59,
                "decorators": [],
                "name": "Observable",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 60,
                "end": 69,
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
            "start": 71,
            "end": 74,
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
          "start": 77,
          "end": 91,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 88,
            "end": 91,
            "body": []
          },
          "expression": false
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
              "decorators": [],
              "name": "Observable",
              "optional": false,
              "typeAnnotation": null
            },
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
                      "start": 170,
                      "end": 186,
                      "decorators": [],
                      "name": "proj",
                      "optional": false,
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
                              "decorators": [],
                              "name": "e",
                              "optional": false,
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
                        "decorators": [],
                        "name": "Observable",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 213,
            "end": 279,
            "id": {
              "type": "Identifier",
              "start": 223,
              "end": 233,
              "decorators": [],
              "name": "Observable",
              "optional": false,
              "typeAnnotation": null
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
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 248,
                      "end": 272,
                      "id": {
                        "type": "Identifier",
                        "start": 248,
                        "end": 272,
                        "decorators": [],
                        "name": "someAnotherValue",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 264,
                          "end": 272,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 266,
                            "end": 272
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
  "end": 158,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 89,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 89,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 31,
          "decorators": [],
          "name": "Observable",
          "optional": false,
          "typeAnnotation": null
        },
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
          "start": 35,
          "end": 89,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 41,
              "end": 87,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 41,
                "end": 47,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 47,
                "end": 87,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 48,
                    "end": 70,
                    "decorators": [],
                    "name": "pred",
                    "optional": false,
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
                            "decorators": [],
                            "name": "e",
                            "optional": false,
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
                          "start": 60,
                          "end": 70,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 63,
                            "end": 70
                          }
                        }
                      }
                    }
                  }
                ],
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
                      "decorators": [],
                      "name": "Observable",
                      "optional": false,
                      "typeAnnotation": null
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
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 91,
      "end": 156,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 98,
        "end": 156,
        "id": {
          "type": "Identifier",
          "start": 108,
          "end": 118,
          "decorators": [],
          "name": "Observable",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 119,
          "end": 156,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 125,
              "end": 154,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 132,
                "end": 154,
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 136,
                    "end": 153,
                    "id": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 153,
                      "decorators": [],
                      "name": "someValue",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 145,
                        "end": 153,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 147,
                          "end": 153
                        }
                      }
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
  "end": 205,
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
        "end": 41,
        "value": "./observable",
        "raw": "\"./observable\""
      },
      "phase": null,
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
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 59,
      "end": 85,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 84,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 84,
            "decorators": [],
            "name": "x",
            "optional": false,
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
                  "decorators": [],
                  "name": "Observable",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 86,
      "end": 112,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 111,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 96,
                "end": 99,
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
                "start": 100,
                "end": 110,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 100,
                    "end": 101,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "start": 105,
                  "end": 110,
                  "left": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 106,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
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
    },
    {
      "type": "VariableDeclaration",
      "start": 113,
      "end": 153,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 152,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 119,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 122,
            "end": 152,
            "callee": {
              "type": "MemberExpression",
              "start": 122,
              "end": 150,
              "object": {
                "type": "MemberExpression",
                "start": 122,
                "end": 142,
                "object": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 132,
                  "decorators": [],
                  "name": "Observable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 142,
                  "decorators": [],
                  "name": "someValue",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 143,
                "end": 150,
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 154,
      "end": 205,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 204,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 160,
            "decorators": [],
            "name": "z2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 163,
            "end": 204,
            "callee": {
              "type": "MemberExpression",
              "start": 163,
              "end": 202,
              "object": {
                "type": "MemberExpression",
                "start": 163,
                "end": 190,
                "object": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 173,
                  "decorators": [],
                  "name": "Observable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 190,
                  "decorators": [],
                  "name": "someAnotherValue",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 191,
                "end": 202,
                "decorators": [],
                "name": "toLowerCase",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
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
