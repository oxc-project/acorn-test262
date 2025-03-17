__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 383,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "name": "Collection",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 23,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
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
        "start": 24,
        "end": 43,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 30,
            "end": 41,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 35,
              "name": "elems",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 38,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
    {
      "type": "TSInterfaceDeclaration",
      "start": 44,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 70,
        "name": "CollectionStatic",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 71,
        "end": 104,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 77,
            "end": 102,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 81,
              "end": 84,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 82,
                  "end": 83,
                  "name": {
                    "type": "Identifier",
                    "start": 82,
                    "end": 83,
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
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 101,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 88,
                "end": 101,
                "typeName": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 98,
                  "name": "Collection",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 98,
                  "end": 101,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 99,
                      "end": 100,
                      "typeName": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 100,
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
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 147,
            "name": "Collection",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 147,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 131,
                "end": 147,
                "typeName": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 147,
                  "name": "CollectionStatic",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 150,
      "end": 168,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 167,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 159,
            "name": "ALL",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 162,
            "end": 167,
            "value": "all",
            "raw": "\"all\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 169,
      "end": 191,
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 177,
        "name": "All",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 180,
        "end": 190,
        "exprName": {
          "type": "Identifier",
          "start": 187,
          "end": 190,
          "name": "ALL",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 222,
            "name": "result",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 205,
              "end": 222,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 207,
                "end": 222,
                "typeName": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 217,
                  "name": "Collection",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 217,
                  "end": 222,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 218,
                      "end": 221,
                      "typeName": {
                        "type": "Identifier",
                        "start": 218,
                        "end": 221,
                        "name": "All",
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
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 225,
            "end": 241,
            "callee": {
              "type": "Identifier",
              "start": 229,
              "end": 239,
              "name": "Collection",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 250,
            "end": 257,
            "name": "ANOTHER",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 260,
            "end": 269,
            "value": "another",
            "raw": "\"another\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 271,
      "end": 301,
      "id": {
        "type": "Identifier",
        "start": 276,
        "end": 283,
        "name": "Another",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 286,
        "end": 300,
        "exprName": {
          "type": "Identifier",
          "start": 293,
          "end": 300,
          "name": "ANOTHER",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 303,
      "end": 329,
      "id": {
        "type": "Identifier",
        "start": 308,
        "end": 312,
        "name": "Both",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 315,
        "end": 328,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 315,
            "end": 322,
            "typeName": {
              "type": "Identifier",
              "start": 315,
              "end": 322,
              "name": "Another",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 325,
            "end": 328,
            "typeName": {
              "type": "Identifier",
              "start": 325,
              "end": 328,
              "name": "All",
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
      "type": "VariableDeclaration",
      "start": 331,
      "end": 382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 337,
          "end": 381,
          "id": {
            "type": "Identifier",
            "start": 337,
            "end": 362,
            "name": "result2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 344,
              "end": 362,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 346,
                "end": 362,
                "typeName": {
                  "type": "Identifier",
                  "start": 346,
                  "end": 356,
                  "name": "Collection",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 356,
                  "end": 362,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 357,
                      "end": 361,
                      "typeName": {
                        "type": "Identifier",
                        "start": 357,
                        "end": 361,
                        "name": "Both",
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
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 365,
            "end": 381,
            "callee": {
              "type": "Identifier",
              "start": 369,
              "end": 379,
              "name": "Collection",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
