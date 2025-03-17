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
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 105,
        "name": "N",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 108,
        "end": 114
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 116,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 122,
        "name": "U",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 125,
        "end": 131
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 133,
      "end": 154,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 140,
        "end": 154,
        "id": {
          "type": "Identifier",
          "start": 145,
          "end": 146,
          "name": "Z",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 149,
          "end": 153,
          "typeName": {
            "type": "Identifier",
            "start": 149,
            "end": 150,
            "name": "U",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 150,
            "end": 153,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 151,
                "end": 152,
                "typeName": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 152,
                  "name": "N",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "N",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 9,
        "end": 15
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 17,
      "end": 28,
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 24,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 25,
        "end": 28,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 121,
      "end": 151,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 128,
        "end": 151,
        "id": {
          "type": "Identifier",
          "start": 134,
          "end": 135,
          "name": "D",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 144,
          "end": 145,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 149,
          "end": 151,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 145,
          "end": 148,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 146,
              "end": 147,
              "typeName": {
                "type": "Identifier",
                "start": 146,
                "end": 147,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
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
  "end": 68,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 30,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 29,
        "value": "unknown",
        "raw": "\"unknown\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 31,
      "end": 67,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 38,
        "end": 67,
        "id": {
          "type": "Identifier",
          "start": 48,
          "end": 49,
          "name": "I",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 49,
          "end": 52,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 50,
              "end": 51,
              "name": {
                "type": "Identifier",
                "start": 50,
                "end": 51,
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
          "start": 53,
          "end": 67,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 55,
              "end": 65,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 56,
                "end": 64,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 58,
                  "end": 64,
                  "typeName": {
                    "type": "Identifier",
                    "start": 58,
                    "end": 61,
                    "name": "Foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 61,
                    "end": 64,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 62,
                        "end": 63,
                        "typeName": {
                          "type": "Identifier",
                          "start": 62,
                          "end": 63,
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
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 29,
        "value": "unknown",
        "raw": "\"unknown\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 31,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 40,
        "end": 46
      },
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 48,
      "end": 57,
      "expression": {
        "type": "CallExpression",
        "start": 48,
        "end": 56,
        "callee": {
          "type": "Identifier",
          "start": 48,
          "end": 51,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
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
              "typeName": {
                "type": "Identifier",
                "start": 52,
                "end": 53,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "directive": null
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 28,
        "value": "unkown",
        "raw": "\"unkown\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 30,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 36,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 39,
        "end": 45
      },
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 60,
      "expression": {
        "type": "NewExpression",
        "start": 47,
        "end": 59,
        "callee": {
          "type": "Identifier",
          "start": 51,
          "end": 54,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 54,
          "end": 57,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 55,
              "end": 56,
              "typeName": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "name": "g",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 18,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 20,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "U",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 29,
        "end": 35
      },
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 37,
      "end": 44,
      "expression": {
        "type": "CallExpression",
        "start": 37,
        "end": 43,
        "callee": {
          "type": "Identifier",
          "start": 37,
          "end": 38,
          "name": "g",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
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
              "typeName": {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 45,
      "end": 67,
      "expression": {
        "type": "CallExpression",
        "start": 45,
        "end": 66,
        "callee": {
          "type": "Identifier",
          "start": 45,
          "end": 46,
          "name": "g",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
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
              "typeName": {
                "type": "Identifier",
                "start": 47,
                "end": 63,
                "name": "InvalidReference",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "directive": null
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 12,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 30,
        "value": "unknown",
        "raw": "\"unknown\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 33,
      "end": 49,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 42,
        "end": 48
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 51,
      "end": 196,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 58,
        "end": 196,
        "id": {
          "type": "Identifier",
          "start": 64,
          "end": 65,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 74,
          "end": 75,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 79,
          "end": 196,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 85,
              "end": 194,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 85,
                "end": 86,
                "name": "m",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 86,
                "end": 194,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 89,
                  "end": 194,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 99,
                      "end": 113,
                      "expression": {
                        "type": "CallExpression",
                        "start": 99,
                        "end": 112,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 99,
                          "end": 106,
                          "object": {
                            "type": "Super",
                            "start": 99,
                            "end": 104
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 105,
                            "end": 106,
                            "name": "m",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 110,
                            "end": 111,
                            "value": 1,
                            "raw": "1"
                          }
                        ],
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 107,
                                "end": 108,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 122,
                      "end": 150,
                      "expression": {
                        "type": "CallExpression",
                        "start": 122,
                        "end": 149,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 122,
                          "end": 129,
                          "object": {
                            "type": "Super",
                            "start": 122,
                            "end": 127
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 128,
                            "end": 129,
                            "name": "m",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 130,
                                "end": 146,
                                "name": "InvalidReference",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      },
                      "directive": null
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 75,
          "end": 78,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 76,
              "end": 77,
              "typeName": {
                "type": "Identifier",
                "start": 76,
                "end": 77,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
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
