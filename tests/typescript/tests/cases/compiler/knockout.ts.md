__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ko",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 19
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Observable",
                "optional": false,
                "typeAnnotation": null,
                "start": 42,
                "end": 52
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
                      "start": 53,
                      "end": 54
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 53,
                    "end": 54
                  }
                ],
                "start": 52,
                "end": 55
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 67,
                          "end": 68
                        },
                        "typeArguments": null,
                        "start": 67,
                        "end": 68
                      },
                      "start": 65,
                      "end": 68
                    },
                    "start": 63,
                    "end": 69
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
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
                              "start": 83,
                              "end": 84
                            },
                            "typeArguments": null,
                            "start": 83,
                            "end": 84
                          },
                          "start": 81,
                          "end": 84
                        },
                        "start": 76,
                        "end": 84
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 87,
                        "end": 90
                      },
                      "start": 85,
                      "end": 90
                    },
                    "start": 75,
                    "end": 91
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 97,
                      "end": 98
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 100,
                        "end": 106
                      },
                      "start": 98,
                      "end": 106
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 97,
                    "end": 107
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 113,
                      "end": 114
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 116,
                        "end": 123
                      },
                      "start": 114,
                      "end": 123
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 113,
                    "end": 124
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 130,
                      "end": 131
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
                          "start": 133,
                          "end": 134
                        },
                        "typeArguments": null,
                        "start": 133,
                        "end": 134
                      },
                      "start": 131,
                      "end": 134
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 130,
                    "end": 135
                  }
                ],
                "start": 56,
                "end": 140
              },
              "declare": false,
              "start": 32,
              "end": 140
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 25,
            "end": 140
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "observable",
                "optional": false,
                "typeAnnotation": null,
                "start": 160,
                "end": 170
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
                      "start": 171,
                      "end": 172
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 171,
                    "end": 172
                  }
                ],
                "start": 170,
                "end": 173
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
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
                        "start": 181,
                        "end": 182
                      },
                      "typeArguments": null,
                      "start": 181,
                      "end": 182
                    },
                    "start": 179,
                    "end": 182
                  },
                  "start": 174,
                  "end": 182
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Observable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 185,
                    "end": 195
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
                          "start": 196,
                          "end": 197
                        },
                        "typeArguments": null,
                        "start": 196,
                        "end": 197
                      }
                    ],
                    "start": 195,
                    "end": 198
                  },
                  "start": 185,
                  "end": 198
                },
                "start": 183,
                "end": 198
              },
              "body": null,
              "expression": false,
              "start": 151,
              "end": 199
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 144,
            "end": 199
          }
        ],
        "start": 20,
        "end": 202
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 2,
      "end": 202
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 208,
            "end": 209
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 219,
                  "end": 223
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ko",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 225,
                      "end": 227
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "observable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 228,
                      "end": 238
                    },
                    "optional": false,
                    "computed": false,
                    "start": 225,
                    "end": 238
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Bob",
                      "raw": "\"Bob\"",
                      "start": 239,
                      "end": 244
                    }
                  ],
                  "optional": false,
                  "start": 225,
                  "end": 245
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 219,
                "end": 245
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "age",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 255
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ko",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 257,
                      "end": 259
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "observable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 260,
                      "end": 270
                    },
                    "optional": false,
                    "computed": false,
                    "start": 257,
                    "end": 270
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 37,
                      "raw": "37",
                      "start": 271,
                      "end": 273
                    }
                  ],
                  "optional": false,
                  "start": 257,
                  "end": 274
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 252,
                "end": 274
              }
            ],
            "start": 212,
            "end": 277
          },
          "definite": false,
          "start": 208,
          "end": 277
        }
      ],
      "declare": false,
      "start": 204,
      "end": 277
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
            "name": "x_v",
            "optional": false,
            "typeAnnotation": null,
            "start": 283,
            "end": 286
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 289,
                  "end": 290
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 291,
                  "end": 295
                },
                "optional": false,
                "computed": false,
                "start": 289,
                "end": 295
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 289,
              "end": 297
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 304
            },
            "optional": false,
            "computed": false,
            "start": 289,
            "end": 304
          },
          "definite": false,
          "start": 283,
          "end": 304
        }
      ],
      "declare": false,
      "start": 279,
      "end": 304
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
            "name": "age_v",
            "optional": false,
            "typeAnnotation": null,
            "start": 310,
            "end": 315
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 318,
                "end": 319
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "age",
                "optional": false,
                "typeAnnotation": null,
                "start": 320,
                "end": 323
              },
              "optional": false,
              "computed": false,
              "start": 318,
              "end": 323
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 318,
            "end": 325
          },
          "definite": false,
          "start": 310,
          "end": 325
        }
      ],
      "declare": false,
      "start": 306,
      "end": 326
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
            "name": "name_v",
            "optional": false,
            "typeAnnotation": null,
            "start": 332,
            "end": 338
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 341,
                "end": 342
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 343,
                "end": 347
              },
              "optional": false,
              "computed": false,
              "start": 341,
              "end": 347
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "Robert",
                "raw": "\"Robert\"",
                "start": 348,
                "end": 356
              }
            ],
            "optional": false,
            "start": 341,
            "end": 357
          },
          "definite": false,
          "start": 332,
          "end": 357
        }
      ],
      "declare": false,
      "start": 328,
      "end": 358
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
            "name": "zz_v",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 368
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 371,
                "end": 372
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 373,
                "end": 377
              },
              "optional": false,
              "computed": false,
              "start": 371,
              "end": 377
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 378,
              "end": 379
            },
            "optional": false,
            "computed": false,
            "start": 371,
            "end": 379
          },
          "definite": false,
          "start": 364,
          "end": 379
        }
      ],
      "declare": false,
      "start": 360,
      "end": 380
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
            "name": "yy_v",
            "optional": false,
            "typeAnnotation": null,
            "start": 386,
            "end": 390
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 393,
                "end": 394
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 395,
                "end": 399
              },
              "optional": false,
              "computed": false,
              "start": 393,
              "end": 399
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 400,
              "end": 401
            },
            "optional": false,
            "computed": false,
            "start": 393,
            "end": 401
          },
          "definite": false,
          "start": 386,
          "end": 401
        }
      ],
      "declare": false,
      "start": 382,
      "end": 402
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
            "name": "rr_v",
            "optional": false,
            "typeAnnotation": null,
            "start": 408,
            "end": 412
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 415,
                "end": 416
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 417,
                "end": 421
              },
              "optional": false,
              "computed": false,
              "start": 415,
              "end": 421
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 422,
              "end": 423
            },
            "optional": false,
            "computed": false,
            "start": 415,
            "end": 423
          },
          "definite": false,
          "start": 408,
          "end": 423
        }
      ],
      "declare": false,
      "start": 404,
      "end": 424
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
            "name": "dd_v",
            "optional": false,
            "typeAnnotation": null,
            "start": 430,
            "end": 434
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 437,
                "end": 438
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 439,
                "end": 443
              },
              "optional": false,
              "computed": false,
              "start": 437,
              "end": 443
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 444,
              "end": 445
            },
            "optional": false,
            "computed": false,
            "start": 437,
            "end": 445
          },
          "definite": false,
          "start": 430,
          "end": 445
        }
      ],
      "declare": false,
      "start": 426,
      "end": 446
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 2,
  "end": 446
}
```
