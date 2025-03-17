__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 309,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 10,
            "end": 13,
            "raw": "\"X\"",
            "value": "X"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 15,
      "end": 74,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 21,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 24,
        "end": 74,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 26,
            "end": 73,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 73,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 29,
                "end": 73,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 31,
                    "end": 48,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 32,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 33,
                      "end": 47,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 35,
                        "end": 47,
                        "literal": {
                          "type": "Literal",
                          "start": 35,
                          "end": 47,
                          "raw": "\"value of b\"",
                          "value": "value of b"
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 49,
                    "end": 71,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 61,
                      "decorators": [],
                      "name": "notNecessary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 61,
                      "end": 71,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 63,
                        "end": 71,
                        "exprName": {
                          "type": "Identifier",
                          "start": 70,
                          "end": 71,
                          "decorators": [],
                          "name": "u",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 75,
      "end": 130,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 130,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 85,
            "end": 130,
            "expression": {
              "type": "ObjectExpression",
              "start": 85,
              "end": 121,
              "properties": [
                {
                  "type": "Property",
                  "start": 87,
                  "end": 102,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 88,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 90,
                    "end": 102,
                    "raw": "\"value of a\"",
                    "value": "value of a"
                  }
                },
                {
                  "type": "Property",
                  "start": 104,
                  "end": 119,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 116,
                    "decorators": [],
                    "name": "notNecessary",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 119,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 125,
              "end": 130,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 125,
                "end": 130,
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 133,
      "end": 173,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 140,
        "end": 173,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 146,
            "end": 173,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 146,
              "end": 148,
              "decorators": [],
              "name": "o1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 151,
              "end": 173,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 171,
                "end": 173,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 152,
                  "end": 166,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 153,
                    "end": 166,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 155,
                      "end": 166,
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 162,
                        "end": 165,
                        "literal": {
                          "type": "Literal",
                          "start": 162,
                          "end": 165,
                          "raw": "'b'",
                          "value": "b"
                        }
                      },
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "start": 155,
                        "end": 161,
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 157,
                          "end": 160,
                          "literal": {
                            "type": "Literal",
                            "start": 157,
                            "end": 160,
                            "raw": "'a'",
                            "value": "a"
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 155,
                          "end": 156,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 155,
                            "end": 156,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
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
      "start": 175,
      "end": 219,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 182,
        "end": 219,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 188,
            "end": 219,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 188,
              "end": 190,
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 193,
              "end": 219,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 217,
                "end": 219,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 194,
                  "end": 212,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 195,
                    "end": 212,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 197,
                      "end": 212,
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 208,
                        "end": 211,
                        "literal": {
                          "type": "Literal",
                          "start": 208,
                          "end": 211,
                          "raw": "'a'",
                          "value": "a"
                        }
                      },
                      "objectType": {
                        "type": "TSTypeQuery",
                        "start": 198,
                        "end": 206,
                        "exprName": {
                          "type": "Identifier",
                          "start": 205,
                          "end": 206,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
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
      "start": 220,
      "end": 263,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 227,
        "end": 263,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 233,
            "end": 263,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 233,
              "end": 235,
              "decorators": [],
              "name": "o3",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 238,
              "end": 263,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 261,
                "end": 263,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 239,
                  "end": 256,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 240,
                    "end": 256,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 243,
                      "end": 256,
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 252,
                        "end": 255,
                        "literal": {
                          "type": "Literal",
                          "start": 252,
                          "end": 255,
                          "raw": "'a'",
                          "value": "a"
                        }
                      },
                      "objectType": {
                        "type": "TSTypeQuery",
                        "start": 243,
                        "end": 251,
                        "exprName": {
                          "type": "Identifier",
                          "start": 250,
                          "end": 251,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
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
      "start": 265,
      "end": 308,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 272,
        "end": 308,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 278,
            "end": 308,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 278,
              "end": 280,
              "decorators": [],
              "name": "o4",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 283,
              "end": 308,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 306,
                "end": 308,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 284,
                  "end": 301,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 285,
                    "end": 301,
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "start": 287,
                      "end": 301,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 294,
                        "end": 300,
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 296,
                          "end": 299,
                          "literal": {
                            "type": "Literal",
                            "start": 296,
                            "end": 299,
                            "raw": "'a'",
                            "value": "a"
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 294,
                          "end": 295,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 294,
                            "end": 295,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 28,
        "raw": "'./decl'",
        "value": "./decl"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 53,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 37,
        "end": 53,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 43,
            "end": 53,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 47,
              "end": 53,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 48,
                  "end": 52,
                  "argument": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
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
