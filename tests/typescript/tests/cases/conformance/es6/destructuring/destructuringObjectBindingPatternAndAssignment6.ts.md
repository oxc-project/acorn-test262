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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 13,
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
            "value": "a",
            "raw": "\"a\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 15,
      "end": 29,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 28,
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
            "value": "b",
            "raw": "\"b\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 106,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 105,
          "id": {
            "type": "ObjectPattern",
            "start": 37,
            "end": 61,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 39,
                "end": 48,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 41,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 48,
                  "decorators": [],
                  "name": "aVal",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 50,
                "end": 59,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 59,
                  "decorators": [],
                  "name": "bVal",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 64,
            "end": 105,
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 65,
              "end": 102,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 84,
                            "end": 85,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 88,
                            "end": 89,
                            "value": 1,
                            "raw": "1"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 91,
                          "end": 97,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 92,
                            "end": 93,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 96,
                            "end": 97,
                            "value": 1,
                            "raw": "1"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 131,
      "expression": {
        "type": "CallExpression",
        "start": 107,
        "end": 130,
        "callee": {
          "type": "MemberExpression",
          "start": 107,
          "end": 118,
          "object": {
            "type": "Identifier",
            "start": 107,
            "end": 114,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 115,
            "end": 118,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
