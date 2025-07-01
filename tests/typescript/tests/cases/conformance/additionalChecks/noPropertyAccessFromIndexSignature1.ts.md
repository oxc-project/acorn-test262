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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 21
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 23,
                "end": 29
              },
              "start": 21,
              "end": 29
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 29
          }
        ],
        "start": 12,
        "end": 31
      },
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 44
      },
      "typeParameters": null,
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
                "name": "k",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 55,
                    "end": 61
                  },
                  "start": 53,
                  "end": 61
                },
                "start": 52,
                "end": 61
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 64,
                "end": 70
              },
              "start": 62,
              "end": 70
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 51,
            "end": 70
          }
        ],
        "start": 45,
        "end": 72
      },
      "declare": false,
      "start": 33,
      "end": 72
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 85
      },
      "typeParameters": null,
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 95
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 97,
                "end": 103
              },
              "start": 95,
              "end": 103
            },
            "accessibility": null,
            "static": false,
            "start": 92,
            "end": 103
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 112,
                    "end": 118
                  },
                  "start": 110,
                  "end": 118
                },
                "start": 109,
                "end": 118
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 121,
                "end": 127
              },
              "start": 119,
              "end": 127
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 108,
            "end": 127
          }
        ],
        "start": 86,
        "end": 129
      },
      "declare": false,
      "start": 74,
      "end": 129
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 149
                },
                "typeArguments": null,
                "start": 148,
                "end": 149
              },
              "start": 146,
              "end": 149
            },
            "start": 145,
            "end": 149
          },
          "init": null,
          "definite": false,
          "start": 145,
          "end": 149
        }
      ],
      "declare": true,
      "start": 131,
      "end": 150
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 168,
                  "end": 169
                },
                "typeArguments": null,
                "start": 168,
                "end": 169
              },
              "start": 166,
              "end": 169
            },
            "start": 165,
            "end": 169
          },
          "init": null,
          "definite": false,
          "start": 165,
          "end": 169
        }
      ],
      "declare": true,
      "start": 151,
      "end": 170
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 188,
                  "end": 189
                },
                "typeArguments": null,
                "start": 188,
                "end": 189
              },
              "start": 186,
              "end": 189
            },
            "start": 185,
            "end": 189
          },
          "init": null,
          "definite": false,
          "start": 185,
          "end": 189
        }
      ],
      "declare": true,
      "start": 171,
      "end": 190
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 208,
                      "end": 209
                    },
                    "typeArguments": null,
                    "start": 208,
                    "end": 209
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 212,
                    "end": 221
                  }
                ],
                "start": 208,
                "end": 221
              },
              "start": 206,
              "end": 221
            },
            "start": 205,
            "end": 221
          },
          "init": null,
          "definite": false,
          "start": 205,
          "end": 221
        }
      ],
      "declare": true,
      "start": 191,
      "end": 222
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 243,
          "end": 244
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 245,
          "end": 248
        },
        "optional": false,
        "computed": false,
        "start": 243,
        "end": 248
      },
      "directive": null,
      "start": 243,
      "end": 249
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 250,
          "end": 251
        },
        "property": {
          "type": "Literal",
          "value": "foo",
          "raw": "\"foo\"",
          "start": 252,
          "end": 257
        },
        "optional": false,
        "computed": true,
        "start": 250,
        "end": 258
      },
      "directive": null,
      "start": 250,
      "end": 258
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 286,
          "end": 287
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 288,
          "end": 291
        },
        "optional": false,
        "computed": false,
        "start": 286,
        "end": 291
      },
      "directive": null,
      "start": 286,
      "end": 292
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 293,
          "end": 294
        },
        "property": {
          "type": "Literal",
          "value": "foo",
          "raw": "\"foo\"",
          "start": 295,
          "end": 300
        },
        "optional": false,
        "computed": true,
        "start": 293,
        "end": 301
      },
      "directive": null,
      "start": 293,
      "end": 302
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 323,
          "end": 324
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 325,
          "end": 328
        },
        "optional": false,
        "computed": false,
        "start": 323,
        "end": 328
      },
      "directive": null,
      "start": 323,
      "end": 329
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 330,
          "end": 331
        },
        "property": {
          "type": "Literal",
          "value": "foo",
          "raw": "\"foo\"",
          "start": 332,
          "end": 337
        },
        "optional": false,
        "computed": true,
        "start": 330,
        "end": 338
      },
      "directive": null,
      "start": 330,
      "end": 338
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 366,
          "end": 367
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 368,
          "end": 371
        },
        "optional": false,
        "computed": false,
        "start": 366,
        "end": 371
      },
      "directive": null,
      "start": 366,
      "end": 372
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 373,
          "end": 374
        },
        "property": {
          "type": "Literal",
          "value": "bar",
          "raw": "\"bar\"",
          "start": 375,
          "end": 380
        },
        "optional": false,
        "computed": true,
        "start": 373,
        "end": 381
      },
      "directive": null,
      "start": 373,
      "end": 382
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 412,
            "end": 413
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 415,
            "end": 418
          },
          "optional": true,
          "computed": false,
          "start": 412,
          "end": 418
        },
        "start": 412,
        "end": 418
      },
      "directive": null,
      "start": 412,
      "end": 419
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 420,
            "end": 421
          },
          "property": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 424,
            "end": 429
          },
          "optional": true,
          "computed": true,
          "start": 420,
          "end": 430
        },
        "start": 420,
        "end": 430
      },
      "directive": null,
      "start": 420,
      "end": 430
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 467,
            "end": 468
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 470,
            "end": 473
          },
          "optional": true,
          "computed": false,
          "start": 467,
          "end": 473
        },
        "start": 467,
        "end": 473
      },
      "directive": null,
      "start": 467,
      "end": 474
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 475,
            "end": 476
          },
          "property": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 479,
            "end": 484
          },
          "optional": true,
          "computed": true,
          "start": 475,
          "end": 485
        },
        "start": 475,
        "end": 485
      },
      "directive": null,
      "start": 475,
      "end": 486
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 486
}
```
