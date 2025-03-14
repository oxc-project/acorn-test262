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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 252,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 30,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "t",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 36,
            "end": 250,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 38,
              "decorators": [],
              "name": "fn",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 38,
              "end": 250,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 41,
                "end": 250,
                "body": [
                  {
                    "type": "TSTypeAliasDeclaration",
                    "start": 51,
                    "end": 78,
                    "declare": false,
                    "id": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 70,
                      "decorators": [],
                      "name": "ContainingThis",
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 73,
                      "end": 77
                    }
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 168,
                          "end": 169,
                          "decorators": [],
                          "name": "t",
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
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 174,
                                "end": 175,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ThisExpression",
                                "start": 177,
                                "end": 181
                              }
                            },
                            {
                              "type": "Property",
                              "start": 183,
                              "end": 192,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 183,
                                "end": 184,
                                "decorators": [],
                                "name": "y",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "MemberExpression",
                                "start": 186,
                                "end": 192,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 186,
                                  "end": 190
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 191,
                                  "end": 192,
                                  "decorators": [],
                                  "name": "t",
                                  "optional": false
                                }
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
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
                                  "key": {
                                    "type": "Identifier",
                                    "start": 213,
                                    "end": 214,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "readonly": false,
                                  "static": false,
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
                                        "optional": false
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "TSPropertySignature",
                                  "start": 232,
                                  "end": 241,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 232,
                                    "end": 233,
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "readonly": false,
                                  "static": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 233,
                                    "end": 241,
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 235,
                                      "end": 241
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        },
                        "init": null
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
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "MyClass",
        "optional": false
      },
      "implements": [],
      "superClass": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 337,
            "end": 340,
            "decorators": [],
            "name": "obj",
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 349,
                  "end": 350,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 350,
                  "end": 389,
                  "async": false,
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
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 370,
                            "end": 374
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 375,
                            "end": 382,
                            "decorators": [],
                            "name": "spaaace",
                            "optional": false
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
                    "key": {
                      "type": "Identifier",
                      "start": 404,
                      "end": 405,
                      "decorators": [],
                      "name": "f",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 405,
                      "end": 416,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 407,
                        "end": 416,
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
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
