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
        "name": "X",
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 23
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 26,
              "end": 27
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 14,
            "end": 28
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getSettings",
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
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "keys",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 58,
                        "end": 64
                      },
                      "start": 58,
                      "end": 66
                    },
                    "start": 56,
                    "end": 66
                  },
                  "start": 52,
                  "end": 66
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 69,
                  "end": 72
                },
                "start": 67,
                "end": 72
              },
              "body": {
                "type": "BlockStatement",
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
                          "name": "ret",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 92,
                              "end": 95
                            },
                            "start": 90,
                            "end": 95
                          },
                          "start": 87,
                          "end": 95
                        },
                        "init": null,
                        "definite": false,
                        "start": 87,
                        "end": 95
                      }
                    ],
                    "declare": false,
                    "start": 83,
                    "end": 96
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
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
                              "name": "ret",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 112,
                              "end": 115
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "always",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 116,
                              "end": 122
                            },
                            "optional": false,
                            "computed": false,
                            "start": 112,
                            "end": 122
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "expression": false,
                              "async": false,
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
                                          "start": 143,
                                          "end": 147
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 148,
                                          "end": 149
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 143,
                                        "end": 149
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0",
                                        "start": 152,
                                        "end": 153
                                      },
                                      "start": 143,
                                      "end": 153
                                    },
                                    "directive": null,
                                    "start": 143,
                                    "end": 154
                                  }
                                ],
                                "start": 129,
                                "end": 164
                              },
                              "id": null,
                              "generator": false,
                              "start": 123,
                              "end": 164
                            }
                          ],
                          "optional": false,
                          "start": 112,
                          "end": 165
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 166,
                          "end": 173
                        },
                        "optional": false,
                        "computed": false,
                        "start": 112,
                        "end": 173
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 112,
                      "end": 175
                    },
                    "start": 105,
                    "end": 176
                  }
                ],
                "start": 73,
                "end": 182
              },
              "expression": false,
              "start": 51,
              "end": 182
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 33,
            "end": 182
          }
        ],
        "start": 8,
        "end": 184
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 184
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 184
}
```
