__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 145,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 35,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "K",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 13,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 13,
            "end": 14,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 17,
            "end": 20,
            "value": "a",
            "raw": "\"a\""
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 26,
          "end": 33,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 27,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 30,
            "end": 33,
            "value": "b",
            "raw": "\"b\""
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 35,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 20,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 17,
              "end": 20,
              "value": "a",
              "raw": "\"a\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 26,
            "end": 33,
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 30,
              "end": 33,
              "value": "b",
              "raw": "\"b\""
            },
            "computed": false
          }
        ]
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
          "id": {
            "type": "ObjectPattern",
            "start": 42,
            "end": 70,
            "properties": [
              {
                "type": "Property",
                "start": 44,
                "end": 55,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 45,
                  "end": 48,
                  "object": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 46,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 48,
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
                  "start": 51,
                  "end": 55,
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
                "start": 57,
                "end": 68,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 58,
                  "end": 61,
                  "object": {
                    "type": "Identifier",
                    "start": 58,
                    "end": 59,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 61,
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
                  "start": 64,
                  "end": 68,
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
            "start": 73,
            "end": 118,
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 74,
              "end": 115,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "key": {
                            "type": "MemberExpression",
                            "start": 93,
                            "end": 96,
                            "object": {
                              "type": "Identifier",
                              "start": 93,
                              "end": 94,
                              "name": "K",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 95,
                              "end": 96,
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
                            "start": 99,
                            "end": 100,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 102,
                          "end": 110,
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "key": {
                            "type": "MemberExpression",
                            "start": 103,
                            "end": 106,
                            "object": {
                              "type": "Identifier",
                              "start": 103,
                              "end": 104,
                              "name": "K",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 105,
                              "end": 106,
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
                            "start": 109,
                            "end": 110,
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
      "start": 120,
      "end": 144,
      "expression": {
        "type": "CallExpression",
        "start": 120,
        "end": 143,
        "callee": {
          "type": "MemberExpression",
          "start": 120,
          "end": 131,
          "object": {
            "type": "Identifier",
            "start": 120,
            "end": 127,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 128,
            "end": 131,
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
            "start": 132,
            "end": 136,
            "name": "aVal",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 138,
            "end": 142,
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
