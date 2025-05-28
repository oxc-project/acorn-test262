__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 20,
  "end": 226,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 20,
      "end": 31,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 30,
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
            "operator": "+",
            "argument": {
              "type": "Literal",
              "start": 29,
              "end": 30,
              "value": 1,
              "raw": "1"
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
      "start": 32,
      "end": 51,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 50,
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
            "operator": "+",
            "argument": {
              "type": "TSTypeAssertion",
              "start": 42,
              "end": 49,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 43,
                "end": 46
              },
              "expression": {
                "type": "Literal",
                "start": 47,
                "end": 49,
                "value": "",
                "raw": "\"\""
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
      "type": "TSEnumDeclaration",
      "start": 52,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 59,
        "end": 74,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 61,
            "end": 65,
            "id": {
              "type": "Identifier",
              "start": 61,
              "end": 65,
              "decorators": [],
              "name": "some",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 67,
            "end": 72,
            "id": {
              "type": "Identifier",
              "start": 67,
              "end": 72,
              "decorators": [],
              "name": "thing",
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
      "type": "EmptyStatement",
      "start": 74,
      "end": 75
    },
    {
      "type": "VariableDeclaration",
      "start": 76,
      "end": 92,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 80,
          "end": 91,
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
            "operator": "+",
            "argument": {
              "type": "MemberExpression",
              "start": 85,
              "end": 91,
              "object": {
                "type": "Identifier",
                "start": 85,
                "end": 86,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 87,
                "end": 91,
                "decorators": [],
                "name": "some",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
      "start": 129,
      "end": 142,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 141,
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
            "operator": "+",
            "argument": {
              "type": "Literal",
              "start": 138,
              "end": 141,
              "value": "3",
              "raw": "\"3\""
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
      "start": 161,
      "end": 174,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 173,
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
            "operator": "-",
            "argument": {
              "type": "Literal",
              "start": 170,
              "end": 173,
              "value": "3",
              "raw": "\"3\""
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
      "start": 194,
      "end": 207,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 206,
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
            "operator": "~",
            "argument": {
              "type": "Literal",
              "start": 203,
              "end": 206,
              "value": "3",
              "raw": "\"3\""
            },
            "prefix": true
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
