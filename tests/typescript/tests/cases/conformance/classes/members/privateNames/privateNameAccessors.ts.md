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
              "start": 19,
              "end": 24
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
                      "start": 36,
                      "end": 38
                    },
                    "start": 29,
                    "end": 39
                  }
                ],
                "start": 27,
                "end": 41
              },
              "expression": false,
              "start": 24,
              "end": 41
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 15,
            "end": 41
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "prop",
              "start": 50,
              "end": 55
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
                      "start": 63,
                      "end": 69
                    },
                    "start": 61,
                    "end": 69
                  },
                  "start": 56,
                  "end": 69
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 71,
                "end": 74
              },
              "expression": false,
              "start": 55,
              "end": 74
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 46,
            "end": 74
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "roProp",
              "start": 84,
              "end": 91
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
                      "start": 103,
                      "end": 105
                    },
                    "start": 96,
                    "end": 106
                  }
                ],
                "start": 94,
                "end": 108
              },
              "expression": false,
              "start": 91,
              "end": 108
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 80,
            "end": 108
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
              "start": 114,
              "end": 125
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
                      "start": 132,
                      "end": 138
                    },
                    "start": 130,
                    "end": 138
                  },
                  "start": 126,
                  "end": 138
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
                          "type": "ThisExpression",
                          "start": 150,
                          "end": 154
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "prop",
                          "start": 155,
                          "end": 160
                        },
                        "optional": false,
                        "computed": false,
                        "start": 150,
                        "end": 160
                      },
                      "right": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 163,
                        "end": 165
                      },
                      "start": 150,
                      "end": 165
                    },
                    "directive": null,
                    "start": 150,
                    "end": 166
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
                          "start": 175,
                          "end": 179
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "roProp",
                          "start": 180,
                          "end": 187
                        },
                        "optional": false,
                        "computed": false,
                        "start": 175,
                        "end": 187
                      },
                      "right": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 190,
                        "end": 192
                      },
                      "start": 175,
                      "end": 192
                    },
                    "directive": null,
                    "start": 175,
                    "end": 193
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
                          "start": 211,
                          "end": 218
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 219,
                          "end": 222
                        },
                        "optional": false,
                        "computed": false,
                        "start": 211,
                        "end": 222
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 223,
                            "end": 227
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "prop",
                            "start": 228,
                            "end": 233
                          },
                          "optional": false,
                          "computed": false,
                          "start": 223,
                          "end": 233
                        }
                      ],
                      "optional": false,
                      "start": 211,
                      "end": 234
                    },
                    "directive": null,
                    "start": 211,
                    "end": 235
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
                          "start": 244,
                          "end": 251
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 252,
                          "end": 255
                        },
                        "optional": false,
                        "computed": false,
                        "start": 244,
                        "end": 255
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 256,
                            "end": 260
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "roProp",
                            "start": 261,
                            "end": 268
                          },
                          "optional": false,
                          "computed": false,
                          "start": 256,
                          "end": 268
                        }
                      ],
                      "optional": false,
                      "start": 244,
                      "end": 269
                    },
                    "directive": null,
                    "start": 244,
                    "end": 270
                  }
                ],
                "start": 140,
                "end": 276
              },
              "expression": false,
              "start": 125,
              "end": 276
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 114,
            "end": 276
          }
        ],
        "start": 9,
        "end": 278
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 278
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 278
}
```
