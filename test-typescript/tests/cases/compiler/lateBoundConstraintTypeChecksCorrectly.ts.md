__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 437,
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
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 36,
            "name": "fooProp",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 74,
            "name": "barProp",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
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
        "name": "BothProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "fooProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "barProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
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
                "name": "fooProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                "name": "barProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "FunctionDeclaration",
      "start": 194,
      "end": 436,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 204,
        "name": "f",
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
          "start": 228,
          "end": 232,
          "name": "x",
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
                "id": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 249,
                  "name": "abc",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 252,
                  "end": 262,
                  "object": {
                    "type": "Identifier",
                    "start": 252,
                    "end": 253,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 254,
                    "end": 261,
                    "name": "fooProp",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 372,
                  "name": "def",
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                          "name": "fooProp",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 375,
                  "end": 385,
                  "object": {
                    "type": "Identifier",
                    "start": 375,
                    "end": 376,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 377,
                    "end": 384,
                    "name": "fooProp",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 397,
                  "end": 420,
                  "name": "def2",
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                          "name": "barProp",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 423,
                  "end": 433,
                  "object": {
                    "type": "Identifier",
                    "start": 423,
                    "end": 424,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 425,
                    "end": 432,
                    "name": "barProp",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 215,
              "end": 226,
              "typeName": {
                "type": "Identifier",
                "start": 215,
                "end": 218,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
