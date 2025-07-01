__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 10,
            "end": 12
          },
          "definite": false,
          "start": 4,
          "end": 12
        }
      ],
      "declare": false,
      "start": 0,
      "end": 13
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 26
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 34
          },
          "optional": true,
          "computed": false,
          "start": 23,
          "end": 34
        },
        "start": 23,
        "end": 34
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 45,
            "end": 46
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 55
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 56,
                  "end": 57
                },
                "optional": false,
                "computed": true,
                "start": 52,
                "end": 58
              },
              "directive": null,
              "start": 52,
              "end": 59
            }
          ],
          "start": 40,
          "end": 59
        }
      ],
      "start": 15,
      "end": 61
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 70
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 73,
            "end": 75
          },
          "definite": false,
          "start": 67,
          "end": 75
        }
      ],
      "declare": false,
      "start": 63,
      "end": 76
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 89
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 97
          },
          "optional": true,
          "computed": false,
          "start": 86,
          "end": 97
        },
        "start": 86,
        "end": 97
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 108,
            "end": 109
          },
          "consequent": [
            {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 117,
                        "end": 120
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 121,
                        "end": 125
                      },
                      "optional": false,
                      "computed": false,
                      "start": 117,
                      "end": 125
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "baz",
                        "raw": "\"baz\"",
                        "start": 126,
                        "end": 131
                      }
                    ],
                    "optional": false,
                    "start": 117,
                    "end": 132
                  },
                  "directive": null,
                  "start": 117,
                  "end": 133
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
                        "name": "arr",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSStringKeyword",
                              "start": 149,
                              "end": 155
                            },
                            "start": 149,
                            "end": 157
                          },
                          "start": 147,
                          "end": 157
                        },
                        "start": 144,
                        "end": 157
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 160,
                        "end": 163
                      },
                      "definite": false,
                      "start": 144,
                      "end": 163
                    }
                  ],
                  "declare": false,
                  "start": 138,
                  "end": 164
                }
              ],
              "start": 111,
              "end": 168
            }
          ],
          "start": 103,
          "end": 168
        }
      ],
      "start": 78,
      "end": 170
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 170
}
```
