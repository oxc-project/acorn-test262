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
        "name": "arrTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 13
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
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 24
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 31,
                        "end": 37
                      },
                      "start": 31,
                      "end": 39
                    },
                    "start": 29,
                    "end": 39
                  },
                  "start": 25,
                  "end": 39
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 24,
              "end": 41
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 20,
            "end": 41
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
              "start": 46,
              "end": 50
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 57,
                        "end": 63
                      },
                      "start": 57,
                      "end": 65
                    },
                    "start": 55,
                    "end": 65
                  },
                  "start": 51,
                  "end": 65
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 50,
              "end": 67
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 46,
            "end": 67
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
              "start": 72,
              "end": 76
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
                  "name": "arg1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 83,
                        "end": 86
                      },
                      "start": 83,
                      "end": 88
                    },
                    "start": 81,
                    "end": 88
                  },
                  "start": 77,
                  "end": 88
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 90,
                "end": 93
              },
              "expression": false,
              "start": 76,
              "end": 93
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 72,
            "end": 93
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "callTest",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 106
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
                          "type": "ThisExpression",
                          "start": 119,
                          "end": 123
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 124,
                          "end": 128
                        },
                        "optional": false,
                        "computed": false,
                        "start": 119,
                        "end": 128
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 130,
                              "end": 131
                            },
                            {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 133,
                              "end": 134
                            },
                            {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3",
                              "start": 136,
                              "end": 137
                            },
                            {
                              "type": "Literal",
                              "value": 5,
                              "raw": "5",
                              "start": 139,
                              "end": 140
                            }
                          ],
                          "start": 129,
                          "end": 141
                        }
                      ],
                      "optional": false,
                      "start": 119,
                      "end": 142
                    },
                    "directive": null,
                    "start": 119,
                    "end": 143
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 152,
                          "end": 156
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 157,
                          "end": 161
                        },
                        "optional": false,
                        "computed": false,
                        "start": 152,
                        "end": 161
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": "hi",
                              "raw": "\"hi\"",
                              "start": 163,
                              "end": 167
                            }
                          ],
                          "start": 162,
                          "end": 168
                        }
                      ],
                      "optional": false,
                      "start": 152,
                      "end": 169
                    },
                    "directive": null,
                    "start": 152,
                    "end": 170
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 179,
                          "end": 183
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 184,
                          "end": 188
                        },
                        "optional": false,
                        "computed": false,
                        "start": 179,
                        "end": 188
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrayExpression",
                          "elements": [],
                          "start": 189,
                          "end": 191
                        }
                      ],
                      "optional": false,
                      "start": 179,
                      "end": 192
                    },
                    "directive": null,
                    "start": 179,
                    "end": 193
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 202,
                          "end": 206
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 207,
                          "end": 211
                        },
                        "optional": false,
                        "computed": false,
                        "start": 202,
                        "end": 211
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 213,
                              "end": 214
                            },
                            {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 216,
                              "end": 217
                            },
                            {
                              "type": "Literal",
                              "value": "hi",
                              "raw": "\"hi\"",
                              "start": 219,
                              "end": 223
                            },
                            {
                              "type": "Literal",
                              "value": 5,
                              "raw": "5",
                              "start": 225,
                              "end": 226
                            }
                          ],
                          "start": 212,
                          "end": 227
                        }
                      ],
                      "optional": false,
                      "start": 202,
                      "end": 228
                    },
                    "directive": null,
                    "start": 202,
                    "end": 229
                  }
                ],
                "start": 109,
                "end": 244
              },
              "expression": false,
              "start": 106,
              "end": 244
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 98,
            "end": 244
          }
        ],
        "start": 14,
        "end": 246
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 246
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 246
}
```
