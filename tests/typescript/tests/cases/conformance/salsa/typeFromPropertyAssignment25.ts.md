__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Common",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 10
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 13,
            "end": 15
          },
          "definite": false,
          "start": 4,
          "end": 15
        }
      ],
      "declare": false,
      "start": 0,
      "end": 16
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
            "name": "Common",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 23
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 25
          },
          "optional": false,
          "computed": false,
          "start": 17,
          "end": 25
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 40,
                  "end": 51
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
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 64,
                              "end": 68
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 69,
                              "end": 70
                            },
                            "optional": false,
                            "computed": false,
                            "start": 64,
                            "end": 70
                          },
                          "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 73,
                            "end": 74
                          },
                          "start": 64,
                          "end": 74
                        },
                        "directive": null,
                        "start": 64,
                        "end": 74
                      }
                    ],
                    "start": 54,
                    "end": 80
                  },
                  "expression": false,
                  "start": 51,
                  "end": 80
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 40,
                "end": 80
              }
            ],
            "start": 34,
            "end": 82
          },
          "abstract": false,
          "declare": false,
          "start": 28,
          "end": 82
        },
        "start": 17,
        "end": 82
      },
      "directive": null,
      "start": 17,
      "end": 82
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
            "name": "Common",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 89
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "O",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 91
          },
          "optional": false,
          "computed": false,
          "start": 83,
          "end": 91
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Common",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 114
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 116
            },
            "optional": false,
            "computed": false,
            "start": 108,
            "end": 116
          },
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 134
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
                            "type": "Super",
                            "start": 147,
                            "end": 152
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 147,
                          "end": 154
                        },
                        "directive": null,
                        "start": 147,
                        "end": 154
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
                              "start": 163,
                              "end": 167
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "o",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 168,
                              "end": 169
                            },
                            "optional": false,
                            "computed": false,
                            "start": 163,
                            "end": 169
                          },
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 172,
                            "end": 173
                          },
                          "start": 163,
                          "end": 173
                        },
                        "directive": null,
                        "start": 163,
                        "end": 173
                      }
                    ],
                    "start": 137,
                    "end": 179
                  },
                  "expression": false,
                  "start": 134,
                  "end": 179
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 123,
                "end": 179
              }
            ],
            "start": 117,
            "end": 181
          },
          "abstract": false,
          "declare": false,
          "start": 94,
          "end": 181
        },
        "start": 83,
        "end": 181
      },
      "directive": null,
      "start": 83,
      "end": 181
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 186,
            "end": 187
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Common",
                "optional": false,
                "typeAnnotation": null,
                "start": 194,
                "end": 200
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null,
                "start": 201,
                "end": 202
              },
              "optional": false,
              "computed": false,
              "start": 194,
              "end": 202
            },
            "typeArguments": null,
            "arguments": [],
            "start": 190,
            "end": 204
          },
          "definite": false,
          "start": 186,
          "end": 204
        }
      ],
      "declare": false,
      "start": 182,
      "end": 204
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 209,
            "end": 210
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Common",
                "optional": false,
                "typeAnnotation": null,
                "start": 217,
                "end": 223
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 224,
                "end": 225
              },
              "optional": false,
              "computed": false,
              "start": 217,
              "end": 225
            },
            "typeArguments": null,
            "arguments": [],
            "start": 213,
            "end": 227
          },
          "definite": false,
          "start": 209,
          "end": 227
        }
      ],
      "declare": false,
      "start": 205,
      "end": 227
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 228,
          "end": 229
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 230,
          "end": 231
        },
        "optional": false,
        "computed": false,
        "start": 228,
        "end": 231
      },
      "directive": null,
      "start": 228,
      "end": 231
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 232,
          "end": 233
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 234,
          "end": 235
        },
        "optional": false,
        "computed": false,
        "start": 232,
        "end": 235
      },
      "directive": null,
      "start": 232,
      "end": 235
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 236,
          "end": 237
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 238,
          "end": 239
        },
        "optional": false,
        "computed": false,
        "start": 236,
        "end": 239
      },
      "directive": null,
      "start": 236,
      "end": 239
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 240
}
```
