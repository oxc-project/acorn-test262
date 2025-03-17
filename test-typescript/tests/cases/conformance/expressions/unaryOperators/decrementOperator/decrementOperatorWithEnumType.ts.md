__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 29,
  "end": 194,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 29,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 39,
        "name": "ENUM1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 42,
          "end": 43,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 43,
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
          "start": 45,
          "end": 46,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 46,
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
      ],
      "const": false,
      "declare": false,
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
            "start": 45,
            "end": 46,
            "id": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
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
      }
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 103,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 88,
            "name": "ResultIsNumber1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "ENUM1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 99,
                "end": 102,
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
      "start": 105,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 109,
          "end": 136,
          "id": {
            "type": "Identifier",
            "start": 109,
            "end": 124,
            "name": "ResultIsNumber2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "ENUM1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
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
            "name": "ENUM1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 175,
            "end": 178,
            "value": "A",
            "raw": "\"A\""
          },
          "computed": true,
          "optional": false
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
            "name": "ENUM1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 188,
            "end": 189,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
