__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 111,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 111,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 24,
        "end": 111,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 30,
            "end": 62,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 37,
              "end": 62,
              "body": {
                "type": "TSInterfaceBody",
                "start": 59,
                "end": 62,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 47,
                "end": 55,
                "decorators": [],
                "name": "Modifier",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 55,
                "end": 58,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 56,
                    "end": 57,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 57,
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
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 68,
            "end": 109,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 75,
              "end": 109,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 84,
                "end": 86,
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 90,
                  "end": 94,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 91,
                    "end": 94,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 93,
                      "end": 94,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 93,
                        "end": 94,
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
                "start": 95,
                "end": 108,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 97,
                  "end": 108,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 105,
                    "end": 108,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 106,
                        "end": 107,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 106,
                          "end": 107,
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
                    "start": 97,
                    "end": 105,
                    "decorators": [],
                    "name": "Modifier",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 86,
                "end": 89,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 87,
                    "end": 88,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 87,
                      "end": 88,
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
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 23,
        "raw": "\"module\"",
        "value": "module"
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
  "end": 262,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 27,
        "raw": "\"module\"",
        "value": "module"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 73,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 37,
        "end": 73,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 43,
            "end": 72,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 43,
              "end": 48,
              "decorators": [],
              "name": "fail1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 51,
              "end": 72,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 54,
                  "end": 71,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 71,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 58,
                      "end": 62,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 59,
                        "end": 62,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 61,
                          "end": 62,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 61,
                            "end": 62,
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
                    "start": 63,
                    "end": 66,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 65,
                      "end": 66,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 65,
                        "end": 66,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 54,
                    "end": 57,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 55,
                        "end": 56,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 55,
                          "end": 56,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    ]
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 51,
                "end": 53,
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 74,
      "end": 136,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 81,
        "end": 136,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 87,
            "end": 135,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 87,
              "end": 92,
              "decorators": [],
              "name": "fail2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 95,
              "end": 135,
              "arguments": [
                {
                  "type": "FunctionExpression",
                  "start": 98,
                  "end": 134,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 119,
                    "end": 134,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 123,
                        "end": 132,
                        "argument": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 131,
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
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 110,
                      "end": 114,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 111,
                        "end": 114,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 113,
                          "end": 114,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 113,
                            "end": 114,
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
                    "start": 115,
                    "end": 118,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 117,
                      "end": 118,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 117,
                        "end": 118,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 106,
                    "end": 109,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 107,
                        "end": 108,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 107,
                          "end": 108,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    ]
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 95,
                "end": 97,
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 138,
      "end": 181,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 145,
        "end": 181,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 151,
            "end": 180,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 151,
              "end": 157,
              "decorators": [],
              "name": "works1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 160,
              "end": 180,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 163,
                  "end": 179,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 178,
                    "end": 179,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 164,
                      "end": 173,
                      "decorators": [],
                      "name": "x",
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
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 160,
                "end": 162,
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 182,
      "end": 215,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 187,
        "end": 197,
        "decorators": [],
        "name": "MakeItWork",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 200,
        "end": 214,
        "params": [
          {
            "type": "Identifier",
            "start": 204,
            "end": 208,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 205,
              "end": 208,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 207,
                "end": 208,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 208,
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
          "start": 210,
          "end": 214,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 213,
            "end": 214,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 213,
              "end": 214,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 200,
          "end": 203,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 201,
              "end": 202,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 201,
                "end": 202,
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
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 216,
      "end": 261,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 223,
        "end": 261,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 229,
            "end": 260,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 229,
              "end": 235,
              "decorators": [],
              "name": "works2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 238,
              "end": 260,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 253,
                  "end": 259,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 258,
                    "end": 259,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 253,
                      "end": 254,
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
                "type": "Identifier",
                "start": 238,
                "end": 240,
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 240,
                "end": 252,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 241,
                    "end": 251,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 241,
                      "end": 251,
                      "decorators": [],
                      "name": "MakeItWork",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
