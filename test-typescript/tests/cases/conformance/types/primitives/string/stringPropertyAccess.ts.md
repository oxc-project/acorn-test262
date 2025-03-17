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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 10,
            "value": "",
            "raw": "''"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 20,
            "end": 31,
            "callee": {
              "type": "MemberExpression",
              "start": 20,
              "end": 28,
              "object": {
                "type": "Identifier",
                "start": 20,
                "end": 21,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 22,
                "end": 28,
                "name": "charAt",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 29,
                "end": 30,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 41,
            "end": 67,
            "callee": {
              "type": "MemberExpression",
              "start": 41,
              "end": 57,
              "object": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 43,
                "end": 57,
                "name": "hasOwnProperty",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 58,
                "end": 66,
                "value": "charAt",
                "raw": "'charAt'"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 75,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 78,
            "end": 92,
            "callee": {
              "type": "MemberExpression",
              "start": 78,
              "end": 89,
              "object": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 80,
                "end": 88,
                "value": "charAt",
                "raw": "'charAt'"
              },
              "computed": true,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 90,
                "end": 91,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "name": "e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 102,
            "end": 132,
            "callee": {
              "type": "MemberExpression",
              "start": 102,
              "end": 121,
              "object": {
                "type": "Identifier",
                "start": 102,
                "end": 103,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 104,
                "end": 120,
                "value": "hasOwnProperty",
                "raw": "'hasOwnProperty'"
              },
              "computed": true,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 122,
                "end": 131,
                "value": "toFixed",
                "raw": "'toFixed'"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
