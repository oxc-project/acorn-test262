__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "app",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 41,
                            "end": 44
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "someFun",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 54,
                                    "end": 61
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSFunctionType",
                                      "typeParameters": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "arg",
                                          "optional": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSNumberKeyword",
                                              "start": 69,
                                              "end": 75
                                            },
                                            "start": 67,
                                            "end": 75
                                          },
                                          "start": 64,
                                          "end": 75
                                        }
                                      ],
                                      "returnType": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSVoidKeyword",
                                          "start": 80,
                                          "end": 84
                                        },
                                        "start": 77,
                                        "end": 84
                                      },
                                      "start": 63,
                                      "end": 84
                                    },
                                    "start": 61,
                                    "end": 84
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 54,
                                  "end": 85
                                }
                              ],
                              "start": 46,
                              "end": 91
                            },
                            "start": 44,
                            "end": 91
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 41,
                          "end": 92
                        }
                      ],
                      "start": 35,
                      "end": 96
                    },
                    "start": 33,
                    "end": 96
                  },
                  "start": 30,
                  "end": 96
                },
                "init": null,
                "definite": false,
                "start": 30,
                "end": 96
              }
            ],
            "declare": false,
            "start": 26,
            "end": 97
          }
        ],
        "start": 22,
        "end": 99
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 99
    },
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
              "name": "app",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 104
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 108
            },
            "optional": false,
            "computed": false,
            "start": 101,
            "end": 108
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 112
          },
          "optional": false,
          "computed": false,
          "start": 101,
          "end": 112
        },
        "right": {
          "type": "CallExpression",
          "callee": {
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
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "someFun",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 141,
                          "end": 148
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
                              "name": "arg",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 149,
                              "end": 152
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 154,
                            "end": 156
                          },
                          "expression": false,
                          "start": 148,
                          "end": 156
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 141,
                        "end": 156
                      }
                    ],
                    "start": 139,
                    "end": 158
                  },
                  "start": 132,
                  "end": 159
                }
              ],
              "start": 128,
              "end": 161
            },
            "expression": false,
            "start": 116,
            "end": 161
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 115,
          "end": 164
        },
        "start": 101,
        "end": 164
      },
      "directive": null,
      "start": 101,
      "end": 165
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "app",
                "optional": false,
                "typeAnnotation": null,
                "start": 167,
                "end": 170
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 174
              },
              "optional": false,
              "computed": false,
              "start": 167,
              "end": 174
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 178
            },
            "optional": false,
            "computed": false,
            "start": 167,
            "end": 178
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "someFun",
            "optional": false,
            "typeAnnotation": null,
            "start": 179,
            "end": 186
          },
          "optional": false,
          "computed": false,
          "start": 167,
          "end": 186
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 187,
            "end": 188
          }
        ],
        "optional": false,
        "start": 167,
        "end": 189
      },
      "directive": null,
      "start": 167,
      "end": 190
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 190
}
```
