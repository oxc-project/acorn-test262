__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ContextualType",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 24
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
              "start": 25,
              "end": 26
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 25,
            "end": 26
          }
        ],
        "start": 24,
        "end": 27
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 40
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "parameter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 52,
                      "end": 53
                    },
                    "typeArguments": null,
                    "start": 52,
                    "end": 53
                  },
                  "start": 50,
                  "end": 53
                },
                "start": 41,
                "end": 53
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 56,
                "end": 60
              },
              "start": 54,
              "end": 60
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 34,
            "end": 61
          }
        ],
        "start": 28,
        "end": 63
      },
      "declare": false,
      "start": 0,
      "end": 63
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 76
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
              "start": 77,
              "end": 78
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 77,
            "end": 78
          }
        ],
        "start": 76,
        "end": 79
      },
      "superClass": null,
      "superTypeArguments": null,
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 98
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ContextualType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 106,
                        "end": 120
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 121,
                              "end": 122
                            },
                            "typeArguments": null,
                            "start": 121,
                            "end": 122
                          }
                        ],
                        "start": 120,
                        "end": 123
                      },
                      "start": 106,
                      "end": 123
                    },
                    "start": 104,
                    "end": 123
                  },
                  "start": 99,
                  "end": 123
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 125,
                "end": 132
              },
              "expression": false,
              "start": 98,
              "end": 132
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 87,
            "end": 132
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 141
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ContextualType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 149,
                        "end": 163
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 164,
                              "end": 165
                            },
                            "typeArguments": null,
                            "start": 164,
                            "end": 165
                          }
                        ],
                        "start": 163,
                        "end": 166
                      },
                      "start": 149,
                      "end": 166
                    },
                    "start": 147,
                    "end": 166
                  },
                  "start": 142,
                  "end": 166
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 168,
                "end": 175
              },
              "expression": false,
              "start": 141,
              "end": 175
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 138,
            "end": 175
          }
        ],
        "start": 81,
        "end": 177
      },
      "abstract": false,
      "declare": false,
      "start": 65,
      "end": 177
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 185,
        "end": 186
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "CBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 195,
        "end": 200
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 201,
            "end": 207
          }
        ],
        "start": 200,
        "end": 208
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 226
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 308,
                        "end": 313
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "method",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 328,
                                "end": 334
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "p",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 335,
                                    "end": 336
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "p",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 356,
                                          "end": 357
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "length",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 358,
                                          "end": 364
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 356,
                                        "end": 364
                                      },
                                      "directive": null,
                                      "start": 356,
                                      "end": 365
                                    }
                                  ],
                                  "start": 338,
                                  "end": 379
                                },
                                "expression": false,
                                "start": 334,
                                "end": 379
                              },
                              "method": true,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 328,
                              "end": 379
                            }
                          ],
                          "start": 314,
                          "end": 389
                        }
                      ],
                      "optional": false,
                      "start": 308,
                      "end": 390
                    },
                    "directive": null,
                    "start": 308,
                    "end": 391
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 470,
                          "end": 475
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 476,
                          "end": 479
                        },
                        "optional": false,
                        "computed": false,
                        "start": 470,
                        "end": 479
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "method",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 494,
                                "end": 500
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "p",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 501,
                                    "end": 502
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "p",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 522,
                                          "end": 523
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "length",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 524,
                                          "end": 530
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 522,
                                        "end": 530
                                      },
                                      "directive": null,
                                      "start": 522,
                                      "end": 531
                                    }
                                  ],
                                  "start": 504,
                                  "end": 545
                                },
                                "expression": false,
                                "start": 500,
                                "end": 545
                              },
                              "method": true,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 494,
                              "end": 545
                            }
                          ],
                          "start": 480,
                          "end": 555
                        }
                      ],
                      "optional": false,
                      "start": 470,
                      "end": 556
                    },
                    "directive": null,
                    "start": 470,
                    "end": 557
                  }
                ],
                "start": 229,
                "end": 563
              },
              "expression": false,
              "start": 226,
              "end": 563
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 215,
            "end": 563
          }
        ],
        "start": 209,
        "end": 565
      },
      "abstract": false,
      "declare": false,
      "start": 179,
      "end": 565
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 565
}
```
