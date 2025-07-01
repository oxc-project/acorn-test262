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
        "name": "ENUM",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 37
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
              "start": 40,
              "end": 41
            },
            "initializer": null,
            "computed": false,
            "start": 40,
            "end": 41
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 44
            },
            "initializer": null,
            "computed": false,
            "start": 43,
            "end": 44
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 47
            },
            "initializer": null,
            "computed": false,
            "start": 46,
            "end": 47
          }
        ],
        "start": 38,
        "end": 49
      },
      "const": false,
      "declare": false,
      "start": 28,
      "end": 49
    },
    {
      "type": "EmptyStatement",
      "start": 49,
      "end": 50
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ENUM1",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 61
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 62,
        "end": 65
      },
      "const": false,
      "declare": false,
      "start": 51,
      "end": 65
    },
    {
      "type": "EmptyStatement",
      "start": 65,
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
            "name": "ResultIsBoolean1",
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 105
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 113
            },
            "prefix": true,
            "start": 108,
            "end": 113
          },
          "definite": false,
          "start": 89,
          "end": 113
        }
      ],
      "declare": false,
      "start": 85,
      "end": 114
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
            "name": "ResultIsBoolean2",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 161
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 169
              },
              "property": {
                "type": "Literal",
                "value": "B",
                "raw": "\"B\"",
                "start": 170,
                "end": 173
              },
              "optional": false,
              "computed": true,
              "start": 165,
              "end": 174
            },
            "prefix": true,
            "start": 164,
            "end": 174
          },
          "definite": false,
          "start": 145,
          "end": 174
        }
      ],
      "declare": false,
      "start": 141,
      "end": 175
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
            "name": "ResultIsBoolean3",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 196
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ENUM",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 205
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 207
                },
                "optional": false,
                "computed": false,
                "start": 201,
                "end": 207
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ENUM",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 210,
                  "end": 214
                },
                "property": {
                  "type": "Literal",
                  "value": "C",
                  "raw": "\"C\"",
                  "start": 215,
                  "end": 218
                },
                "optional": false,
                "computed": true,
                "start": 210,
                "end": 219
              },
              "start": 201,
              "end": 219
            },
            "prefix": true,
            "start": 199,
            "end": 220
          },
          "definite": false,
          "start": 180,
          "end": 220
        }
      ],
      "declare": false,
      "start": 176,
      "end": 221
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
            "name": "ResultIsBoolean4",
            "optional": false,
            "typeAnnotation": null,
            "start": 251,
            "end": 267
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM",
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 276
              },
              "prefix": true,
              "start": 271,
              "end": 276
            },
            "prefix": true,
            "start": 270,
            "end": 276
          },
          "definite": false,
          "start": 251,
          "end": 276
        }
      ],
      "declare": false,
      "start": 247,
      "end": 277
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
            "name": "ResultIsBoolean5",
            "optional": false,
            "typeAnnotation": null,
            "start": 282,
            "end": 298
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ENUM",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 305,
                      "end": 309
                    },
                    "property": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "\"B\"",
                      "start": 310,
                      "end": 313
                    },
                    "optional": false,
                    "computed": true,
                    "start": 305,
                    "end": 314
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ENUM",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 317,
                      "end": 321
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 322,
                      "end": 323
                    },
                    "optional": false,
                    "computed": false,
                    "start": 317,
                    "end": 323
                  },
                  "start": 305,
                  "end": 323
                },
                "prefix": true,
                "start": 303,
                "end": 324
              },
              "prefix": true,
              "start": 302,
              "end": 324
            },
            "prefix": true,
            "start": 301,
            "end": 324
          },
          "definite": false,
          "start": 282,
          "end": 324
        }
      ],
      "declare": false,
      "start": 278,
      "end": 325
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ENUM",
          "optional": false,
          "typeAnnotation": null,
          "start": 357,
          "end": 361
        },
        "prefix": true,
        "start": 356,
        "end": 361
      },
      "directive": null,
      "start": 356,
      "end": 362
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ENUM1",
          "optional": false,
          "typeAnnotation": null,
          "start": 364,
          "end": 369
        },
        "prefix": true,
        "start": 363,
        "end": 369
      },
      "directive": null,
      "start": 363,
      "end": 370
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM",
            "optional": false,
            "typeAnnotation": null,
            "start": 372,
            "end": 376
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
            "end": 378
          },
          "optional": false,
          "computed": false,
          "start": 372,
          "end": 378
        },
        "prefix": true,
        "start": 371,
        "end": 378
      },
      "directive": null,
      "start": 371,
      "end": 379
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null,
              "start": 381,
              "end": 385
            },
            "prefix": true,
            "start": 380,
            "end": 385
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null,
            "start": 387,
            "end": 392
          }
        ],
        "start": 380,
        "end": 392
      },
      "directive": null,
      "start": 380,
      "end": 393
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 28,
  "end": 393
}
```
