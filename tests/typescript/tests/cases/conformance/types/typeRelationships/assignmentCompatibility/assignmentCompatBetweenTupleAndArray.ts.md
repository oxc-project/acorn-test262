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
            "name": "numStrTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 18,
                    "end": 24
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 26,
                    "end": 32
                  }
                ],
                "start": 17,
                "end": 33
              },
              "start": 15,
              "end": 33
            },
            "start": 4,
            "end": 33
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 33
        }
      ],
      "declare": false,
      "start": 0,
      "end": 34
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
            "name": "numNumTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 53,
                    "end": 59
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 61,
                    "end": 67
                  }
                ],
                "start": 52,
                "end": 68
              },
              "start": 50,
              "end": 68
            },
            "start": 39,
            "end": 68
          },
          "init": null,
          "definite": false,
          "start": 39,
          "end": 68
        }
      ],
      "declare": false,
      "start": 35,
      "end": 69
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
            "name": "numEmptyObjTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 93,
                    "end": 99
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 101,
                    "end": 103
                  }
                ],
                "start": 92,
                "end": 104
              },
              "start": 90,
              "end": 104
            },
            "start": 74,
            "end": 104
          },
          "init": null,
          "definite": false,
          "start": 74,
          "end": 104
        }
      ],
      "declare": false,
      "start": 70,
      "end": 105
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
            "name": "emptyObjTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 126,
                    "end": 128
                  }
                ],
                "start": 125,
                "end": 129
              },
              "start": 123,
              "end": 129
            },
            "start": 110,
            "end": 129
          },
          "init": null,
          "definite": false,
          "start": 110,
          "end": 129
        }
      ],
      "declare": false,
      "start": 106,
      "end": 130
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
            "name": "numArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 146,
                  "end": 152
                },
                "start": 146,
                "end": 154
              },
              "start": 144,
              "end": 154
            },
            "start": 136,
            "end": 154
          },
          "init": null,
          "definite": false,
          "start": 136,
          "end": 154
        }
      ],
      "declare": false,
      "start": 132,
      "end": 155
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
            "name": "emptyObjArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "start": 175,
                  "end": 177
                },
                "start": 175,
                "end": 179
              },
              "start": 173,
              "end": 179
            },
            "start": 160,
            "end": 179
          },
          "init": null,
          "definite": false,
          "start": 160,
          "end": 179
        }
      ],
      "declare": false,
      "start": 156,
      "end": 180
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 194,
          "end": 202
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "numNumTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 205,
          "end": 216
        },
        "start": 194,
        "end": 216
      },
      "directive": null,
      "start": 194,
      "end": 217
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "emptyObjArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 218,
          "end": 231
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "emptyObjTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 234,
          "end": 247
        },
        "start": 218,
        "end": 247
      },
      "directive": null,
      "start": 218,
      "end": 248
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "emptyObjArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 249,
          "end": 262
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "numStrTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 265,
          "end": 276
        },
        "start": 249,
        "end": 276
      },
      "directive": null,
      "start": 249,
      "end": 277
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "emptyObjArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 278,
          "end": 291
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "numNumTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 294,
          "end": 305
        },
        "start": 278,
        "end": 305
      },
      "directive": null,
      "start": 278,
      "end": 306
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "emptyObjArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 307,
          "end": 320
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "numEmptyObjTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 323,
          "end": 339
        },
        "start": 307,
        "end": 339
      },
      "directive": null,
      "start": 307,
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
          "name": "numArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 351,
          "end": 359
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "numStrTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 362,
          "end": 373
        },
        "start": 351,
        "end": 373
      },
      "directive": null,
      "start": 351,
      "end": 374
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "emptyObjTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 375,
          "end": 388
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "emptyObjArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 391,
          "end": 404
        },
        "start": 375,
        "end": 404
      },
      "directive": null,
      "start": 375,
      "end": 405
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 405
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "numStrTuple",
    "start": 4,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 18,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 26,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 35,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "numNumTuple",
    "start": 39,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 61,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 70,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "numEmptyObjTuple",
    "start": 74,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 106,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "emptyObjTuple",
    "start": 110,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 132,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "numArray",
    "start": 136,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 146,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 156,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "emptyObjArray",
    "start": 160,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "numArray",
    "start": 194,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "numNumTuple",
    "start": 205,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "emptyObjArray",
    "start": 218,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "emptyObjTuple",
    "start": 234,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "emptyObjArray",
    "start": 249,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "numStrTuple",
    "start": 265,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "emptyObjArray",
    "start": 278,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "numNumTuple",
    "start": 294,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "emptyObjArray",
    "start": 307,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "numEmptyObjTuple",
    "start": 323,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "numArray",
    "start": 351,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "numStrTuple",
    "start": 362,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "emptyObjTuple",
    "start": 375,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "emptyObjArray",
    "start": 391,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405
  }
]
```
