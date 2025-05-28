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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 13,
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
            "value": "X",
            "raw": "\"X\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 15,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 21,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 24,
        "end": 74,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 26,
            "end": 73,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 32,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                          "value": "value of b",
                          "raw": "\"value of b\""
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 49,
                    "end": 71,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 61,
                      "decorators": [],
                      "name": "notNecessary",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 75,
      "end": 130,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 130,
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 88,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 90,
                    "end": 102,
                    "value": "value of a",
                    "raw": "\"value of a\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 104,
                  "end": 119,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 116,
                    "decorators": [],
                    "name": "notNecessary",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 119,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 125,
              "end": 130,
              "typeName": {
                "type": "Identifier",
                "start": 125,
                "end": 130,
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 133,
      "end": 173,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 140,
        "end": 173,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 146,
            "end": 173,
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
              "expression": false,
              "async": false,
              "typeParameters": null,
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
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "start": 155,
                        "end": 161,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 155,
                          "end": 156,
                          "typeName": {
                            "type": "Identifier",
                            "start": 155,
                            "end": 156,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 157,
                          "end": 160,
                          "literal": {
                            "type": "Literal",
                            "start": 157,
                            "end": 160,
                            "value": "a",
                            "raw": "'a'"
                          }
                        }
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 162,
                        "end": 165,
                        "literal": {
                          "type": "Literal",
                          "start": 162,
                          "end": 165,
                          "value": "b",
                          "raw": "'b'"
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 171,
                "end": 173,
                "body": []
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 175,
      "end": 219,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 182,
        "end": 219,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 188,
            "end": 219,
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
              "expression": false,
              "async": false,
              "typeParameters": null,
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
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 208,
                        "end": 211,
                        "literal": {
                          "type": "Literal",
                          "start": 208,
                          "end": 211,
                          "value": "a",
                          "raw": "'a'"
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 217,
                "end": 219,
                "body": []
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 220,
      "end": 263,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 227,
        "end": 263,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 233,
            "end": 263,
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
              "expression": false,
              "async": false,
              "typeParameters": null,
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
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 252,
                        "end": 255,
                        "literal": {
                          "type": "Literal",
                          "start": 252,
                          "end": 255,
                          "value": "a",
                          "raw": "'a'"
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 261,
                "end": 263,
                "body": []
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 265,
      "end": 308,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 272,
        "end": 308,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 278,
            "end": 308,
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
              "expression": false,
              "async": false,
              "typeParameters": null,
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
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 294,
                          "end": 295,
                          "typeName": {
                            "type": "Identifier",
                            "start": 294,
                            "end": 295,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 296,
                          "end": 299,
                          "literal": {
                            "type": "Literal",
                            "start": 296,
                            "end": 299,
                            "value": "a",
                            "raw": "'a'"
                          }
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 306,
                "end": 308,
                "body": []
              },
              "id": null,
              "generator": false
            },
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
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 28,
        "value": "./decl",
        "raw": "'./decl'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 53,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 37,
        "end": 53,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 43,
            "end": 53,
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
            },
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
