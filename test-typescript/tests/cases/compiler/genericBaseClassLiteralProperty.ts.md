__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 257,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 89,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 89,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 25,
            "end": 55,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 42,
              "decorators": [],
              "name": "_getValue1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 54,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 44,
                "end": 54,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 46,
                    "end": 52,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 48,
                      "end": 51,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 50,
                        "end": 51,
                        "typeName": {
                          "type": "Identifier",
                          "start": 50,
                          "end": 51,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 60,
            "end": 87,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 77,
              "decorators": [],
              "name": "_getValue2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 86,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 79,
                "end": 86,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 82,
                  "end": 86,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 85,
                    "end": 86,
                    "typeName": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 86,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 15,
        "decorators": [],
        "name": "BaseClass",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 91,
      "end": 257,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 132,
        "end": 257,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 138,
            "end": 255,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 150,
              "decorators": [],
              "name": "Error",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 150,
              "end": 255,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 159,
                "end": 255,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 170,
                    "end": 205,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 174,
                        "end": 204,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 174,
                          "end": 184,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 176,
                            "end": 184,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 178,
                              "end": 184
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 187,
                          "end": 204,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 187,
                            "end": 202,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 187,
                              "end": 191
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 192,
                              "end": 202,
                              "decorators": [],
                              "name": "_getValue1",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 214,
                    "end": 249,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 218,
                        "end": 248,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 218,
                          "end": 228,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 220,
                            "end": 228,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 222,
                              "end": 228
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 231,
                          "end": 248,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 231,
                            "end": 246,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 231,
                              "end": 235
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 236,
                              "end": 246,
                              "decorators": [],
                              "name": "_getValue2",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                "start": 152,
                "end": 158,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 154,
                  "end": 158
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 105,
        "decorators": [],
        "name": "SubClass",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 114,
        "end": 123,
        "decorators": [],
        "name": "BaseClass",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 123,
        "end": 131,
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 124,
            "end": 130
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
