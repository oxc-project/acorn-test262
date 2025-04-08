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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 119,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 119,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 119,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 116,
                "end": 119
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 121,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 132,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 129,
            "end": 132,
            "callee": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
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
      "start": 134,
      "end": 153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 152,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 139,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 142,
            "end": 152,
            "callee": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 144,
                "end": 151,
                "value": "hello",
                "raw": "'hello'"
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
      "start": 154,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 166,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 159,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 162,
            "end": 166,
            "callee": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 164,
                "end": 165,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
