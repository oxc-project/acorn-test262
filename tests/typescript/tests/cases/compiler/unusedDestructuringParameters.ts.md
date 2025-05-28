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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 22,
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
            "expression": false,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "BlockStatement",
              "start": 19,
              "end": 22,
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
      "start": 24,
      "end": 31,
      "expression": {
        "type": "CallExpression",
        "start": 24,
        "end": 30,
        "callee": {
          "type": "Identifier",
          "start": 24,
          "end": 25,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "value": 1,
                "raw": "1"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 32,
      "end": 56,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 55,
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
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 44,
                "end": 47,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 45,
                    "end": 46,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 46,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 46,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 52,
              "end": 55,
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
      "start": 57,
      "end": 71,
      "expression": {
        "type": "CallExpression",
        "start": 57,
        "end": 70,
        "callee": {
          "type": "Identifier",
          "start": 57,
          "end": 59,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 65,
                  "end": 67,
                  "value": 10,
                  "raw": "10"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 72,
      "end": 96,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 95,
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
            "expression": false,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "BlockStatement",
              "start": 92,
              "end": 95,
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
      "start": 97,
      "end": 106,
      "expression": {
        "type": "CallExpression",
        "start": 97,
        "end": 105,
        "callee": {
          "type": "Identifier",
          "start": 97,
          "end": 99,
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "value": 10,
                "raw": "10"
              }
            ]
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
