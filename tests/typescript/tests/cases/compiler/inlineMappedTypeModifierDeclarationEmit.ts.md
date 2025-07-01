__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "test1",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "test1",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "importKind": "value",
          "start": 9,
          "end": 14
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "test2",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 21
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "test2",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 21
          },
          "importKind": "value",
          "start": 16,
          "end": 21
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./other",
        "raw": "\"./other\"",
        "start": 29,
        "end": 38
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 39
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "wrappedTest1",
          "optional": false,
          "typeAnnotation": null,
          "start": 57,
          "end": 69
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
                "start": 70,
                "end": 71
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 70,
              "end": 71
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 73,
                "end": 74
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 83,
                "end": 89
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 73,
              "end": 89
            }
          ],
          "start": 69,
          "end": 90
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
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
                  "start": 96,
                  "end": 97
                },
                "typeArguments": null,
                "start": 96,
                "end": 97
              },
              "start": 94,
              "end": 97
            },
            "start": 91,
            "end": 97
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 102,
                  "end": 103
                },
                "typeArguments": null,
                "start": 102,
                "end": 103
              },
              "start": 100,
              "end": 103
            },
            "start": 99,
            "end": 103
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 116,
                  "end": 121
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 122,
                    "end": 125
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 127,
                    "end": 128
                  }
                ],
                "optional": false,
                "start": 116,
                "end": 129
              },
              "start": 109,
              "end": 130
            }
          ],
          "start": 105,
          "end": 132
        },
        "expression": false,
        "start": 48,
        "end": 132
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 41,
      "end": 132
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "wrappedTest2",
          "optional": false,
          "typeAnnotation": null,
          "start": 150,
          "end": 162
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
                "start": 163,
                "end": 164
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 163,
              "end": 164
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 166,
                "end": 167
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 176,
                "end": 182
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 166,
              "end": 182
            }
          ],
          "start": 162,
          "end": 183
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
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
                  "start": 189,
                  "end": 190
                },
                "typeArguments": null,
                "start": 189,
                "end": 190
              },
              "start": 187,
              "end": 190
            },
            "start": 184,
            "end": 190
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 195,
                  "end": 196
                },
                "typeArguments": null,
                "start": 195,
                "end": 196
              },
              "start": 193,
              "end": 196
            },
            "start": 192,
            "end": 196
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 214
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 218
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 220,
                    "end": 221
                  }
                ],
                "optional": false,
                "start": 209,
                "end": 222
              },
              "start": 202,
              "end": 223
            }
          ],
          "start": 198,
          "end": 225
        },
        "expression": false,
        "start": 141,
        "end": 225
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 134,
      "end": 225
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Obj",
          "optional": false,
          "typeAnnotation": null,
          "start": 239,
          "end": 242
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 249,
                "end": 250
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 252,
                  "end": 258
                },
                "start": 250,
                "end": 258
              },
              "accessibility": null,
              "static": false,
              "start": 249,
              "end": 259
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 271,
                "end": 274
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 276,
                  "end": 282
                },
                "start": 274,
                "end": 282
              },
              "accessibility": null,
              "static": false,
              "start": 262,
              "end": 283
            }
          ],
          "start": 245,
          "end": 285
        },
        "declare": false,
        "start": 234,
        "end": 286
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 227,
      "end": 286
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "processedInternally1",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 321
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "wrappedTest1",
                "optional": false,
                "typeAnnotation": null,
                "start": 324,
                "end": 336
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 337,
                    "end": 339
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 343,
                      "end": 346
                    },
                    "typeArguments": null,
                    "start": 343,
                    "end": 346
                  },
                  "start": 337,
                  "end": 346
                },
                {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 348,
                  "end": 351
                }
              ],
              "optional": false,
              "start": 324,
              "end": 352
            },
            "definite": false,
            "start": 301,
            "end": 352
          }
        ],
        "declare": false,
        "start": 295,
        "end": 353
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 288,
      "end": 353
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "processedInternally2",
              "optional": false,
              "typeAnnotation": null,
              "start": 367,
              "end": 387
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "wrappedTest2",
                "optional": false,
                "typeAnnotation": null,
                "start": 390,
                "end": 402
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 403,
                    "end": 405
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 409,
                      "end": 412
                    },
                    "typeArguments": null,
                    "start": 409,
                    "end": 412
                  },
                  "start": 403,
                  "end": 412
                },
                {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 414,
                  "end": 417
                }
              ],
              "optional": false,
              "start": 390,
              "end": 418
            },
            "definite": false,
            "start": 367,
            "end": 418
          }
        ],
        "declare": false,
        "start": 361,
        "end": 419
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 354,
      "end": 419
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 419
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OmitReal",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 45
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
              "start": 46,
              "end": 47
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 46,
            "end": 47
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 50
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 65,
                "end": 68
              },
              "start": 59,
              "end": 68
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 49,
            "end": 68
          }
        ],
        "start": 45,
        "end": 69
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 72,
          "end": 76
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
                "start": 77,
                "end": 78
              },
              "typeArguments": null,
              "start": 77,
              "end": 78
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Exclude",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 87
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 94,
                        "end": 95
                      },
                      "typeArguments": null,
                      "start": 94,
                      "end": 95
                    },
                    "start": 88,
                    "end": 95
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 97,
                      "end": 98
                    },
                    "typeArguments": null,
                    "start": 97,
                    "end": 98
                  }
                ],
                "start": 87,
                "end": 99
              },
              "start": 80,
              "end": 99
            }
          ],
          "start": 76,
          "end": 100
        },
        "start": 72,
        "end": 100
      },
      "declare": false,
      "start": 32,
      "end": 101
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OmitUnveiled",
        "optional": false,
        "typeAnnotation": null,
        "start": 139,
        "end": 151
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
              "start": 152,
              "end": 153
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 152,
            "end": 153
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 156
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 165,
                  "end": 171
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 174,
                  "end": 180
                },
                {
                  "type": "TSSymbolKeyword",
                  "start": 183,
                  "end": 189
                }
              ],
              "start": 165,
              "end": 189
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 155,
            "end": 189
          }
        ],
        "start": 151,
        "end": 190
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 198,
          "end": 199
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Exclude",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 210
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 217,
                    "end": 218
                  },
                  "typeArguments": null,
                  "start": 217,
                  "end": 218
                },
                "start": 211,
                "end": 218
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 220,
                  "end": 221
                },
                "typeArguments": null,
                "start": 220,
                "end": 221
              }
            ],
            "start": 210,
            "end": 222
          },
          "start": 203,
          "end": 222
        },
        "nameType": null,
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
              "start": 225,
              "end": 226
            },
            "typeArguments": null,
            "start": 225,
            "end": 226
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 228
            },
            "typeArguments": null,
            "start": 227,
            "end": 228
          },
          "start": 225,
          "end": 229
        },
        "optional": false,
        "readonly": null,
        "start": 193,
        "end": 232
      },
      "declare": false,
      "start": 134,
      "end": 233
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "test1",
          "optional": false,
          "typeAnnotation": null,
          "start": 251,
          "end": 256
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
                "start": 257,
                "end": 258
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 257,
              "end": 258
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 260,
                "end": 261
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 270,
                "end": 276
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 260,
              "end": 276
            }
          ],
          "start": 256,
          "end": 277
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
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
                  "start": 283,
                  "end": 284
                },
                "typeArguments": null,
                "start": 283,
                "end": 284
              },
              "start": 281,
              "end": 284
            },
            "start": 278,
            "end": 284
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 289,
                  "end": 290
                },
                "typeArguments": null,
                "start": 289,
                "end": 290
              },
              "start": 287,
              "end": 290
            },
            "start": 286,
            "end": 290
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "OmitReal",
              "optional": false,
              "typeAnnotation": null,
              "start": 293,
              "end": 301
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
                    "start": 302,
                    "end": 303
                  },
                  "typeArguments": null,
                  "start": 302,
                  "end": 303
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 305,
                    "end": 306
                  },
                  "typeArguments": null,
                  "start": 305,
                  "end": 306
                }
              ],
              "start": 301,
              "end": 307
            },
            "start": 293,
            "end": 307
          },
          "start": 291,
          "end": 307
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 319,
                  "end": 321
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 325,
                  "end": 328
                },
                "start": 319,
                "end": 328
              },
              "start": 312,
              "end": 329
            }
          ],
          "start": 308,
          "end": 331
        },
        "expression": false,
        "start": 242,
        "end": 331
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 235,
      "end": 331
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "test2",
          "optional": false,
          "typeAnnotation": null,
          "start": 349,
          "end": 354
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
                "start": 355,
                "end": 356
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 355,
              "end": 356
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 358,
                "end": 359
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 368,
                "end": 374
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 358,
              "end": 374
            }
          ],
          "start": 354,
          "end": 375
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
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
                  "start": 381,
                  "end": 382
                },
                "typeArguments": null,
                "start": 381,
                "end": 382
              },
              "start": 379,
              "end": 382
            },
            "start": 376,
            "end": 382
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 387,
                  "end": 388
                },
                "typeArguments": null,
                "start": 387,
                "end": 388
              },
              "start": 385,
              "end": 388
            },
            "start": 384,
            "end": 388
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "OmitUnveiled",
              "optional": false,
              "typeAnnotation": null,
              "start": 391,
              "end": 403
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
                    "start": 404,
                    "end": 405
                  },
                  "typeArguments": null,
                  "start": 404,
                  "end": 405
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 407,
                    "end": 408
                  },
                  "typeArguments": null,
                  "start": 407,
                  "end": 408
                }
              ],
              "start": 403,
              "end": 409
            },
            "start": 391,
            "end": 409
          },
          "start": 389,
          "end": 409
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 421,
                  "end": 423
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 427,
                  "end": 430
                },
                "start": 421,
                "end": 430
              },
              "start": 414,
              "end": 431
            }
          ],
          "start": 410,
          "end": 433
        },
        "expression": false,
        "start": 340,
        "end": 433
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 333,
      "end": 433
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 32,
  "end": 433
}
```
