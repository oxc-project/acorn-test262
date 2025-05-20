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
      "body": {
        "type": "TSEnumBody",
        "start": 38,
        "end": 41,
        "members": []
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 37,
        "decorators": [],
        "name": "ENUM",
        "optional": false,
        "typeAnnotation": null
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
      "body": {
        "type": "TSEnumBody",
        "start": 54,
        "end": 66,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 56,
            "end": 57,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 59,
            "end": 60,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 62,
            "end": 64,
            "computed": false,
            "id": {
              "type": "Literal",
              "start": 62,
              "end": 64,
              "raw": "\"\"",
              "value": ""
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 53,
        "decorators": [],
        "name": "ENUM1",
        "optional": false,
        "typeAnnotation": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 105,
            "decorators": [],
            "name": "ResultIsNumber1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 108,
            "end": 113,
            "argument": {
              "type": "Identifier",
              "start": 109,
              "end": 113,
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 134,
            "decorators": [],
            "name": "ResultIsNumber2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 137,
            "end": 143,
            "argument": {
              "type": "Identifier",
              "start": 138,
              "end": 143,
              "decorators": [],
              "name": "ENUM1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 190,
            "decorators": [],
            "name": "ResultIsNumber3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 193,
            "end": 204,
            "argument": {
              "type": "MemberExpression",
              "start": 194,
              "end": 204,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 194,
                "end": 199,
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 200,
                "end": 203,
                "raw": "\"A\"",
                "value": "A"
              }
            },
            "operator": "+",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 210,
            "end": 225,
            "decorators": [],
            "name": "ResultIsNumber4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 228,
            "end": 251,
            "argument": {
              "type": "BinaryExpression",
              "start": 230,
              "end": 250,
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "start": 230,
                "end": 237,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 234,
                  "decorators": [],
                  "name": "ENUM",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 235,
                  "end": 236,
                  "raw": "0",
                  "value": 0
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 240,
                "end": 250,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 245,
                  "decorators": [],
                  "name": "ENUM1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 246,
                  "end": 249,
                  "raw": "\"B\"",
                  "value": "B"
                }
              }
            },
            "operator": "+",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 283,
      "end": 289,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 283,
        "end": 288,
        "argument": {
          "type": "Identifier",
          "start": 284,
          "end": 288,
          "decorators": [],
          "name": "ENUM",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "+",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 290,
      "end": 297,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 290,
        "end": 296,
        "argument": {
          "type": "Identifier",
          "start": 291,
          "end": 296,
          "decorators": [],
          "name": "ENUM1",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "+",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 298,
      "end": 307,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 298,
        "end": 306,
        "argument": {
          "type": "MemberExpression",
          "start": 299,
          "end": 306,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 299,
            "end": 304,
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 305,
            "end": 306,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "+",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 308,
      "end": 321,
      "directive": null,
      "expression": {
        "type": "SequenceExpression",
        "start": 308,
        "end": 320,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 308,
            "end": 313,
            "argument": {
              "type": "Identifier",
              "start": 309,
              "end": 313,
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "prefix": true
          },
          {
            "type": "Identifier",
            "start": 315,
            "end": 320,
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
