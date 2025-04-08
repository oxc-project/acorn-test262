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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 184,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 28,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 26,
              "end": 27,
              "value": 0,
              "raw": "0"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 33,
            "end": 182,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 51,
              "name": "getSettings",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 51,
              "end": 182,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 52,
                  "end": 66,
                  "name": "keys",
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
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "id": {
                          "type": "Identifier",
                          "start": 87,
                          "end": 95,
                          "name": "ret",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 90,
                            "end": 95,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 92,
                              "end": 95
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "var",
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
                              "name": "ret",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 116,
                              "end": 122,
                              "name": "always",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 123,
                              "end": 164,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
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
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
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
                              "typeParameters": null,
                              "returnType": null
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 166,
                          "end": 173,
                          "name": "promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 67,
                "end": 72,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 69,
                  "end": 72
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
