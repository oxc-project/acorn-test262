__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 131,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 10,
            "end": 13,
            "raw": "\"a\"",
            "value": "a",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 15,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 25,
            "end": 28,
            "raw": "\"b\"",
            "value": "b",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 105,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 37,
            "end": 61,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 39,
                "end": 48,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 41,
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
                  "type": "Identifier",
                  "start": 44,
                  "end": 48,
                  "decorators": [],
                  "name": "aVal",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 50,
                "end": 59,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 59,
                  "decorators": [],
                  "name": "bVal",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 64,
            "end": 105,
            "arguments": [],
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 65,
              "end": 102,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 71,
                "end": 102,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 74,
                    "end": 100,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 81,
                      "end": 99,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 83,
                          "end": 89,
                          "computed": true,
                          "key": {
                            "type": "Identifier",
                            "start": 84,
                            "end": 85,
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
                            "start": 88,
                            "end": 89,
                            "raw": "1",
                            "value": 1,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 91,
                          "end": 97,
                          "computed": true,
                          "key": {
                            "type": "Identifier",
                            "start": 92,
                            "end": 93,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 96,
                            "end": 97,
                            "raw": "1",
                            "value": 1,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 131,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 107,
        "end": 130,
        "arguments": [
          {
            "type": "Identifier",
            "start": 119,
            "end": 123,
            "decorators": [],
            "name": "aVal",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 125,
            "end": 129,
            "decorators": [],
            "name": "bVal",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 107,
          "end": 118,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 107,
            "end": 114,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 115,
            "end": 118,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
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
