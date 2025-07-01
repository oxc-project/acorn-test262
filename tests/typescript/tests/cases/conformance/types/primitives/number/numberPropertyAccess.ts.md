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
            "value": 1,
            "raw": "1",
            "start": 8,
            "end": 9
          },
          "definite": false,
          "start": 4,
          "end": 9
        }
      ],
      "declare": false,
      "start": 0,
      "end": 10
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
            "start": 15,
            "end": 16
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
                "start": 19,
                "end": 20
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toExponential",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 34
              },
              "optional": false,
              "computed": false,
              "start": 19,
              "end": 34
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 19,
            "end": 36
          },
          "definite": false,
          "start": 15,
          "end": 36
        }
      ],
      "declare": false,
      "start": 11,
      "end": 37
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
            "start": 42,
            "end": 43
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
                "start": 46,
                "end": 47
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasOwnProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 62
              },
              "optional": false,
              "computed": false,
              "start": 46,
              "end": 62
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "toFixed",
                "raw": "'toFixed'",
                "start": 63,
                "end": 72
              }
            ],
            "optional": false,
            "start": 46,
            "end": 73
          },
          "definite": false,
          "start": 42,
          "end": 73
        }
      ],
      "declare": false,
      "start": 38,
      "end": 74
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
            "start": 80,
            "end": 81
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
                "start": 84,
                "end": 85
              },
              "property": {
                "type": "Literal",
                "value": "toExponential",
                "raw": "'toExponential'",
                "start": 86,
                "end": 101
              },
              "optional": false,
              "computed": true,
              "start": 84,
              "end": 102
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 84,
            "end": 104
          },
          "definite": false,
          "start": 80,
          "end": 104
        }
      ],
      "declare": false,
      "start": 76,
      "end": 105
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 111
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
                "start": 114,
                "end": 115
              },
              "property": {
                "type": "Literal",
                "value": "hasOwnProperty",
                "raw": "'hasOwnProperty'",
                "start": 116,
                "end": 132
              },
              "optional": false,
              "computed": true,
              "start": 114,
              "end": 133
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "toFixed",
                "raw": "'toFixed'",
                "start": 134,
                "end": 143
              }
            ],
            "optional": false,
            "start": 114,
            "end": 144
          },
          "definite": false,
          "start": 110,
          "end": 144
        }
      ],
      "declare": false,
      "start": 106,
      "end": 145
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 145
}
```
