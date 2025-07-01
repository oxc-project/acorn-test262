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
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 8
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
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "prop",
              "start": 26,
              "end": 31
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 43,
                      "end": 45
                    },
                    "start": 36,
                    "end": 46
                  }
                ],
                "start": 34,
                "end": 48
              },
              "expression": false,
              "start": 31,
              "end": 48
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 15,
            "end": 48
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "prop",
              "start": 64,
              "end": 69
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 77,
                      "end": 83
                    },
                    "start": 75,
                    "end": 83
                  },
                  "start": 70,
                  "end": 83
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 85,
                "end": 88
              },
              "expression": false,
              "start": 69,
              "end": 88
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 53,
            "end": 88
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "roProp",
              "start": 105,
              "end": 112
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 124,
                      "end": 126
                    },
                    "start": 117,
                    "end": 127
                  }
                ],
                "start": 115,
                "end": 129
              },
              "expression": false,
              "start": 112,
              "end": 129
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 94,
            "end": 129
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 146
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 153,
                      "end": 159
                    },
                    "start": 151,
                    "end": 159
                  },
                  "start": 147,
                  "end": 159
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 171,
                          "end": 173
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "prop",
                          "start": 174,
                          "end": 179
                        },
                        "optional": false,
                        "computed": false,
                        "start": 171,
                        "end": 179
                      },
                      "right": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 182,
                        "end": 184
                      },
                      "start": 171,
                      "end": 184
                    },
                    "directive": null,
                    "start": 171,
                    "end": 185
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 194,
                          "end": 196
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "roProp",
                          "start": 197,
                          "end": 204
                        },
                        "optional": false,
                        "computed": false,
                        "start": 194,
                        "end": 204
                      },
                      "right": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 207,
                        "end": 209
                      },
                      "start": 194,
                      "end": 209
                    },
                    "directive": null,
                    "start": 194,
                    "end": 210
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
                          "start": 228,
                          "end": 235
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 236,
                          "end": 239
                        },
                        "optional": false,
                        "computed": false,
                        "start": 228,
                        "end": 239
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 240,
                            "end": 242
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "prop",
                            "start": 243,
                            "end": 248
                          },
                          "optional": false,
                          "computed": false,
                          "start": 240,
                          "end": 248
                        }
                      ],
                      "optional": false,
                      "start": 228,
                      "end": 249
                    },
                    "directive": null,
                    "start": 228,
                    "end": 250
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
                          "start": 259,
                          "end": 266
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 267,
                          "end": 270
                        },
                        "optional": false,
                        "computed": false,
                        "start": 259,
                        "end": 270
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 271,
                            "end": 273
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "roProp",
                            "start": 274,
                            "end": 281
                          },
                          "optional": false,
                          "computed": false,
                          "start": 271,
                          "end": 281
                        }
                      ],
                      "optional": false,
                      "start": 259,
                      "end": 282
                    },
                    "directive": null,
                    "start": 259,
                    "end": 283
                  }
                ],
                "start": 161,
                "end": 289
              },
              "expression": false,
              "start": 146,
              "end": 289
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 135,
            "end": 289
          }
        ],
        "start": 9,
        "end": 291
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 291
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 291
}
```
