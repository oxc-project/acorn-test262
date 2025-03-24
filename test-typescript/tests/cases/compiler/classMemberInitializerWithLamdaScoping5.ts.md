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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 80,
            "name": "console",
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
                      "name": "log",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                        "name": "message",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 39,
                          "end": 44,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 41,
                            "end": 44
                          }
                        },
                        "decorators": [],
                        "optional": true
                      },
                      {
                        "type": "RestElement",
                        "start": 46,
                        "end": 70,
                        "argument": {
                          "type": "Identifier",
                          "start": 49,
                          "end": 63,
                          "name": "optionalParams",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 82,
      "end": 247,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 95,
        "name": "Greeter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 96,
        "end": 247,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 102,
            "end": 138,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 113,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 113,
              "end": 138,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 114,
                  "end": 129,
                  "name": "message",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 121,
                    "end": 129,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 123,
                      "end": 129
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 131,
                "end": 138,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 144,
            "end": 245,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 144,
              "end": 158,
              "name": "messageHandler",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 161,
              "end": 245,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 162,
                  "end": 177,
                  "name": "message",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 169,
                    "end": 177,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 171,
                      "end": 177
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 200,
                          "end": 203,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 204,
                          "end": 211,
                          "name": "message",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
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
