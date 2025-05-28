__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 170,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 10,
            "end": 12,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "SwitchStatement",
      "start": 15,
      "end": 61,
      "discriminant": {
        "type": "ChainExpression",
        "start": 23,
        "end": 34,
        "expression": {
          "type": "MemberExpression",
          "start": 23,
          "end": 34,
          "object": {
            "type": "Identifier",
            "start": 23,
            "end": 26,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 28,
            "end": 34,
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": true,
          "computed": false
        }
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 40,
          "end": 59,
          "test": {
            "type": "Literal",
            "start": 45,
            "end": 46,
            "value": 1,
            "raw": "1"
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 52,
              "end": 59,
              "expression": {
                "type": "MemberExpression",
                "start": 52,
                "end": 58,
                "object": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 55,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 56,
                  "end": 57,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
                "computed": true
              },
              "directive": null
            }
          ]
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 63,
      "end": 76,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 75,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 70,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 73,
            "end": 75,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "SwitchStatement",
      "start": 78,
      "end": 170,
      "discriminant": {
        "type": "ChainExpression",
        "start": 86,
        "end": 97,
        "expression": {
          "type": "MemberExpression",
          "start": 86,
          "end": 97,
          "object": {
            "type": "Identifier",
            "start": 86,
            "end": 89,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 91,
            "end": 97,
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": true,
          "computed": false
        }
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 103,
          "end": 168,
          "test": {
            "type": "Literal",
            "start": 108,
            "end": 109,
            "value": 1,
            "raw": "1"
          },
          "consequent": [
            {
              "type": "BlockStatement",
              "start": 111,
              "end": 168,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 117,
                  "end": 133,
                  "expression": {
                    "type": "CallExpression",
                    "start": 117,
                    "end": 132,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 117,
                      "end": 125,
                      "object": {
                        "type": "Identifier",
                        "start": 117,
                        "end": 120,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 125,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 126,
                        "end": 131,
                        "value": "baz",
                        "raw": "\"baz\""
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 138,
                  "end": 164,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 144,
                      "end": 163,
                      "id": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 157,
                        "decorators": [],
                        "name": "arr",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 147,
                          "end": 157,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 149,
                            "end": 157,
                            "elementType": {
                              "type": "TSStringKeyword",
                              "start": 149,
                              "end": 155
                            }
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 163,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
