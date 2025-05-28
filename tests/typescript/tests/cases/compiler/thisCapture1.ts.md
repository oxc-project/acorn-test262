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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 184,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 28,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 26,
              "end": 27,
              "value": 0,
              "raw": "0"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 33,
            "end": 182,
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
            "value": {
              "type": "FunctionExpression",
              "start": 51,
              "end": 182,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 73,
                "end": 182,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 83,
                    "end": 96,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 87,
                        "end": 95,
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
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 105,
                    "end": 176,
                    "argument": {
                      "type": "CallExpression",
                      "start": 112,
                      "end": 175,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 112,
                        "end": 173,
                        "object": {
                          "type": "CallExpression",
                          "start": 112,
                          "end": 165,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 112,
                            "end": 122,
                            "object": {
                              "type": "Identifier",
                              "start": 112,
                              "end": 115,
                              "decorators": [],
                              "name": "ret",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 116,
                              "end": 122,
                              "decorators": [],
                              "name": "always",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 123,
                              "end": 164,
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 129,
                                "end": 164,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 143,
                                    "end": 154,
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "start": 143,
                                      "end": 153,
                                      "operator": "=",
                                      "left": {
                                        "type": "MemberExpression",
                                        "start": 143,
                                        "end": 149,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 143,
                                          "end": 147
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 148,
                                          "end": 149,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "start": 152,
                                        "end": 153,
                                        "value": 0,
                                        "raw": "0"
                                      }
                                    },
                                    "directive": null
                                  }
                                ]
                              },
                              "id": null,
                              "generator": false
                            }
                          ],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 166,
                          "end": 173,
                          "decorators": [],
                          "name": "promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
