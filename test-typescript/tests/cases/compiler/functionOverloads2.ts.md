__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 132,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 34,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 24,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 16,
            "end": 24,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 18,
              "end": 24
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 25,
        "end": 33,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 27,
          "end": 33
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 35,
      "end": 69,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 47,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 48,
          "end": 59,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 51,
            "end": 59,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 53,
              "end": 59
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 60,
        "end": 68,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 62,
          "end": 68
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 70,
      "end": 112,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 98,
        "end": 112,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 100,
            "end": 110,
            "argument": {
              "type": "Identifier",
              "start": 107,
              "end": 110,
              "decorators": [],
              "name": "bar",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 82,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 83,
          "end": 91,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 86,
            "end": 91,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 88,
              "end": 91
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 92,
        "end": 97,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 94,
          "end": 97
        }
      }
    },
    {
      "type": "EmptyStatement",
      "start": 112,
      "end": 113
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 132,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 131,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 119,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 122,
            "end": 131,
            "arguments": [
              {
                "type": "Literal",
                "start": 126,
                "end": 130,
                "raw": "true",
                "value": true
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 122,
              "end": 125,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
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
