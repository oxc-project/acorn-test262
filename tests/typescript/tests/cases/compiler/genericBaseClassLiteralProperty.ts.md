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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 15,
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 89,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 25,
            "end": 55,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 42,
              "decorators": [],
              "name": "_getValue1",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "typeParameters": null,
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 60,
            "end": 87,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 77,
              "decorators": [],
              "name": "_getValue2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 86,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 79,
                "end": 86,
                "typeParameters": null,
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 91,
      "end": 257,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 105,
        "decorators": [],
        "name": "SubClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 114,
        "end": 123,
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "typeAnnotation": null
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
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 132,
        "end": 257,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 138,
            "end": 255,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 150,
              "decorators": [],
              "name": "Error",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 150,
              "end": 255,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              },
              "body": {
                "type": "BlockStatement",
                "start": 159,
                "end": 255,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 170,
                    "end": 205,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 174,
                        "end": 204,
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
                          "callee": {
                            "type": "MemberExpression",
                            "start": 187,
                            "end": 202,
                            "object": {
                              "type": "ThisExpression",
                              "start": 187,
                              "end": 191
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 192,
                              "end": 202,
                              "decorators": [],
                              "name": "_getValue1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 214,
                    "end": 249,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 218,
                        "end": 248,
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
                          "callee": {
                            "type": "MemberExpression",
                            "start": 231,
                            "end": 246,
                            "object": {
                              "type": "ThisExpression",
                              "start": 231,
                              "end": 235
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 236,
                              "end": 246,
                              "decorators": [],
                              "name": "_getValue2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
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
