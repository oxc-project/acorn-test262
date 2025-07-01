__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 19
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 23,
              "end": 26
            },
            "start": 21,
            "end": 26
          },
          "start": 20,
          "end": 26
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 29,
          "end": 33
        },
        "start": 27,
        "end": 33
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 34
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "takeTwo",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 59
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 63,
              "end": 66
            },
            "start": 61,
            "end": 66
          },
          "start": 60,
          "end": 66
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 71,
              "end": 74
            },
            "start": 69,
            "end": 74
          },
          "start": 68,
          "end": 74
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 77,
          "end": 81
        },
        "start": 75,
        "end": 81
      },
      "body": null,
      "expression": false,
      "start": 35,
      "end": 82
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withRest",
        "optional": false,
        "typeAnnotation": null,
        "start": 100,
        "end": 108
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 112,
              "end": 115
            },
            "start": 110,
            "end": 115
          },
          "start": 109,
          "end": 115
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 124
          },
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
                "start": 126,
                "end": 131
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 132,
                    "end": 135
                  }
                ],
                "start": 131,
                "end": 136
              },
              "start": 126,
              "end": 136
            },
            "start": 124,
            "end": 136
          },
          "value": null,
          "start": 117,
          "end": 136
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 139,
          "end": 143
        },
        "start": 137,
        "end": 143
      },
      "body": null,
      "expression": false,
      "start": 83,
      "end": 144
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
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 152,
                  "end": 158
                },
                "start": 152,
                "end": 160
              },
              "start": 150,
              "end": 160
            },
            "start": 149,
            "end": 160
          },
          "init": null,
          "definite": false,
          "start": 149,
          "end": 160
        }
      ],
      "declare": false,
      "start": 145,
      "end": 161
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 163,
          "end": 165
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 166,
            "end": 167
          }
        ],
        "optional": false,
        "start": 163,
        "end": 168
      },
      "directive": null,
      "start": 163,
      "end": 168
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 181,
          "end": 183
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 184,
            "end": 185
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 187,
            "end": 188
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 190,
            "end": 191
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 193,
            "end": 194
          }
        ],
        "optional": false,
        "start": 181,
        "end": 195
      },
      "directive": null,
      "start": 181,
      "end": 195
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "takeTwo",
          "optional": false,
          "typeAnnotation": null,
          "start": 196,
          "end": 203
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 204,
            "end": 205
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 207,
            "end": 208
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 210,
            "end": 211
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 213,
            "end": 214
          }
        ],
        "optional": false,
        "start": 196,
        "end": 215
      },
      "directive": null,
      "start": 196,
      "end": 215
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "withRest",
          "optional": false,
          "typeAnnotation": null,
          "start": 216,
          "end": 224
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 225,
            "end": 228
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 234
            },
            "start": 230,
            "end": 234
          }
        ],
        "optional": false,
        "start": 216,
        "end": 235
      },
      "directive": null,
      "start": 216,
      "end": 236
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "withRest",
          "optional": false,
          "typeAnnotation": null,
          "start": 249,
          "end": 257
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 249,
        "end": 259
      },
      "directive": null,
      "start": 249,
      "end": 260
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "withRest",
          "optional": false,
          "typeAnnotation": null,
          "start": 261,
          "end": 269
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 273,
              "end": 274
            },
            "start": 270,
            "end": 274
          }
        ],
        "optional": false,
        "start": 261,
        "end": 275
      },
      "directive": null,
      "start": 261,
      "end": 276
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 277
}
```
