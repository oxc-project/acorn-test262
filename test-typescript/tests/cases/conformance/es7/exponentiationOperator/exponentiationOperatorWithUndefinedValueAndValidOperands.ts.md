__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 114,
  "end": 392,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 114,
      "end": 137,
      "id": {
        "type": "Identifier",
        "start": 119,
        "end": 120,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 127,
          "end": 128,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 128,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 134,
          "end": 135,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 135,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 121,
        "end": 137,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 127,
            "end": 128,
            "id": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 134,
            "end": 135,
            "id": {
              "type": "Identifier",
              "start": 134,
              "end": 135,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 149,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 149,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 149,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 146,
                "end": 149
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 165,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 164,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 164,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 156,
              "end": 164,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 158,
                "end": 164
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 181,
      "end": 206,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 205,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 188,
            "name": "rk1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 191,
            "end": 205,
            "left": {
              "type": "Identifier",
              "start": 191,
              "end": 200,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 207,
      "end": 232,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 211,
          "end": 231,
          "id": {
            "type": "Identifier",
            "start": 211,
            "end": 214,
            "name": "rk2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 217,
            "end": 231,
            "left": {
              "type": "Identifier",
              "start": 217,
              "end": 226,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 230,
              "end": 231,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 233,
      "end": 258,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 237,
          "end": 257,
          "id": {
            "type": "Identifier",
            "start": 237,
            "end": 240,
            "name": "rk3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 243,
            "end": 257,
            "left": {
              "type": "Identifier",
              "start": 243,
              "end": 252,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "start": 256,
              "end": 257,
              "value": 1,
              "raw": "1"
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 259,
      "end": 286,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 263,
          "end": 285,
          "id": {
            "type": "Identifier",
            "start": 263,
            "end": 266,
            "name": "rk4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 269,
            "end": 285,
            "left": {
              "type": "Identifier",
              "start": 269,
              "end": 278,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "MemberExpression",
              "start": 282,
              "end": 285,
              "object": {
                "type": "Identifier",
                "start": 282,
                "end": 283,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 284,
                "end": 285,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 287,
      "end": 312,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 311,
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 294,
            "name": "rk5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 297,
            "end": 311,
            "left": {
              "type": "Identifier",
              "start": 297,
              "end": 298,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 302,
              "end": 311,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 313,
      "end": 338,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 317,
          "end": 337,
          "id": {
            "type": "Identifier",
            "start": 317,
            "end": 320,
            "name": "rk6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 323,
            "end": 337,
            "left": {
              "type": "Identifier",
              "start": 323,
              "end": 324,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 328,
              "end": 337,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 339,
      "end": 364,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 343,
          "end": 363,
          "id": {
            "type": "Identifier",
            "start": 343,
            "end": 346,
            "name": "rk7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 349,
            "end": 363,
            "left": {
              "type": "Literal",
              "start": 349,
              "end": 350,
              "value": 0,
              "raw": "0"
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 354,
              "end": 363,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 365,
      "end": 392,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 369,
          "end": 391,
          "id": {
            "type": "Identifier",
            "start": 369,
            "end": 372,
            "name": "rk8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 375,
            "end": 391,
            "left": {
              "type": "MemberExpression",
              "start": 375,
              "end": 378,
              "object": {
                "type": "Identifier",
                "start": 375,
                "end": 376,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 377,
                "end": 378,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 382,
              "end": 391,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
