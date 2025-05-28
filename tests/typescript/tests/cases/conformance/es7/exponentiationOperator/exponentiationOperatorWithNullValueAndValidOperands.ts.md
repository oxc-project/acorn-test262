__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 109,
  "end": 340,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 109,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 115,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 116,
        "end": 132,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 122,
            "end": 123,
            "id": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 129,
            "end": 130,
            "id": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 145,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 144,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 144,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 144,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 141,
                "end": 144
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 146,
      "end": 160,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 150,
          "end": 159,
          "id": {
            "type": "Identifier",
            "start": 150,
            "end": 159,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 151,
              "end": 159,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 153,
                "end": 159
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 177,
      "end": 196,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 181,
          "end": 195,
          "id": {
            "type": "Identifier",
            "start": 181,
            "end": 183,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 186,
            "end": 195,
            "left": {
              "type": "Literal",
              "start": 186,
              "end": 190,
              "value": null,
              "raw": "null"
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 194,
              "end": 195,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 197,
      "end": 216,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 215,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 203,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 206,
            "end": 215,
            "left": {
              "type": "Literal",
              "start": 206,
              "end": 210,
              "value": null,
              "raw": "null"
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 217,
      "end": 236,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 221,
          "end": 235,
          "id": {
            "type": "Identifier",
            "start": 221,
            "end": 223,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 226,
            "end": 235,
            "left": {
              "type": "Literal",
              "start": 226,
              "end": 230,
              "value": null,
              "raw": "null"
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "start": 234,
              "end": 235,
              "value": 1,
              "raw": "1"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 237,
      "end": 258,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 257,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 243,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 246,
            "end": 257,
            "left": {
              "type": "Literal",
              "start": 246,
              "end": 250,
              "value": null,
              "raw": "null"
            },
            "operator": "**",
            "right": {
              "type": "MemberExpression",
              "start": 254,
              "end": 257,
              "object": {
                "type": "Identifier",
                "start": 254,
                "end": 255,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 256,
                "end": 257,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 259,
      "end": 278,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 263,
          "end": 277,
          "id": {
            "type": "Identifier",
            "start": 263,
            "end": 265,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 268,
            "end": 277,
            "left": {
              "type": "Identifier",
              "start": 268,
              "end": 269,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "start": 273,
              "end": 277,
              "value": null,
              "raw": "null"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 279,
      "end": 298,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 297,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 285,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 288,
            "end": 297,
            "left": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "start": 293,
              "end": 297,
              "value": null,
              "raw": "null"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 299,
      "end": 318,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 303,
          "end": 317,
          "id": {
            "type": "Identifier",
            "start": 303,
            "end": 305,
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 308,
            "end": 317,
            "left": {
              "type": "Literal",
              "start": 308,
              "end": 309,
              "value": 0,
              "raw": "0"
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "start": 313,
              "end": 317,
              "value": null,
              "raw": "null"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 319,
      "end": 340,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 323,
          "end": 339,
          "id": {
            "type": "Identifier",
            "start": 323,
            "end": 325,
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 328,
            "end": 339,
            "left": {
              "type": "MemberExpression",
              "start": 328,
              "end": 331,
              "object": {
                "type": "Identifier",
                "start": 328,
                "end": 329,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 330,
                "end": 331,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "start": 335,
              "end": 339,
              "value": null,
              "raw": "null"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
