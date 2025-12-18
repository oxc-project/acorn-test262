__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 7,
                "end": 13
              },
              "start": 5,
              "end": 13
            },
            "start": 4,
            "end": 13
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 16,
            "end": 20
          },
          "definite": false,
          "start": 4,
          "end": 20
        }
      ],
      "declare": false,
      "start": 0,
      "end": 21
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
                "type": "TSBooleanKeyword",
                "start": 29,
                "end": 36
              },
              "start": 27,
              "end": 36
            },
            "start": 26,
            "end": 36
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 39,
            "end": 43
          },
          "definite": false,
          "start": 26,
          "end": 43
        }
      ],
      "declare": false,
      "start": 22,
      "end": 44
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 52,
                "end": 58
              },
              "start": 50,
              "end": 58
            },
            "start": 49,
            "end": 58
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 61,
            "end": 65
          },
          "definite": false,
          "start": 49,
          "end": 65
        }
      ],
      "declare": false,
      "start": 45,
      "end": 66
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 74,
                "end": 78
              },
              "start": 72,
              "end": 78
            },
            "start": 71,
            "end": 78
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 81,
            "end": 85
          },
          "definite": false,
          "start": 71,
          "end": 85
        }
      ],
      "declare": false,
      "start": 67,
      "end": 86
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
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 102,
                  "end": 111
                },
                "typeArguments": null,
                "start": 95,
                "end": 111
              },
              "start": 93,
              "end": 111
            },
            "start": 92,
            "end": 111
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 114,
            "end": 118
          },
          "definite": false,
          "start": 92,
          "end": 118
        }
      ],
      "declare": false,
      "start": 88,
      "end": 119
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 120,
          "end": 121
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 124,
          "end": 128
        },
        "start": 120,
        "end": 128
      },
      "directive": null,
      "start": 120,
      "end": 129
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 143
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
              "start": 146,
              "end": 147
            },
            "initializer": null,
            "computed": false,
            "start": 146,
            "end": 147
          }
        ],
        "start": 144,
        "end": 149
      },
      "const": false,
      "declare": false,
      "start": 137,
      "end": 149
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 151
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 153
          },
          "optional": false,
          "computed": false,
          "start": 150,
          "end": 153
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 156,
          "end": 160
        },
        "start": 150,
        "end": 160
      },
      "directive": null,
      "start": 150,
      "end": 161
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
        "start": 178,
        "end": 179
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 185
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 187,
                "end": 193
              },
              "start": 185,
              "end": 193
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
            "start": 182,
            "end": 193
          }
        ],
        "start": 180,
        "end": 195
      },
      "abstract": false,
      "declare": false,
      "start": 172,
      "end": 195
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
            "name": "f",
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
                  "start": 203,
                  "end": 204
                },
                "typeArguments": null,
                "start": 203,
                "end": 204
              },
              "start": 201,
              "end": 204
            },
            "start": 200,
            "end": 204
          },
          "init": null,
          "definite": false,
          "start": 200,
          "end": 204
        }
      ],
      "declare": false,
      "start": 196,
      "end": 205
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 206,
          "end": 207
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 210,
          "end": 214
        },
        "start": 206,
        "end": 214
      },
      "directive": null,
      "start": 206,
      "end": 215
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 222,
          "end": 223
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 226,
          "end": 230
        },
        "start": 222,
        "end": 230
      },
      "directive": null,
      "start": 222,
      "end": 231
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 252,
        "end": 253
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
              "start": 256,
              "end": 259
            },
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
            "accessibility": null,
            "static": false,
            "start": 256,
            "end": 267
          }
        ],
        "start": 254,
        "end": 269
      },
      "declare": false,
      "start": 242,
      "end": 269
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
                  "start": 277,
                  "end": 278
                },
                "typeArguments": null,
                "start": 277,
                "end": 278
              },
              "start": 275,
              "end": 278
            },
            "start": 274,
            "end": 278
          },
          "init": null,
          "definite": false,
          "start": 274,
          "end": 278
        }
      ],
      "declare": false,
      "start": 270,
      "end": 279
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 280,
          "end": 281
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 284,
          "end": 288
        },
        "start": 280,
        "end": 288
      },
      "directive": null,
      "start": 280,
      "end": 289
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null,
          "start": 296,
          "end": 297
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 300,
          "end": 304
        },
        "start": 296,
        "end": 304
      },
      "directive": null,
      "start": 296,
      "end": 305
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 326,
        "end": 327
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
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
                    "start": 341,
                    "end": 342
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 345,
                    "end": 346
                  },
                  "definite": false,
                  "start": 341,
                  "end": 346
                }
              ],
              "declare": false,
              "start": 337,
              "end": 347
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 330,
            "end": 347
          }
        ],
        "start": 328,
        "end": 349
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 316,
      "end": 349
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 350,
          "end": 351
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 354,
          "end": 358
        },
        "start": 350,
        "end": 358
      },
      "directive": null,
      "start": 350,
      "end": 359
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
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 379,
                      "end": 380
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
                        "start": 384,
                        "end": 388
                      },
                      "start": 382,
                      "end": 388
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 379,
                    "end": 388
                  }
                ],
                "start": 377,
                "end": 390
              },
              "start": 375,
              "end": 390
            },
            "start": 374,
            "end": 390
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 393,
            "end": 397
          },
          "definite": false,
          "start": 374,
          "end": 397
        }
      ],
      "declare": false,
      "start": 370,
      "end": 398
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null,
        "start": 409,
        "end": 410
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
              "start": 411,
              "end": 412
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 411,
            "end": 412
          }
        ],
        "start": 410,
        "end": 413
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 417,
                "end": 418
              },
              "typeArguments": null,
              "start": 417,
              "end": 418
            },
            "start": 415,
            "end": 418
          },
          "start": 414,
          "end": 418
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                "start": 426,
                "end": 427
              },
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 430,
                "end": 434
              },
              "start": 426,
              "end": 434
            },
            "directive": null,
            "start": 426,
            "end": 435
          }
        ],
        "start": 420,
        "end": 437
      },
      "expression": false,
      "start": 400,
      "end": 437
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 438,
          "end": 439
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 442,
          "end": 446
        },
        "start": 438,
        "end": 446
      },
      "directive": null,
      "start": 438,
      "end": 447
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 456
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4,
    "end": 5,
    "range": [
      4,
      5
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5,
    "end": 6,
    "range": [
      5,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7,
    "end": 13,
    "range": [
      7,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 16,
    "end": 20,
    "range": [
      16,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 22,
    "end": 25,
    "range": [
      22,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 29,
    "end": 36,
    "range": [
      29,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 39,
    "end": 43,
    "range": [
      39,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 45,
    "end": 48,
    "range": [
      45,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 52,
    "end": 58,
    "range": [
      52,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 61,
    "end": 65,
    "range": [
      61,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 67,
    "end": 70,
    "range": [
      67,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 74,
    "end": 78,
    "range": [
      74,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 81,
    "end": 85,
    "range": [
      81,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 88,
    "end": 91,
    "range": [
      88,
      91
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 95,
    "end": 101,
    "range": [
      95,
      101
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 102,
    "end": 111,
    "range": [
      102,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 114,
    "end": 118,
    "range": [
      114,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 124,
    "end": 128,
    "range": [
      124,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 137,
    "end": 141,
    "range": [
      137,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 156,
    "end": 160,
    "range": [
      156,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 172,
    "end": 177,
    "range": [
      172,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 182,
    "end": 185,
    "range": [
      182,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 187,
    "end": 193,
    "range": [
      187,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 196,
    "end": 199,
    "range": [
      196,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 210,
    "end": 214,
    "range": [
      210,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 226,
    "end": 230,
    "range": [
      226,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 242,
    "end": 251,
    "range": [
      242,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
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
    "value": "}",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 270,
    "end": 273,
    "range": [
      270,
      273
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 284,
    "end": 288,
    "range": [
      284,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 300,
    "end": 304,
    "range": [
      300,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 316,
    "end": 325,
    "range": [
      316,
      325
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 330,
    "end": 336,
    "range": [
      330,
      336
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 337,
    "end": 340,
    "range": [
      337,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 354,
    "end": 358,
    "range": [
      354,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 370,
    "end": 373,
    "range": [
      370,
      373
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 384,
    "end": 388,
    "range": [
      384,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 393,
    "end": 397,
    "range": [
      393,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 400,
    "end": 408,
    "range": [
      400,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 430,
    "end": 434,
    "range": [
      430,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 442,
    "end": 446,
    "range": [
      442,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  }
]
```
