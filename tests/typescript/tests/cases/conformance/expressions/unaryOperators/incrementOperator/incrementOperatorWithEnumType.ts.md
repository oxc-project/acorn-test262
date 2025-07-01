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
        "name": "ENUM1",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 39
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
              "start": 42,
              "end": 43
            },
            "initializer": null,
            "computed": false,
            "start": 42,
            "end": 43
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 46
            },
            "initializer": null,
            "computed": false,
            "start": 45,
            "end": 46
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 48,
              "end": 50
            },
            "initializer": null,
            "computed": false,
            "start": 48,
            "end": 50
          }
        ],
        "start": 40,
        "end": 52
      },
      "const": false,
      "declare": false,
      "start": 29,
      "end": 52
    },
    {
      "type": "EmptyStatement",
      "start": 52,
      "end": 53
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
            "name": "ResultIsNumber1",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 88
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 98
              },
              "property": {
                "type": "Literal",
                "value": "B",
                "raw": "\"B\"",
                "start": 99,
                "end": 102
              },
              "optional": false,
              "computed": true,
              "start": 93,
              "end": 103
            },
            "start": 91,
            "end": 103
          },
          "definite": false,
          "start": 73,
          "end": 103
        }
      ],
      "declare": false,
      "start": 69,
      "end": 104
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
            "name": "ResultIsNumber2",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 124
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 132
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 134
              },
              "optional": false,
              "computed": false,
              "start": 127,
              "end": 134
            },
            "start": 127,
            "end": 136
          },
          "definite": false,
          "start": 109,
          "end": 136
        }
      ],
      "declare": false,
      "start": 105,
      "end": 137
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 174
          },
          "property": {
            "type": "Literal",
            "value": "B",
            "raw": "\"B\"",
            "start": 175,
            "end": 178
          },
          "optional": false,
          "computed": true,
          "start": 169,
          "end": 179
        },
        "start": 167,
        "end": 179
      },
      "directive": null,
      "start": 167,
      "end": 180
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 187
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 189
          },
          "optional": false,
          "computed": false,
          "start": 182,
          "end": 189
        },
        "start": 182,
        "end": 191
      },
      "directive": null,
      "start": 182,
      "end": 192
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 29,
  "end": 192
}
```
