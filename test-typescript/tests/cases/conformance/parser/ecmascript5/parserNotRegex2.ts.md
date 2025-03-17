__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 129,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 20,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 42,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 44,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 64,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 84,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 83,
          "definite": false,
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
            "operator": "/",
            "left": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 81,
              "end": 82,
              "raw": "2",
              "value": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 85,
      "end": 128,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 85,
        "end": 127,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 92,
            "end": 95,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 101,
            "end": 110,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 107,
              "end": 110,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 116,
            "end": 125,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 122,
              "end": 125,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 85,
          "end": 86,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
