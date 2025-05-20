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
            "end": 9,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 19,
            "end": 36,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 19,
              "end": 34,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 19,
                "end": 20,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 21,
                "end": 34,
                "decorators": [],
                "name": "toExponential",
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
      "start": 38,
      "end": 74,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 73,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 43,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 46,
            "end": 73,
            "arguments": [
              {
                "type": "Literal",
                "start": 63,
                "end": 72,
                "raw": "'toFixed'",
                "value": "toFixed"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 46,
              "end": 62,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 46,
                "end": 47,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 48,
                "end": 62,
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
      "start": 76,
      "end": 105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 80,
          "end": 104,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 80,
            "end": 81,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 84,
            "end": 104,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 84,
              "end": 102,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 86,
                "end": 101,
                "raw": "'toExponential'",
                "value": "toExponential"
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
      "start": 106,
      "end": 145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 144,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 114,
            "end": 144,
            "arguments": [
              {
                "type": "Literal",
                "start": 134,
                "end": 143,
                "raw": "'toFixed'",
                "value": "toFixed"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 114,
              "end": 133,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 114,
                "end": 115,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 116,
                "end": 132,
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
