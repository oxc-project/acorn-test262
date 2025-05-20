__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 436,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 36,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 36,
            "decorators": [],
            "name": "fooProp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 36,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 23,
                "end": 36,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 30,
                  "end": 36
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 38,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 74,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 74,
            "decorators": [],
            "name": "barProp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 74,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 61,
                "end": 74,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 68,
                  "end": 74
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 77,
      "end": 126,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 91,
        "decorators": [],
        "name": "BothProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 94,
        "end": 125,
        "types": [
          {
            "type": "TSTypeQuery",
            "start": 94,
            "end": 108,
            "exprName": {
              "type": "Identifier",
              "start": 101,
              "end": 108,
              "decorators": [],
              "name": "fooProp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeQuery",
            "start": 111,
            "end": 125,
            "exprName": {
              "type": "Identifier",
              "start": 118,
              "end": 125,
              "decorators": [],
              "name": "barProp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 128,
      "end": 192,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 135,
        "end": 192,
        "body": {
          "type": "TSInterfaceBody",
          "start": 152,
          "end": 192,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 156,
              "end": 169,
              "accessibility": null,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 157,
                "end": 164,
                "decorators": [],
                "name": "fooProp",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 165,
                "end": 168,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 167,
                  "end": 168,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 167,
                    "end": 168,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 172,
              "end": 190,
              "accessibility": null,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 173,
                "end": 180,
                "decorators": [],
                "name": "barProp",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 181,
                "end": 189,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 183,
                  "end": 189
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 145,
          "end": 148,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 148,
          "end": 151,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 149,
              "end": 150,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 149,
                "end": 150,
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
      "type": "FunctionDeclaration",
      "start": 194,
      "end": 436,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 234,
        "end": 436,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 240,
            "end": 263,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 246,
                "end": 262,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 249,
                  "decorators": [],
                  "name": "abc",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 252,
                  "end": 262,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 252,
                    "end": 253,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 254,
                    "end": 261,
                    "decorators": [],
                    "name": "fooProp",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 344,
            "end": 386,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 350,
                "end": 385,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 372,
                  "decorators": [],
                  "name": "def",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 353,
                    "end": 372,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 355,
                      "end": 372,
                      "indexType": {
                        "type": "TSTypeQuery",
                        "start": 357,
                        "end": 371,
                        "exprName": {
                          "type": "Identifier",
                          "start": 364,
                          "end": 371,
                          "decorators": [],
                          "name": "fooProp",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 355,
                        "end": 356,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 355,
                          "end": 356,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 375,
                  "end": 385,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 375,
                    "end": 376,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 377,
                    "end": 384,
                    "decorators": [],
                    "name": "fooProp",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 391,
            "end": 434,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 397,
                "end": 433,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 397,
                  "end": 420,
                  "decorators": [],
                  "name": "def2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 401,
                    "end": 420,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 403,
                      "end": 420,
                      "indexType": {
                        "type": "TSTypeQuery",
                        "start": 405,
                        "end": 419,
                        "exprName": {
                          "type": "Identifier",
                          "start": 412,
                          "end": 419,
                          "decorators": [],
                          "name": "barProp",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 403,
                        "end": 404,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 403,
                          "end": 404,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 423,
                  "end": 433,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 423,
                    "end": 424,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 425,
                    "end": 432,
                    "decorators": [],
                    "name": "barProp",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 204,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 228,
          "end": 232,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 229,
            "end": 232,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 231,
              "end": 232,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 231,
                "end": 232,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 204,
        "end": 227,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 205,
            "end": 226,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 215,
              "end": 226,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 218,
                "end": 226,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 219,
                    "end": 225
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 215,
                "end": 218,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
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
  "sourceType": "module",
  "hashbang": null
}
```
