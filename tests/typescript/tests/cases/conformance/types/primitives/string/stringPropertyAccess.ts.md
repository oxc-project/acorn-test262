__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 133,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 10,
            "raw": "''",
            "value": ""
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 31,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 20,
            "end": 31,
            "arguments": [
              {
                "type": "Literal",
                "start": 29,
                "end": 30,
                "raw": "0",
                "value": 0
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 20,
              "end": 28,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 20,
                "end": 21,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 22,
                "end": 28,
                "decorators": [],
                "name": "charAt",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 68,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 67,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 41,
            "end": 67,
            "arguments": [
              {
                "type": "Literal",
                "start": 58,
                "end": 66,
                "raw": "'charAt'",
                "value": "charAt"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 41,
              "end": 57,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 43,
                "end": 57,
                "decorators": [],
                "name": "hasOwnProperty",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 70,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 74,
          "end": 92,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 75,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 78,
            "end": 92,
            "arguments": [
              {
                "type": "Literal",
                "start": 90,
                "end": 91,
                "raw": "0",
                "value": 0
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 78,
              "end": 89,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 80,
                "end": 88,
                "raw": "'charAt'",
                "value": "charAt"
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 132,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 102,
            "end": 132,
            "arguments": [
              {
                "type": "Literal",
                "start": 122,
                "end": 131,
                "raw": "'toFixed'",
                "value": "toFixed"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 102,
              "end": 121,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 102,
                "end": 103,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 104,
                "end": 120,
                "raw": "'hasOwnProperty'",
                "value": "hasOwnProperty"
              }
            },
            "optional": false,
            "typeArguments": null
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
