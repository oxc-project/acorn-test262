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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 10,
            "end": 13
          },
          "definite": false,
          "start": 6,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 27
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
              "start": 28,
              "end": 29
            },
            "constraint": {
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
                    "start": 40,
                    "end": 41
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 43,
                      "end": 49
                    },
                    "start": 41,
                    "end": 49
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 40,
                  "end": 50
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 51,
                    "end": 52
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 54,
                      "end": 60
                    },
                    "start": 52,
                    "end": 60
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 51,
                  "end": 60
                }
              ],
              "start": 38,
              "end": 62
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 28,
            "end": 62
          }
        ],
        "start": 27,
        "end": 63
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
                "start": 69,
                "end": 70
              },
              "typeArguments": null,
              "start": 69,
              "end": 70
            },
            "start": 67,
            "end": 70
          },
          "start": 64,
          "end": 70
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 87,
                        "end": 89
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 84,
                      "end": 89
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 91
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 94,
                  "end": 97
                },
                "definite": false,
                "start": 82,
                "end": 97
              }
            ],
            "declare": false,
            "start": 78,
            "end": 98
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 109,
                        "end": 110
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 112,
                        "end": 114
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 109,
                      "end": 114
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 119,
                        "end": 121
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 116,
                      "end": 121
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 107,
                  "end": 123
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 126,
                  "end": 129
                },
                "definite": false,
                "start": 107,
                "end": 129
              }
            ],
            "declare": false,
            "start": 103,
            "end": 130
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 141,
                        "end": 142
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 144,
                        "end": 146
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 141,
                      "end": 146
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 148,
                        "end": 149
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 151,
                        "end": 153
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 148,
                      "end": 153
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 158,
                        "end": 160
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 155,
                      "end": 160
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 139,
                  "end": 162
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 165,
                  "end": 168
                },
                "definite": false,
                "start": 139,
                "end": 168
              }
            ],
            "declare": false,
            "start": 135,
            "end": 169
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 180,
                        "end": 183
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 185,
                        "end": 187
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 180,
                      "end": 187
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 192,
                        "end": 194
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 189,
                      "end": 194
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 196
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 202
                },
                "definite": false,
                "start": 178,
                "end": 202
              }
            ],
            "declare": false,
            "start": 174,
            "end": 203
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 215,
                        "end": 218
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 221,
                        "end": 223
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 214,
                      "end": 223
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 228,
                        "end": 230
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 225,
                      "end": 230
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 212,
                  "end": 232
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 238
                },
                "definite": false,
                "start": 212,
                "end": 238
              }
            ],
            "declare": false,
            "start": 208,
            "end": 239
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 251,
                        "end": 252
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 255,
                        "end": 257
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 250,
                      "end": 257
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 262,
                        "end": 264
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 259,
                      "end": 264
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 248,
                  "end": 266
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 269,
                  "end": 272
                },
                "definite": false,
                "start": 248,
                "end": 272
              }
            ],
            "declare": false,
            "start": 244,
            "end": 273
          }
        ],
        "start": 72,
        "end": 275
      },
      "expression": false,
      "start": 16,
      "end": 275
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
            "name": "sa",
            "optional": false,
            "typeAnnotation": null,
            "start": 283,
            "end": 285
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 294
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 288,
            "end": 296
          },
          "definite": false,
          "start": 283,
          "end": 296
        }
      ],
      "declare": false,
      "start": 277,
      "end": 297
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
            "name": "sb",
            "optional": false,
            "typeAnnotation": null,
            "start": 304,
            "end": 306
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 309,
              "end": 315
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 309,
            "end": 317
          },
          "definite": false,
          "start": 304,
          "end": 317
        }
      ],
      "declare": false,
      "start": 298,
      "end": 318
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 329,
        "end": 331
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
              "start": 332,
              "end": 333
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": true,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sa",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 345,
                    "end": 347
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 350,
                      "end": 356
                    },
                    "start": 348,
                    "end": 356
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 344,
                  "end": 357
                },
                {
                  "type": "TSPropertySignature",
                  "computed": true,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 359,
                    "end": 361
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 364,
                      "end": 370
                    },
                    "start": 362,
                    "end": 370
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 358,
                  "end": 370
                }
              ],
              "start": 342,
              "end": 372
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 332,
            "end": 372
          }
        ],
        "start": 331,
        "end": 373
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
                "start": 379,
                "end": 380
              },
              "typeArguments": null,
              "start": 379,
              "end": 380
            },
            "start": 377,
            "end": 380
          },
          "start": 374,
          "end": 380
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sa",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 395,
                        "end": 397
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 400,
                        "end": 402
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 394,
                      "end": 402
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sb",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 405,
                        "end": 407
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 410,
                        "end": 412
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 404,
                      "end": 412
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 417,
                        "end": 419
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 414,
                      "end": 419
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
                  "end": 421
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 424,
                  "end": 427
                },
                "definite": false,
                "start": 392,
                "end": 427
              }
            ],
            "declare": false,
            "start": 388,
            "end": 428
          }
        ],
        "start": 382,
        "end": 430
      },
      "expression": false,
      "start": 320,
      "end": 430
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 441,
        "end": 443
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
              "start": 444,
              "end": 445
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 444,
            "end": 445
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null,
              "start": 447,
              "end": 449
            },
            "constraint": {
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
                  "start": 464,
                  "end": 465
                },
                "typeArguments": null,
                "start": 464,
                "end": 465
              },
              "start": 458,
              "end": 465
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 447,
            "end": 465
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K2",
              "optional": false,
              "typeAnnotation": null,
              "start": 467,
              "end": 469
            },
            "constraint": {
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
                  "start": 484,
                  "end": 485
                },
                "typeArguments": null,
                "start": 484,
                "end": 485
              },
              "start": 478,
              "end": 485
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 467,
            "end": 485
          }
        ],
        "start": 443,
        "end": 486
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
                "start": 492,
                "end": 493
              },
              "typeArguments": null,
              "start": 492,
              "end": 493
            },
            "start": 490,
            "end": 493
          },
          "start": 487,
          "end": 493
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K1",
                "optional": false,
                "typeAnnotation": null,
                "start": 499,
                "end": 501
              },
              "typeArguments": null,
              "start": 499,
              "end": 501
            },
            "start": 497,
            "end": 501
          },
          "start": 495,
          "end": 501
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K2",
                "optional": false,
                "typeAnnotation": null,
                "start": 507,
                "end": 509
              },
              "typeArguments": null,
              "start": 507,
              "end": 509
            },
            "start": 505,
            "end": 509
          },
          "start": 503,
          "end": 509
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 524,
                        "end": 526
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 529,
                        "end": 531
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 523,
                      "end": 531
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 534,
                        "end": 536
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 539,
                        "end": 541
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 533,
                      "end": 541
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 546,
                        "end": 548
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 543,
                      "end": 548
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 521,
                  "end": 550
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 553,
                  "end": 556
                },
                "definite": false,
                "start": 521,
                "end": 556
              }
            ],
            "declare": false,
            "start": 517,
            "end": 557
          }
        ],
        "start": 511,
        "end": 559
      },
      "expression": false,
      "start": 432,
      "end": 559
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null,
        "start": 566,
        "end": 570
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
              "start": 575,
              "end": 576
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 578,
                "end": 584
              },
              "start": 576,
              "end": 584
            },
            "accessibility": null,
            "static": false,
            "start": 575,
            "end": 585
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 586,
              "end": 587
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 589,
                "end": 595
              },
              "start": 587,
              "end": 595
            },
            "accessibility": null,
            "static": false,
            "start": 586,
            "end": 596
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 597,
              "end": 598
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 600,
                "end": 607
              },
              "start": 598,
              "end": 607
            },
            "accessibility": null,
            "static": false,
            "start": 597,
            "end": 607
          }
        ],
        "start": 573,
        "end": 609
      },
      "declare": false,
      "start": 561,
      "end": 610
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 621,
        "end": 623
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
              "name": "K1",
              "optional": false,
              "typeAnnotation": null,
              "start": 624,
              "end": 626
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Item",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 641,
                  "end": 645
                },
                "typeArguments": null,
                "start": 641,
                "end": 645
              },
              "start": 635,
              "end": 645
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 624,
            "end": 645
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K2",
              "optional": false,
              "typeAnnotation": null,
              "start": 647,
              "end": 649
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Item",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 664,
                  "end": 668
                },
                "typeArguments": null,
                "start": 664,
                "end": 668
              },
              "start": 658,
              "end": 668
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 647,
            "end": 668
          }
        ],
        "start": 623,
        "end": 669
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
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 675,
                "end": 679
              },
              "typeArguments": null,
              "start": 675,
              "end": 679
            },
            "start": 673,
            "end": 679
          },
          "start": 670,
          "end": 679
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K1",
                "optional": false,
                "typeAnnotation": null,
                "start": 685,
                "end": 687
              },
              "typeArguments": null,
              "start": 685,
              "end": 687
            },
            "start": 683,
            "end": 687
          },
          "start": 681,
          "end": 687
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K2",
                "optional": false,
                "typeAnnotation": null,
                "start": 693,
                "end": 695
              },
              "typeArguments": null,
              "start": 693,
              "end": 695
            },
            "start": 691,
            "end": 695
          },
          "start": 689,
          "end": 695
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 710,
                        "end": 712
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 715,
                        "end": 717
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 709,
                      "end": 717
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 720,
                        "end": 722
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 725,
                        "end": 727
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 719,
                      "end": 727
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 732,
                        "end": 734
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 729,
                      "end": 734
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 707,
                  "end": 736
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 739,
                  "end": 742
                },
                "definite": false,
                "start": 707,
                "end": 742
              }
            ],
            "declare": false,
            "start": 703,
            "end": 743
          }
        ],
        "start": 697,
        "end": 745
      },
      "expression": false,
      "start": 612,
      "end": 745
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 745
}
```
