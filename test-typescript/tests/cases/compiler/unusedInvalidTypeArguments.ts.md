__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 99,
  "end": 155,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 99,
      "end": 115,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 105,
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 108,
        "end": 114
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 116,
      "end": 132,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 122,
        "decorators": [],
        "name": "U",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 125,
        "end": 131
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 133,
      "end": 154,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 140,
        "end": 154,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 145,
          "end": 146,
          "decorators": [],
          "name": "Z",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 149,
          "end": 153,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 150,
            "end": 153,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 151,
                "end": 152,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 152,
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 149,
            "end": 150,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
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
  "end": 152,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 16,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 9,
        "end": 15
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 17,
      "end": 28,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 25,
        "end": 28,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 24,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 121,
      "end": 151,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 128,
        "end": 151,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 149,
          "end": 151,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 134,
          "end": 135,
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 144,
          "end": 145,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 145,
          "end": 148,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 146,
              "end": 147,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 146,
                "end": 147,
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeParameters": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 68,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 30,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 29,
        "raw": "\"unknown\"",
        "value": "unknown"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 31,
      "end": 67,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 38,
        "end": 67,
        "body": {
          "type": "TSInterfaceBody",
          "start": 53,
          "end": 67,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 55,
              "end": 65,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 56,
                "end": 64,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 58,
                  "end": 64,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 61,
                    "end": 64,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 62,
                        "end": 63,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 62,
                          "end": 63,
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
                    "start": 58,
                    "end": 61,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 48,
          "end": 49,
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 49,
          "end": 52,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 50,
              "end": 51,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 50,
                "end": 51,
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
  "end": 58,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 30,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 29,
        "raw": "\"unknown\"",
        "value": "unknown"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 31,
      "end": 47,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 40,
        "end": 46
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 48,
      "end": 57,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 48,
        "end": 56,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 48,
          "end": 51,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 51,
          "end": 54,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 52,
              "end": 53,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 52,
                "end": 53,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
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
  "end": 61,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 28,
        "raw": "\"unkown\"",
        "value": "unkown"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 30,
      "end": 46,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 36,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 39,
        "end": 45
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 60,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 47,
        "end": 59,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 51,
          "end": 54,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 54,
          "end": 57,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 55,
              "end": 56,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
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
  "end": 106,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 19,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 18,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 18,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 20,
      "end": 36,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "decorators": [],
        "name": "U",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 29,
        "end": 35
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 37,
      "end": 44,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 37,
        "end": 43,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 37,
          "end": 38,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 38,
          "end": 41,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 39,
              "end": 40,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 45,
      "end": 67,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 45,
        "end": 66,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 45,
          "end": 46,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 46,
          "end": 64,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 47,
              "end": 63,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 47,
                "end": 63,
                "decorators": [],
                "name": "InvalidReference",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
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
  "end": 197,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 30,
        "raw": "\"unknown\"",
        "value": "unknown"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 12,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 33,
      "end": 49,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 42,
        "end": 48
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 51,
      "end": 196,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 58,
        "end": 196,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 79,
          "end": 196,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 85,
              "end": 194,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 85,
                "end": 86,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 86,
                "end": 194,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 89,
                  "end": 194,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 99,
                      "end": 113,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 99,
                        "end": 112,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 110,
                            "end": 111,
                            "raw": "1",
                            "value": 1
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 99,
                          "end": 106,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 99,
                            "end": 104
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 105,
                            "end": 106,
                            "decorators": [],
                            "name": "m",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
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
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 122,
                      "end": 150,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 122,
                        "end": 149,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 122,
                          "end": 129,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 122,
                            "end": 127
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 128,
                            "end": 129,
                            "decorators": [],
                            "name": "m",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 129,
                          "end": 147,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 130,
                              "end": 146,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 130,
                                "end": 146,
                                "decorators": [],
                                "name": "InvalidReference",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
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
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 64,
          "end": 65,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 74,
          "end": 75,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 75,
          "end": 78,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 76,
              "end": 77,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 76,
                "end": 77,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeParameters": null
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
