__ESTREE_TEST__:PASS:
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
        "start": 114,
        "end": 115
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
              "start": 122,
              "end": 123
            },
            "initializer": null,
            "computed": false,
            "start": 122,
            "end": 123
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 130
            },
            "initializer": null,
            "computed": false,
            "start": 129,
            "end": 130
          }
        ],
        "start": 116,
        "end": 132
      },
      "const": false,
      "declare": false,
      "start": 109,
      "end": 132
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
                "start": 141,
                "end": 144
              },
              "start": 139,
              "end": 144
            },
            "start": 138,
            "end": 144
          },
          "init": null,
          "definite": false,
          "start": 138,
          "end": 144
        }
      ],
      "declare": false,
      "start": 134,
      "end": 145
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
                "start": 153,
                "end": 159
              },
              "start": 151,
              "end": 159
            },
            "start": 150,
            "end": 159
          },
          "init": null,
          "definite": false,
          "start": 150,
          "end": 159
        }
      ],
      "declare": false,
      "start": 146,
      "end": 160
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 183
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 186,
              "end": 190
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 194,
              "end": 195
            },
            "start": 186,
            "end": 195
          },
          "definite": false,
          "start": 181,
          "end": 195
        }
      ],
      "declare": false,
      "start": 177,
      "end": 196
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 203
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 206,
              "end": 210
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 215
            },
            "start": 206,
            "end": 215
          },
          "definite": false,
          "start": 201,
          "end": 215
        }
      ],
      "declare": false,
      "start": 197,
      "end": 216
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 221,
            "end": 223
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 226,
              "end": 230
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 234,
              "end": 235
            },
            "start": 226,
            "end": 235
          },
          "definite": false,
          "start": 221,
          "end": 235
        }
      ],
      "declare": false,
      "start": 217,
      "end": 236
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 243
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 246,
              "end": 250
            },
            "operator": "**",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 254,
                "end": 255
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 257
              },
              "optional": false,
              "computed": false,
              "start": 254,
              "end": 257
            },
            "start": 246,
            "end": 257
          },
          "definite": false,
          "start": 241,
          "end": 257
        }
      ],
      "declare": false,
      "start": 237,
      "end": 258
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 263,
            "end": 265
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 269
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 273,
              "end": 277
            },
            "start": 268,
            "end": 277
          },
          "definite": false,
          "start": 263,
          "end": 277
        }
      ],
      "declare": false,
      "start": 259,
      "end": 278
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 283,
            "end": 285
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 289
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 293,
              "end": 297
            },
            "start": 288,
            "end": 297
          },
          "definite": false,
          "start": 283,
          "end": 297
        }
      ],
      "declare": false,
      "start": 279,
      "end": 298
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
            "name": "r7",
            "optional": false,
            "typeAnnotation": null,
            "start": 303,
            "end": 305
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 308,
              "end": 309
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 313,
              "end": 317
            },
            "start": 308,
            "end": 317
          },
          "definite": false,
          "start": 303,
          "end": 317
        }
      ],
      "declare": false,
      "start": 299,
      "end": 318
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
            "name": "r8",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 325
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 328,
                "end": 329
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 330,
                "end": 331
              },
              "optional": false,
              "computed": false,
              "start": 328,
              "end": 331
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 335,
              "end": 339
            },
            "start": 328,
            "end": 339
          },
          "definite": false,
          "start": 323,
          "end": 339
        }
      ],
      "declare": false,
      "start": 319,
      "end": 340
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 109,
  "end": 340
}
```
