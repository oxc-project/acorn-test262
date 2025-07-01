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
        "name": "LiteralsAndWeakTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 25
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "A",
              "raw": "'A'",
              "start": 33,
              "end": 36
            },
            "start": 33,
            "end": 36
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "B",
              "raw": "'B'",
              "start": 41,
              "end": 44
            },
            "start": 41,
            "end": 44
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optional",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 51,
                  "end": 59
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 62,
                      "end": 66
                    },
                    "start": 62,
                    "end": 66
                  },
                  "start": 60,
                  "end": 66
                },
                "accessibility": null,
                "static": false,
                "start": 51,
                "end": 66
              }
            ],
            "start": 49,
            "end": 68
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toLowerCase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 75,
                  "end": 86
                },
                "computed": false,
                "optional": true,
                "kind": "method",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 91,
                    "end": 97
                  },
                  "start": 89,
                  "end": 97
                },
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 75,
                "end": 97
              }
            ],
            "start": 73,
            "end": 99
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toUpperCase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 117
                },
                "computed": false,
                "optional": true,
                "kind": "method",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 122,
                    "end": 128
                  },
                  "start": 120,
                  "end": 128
                },
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 106,
                "end": 129
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "otherOptionalProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 130,
                  "end": 147
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 150,
                    "end": 156
                  },
                  "start": 148,
                  "end": 156
                },
                "accessibility": null,
                "static": false,
                "start": 130,
                "end": 156
              }
            ],
            "start": 104,
            "end": 158
          }
        ],
        "start": 31,
        "end": 158
      },
      "declare": false,
      "start": 0,
      "end": 159
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
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 168
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LiteralsAndWeakTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 177,
                      "end": 197
                    },
                    "typeArguments": null,
                    "start": 177,
                    "end": 197
                  },
                  "start": 175,
                  "end": 197
                },
                "start": 172,
                "end": 197
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 212,
                      "end": 215
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "'A'",
                      "start": 220,
                      "end": 223
                    },
                    "start": 212,
                    "end": 223
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 233,
                          "end": 236
                        },
                        "directive": null,
                        "start": 233,
                        "end": 237
                      }
                    ],
                    "start": 225,
                    "end": 243
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 257,
                          "end": 260
                        },
                        "directive": null,
                        "start": 257,
                        "end": 261
                      }
                    ],
                    "start": 249,
                    "end": 267
                  },
                  "start": 208,
                  "end": 267
                }
              ],
              "start": 202,
              "end": 269
            },
            "id": null,
            "generator": false,
            "start": 171,
            "end": 269
          },
          "definite": false,
          "start": 167,
          "end": 269
        }
      ],
      "declare": false,
      "start": 161,
      "end": 269
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PrimitivesAndWeakTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 276,
        "end": 298
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 305,
            "end": 311
          },
          {
            "type": "TSNumberKeyword",
            "start": 316,
            "end": 322
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optional",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 329,
                  "end": 337
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 340,
                      "end": 344
                    },
                    "start": 340,
                    "end": 344
                  },
                  "start": 338,
                  "end": 344
                },
                "accessibility": null,
                "static": false,
                "start": 329,
                "end": 344
              }
            ],
            "start": 327,
            "end": 346
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toLowerCase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 353,
                  "end": 364
                },
                "computed": false,
                "optional": true,
                "kind": "method",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 369,
                    "end": 375
                  },
                  "start": 367,
                  "end": 375
                },
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 353,
                "end": 375
              }
            ],
            "start": 351,
            "end": 377
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toUpperCase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 384,
                  "end": 395
                },
                "computed": false,
                "optional": true,
                "kind": "method",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 400,
                    "end": 406
                  },
                  "start": 398,
                  "end": 406
                },
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 384,
                "end": 407
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "otherOptionalProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 408,
                  "end": 425
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 428,
                    "end": 434
                  },
                  "start": 426,
                  "end": 434
                },
                "accessibility": null,
                "static": false,
                "start": 408,
                "end": 434
              }
            ],
            "start": 382,
            "end": 436
          }
        ],
        "start": 303,
        "end": 436
      },
      "declare": false,
      "start": 271,
      "end": 437
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 445,
            "end": 446
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PrimitivesAndWeakTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 455,
                      "end": 477
                    },
                    "typeArguments": null,
                    "start": 455,
                    "end": 477
                  },
                  "start": 453,
                  "end": 477
                },
                "start": 450,
                "end": 477
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 492,
                      "end": 495
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "'A'",
                      "start": 500,
                      "end": 503
                    },
                    "start": 492,
                    "end": 503
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 513,
                          "end": 516
                        },
                        "directive": null,
                        "start": 513,
                        "end": 517
                      }
                    ],
                    "start": 505,
                    "end": 523
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 537,
                          "end": 540
                        },
                        "directive": null,
                        "start": 537,
                        "end": 541
                      }
                    ],
                    "start": 529,
                    "end": 547
                  },
                  "start": 488,
                  "end": 547
                }
              ],
              "start": 482,
              "end": 549
            },
            "id": null,
            "generator": false,
            "start": 449,
            "end": 549
          },
          "definite": false,
          "start": 445,
          "end": 549
        }
      ],
      "declare": false,
      "start": 439,
      "end": 549
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 549
}
```
