__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 25
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 29,
              "end": 30
            },
            "prefix": true,
            "start": 28,
            "end": 30
          },
          "definite": false,
          "start": 24,
          "end": 30
        }
      ],
      "declare": false,
      "start": 20,
      "end": 31
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 37
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 43,
                "end": 46
              },
              "expression": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 47,
                "end": 49
              },
              "start": 42,
              "end": 49
            },
            "prefix": true,
            "start": 40,
            "end": 50
          },
          "definite": false,
          "start": 36,
          "end": 50
        }
      ],
      "declare": false,
      "start": 32,
      "end": 51
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 58
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "some",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 65
            },
            "initializer": null,
            "computed": false,
            "start": 61,
            "end": 65
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "thing",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 72
            },
            "initializer": null,
            "computed": false,
            "start": 67,
            "end": 72
          }
        ],
        "start": 59,
        "end": 74
      },
      "const": false,
      "declare": false,
      "start": 52,
      "end": 74
    },
    {
      "type": "EmptyStatement",
      "start": 74,
      "end": 75
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 81
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 86
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "some",
                "optional": false,
                "typeAnnotation": null,
                "start": 87,
                "end": 91
              },
              "optional": false,
              "computed": false,
              "start": 85,
              "end": 91
            },
            "prefix": true,
            "start": 84,
            "end": 91
          },
          "definite": false,
          "start": 80,
          "end": 91
        }
      ],
      "declare": false,
      "start": 76,
      "end": 92
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 133,
            "end": 134
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Literal",
              "value": "3",
              "raw": "\"3\"",
              "start": 138,
              "end": 141
            },
            "prefix": true,
            "start": 137,
            "end": 141
          },
          "definite": false,
          "start": 133,
          "end": 141
        }
      ],
      "declare": false,
      "start": 129,
      "end": 142
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 166
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Literal",
              "value": "3",
              "raw": "\"3\"",
              "start": 170,
              "end": 173
            },
            "prefix": true,
            "start": 169,
            "end": 173
          },
          "definite": false,
          "start": 165,
          "end": 173
        }
      ],
      "declare": false,
      "start": 161,
      "end": 174
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 198,
            "end": 199
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Literal",
              "value": "3",
              "raw": "\"3\"",
              "start": 203,
              "end": 206
            },
            "prefix": true,
            "start": 202,
            "end": 206
          },
          "definite": false,
          "start": 198,
          "end": 206
        }
      ],
      "declare": false,
      "start": 194,
      "end": 207
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 20,
  "end": 226
}
```
