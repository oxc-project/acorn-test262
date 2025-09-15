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
        "start": 20,
        "end": 22
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
                "start": 45,
                "end": 55
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
                      "start": 56,
                      "end": 57
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 56,
                    "end": 57
                  }
                ],
                "start": 55,
                "end": 58
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
                          "start": 70,
                          "end": 71
                        },
                        "typeArguments": null,
                        "start": 70,
                        "end": 71
                      },
                      "start": 68,
                      "end": 71
                    },
                    "start": 66,
                    "end": 72
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
                              "start": 86,
                              "end": 87
                            },
                            "typeArguments": null,
                            "start": 86,
                            "end": 87
                          },
                          "start": 84,
                          "end": 87
                        },
                        "start": 79,
                        "end": 87
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 90,
                        "end": 93
                      },
                      "start": 88,
                      "end": 93
                    },
                    "start": 78,
                    "end": 94
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
                      "start": 100,
                      "end": 101
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 103,
                        "end": 109
                      },
                      "start": 101,
                      "end": 109
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 100,
                    "end": 110
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
                      "start": 116,
                      "end": 117
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 119,
                        "end": 126
                      },
                      "start": 117,
                      "end": 126
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 116,
                    "end": 127
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
                      "start": 133,
                      "end": 134
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
                          "start": 136,
                          "end": 137
                        },
                        "typeArguments": null,
                        "start": 136,
                        "end": 137
                      },
                      "start": 134,
                      "end": 137
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 133,
                    "end": 138
                  }
                ],
                "start": 59,
                "end": 143
              },
              "declare": false,
              "start": 35,
              "end": 143
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 28,
            "end": 143
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
                "start": 163,
                "end": 173
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
                      "start": 174,
                      "end": 175
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 174,
                    "end": 175
                  }
                ],
                "start": 173,
                "end": 176
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
                        "start": 184,
                        "end": 185
                      },
                      "typeArguments": null,
                      "start": 184,
                      "end": 185
                    },
                    "start": 182,
                    "end": 185
                  },
                  "start": 177,
                  "end": 185
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
                    "start": 188,
                    "end": 198
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
                          "start": 199,
                          "end": 200
                        },
                        "typeArguments": null,
                        "start": 199,
                        "end": 200
                      }
                    ],
                    "start": 198,
                    "end": 201
                  },
                  "start": 188,
                  "end": 201
                },
                "start": 186,
                "end": 201
              },
              "body": null,
              "expression": false,
              "start": 154,
              "end": 202
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 147,
            "end": 202
          }
        ],
        "start": 23,
        "end": 205
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 2,
      "end": 205
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
            "start": 211,
            "end": 212
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
                  "start": 222,
                  "end": 226
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
                      "start": 228,
                      "end": 230
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "observable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 231,
                      "end": 241
                    },
                    "optional": false,
                    "computed": false,
                    "start": 228,
                    "end": 241
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Bob",
                      "raw": "\"Bob\"",
                      "start": 242,
                      "end": 247
                    }
                  ],
                  "optional": false,
                  "start": 228,
                  "end": 248
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 222,
                "end": 248
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
                  "start": 255,
                  "end": 258
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
                      "start": 260,
                      "end": 262
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "observable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 263,
                      "end": 273
                    },
                    "optional": false,
                    "computed": false,
                    "start": 260,
                    "end": 273
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 37,
                      "raw": "37",
                      "start": 274,
                      "end": 276
                    }
                  ],
                  "optional": false,
                  "start": 260,
                  "end": 277
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 255,
                "end": 277
              }
            ],
            "start": 215,
            "end": 280
          },
          "definite": false,
          "start": 211,
          "end": 280
        }
      ],
      "declare": false,
      "start": 207,
      "end": 280
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
            "start": 286,
            "end": 289
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
                  "start": 292,
                  "end": 293
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 294,
                  "end": 298
                },
                "optional": false,
                "computed": false,
                "start": 292,
                "end": 298
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 292,
              "end": 300
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 307
            },
            "optional": false,
            "computed": false,
            "start": 292,
            "end": 307
          },
          "definite": false,
          "start": 286,
          "end": 307
        }
      ],
      "declare": false,
      "start": 282,
      "end": 307
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
            "start": 313,
            "end": 318
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
                "start": 321,
                "end": 322
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "age",
                "optional": false,
                "typeAnnotation": null,
                "start": 323,
                "end": 326
              },
              "optional": false,
              "computed": false,
              "start": 321,
              "end": 326
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 321,
            "end": 328
          },
          "definite": false,
          "start": 313,
          "end": 328
        }
      ],
      "declare": false,
      "start": 309,
      "end": 329
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
            "start": 335,
            "end": 341
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
                "start": 344,
                "end": 345
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 346,
                "end": 350
              },
              "optional": false,
              "computed": false,
              "start": 344,
              "end": 350
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "Robert",
                "raw": "\"Robert\"",
                "start": 351,
                "end": 359
              }
            ],
            "optional": false,
            "start": 344,
            "end": 360
          },
          "definite": false,
          "start": 335,
          "end": 360
        }
      ],
      "declare": false,
      "start": 331,
      "end": 361
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
            "start": 367,
            "end": 371
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
                "start": 374,
                "end": 375
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 376,
                "end": 380
              },
              "optional": false,
              "computed": false,
              "start": 374,
              "end": 380
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 381,
              "end": 382
            },
            "optional": false,
            "computed": false,
            "start": 374,
            "end": 382
          },
          "definite": false,
          "start": 367,
          "end": 382
        }
      ],
      "declare": false,
      "start": 363,
      "end": 383
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
            "start": 389,
            "end": 393
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
                "start": 396,
                "end": 397
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 398,
                "end": 402
              },
              "optional": false,
              "computed": false,
              "start": 396,
              "end": 402
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 403,
              "end": 404
            },
            "optional": false,
            "computed": false,
            "start": 396,
            "end": 404
          },
          "definite": false,
          "start": 389,
          "end": 404
        }
      ],
      "declare": false,
      "start": 385,
      "end": 405
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
            "start": 411,
            "end": 415
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
                "start": 418,
                "end": 419
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 420,
                "end": 424
              },
              "optional": false,
              "computed": false,
              "start": 418,
              "end": 424
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 425,
              "end": 426
            },
            "optional": false,
            "computed": false,
            "start": 418,
            "end": 426
          },
          "definite": false,
          "start": 411,
          "end": 426
        }
      ],
      "declare": false,
      "start": 407,
      "end": 427
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
            "start": 433,
            "end": 437
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
                "start": 440,
                "end": 441
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 442,
                "end": 446
              },
              "optional": false,
              "computed": false,
              "start": 440,
              "end": 446
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 447,
              "end": 448
            },
            "optional": false,
            "computed": false,
            "start": 440,
            "end": 448
          },
          "definite": false,
          "start": 433,
          "end": 448
        }
      ],
      "declare": false,
      "start": 429,
      "end": 449
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 2,
  "end": 449
}
```
