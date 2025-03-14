__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 29,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 29,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 19,
            "end": 28,
            "argument": {
              "type": "Literal",
              "start": 26,
              "end": 28,
              "raw": "\"\"",
              "value": ""
            }
          }
        ]
      },
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
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 14,
        "end": 18,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 15,
          "end": 18
        }
      }
    },
    {
      "type": "EmptyStatement",
      "start": 29,
      "end": 30
    },
    {
      "type": "FunctionDeclaration",
      "start": 32,
      "end": 66,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 54,
        "end": 66,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 55,
            "end": 65,
            "argument": {
              "type": "Identifier",
              "start": 62,
              "end": 65,
              "decorators": [],
              "name": "foo",
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
        "start": 41,
        "end": 44,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 46,
        "end": 54,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 47,
          "end": 54,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 49,
            "end": 54,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 51,
              "end": 54
            }
          }
        }
      }
    },
    {
      "type": "EmptyStatement",
      "start": 66,
      "end": 67
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 82,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 74,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 77,
            "end": 82,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 77,
              "end": 80,
              "decorators": [],
              "name": "bar",
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
