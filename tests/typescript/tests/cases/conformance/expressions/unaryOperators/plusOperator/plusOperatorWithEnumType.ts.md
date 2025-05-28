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
        "decorators": [],
        "name": "ENUM",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 38,
        "end": 41,
        "members": []
      },
      "const": false,
      "declare": false
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
        "decorators": [],
        "name": "ENUM1",
        "optional": false,
        "typeAnnotation": null
      },
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
            "start": 59,
            "end": 60,
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
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
      },
      "const": false,
      "declare": false
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 113,
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
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "start": 109,
              "end": 113,
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
      "start": 115,
      "end": 144,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 143,
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
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "start": 138,
              "end": 143,
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
      "start": 171,
      "end": 205,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 204,
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
            "operator": "+",
            "argument": {
              "type": "MemberExpression",
              "start": 194,
              "end": 204,
              "object": {
                "type": "Identifier",
                "start": 194,
                "end": 199,
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 200,
                "end": 203,
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
      "start": 206,
      "end": 252,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 210,
          "end": 251,
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
            "operator": "+",
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
                  "decorators": [],
                  "name": "ENUM",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 235,
                  "end": 236,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
                "computed": true
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
                  "decorators": [],
                  "name": "ENUM1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 246,
                  "end": 249,
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
      "type": "ExpressionStatement",
      "start": 283,
      "end": 289,
      "expression": {
        "type": "UnaryExpression",
        "start": 283,
        "end": 288,
        "operator": "+",
        "argument": {
          "type": "Identifier",
          "start": 284,
          "end": 288,
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
      "start": 290,
      "end": 297,
      "expression": {
        "type": "UnaryExpression",
        "start": 290,
        "end": 296,
        "operator": "+",
        "argument": {
          "type": "Identifier",
          "start": 291,
          "end": 296,
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
      "start": 298,
      "end": 307,
      "expression": {
        "type": "UnaryExpression",
        "start": 298,
        "end": 306,
        "operator": "+",
        "argument": {
          "type": "MemberExpression",
          "start": 299,
          "end": 306,
          "object": {
            "type": "Identifier",
            "start": 299,
            "end": 304,
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 305,
            "end": 306,
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
            "argument": {
              "type": "Identifier",
              "start": 309,
              "end": 313,
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null
            },
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
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
