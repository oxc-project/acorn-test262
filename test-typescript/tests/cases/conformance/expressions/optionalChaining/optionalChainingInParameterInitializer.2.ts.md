__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 195,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 108,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 66,
            "end": 108,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 99,
              "end": 108,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 95,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 70,
                "end": 95,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 70,
                    "end": 83,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 72,
                        "end": 81,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 72,
                          "end": 73,
                          "decorators": [],
                          "name": "d",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 73,
                          "end": 81,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 75,
                            "end": 81
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 86,
                    "end": 95
                  }
                ]
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 141,
      "expression": {
        "type": "CallExpression",
        "start": 110,
        "end": 140,
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 111,
          "end": 137,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 127,
            "end": 137,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 129,
                "end": 135,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 133,
                    "end": 134,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 133,
                      "end": 134,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "init": null
                  }
                ],
                "declare": false,
                "kind": "var"
              }
            ]
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "AssignmentPattern",
              "start": 112,
              "end": 122,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 112,
                "end": 113,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "optional": false,
              "right": {
                "type": "ChainExpression",
                "start": 116,
                "end": 122,
                "expression": {
                  "type": "MemberExpression",
                  "start": 116,
                  "end": 122,
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "start": 116,
                    "end": 119,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 117,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 122,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  }
                }
              }
            }
          ]
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 143,
      "end": 156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 155,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 150,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 153,
            "end": 155,
            "raw": "\"\"",
            "value": ""
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 157,
      "end": 195,
      "expression": {
        "type": "CallExpression",
        "start": 157,
        "end": 194,
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 158,
          "end": 191,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 181,
            "end": 191,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 183,
                "end": 189,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 187,
                    "end": 188,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 187,
                      "end": 188,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "init": null
                  }
                ],
                "declare": false,
                "kind": "var"
              }
            ]
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "AssignmentPattern",
              "start": 159,
              "end": 169,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 159,
                "end": 160,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "optional": false,
              "right": {
                "type": "ChainExpression",
                "start": 163,
                "end": 169,
                "expression": {
                  "type": "MemberExpression",
                  "start": 163,
                  "end": 169,
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "start": 163,
                    "end": 166,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 164,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 168,
                    "end": 169,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  }
                }
              }
            },
            {
              "type": "AssignmentPattern",
              "start": 171,
              "end": 176,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 171,
                "end": 172,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "optional": false,
              "right": {
                "type": "Identifier",
                "start": 175,
                "end": 176,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          ]
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
