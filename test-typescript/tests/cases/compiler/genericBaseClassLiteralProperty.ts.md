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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 15,
        "name": "BaseClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 89,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 25,
            "end": 55,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 42,
              "name": "_getValue1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            },
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 60,
            "end": 87,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 77,
              "name": "_getValue2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 91,
      "end": 257,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 105,
        "name": "SubClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 114,
        "end": 123,
        "name": "BaseClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 132,
        "end": 257,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 138,
            "end": 255,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 150,
              "name": "Error",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 150,
              "end": 255,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "id": {
                          "type": "Identifier",
                          "start": 174,
                          "end": 184,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 176,
                            "end": 184,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 178,
                              "end": 184
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                              "name": "_getValue1",
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
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
                        "id": {
                          "type": "Identifier",
                          "start": 218,
                          "end": 228,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 220,
                            "end": 228,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 222,
                              "end": 228
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                              "name": "_getValue2",
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
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
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
