__ESTREE_TEST__:AST:
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 22
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
              },
              "start": 22,
              "end": 30
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 31
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "raw",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 39
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 41,
                "end": 47
              },
              "start": 39,
              "end": 47
            },
            "accessibility": null,
            "static": false,
            "start": 36,
            "end": 48
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 54
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
                "start": 58,
                "end": 62
              },
              "start": 56,
              "end": 62
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 53,
            "end": 63
          }
        ],
        "start": 12,
        "end": 65
      },
      "declare": false,
      "start": 0,
      "end": 65
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 82
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 95
          },
          "typeArguments": null,
          "start": 94,
          "end": 95
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSAbstractPropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 115
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 117,
                "end": 123
              },
              "start": 115,
              "end": 123
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 102,
            "end": 124
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "raw",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 141
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              },
              "start": 141,
              "end": 149
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 129,
            "end": 150
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ro",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 175
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 177,
                "end": 183
              },
              "start": 175,
              "end": 183
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 155,
            "end": 184
          },
          {
            "type": "TSAbstractMethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 214
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 218,
                  "end": 224
                },
                "start": 216,
                "end": 224
              },
              "body": null,
              "expression": false,
              "start": 214,
              "end": 225
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 189,
            "end": 225
          },
          {
            "type": "TSAbstractMethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 255
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 261,
                      "end": 267
                    },
                    "start": 259,
                    "end": 267
                  },
                  "start": 256,
                  "end": 267
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 255,
              "end": 269
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 230,
            "end": 269
          },
          {
            "type": "TSAbstractMethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 283,
              "end": 284
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 288,
                  "end": 292
                },
                "start": 286,
                "end": 292
              },
              "body": null,
              "expression": false,
              "start": 284,
              "end": 293
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 274,
            "end": 293
          }
        ],
        "start": 96,
        "end": 295
      },
      "abstract": true,
      "declare": false,
      "start": 66,
      "end": 295
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
        "start": 302,
        "end": 303
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 312,
        "end": 313
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 328
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
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 340,
                      "end": 345
                    },
                    "start": 333,
                    "end": 346
                  }
                ],
                "start": 331,
                "end": 348
              },
              "expression": false,
              "start": 328,
              "end": 348
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 320,
            "end": 348
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 357,
              "end": 361
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 362,
                  "end": 363
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 365,
                "end": 368
              },
              "expression": false,
              "start": 361,
              "end": 368
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 353,
            "end": 368
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "raw",
              "optional": false,
              "typeAnnotation": null,
              "start": 373,
              "end": 376
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "edge",
              "raw": "\"edge\"",
              "start": 379,
              "end": 385
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 373,
            "end": 386
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ro",
              "optional": false,
              "typeAnnotation": null,
              "start": 400,
              "end": 402
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "readonly please",
              "raw": "\"readonly please\"",
              "start": 405,
              "end": 422
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 391,
            "end": 423
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 428,
              "end": 440
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 442,
                "end": 448
              },
              "start": 440,
              "end": 448
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 428,
            "end": 449
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
              "start": 493,
              "end": 494
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
                "start": 497,
                "end": 500
              },
              "expression": false,
              "start": 494,
              "end": 500
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 493,
            "end": 500
          }
        ],
        "start": 314,
        "end": 502
      },
      "abstract": false,
      "declare": false,
      "start": 296,
      "end": 502
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 502
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 18,
    "end": 22,
    "range": [
      18,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 24,
    "end": 30,
    "range": [
      24,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "raw",
    "start": 36,
    "end": 39,
    "range": [
      36,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 41,
    "end": 47,
    "range": [
      41,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 58,
    "end": 62,
    "range": [
      58,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 66,
    "end": 74,
    "range": [
      66,
      74
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 75,
    "end": 80,
    "range": [
      75,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 83,
    "end": 93,
    "range": [
      83,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 102,
    "end": 110,
    "range": [
      102,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 111,
    "end": 115,
    "range": [
      111,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 117,
    "end": 123,
    "range": [
      117,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 129,
    "end": 137,
    "range": [
      129,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "raw",
    "start": 138,
    "end": 141,
    "range": [
      138,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 143,
    "end": 149,
    "range": [
      143,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 155,
    "end": 163,
    "range": [
      155,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 164,
    "end": 172,
    "range": [
      164,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "ro",
    "start": 173,
    "end": 175,
    "range": [
      173,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 177,
    "end": 183,
    "range": [
      177,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 189,
    "end": 197,
    "range": [
      189,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 198,
    "end": 201,
    "range": [
      198,
      201
    ]
  },
  {
    "type": "Identifier",
    "value": "readonlyProp",
    "start": 202,
    "end": 214,
    "range": [
      202,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 218,
    "end": 224,
    "range": [
      218,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 230,
    "end": 238,
    "range": [
      230,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 239,
    "end": 242,
    "range": [
      239,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "readonlyProp",
    "start": 243,
    "end": 255,
    "range": [
      243,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 256,
    "end": 259,
    "range": [
      256,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 261,
    "end": 267,
    "range": [
      261,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 274,
    "end": 282,
    "range": [
      274,
      282
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 288,
    "end": 292,
    "range": [
      288,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 296,
    "end": 301,
    "range": [
      296,
      301
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 304,
    "end": 311,
    "range": [
      304,
      311
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 320,
    "end": 323,
    "range": [
      320,
      323
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 324,
    "end": 328,
    "range": [
      324,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 333,
    "end": 339,
    "range": [
      333,
      339
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 340,
    "end": 345,
    "range": [
      340,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 353,
    "end": 356,
    "range": [
      353,
      356
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 357,
    "end": 361,
    "range": [
      357,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Identifier",
    "value": "raw",
    "start": 373,
    "end": 376,
    "range": [
      373,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "String",
    "value": "\"edge\"",
    "start": 379,
    "end": 385,
    "range": [
      379,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 391,
    "end": 399,
    "range": [
      391,
      399
    ]
  },
  {
    "type": "Identifier",
    "value": "ro",
    "start": 400,
    "end": 402,
    "range": [
      400,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "String",
    "value": "\"readonly please\"",
    "start": 405,
    "end": 422,
    "range": [
      405,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "readonlyProp",
    "start": 428,
    "end": 440,
    "range": [
      428,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 442,
    "end": 448,
    "range": [
      442,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  }
]
```
