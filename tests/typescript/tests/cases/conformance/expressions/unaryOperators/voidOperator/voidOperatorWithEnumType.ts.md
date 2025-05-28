__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 32,
  "end": 467,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 32,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 41,
        "decorators": [],
        "name": "ENUM",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 42,
        "end": 45,
        "members": []
      },
      "const": false,
      "declare": false
    },
    {
      "type": "EmptyStatement",
      "start": 45,
      "end": 46
    },
    {
      "type": "TSEnumDeclaration",
      "start": 47,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 57,
        "decorators": [],
        "name": "ENUM1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 58,
        "end": 70,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 60,
            "end": 61,
            "id": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 63,
            "end": 64,
            "id": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 66,
            "end": 68,
            "id": {
              "type": "Literal",
              "start": 66,
              "end": 68,
              "value": "",
              "raw": "\"\""
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
      "type": "EmptyStatement",
      "start": 70,
      "end": 71
    },
    {
      "type": "VariableDeclaration",
      "start": 90,
      "end": 119,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 118,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 106,
            "decorators": [],
            "name": "ResultIsAny1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 109,
            "end": 118,
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "start": 114,
              "end": 118,
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 150,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 149,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 136,
            "decorators": [],
            "name": "ResultIsAny2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 139,
            "end": 149,
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "start": 144,
              "end": 149,
              "decorators": [],
              "name": "ENUM1",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 177,
      "end": 212,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 181,
          "end": 211,
          "id": {
            "type": "Identifier",
            "start": 181,
            "end": 193,
            "decorators": [],
            "name": "ResultIsAny3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 196,
            "end": 211,
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "start": 201,
              "end": 211,
              "object": {
                "type": "Identifier",
                "start": 201,
                "end": 206,
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 207,
                "end": 210,
                "value": "A",
                "raw": "\"A\""
              },
              "optional": false,
              "computed": true
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 213,
      "end": 260,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 259,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 229,
            "decorators": [],
            "name": "ResultIsAny4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 232,
            "end": 259,
            "operator": "void",
            "argument": {
              "type": "BinaryExpression",
              "start": 238,
              "end": 258,
              "left": {
                "type": "MemberExpression",
                "start": 238,
                "end": 245,
                "object": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 242,
                  "decorators": [],
                  "name": "ENUM",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 243,
                  "end": 244,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
                "computed": true
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "start": 248,
                "end": 258,
                "object": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 253,
                  "decorators": [],
                  "name": "ENUM1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 254,
                  "end": 257,
                  "value": "B",
                  "raw": "\"B\""
                },
                "optional": false,
                "computed": true
              }
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 290,
      "end": 324,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 294,
          "end": 323,
          "id": {
            "type": "Identifier",
            "start": 294,
            "end": 306,
            "decorators": [],
            "name": "ResultIsAny5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 309,
            "end": 323,
            "operator": "void",
            "argument": {
              "type": "UnaryExpression",
              "start": 314,
              "end": 323,
              "operator": "void",
              "argument": {
                "type": "Identifier",
                "start": 319,
                "end": 323,
                "decorators": [],
                "name": "ENUM",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 325,
      "end": 379,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 329,
          "end": 378,
          "id": {
            "type": "Identifier",
            "start": 329,
            "end": 341,
            "decorators": [],
            "name": "ResultIsAny6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 344,
            "end": 378,
            "operator": "void",
            "argument": {
              "type": "UnaryExpression",
              "start": 349,
              "end": 378,
              "operator": "void",
              "argument": {
                "type": "UnaryExpression",
                "start": 354,
                "end": 378,
                "operator": "void",
                "argument": {
                  "type": "BinaryExpression",
                  "start": 360,
                  "end": 377,
                  "left": {
                    "type": "MemberExpression",
                    "start": 360,
                    "end": 367,
                    "object": {
                      "type": "Identifier",
                      "start": 360,
                      "end": 364,
                      "decorators": [],
                      "name": "ENUM",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Literal",
                      "start": 365,
                      "end": 366,
                      "value": 0,
                      "raw": "0"
                    },
                    "optional": false,
                    "computed": true
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "start": 370,
                    "end": 377,
                    "object": {
                      "type": "Identifier",
                      "start": 370,
                      "end": 375,
                      "decorators": [],
                      "name": "ENUM1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 376,
                      "end": 377,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                },
                "prefix": true
              },
              "prefix": true
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 410,
      "end": 420,
      "expression": {
        "type": "UnaryExpression",
        "start": 410,
        "end": 419,
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "start": 415,
          "end": 419,
          "decorators": [],
          "name": "ENUM",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 421,
      "end": 432,
      "expression": {
        "type": "UnaryExpression",
        "start": 421,
        "end": 431,
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "start": 426,
          "end": 431,
          "decorators": [],
          "name": "ENUM1",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 433,
      "end": 449,
      "expression": {
        "type": "UnaryExpression",
        "start": 433,
        "end": 448,
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "start": 438,
          "end": 448,
          "object": {
            "type": "Identifier",
            "start": 438,
            "end": 443,
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 444,
            "end": 447,
            "value": "B",
            "raw": "\"B\""
          },
          "optional": false,
          "computed": true
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 450,
      "end": 467,
      "expression": {
        "type": "SequenceExpression",
        "start": 450,
        "end": 466,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 450,
            "end": 459,
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "start": 455,
              "end": 459,
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          {
            "type": "Identifier",
            "start": 461,
            "end": 466,
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
