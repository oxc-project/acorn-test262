__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 28,
  "end": 321,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 28,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 37,
        "name": "ENUM",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 38,
        "end": 41,
        "members": []
      }
    },
    {
      "type": "EmptyStatement",
      "start": 41,
      "end": 42
    },
    {
      "type": "TSEnumDeclaration",
      "start": 43,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 53,
        "name": "ENUM1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 56,
          "end": 57,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 59,
          "end": 60,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 62,
          "end": 64,
          "id": {
            "type": "Literal",
            "start": 62,
            "end": 64,
            "value": "",
            "raw": "\"\""
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 54,
        "end": 66,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 56,
            "end": 57,
            "id": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 59,
            "end": 60,
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 62,
            "end": 64,
            "id": {
              "type": "Literal",
              "start": 62,
              "end": 64,
              "value": "",
              "raw": "\"\""
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "EmptyStatement",
      "start": 66,
      "end": 67
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 113,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 105,
            "name": "ResultIsNumber1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 108,
            "end": 113,
            "operator": "+",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 109,
              "end": 113,
              "name": "ENUM",
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
      "start": 115,
      "end": 144,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 143,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 134,
            "name": "ResultIsNumber2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 137,
            "end": 143,
            "operator": "+",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 138,
              "end": 143,
              "name": "ENUM1",
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
      "start": 171,
      "end": 205,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 204,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 190,
            "name": "ResultIsNumber3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 193,
            "end": 204,
            "operator": "+",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 194,
              "end": 204,
              "object": {
                "type": "Identifier",
                "start": 194,
                "end": 199,
                "name": "ENUM1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 200,
                "end": 203,
                "value": "A",
                "raw": "\"A\""
              },
              "computed": true,
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
      "start": 206,
      "end": 252,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 210,
          "end": 251,
          "id": {
            "type": "Identifier",
            "start": 210,
            "end": 225,
            "name": "ResultIsNumber4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 228,
            "end": 251,
            "operator": "+",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 230,
              "end": 250,
              "left": {
                "type": "MemberExpression",
                "start": 230,
                "end": 237,
                "object": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 234,
                  "name": "ENUM",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 235,
                  "end": 236,
                  "value": 0,
                  "raw": "0"
                },
                "computed": true,
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "start": 240,
                "end": 250,
                "object": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 245,
                  "name": "ENUM1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 246,
                  "end": 249,
                  "value": "B",
                  "raw": "\"B\""
                },
                "computed": true,
                "optional": false
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 283,
      "end": 289,
      "expression": {
        "type": "UnaryExpression",
        "start": 283,
        "end": 288,
        "operator": "+",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 284,
          "end": 288,
          "name": "ENUM",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 290,
      "end": 297,
      "expression": {
        "type": "UnaryExpression",
        "start": 290,
        "end": 296,
        "operator": "+",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 291,
          "end": 296,
          "name": "ENUM1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 298,
      "end": 307,
      "expression": {
        "type": "UnaryExpression",
        "start": 298,
        "end": 306,
        "operator": "+",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 299,
          "end": 306,
          "object": {
            "type": "Identifier",
            "start": 299,
            "end": 304,
            "name": "ENUM1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 305,
            "end": 306,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 308,
      "end": 321,
      "expression": {
        "type": "SequenceExpression",
        "start": 308,
        "end": 320,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 308,
            "end": 313,
            "operator": "+",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 309,
              "end": 313,
              "name": "ENUM",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Identifier",
            "start": 315,
            "end": 320,
            "name": "ENUM1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
