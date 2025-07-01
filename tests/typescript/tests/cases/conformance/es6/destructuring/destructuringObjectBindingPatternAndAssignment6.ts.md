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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 10,
            "end": 13
          },
          "definite": false,
          "start": 6,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 22
          },
          "init": {
            "type": "Literal",
            "value": "b",
            "raw": "\"b\"",
            "start": 25,
            "end": 28
          },
          "definite": false,
          "start": 21,
          "end": 28
        }
      ],
      "declare": false,
      "start": 15,
      "end": 29
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 40,
                  "end": 41
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aVal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 44,
                  "end": 48
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 39,
                "end": 48
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
                  "start": 51,
                  "end": 52
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bVal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 55,
                  "end": 59
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 50,
                "end": 59
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 61
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 84,
                            "end": 85
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 88,
                            "end": 89
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "optional": false,
                          "start": 83,
                          "end": 89
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
                            "start": 92,
                            "end": 93
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 96,
                            "end": 97
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "optional": false,
                          "start": 91,
                          "end": 97
                        }
                      ],
                      "start": 81,
                      "end": 99
                    },
                    "start": 74,
                    "end": 100
                  }
                ],
                "start": 71,
                "end": 102
              },
              "id": null,
              "generator": false,
              "start": 65,
              "end": 102
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 64,
            "end": 105
          },
          "definite": false,
          "start": 37,
          "end": 105
        }
      ],
      "declare": false,
      "start": 31,
      "end": 106
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
            "start": 107,
            "end": 114
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 118
          },
          "optional": false,
          "computed": false,
          "start": 107,
          "end": 118
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "aVal",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 123
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "bVal",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 129
          }
        ],
        "optional": false,
        "start": 107,
        "end": 130
      },
      "directive": null,
      "start": 107,
      "end": 131
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 131
}
```
