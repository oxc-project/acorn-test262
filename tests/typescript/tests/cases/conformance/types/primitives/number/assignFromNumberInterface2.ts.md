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
        "name": "Number",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doStuff",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 30
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              },
              "start": 32,
              "end": 40
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 23,
            "end": 41
          }
        ],
        "start": 17,
        "end": 43
      },
      "declare": false,
      "start": 0,
      "end": 43
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 64
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 79
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "radix",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 88,
                    "end": 94
                  },
                  "start": 86,
                  "end": 94
                },
                "start": 80,
                "end": 94
              }
            ],
            "returnType": {
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
            "readonly": false,
            "static": false,
            "start": 71,
            "end": 104
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toFixed",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 116
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fractionDigits",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 134,
                    "end": 140
                  },
                  "start": 132,
                  "end": 140
                },
                "start": 117,
                "end": 140
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              },
              "start": 141,
              "end": 149
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 109,
            "end": 150
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toExponential",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 168
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fractionDigits",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 186,
                    "end": 192
                  },
                  "start": 184,
                  "end": 192
                },
                "start": 169,
                "end": 192
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 195,
                "end": 201
              },
              "start": 193,
              "end": 201
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 155,
            "end": 202
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toPrecision",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 218
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "precision",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 231,
                    "end": 237
                  },
                  "start": 229,
                  "end": 237
                },
                "start": 219,
                "end": 237
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 240,
                "end": 246
              },
              "start": 238,
              "end": 246
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 207,
            "end": 247
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "valueOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 259
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 263,
                "end": 269
              },
              "start": 261,
              "end": 269
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 252,
            "end": 270
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doStuff",
              "optional": false,
              "typeAnnotation": null,
              "start": 275,
              "end": 282
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 286,
                "end": 292
              },
              "start": 284,
              "end": 292
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 275,
            "end": 293
          }
        ],
        "start": 65,
        "end": 295
      },
      "declare": false,
      "start": 45,
      "end": 295
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 302
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 305,
            "end": 306
          },
          "definite": false,
          "start": 301,
          "end": 306
        }
      ],
      "declare": false,
      "start": 297,
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Number",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 315,
                  "end": 321
                },
                "typeArguments": null,
                "start": 315,
                "end": 321
              },
              "start": 313,
              "end": 321
            },
            "start": 312,
            "end": 321
          },
          "init": null,
          "definite": false,
          "start": 312,
          "end": 321
        }
      ],
      "declare": false,
      "start": 308,
      "end": 322
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NotNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 330,
                  "end": 339
                },
                "typeArguments": null,
                "start": 330,
                "end": 339
              },
              "start": 328,
              "end": 339
            },
            "start": 327,
            "end": 339
          },
          "init": null,
          "definite": false,
          "start": 327,
          "end": 339
        }
      ],
      "declare": false,
      "start": 323,
      "end": 340
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 342,
          "end": 343
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 346,
          "end": 347
        },
        "start": 342,
        "end": 347
      },
      "directive": null,
      "start": 342,
      "end": 348
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 350,
          "end": 351
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 354,
          "end": 355
        },
        "start": 350,
        "end": 355
      },
      "directive": null,
      "start": 350,
      "end": 356
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 359,
          "end": 360
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 363,
          "end": 364
        },
        "start": 359,
        "end": 364
      },
      "directive": null,
      "start": 359,
      "end": 365
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 367,
          "end": 368
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 371,
          "end": 372
        },
        "start": 367,
        "end": 372
      },
      "directive": null,
      "start": 367,
      "end": 373
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 376,
          "end": 377
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 380,
          "end": 381
        },
        "start": 376,
        "end": 381
      },
      "directive": null,
      "start": 376,
      "end": 382
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 401,
          "end": 402
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 405,
          "end": 406
        },
        "start": 401,
        "end": 406
      },
      "directive": null,
      "start": 401,
      "end": 407
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 426
}
```
