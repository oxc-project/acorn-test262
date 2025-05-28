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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 80,
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
                    "key": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 30,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
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
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "start": 49,
                          "end": 63,
                          "decorators": [],
                          "name": "optionalParams",
                          "optional": false,
                          "typeAnnotation": null
                        },
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
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 82,
      "end": 247,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 96,
        "end": 247,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 102,
            "end": 138,
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
            "value": {
              "type": "FunctionExpression",
              "start": 113,
              "end": 138,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 131,
                "end": 138,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 144,
            "end": 245,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 144,
              "end": 158,
              "decorators": [],
              "name": "messageHandler",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 161,
              "end": 245,
              "expression": false,
              "async": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 182,
                "end": 245,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 192,
                    "end": 213,
                    "expression": {
                      "type": "CallExpression",
                      "start": 192,
                      "end": 212,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 192,
                        "end": 203,
                        "object": {
                          "type": "Identifier",
                          "start": 192,
                          "end": 199,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 200,
                          "end": 203,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
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
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
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
