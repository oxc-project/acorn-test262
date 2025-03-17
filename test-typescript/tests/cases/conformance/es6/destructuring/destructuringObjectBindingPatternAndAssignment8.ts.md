__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 146,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 36,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 36,
            "properties": [
              {
                "type": "Property",
                "start": 16,
                "end": 22,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 16,
                  "end": 17,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 19,
                  "end": 22,
                  "value": "a",
                  "raw": "\"a\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 28,
                "end": 34,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 29,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 31,
                  "end": 34,
                  "value": "b",
                  "raw": "\"b\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 119,
          "id": {
            "type": "ObjectPattern",
            "start": 43,
            "end": 71,
            "properties": [
              {
                "type": "Property",
                "start": 45,
                "end": 56,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 46,
                  "end": 49,
                  "object": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 47,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 49,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 56,
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
                "start": 58,
                "end": 69,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 59,
                  "end": 62,
                  "object": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 62,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 69,
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
            "start": 74,
            "end": 119,
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 75,
              "end": 116,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 81,
                "end": 116,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 84,
                    "end": 114,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 91,
                      "end": 113,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 93,
                          "end": 101,
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "key": {
                            "type": "MemberExpression",
                            "start": 94,
                            "end": 97,
                            "object": {
                              "type": "Identifier",
                              "start": 94,
                              "end": 95,
                              "name": "K",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 96,
                              "end": 97,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 100,
                            "end": 101,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 103,
                          "end": 111,
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "key": {
                            "type": "MemberExpression",
                            "start": 104,
                            "end": 107,
                            "object": {
                              "type": "Identifier",
                              "start": 104,
                              "end": 105,
                              "name": "K",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 106,
                              "end": 107,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 110,
                            "end": 111,
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
      "start": 121,
      "end": 145,
      "expression": {
        "type": "CallExpression",
        "start": 121,
        "end": 144,
        "callee": {
          "type": "MemberExpression",
          "start": 121,
          "end": 132,
          "object": {
            "type": "Identifier",
            "start": 121,
            "end": 128,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 129,
            "end": 132,
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
            "start": 133,
            "end": 137,
            "name": "aVal",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 139,
            "end": 143,
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
