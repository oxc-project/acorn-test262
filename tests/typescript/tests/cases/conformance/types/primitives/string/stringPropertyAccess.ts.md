__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 8,
            "end": 10
          },
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 17
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 20,
                "end": 21
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "charAt",
                "optional": false,
                "typeAnnotation": null,
                "start": 22,
                "end": 28
              },
              "optional": false,
              "computed": false,
              "start": 20,
              "end": 28
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 29,
                "end": 30
              }
            ],
            "optional": false,
            "start": 20,
            "end": 31
          },
          "definite": false,
          "start": 16,
          "end": 31
        }
      ],
      "declare": false,
      "start": 12,
      "end": 32
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 38
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 42
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasOwnProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 57
              },
              "optional": false,
              "computed": false,
              "start": 41,
              "end": 57
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "charAt",
                "raw": "'charAt'",
                "start": 58,
                "end": 66
              }
            ],
            "optional": false,
            "start": 41,
            "end": 67
          },
          "definite": false,
          "start": 37,
          "end": 67
        }
      ],
      "declare": false,
      "start": 33,
      "end": 68
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 75
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 79
              },
              "property": {
                "type": "Literal",
                "value": "charAt",
                "raw": "'charAt'",
                "start": 80,
                "end": 88
              },
              "optional": false,
              "computed": true,
              "start": 78,
              "end": 89
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 90,
                "end": 91
              }
            ],
            "optional": false,
            "start": 78,
            "end": 92
          },
          "definite": false,
          "start": 74,
          "end": 92
        }
      ],
      "declare": false,
      "start": 70,
      "end": 93
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 99
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 102,
                "end": 103
              },
              "property": {
                "type": "Literal",
                "value": "hasOwnProperty",
                "raw": "'hasOwnProperty'",
                "start": 104,
                "end": 120
              },
              "optional": false,
              "computed": true,
              "start": 102,
              "end": 121
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "toFixed",
                "raw": "'toFixed'",
                "start": 122,
                "end": 131
              }
            ],
            "optional": false,
            "start": 102,
            "end": 132
          },
          "definite": false,
          "start": 98,
          "end": 132
        }
      ],
      "declare": false,
      "start": 94,
      "end": 133
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 133
}
```
