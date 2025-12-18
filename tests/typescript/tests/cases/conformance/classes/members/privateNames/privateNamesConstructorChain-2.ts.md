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
        "name": "Parent",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 12
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
              "start": 13,
              "end": 14
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 14
          }
        ],
        "start": 12,
        "end": 15
      },
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
              "type": "PrivateIdentifier",
              "name": "foo",
              "start": 22,
              "end": 26
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 29,
              "end": 30
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 22,
            "end": 31
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "bar",
              "start": 43,
              "end": 47
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 50,
              "end": 51
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 36,
            "end": 52
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "accessChildProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 73
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Child",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 90,
                          "end": 95
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 96,
                              "end": 102
                            }
                          ],
                          "start": 95,
                          "end": 103
                        },
                        "arguments": [],
                        "start": 86,
                        "end": 105
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "foo",
                        "start": 106,
                        "end": 110
                      },
                      "optional": false,
                      "computed": false,
                      "start": 86,
                      "end": 110
                    },
                    "directive": null,
                    "start": 86,
                    "end": 111
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Child",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 195,
                        "end": 200
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "bar",
                        "start": 201,
                        "end": 205
                      },
                      "optional": false,
                      "computed": false,
                      "start": 195,
                      "end": 205
                    },
                    "directive": null,
                    "start": 195,
                    "end": 206
                  }
                ],
                "start": 76,
                "end": 238
              },
              "expression": false,
              "start": 73,
              "end": 238
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 57,
            "end": 238
          }
        ],
        "start": 16,
        "end": 240
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 240
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Child",
        "optional": false,
        "typeAnnotation": null,
        "start": 248,
        "end": 253
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
              "start": 254,
              "end": 255
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 254,
            "end": 255
          }
        ],
        "start": 253,
        "end": 256
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Parent",
        "optional": false,
        "typeAnnotation": null,
        "start": 265,
        "end": 271
      },
      "superTypeArguments": {
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
              "start": 272,
              "end": 273
            },
            "typeArguments": null,
            "start": 272,
            "end": 273
          }
        ],
        "start": 271,
        "end": 274
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "foo",
              "start": 281,
              "end": 285
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 288,
              "end": 293
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 281,
            "end": 294
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "bar",
              "start": 384,
              "end": 388
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 391,
              "end": 396
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 384,
            "end": 397
          }
        ],
        "start": 275,
        "end": 411
      },
      "abstract": false,
      "declare": false,
      "start": 242,
      "end": 411
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Parent",
              "optional": false,
              "typeAnnotation": null,
              "start": 417,
              "end": 423
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 424,
                  "end": 430
                }
              ],
              "start": 423,
              "end": 431
            },
            "arguments": [],
            "start": 413,
            "end": 433
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "accessChildProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 434,
            "end": 450
          },
          "optional": false,
          "computed": false,
          "start": 413,
          "end": 450
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 413,
        "end": 452
      },
      "directive": null,
      "start": 413,
      "end": 453
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 453
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "Parent",
    "start": 6,
    "end": 12,
    "range": [
      6,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 22,
    "end": 26,
    "range": [
      22,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 29,
    "end": 30,
    "range": [
      29,
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
    "type": "Keyword",
    "value": "static",
    "start": 36,
    "end": 42,
    "range": [
      36,
      42
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "bar",
    "start": 43,
    "end": 47,
    "range": [
      43,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "accessChildProps",
    "start": 57,
    "end": 73,
    "range": [
      57,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 86,
    "end": 89,
    "range": [
      86,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "Child",
    "start": 90,
    "end": 95,
    "range": [
      90,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 96,
    "end": 102,
    "range": [
      96,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 106,
    "end": 110,
    "range": [
      106,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Identifier",
    "value": "Child",
    "start": 195,
    "end": 200,
    "range": [
      195,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "bar",
    "start": 201,
    "end": 205,
    "range": [
      201,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 242,
    "end": 247,
    "range": [
      242,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "Child",
    "start": 248,
    "end": 253,
    "range": [
      248,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 257,
    "end": 264,
    "range": [
      257,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "Parent",
    "start": 265,
    "end": 271,
    "range": [
      265,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 281,
    "end": 285,
    "range": [
      281,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 288,
    "end": 293,
    "range": [
      288,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "bar",
    "start": 384,
    "end": 388,
    "range": [
      384,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 391,
    "end": 396,
    "range": [
      391,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 413,
    "end": 416,
    "range": [
      413,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "Parent",
    "start": 417,
    "end": 423,
    "range": [
      417,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 424,
    "end": 430,
    "range": [
      424,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "accessChildProps",
    "start": 434,
    "end": 450,
    "range": [
      434,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  }
]
```
