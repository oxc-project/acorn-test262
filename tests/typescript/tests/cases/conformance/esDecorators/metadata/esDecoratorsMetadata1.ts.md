__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 240,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 120,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "meta",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      ],
      "returnType": null,
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
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 59,
                  "end": 66,
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
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
                        "object": {
                          "type": "MemberExpression",
                          "start": 81,
                          "end": 97,
                          "object": {
                            "type": "Identifier",
                            "start": 81,
                            "end": 88,
                            "decorators": [],
                            "name": "context",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 89,
                            "end": 97,
                            "decorators": [],
                            "name": "metadata",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 98,
                          "end": 101,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 105,
                        "end": 110,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "id": null,
              "generator": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 122,
      "end": 181,
      "decorators": [
        {
          "type": "Decorator",
          "start": 122,
          "end": 137,
          "expression": {
            "type": "CallExpression",
            "start": 123,
            "end": 137,
            "callee": {
              "type": "Identifier",
              "start": 123,
              "end": 127,
              "decorators": [],
              "name": "meta",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 128,
                "end": 131,
                "value": "a",
                "raw": "'a'"
              },
              {
                "type": "Literal",
                "start": 133,
                "end": 136,
                "value": "x",
                "raw": "'x'"
              }
            ],
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
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 146,
        "end": 181,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 152,
            "end": 179,
            "decorators": [
              {
                "type": "Decorator",
                "start": 152,
                "end": 167,
                "expression": {
                  "type": "CallExpression",
                  "start": 153,
                  "end": 167,
                  "callee": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 157,
                    "decorators": [],
                    "name": "meta",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 158,
                      "end": 161,
                      "value": "b",
                      "raw": "'b'"
                    },
                    {
                      "type": "Literal",
                      "start": 163,
                      "end": 166,
                      "value": "y",
                      "raw": "'y'"
                    }
                  ],
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
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 173,
              "end": 179,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 176,
                "end": 179,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 183,
      "end": 204,
      "expression": {
        "type": "MemberExpression",
        "start": 183,
        "end": 203,
        "object": {
          "type": "MemberExpression",
          "start": 183,
          "end": 201,
          "object": {
            "type": "Identifier",
            "start": 183,
            "end": 184,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "MemberExpression",
            "start": 185,
            "end": 200,
            "object": {
              "type": "Identifier",
              "start": 185,
              "end": 191,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 192,
              "end": 200,
              "decorators": [],
              "name": "metadata",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "optional": false,
          "computed": true
        },
        "property": {
          "type": "Identifier",
          "start": 202,
          "end": 203,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 212,
      "end": 233,
      "expression": {
        "type": "MemberExpression",
        "start": 212,
        "end": 232,
        "object": {
          "type": "MemberExpression",
          "start": 212,
          "end": 230,
          "object": {
            "type": "Identifier",
            "start": 212,
            "end": 213,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "MemberExpression",
            "start": 214,
            "end": 229,
            "object": {
              "type": "Identifier",
              "start": 214,
              "end": 220,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 221,
              "end": 229,
              "decorators": [],
              "name": "metadata",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "optional": false,
          "computed": true
        },
        "property": {
          "type": "Identifier",
          "start": 231,
          "end": 232,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
