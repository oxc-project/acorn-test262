__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 145,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
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
            "end": 9,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 11,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 36,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 19,
            "end": 36,
            "callee": {
              "type": "MemberExpression",
              "start": 19,
              "end": 34,
              "object": {
                "type": "Identifier",
                "start": 19,
                "end": 20,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 21,
                "end": 34,
                "name": "toExponential",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
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
      "start": 38,
      "end": 74,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 73,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 43,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 46,
            "end": 73,
            "callee": {
              "type": "MemberExpression",
              "start": 46,
              "end": 62,
              "object": {
                "type": "Identifier",
                "start": 46,
                "end": 47,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 48,
                "end": 62,
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
                "start": 63,
                "end": 72,
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
    },
    {
      "type": "VariableDeclaration",
      "start": 76,
      "end": 105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 80,
          "end": 104,
          "id": {
            "type": "Identifier",
            "start": 80,
            "end": 81,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 84,
            "end": 104,
            "callee": {
              "type": "MemberExpression",
              "start": 84,
              "end": 102,
              "object": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 86,
                "end": 101,
                "value": "toExponential",
                "raw": "'toExponential'"
              },
              "computed": true,
              "optional": false
            },
            "arguments": [],
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
      "start": 106,
      "end": 145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 144,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 114,
            "end": 144,
            "callee": {
              "type": "MemberExpression",
              "start": 114,
              "end": 133,
              "object": {
                "type": "Identifier",
                "start": 114,
                "end": 115,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 116,
                "end": 132,
                "value": "hasOwnProperty",
                "raw": "'hasOwnProperty'"
              },
              "computed": true,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 134,
                "end": 143,
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
