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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "name": "meta",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 25,
          "name": "key",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 25,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 19,
              "end": 25
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 27,
          "end": 40,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 32,
            "end": 40,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 34,
              "end": 40
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "name": "_",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 59,
                  "end": 66,
                  "name": "context",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
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
                            "name": "context",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 89,
                            "end": 97,
                            "name": "metadata",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 98,
                          "end": 101,
                          "name": "key",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 105,
                        "end": 110,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 122,
      "end": 181,
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 145,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 146,
        "end": 181,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 152,
            "end": 179,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 173,
              "end": 179,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 176,
                "end": 179,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
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
                    "name": "meta",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
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
              "name": "meta",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "MemberExpression",
            "start": 185,
            "end": 200,
            "object": {
              "type": "Identifier",
              "start": 185,
              "end": 191,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 192,
              "end": 200,
              "name": "metadata",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 202,
          "end": 203,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
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
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "MemberExpression",
            "start": 214,
            "end": 229,
            "object": {
              "type": "Identifier",
              "start": 214,
              "end": 220,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 221,
              "end": 229,
              "name": "metadata",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 231,
          "end": 232,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
