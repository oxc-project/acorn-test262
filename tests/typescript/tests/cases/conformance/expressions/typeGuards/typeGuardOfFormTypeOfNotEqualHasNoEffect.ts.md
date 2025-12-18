__ESTREE_TEST__:AST:
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
        "name": "C",
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
              "start": 18,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              },
              "start": 19,
              "end": 27
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 10,
            "end": 27
          }
        ],
        "start": 8,
        "end": 29
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "EmptyStatement",
      "start": 29,
      "end": 30
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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 46,
                    "end": 52
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 55,
                    "end": 61
                  }
                ],
                "start": 46,
                "end": 61
              },
              "start": 44,
              "end": 61
            },
            "start": 36,
            "end": 61
          },
          "init": null,
          "definite": false,
          "start": 36,
          "end": 61
        }
      ],
      "declare": false,
      "start": 32,
      "end": 62
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
            "name": "strOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 78,
                    "end": 84
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 87,
                    "end": 94
                  }
                ],
                "start": 78,
                "end": 94
              },
              "start": 76,
              "end": 94
            },
            "start": 67,
            "end": 94
          },
          "init": null,
          "definite": false,
          "start": 67,
          "end": 94
        }
      ],
      "declare": false,
      "start": 63,
      "end": 95
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
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 111,
                    "end": 117
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 120,
                    "end": 127
                  }
                ],
                "start": 111,
                "end": 127
              },
              "start": 109,
              "end": 127
            },
            "start": 100,
            "end": 127
          },
          "init": null,
          "definite": false,
          "start": 100,
          "end": 127
        }
      ],
      "declare": false,
      "start": 96,
      "end": 127
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
            "name": "strOrC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 140,
                    "end": 146
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 149,
                      "end": 150
                    },
                    "typeArguments": null,
                    "start": 149,
                    "end": 150
                  }
                ],
                "start": 140,
                "end": 150
              },
              "start": 138,
              "end": 150
            },
            "start": 132,
            "end": 150
          },
          "init": null,
          "definite": false,
          "start": 132,
          "end": 150
        }
      ],
      "declare": false,
      "start": 128,
      "end": 151
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": null,
            "start": 209,
            "end": 217
          },
          "prefix": true,
          "start": 202,
          "end": 217
        },
        "operator": "!=",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 221,
          "end": 229
        },
        "start": 202,
        "end": 229
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 241,
                  "end": 243
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 246,
                  "end": 254
                },
                "definite": false,
                "start": 241,
                "end": 254
              }
            ],
            "declare": false,
            "start": 237,
            "end": 255
          }
        ],
        "start": 231,
        "end": 276
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 292,
                  "end": 294
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 305
                },
                "definite": false,
                "start": 292,
                "end": 305
              }
            ],
            "declare": false,
            "start": 288,
            "end": 306
          }
        ],
        "start": 282,
        "end": 327
      },
      "start": 198,
      "end": 327
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 340,
            "end": 349
          },
          "prefix": true,
          "start": 333,
          "end": 349
        },
        "operator": "!=",
        "right": {
          "type": "Literal",
          "value": "boolean",
          "raw": "\"boolean\"",
          "start": 353,
          "end": 362
        },
        "start": 333,
        "end": 362
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 374,
                  "end": 376
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 379,
                  "end": 388
                },
                "definite": false,
                "start": 374,
                "end": 388
              }
            ],
            "declare": false,
            "start": 370,
            "end": 389
          }
        ],
        "start": 364,
        "end": 411
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 427,
                  "end": 429
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 432,
                  "end": 441
                },
                "definite": false,
                "start": 427,
                "end": 441
              }
            ],
            "declare": false,
            "start": 423,
            "end": 442
          }
        ],
        "start": 417,
        "end": 464
      },
      "start": 329,
      "end": 464
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 477,
            "end": 486
          },
          "prefix": true,
          "start": 470,
          "end": 486
        },
        "operator": "!=",
        "right": {
          "type": "Literal",
          "value": "number",
          "raw": "\"number\"",
          "start": 490,
          "end": 498
        },
        "start": 470,
        "end": 498
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 510,
                  "end": 512
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 515,
                  "end": 524
                },
                "definite": false,
                "start": 510,
                "end": 524
              }
            ],
            "declare": false,
            "start": 506,
            "end": 525
          }
        ],
        "start": 500,
        "end": 547
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 563,
                  "end": 565
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 568,
                  "end": 577
                },
                "definite": false,
                "start": 563,
                "end": 577
              }
            ],
            "declare": false,
            "start": 559,
            "end": 578
          }
        ],
        "start": 553,
        "end": 600
      },
      "start": 466,
      "end": 600
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrC",
            "optional": false,
            "typeAnnotation": null,
            "start": 613,
            "end": 619
          },
          "prefix": true,
          "start": 606,
          "end": 619
        },
        "operator": "!=",
        "right": {
          "type": "Literal",
          "value": "Object",
          "raw": "\"Object\"",
          "start": 623,
          "end": 631
        },
        "start": 606,
        "end": 631
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 643,
                  "end": 645
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 648,
                  "end": 654
                },
                "definite": false,
                "start": 643,
                "end": 654
              }
            ],
            "declare": false,
            "start": 639,
            "end": 655
          }
        ],
        "start": 633,
        "end": 671
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 687,
                  "end": 689
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 692,
                  "end": 698
                },
                "definite": false,
                "start": 687,
                "end": 698
              }
            ],
            "declare": false,
            "start": 683,
            "end": 699
          }
        ],
        "start": 677,
        "end": 715
      },
      "start": 602,
      "end": 715
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 715
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 10,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 32,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 36,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 63,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 67,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 78,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 87,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 96,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 100,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 111,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 120,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 128,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 132,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 140,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 198,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 202,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 209,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 218,
    "end": 220
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 221,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 237,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 241,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 246,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 277,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 288,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 292,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 297,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 326,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 329,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 332,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 333,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 340,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 350,
    "end": 352
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 353,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 370,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 374,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 379,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 410,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 412,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 423,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 427,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 432,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 463,
    "end": 464
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 466,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 470,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 477,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 487,
    "end": 489
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 490,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 500,
    "end": 501
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 506,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 510,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 515,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 546,
    "end": 547
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 548,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 553,
    "end": 554
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 559,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 563,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 568,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 599,
    "end": 600
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 602,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 605,
    "end": 606
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 606,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 613,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 620,
    "end": 622
  },
  {
    "type": "String",
    "value": "\"Object\"",
    "start": 623,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 633,
    "end": 634
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 639,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 643,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 648,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 670,
    "end": 671
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 672,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 677,
    "end": 678
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 683,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 687,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 692,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 714,
    "end": 715
  }
]
```
