__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 109,
  "end": 167,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 109,
      "end": 120,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 119,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 119,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 119,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 116,
                "end": 119
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 121,
      "end": 133,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 132,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 129,
            "end": 132,
            "callee": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 153,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 152,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 139,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 142,
            "end": 152,
            "callee": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 144,
                "end": 151,
                "value": "hello",
                "raw": "'hello'"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 154,
      "end": 167,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 166,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 159,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 162,
            "end": 166,
            "callee": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 164,
                "end": 165,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
