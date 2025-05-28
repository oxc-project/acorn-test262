__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 145,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 36,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 36,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 16,
                  "end": 17,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 19,
                  "end": 22,
                  "value": "a",
                  "raw": "\"a\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 28,
                "end": 34,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 29,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 31,
                  "end": 34,
                  "value": "b",
                  "raw": "\"b\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 120,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 119,
          "id": {
            "type": "ObjectPattern",
            "start": 43,
            "end": 71,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 45,
                "end": 56,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 46,
                  "end": 49,
                  "object": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 47,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 49,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 56,
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
                "start": 58,
                "end": 69,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 59,
                  "end": 62,
                  "object": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 62,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 69,
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
            "start": 74,
            "end": 119,
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 75,
              "end": 116,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "kind": "init",
                          "key": {
                            "type": "MemberExpression",
                            "start": 94,
                            "end": 97,
                            "object": {
                              "type": "Identifier",
                              "start": 94,
                              "end": 95,
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 96,
                              "end": 97,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 100,
                            "end": 101,
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
                          "start": 103,
                          "end": 111,
                          "kind": "init",
                          "key": {
                            "type": "MemberExpression",
                            "start": 104,
                            "end": 107,
                            "object": {
                              "type": "Identifier",
                              "start": 104,
                              "end": 105,
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 106,
                              "end": 107,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 110,
                            "end": 111,
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
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 129,
            "end": 132,
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
            "start": 133,
            "end": 137,
            "decorators": [],
            "name": "aVal",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 139,
            "end": 143,
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
