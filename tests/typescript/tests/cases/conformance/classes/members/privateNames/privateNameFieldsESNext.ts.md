__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 123,
              "raw": "123",
              "start": 18,
              "end": 21
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 22
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "a",
              "start": 27,
              "end": 29
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 32,
              "end": 34
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 27,
            "end": 35
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 41
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 44,
              "end": 51
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 40,
            "end": 52
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "b",
              "start": 57,
              "end": 59
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 57,
            "end": 60
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 71
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
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 84,
                          "end": 91
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 92,
                          "end": 95
                        },
                        "optional": false,
                        "computed": false,
                        "start": 84,
                        "end": 95
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 96,
                            "end": 100
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "a",
                            "start": 101,
                            "end": 103
                          },
                          "optional": false,
                          "computed": false,
                          "start": 96,
                          "end": 103
                        }
                      ],
                      "optional": false,
                      "start": 84,
                      "end": 104
                    },
                    "directive": null,
                    "start": 84,
                    "end": 105
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 114,
                          "end": 118
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "a",
                          "start": 119,
                          "end": 121
                        },
                        "optional": false,
                        "computed": false,
                        "start": 114,
                        "end": 121
                      },
                      "right": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 124,
                        "end": 131
                      },
                      "start": 114,
                      "end": 131
                    },
                    "directive": null,
                    "start": 114,
                    "end": 132
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
                          "start": 141,
                          "end": 148
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 149,
                          "end": 152
                        },
                        "optional": false,
                        "computed": false,
                        "start": 141,
                        "end": 152
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 153,
                            "end": 157
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "b",
                            "start": 158,
                            "end": 160
                          },
                          "optional": false,
                          "computed": false,
                          "start": 153,
                          "end": 160
                        }
                      ],
                      "optional": false,
                      "start": 141,
                      "end": 161
                    },
                    "directive": null,
                    "start": 141,
                    "end": 162
                  }
                ],
                "start": 74,
                "end": 168
              },
              "expression": false,
              "start": 71,
              "end": 168
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 65,
            "end": 168
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "m",
              "start": 180,
              "end": 182
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "test",
              "raw": "\"test\"",
              "start": 185,
              "end": 191
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 173,
            "end": 192
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "x",
              "start": 204,
              "end": 206
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 197,
            "end": 207
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 219,
              "end": 223
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
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 236,
                          "end": 243
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 244,
                          "end": 247
                        },
                        "optional": false,
                        "computed": false,
                        "start": 236,
                        "end": 247
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 248,
                            "end": 252
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "m",
                            "start": 253,
                            "end": 255
                          },
                          "optional": false,
                          "computed": false,
                          "start": 248,
                          "end": 255
                        }
                      ],
                      "optional": false,
                      "start": 236,
                      "end": 256
                    },
                    "directive": null,
                    "start": 236,
                    "end": 257
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
                          "start": 266,
                          "end": 273
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 274,
                          "end": 277
                        },
                        "optional": false,
                        "computed": false,
                        "start": 266,
                        "end": 277
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 278,
                              "end": 282
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "x",
                              "start": 283,
                              "end": 285
                            },
                            "optional": false,
                            "computed": false,
                            "start": 278,
                            "end": 285
                          },
                          "right": {
                            "type": "Literal",
                            "value": "test",
                            "raw": "\"test\"",
                            "start": 288,
                            "end": 294
                          },
                          "start": 278,
                          "end": 294
                        }
                      ],
                      "optional": false,
                      "start": 266,
                      "end": 295
                    },
                    "directive": null,
                    "start": 266,
                    "end": 296
                  }
                ],
                "start": 226,
                "end": 302
              },
              "expression": false,
              "start": 223,
              "end": 302
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 212,
            "end": 302
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "something",
              "start": 307,
              "end": 317
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": 1234,
                "raw": "1234",
                "start": 326,
                "end": 330
              },
              "id": null,
              "generator": false,
              "start": 320,
              "end": 330
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 307,
            "end": 331
          }
        ],
        "start": 8,
        "end": 333
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 333
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 334
}
```
