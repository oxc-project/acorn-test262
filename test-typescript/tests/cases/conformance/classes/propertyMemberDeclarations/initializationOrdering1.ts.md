__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 226,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 66,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 66,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 64,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 25,
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 64,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 37,
                "end": 64,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 47,
                    "end": 58,
                    "argument": {
                      "type": "Literal",
                      "start": 54,
                      "end": 58,
                      "raw": "true",
                      "value": true
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 27,
                "end": 36,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 29,
                  "end": 36
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
        "end": 12,
        "decorators": [],
        "name": "Helper",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 68,
      "end": 202,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 75,
        "end": 202,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 88,
          "end": 202,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 94,
              "end": 168,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 94,
                "end": 105,
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
                "start": 105,
                "end": 168,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 131,
                  "end": 168,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 141,
                      "end": 162,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 141,
                        "end": 162,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 153,
                            "end": 161,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 153,
                              "end": 157
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 158,
                              "end": 161,
                              "decorators": [],
                              "name": "bug",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 141,
                          "end": 152,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 141,
                            "end": 148,
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 149,
                            "end": 152,
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
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "start": 106,
                    "end": 129,
                    "accessibility": null,
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 129,
                      "decorators": [],
                      "name": "facade",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 121,
                        "end": 129,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 123,
                          "end": 129,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 123,
                            "end": 129,
                            "decorators": [],
                            "name": "Helper",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    "readonly": true,
                    "static": false
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 173,
              "end": 199,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 173,
                "end": 176,
                "decorators": [],
                "name": "bug",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "CallExpression",
                "start": 179,
                "end": 199,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 179,
                  "end": 197,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 179,
                    "end": 190,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 179,
                      "end": 183
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 190,
                      "decorators": [],
                      "name": "facade",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 197,
                    "decorators": [],
                    "name": "create",
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
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 81,
          "end": 87,
          "decorators": [],
          "name": "Broken",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 204,
      "end": 226,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 204,
        "end": 226,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 215,
            "end": 225,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 219,
              "end": 225,
              "decorators": [],
              "name": "Helper",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 208,
          "end": 214,
          "decorators": [],
          "name": "Broken",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
