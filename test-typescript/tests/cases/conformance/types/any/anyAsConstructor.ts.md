__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 109,
  "end": 255,
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
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 136,
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
            "type": "NewExpression",
            "start": 129,
            "end": 136,
            "callee": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
      "start": 138,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 160,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 146,
            "end": 160,
            "callee": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 152,
                "end": 159,
                "value": "hello",
                "raw": "'hello'"
              }
            ],
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
      "start": 162,
      "end": 179,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 178,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 167,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 170,
            "end": 178,
            "callee": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 176,
                "end": 177,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
      "start": 221,
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 225,
          "end": 242,
          "id": {
            "type": "Identifier",
            "start": 225,
            "end": 226,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 229,
            "end": 242,
            "callee": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 240,
                "end": 241,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 234,
              "end": 239,
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 235,
                  "end": 238
                }
              ]
            }
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
