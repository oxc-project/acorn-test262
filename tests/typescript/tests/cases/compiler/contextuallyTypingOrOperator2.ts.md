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
            "name": "v",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9,
                      "end": 10
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
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 16,
                                "end": 22
                              },
                              "start": 14,
                              "end": 22
                            },
                            "start": 13,
                            "end": 22
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 27,
                            "end": 33
                          },
                          "start": 24,
                          "end": 33
                        },
                        "start": 12,
                        "end": 33
                      },
                      "start": 10,
                      "end": 33
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 9,
                    "end": 33
                  }
                ],
                "start": 7,
                "end": 35
              },
              "start": 5,
              "end": 35
            },
            "start": 4,
            "end": 35
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 40,
                    "end": 41
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 43,
                        "end": 44
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 48,
                        "end": 49
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 50,
                        "end": 56
                      },
                      "optional": false,
                      "computed": false,
                      "start": 48,
                      "end": 56
                    },
                    "id": null,
                    "generator": false,
                    "start": 43,
                    "end": 56
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 40,
                  "end": 56
                }
              ],
              "start": 38,
              "end": 58
            },
            "operator": "||",
            "right": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 65
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 67,
                        "end": 68
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 72,
                      "end": 73
                    },
                    "id": null,
                    "generator": false,
                    "start": 67,
                    "end": 73
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 64,
                  "end": 73
                }
              ],
              "start": 62,
              "end": 75
            },
            "start": 38,
            "end": 75
          },
          "definite": false,
          "start": 4,
          "end": 75
        }
      ],
      "declare": false,
      "start": 0,
      "end": 76
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
            "name": "v2",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 84
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 91,
                    "end": 97
                  },
                  "start": 89,
                  "end": 97
                },
                "start": 88,
                "end": 97
              }
            ],
            "returnType": null,
            "body": {
              "type": "LogicalExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 102,
                  "end": 103
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 110
                },
                "optional": false,
                "computed": false,
                "start": 102,
                "end": 110
              },
              "operator": "||",
              "right": {
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
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 124,
                    "end": 125
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 129,
                          "end": 130
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "aaa",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 131,
                          "end": 134
                        },
                        "optional": false,
                        "computed": false,
                        "start": 129,
                        "end": 134
                      },
                      "directive": null,
                      "start": 129,
                      "end": 134
                    }
                  ],
                  "start": 127,
                  "end": 136
                },
                "expression": false,
                "start": 114,
                "end": 136
              },
              "start": 102,
              "end": 136
            },
            "id": null,
            "generator": false,
            "start": 87,
            "end": 136
          },
          "definite": false,
          "start": 82,
          "end": 136
        }
      ],
      "declare": false,
      "start": 78,
      "end": 137
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 137
}
```
