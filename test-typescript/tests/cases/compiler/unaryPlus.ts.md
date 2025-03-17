__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 20,
  "end": 227,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 20,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 30,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 28,
            "end": 30,
            "argument": {
              "type": "Literal",
              "start": 29,
              "end": 30,
              "raw": "1",
              "value": 1
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
      "start": 32,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 50,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 40,
            "end": 50,
            "argument": {
              "type": "TSTypeAssertion",
              "start": 42,
              "end": 49,
              "expression": {
                "type": "Literal",
                "start": 47,
                "end": 49,
                "raw": "\"\"",
                "value": ""
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 43,
                "end": 46
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
      "type": "TSEnumDeclaration",
      "start": 52,
      "end": 74,
      "body": {
        "type": "TSEnumBody",
        "start": 59,
        "end": 74,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 61,
            "end": 65,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 61,
              "end": 65,
              "decorators": [],
              "name": "some",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 67,
            "end": 72,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 67,
              "end": 72,
              "decorators": [],
              "name": "thing",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "EmptyStatement",
      "start": 74,
      "end": 75
    },
    {
      "type": "VariableDeclaration",
      "start": 76,
      "end": 92,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 80,
          "end": 91,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 80,
            "end": 81,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 84,
            "end": 91,
            "argument": {
              "type": "MemberExpression",
              "start": 85,
              "end": 91,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 85,
                "end": 86,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 87,
                "end": 91,
                "decorators": [],
                "name": "some",
                "optional": false,
                "typeAnnotation": null
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
      "start": 129,
      "end": 142,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 141,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 134,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 137,
            "end": 141,
            "argument": {
              "type": "Literal",
              "start": 138,
              "end": 141,
              "raw": "\"3\"",
              "value": "3"
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
      "start": 161,
      "end": 174,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 173,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 166,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 169,
            "end": 173,
            "argument": {
              "type": "Literal",
              "start": 170,
              "end": 173,
              "raw": "\"3\"",
              "value": "3"
            },
            "operator": "-",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 194,
      "end": 207,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 206,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 199,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 202,
            "end": 206,
            "argument": {
              "type": "Literal",
              "start": 203,
              "end": 206,
              "raw": "\"3\"",
              "value": "3"
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
