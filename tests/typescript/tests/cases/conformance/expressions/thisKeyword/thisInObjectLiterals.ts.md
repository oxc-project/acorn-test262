__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 420,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 252,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 252,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 30,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 36,
            "end": 250,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 38,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 38,
              "end": 250,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 41,
                "end": 250,
                "body": [
                  {
                    "type": "TSTypeAliasDeclaration",
                    "start": 51,
                    "end": 78,
                    "id": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 70,
                      "decorators": [],
                      "name": "ContainingThis",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 73,
                      "end": 77
                    },
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 164,
                    "end": 195,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 168,
                        "end": 194,
                        "id": {
                          "type": "Identifier",
                          "start": 168,
                          "end": 169,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 172,
                          "end": 194,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 174,
                              "end": 181,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 174,
                                "end": 175,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "ThisExpression",
                                "start": 177,
                                "end": 181
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 183,
                              "end": 192,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 183,
                                "end": 184,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "MemberExpression",
                                "start": 186,
                                "end": 192,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 186,
                                  "end": 190
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 191,
                                  "end": 192,
                                  "decorators": [],
                                  "name": "t",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 204,
                    "end": 244,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 208,
                        "end": 243,
                        "id": {
                          "type": "Identifier",
                          "start": 208,
                          "end": 243,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 209,
                            "end": 243,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 211,
                              "end": 243,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 213,
                                  "end": 231,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 213,
                                    "end": 214,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 214,
                                    "end": 230,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 216,
                                      "end": 230,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 216,
                                        "end": 230,
                                        "decorators": [],
                                        "name": "ContainingThis",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  },
                                  "accessibility": null,
                                  "static": false
                                },
                                {
                                  "type": "TSPropertySignature",
                                  "start": 232,
                                  "end": 241,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 232,
                                    "end": 233,
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 233,
                                    "end": 241,
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 235,
                                      "end": 241
                                    }
                                  },
                                  "accessibility": null,
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
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 333,
      "end": 392,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 337,
          "end": 391,
          "id": {
            "type": "Identifier",
            "start": 337,
            "end": 340,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 343,
            "end": 391,
            "properties": [
              {
                "type": "Property",
                "start": 349,
                "end": 389,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 349,
                  "end": 350,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 350,
                  "end": 389,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 353,
                    "end": 389,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 363,
                        "end": 383,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 370,
                          "end": 382,
                          "object": {
                            "type": "ThisExpression",
                            "start": 370,
                            "end": 374
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 375,
                            "end": 382,
                            "decorators": [],
                            "name": "spaaace",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 393,
      "end": 420,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 397,
          "end": 419,
          "id": {
            "type": "Identifier",
            "start": 397,
            "end": 419,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 400,
              "end": 419,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 402,
                "end": 419,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 404,
                    "end": 417,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 404,
                      "end": 405,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 405,
                      "end": 416,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 407,
                        "end": 416,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 410,
                          "end": 416,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 413,
                            "end": 416
                          }
                        }
                      }
                    },
                    "accessibility": null,
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
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
