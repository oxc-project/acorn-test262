__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 184,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 184,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 184,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 28,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 26,
              "end": 27,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 33,
            "end": 182,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 51,
              "decorators": [],
              "name": "getSettings",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 51,
              "end": 182,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 73,
                "end": 182,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 83,
                    "end": 96,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 87,
                        "end": 95,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 87,
                          "end": 95,
                          "decorators": [],
                          "name": "ret",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 90,
                            "end": 95,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 92,
                              "end": 95
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 105,
                    "end": 176,
                    "argument": {
                      "type": "CallExpression",
                      "start": 112,
                      "end": 175,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 112,
                        "end": 173,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 112,
                          "end": 165,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 123,
                              "end": 164,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 129,
                                "end": 164,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 143,
                                    "end": 154,
                                    "directive": null,
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "start": 143,
                                      "end": 153,
                                      "operator": "=",
                                      "left": {
                                        "type": "MemberExpression",
                                        "start": 143,
                                        "end": 149,
                                        "computed": false,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 143,
                                          "end": 147
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 148,
                                          "end": 149,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "start": 152,
                                        "end": 153,
                                        "raw": "0",
                                        "value": 0,
                                        "regex": null,
                                        "bigint": null
                                      }
                                    }
                                  }
                                ]
                              },
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "returnType": null,
                              "typeParameters": null
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 112,
                            "end": 122,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 112,
                              "end": 115,
                              "decorators": [],
                              "name": "ret",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 116,
                              "end": 122,
                              "decorators": [],
                              "name": "always",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 166,
                          "end": 173,
                          "decorators": [],
                          "name": "promise",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 52,
                  "end": 66,
                  "decorators": [],
                  "name": "keys",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 56,
                    "end": 66,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 58,
                      "end": 66,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 58,
                        "end": 64
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 67,
                "end": 72,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 69,
                  "end": 72
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
