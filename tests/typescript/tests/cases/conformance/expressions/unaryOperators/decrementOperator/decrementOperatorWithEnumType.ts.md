__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 29,
  "end": 193,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 29,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 39,
        "decorators": [],
        "name": "ENUM1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 40,
        "end": 52,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 42,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
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
            "start": 45,
            "end": 46,
            "id": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
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
            "start": 48,
            "end": 50,
            "id": {
              "type": "Literal",
              "start": 48,
              "end": 50,
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
      "start": 52,
      "end": 53
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 104,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 103,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 88,
            "decorators": [],
            "name": "ResultIsNumber1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UpdateExpression",
            "start": 91,
            "end": 103,
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 93,
              "end": 103,
              "object": {
                "type": "Identifier",
                "start": 93,
                "end": 98,
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 99,
                "end": 102,
                "value": "A",
                "raw": "\"A\""
              },
              "optional": false,
              "computed": true
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 105,
      "end": 137,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 109,
          "end": 136,
          "id": {
            "type": "Identifier",
            "start": 109,
            "end": 124,
            "decorators": [],
            "name": "ResultIsNumber2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UpdateExpression",
            "start": 127,
            "end": 136,
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "start": 127,
              "end": 134,
              "object": {
                "type": "Identifier",
                "start": 127,
                "end": 132,
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 167,
      "end": 180,
      "expression": {
        "type": "UpdateExpression",
        "start": 167,
        "end": 179,
        "operator": "--",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 169,
          "end": 179,
          "object": {
            "type": "Identifier",
            "start": 169,
            "end": 174,
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 175,
            "end": 178,
            "value": "A",
            "raw": "\"A\""
          },
          "optional": false,
          "computed": true
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 182,
      "end": 193,
      "expression": {
        "type": "UpdateExpression",
        "start": 182,
        "end": 192,
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "start": 182,
          "end": 190,
          "object": {
            "type": "Identifier",
            "start": 182,
            "end": 187,
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 188,
            "end": 189,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": true
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
