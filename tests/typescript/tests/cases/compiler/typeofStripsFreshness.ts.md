__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Collection",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
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
              "start": 21,
              "end": 22
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 21,
            "end": 22
          }
        ],
        "start": 20,
        "end": 23
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "elems",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 35
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 37,
                    "end": 38
                  },
                  "typeArguments": null,
                  "start": 37,
                  "end": 38
                },
                "start": 37,
                "end": 40
              },
              "start": 35,
              "end": 40
            },
            "accessibility": null,
            "static": false,
            "start": 30,
            "end": 41
          }
        ],
        "start": 24,
        "end": 43
      },
      "declare": false,
      "start": 0,
      "end": 43
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CollectionStatic",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 70
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 82,
                    "end": 83
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 82,
                  "end": 83
                }
              ],
              "start": 81,
              "end": 84
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 98
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 99,
                        "end": 100
                      },
                      "typeArguments": null,
                      "start": 99,
                      "end": 100
                    }
                  ],
                  "start": 98,
                  "end": 101
                },
                "start": 88,
                "end": 101
              },
              "start": 86,
              "end": 101
            },
            "start": 77,
            "end": 102
          }
        ],
        "start": 71,
        "end": 104
      },
      "declare": false,
      "start": 44,
      "end": 104
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
            "name": "Collection",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CollectionStatic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 131,
                  "end": 147
                },
                "typeArguments": null,
                "start": 131,
                "end": 147
              },
              "start": 129,
              "end": 147
            },
            "start": 119,
            "end": 147
          },
          "init": null,
          "definite": false,
          "start": 119,
          "end": 147
        }
      ],
      "declare": true,
      "start": 105,
      "end": 148
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
            "name": "ALL",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 159
          },
          "init": {
            "type": "Literal",
            "value": "all",
            "raw": "\"all\"",
            "start": 162,
            "end": 167
          },
          "definite": false,
          "start": 156,
          "end": 167
        }
      ],
      "declare": false,
      "start": 150,
      "end": 168
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "All",
        "optional": false,
        "typeAnnotation": null,
        "start": 174,
        "end": 177
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ALL",
          "optional": false,
          "typeAnnotation": null,
          "start": 187,
          "end": 190
        },
        "typeArguments": null,
        "start": 180,
        "end": 190
      },
      "declare": false,
      "start": 169,
      "end": 191
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
            "name": "result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 217
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "All",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 218,
                        "end": 221
                      },
                      "typeArguments": null,
                      "start": 218,
                      "end": 221
                    }
                  ],
                  "start": 217,
                  "end": 222
                },
                "start": 207,
                "end": 222
              },
              "start": 205,
              "end": 222
            },
            "start": 199,
            "end": 222
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Collection",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 239
            },
            "typeArguments": null,
            "arguments": [],
            "start": 225,
            "end": 241
          },
          "definite": false,
          "start": 199,
          "end": 241
        }
      ],
      "declare": false,
      "start": 193,
      "end": 242
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
            "name": "ANOTHER",
            "optional": false,
            "typeAnnotation": null,
            "start": 250,
            "end": 257
          },
          "init": {
            "type": "Literal",
            "value": "another",
            "raw": "\"another\"",
            "start": 260,
            "end": 269
          },
          "definite": false,
          "start": 250,
          "end": 269
        }
      ],
      "declare": false,
      "start": 244,
      "end": 270
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Another",
        "optional": false,
        "typeAnnotation": null,
        "start": 276,
        "end": 283
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANOTHER",
          "optional": false,
          "typeAnnotation": null,
          "start": 293,
          "end": 300
        },
        "typeArguments": null,
        "start": 286,
        "end": 300
      },
      "declare": false,
      "start": 271,
      "end": 301
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both",
        "optional": false,
        "typeAnnotation": null,
        "start": 308,
        "end": 312
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Another",
              "optional": false,
              "typeAnnotation": null,
              "start": 315,
              "end": 322
            },
            "typeArguments": null,
            "start": 315,
            "end": 322
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "All",
              "optional": false,
              "typeAnnotation": null,
              "start": 325,
              "end": 328
            },
            "typeArguments": null,
            "start": 325,
            "end": 328
          }
        ],
        "start": 315,
        "end": 328
      },
      "declare": false,
      "start": 303,
      "end": 329
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
            "name": "result2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 346,
                  "end": 356
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Both",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 357,
                        "end": 361
                      },
                      "typeArguments": null,
                      "start": 357,
                      "end": 361
                    }
                  ],
                  "start": 356,
                  "end": 362
                },
                "start": 346,
                "end": 362
              },
              "start": 344,
              "end": 362
            },
            "start": 337,
            "end": 362
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Collection",
              "optional": false,
              "typeAnnotation": null,
              "start": 369,
              "end": 379
            },
            "typeArguments": null,
            "arguments": [],
            "start": 365,
            "end": 381
          },
          "definite": false,
          "start": 337,
          "end": 381
        }
      ],
      "declare": false,
      "start": 331,
      "end": 382
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 382
}
```
