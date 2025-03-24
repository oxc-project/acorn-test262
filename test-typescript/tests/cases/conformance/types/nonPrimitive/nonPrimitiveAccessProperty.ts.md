__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 115,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 7,
                "end": 13
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 15,
      "end": 28,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 15,
        "end": 27,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 15,
          "end": 25,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 17,
            "end": 25,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 42,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 29,
        "end": 41,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 29,
          "end": 39,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 29,
            "end": 30,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 31,
            "end": 39,
            "decorators": [],
            "name": "nonExist",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 53,
      "end": 79,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 78,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 57,
            "end": 74,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 59,
                "end": 72,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 72,
                  "decorators": [],
                  "name": "destructuring",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 72,
                  "decorators": [],
                  "name": "destructuring",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 89,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 108,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 93,
            "end": 104,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "RestElement",
                "start": 95,
                "end": 102,
                "argument": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 102,
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
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
