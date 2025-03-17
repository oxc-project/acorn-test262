__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 295,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 293,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 293,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 16,
            "end": 116,
            "body": {
              "type": "TSInterfaceBody",
              "start": 32,
              "end": 116,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 42,
                  "end": 52,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 43,
                    "end": 51,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 45,
                      "end": 51
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 61,
                  "end": 71,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 62,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 62,
                    "end": 70,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 64,
                      "end": 70
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "start": 81,
                  "end": 110,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 91,
                    "decorators": [],
                    "name": "fromOrigin",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 92,
                      "end": 100,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 93,
                        "end": 100,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 95,
                          "end": 100,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 95,
                            "end": 100,
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 101,
                    "end": 109,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 103,
                      "end": 109
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 31,
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 122,
            "end": 291,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 129,
              "end": 291,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 160,
                "end": 291,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 170,
                    "end": 221,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 170,
                      "end": 181,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 181,
                      "end": 221,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 218,
                        "end": 221,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 182,
                          "end": 198,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 189,
                            "end": 198,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 190,
                              "end": 198,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 192,
                                "end": 198
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 200,
                          "end": 216,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 207,
                            "end": 216,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 208,
                              "end": 216,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 210,
                                "end": 216
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 231,
                    "end": 285,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 231,
                      "end": 241,
                      "decorators": [],
                      "name": "fromOrigin",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 241,
                      "end": 285,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 252,
                        "end": 285,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 266,
                            "end": 275,
                            "argument": {
                              "type": "Literal",
                              "start": 273,
                              "end": 274,
                              "raw": "1",
                              "value": 1
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 242,
                          "end": 250,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 243,
                            "end": 250,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 245,
                              "end": 250,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 245,
                                "end": 250,
                                "decorators": [],
                                "name": "Point",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 135,
                "end": 142,
                "decorators": [],
                "name": "Point2d",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 154,
                  "end": 159,
                  "expression": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 159,
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
