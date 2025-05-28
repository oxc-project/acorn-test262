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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 66,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 10,
            "end": 66,
            "callee": {
              "type": "Identifier",
              "start": 14,
              "end": 21,
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 23,
                "end": 64,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 25,
                    "end": 32,
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 34,
                    "end": 40,
                    "decorators": [],
                    "name": "reject",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
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
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ObjectExpression",
                            "start": 57,
                            "end": 59,
                            "properties": []
                          }
                        ],
                        "optional": false
                      },
                      "directive": null
                    }
                  ]
                },
                "id": null,
                "generator": false
              }
            ]
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
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
  "end": 76,
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
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
          "generator": false,
          "async": true,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 41,
            "end": 71,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 47,
                "end": 69,
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 53,
                    "end": 68,
                    "id": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 58,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
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
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "definite": false
                  }
                ],
                "declare": false
              }
            ]
          },
          "expression": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
