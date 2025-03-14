__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 119,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 15,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 15,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 7,
                "end": 15,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 7,
                  "end": 13
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 18,
            "end": 20,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 49,
      "expression": {
        "type": "CallExpression",
        "start": 22,
        "end": 48,
        "arguments": [
          {
            "type": "Literal",
            "start": 31,
            "end": 38,
            "raw": "\"hello\"",
            "value": "hello"
          },
          {
            "type": "Literal",
            "start": 40,
            "end": 47,
            "raw": "'world'",
            "value": "world"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 22,
          "end": 30,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 24,
            "end": 30,
            "decorators": [],
            "name": "concat",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 69,
      "expression": {
        "type": "CallExpression",
        "start": 51,
        "end": 68,
        "arguments": [
          {
            "type": "Literal",
            "start": 60,
            "end": 67,
            "raw": "'Hello'",
            "value": "Hello"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 51,
          "end": 59,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 53,
            "end": 59,
            "decorators": [],
            "name": "concat",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 99,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 98,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 79,
            "end": 98,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 83,
              "end": 88,
              "decorators": [],
              "name": "Array",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 88,
              "end": 96,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 89,
                  "end": 95
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 100,
      "end": 118,
      "expression": {
        "type": "CallExpression",
        "start": 100,
        "end": 117,
        "arguments": [
          {
            "type": "Literal",
            "start": 109,
            "end": 116,
            "raw": "'hello'",
            "value": "hello"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 100,
          "end": 108,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 100,
            "end": 101,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 102,
            "end": 108,
            "decorators": [],
            "name": "concat",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
