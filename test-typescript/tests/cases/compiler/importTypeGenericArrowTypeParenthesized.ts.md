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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 23,
        "value": "module",
        "raw": "\"module\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 24,
        "end": 111,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 30,
            "end": 62,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 37,
              "end": 62,
              "id": {
                "type": "Identifier",
                "start": 47,
                "end": 55,
                "name": "Modifier",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 55,
                "end": 58,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 56,
                    "end": 57,
                    "name": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 57,
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
                "start": 59,
                "end": 62,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 68,
            "end": 109,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 75,
              "end": 109,
              "id": {
                "type": "Identifier",
                "start": 84,
                "end": 86,
                "name": "fn",
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
                  "start": 90,
                  "end": 94,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 91,
                    "end": 94,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 93,
                      "end": 94,
                      "typeName": {
                        "type": "Identifier",
                        "start": 93,
                        "end": 94,
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
              "body": null,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 86,
                "end": 89,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 87,
                    "end": 88,
                    "name": {
                      "type": "Identifier",
                      "start": 87,
                      "end": 88,
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
                "start": 95,
                "end": 108,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 97,
                  "end": 108,
                  "typeName": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 105,
                    "name": "Modifier",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 105,
                    "end": 108,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 106,
                        "end": 107,
                        "typeName": {
                          "type": "Identifier",
                          "start": 106,
                          "end": 107,
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
  "end": 262,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "name": "fn",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "name": "fn",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 27,
        "value": "module",
        "raw": "\"module\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 73,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 37,
        "end": 73,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 43,
            "end": 72,
            "id": {
              "type": "Identifier",
              "start": 43,
              "end": 48,
              "name": "fail1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 51,
              "end": 72,
              "callee": {
                "type": "Identifier",
                "start": 51,
                "end": 53,
                "name": "fn",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 54,
                  "end": 71,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 58,
                      "end": 62,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 59,
                        "end": 62,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 61,
                          "end": 62,
                          "typeName": {
                            "type": "Identifier",
                            "start": 61,
                            "end": 62,
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
                    "type": "Identifier",
                    "start": 70,
                    "end": 71,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "name": {
                          "type": "Identifier",
                          "start": 55,
                          "end": 56,
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
                    "start": 63,
                    "end": 66,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 65,
                      "end": 66,
                      "typeName": {
                        "type": "Identifier",
                        "start": 65,
                        "end": 66,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 74,
      "end": 136,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 81,
        "end": 136,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 87,
            "end": 135,
            "id": {
              "type": "Identifier",
              "start": 87,
              "end": 92,
              "name": "fail2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 95,
              "end": 135,
              "callee": {
                "type": "Identifier",
                "start": 95,
                "end": 97,
                "name": "fn",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "FunctionExpression",
                  "start": 98,
                  "end": 134,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 110,
                      "end": 114,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 111,
                        "end": 114,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 113,
                          "end": 114,
                          "typeName": {
                            "type": "Identifier",
                            "start": 113,
                            "end": 114,
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
                    "start": 106,
                    "end": 109,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 107,
                        "end": 108,
                        "name": {
                          "type": "Identifier",
                          "start": 107,
                          "end": 108,
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
                    "start": 115,
                    "end": 118,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 117,
                      "end": 118,
                      "typeName": {
                        "type": "Identifier",
                        "start": 117,
                        "end": 118,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 138,
      "end": 181,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 145,
        "end": 181,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 151,
            "end": 180,
            "id": {
              "type": "Identifier",
              "start": 151,
              "end": 157,
              "name": "works1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 160,
              "end": 180,
              "callee": {
                "type": "Identifier",
                "start": 160,
                "end": 162,
                "name": "fn",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 163,
                  "end": 179,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 164,
                      "end": 173,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 165,
                        "end": 173,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 167,
                          "end": 173
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 178,
                    "end": 179,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 182,
      "end": 215,
      "id": {
        "type": "Identifier",
        "start": 187,
        "end": 197,
        "name": "MakeItWork",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 200,
        "end": 214,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 200,
          "end": 203,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 201,
              "end": 202,
              "name": {
                "type": "Identifier",
                "start": 201,
                "end": 202,
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
        "params": [
          {
            "type": "Identifier",
            "start": 204,
            "end": 208,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 205,
              "end": 208,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 207,
                "end": 208,
                "typeName": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 208,
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
          "start": 210,
          "end": 214,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 213,
            "end": 214,
            "typeName": {
              "type": "Identifier",
              "start": 213,
              "end": 214,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 216,
      "end": 261,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 223,
        "end": 261,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 229,
            "end": 260,
            "id": {
              "type": "Identifier",
              "start": 229,
              "end": 235,
              "name": "works2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 238,
              "end": 260,
              "callee": {
                "type": "Identifier",
                "start": 238,
                "end": 240,
                "name": "fn",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 253,
                  "end": 259,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 253,
                      "end": 254,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 258,
                    "end": 259,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 241,
                      "end": 251,
                      "name": "MakeItWork",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
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
