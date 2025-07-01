__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "start": 14,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 20
        }
      ],
      "declare": true,
      "start": 0,
      "end": 21
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 39,
                "end": 42
              },
              "start": 37,
              "end": 42
            },
            "start": 36,
            "end": 42
          },
          "init": null,
          "definite": false,
          "start": 36,
          "end": 42
        }
      ],
      "declare": true,
      "start": 22,
      "end": 43
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 61,
                "end": 64
              },
              "start": 59,
              "end": 64
            },
            "start": 58,
            "end": 64
          },
          "init": null,
          "definite": false,
          "start": 58,
          "end": 64
        }
      ],
      "declare": true,
      "start": 44,
      "end": 65
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 73
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 78
            },
            "operator": "/",
            "right": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 81,
              "end": 82
            },
            "start": 77,
            "end": 82
          },
          "definite": false,
          "start": 72,
          "end": 83
        }
      ],
      "declare": false,
      "start": 66,
      "end": 84
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 85,
          "end": 86
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 93
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 92,
            "end": 95
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 107,
              "end": 110
            },
            "id": null,
            "generator": false,
            "start": 101,
            "end": 110
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 122,
              "end": 125
            },
            "id": null,
            "generator": false,
            "start": 116,
            "end": 125
          }
        ],
        "optional": false,
        "start": 85,
        "end": 127
      },
      "directive": null,
      "start": 85,
      "end": 128
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 128
}
```
