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
        "name": "Func1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 10
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
              "start": 11,
              "end": 12
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 11,
            "end": 12
          }
        ],
        "start": 10,
        "end": 13
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
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
                  "start": 20,
                  "end": 21
                },
                "typeArguments": null,
                "start": 20,
                "end": 21
              },
              "start": 18,
              "end": 21
            },
            "start": 17,
            "end": 21
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 26,
            "end": 30
          },
          "start": 23,
          "end": 30
        },
        "start": 16,
        "end": 30
      },
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Func2",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 42
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
              "start": 43,
              "end": 44
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 43,
            "end": 44
          }
        ],
        "start": 42,
        "end": 45
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSFunctionType",
            "typeParameters": null,
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
                      "start": 53,
                      "end": 54
                    },
                    "typeArguments": null,
                    "start": 53,
                    "end": 54
                  },
                  "start": 51,
                  "end": 54
                },
                "start": 50,
                "end": 54
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 59,
                "end": 63
              },
              "start": 56,
              "end": 63
            },
            "start": 49,
            "end": 63
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 67,
            "end": 76
          }
        ],
        "start": 48,
        "end": 76
      },
      "declare": false,
      "start": 32,
      "end": 77
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Func1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 95,
                  "end": 100
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 101,
                      "end": 107
                    }
                  ],
                  "start": 100,
                  "end": 108
                },
                "start": 95,
                "end": 108
              },
              "start": 93,
              "end": 108
            },
            "start": 91,
            "end": 108
          },
          "init": null,
          "definite": false,
          "start": 91,
          "end": 108
        }
      ],
      "declare": true,
      "start": 79,
      "end": 109
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Func1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 126,
                  "end": 131
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 132,
                        "end": 135
                      },
                      "start": 132,
                      "end": 135
                    }
                  ],
                  "start": 131,
                  "end": 136
                },
                "start": 126,
                "end": 136
              },
              "start": 124,
              "end": 136
            },
            "start": 122,
            "end": 136
          },
          "init": null,
          "definite": false,
          "start": 122,
          "end": 136
        }
      ],
      "declare": true,
      "start": 110,
      "end": 137
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 156,
        "end": 159
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
              "start": 160,
              "end": 161
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 160,
            "end": 161
          }
        ],
        "start": 159,
        "end": 162
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Func1",
                "optional": false,
                "typeAnnotation": null,
                "start": 167,
                "end": 172
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
                      "start": 173,
                      "end": 174
                    },
                    "typeArguments": null,
                    "start": 173,
                    "end": 174
                  }
                ],
                "start": 172,
                "end": 175
              },
              "start": 167,
              "end": 175
            },
            "start": 165,
            "end": 175
          },
          "start": 163,
          "end": 175
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Func1",
                "optional": false,
                "typeAnnotation": null,
                "start": 181,
                "end": 186
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
                      "start": 187,
                      "end": 188
                    },
                    "typeArguments": null,
                    "start": 187,
                    "end": 188
                  }
                ],
                "start": 186,
                "end": 189
              },
              "start": 181,
              "end": 189
            },
            "start": 179,
            "end": 189
          },
          "start": 177,
          "end": 189
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 192,
          "end": 196
        },
        "start": 190,
        "end": 196
      },
      "body": null,
      "expression": false,
      "start": 139,
      "end": 197
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 199,
          "end": 202
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 205
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 209
          }
        ],
        "optional": false,
        "start": 199,
        "end": 210
      },
      "directive": null,
      "start": 199,
      "end": 211
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Func2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 229,
                  "end": 234
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 235,
                      "end": 241
                    }
                  ],
                  "start": 234,
                  "end": 242
                },
                "start": 229,
                "end": 242
              },
              "start": 227,
              "end": 242
            },
            "start": 225,
            "end": 242
          },
          "init": null,
          "definite": false,
          "start": 225,
          "end": 242
        }
      ],
      "declare": true,
      "start": 213,
      "end": 243
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Func2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 260,
                  "end": 265
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 266,
                        "end": 269
                      },
                      "start": 266,
                      "end": 269
                    }
                  ],
                  "start": 265,
                  "end": 270
                },
                "start": 260,
                "end": 270
              },
              "start": 258,
              "end": 270
            },
            "start": 256,
            "end": 270
          },
          "init": null,
          "definite": false,
          "start": 256,
          "end": 270
        }
      ],
      "declare": true,
      "start": 244,
      "end": 271
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 290,
        "end": 293
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
              "start": 294,
              "end": 295
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 294,
            "end": 295
          }
        ],
        "start": 293,
        "end": 296
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Func2",
                "optional": false,
                "typeAnnotation": null,
                "start": 301,
                "end": 306
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
                      "start": 307,
                      "end": 308
                    },
                    "typeArguments": null,
                    "start": 307,
                    "end": 308
                  }
                ],
                "start": 306,
                "end": 309
              },
              "start": 301,
              "end": 309
            },
            "start": 299,
            "end": 309
          },
          "start": 297,
          "end": 309
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Func2",
                "optional": false,
                "typeAnnotation": null,
                "start": 315,
                "end": 320
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
                      "start": 321,
                      "end": 322
                    },
                    "typeArguments": null,
                    "start": 321,
                    "end": 322
                  }
                ],
                "start": 320,
                "end": 323
              },
              "start": 315,
              "end": 323
            },
            "start": 313,
            "end": 323
          },
          "start": 311,
          "end": 323
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 326,
          "end": 330
        },
        "start": 324,
        "end": 330
      },
      "body": null,
      "expression": false,
      "start": 273,
      "end": 331
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 333,
          "end": 336
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 337,
            "end": 339
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 341,
            "end": 343
          }
        ],
        "optional": false,
        "start": 333,
        "end": 344
      },
      "directive": null,
      "start": 333,
      "end": 345
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 346,
          "end": 349
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "g1",
            "optional": false,
            "typeAnnotation": null,
            "start": 350,
            "end": 352
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "g2",
            "optional": false,
            "typeAnnotation": null,
            "start": 354,
            "end": 356
          }
        ],
        "optional": false,
        "start": 346,
        "end": 357
      },
      "directive": null,
      "start": 346,
      "end": 358
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 358
}
```
