__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 382,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 43,
      "body": {
        "type": "TSInterfaceBody",
        "start": 24,
        "end": 43,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 30,
            "end": 41,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 35,
              "decorators": [],
              "name": "elems",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 40,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 37,
                "end": 40,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 37,
                  "end": 38,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 38,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
        "start": 10,
        "end": 20,
        "decorators": [],
        "name": "Collection",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 23,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
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
    {
      "type": "TSInterfaceDeclaration",
      "start": 44,
      "end": 104,
      "body": {
        "type": "TSInterfaceBody",
        "start": 71,
        "end": 104,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 77,
            "end": 102,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 101,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 88,
                "end": 101,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 98,
                  "end": 101,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 99,
                      "end": 100,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 100,
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
                  "start": 88,
                  "end": 98,
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 81,
              "end": 84,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 82,
                  "end": 83,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 82,
                    "end": 83,
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
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 70,
        "decorators": [],
        "name": "CollectionStatic",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 105,
      "end": 148,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 147,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 147,
            "decorators": [],
            "name": "Collection",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 147,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 131,
                "end": 147,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 147,
                  "decorators": [],
                  "name": "CollectionStatic",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 150,
      "end": 168,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 167,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 159,
            "decorators": [],
            "name": "ALL",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 162,
            "end": 167,
            "raw": "\"all\"",
            "value": "all",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 169,
      "end": 191,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 177,
        "decorators": [],
        "name": "All",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 180,
        "end": 190,
        "exprName": {
          "type": "Identifier",
          "start": 187,
          "end": 190,
          "decorators": [],
          "name": "ALL",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 193,
      "end": 242,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 199,
          "end": 241,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 222,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 205,
              "end": 222,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 207,
                "end": 222,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 217,
                  "end": 222,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 218,
                      "end": 221,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 218,
                        "end": 221,
                        "decorators": [],
                        "name": "All",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 217,
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 225,
            "end": 241,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 229,
              "end": 239,
              "decorators": [],
              "name": "Collection",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 244,
      "end": 270,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 250,
          "end": 269,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 250,
            "end": 257,
            "decorators": [],
            "name": "ANOTHER",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 260,
            "end": 269,
            "raw": "\"another\"",
            "value": "another",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 271,
      "end": 301,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 276,
        "end": 283,
        "decorators": [],
        "name": "Another",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 286,
        "end": 300,
        "exprName": {
          "type": "Identifier",
          "start": 293,
          "end": 300,
          "decorators": [],
          "name": "ANOTHER",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 303,
      "end": 329,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 308,
        "end": 312,
        "decorators": [],
        "name": "Both",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 315,
        "end": 328,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 315,
            "end": 322,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 315,
              "end": 322,
              "decorators": [],
              "name": "Another",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 325,
            "end": 328,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 325,
              "end": 328,
              "decorators": [],
              "name": "All",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 331,
      "end": 382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 337,
          "end": 381,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 337,
            "end": 362,
            "decorators": [],
            "name": "result2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 344,
              "end": 362,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 346,
                "end": 362,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 356,
                  "end": 362,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 357,
                      "end": 361,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 357,
                        "end": 361,
                        "decorators": [],
                        "name": "Both",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 346,
                  "end": 356,
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 365,
            "end": 381,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 369,
              "end": 379,
              "decorators": [],
              "name": "Collection",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
