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
        "name": "N",
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
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 22,
                "end": 29
              },
              "start": 20,
              "end": 29
            },
            "start": 18,
            "end": 29
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 37
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 39,
                  "end": 42
                },
                "start": 39,
                "end": 42
              },
              "start": 37,
              "end": 42
            },
            "accessibility": null,
            "static": false,
            "start": 34,
            "end": 43
          }
        ],
        "start": 12,
        "end": 45
      },
      "declare": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "interfaced",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 71,
                    "end": 72
                  },
                  "typeArguments": null,
                  "start": 71,
                  "end": 72
                },
                "start": 69,
                "end": 72
              },
              "start": 59,
              "end": 72
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 81,
                "end": 85
              },
              "id": null,
              "generator": false,
              "start": 75,
              "end": 85
            },
            "definite": false,
            "start": 59,
            "end": 85
          }
        ],
        "declare": false,
        "start": 53,
        "end": 86
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 46,
      "end": 86
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
            "name": "interfaced",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 97
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 101
          },
          "optional": false,
          "computed": false,
          "start": 87,
          "end": 101
        },
        "right": {
          "type": "Literal",
          "value": 123,
          "raw": "123",
          "start": 104,
          "end": 107
        },
        "start": 87,
        "end": 107
      },
      "directive": null,
      "start": 87,
      "end": 108
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "inlined",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 138,
                          "end": 145
                        },
                        "start": 136,
                        "end": 145
                      },
                      "start": 134,
                      "end": 146
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nun",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 147,
                        "end": 150
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 456,
                            "raw": "456",
                            "start": 152,
                            "end": 155
                          },
                          "start": 152,
                          "end": 155
                        },
                        "start": 150,
                        "end": 155
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 147,
                      "end": 155
                    }
                  ],
                  "start": 132,
                  "end": 157
                },
                "start": 130,
                "end": 157
              },
              "start": 123,
              "end": 157
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 166,
                "end": 170
              },
              "id": null,
              "generator": false,
              "start": 160,
              "end": 170
            },
            "definite": false,
            "start": 123,
            "end": 170
          }
        ],
        "declare": false,
        "start": 117,
        "end": 171
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 110,
      "end": 171
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
            "name": "inlined",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 179
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "nun",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 183
          },
          "optional": false,
          "computed": false,
          "start": 172,
          "end": 183
        },
        "right": {
          "type": "Literal",
          "value": 456,
          "raw": "456",
          "start": 186,
          "end": 189
        },
        "start": 172,
        "end": 189
      },
      "directive": null,
      "start": 172,
      "end": 190
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ignoreJsdoc",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 216
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 225,
                "end": 229
              },
              "id": null,
              "generator": false,
              "start": 219,
              "end": 229
            },
            "definite": false,
            "start": 205,
            "end": 229
          }
        ],
        "declare": false,
        "start": 199,
        "end": 230
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 192,
      "end": 230
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
            "name": "ignoreJsdoc",
            "optional": false,
            "typeAnnotation": null,
            "start": 280,
            "end": 291
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "extra",
            "optional": false,
            "typeAnnotation": null,
            "start": 292,
            "end": 297
          },
          "optional": false,
          "computed": false,
          "start": 280,
          "end": 297
        },
        "right": {
          "type": "Literal",
          "value": 111,
          "raw": "111",
          "start": 300,
          "end": 303
        },
        "start": 280,
        "end": 303
      },
      "directive": null,
      "start": 280,
      "end": 303
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 303
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
    "value": "N",
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
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 22,
    "end": 29,
    "range": [
      22,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 34,
    "end": 37,
    "range": [
      34,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 39,
    "end": 42,
    "range": [
      39,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 46,
    "end": 52,
    "range": [
      46,
      52
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 53,
    "end": 58,
    "range": [
      53,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "interfaced",
    "start": 59,
    "end": 69,
    "range": [
      59,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 78,
    "end": 80,
    "range": [
      78,
      80
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
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
    "type": "Identifier",
    "value": "interfaced",
    "start": 87,
    "end": 97,
    "range": [
      87,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 98,
    "end": 101,
    "range": [
      98,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 104,
    "end": 107,
    "range": [
      104,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 110,
    "end": 116,
    "range": [
      110,
      116
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 117,
    "end": 122,
    "range": [
      117,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "inlined",
    "start": 123,
    "end": 130,
    "range": [
      123,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 138,
    "end": 145,
    "range": [
      138,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "nun",
    "start": 147,
    "end": 150,
    "range": [
      147,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Numeric",
    "value": "456",
    "start": 152,
    "end": 155,
    "range": [
      152,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 163,
    "end": 165,
    "range": [
      163,
      165
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 166,
    "end": 170,
    "range": [
      166,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "inlined",
    "start": 172,
    "end": 179,
    "range": [
      172,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "nun",
    "start": 180,
    "end": 183,
    "range": [
      180,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Numeric",
    "value": "456",
    "start": 186,
    "end": 189,
    "range": [
      186,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 192,
    "end": 198,
    "range": [
      192,
      198
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 199,
    "end": 204,
    "range": [
      199,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "ignoreJsdoc",
    "start": 205,
    "end": 216,
    "range": [
      205,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 222,
    "end": 224,
    "range": [
      222,
      224
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 225,
    "end": 229,
    "range": [
      225,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "ignoreJsdoc",
    "start": 280,
    "end": 291,
    "range": [
      280,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 292,
    "end": 297,
    "range": [
      292,
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
    "type": "Numeric",
    "value": "111",
    "start": 300,
    "end": 303,
    "range": [
      300,
      303
    ]
  }
]
```
