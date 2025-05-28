__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 50,
  "end": 436,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 67,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 67,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 60,
            "end": 67,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "start": 66,
              "end": 67,
              "value": 0,
              "raw": "0"
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 142,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 142,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 129,
            "end": 142,
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "start": 141,
              "end": 142,
              "value": 0,
              "raw": "0"
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 196,
      "end": 231,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 202,
          "end": 231,
          "id": {
            "type": "Identifier",
            "start": 202,
            "end": 203,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 206,
            "end": 231,
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 218,
              "end": 231,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 221,
                  "end": 229,
                  "argument": {
                    "type": "Literal",
                    "start": 228,
                    "end": 229,
                    "value": 0,
                    "raw": "0"
                  }
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 283,
      "end": 319,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 289,
          "end": 319,
          "id": {
            "type": "Identifier",
            "start": 289,
            "end": 290,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 293,
            "end": 319,
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 305,
              "end": 319,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 308,
                  "end": 317,
                  "argument": {
                    "type": "Literal",
                    "start": 315,
                    "end": 317,
                    "value": "",
                    "raw": "\"\""
                  }
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 371,
      "end": 390,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 377,
          "end": 390,
          "id": {
            "type": "Identifier",
            "start": 377,
            "end": 378,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 381,
            "end": 390,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 382,
                "end": 383,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 388,
              "end": 390,
              "body": []
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 408,
      "end": 436,
      "expression": {
        "type": "CallExpression",
        "start": 408,
        "end": 436,
        "callee": {
          "type": "Identifier",
          "start": 408,
          "end": 409,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 410,
            "end": 435,
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 422,
              "end": 435,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 425,
                  "end": 433,
                  "argument": {
                    "type": "Literal",
                    "start": 432,
                    "end": 433,
                    "value": 0,
                    "raw": "0"
                  }
                }
              ]
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
