__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 29,
  "end": 192,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 29,
      "end": 52,
      "body": {
        "type": "TSEnumBody",
        "start": 40,
        "end": 52,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 42,
            "end": 43,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 45,
            "end": 46,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 48,
            "end": 50,
            "computed": false,
            "id": {
              "type": "Literal",
              "start": 48,
              "end": 50,
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
        "start": 34,
        "end": 39,
        "decorators": [],
        "name": "ENUM1",
        "optional": false,
        "typeAnnotation": null
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
          "definite": false,
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
            "argument": {
              "type": "MemberExpression",
              "start": 93,
              "end": 103,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 93,
                "end": 98,
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 99,
                "end": 102,
                "raw": "\"B\"",
                "value": "B"
              }
            },
            "operator": "++",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "MemberExpression",
              "start": 127,
              "end": 134,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 127,
                "end": 132,
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "++",
            "prefix": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 167,
      "end": 180,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 167,
        "end": 179,
        "argument": {
          "type": "MemberExpression",
          "start": 169,
          "end": 179,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 169,
            "end": 174,
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 175,
            "end": 178,
            "raw": "\"B\"",
            "value": "B"
          }
        },
        "operator": "++",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 182,
      "end": 192,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 182,
        "end": 191,
        "argument": {
          "type": "MemberExpression",
          "start": 182,
          "end": 189,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 182,
            "end": 187,
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 188,
            "end": 189,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "++",
        "prefix": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
