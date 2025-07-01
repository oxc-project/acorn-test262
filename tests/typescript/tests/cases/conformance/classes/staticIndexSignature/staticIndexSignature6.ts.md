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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
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
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 35,
                      "end": 36
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 35,
                    "end": 36
                  }
                ],
                "start": 34,
                "end": 37
              },
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 59,
                            "end": 65
                          },
                          "start": 57,
                          "end": 65
                        },
                        "start": 56,
                        "end": 65
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 68,
                        "end": 74
                      },
                      "start": 66,
                      "end": 74
                    },
                    "readonly": false,
                    "static": true,
                    "accessibility": null,
                    "start": 48,
                    "end": 74
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 94,
                            "end": 100
                          },
                          "start": 92,
                          "end": 100
                        },
                        "start": 91,
                        "end": 100
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 42,
                          "raw": "42",
                          "start": 103,
                          "end": 105
                        },
                        "start": 103,
                        "end": 105
                      },
                      "start": 101,
                      "end": 105
                    },
                    "readonly": false,
                    "static": true,
                    "accessibility": null,
                    "start": 83,
                    "end": 105
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 115,
                      "end": 118
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
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 122,
                                "end": 123
                              },
                              "typeArguments": null,
                              "start": 122,
                              "end": 123
                            },
                            "start": 120,
                            "end": 123
                          },
                          "start": 119,
                          "end": 123
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 134,
                              "end": 135
                            },
                            "start": 127,
                            "end": 135
                          }
                        ],
                        "start": 125,
                        "end": 137
                      },
                      "expression": false,
                      "start": 118,
                      "end": 137
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 115,
                    "end": 137
                  }
                ],
                "start": 38,
                "end": 143
              },
              "abstract": false,
              "declare": false,
              "start": 29,
              "end": 143
            },
            "start": 22,
            "end": 143
          }
        ],
        "start": 16,
        "end": 145
      },
      "expression": false,
      "start": 0,
      "end": 145
    },
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
            "start": 153,
            "end": 154
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 160
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 157,
            "end": 162
          },
          "definite": false,
          "start": 153,
          "end": 162
        }
      ],
      "declare": false,
      "start": 147,
      "end": 162
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 163,
          "end": 164
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 165,
          "end": 166
        },
        "optional": false,
        "computed": false,
        "start": 163,
        "end": 166
      },
      "directive": null,
      "start": 163,
      "end": 167
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
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 169
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 170,
            "end": 171
          },
          "optional": false,
          "computed": false,
          "start": 168,
          "end": 171
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 174,
          "end": 175
        },
        "start": 168,
        "end": 175
      },
      "directive": null,
      "start": 168,
      "end": 176
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 177,
          "end": 178
        },
        "property": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 179,
          "end": 180
        },
        "optional": false,
        "computed": true,
        "start": 177,
        "end": 181
      },
      "directive": null,
      "start": 177,
      "end": 182
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
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 183,
            "end": 184
          },
          "property": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 185,
            "end": 186
          },
          "optional": false,
          "computed": true,
          "start": 183,
          "end": 187
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 190,
          "end": 192
        },
        "start": 183,
        "end": 192
      },
      "directive": null,
      "start": 183,
      "end": 193
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 202
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 210
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 211,
                  "end": 217
                }
              ],
              "start": 210,
              "end": 218
            },
            "arguments": [],
            "start": 205,
            "end": 220
          },
          "definite": false,
          "start": 201,
          "end": 220
        }
      ],
      "declare": false,
      "start": 195,
      "end": 221
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 223
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 227
          },
          "optional": false,
          "computed": false,
          "start": 222,
          "end": 227
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 228,
            "end": 229
          }
        ],
        "optional": false,
        "start": 222,
        "end": 230
      },
      "directive": null,
      "start": 222,
      "end": 231
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 231
}
```
