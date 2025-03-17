__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 132,
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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "ObjectPattern",
            "start": 37,
            "end": 61,
            "properties": [
              {
                "type": "Property",
                "start": 39,
                "end": 48,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 41,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 48,
                  "name": "aVal",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 50,
                "end": 59,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 59,
                  "name": "bVal",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
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
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "key": {
                            "type": "Identifier",
                            "start": 84,
                            "end": 85,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 88,
                            "end": 89,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 91,
                          "end": 97,
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "key": {
                            "type": "Identifier",
                            "start": 92,
                            "end": 93,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 96,
                            "end": 97,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 115,
            "end": 118,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 119,
            "end": 123,
            "name": "aVal",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 125,
            "end": 129,
            "name": "bVal",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
