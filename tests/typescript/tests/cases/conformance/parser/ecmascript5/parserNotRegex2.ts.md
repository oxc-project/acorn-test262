__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 128,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 20,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 43,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 42,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 42,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 42,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 39,
                "end": 42
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 44,
      "end": 65,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 64,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 64,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 64,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 61,
                "end": 64
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 84,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 83,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 77,
            "end": 82,
            "left": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "/",
            "right": {
              "type": "Literal",
              "start": 81,
              "end": 82,
              "value": 2,
              "raw": "2"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 85,
      "end": 128,
      "expression": {
        "type": "CallExpression",
        "start": 85,
        "end": 127,
        "callee": {
          "type": "Identifier",
          "start": 85,
          "end": 86,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 92,
            "end": 95,
            "callee": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 101,
            "end": 110,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 107,
              "end": 110,
              "body": []
            },
            "id": null,
            "generator": false
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 116,
            "end": 125,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 122,
              "end": 125,
              "body": []
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
