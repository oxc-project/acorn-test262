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
        "name": "NumberMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 19
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
              "start": 20,
              "end": 21
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 20,
            "end": 21
          }
        ],
        "start": 19,
        "end": 22
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 37,
                    "end": 43
                  },
                  "start": 35,
                  "end": 43
                },
                "start": 30,
                "end": 43
              }
            ],
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
                  "start": 46,
                  "end": 47
                },
                "typeArguments": null,
                "start": 46,
                "end": 47
              },
              "start": 44,
              "end": 47
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 23,
        "end": 50
      },
      "declare": false,
      "start": 0,
      "end": 50
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 71
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
              "start": 72,
              "end": 73
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 72,
            "end": 73
          }
        ],
        "start": 71,
        "end": 74
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 89,
                    "end": 95
                  },
                  "start": 87,
                  "end": 95
                },
                "start": 82,
                "end": 95
              }
            ],
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
                  "start": 98,
                  "end": 99
                },
                "typeArguments": null,
                "start": 98,
                "end": 99
              },
              "start": 96,
              "end": 99
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 81,
            "end": 100
          }
        ],
        "start": 75,
        "end": 102
      },
      "declare": false,
      "start": 52,
      "end": 102
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "numberMapToArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 137
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 138,
              "end": 139
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 138,
            "end": 139
          }
        ],
        "start": 137,
        "end": 140
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "object",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 158
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
                      "start": 159,
                      "end": 160
                    },
                    "typeArguments": null,
                    "start": 159,
                    "end": 160
                  }
                ],
                "start": 158,
                "end": 161
              },
              "start": 149,
              "end": 161
            },
            "start": 147,
            "end": 161
          },
          "start": 141,
          "end": 161
        }
      ],
      "returnType": {
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
              "start": 164,
              "end": 165
            },
            "typeArguments": null,
            "start": 164,
            "end": 165
          },
          "start": 164,
          "end": 167
        },
        "start": 162,
        "end": 167
      },
      "body": null,
      "expression": false,
      "start": 104,
      "end": 168
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "stringMapToArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 186,
        "end": 202
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 203,
              "end": 204
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 203,
            "end": 204
          }
        ],
        "start": 202,
        "end": 205
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "object",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StringMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 214,
                "end": 223
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
                      "start": 224,
                      "end": 225
                    },
                    "typeArguments": null,
                    "start": 224,
                    "end": 225
                  }
                ],
                "start": 223,
                "end": 226
              },
              "start": 214,
              "end": 226
            },
            "start": 212,
            "end": 226
          },
          "start": 206,
          "end": 226
        }
      ],
      "returnType": {
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
              "start": 229,
              "end": 230
            },
            "typeArguments": null,
            "start": 229,
            "end": 230
          },
          "start": 229,
          "end": 232
        },
        "start": 227,
        "end": 232
      },
      "body": null,
      "expression": false,
      "start": 169,
      "end": 233
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NumberMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 250,
                  "end": 259
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Function",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 260,
                        "end": 268
                      },
                      "typeArguments": null,
                      "start": 260,
                      "end": 268
                    }
                  ],
                  "start": 259,
                  "end": 269
                },
                "start": 250,
                "end": 269
              },
              "start": 248,
              "end": 269
            },
            "start": 239,
            "end": 269
          },
          "init": null,
          "definite": false,
          "start": 239,
          "end": 269
        }
      ],
      "declare": false,
      "start": 235,
      "end": 270
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 286,
                  "end": 295
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Function",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 296,
                        "end": 304
                      },
                      "typeArguments": null,
                      "start": 296,
                      "end": 304
                    }
                  ],
                  "start": 295,
                  "end": 305
                },
                "start": 286,
                "end": 305
              },
              "start": 284,
              "end": 305
            },
            "start": 275,
            "end": 305
          },
          "init": null,
          "definite": false,
          "start": 275,
          "end": 305
        }
      ],
      "declare": false,
      "start": 271,
      "end": 306
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Function",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 316,
                    "end": 324
                  },
                  "typeArguments": null,
                  "start": 316,
                  "end": 324
                },
                "start": 316,
                "end": 326
              },
              "start": 314,
              "end": 326
            },
            "start": 312,
            "end": 326
          },
          "init": null,
          "definite": false,
          "start": 312,
          "end": 326
        }
      ],
      "declare": false,
      "start": 308,
      "end": 327
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 332,
            "end": 334
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberMapToArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 337,
              "end": 353
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "numberMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 354,
                "end": 363
              }
            ],
            "optional": false,
            "start": 337,
            "end": 364
          },
          "definite": false,
          "start": 332,
          "end": 364
        }
      ],
      "declare": false,
      "start": 328,
      "end": 365
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
            "end": 379
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberMapToArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 398
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "stringMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 399,
                "end": 408
              }
            ],
            "optional": false,
            "start": 382,
            "end": 409
          },
          "definite": false,
          "start": 377,
          "end": 409
        }
      ],
      "declare": false,
      "start": 373,
      "end": 410
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 424
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringMapToArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 427,
              "end": 443
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "numberMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 444,
                "end": 453
              }
            ],
            "optional": false,
            "start": 427,
            "end": 454
          },
          "definite": false,
          "start": 422,
          "end": 454
        }
      ],
      "declare": false,
      "start": 418,
      "end": 455
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 484,
            "end": 486
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringMapToArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 489,
              "end": 505
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "stringMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 506,
                "end": 515
              }
            ],
            "optional": false,
            "start": 489,
            "end": 516
          },
          "definite": false,
          "start": 484,
          "end": 516
        }
      ],
      "declare": false,
      "start": 480,
      "end": 517
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 524
}
```
