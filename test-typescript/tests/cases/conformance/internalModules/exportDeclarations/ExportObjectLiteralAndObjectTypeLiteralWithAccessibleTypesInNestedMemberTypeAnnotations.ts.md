__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 232,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 232,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 232,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 16,
            "end": 95,
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 27,
              "name": "Point",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 28,
              "end": 95,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 38,
                  "end": 89,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 49,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 49,
                    "end": 89,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "TSParameterProperty",
                        "start": 50,
                        "end": 66,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 57,
                          "end": 66,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 58,
                            "end": 66,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 60,
                              "end": 66
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "readonly": false,
                        "static": false
                      },
                      {
                        "type": "TSParameterProperty",
                        "start": 68,
                        "end": 84,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 75,
                          "end": 84,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 76,
                            "end": 84,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 78,
                              "end": 84
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "readonly": false,
                        "static": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 86,
                      "end": 89,
                      "body": []
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
            "type": "ExportNamedDeclaration",
            "start": 101,
            "end": 230,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 108,
              "end": 230,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 112,
                  "end": 229,
                  "id": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 222,
                    "name": "UnitSquare",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 123,
                      "end": 222,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 125,
                        "end": 222,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 135,
                            "end": 170,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 135,
                              "end": 138,
                              "name": "top",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 138,
                              "end": 169,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 140,
                                "end": 169,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 142,
                                    "end": 154,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 142,
                                      "end": 146,
                                      "name": "left",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 146,
                                      "end": 153,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 148,
                                        "end": 153,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 148,
                                          "end": 153,
                                          "name": "Point",
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
                                    "start": 155,
                                    "end": 167,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 155,
                                      "end": 160,
                                      "name": "right",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 160,
                                      "end": 167,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 162,
                                        "end": 167,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 162,
                                          "end": 167,
                                          "name": "Point",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  }
                                ]
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 179,
                            "end": 216,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 179,
                              "end": 185,
                              "name": "bottom",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 185,
                              "end": 216,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 187,
                                "end": 216,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 189,
                                    "end": 201,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 189,
                                      "end": 193,
                                      "name": "left",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 193,
                                      "end": 200,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 195,
                                        "end": 200,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 195,
                                          "end": 200,
                                          "name": "Point",
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
                                    "start": 202,
                                    "end": 214,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 202,
                                      "end": 207,
                                      "name": "right",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 207,
                                      "end": 214,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 209,
                                        "end": 214,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 209,
                                          "end": 214,
                                          "name": "Point",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  }
                                ]
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
                  "init": {
                    "type": "Literal",
                    "start": 225,
                    "end": 229,
                    "value": null,
                    "raw": "null"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
