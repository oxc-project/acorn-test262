__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 16,
                  "end": 17
                },
                "value": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 19,
                  "end": 22
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 16,
                "end": 22
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 28,
                  "end": 29
                },
                "value": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 31,
                  "end": 34
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 28,
                "end": 34
              }
            ],
            "start": 10,
            "end": 36
          },
          "definite": false,
          "start": 6,
          "end": 36
        }
      ],
      "declare": false,
      "start": 0,
      "end": 36
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 46,
                    "end": 47
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 48,
                    "end": 49
                  },
                  "optional": false,
                  "computed": false,
                  "start": 46,
                  "end": 49
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aVal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 56
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 45,
                "end": 56
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 59,
                    "end": 60
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 61,
                    "end": 62
                  },
                  "optional": false,
                  "computed": false,
                  "start": 59,
                  "end": 62
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bVal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 65,
                  "end": 69
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 58,
                "end": 69
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 71
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 94,
                              "end": 95
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 96,
                              "end": 97
                            },
                            "optional": false,
                            "computed": false,
                            "start": 94,
                            "end": 97
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 100,
                            "end": 101
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "optional": false,
                          "start": 93,
                          "end": 101
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 104,
                              "end": 105
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 106,
                              "end": 107
                            },
                            "optional": false,
                            "computed": false,
                            "start": 104,
                            "end": 107
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 110,
                            "end": 111
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "optional": false,
                          "start": 103,
                          "end": 111
                        }
                      ],
                      "start": 91,
                      "end": 113
                    },
                    "start": 84,
                    "end": 114
                  }
                ],
                "start": 81,
                "end": 116
              },
              "id": null,
              "generator": false,
              "start": 75,
              "end": 116
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 74,
            "end": 119
          },
          "definite": false,
          "start": 43,
          "end": 119
        }
      ],
      "declare": false,
      "start": 37,
      "end": 120
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 128
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 132
          },
          "optional": false,
          "computed": false,
          "start": 121,
          "end": 132
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "aVal",
            "optional": false,
            "typeAnnotation": null,
            "start": 133,
            "end": 137
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "bVal",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 143
          }
        ],
        "optional": false,
        "start": 121,
        "end": 144
      },
      "directive": null,
      "start": 121,
      "end": 145
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 145
}
```
