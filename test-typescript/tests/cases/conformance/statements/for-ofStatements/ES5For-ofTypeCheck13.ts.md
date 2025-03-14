ES5For-ofTypeCheck13.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 37,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 25,
            "decorators": [],
            "name": "strSet",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 12,
              "end": 25,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 14,
                "end": 25,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 17,
                  "end": 25,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 18,
                      "end": 24
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 17,
                  "decorators": [],
                  "name": "Set",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 28,
            "end": 37,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 32,
              "end": 35,
              "decorators": [],
              "name": "Set",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 38,
      "end": 57,
      "expression": {
        "type": "CallExpression",
        "start": 38,
        "end": 57,
        "arguments": [
          {
            "type": "Literal",
            "start": 49,
            "end": 56,
            "raw": "'Hello'",
            "value": "Hello"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 38,
          "end": 48,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 38,
            "end": 44,
            "decorators": [],
            "name": "strSet",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 45,
            "end": 48,
            "decorators": [],
            "name": "add",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 58,
      "end": 77,
      "expression": {
        "type": "CallExpression",
        "start": 58,
        "end": 77,
        "arguments": [
          {
            "type": "Literal",
            "start": 69,
            "end": 76,
            "raw": "'World'",
            "value": "World"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 58,
          "end": 68,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 58,
            "end": 64,
            "decorators": [],
            "name": "strSet",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 65,
            "end": 68,
            "decorators": [],
            "name": "add",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ForOfStatement",
      "start": 78,
      "end": 107,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 104,
        "end": 107,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 83,
        "end": 92,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 89,
            "end": 92,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 89,
              "end": 92,
              "decorators": [],
              "name": "str",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "Identifier",
        "start": 96,
        "end": 102,
        "decorators": [],
        "name": "strSet",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
