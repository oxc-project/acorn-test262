__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 241,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 120,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 42,
        "end": 120,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 48,
            "end": 118,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 55,
              "end": 117,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 71,
                "end": 117,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 81,
                    "end": 111,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 81,
                      "end": 110,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 81,
                        "end": 102,
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "start": 81,
                          "end": 97,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 81,
                            "end": 88,
                            "decorators": [],
                            "name": "context",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 89,
                            "end": 97,
                            "decorators": [],
                            "name": "metadata",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 98,
                          "end": 101,
                          "decorators": [],
                          "name": "key",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 105,
                        "end": 110,
                        "decorators": [],
                        "name": "value",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "decorators": [],
                  "name": "_",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 59,
                  "end": 66,
                  "decorators": [],
                  "name": "context",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "meta",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 25,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 25,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 19,
              "end": 25
            }
          }
        },
        {
          "type": "Identifier",
          "start": 27,
          "end": 40,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 32,
            "end": 40,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 34,
              "end": 40
            }
          }
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 122,
      "end": 181,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 146,
        "end": 181,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 152,
            "end": 179,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 152,
                "end": 167,
                "expression": {
                  "type": "CallExpression",
                  "start": 153,
                  "end": 167,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 158,
                      "end": 161,
                      "raw": "'b'",
                      "value": "b"
                    },
                    {
                      "type": "Literal",
                      "start": 163,
                      "end": 166,
                      "raw": "'y'",
                      "value": "y"
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 157,
                    "decorators": [],
                    "name": "meta",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 173,
              "end": 179,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 176,
                "end": 179,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 122,
          "end": 137,
          "expression": {
            "type": "CallExpression",
            "start": 123,
            "end": 137,
            "arguments": [
              {
                "type": "Literal",
                "start": 128,
                "end": 131,
                "raw": "'a'",
                "value": "a"
              },
              {
                "type": "Literal",
                "start": 133,
                "end": 136,
                "raw": "'x'",
                "value": "x"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 123,
              "end": 127,
              "decorators": [],
              "name": "meta",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 145,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 183,
      "end": 204,
      "expression": {
        "type": "MemberExpression",
        "start": 183,
        "end": 203,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 183,
          "end": 201,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 183,
            "end": 184,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "MemberExpression",
            "start": 185,
            "end": 200,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 185,
              "end": 191,
              "decorators": [],
              "name": "Symbol",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 192,
              "end": 200,
              "decorators": [],
              "name": "metadata",
              "optional": false
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 202,
          "end": 203,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 212,
      "end": 233,
      "expression": {
        "type": "MemberExpression",
        "start": 212,
        "end": 232,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 212,
          "end": 230,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 212,
            "end": 213,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "MemberExpression",
            "start": 214,
            "end": 229,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 214,
              "end": 220,
              "decorators": [],
              "name": "Symbol",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 221,
              "end": 229,
              "decorators": [],
              "name": "metadata",
              "optional": false
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 231,
          "end": 232,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
