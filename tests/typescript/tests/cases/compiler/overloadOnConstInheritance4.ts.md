__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 197,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 65,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 65,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 18,
            "end": 63,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 20,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 21,
                "end": 30,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 22,
                  "end": 30,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 24,
                    "end": 30
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 32,
                "end": 61,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 40,
                  "end": 61,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 42,
                    "end": 61,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 43,
                        "end": 50,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 44,
                          "end": 50,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 46,
                            "end": 50,
                            "literal": {
                              "type": "Literal",
                              "start": 46,
                              "end": 50,
                              "value": "hi",
                              "raw": "'hi'"
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 52,
                      "end": 61,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 55,
                        "end": 61
                      }
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 66,
      "end": 197,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 73,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 85,
          "end": 86,
          "expression": {
            "type": "Identifier",
            "start": 85,
            "end": 86,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 87,
        "end": 197,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 93,
            "end": 138,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 95,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 95,
              "end": 138,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 96,
                  "end": 105,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 97,
                    "end": 105,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 99,
                      "end": 105
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 107,
                  "end": 136,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 115,
                    "end": 136,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 117,
                      "end": 136,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 118,
                          "end": 125,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 119,
                            "end": 125,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 121,
                              "end": 125,
                              "literal": {
                                "type": "Literal",
                                "start": 121,
                                "end": 125,
                                "value": "hi",
                                "raw": "'hi'"
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 127,
                        "end": 136,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 130,
                          "end": 136
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 143,
            "end": 195,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 143,
              "end": 145,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 145,
              "end": 195,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 146,
                  "end": 155,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 147,
                    "end": 155,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 149,
                      "end": 155
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 157,
                  "end": 186,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 165,
                    "end": 186,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 167,
                      "end": 186,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 168,
                          "end": 175,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 169,
                            "end": 175,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 171,
                              "end": 175,
                              "literal": {
                                "type": "Literal",
                                "start": 171,
                                "end": 175,
                                "value": "hi",
                                "raw": "'hi'"
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 177,
                        "end": 186,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 180,
                          "end": 186
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 188,
                "end": 195,
                "body": []
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
