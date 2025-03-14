__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 126,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 32,
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
          "end": 23,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 16,
            "end": 23,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 17,
              "end": 23
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 24,
        "end": 31,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 25,
          "end": 31
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 33,
      "end": 65,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 45,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 46,
          "end": 56,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 49,
            "end": 56,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 50,
              "end": 56
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 57,
        "end": 64,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 58,
          "end": 64
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 66,
      "end": 105,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 91,
        "end": 105,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 93,
            "end": 103,
            "argument": {
              "type": "Identifier",
              "start": 100,
              "end": 103,
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
        "start": 75,
        "end": 78,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 79,
          "end": 86,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 82,
            "end": 86,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 83,
              "end": 86
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 87,
        "end": 91,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 88,
          "end": 91
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 106,
      "end": 125,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 124,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 114,
            "end": 124,
            "arguments": [
              {
                "type": "Literal",
                "start": 118,
                "end": 123,
                "raw": "'bar'",
                "value": "bar"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 114,
              "end": 117,
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
