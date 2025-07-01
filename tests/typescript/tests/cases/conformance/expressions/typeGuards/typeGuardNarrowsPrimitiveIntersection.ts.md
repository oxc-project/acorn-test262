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
        "name": "Tag",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
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
              "name": "__tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 17
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 19,
                "end": 22
              },
              "start": 17,
              "end": 22
            },
            "accessibility": null,
            "static": false,
            "start": 12,
            "end": 22
          }
        ],
        "start": 11,
        "end": 23
      },
      "declare": false,
      "start": 0,
      "end": 24
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNonBlank",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 52
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSStringKeyword",
              "start": 60,
              "end": 66
            },
            "start": 58,
            "end": 66
          },
          "start": 53,
          "end": 66
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 75
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 80,
                  "end": 86
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 89,
                    "end": 92
                  },
                  "typeArguments": null,
                  "start": 89,
                  "end": 92
                }
              ],
              "start": 80,
              "end": 92
            },
            "start": 80,
            "end": 92
          },
          "start": 70,
          "end": 93
        },
        "start": 68,
        "end": 93
      },
      "body": null,
      "expression": false,
      "start": 25,
      "end": 94
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doThis",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 118
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 126,
                  "end": 132
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 135,
                    "end": 138
                  },
                  "typeArguments": null,
                  "start": 135,
                  "end": 138
                }
              ],
              "start": 126,
              "end": 138
            },
            "start": 124,
            "end": 138
          },
          "start": 119,
          "end": 138
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 141,
          "end": 145
        },
        "start": 139,
        "end": 145
      },
      "body": null,
      "expression": false,
      "start": 95,
      "end": 146
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doThat",
        "optional": false,
        "typeAnnotation": null,
        "start": 164,
        "end": 170
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSStringKeyword",
              "start": 178,
              "end": 184
            },
            "start": 176,
            "end": 184
          },
          "start": 171,
          "end": 184
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 188,
          "end": 192
        },
        "start": 186,
        "end": 192
      },
      "body": null,
      "expression": false,
      "start": 147,
      "end": 193
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
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 205,
                "end": 211
              },
              "start": 203,
              "end": 211
            },
            "start": 198,
            "end": 211
          },
          "init": null,
          "definite": false,
          "start": 198,
          "end": 211
        }
      ],
      "declare": false,
      "start": 194,
      "end": 212
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isNonBlank",
          "optional": false,
          "typeAnnotation": null,
          "start": 217,
          "end": 227
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 228,
            "end": 233
          }
        ],
        "optional": false,
        "start": 217,
        "end": 234
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "doThis",
                "optional": false,
                "typeAnnotation": null,
                "start": 242,
                "end": 248
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 249,
                  "end": 254
                }
              ],
              "optional": false,
              "start": 242,
              "end": 255
            },
            "directive": null,
            "start": 242,
            "end": 256
          }
        ],
        "start": 236,
        "end": 258
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "doThat",
                "optional": false,
                "typeAnnotation": null,
                "start": 270,
                "end": 276
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 277,
                  "end": 282
                }
              ],
              "optional": false,
              "start": 270,
              "end": 283
            },
            "directive": null,
            "start": 270,
            "end": 284
          }
        ],
        "start": 264,
        "end": 286
      },
      "start": 213,
      "end": 286
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tag2",
        "optional": false,
        "typeAnnotation": null,
        "start": 300,
        "end": 304
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 305,
        "end": 307
      },
      "const": true,
      "declare": false,
      "start": 289,
      "end": 307
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNonBlank2",
        "optional": false,
        "typeAnnotation": null,
        "start": 325,
        "end": 336
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSStringKeyword",
              "start": 344,
              "end": 350
            },
            "start": 342,
            "end": 350
          },
          "start": 337,
          "end": 350
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 354,
            "end": 359
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 364,
                  "end": 370
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tag2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 373,
                    "end": 377
                  },
                  "typeArguments": null,
                  "start": 373,
                  "end": 377
                }
              ],
              "start": 364,
              "end": 377
            },
            "start": 364,
            "end": 377
          },
          "start": 354,
          "end": 378
        },
        "start": 352,
        "end": 378
      },
      "body": null,
      "expression": false,
      "start": 308,
      "end": 379
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doThis2",
        "optional": false,
        "typeAnnotation": null,
        "start": 397,
        "end": 404
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 412,
                  "end": 418
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tag2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 421,
                    "end": 425
                  },
                  "typeArguments": null,
                  "start": 421,
                  "end": 425
                }
              ],
              "start": 412,
              "end": 425
            },
            "start": 410,
            "end": 425
          },
          "start": 405,
          "end": 425
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 428,
          "end": 432
        },
        "start": 426,
        "end": 432
      },
      "body": null,
      "expression": false,
      "start": 380,
      "end": 433
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doThat2",
        "optional": false,
        "typeAnnotation": null,
        "start": 451,
        "end": 458
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSStringKeyword",
              "start": 466,
              "end": 472
            },
            "start": 464,
            "end": 472
          },
          "start": 459,
          "end": 472
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 476,
          "end": 480
        },
        "start": 474,
        "end": 480
      },
      "body": null,
      "expression": false,
      "start": 434,
      "end": 481
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isNonBlank2",
          "optional": false,
          "typeAnnotation": null,
          "start": 486,
          "end": 497
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 498,
            "end": 503
          }
        ],
        "optional": false,
        "start": 486,
        "end": 504
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "doThis2",
                "optional": false,
                "typeAnnotation": null,
                "start": 512,
                "end": 519
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 520,
                  "end": 525
                }
              ],
              "optional": false,
              "start": 512,
              "end": 526
            },
            "directive": null,
            "start": 512,
            "end": 527
          }
        ],
        "start": 506,
        "end": 529
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "doThat2",
                "optional": false,
                "typeAnnotation": null,
                "start": 541,
                "end": 548
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 549,
                  "end": 554
                }
              ],
              "optional": false,
              "start": 541,
              "end": 555
            },
            "directive": null,
            "start": 541,
            "end": 556
          }
        ],
        "start": 535,
        "end": 558
      },
      "start": 482,
      "end": 558
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 558
}
```
