__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 34,
  "end": 521,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 34,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 43,
        "decorators": [],
        "name": "ENUM",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 44,
        "end": 47,
        "members": []
      },
      "const": false,
      "declare": false
    },
    {
      "type": "EmptyStatement",
      "start": 47,
      "end": 48
    },
    {
      "type": "TSEnumDeclaration",
      "start": 49,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 59,
        "decorators": [],
        "name": "ENUM1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 60,
        "end": 72,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 62,
            "end": 63,
            "id": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
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
            "start": 65,
            "end": 66,
            "id": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
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
            "start": 68,
            "end": 70,
            "id": {
              "type": "Literal",
              "start": 68,
              "end": 70,
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
      "start": 72,
      "end": 73
    },
    {
      "type": "VariableDeclaration",
      "start": 92,
      "end": 127,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 126,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 112,
            "decorators": [],
            "name": "ResultIsBoolean1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 115,
            "end": 126,
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "start": 122,
              "end": 126,
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
      "start": 128,
      "end": 164,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 163,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 148,
            "decorators": [],
            "name": "ResultIsBoolean2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 151,
            "end": 163,
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "start": 158,
              "end": 163,
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
      "start": 191,
      "end": 232,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 195,
          "end": 231,
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 211,
            "decorators": [],
            "name": "ResultIsBoolean3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 214,
            "end": 231,
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "start": 221,
              "end": 231,
              "object": {
                "type": "Identifier",
                "start": 221,
                "end": 226,
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 227,
                "end": 230,
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
      "start": 233,
      "end": 286,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 237,
          "end": 285,
          "id": {
            "type": "Identifier",
            "start": 237,
            "end": 253,
            "decorators": [],
            "name": "ResultIsBoolean4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 256,
            "end": 285,
            "operator": "delete",
            "argument": {
              "type": "BinaryExpression",
              "start": 264,
              "end": 284,
              "left": {
                "type": "MemberExpression",
                "start": 264,
                "end": 271,
                "object": {
                  "type": "Identifier",
                  "start": 264,
                  "end": 268,
                  "decorators": [],
                  "name": "ENUM",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 269,
                  "end": 270,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
                "computed": true
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "start": 274,
                "end": 284,
                "object": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 279,
                  "decorators": [],
                  "name": "ENUM1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 280,
                  "end": 283,
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
      "start": 318,
      "end": 360,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 359,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 338,
            "decorators": [],
            "name": "ResultIsBoolean5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 341,
            "end": 359,
            "operator": "delete",
            "argument": {
              "type": "UnaryExpression",
              "start": 348,
              "end": 359,
              "operator": "delete",
              "argument": {
                "type": "Identifier",
                "start": 355,
                "end": 359,
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
      "start": 361,
      "end": 428,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 365,
          "end": 427,
          "id": {
            "type": "Identifier",
            "start": 365,
            "end": 381,
            "decorators": [],
            "name": "ResultIsBoolean6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 384,
            "end": 427,
            "operator": "delete",
            "argument": {
              "type": "UnaryExpression",
              "start": 391,
              "end": 427,
              "operator": "delete",
              "argument": {
                "type": "UnaryExpression",
                "start": 398,
                "end": 427,
                "operator": "delete",
                "argument": {
                  "type": "BinaryExpression",
                  "start": 406,
                  "end": 426,
                  "left": {
                    "type": "MemberExpression",
                    "start": 406,
                    "end": 413,
                    "object": {
                      "type": "Identifier",
                      "start": 406,
                      "end": 410,
                      "decorators": [],
                      "name": "ENUM",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Literal",
                      "start": 411,
                      "end": 412,
                      "value": 0,
                      "raw": "0"
                    },
                    "optional": false,
                    "computed": true
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "start": 416,
                    "end": 426,
                    "object": {
                      "type": "Identifier",
                      "start": 416,
                      "end": 421,
                      "decorators": [],
                      "name": "ENUM1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Literal",
                      "start": 422,
                      "end": 425,
                      "value": "B",
                      "raw": "\"B\""
                    },
                    "optional": false,
                    "computed": true
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
      "start": 459,
      "end": 471,
      "expression": {
        "type": "UnaryExpression",
        "start": 459,
        "end": 470,
        "operator": "delete",
        "argument": {
          "type": "Identifier",
          "start": 466,
          "end": 470,
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
      "start": 472,
      "end": 485,
      "expression": {
        "type": "UnaryExpression",
        "start": 472,
        "end": 484,
        "operator": "delete",
        "argument": {
          "type": "Identifier",
          "start": 479,
          "end": 484,
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
      "start": 486,
      "end": 501,
      "expression": {
        "type": "UnaryExpression",
        "start": 486,
        "end": 500,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 493,
          "end": 500,
          "object": {
            "type": "Identifier",
            "start": 493,
            "end": 498,
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 499,
            "end": 500,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 502,
      "end": 521,
      "expression": {
        "type": "SequenceExpression",
        "start": 502,
        "end": 520,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 502,
            "end": 513,
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "start": 509,
              "end": 513,
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          {
            "type": "Identifier",
            "start": 515,
            "end": 520,
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
