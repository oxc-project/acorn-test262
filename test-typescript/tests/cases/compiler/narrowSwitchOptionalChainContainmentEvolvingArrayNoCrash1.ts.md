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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "let",
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
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 28,
            "end": 34,
            "name": "length",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": true
        }
      },
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
              "expression": {
                "type": "MemberExpression",
                "start": 52,
                "end": 58,
                "object": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 55,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 56,
                  "end": 57,
                  "value": 0,
                  "raw": "0"
                },
                "computed": true,
                "optional": false
              },
              "directive": null
            }
          ],
          "test": {
            "type": "Literal",
            "start": 45,
            "end": 46,
            "value": 1,
            "raw": "1"
          }
        }
      ]
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
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 70,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "let",
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
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 91,
            "end": 97,
            "name": "length",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": true
        }
      },
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
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 125,
                        "name": "push",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 126,
                        "end": 131,
                        "value": "baz",
                        "raw": "\"baz\""
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
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
                      "id": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 157,
                        "name": "arr",
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
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 163,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                }
              ]
            }
          ],
          "test": {
            "type": "Literal",
            "start": 108,
            "end": 109,
            "value": 1,
            "raw": "1"
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
