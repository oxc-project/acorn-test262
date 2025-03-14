__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 66,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 10,
            "end": 66,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 23,
                "end": 64,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 46,
                  "end": 64,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 48,
                      "end": 62,
                      "expression": {
                        "type": "CallExpression",
                        "start": 48,
                        "end": 61,
                        "arguments": [
                          {
                            "type": "ObjectExpression",
                            "start": 57,
                            "end": 59,
                            "properties": []
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 48,
                          "end": 55,
                          "decorators": [],
                          "name": "resolve",
                          "optional": false
                        },
                        "optional": false
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 25,
                    "end": 32,
                    "decorators": [],
                    "name": "resolve",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 34,
                    "end": 40,
                    "decorators": [],
                    "name": "reject",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 14,
              "end": 21,
              "decorators": [],
              "name": "Promise",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 68,
      "end": 85,
      "declaration": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "decorators": [],
        "name": "x",
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 77,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 20,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 19,
        "raw": "'./a'",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 76,
      "expression": {
        "type": "CallExpression",
        "start": 24,
        "end": 73,
        "arguments": [],
        "callee": {
          "type": "FunctionExpression",
          "start": 24,
          "end": 71,
          "async": true,
          "body": {
            "type": "BlockStatement",
            "start": 41,
            "end": 71,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 47,
                "end": 69,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 53,
                    "end": 68,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 58,
                      "decorators": [],
                      "name": "value",
                      "optional": false
                    },
                    "init": {
                      "type": "AwaitExpression",
                      "start": 61,
                      "end": 68,
                      "argument": {
                        "type": "Identifier",
                        "start": 67,
                        "end": 68,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "const"
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": []
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
