__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 247,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 81,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 80,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 80,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 80,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 21,
                "end": 80,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 27,
                    "end": 78,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 30,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 31,
                        "end": 44,
                        "decorators": [],
                        "name": "message",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 39,
                          "end": 44,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 41,
                            "end": 44
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "start": 46,
                        "end": 70,
                        "argument": {
                          "type": "Identifier",
                          "start": 49,
                          "end": 63,
                          "decorators": [],
                          "name": "optionalParams",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 63,
                          "end": 70,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 65,
                            "end": 70,
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 65,
                              "end": 68
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 71,
                      "end": 77,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 73,
                        "end": 77
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 82,
      "end": 247,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 96,
        "end": 247,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 102,
            "end": 138,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 113,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 113,
              "end": 138,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 131,
                "end": 138,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 114,
                  "end": 129,
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 121,
                    "end": 129,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 123,
                      "end": 129
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 144,
            "end": 245,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 144,
              "end": 158,
              "decorators": [],
              "name": "messageHandler",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 161,
              "end": 245,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 182,
                "end": 245,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 192,
                    "end": 213,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 192,
                      "end": 212,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 204,
                          "end": 211,
                          "decorators": [],
                          "name": "message",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 192,
                        "end": 203,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 192,
                          "end": 199,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 200,
                          "end": 203,
                          "decorators": [],
                          "name": "log",
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
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 162,
                  "end": 177,
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 169,
                    "end": 177,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 171,
                      "end": 177
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 95,
        "decorators": [],
        "name": "Greeter",
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
