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
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 13
      },
      "typeParameters": null,
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
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 21
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
              },
              "start": 21,
              "end": 29
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 20,
            "end": 30
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 38
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
                    "type": "TSTypeAliasDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ContainingThis",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 56,
                      "end": 70
                    },
                    "typeParameters": null,
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 73,
                      "end": 77
                    },
                    "declare": false,
                    "start": 51,
                    "end": 78
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 168,
                          "end": 169
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 174,
                                "end": 175
                              },
                              "value": {
                                "type": "ThisExpression",
                                "start": 177,
                                "end": 181
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 174,
                              "end": 181
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 183,
                                "end": 184
                              },
                              "value": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 186,
                                  "end": 190
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "t",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 191,
                                  "end": 192
                                },
                                "optional": false,
                                "computed": false,
                                "start": 186,
                                "end": 192
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 183,
                              "end": 192
                            }
                          ],
                          "start": 172,
                          "end": 194
                        },
                        "definite": false,
                        "start": 168,
                        "end": 194
                      }
                    ],
                    "declare": false,
                    "start": 164,
                    "end": 195
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 213,
                                    "end": 214
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ContainingThis",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 216,
                                        "end": 230
                                      },
                                      "typeArguments": null,
                                      "start": 216,
                                      "end": 230
                                    },
                                    "start": 214,
                                    "end": 230
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 213,
                                  "end": 231
                                },
                                {
                                  "type": "TSPropertySignature",
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 232,
                                    "end": 233
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 235,
                                      "end": 241
                                    },
                                    "start": 233,
                                    "end": 241
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 232,
                                  "end": 241
                                }
                              ],
                              "start": 211,
                              "end": 243
                            },
                            "start": 209,
                            "end": 243
                          },
                          "start": 208,
                          "end": 243
                        },
                        "init": null,
                        "definite": false,
                        "start": 208,
                        "end": 243
                      }
                    ],
                    "declare": false,
                    "start": 204,
                    "end": 244
                  }
                ],
                "start": 41,
                "end": 250
              },
              "expression": false,
              "start": 38,
              "end": 250
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 36,
            "end": 250
          }
        ],
        "start": 14,
        "end": 252
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 252
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 337,
            "end": 340
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 349,
                  "end": 350
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 370,
                            "end": 374
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "spaaace",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 375,
                            "end": 382
                          },
                          "optional": false,
                          "computed": false,
                          "start": 370,
                          "end": 382
                        },
                        "start": 363,
                        "end": 383
                      }
                    ],
                    "start": 353,
                    "end": 389
                  },
                  "expression": false,
                  "start": 350,
                  "end": 389
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 349,
                "end": 389
              }
            ],
            "start": 343,
            "end": 391
          },
          "definite": false,
          "start": 337,
          "end": 391
        }
      ],
      "declare": false,
      "start": 333,
      "end": 392
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 404,
                      "end": 405
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
                            "type": "TSAnyKeyword",
                            "start": 413,
                            "end": 416
                          },
                          "start": 410,
                          "end": 416
                        },
                        "start": 407,
                        "end": 416
                      },
                      "start": 405,
                      "end": 416
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 404,
                    "end": 417
                  }
                ],
                "start": 402,
                "end": 419
              },
              "start": 400,
              "end": 419
            },
            "start": 397,
            "end": 419
          },
          "init": null,
          "definite": false,
          "start": 397,
          "end": 419
        }
      ],
      "declare": false,
      "start": 393,
      "end": 420
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 420
}
```
