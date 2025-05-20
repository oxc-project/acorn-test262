__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 22,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 10,
            "end": 22,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 19,
              "end": 22,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ArrayPattern",
                "start": 11,
                "end": 14,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 12,
                    "end": 13,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 24,
      "end": 31,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 24,
        "end": 30,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 26,
            "end": 29,
            "elements": [
              {
                "type": "Literal",
                "start": 27,
                "end": 28,
                "raw": "1",
                "value": 1
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 24,
          "end": 25,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 32,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 55,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 40,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 43,
            "end": 55,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 52,
              "end": 55,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 44,
                "end": 47,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 45,
                    "end": 46,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 46,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 46,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 57,
      "end": 71,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 57,
        "end": 70,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 60,
            "end": 69,
            "properties": [
              {
                "type": "Property",
                "start": 62,
                "end": 67,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 65,
                  "end": 67,
                  "raw": "10",
                  "value": 10
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 57,
          "end": 59,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 72,
      "end": 96,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 95,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 80,
            "decorators": [],
            "name": "f3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 83,
            "end": 95,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 92,
              "end": 95,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ArrayPattern",
                "start": 84,
                "end": 87,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 85,
                    "end": 86,
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 97,
      "end": 106,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 97,
        "end": 105,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 100,
            "end": 104,
            "elements": [
              {
                "type": "Literal",
                "start": 101,
                "end": 103,
                "raw": "10",
                "value": 10
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 97,
          "end": 99,
          "decorators": [],
          "name": "f3",
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
