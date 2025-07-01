__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 12,
              "raw": "12",
              "start": 18,
              "end": 20
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 21
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 27
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 30,
                "end": 33
              },
              "expression": false,
              "start": 27,
              "end": 33
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 26,
            "end": 33
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 43
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 55,
                      "end": 56
                    },
                    "start": 48,
                    "end": 57
                  }
                ],
                "start": 46,
                "end": 59
              },
              "expression": false,
              "start": 43,
              "end": 59
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 38,
            "end": 59
          }
        ],
        "start": 8,
        "end": 61
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 61
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 73
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
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 81
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 83,
                "end": 89
              },
              "start": 81,
              "end": 89
            },
            "accessibility": null,
            "static": false,
            "start": 80,
            "end": 90
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 96
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 100,
                "end": 104
              },
              "start": 98,
              "end": 104
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 95,
            "end": 105
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 120
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 122,
                "end": 128
              },
              "start": 120,
              "end": 128
            },
            "accessibility": null,
            "static": false,
            "start": 110,
            "end": 129
          }
        ],
        "start": 74,
        "end": 131
      },
      "declare": false,
      "start": 62,
      "end": 131
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
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 138
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 146
            },
            "typeArguments": null,
            "arguments": [],
            "start": 141,
            "end": 148
          },
          "definite": false,
          "start": 137,
          "end": 148
        }
      ],
      "declare": false,
      "start": 133,
      "end": 148
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
            "name": "sk",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 155
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 163,
                  "end": 164
                },
                "start": 160,
                "end": 164
              }
            ],
            "start": 158,
            "end": 166
          },
          "definite": false,
          "start": 153,
          "end": 166
        }
      ],
      "declare": false,
      "start": 149,
      "end": 167
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
            "name": "ssk",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 175
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 183,
                  "end": 184
                },
                "start": 180,
                "end": 184
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 189,
                  "end": 190
                },
                "start": 186,
                "end": 190
              }
            ],
            "start": 178,
            "end": 192
          },
          "definite": false,
          "start": 172,
          "end": 192
        }
      ],
      "declare": false,
      "start": 168,
      "end": 193
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "sk",
          "optional": false,
          "typeAnnotation": null,
          "start": 194,
          "end": 196
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null,
          "start": 197,
          "end": 198
        },
        "optional": false,
        "computed": false,
        "start": 194,
        "end": 198
      },
      "directive": null,
      "start": 194,
      "end": 199
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "sk",
            "optional": false,
            "typeAnnotation": null,
            "start": 200,
            "end": 202
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 204
          },
          "optional": false,
          "computed": false,
          "start": 200,
          "end": 204
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 200,
        "end": 206
      },
      "directive": null,
      "start": 200,
      "end": 207
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "sk",
          "optional": false,
          "typeAnnotation": null,
          "start": 217,
          "end": 219
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 220,
          "end": 221
        },
        "optional": false,
        "computed": false,
        "start": 217,
        "end": 221
      },
      "directive": null,
      "start": 217,
      "end": 222
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ssk",
          "optional": false,
          "typeAnnotation": null,
          "start": 232,
          "end": 235
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null,
          "start": 236,
          "end": 237
        },
        "optional": false,
        "computed": false,
        "start": 232,
        "end": 237
      },
      "directive": null,
      "start": 232,
      "end": 238
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ssk",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 242
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 243,
            "end": 244
          },
          "optional": false,
          "computed": false,
          "start": 239,
          "end": 244
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 239,
        "end": 246
      },
      "directive": null,
      "start": 239,
      "end": 247
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ssk",
          "optional": false,
          "typeAnnotation": null,
          "start": 257,
          "end": 260
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 261,
          "end": 262
        },
        "optional": false,
        "computed": false,
        "start": 257,
        "end": 262
      },
      "directive": null,
      "start": 257,
      "end": 263
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 282
                },
                "typeArguments": null,
                "start": 281,
                "end": 282
              },
              "start": 279,
              "end": 282
            },
            "start": 278,
            "end": 282
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 287,
                  "end": 288
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 290,
                  "end": 292
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 287,
                "end": 292
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 294,
                  "end": 295
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 298,
                    "end": 301
                  },
                  "expression": false,
                  "start": 295,
                  "end": 301
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 294,
                "end": 301
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 307,
                  "end": 308
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 320,
                          "end": 321
                        },
                        "start": 313,
                        "end": 322
                      }
                    ],
                    "start": 311,
                    "end": 324
                  },
                  "expression": false,
                  "start": 308,
                  "end": 324
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 303,
                "end": 324
              }
            ],
            "start": 285,
            "end": 326
          },
          "definite": false,
          "start": 278,
          "end": 326
        }
      ],
      "declare": false,
      "start": 274,
      "end": 327
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
            "name": "si",
            "optional": false,
            "typeAnnotation": null,
            "start": 332,
            "end": 334
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 342,
                  "end": 343
                },
                "start": 339,
                "end": 343
              }
            ],
            "start": 337,
            "end": 345
          },
          "definite": false,
          "start": 332,
          "end": 345
        }
      ],
      "declare": false,
      "start": 328,
      "end": 346
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
            "name": "ssi",
            "optional": false,
            "typeAnnotation": null,
            "start": 351,
            "end": 354
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 362,
                  "end": 363
                },
                "start": 359,
                "end": 363
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 368,
                  "end": 369
                },
                "start": 365,
                "end": 369
              }
            ],
            "start": 357,
            "end": 371
          },
          "definite": false,
          "start": 351,
          "end": 371
        }
      ],
      "declare": false,
      "start": 347,
      "end": 372
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "si",
          "optional": false,
          "typeAnnotation": null,
          "start": 373,
          "end": 375
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null,
          "start": 376,
          "end": 377
        },
        "optional": false,
        "computed": false,
        "start": 373,
        "end": 377
      },
      "directive": null,
      "start": 373,
      "end": 378
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "si",
            "optional": false,
            "typeAnnotation": null,
            "start": 379,
            "end": 381
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 382,
            "end": 383
          },
          "optional": false,
          "computed": false,
          "start": 379,
          "end": 383
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 379,
        "end": 385
      },
      "directive": null,
      "start": 379,
      "end": 386
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "si",
          "optional": false,
          "typeAnnotation": null,
          "start": 393,
          "end": 395
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 396,
          "end": 397
        },
        "optional": false,
        "computed": false,
        "start": 393,
        "end": 397
      },
      "directive": null,
      "start": 393,
      "end": 398
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ssi",
          "optional": false,
          "typeAnnotation": null,
          "start": 405,
          "end": 408
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null,
          "start": 409,
          "end": 410
        },
        "optional": false,
        "computed": false,
        "start": 405,
        "end": 410
      },
      "directive": null,
      "start": 405,
      "end": 411
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ssi",
            "optional": false,
            "typeAnnotation": null,
            "start": 412,
            "end": 415
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 416,
            "end": 417
          },
          "optional": false,
          "computed": false,
          "start": 412,
          "end": 417
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 412,
        "end": 419
      },
      "directive": null,
      "start": 412,
      "end": 420
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ssi",
          "optional": false,
          "typeAnnotation": null,
          "start": 427,
          "end": 430
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 431,
          "end": 432
        },
        "optional": false,
        "computed": false,
        "start": 427,
        "end": 432
      },
      "directive": null,
      "start": 427,
      "end": 433
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 445,
            "end": 446
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 451,
                  "end": 452
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 454,
                  "end": 456
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 451,
                "end": 456
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 458,
                  "end": 459
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 462,
                    "end": 465
                  },
                  "expression": false,
                  "start": 459,
                  "end": 465
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 458,
                "end": 465
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 471,
                  "end": 472
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 484,
                          "end": 485
                        },
                        "start": 477,
                        "end": 486
                      }
                    ],
                    "start": 475,
                    "end": 488
                  },
                  "expression": false,
                  "start": 472,
                  "end": 488
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 467,
                "end": 488
              }
            ],
            "start": 449,
            "end": 490
          },
          "definite": false,
          "start": 445,
          "end": 490
        }
      ],
      "declare": false,
      "start": 441,
      "end": 491
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
            "name": "so",
            "optional": false,
            "typeAnnotation": null,
            "start": 496,
            "end": 498
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 506,
                  "end": 507
                },
                "start": 503,
                "end": 507
              }
            ],
            "start": 501,
            "end": 509
          },
          "definite": false,
          "start": 496,
          "end": 509
        }
      ],
      "declare": false,
      "start": 492,
      "end": 510
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
            "name": "sso",
            "optional": false,
            "typeAnnotation": null,
            "start": 515,
            "end": 518
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 526,
                  "end": 527
                },
                "start": 523,
                "end": 527
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 532,
                  "end": 533
                },
                "start": 529,
                "end": 533
              }
            ],
            "start": 521,
            "end": 535
          },
          "definite": false,
          "start": 515,
          "end": 535
        }
      ],
      "declare": false,
      "start": 511,
      "end": 536
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "so",
          "optional": false,
          "typeAnnotation": null,
          "start": 537,
          "end": 539
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null,
          "start": 540,
          "end": 541
        },
        "optional": false,
        "computed": false,
        "start": 537,
        "end": 541
      },
      "directive": null,
      "start": 537,
      "end": 542
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "so",
            "optional": false,
            "typeAnnotation": null,
            "start": 543,
            "end": 545
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 546,
            "end": 547
          },
          "optional": false,
          "computed": false,
          "start": 543,
          "end": 547
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 543,
        "end": 549
      },
      "directive": null,
      "start": 543,
      "end": 550
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "so",
          "optional": false,
          "typeAnnotation": null,
          "start": 557,
          "end": 559
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 560,
          "end": 561
        },
        "optional": false,
        "computed": false,
        "start": 557,
        "end": 561
      },
      "directive": null,
      "start": 557,
      "end": 562
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "sso",
          "optional": false,
          "typeAnnotation": null,
          "start": 569,
          "end": 572
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null,
          "start": 573,
          "end": 574
        },
        "optional": false,
        "computed": false,
        "start": 569,
        "end": 574
      },
      "directive": null,
      "start": 569,
      "end": 575
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "sso",
            "optional": false,
            "typeAnnotation": null,
            "start": 576,
            "end": 579
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 580,
            "end": 581
          },
          "optional": false,
          "computed": false,
          "start": 576,
          "end": 581
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 576,
        "end": 583
      },
      "directive": null,
      "start": 576,
      "end": 584
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "sso",
          "optional": false,
          "typeAnnotation": null,
          "start": 591,
          "end": 594
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 595,
          "end": 596
        },
        "optional": false,
        "computed": false,
        "start": 591,
        "end": 596
      },
      "directive": null,
      "start": 591,
      "end": 597
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 603
}
```
