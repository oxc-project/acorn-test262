__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 144,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 35,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 35,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 20,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 17,
              "end": 20,
              "raw": "\"a\"",
              "value": "a",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 26,
            "end": 33,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 30,
              "end": 33,
              "raw": "\"b\"",
              "value": "b",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 118,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 42,
            "end": 70,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 44,
                "end": 55,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 45,
                  "end": 48,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 46,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 48,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 55,
                  "decorators": [],
                  "name": "aVal",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 57,
                "end": 68,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 58,
                  "end": 61,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 58,
                    "end": 59,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 61,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 68,
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
            "start": 73,
            "end": 118,
            "arguments": [],
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 74,
              "end": 115,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 80,
                "end": 115,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 83,
                    "end": 113,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 90,
                      "end": 112,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 92,
                          "end": 100,
                          "computed": true,
                          "key": {
                            "type": "MemberExpression",
                            "start": 93,
                            "end": 96,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 93,
                              "end": 94,
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 95,
                              "end": 96,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 99,
                            "end": 100,
                            "raw": "1",
                            "value": 1,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 102,
                          "end": 110,
                          "computed": true,
                          "key": {
                            "type": "MemberExpression",
                            "start": 103,
                            "end": 106,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 103,
                              "end": 104,
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 105,
                              "end": 106,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 109,
                            "end": 110,
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
      "start": 120,
      "end": 144,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 120,
        "end": 143,
        "arguments": [
          {
            "type": "Identifier",
            "start": 132,
            "end": 136,
            "decorators": [],
            "name": "aVal",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 138,
            "end": 142,
            "decorators": [],
            "name": "bVal",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 120,
          "end": 131,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 120,
            "end": 127,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 128,
            "end": 131,
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
