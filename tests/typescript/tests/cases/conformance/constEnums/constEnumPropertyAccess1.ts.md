__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 236,
        "end": 237
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 245
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 248,
              "end": 249
            },
            "computed": false,
            "start": 244,
            "end": 249
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 255,
              "end": 256
            },
            "initializer": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 259,
              "end": 260
            },
            "computed": false,
            "start": 255,
            "end": 260
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 267
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 270,
                "end": 271
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 275
              },
              "start": 270,
              "end": 275
            },
            "computed": false,
            "start": 266,
            "end": 275
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 281,
              "end": 282
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 285,
                "end": 286
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 289,
                "end": 290
              },
              "start": 285,
              "end": 290
            },
            "computed": false,
            "start": 281,
            "end": 290
          }
        ],
        "start": 238,
        "end": 292
      },
      "const": true,
      "declare": false,
      "start": 225,
      "end": 292
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "idx",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 313,
                            "end": 319
                          },
                          "start": 311,
                          "end": 319
                        },
                        "start": 308,
                        "end": 319
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 322,
                        "end": 329
                      },
                      "start": 320,
                      "end": 329
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 307,
                    "end": 329
                  }
                ],
                "start": 301,
                "end": 331
              },
              "start": 299,
              "end": 331
            },
            "start": 298,
            "end": 331
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 344,
                  "end": 345
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 347,
                  "end": 351
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 344,
                "end": 351
              }
            ],
            "start": 334,
            "end": 357
          },
          "definite": false,
          "start": 298,
          "end": 357
        }
      ],
      "declare": false,
      "start": 294,
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 365
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null,
              "start": 368,
              "end": 369
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 370,
              "end": 371
            },
            "optional": false,
            "computed": false,
            "start": 368,
            "end": 371
          },
          "definite": false,
          "start": 364,
          "end": 371
        }
      ],
      "declare": false,
      "start": 360,
      "end": 372
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
            "end": 379
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 383
            },
            "property": {
              "type": "Literal",
              "value": "A",
              "raw": "\"A\"",
              "start": 384,
              "end": 387
            },
            "optional": false,
            "computed": true,
            "start": 382,
            "end": 388
          },
          "definite": false,
          "start": 377,
          "end": 388
        }
      ],
      "declare": false,
      "start": 373,
      "end": 389
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
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 394,
            "end": 395
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 398,
              "end": 399
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "G",
                "optional": false,
                "typeAnnotation": null,
                "start": 400,
                "end": 401
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 402,
                "end": 403
              },
              "optional": false,
              "computed": false,
              "start": 400,
              "end": 403
            },
            "optional": false,
            "computed": true,
            "start": 398,
            "end": 404
          },
          "definite": false,
          "start": 394,
          "end": 404
        }
      ],
      "declare": false,
      "start": 390,
      "end": 405
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 413,
        "end": 414
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "G",
                "optional": false,
                "typeAnnotation": null,
                "start": 422,
                "end": 423
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 425
              },
              "optional": false,
              "computed": false,
              "start": 422,
              "end": 425
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
                "start": 429,
                "end": 432
              },
              "expression": false,
              "start": 426,
              "end": 432
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 421,
            "end": 432
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "G",
                "optional": false,
                "typeAnnotation": null,
                "start": 442,
                "end": 443
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 444,
                "end": 445
              },
              "optional": false,
              "computed": false,
              "start": 442,
              "end": 445
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
                      "value": true,
                      "raw": "true",
                      "start": 466,
                      "end": 470
                    },
                    "start": 459,
                    "end": 471
                  }
                ],
                "start": 449,
                "end": 477
              },
              "expression": false,
              "start": 446,
              "end": 477
            },
            "kind": "get",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 437,
            "end": 477
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "G",
                "optional": false,
                "typeAnnotation": null,
                "start": 487,
                "end": 488
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 489,
                "end": 490
              },
              "optional": false,
              "computed": false,
              "start": 487,
              "end": 490
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "type": "TSNumberKeyword",
                      "start": 495,
                      "end": 501
                    },
                    "start": 493,
                    "end": 501
                  },
                  "start": 492,
                  "end": 501
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 503,
                "end": 506
              },
              "expression": false,
              "start": 491,
              "end": 506
            },
            "kind": "set",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 482,
            "end": 506
          }
        ],
        "start": 415,
        "end": 508
      },
      "abstract": false,
      "declare": false,
      "start": 407,
      "end": 508
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 225,
  "end": 509
}
```
