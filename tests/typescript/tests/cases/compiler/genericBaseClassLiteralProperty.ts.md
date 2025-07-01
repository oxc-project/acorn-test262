__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 15
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 17
          }
        ],
        "start": 15,
        "end": 18
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_getValue1",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 42
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 50,
                          "end": 51
                        },
                        "typeArguments": null,
                        "start": 50,
                        "end": 51
                      },
                      "start": 48,
                      "end": 51
                    },
                    "start": 46,
                    "end": 52
                  }
                ],
                "start": 44,
                "end": 54
              },
              "start": 42,
              "end": 54
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 25,
            "end": 55
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_getValue2",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 77
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 85,
                      "end": 86
                    },
                    "typeArguments": null,
                    "start": 85,
                    "end": 86
                  },
                  "start": 82,
                  "end": 86
                },
                "start": 79,
                "end": 86
              },
              "start": 77,
              "end": 86
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 60,
            "end": 87
          }
        ],
        "start": 19,
        "end": 89
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 89
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 105
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 114,
        "end": 123
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 124,
            "end": 130
          }
        ],
        "start": 123,
        "end": 131
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Error",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 150
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 154,
                  "end": 158
                },
                "start": 152,
                "end": 158
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 178,
                              "end": 184
                            },
                            "start": 176,
                            "end": 184
                          },
                          "start": 174,
                          "end": 184
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 187,
                              "end": 191
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_getValue1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 192,
                              "end": 202
                            },
                            "optional": false,
                            "computed": false,
                            "start": 187,
                            "end": 202
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 187,
                          "end": 204
                        },
                        "definite": false,
                        "start": 174,
                        "end": 204
                      }
                    ],
                    "declare": false,
                    "start": 170,
                    "end": 205
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 222,
                              "end": 228
                            },
                            "start": 220,
                            "end": 228
                          },
                          "start": 218,
                          "end": 228
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 231,
                              "end": 235
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_getValue2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 236,
                              "end": 246
                            },
                            "optional": false,
                            "computed": false,
                            "start": 231,
                            "end": 246
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 231,
                          "end": 248
                        },
                        "definite": false,
                        "start": 218,
                        "end": 248
                      }
                    ],
                    "declare": false,
                    "start": 214,
                    "end": 249
                  }
                ],
                "start": 159,
                "end": 255
              },
              "expression": false,
              "start": 150,
              "end": 255
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 138,
            "end": 255
          }
        ],
        "start": 132,
        "end": 257
      },
      "abstract": false,
      "declare": false,
      "start": 91,
      "end": 257
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 257
}
```
