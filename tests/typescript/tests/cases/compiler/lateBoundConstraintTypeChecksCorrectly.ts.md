__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooProp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 30,
                  "end": 36
                },
                "start": 23,
                "end": 36
              },
              "start": 21,
              "end": 36
            },
            "start": 14,
            "end": 36
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 36
        }
      ],
      "declare": true,
      "start": 0,
      "end": 37
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "barProp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 68,
                  "end": 74
                },
                "start": 61,
                "end": 74
              },
              "start": 59,
              "end": 74
            },
            "start": 52,
            "end": 74
          },
          "init": null,
          "definite": false,
          "start": 52,
          "end": 74
        }
      ],
      "declare": true,
      "start": 38,
      "end": 75
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BothProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 91
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 108
            },
            "typeArguments": null,
            "start": 94,
            "end": 108
          },
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "barProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 125
            },
            "typeArguments": null,
            "start": 111,
            "end": 125
          }
        ],
        "start": 94,
        "end": 125
      },
      "declare": false,
      "start": 77,
      "end": 126
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 145,
          "end": 148
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 150
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 149,
              "end": 150
            }
          ],
          "start": 148,
          "end": 151
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 157,
                "end": 164
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 167,
                    "end": 168
                  },
                  "typeArguments": null,
                  "start": 167,
                  "end": 168
                },
                "start": 165,
                "end": 168
              },
              "accessibility": null,
              "static": false,
              "start": 156,
              "end": 169
            },
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "barProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 173,
                "end": 180
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 183,
                  "end": 189
                },
                "start": 181,
                "end": 189
              },
              "accessibility": null,
              "static": false,
              "start": 172,
              "end": 190
            }
          ],
          "start": 152,
          "end": 192
        },
        "declare": false,
        "start": 135,
        "end": 192
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 128,
      "end": 192
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 203,
        "end": 204
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 206
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 215,
                "end": 218
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 219,
                    "end": 225
                  }
                ],
                "start": 218,
                "end": 226
              },
              "start": 215,
              "end": 226
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 205,
            "end": 226
          }
        ],
        "start": 204,
        "end": 227
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 231,
                "end": 232
              },
              "typeArguments": null,
              "start": 231,
              "end": 232
            },
            "start": 229,
            "end": 232
          },
          "start": 228,
          "end": 232
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "abc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 246,
                  "end": 249
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 252,
                    "end": 253
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fooProp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 254,
                    "end": 261
                  },
                  "optional": false,
                  "computed": true,
                  "start": 252,
                  "end": 262
                },
                "definite": false,
                "start": 246,
                "end": 262
              }
            ],
            "declare": false,
            "start": 240,
            "end": 263
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "def",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 355,
                          "end": 356
                        },
                        "typeArguments": null,
                        "start": 355,
                        "end": 356
                      },
                      "indexType": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fooProp",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 364,
                          "end": 371
                        },
                        "typeArguments": null,
                        "start": 357,
                        "end": 371
                      },
                      "start": 355,
                      "end": 372
                    },
                    "start": 353,
                    "end": 372
                  },
                  "start": 350,
                  "end": 372
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 375,
                    "end": 376
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fooProp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 377,
                    "end": 384
                  },
                  "optional": false,
                  "computed": true,
                  "start": 375,
                  "end": 385
                },
                "definite": false,
                "start": 350,
                "end": 385
              }
            ],
            "declare": false,
            "start": 344,
            "end": 386
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "def2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 403,
                          "end": 404
                        },
                        "typeArguments": null,
                        "start": 403,
                        "end": 404
                      },
                      "indexType": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "barProp",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 412,
                          "end": 419
                        },
                        "typeArguments": null,
                        "start": 405,
                        "end": 419
                      },
                      "start": 403,
                      "end": 420
                    },
                    "start": 401,
                    "end": 420
                  },
                  "start": 397,
                  "end": 420
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 423,
                    "end": 424
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "barProp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 425,
                    "end": 432
                  },
                  "optional": false,
                  "computed": true,
                  "start": 423,
                  "end": 433
                },
                "definite": false,
                "start": 397,
                "end": 433
              }
            ],
            "declare": false,
            "start": 391,
            "end": 434
          }
        ],
        "start": 234,
        "end": 436
      },
      "expression": false,
      "start": 194,
      "end": 436
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 436
}
```
