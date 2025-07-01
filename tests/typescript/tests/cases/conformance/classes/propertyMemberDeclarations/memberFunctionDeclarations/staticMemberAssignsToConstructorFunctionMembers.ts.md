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
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
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
                          "start": 37,
                          "end": 38
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 39,
                          "end": 42
                        },
                        "optional": false,
                        "computed": false,
                        "start": 37,
                        "end": 42
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 51,
                          "end": 54
                        },
                        "id": null,
                        "generator": false,
                        "start": 45,
                        "end": 54
                      },
                      "start": 37,
                      "end": 54
                    },
                    "directive": null,
                    "start": 37,
                    "end": 54
                  }
                ],
                "start": 27,
                "end": 60
              },
              "expression": false,
              "start": 24,
              "end": 60
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 60
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 80,
                      "end": 86
                    },
                    "start": 78,
                    "end": 86
                  },
                  "start": 77,
                  "end": 86
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 89,
                  "end": 95
                },
                "start": 87,
                "end": 95
              },
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
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 106,
                          "end": 107
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 108,
                          "end": 111
                        },
                        "optional": false,
                        "computed": false,
                        "start": 106,
                        "end": 111
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 120,
                          "end": 123
                        },
                        "id": null,
                        "generator": false,
                        "start": 114,
                        "end": 123
                      },
                      "start": 106,
                      "end": 123
                    },
                    "directive": null,
                    "start": 106,
                    "end": 123
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
                          "start": 141,
                          "end": 142
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 143,
                          "end": 146
                        },
                        "optional": false,
                        "computed": false,
                        "start": 141,
                        "end": 146
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 150,
                            "end": 151
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 156,
                          "end": 157
                        },
                        "id": null,
                        "generator": false,
                        "start": 149,
                        "end": 157
                      },
                      "start": 141,
                      "end": 157
                    },
                    "directive": null,
                    "start": 141,
                    "end": 158
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
                          "start": 173,
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
                        "start": 173,
                        "end": 178
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 185,
                                "end": 191
                              },
                              "start": 183,
                              "end": 191
                            },
                            "start": 182,
                            "end": 191
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 196,
                          "end": 197
                        },
                        "id": null,
                        "generator": false,
                        "start": 181,
                        "end": 197
                      },
                      "start": 173,
                      "end": 197
                    },
                    "directive": null,
                    "start": 173,
                    "end": 198
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 220,
                      "end": 221
                    },
                    "start": 213,
                    "end": 222
                  }
                ],
                "start": 96,
                "end": 228
              },
              "expression": false,
              "start": 76,
              "end": 228
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 66,
            "end": 228
          }
        ],
        "start": 8,
        "end": 230
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 230
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 230
}
```
