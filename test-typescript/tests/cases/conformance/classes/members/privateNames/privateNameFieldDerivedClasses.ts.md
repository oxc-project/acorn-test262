__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 207,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 107,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 107,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 37,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 17,
              "end": 22,
              "name": "prop"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 30,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 24,
                "end": 30
              }
            },
            "value": {
              "type": "Literal",
              "start": 33,
              "end": 36,
              "raw": "123",
              "value": 123
            }
          },
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 105,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 55,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 55,
              "end": 105,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 68,
                "end": 105,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 78,
                    "end": 99,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 78,
                      "end": 98,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 90,
                          "end": 97,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 90,
                            "end": 91,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 92,
                            "end": 97,
                            "name": "prop"
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 78,
                        "end": 89,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 78,
                          "end": 85,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 89,
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
                  "type": "Identifier",
                  "start": 56,
                  "end": 66,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 57,
                    "end": 66,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 59,
                      "end": 66,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 59,
                        "end": 66,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 108,
      "end": 206,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 135,
        "end": 206,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 141,
            "end": 204,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 148,
              "end": 154,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 154,
              "end": 204,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 167,
                "end": 204,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 177,
                    "end": 198,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 177,
                      "end": 197,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 189,
                          "end": 196,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 189,
                            "end": 190,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 191,
                            "end": 196,
                            "name": "prop"
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 177,
                        "end": 188,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 177,
                          "end": 184,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 185,
                          "end": 188,
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
                  "type": "Identifier",
                  "start": 155,
                  "end": 165,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 156,
                    "end": 165,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 158,
                      "end": 165,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 165,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
        "start": 114,
        "end": 121,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 130,
        "end": 134,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
