__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
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
                    "type": "PrivateIdentifier",
                    "name": "field",
                    "start": 31,
                    "end": 37
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 40,
                        "end": 41
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "method",
                        "start": 42,
                        "end": 49
                      },
                      "optional": false,
                      "computed": false,
                      "start": 40,
                      "end": 49
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 40,
                    "end": 51
                  },
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 24,
                  "end": 52
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "name": "method",
                    "start": 64,
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 83,
                            "end": 85
                          },
                          "start": 76,
                          "end": 86
                        }
                      ],
                      "start": 74,
                      "end": 88
                    },
                    "expression": false,
                    "start": 71,
                    "end": 88
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 57,
                  "end": 88
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 100,
                    "end": 108
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "D",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 120,
                            "end": 121
                          },
                          "start": 113,
                          "end": 122
                        }
                      ],
                      "start": 111,
                      "end": 124
                    },
                    "expression": false,
                    "start": 108,
                    "end": 124
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 93,
                  "end": 124
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getField",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 136,
                    "end": 144
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
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 156,
                              "end": 157
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "field",
                              "start": 158,
                              "end": 164
                            },
                            "optional": false,
                            "computed": false,
                            "start": 156,
                            "end": 164
                          },
                          "start": 149,
                          "end": 164
                        }
                      ],
                      "start": 147,
                      "end": 166
                    },
                    "expression": false,
                    "start": 144,
                    "end": 166
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 129,
                  "end": 166
                }
              ],
              "start": 18,
              "end": 169
            },
            "abstract": false,
            "declare": false,
            "start": 10,
            "end": 169
          },
          "definite": false,
          "start": 6,
          "end": 169
        }
      ],
      "declare": false,
      "start": 0,
      "end": 169
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
            "start": 171,
            "end": 178
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 179,
            "end": 182
          },
          "optional": false,
          "computed": false,
          "start": 171,
          "end": 182
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 185,
                    "end": 193
                  },
                  "optional": false,
                  "computed": false,
                  "start": 183,
                  "end": 193
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 183,
                "end": 195
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getField",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 204
              },
              "optional": false,
              "computed": false,
              "start": 183,
              "end": 204
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 183,
            "end": 206
          }
        ],
        "optional": false,
        "start": 171,
        "end": 207
      },
      "directive": null,
      "start": 171,
      "end": 208
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 210
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 219
            },
            "optional": false,
            "computed": false,
            "start": 209,
            "end": 219
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 209,
          "end": 221
        },
        "property": {
          "type": "PrivateIdentifier",
          "name": "method",
          "start": 222,
          "end": 229
        },
        "optional": false,
        "computed": false,
        "start": 209,
        "end": 229
      },
      "directive": null,
      "start": 209,
      "end": 230
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 240,
              "end": 241
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 242,
              "end": 250
            },
            "optional": false,
            "computed": false,
            "start": 240,
            "end": 250
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 240,
          "end": 252
        },
        "property": {
          "type": "PrivateIdentifier",
          "name": "field",
          "start": 253,
          "end": 259
        },
        "optional": false,
        "computed": false,
        "start": 240,
        "end": 259
      },
      "directive": null,
      "start": 240,
      "end": 260
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 270
}
```
