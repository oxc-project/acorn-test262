__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 9,
              "end": 10
            },
            "initializer": null,
            "computed": false,
            "start": 9,
            "end": 10
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 13
            },
            "initializer": null,
            "computed": false,
            "start": 12,
            "end": 13
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 16
            },
            "initializer": null,
            "computed": false,
            "start": 15,
            "end": 16
          }
        ],
        "start": 7,
        "end": 18
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 18
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
                "type": "TSAnyKeyword",
                "start": 27,
                "end": 30
              },
              "start": 25,
              "end": 30
            },
            "start": 24,
            "end": 30
          },
          "init": null,
          "definite": false,
          "start": 24,
          "end": 30
        }
      ],
      "declare": false,
      "start": 20,
      "end": 31
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
                "type": "TSNumberKeyword",
                "start": 39,
                "end": 45
              },
              "start": 37,
              "end": 45
            },
            "start": 36,
            "end": 45
          },
          "init": null,
          "definite": false,
          "start": 36,
          "end": 45
        }
      ],
      "declare": false,
      "start": 32,
      "end": 46
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 54,
                  "end": 55
                },
                "typeArguments": null,
                "start": 54,
                "end": 55
              },
              "start": 52,
              "end": 55
            },
            "start": 51,
            "end": 55
          },
          "init": null,
          "definite": false,
          "start": 51,
          "end": 55
        }
      ],
      "declare": false,
      "start": 47,
      "end": 56
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 66,
                "end": 69
              },
              "start": 64,
              "end": 69
            },
            "start": 62,
            "end": 69
          },
          "init": null,
          "definite": false,
          "start": 62,
          "end": 69
        }
      ],
      "declare": false,
      "start": 58,
      "end": 70
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 71,
          "end": 73
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 78,
          "end": 79
        },
        "start": 71,
        "end": 79
      },
      "directive": null,
      "start": 71,
      "end": 80
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 81,
          "end": 83
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 88,
          "end": 89
        },
        "start": 81,
        "end": 89
      },
      "directive": null,
      "start": 81,
      "end": 90
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 93
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 98,
          "end": 99
        },
        "start": 91,
        "end": 99
      },
      "directive": null,
      "start": 91,
      "end": 100
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 101,
          "end": 103
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 108,
          "end": 112
        },
        "start": 101,
        "end": 112
      },
      "directive": null,
      "start": 101,
      "end": 113
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 114,
          "end": 116
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 121,
          "end": 130
        },
        "start": 114,
        "end": 130
      },
      "directive": null,
      "start": 114,
      "end": 131
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 141,
                "end": 147
              },
              "start": 139,
              "end": 147
            },
            "start": 137,
            "end": 147
          },
          "init": null,
          "definite": false,
          "start": 137,
          "end": 147
        }
      ],
      "declare": false,
      "start": 133,
      "end": 148
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 149,
          "end": 151
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 156,
          "end": 157
        },
        "start": 149,
        "end": 157
      },
      "directive": null,
      "start": 149,
      "end": 158
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 159,
          "end": 161
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 166,
          "end": 167
        },
        "start": 159,
        "end": 167
      },
      "directive": null,
      "start": 159,
      "end": 168
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 169,
          "end": 171
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 176,
          "end": 177
        },
        "start": 169,
        "end": 177
      },
      "directive": null,
      "start": 169,
      "end": 178
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 179,
          "end": 181
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 186,
          "end": 190
        },
        "start": 179,
        "end": 190
      },
      "directive": null,
      "start": 179,
      "end": 191
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 192,
          "end": 194
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 199,
          "end": 208
        },
        "start": 192,
        "end": 208
      },
      "directive": null,
      "start": 192,
      "end": 209
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 219,
                  "end": 220
                },
                "typeArguments": null,
                "start": 219,
                "end": 220
              },
              "start": 217,
              "end": 220
            },
            "start": 215,
            "end": 220
          },
          "init": null,
          "definite": false,
          "start": 215,
          "end": 220
        }
      ],
      "declare": false,
      "start": 211,
      "end": 221
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 222,
          "end": 224
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 229,
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 232,
          "end": 234
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 239,
          "end": 240
        },
        "start": 232,
        "end": 240
      },
      "directive": null,
      "start": 232,
      "end": 241
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 242,
          "end": 244
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 249,
          "end": 250
        },
        "start": 242,
        "end": 250
      },
      "directive": null,
      "start": 242,
      "end": 251
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 252,
          "end": 254
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 259,
          "end": 263
        },
        "start": 252,
        "end": 263
      },
      "directive": null,
      "start": 252,
      "end": 264
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 265,
          "end": 267
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 272,
          "end": 281
        },
        "start": 265,
        "end": 281
      },
      "directive": null,
      "start": 265,
      "end": 282
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 282
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 17,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 20,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 27,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 32,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 47,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 58,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 62,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 66,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 71,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 74,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 81,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 84,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 91,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 94,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 101,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 104,
    "end": 107
  },
  {
    "type": "Null",
    "value": "null",
    "start": 108,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 114,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 117,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 121,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 133,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 137,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 141,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 149,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 152,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 159,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 162,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 169,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 172,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 179,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 182,
    "end": 185
  },
  {
    "type": "Null",
    "value": "null",
    "start": 186,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 192,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 195,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 199,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 211,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 215,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 222,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 225,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 232,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 235,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 242,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 245,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 252,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 255,
    "end": 258
  },
  {
    "type": "Null",
    "value": "null",
    "start": 259,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 265,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 268,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 272,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  }
]
```
