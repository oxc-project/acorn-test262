__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 421,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 252,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "name": "MyClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 252,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 30,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "name": "t",
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
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 36,
            "end": 250,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 38,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 38,
              "end": 250,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "name": "ContainingThis",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 168,
                        "end": 194,
                        "id": {
                          "type": "Identifier",
                          "start": 168,
                          "end": 169,
                          "name": "t",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 174,
                                "end": 175,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "ThisExpression",
                                "start": 177,
                                "end": 181
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 183,
                              "end": 192,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 183,
                                "end": 184,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                                  "name": "t",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 204,
                    "end": 244,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 208,
                        "end": 243,
                        "id": {
                          "type": "Identifier",
                          "start": 208,
                          "end": 243,
                          "name": "t",
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
                                    "name": "x",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
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
                                        "name": "ContainingThis",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
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
                                    "name": "y",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
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
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
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
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
    },
    {
      "type": "VariableDeclaration",
      "start": 333,
      "end": 392,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 337,
          "end": 391,
          "id": {
            "type": "Identifier",
            "start": 337,
            "end": 340,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 349,
                  "end": 350,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 350,
                  "end": 389,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                            "name": "spaaace",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 393,
      "end": 420,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 397,
          "end": 419,
          "id": {
            "type": "Identifier",
            "start": 397,
            "end": 419,
            "name": "obj",
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
                      "name": "f",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
