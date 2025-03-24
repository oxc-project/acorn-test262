__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 137,
  "body": [
    {
      "type": "ForStatement",
      "start": 0,
      "end": 137,
      "init": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 14,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 14,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 13,
              "end": 14,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 16,
        "end": 22,
        "left": {
          "type": "Identifier",
          "start": 16,
          "end": 17,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 20,
          "end": 22,
          "value": 10,
          "raw": "10"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 24,
        "end": 27,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 24,
          "end": 25,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 137,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 35,
            "end": 67,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 39,
                "end": 48,
                "id": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 42,
                  "name": "str",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 45,
                  "end": 48,
                  "value": "x",
                  "raw": "'x'"
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 50,
                "end": 66,
                "id": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 53,
                  "name": "len",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 56,
                  "end": 66,
                  "object": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 59,
                    "name": "str",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 66,
                    "name": "length",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 72,
            "end": 97,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 76,
                "end": 96,
                "id": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 83,
                  "name": "lambda1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 86,
                  "end": 96,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 87,
                      "end": 88,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 93,
                    "end": 96,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 102,
            "end": 135,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 106,
                "end": 134,
                "id": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 113,
                  "name": "lambda2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 116,
                  "end": 134,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "CallExpression",
                    "start": 122,
                    "end": 134,
                    "callee": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 129,
                      "name": "lambda1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 130,
                        "end": 133,
                        "name": "len",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
