__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "meta",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 19,
              "end": 25
            },
            "start": 17,
            "end": 25
          },
          "start": 14,
          "end": 25
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 34,
              "end": 40
            },
            "start": 32,
            "end": 40
          },
          "start": 27,
          "end": 40
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 57
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 66
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "context",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 81,
                            "end": 88
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "metadata",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 89,
                            "end": 97
                          },
                          "optional": false,
                          "computed": false,
                          "start": 81,
                          "end": 97
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 98,
                          "end": 101
                        },
                        "optional": false,
                        "computed": true,
                        "start": 81,
                        "end": 102
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 105,
                        "end": 110
                      },
                      "start": 81,
                      "end": 110
                    },
                    "directive": null,
                    "start": 81,
                    "end": 111
                  }
                ],
                "start": 71,
                "end": 117
              },
              "id": null,
              "generator": false,
              "start": 55,
              "end": 117
            },
            "start": 48,
            "end": 118
          }
        ],
        "start": 42,
        "end": 120
      },
      "expression": false,
      "start": 0,
      "end": 120
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "meta",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 127
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 128,
                "end": 131
              },
              {
                "type": "Literal",
                "value": "x",
                "raw": "'x'",
                "start": 133,
                "end": 136
              }
            ],
            "optional": false,
            "start": 123,
            "end": 137
          },
          "start": 122,
          "end": 137
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 144,
        "end": 145
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "meta",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 153,
                    "end": 157
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 158,
                      "end": 161
                    },
                    {
                      "type": "Literal",
                      "value": "y",
                      "raw": "'y'",
                      "start": 163,
                      "end": 166
                    }
                  ],
                  "optional": false,
                  "start": 153,
                  "end": 167
                },
                "start": 152,
                "end": 167
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 173
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 176,
                "end": 179
              },
              "expression": false,
              "start": 173,
              "end": 179
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 152,
            "end": 179
          }
        ],
        "start": 146,
        "end": 181
      },
      "abstract": false,
      "declare": false,
      "start": 122,
      "end": 181
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 183,
            "end": 184
          },
          "property": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 191
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "metadata",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 200
            },
            "optional": false,
            "computed": false,
            "start": 185,
            "end": 200
          },
          "optional": false,
          "computed": true,
          "start": 183,
          "end": 201
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 202,
          "end": 203
        },
        "optional": false,
        "computed": false,
        "start": 183,
        "end": 203
      },
      "directive": null,
      "start": 183,
      "end": 204
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 212,
            "end": 213
          },
          "property": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 220
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "metadata",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 229
            },
            "optional": false,
            "computed": false,
            "start": 214,
            "end": 229
          },
          "optional": false,
          "computed": true,
          "start": 212,
          "end": 230
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 231,
          "end": 232
        },
        "optional": false,
        "computed": false,
        "start": 212,
        "end": 232
      },
      "directive": null,
      "start": 212,
      "end": 233
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 240
}
```
