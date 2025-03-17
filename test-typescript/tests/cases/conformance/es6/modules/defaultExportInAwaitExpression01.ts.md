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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 10,
            "end": 66,
            "callee": {
              "type": "Identifier",
              "start": 14,
              "end": 21,
              "name": "Promise",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 23,
                "end": 64,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 25,
                    "end": 32,
                    "name": "resolve",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 34,
                    "end": 40,
                    "name": "reject",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "callee": {
                          "type": "Identifier",
                          "start": 48,
                          "end": 55,
                          "name": "resolve",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "ObjectExpression",
                            "start": 57,
                            "end": 59,
                            "properties": []
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "directive": null
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 68,
      "end": 85,
      "declaration": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
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
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 19,
        "value": "./a",
        "raw": "'./a'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 76,
      "expression": {
        "type": "CallExpression",
        "start": 24,
        "end": 73,
        "callee": {
          "type": "FunctionExpression",
          "start": 24,
          "end": 71,
          "id": null,
          "expression": false,
          "generator": false,
          "async": true,
          "params": [],
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
                    "id": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 58,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
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
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "definite": false
                  }
                ],
                "kind": "const",
                "declare": false
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
