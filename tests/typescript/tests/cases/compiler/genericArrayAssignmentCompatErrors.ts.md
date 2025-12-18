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
            "name": "myCars",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 10
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 20
            },
            "typeArguments": null,
            "arguments": [],
            "start": 11,
            "end": 22
          },
          "definite": false,
          "start": 4,
          "end": 22
        }
      ],
      "declare": false,
      "start": 0,
      "end": 23
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
            "name": "myCars2",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 36
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 43,
              "end": 45
            },
            "typeArguments": null,
            "arguments": [],
            "start": 39,
            "end": 45
          },
          "definite": false,
          "start": 29,
          "end": 45
        }
      ],
      "declare": false,
      "start": 25,
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
            "name": "myCars3",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 58
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 70
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 71,
                "end": 73
              }
            ],
            "start": 61,
            "end": 74
          },
          "definite": false,
          "start": 51,
          "end": 74
        }
      ],
      "declare": false,
      "start": 47,
      "end": 75
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
            "name": "myCars4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 94
                },
                "typeArguments": null,
                "start": 89,
                "end": 94
              },
              "start": 87,
              "end": 94
            },
            "start": 80,
            "end": 94
          },
          "init": null,
          "definite": false,
          "start": 80,
          "end": 94
        }
      ],
      "declare": false,
      "start": 76,
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
            "name": "myCars5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 118,
                    "end": 123
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 124,
                        "end": 127
                      }
                    ],
                    "start": 123,
                    "end": 128
                  },
                  "start": 118,
                  "end": 128
                },
                "start": 118,
                "end": 130
              },
              "start": 116,
              "end": 130
            },
            "start": 109,
            "end": 130
          },
          "init": null,
          "definite": false,
          "start": 109,
          "end": 130
        }
      ],
      "declare": false,
      "start": 105,
      "end": 131
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars",
          "optional": false,
          "typeAnnotation": null,
          "start": 134,
          "end": 140
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars2",
          "optional": false,
          "typeAnnotation": null,
          "start": 143,
          "end": 150
        },
        "start": 134,
        "end": 150
      },
      "directive": null,
      "start": 134,
      "end": 151
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars",
          "optional": false,
          "typeAnnotation": null,
          "start": 152,
          "end": 158
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars3",
          "optional": false,
          "typeAnnotation": null,
          "start": 161,
          "end": 168
        },
        "start": 152,
        "end": 168
      },
      "directive": null,
      "start": 152,
      "end": 169
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars",
          "optional": false,
          "typeAnnotation": null,
          "start": 170,
          "end": 176
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars4",
          "optional": false,
          "typeAnnotation": null,
          "start": 179,
          "end": 186
        },
        "start": 170,
        "end": 186
      },
      "directive": null,
      "start": 170,
      "end": 187
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars",
          "optional": false,
          "typeAnnotation": null,
          "start": 188,
          "end": 194
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars5",
          "optional": false,
          "typeAnnotation": null,
          "start": 197,
          "end": 204
        },
        "start": 188,
        "end": 204
      },
      "directive": null,
      "start": 188,
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
          "name": "myCars2",
          "optional": false,
          "typeAnnotation": null,
          "start": 208,
          "end": 215
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars",
          "optional": false,
          "typeAnnotation": null,
          "start": 218,
          "end": 224
        },
        "start": 208,
        "end": 224
      },
      "directive": null,
      "start": 208,
      "end": 225
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars2",
          "optional": false,
          "typeAnnotation": null,
          "start": 226,
          "end": 233
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars3",
          "optional": false,
          "typeAnnotation": null,
          "start": 236,
          "end": 243
        },
        "start": 226,
        "end": 243
      },
      "directive": null,
      "start": 226,
      "end": 244
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars2",
          "optional": false,
          "typeAnnotation": null,
          "start": 245,
          "end": 252
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars4",
          "optional": false,
          "typeAnnotation": null,
          "start": 255,
          "end": 262
        },
        "start": 245,
        "end": 262
      },
      "directive": null,
      "start": 245,
      "end": 263
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars2",
          "optional": false,
          "typeAnnotation": null,
          "start": 264,
          "end": 271
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars5",
          "optional": false,
          "typeAnnotation": null,
          "start": 274,
          "end": 281
        },
        "start": 264,
        "end": 281
      },
      "directive": null,
      "start": 264,
      "end": 282
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars3",
          "optional": false,
          "typeAnnotation": null,
          "start": 285,
          "end": 292
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars",
          "optional": false,
          "typeAnnotation": null,
          "start": 295,
          "end": 301
        },
        "start": 285,
        "end": 301
      },
      "directive": null,
      "start": 285,
      "end": 302
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars3",
          "optional": false,
          "typeAnnotation": null,
          "start": 303,
          "end": 310
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars2",
          "optional": false,
          "typeAnnotation": null,
          "start": 313,
          "end": 320
        },
        "start": 303,
        "end": 320
      },
      "directive": null,
      "start": 303,
      "end": 321
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars3",
          "optional": false,
          "typeAnnotation": null,
          "start": 322,
          "end": 329
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars4",
          "optional": false,
          "typeAnnotation": null,
          "start": 332,
          "end": 339
        },
        "start": 322,
        "end": 339
      },
      "directive": null,
      "start": 322,
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
          "name": "myCars3",
          "optional": false,
          "typeAnnotation": null,
          "start": 341,
          "end": 348
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars5",
          "optional": false,
          "typeAnnotation": null,
          "start": 351,
          "end": 358
        },
        "start": 341,
        "end": 358
      },
      "directive": null,
      "start": 341,
      "end": 359
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 362
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
    "value": "myCars",
    "start": 4,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 11,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 15,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 25,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "myCars2",
    "start": 29,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 39,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 44,
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
    "value": "myCars3",
    "start": 51,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 61,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 65,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 76,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "myCars4",
    "start": 80,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 89,
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
    "start": 105,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "myCars5",
    "start": 109,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 118,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 124,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "myCars",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "myCars2",
    "start": 143,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "myCars",
    "start": 152,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "myCars3",
    "start": 161,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "myCars",
    "start": 170,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "myCars4",
    "start": 179,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "myCars",
    "start": 188,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "myCars5",
    "start": 197,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "myCars2",
    "start": 208,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "myCars",
    "start": 218,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "myCars2",
    "start": 226,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "myCars3",
    "start": 236,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "myCars2",
    "start": 245,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "myCars4",
    "start": 255,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "myCars2",
    "start": 264,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "myCars5",
    "start": 274,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "myCars3",
    "start": 285,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "myCars",
    "start": 295,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "myCars3",
    "start": 303,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "myCars2",
    "start": 313,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "myCars3",
    "start": 322,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "myCars4",
    "start": 332,
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
    "value": "myCars3",
    "start": 341,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "myCars5",
    "start": 351,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 358,
    "end": 359
  }
]
```
