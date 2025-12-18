__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EnhancedString",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 19
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 22,
            "end": 28
          },
          {
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
                  "name": "enhancements",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 45
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 47,
                    "end": 50
                  },
                  "start": 45,
                  "end": 50
                },
                "accessibility": null,
                "static": false,
                "start": 33,
                "end": 50
              }
            ],
            "start": 31,
            "end": 52
          }
        ],
        "start": 22,
        "end": 52
      },
      "declare": false,
      "start": 0,
      "end": 53
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
            "start": 59,
            "end": 60
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 63,
              "end": 68
            },
            "operator": "===",
            "right": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 73,
                "end": 78
              },
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "baz",
                  "raw": "\"baz\"",
                  "start": 82,
                  "end": 87
                },
                "start": 82,
                "end": 87
              },
              "start": 73,
              "end": 87
            },
            "start": 63,
            "end": 87
          },
          "definite": false,
          "start": 59,
          "end": 87
        }
      ],
      "declare": false,
      "start": 55,
      "end": 88
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
            "typeAnnotation": null,
            "start": 93,
            "end": 94
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 97,
              "end": 102
            },
            "operator": "!==",
            "right": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 108,
                "end": 113
              },
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 117,
                  "end": 122
                },
                "start": 117,
                "end": 122
              },
              "start": 108,
              "end": 122
            },
            "start": 97,
            "end": 123
          },
          "definite": false,
          "start": 93,
          "end": 123
        }
      ],
      "declare": false,
      "start": 89,
      "end": 124
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
            "typeAnnotation": null,
            "start": 129,
            "end": 130
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 133,
              "end": 138
            },
            "operator": "==",
            "right": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 144,
                "end": 150
              },
              "expression": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 151,
                "end": 156
              },
              "start": 143,
              "end": 156
            },
            "start": 133,
            "end": 157
          },
          "definite": false,
          "start": 129,
          "end": 157
        }
      ],
      "declare": false,
      "start": 125,
      "end": 158
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
            "typeAnnotation": null,
            "start": 163,
            "end": 164
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 167,
              "end": 172
            },
            "operator": "===",
            "right": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 178,
                "end": 183
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EnhancedString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 201
                },
                "typeArguments": null,
                "start": 187,
                "end": 201
              },
              "start": 178,
              "end": 201
            },
            "start": 167,
            "end": 202
          },
          "definite": false,
          "start": 163,
          "end": 202
        }
      ],
      "declare": false,
      "start": 159,
      "end": 203
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 203
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "EnhancedString",
    "start": 5,
    "end": 19,
    "range": [
      5,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 22,
    "end": 28,
    "range": [
      22,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "enhancements",
    "start": 33,
    "end": 45,
    "range": [
      33,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 47,
    "end": 50,
    "range": [
      47,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 55,
    "end": 58,
    "range": [
      55,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 63,
    "end": 68,
    "range": [
      63,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 69,
    "end": 72,
    "range": [
      69,
      72
    ]
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 73,
    "end": 78,
    "range": [
      73,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 79,
    "end": 81,
    "range": [
      79,
      81
    ]
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 82,
    "end": 87,
    "range": [
      82,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 89,
    "end": 92,
    "range": [
      89,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 97,
    "end": 102,
    "range": [
      97,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 103,
    "end": 106,
    "range": [
      103,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 108,
    "end": 113,
    "range": [
      108,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 114,
    "end": 116,
    "range": [
      114,
      116
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 117,
    "end": 122,
    "range": [
      117,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123,
    "range": [
      122,
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
    "type": "Keyword",
    "value": "var",
    "start": 125,
    "end": 128,
    "range": [
      125,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 133,
    "end": 138,
    "range": [
      133,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 139,
    "end": 141,
    "range": [
      139,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 144,
    "end": 150,
    "range": [
      144,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 151,
    "end": 156,
    "range": [
      151,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 159,
    "end": 162,
    "range": [
      159,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 167,
    "end": 172,
    "range": [
      167,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 173,
    "end": 176,
    "range": [
      173,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 178,
    "end": 183,
    "range": [
      178,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 184,
    "end": 186,
    "range": [
      184,
      186
    ]
  },
  {
    "type": "Identifier",
    "value": "EnhancedString",
    "start": 187,
    "end": 201,
    "range": [
      187,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  }
]
```
