__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 171,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
          "definite": false,
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
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "SwitchStatement",
      "start": 15,
      "end": 61,
      "cases": [
        {
          "type": "SwitchCase",
          "start": 40,
          "end": 59,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 52,
              "end": 59,
              "directive": null,
              "expression": {
                "type": "MemberExpression",
                "start": 52,
                "end": 58,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 55,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 56,
                  "end": 57,
                  "raw": "0",
                  "value": 0
                }
              }
            }
          ],
          "test": {
            "type": "Literal",
            "start": 45,
            "end": 46,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "discriminant": {
        "type": "ChainExpression",
        "start": 23,
        "end": 34,
        "expression": {
          "type": "MemberExpression",
          "start": 23,
          "end": 34,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 23,
            "end": 26,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": true,
          "property": {
            "type": "Identifier",
            "start": 28,
            "end": 34,
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 63,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 75,
          "definite": false,
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
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "SwitchStatement",
      "start": 78,
      "end": 170,
      "cases": [
        {
          "type": "SwitchCase",
          "start": 103,
          "end": 168,
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
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 117,
                    "end": 132,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 126,
                        "end": 131,
                        "raw": "\"baz\"",
                        "value": "baz"
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 117,
                      "end": 125,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 117,
                        "end": 120,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 125,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "VariableDeclaration",
                  "start": 138,
                  "end": 164,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 144,
                      "end": 163,
                      "definite": false,
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
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                }
              ]
            }
          ],
          "test": {
            "type": "Literal",
            "start": 108,
            "end": 109,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "discriminant": {
        "type": "ChainExpression",
        "start": 86,
        "end": 97,
        "expression": {
          "type": "MemberExpression",
          "start": 86,
          "end": 97,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 86,
            "end": 89,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": true,
          "property": {
            "type": "Identifier",
            "start": 91,
            "end": 97,
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
