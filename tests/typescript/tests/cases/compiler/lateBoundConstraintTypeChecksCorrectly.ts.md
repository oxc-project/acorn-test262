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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 36,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 38,
      "end": 75,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 74,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 77,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 91,
        "decorators": [],
        "name": "BothProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 128,
      "end": 192,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 135,
        "end": 192,
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
              "name": {
                "type": "Identifier",
                "start": 149,
                "end": 150,
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
          "start": 152,
          "end": 192,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 156,
              "end": 169,
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 157,
                "end": 164,
                "decorators": [],
                "name": "fooProp",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 165,
                "end": 168,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 167,
                  "end": 168,
                  "typeName": {
                    "type": "Identifier",
                    "start": 167,
                    "end": 168,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 172,
              "end": 190,
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 173,
                "end": 180,
                "decorators": [],
                "name": "barProp",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 181,
                "end": 189,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 183,
                  "end": 189
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 194,
      "end": 436,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 204,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 204,
        "end": 227,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 205,
            "end": 226,
            "name": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 215,
              "end": 226,
              "typeName": {
                "type": "Identifier",
                "start": 215,
                "end": 218,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
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
              }
            },
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
              "typeName": {
                "type": "Identifier",
                "start": 231,
                "end": 232,
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 234,
        "end": 436,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 240,
            "end": 263,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 246,
                "end": 262,
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
                  "object": {
                    "type": "Identifier",
                    "start": 252,
                    "end": 253,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 254,
                    "end": 261,
                    "decorators": [],
                    "name": "fooProp",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 344,
            "end": 386,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 350,
                "end": 385,
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
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 355,
                        "end": 356,
                        "typeName": {
                          "type": "Identifier",
                          "start": 355,
                          "end": 356,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
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
                      }
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 375,
                  "end": 385,
                  "object": {
                    "type": "Identifier",
                    "start": 375,
                    "end": 376,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 377,
                    "end": 384,
                    "decorators": [],
                    "name": "fooProp",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 391,
            "end": 434,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 397,
                "end": 433,
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
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 403,
                        "end": 404,
                        "typeName": {
                          "type": "Identifier",
                          "start": 403,
                          "end": 404,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
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
                      }
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 423,
                  "end": 433,
                  "object": {
                    "type": "Identifier",
                    "start": 423,
                    "end": 424,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 425,
                    "end": 432,
                    "decorators": [],
                    "name": "barProp",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
