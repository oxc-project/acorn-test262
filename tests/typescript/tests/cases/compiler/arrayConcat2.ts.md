__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 118,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 20,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 49,
      "expression": {
        "type": "CallExpression",
        "start": 22,
        "end": 48,
        "callee": {
          "type": "MemberExpression",
          "start": 22,
          "end": 30,
          "object": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 24,
            "end": 30,
            "decorators": [],
            "name": "concat",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 31,
            "end": 38,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "Literal",
            "start": 40,
            "end": 47,
            "value": "world",
            "raw": "'world'"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 69,
      "expression": {
        "type": "CallExpression",
        "start": 51,
        "end": 68,
        "callee": {
          "type": "MemberExpression",
          "start": 51,
          "end": 59,
          "object": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 53,
            "end": 59,
            "decorators": [],
            "name": "concat",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 60,
            "end": 67,
            "value": "Hello",
            "raw": "'Hello'"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 99,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 98,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 79,
            "end": 98,
            "callee": {
              "type": "Identifier",
              "start": 83,
              "end": 88,
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null
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
            },
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 100,
      "end": 118,
      "expression": {
        "type": "CallExpression",
        "start": 100,
        "end": 117,
        "callee": {
          "type": "MemberExpression",
          "start": 100,
          "end": 108,
          "object": {
            "type": "Identifier",
            "start": 100,
            "end": 101,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 102,
            "end": 108,
            "decorators": [],
            "name": "concat",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 109,
            "end": 116,
            "value": "hello",
            "raw": "'hello'"
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
