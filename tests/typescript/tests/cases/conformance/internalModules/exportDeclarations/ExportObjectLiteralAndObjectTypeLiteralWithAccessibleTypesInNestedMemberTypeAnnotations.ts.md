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
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 27,
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 28,
              "end": 95,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 38,
                  "end": 89,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 49,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 49,
                    "end": 89,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
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
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 58,
                            "end": 66,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 60,
                              "end": 66
                            }
                          }
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
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 76,
                            "end": 84,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 78,
                              "end": 84
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 86,
                      "end": 89,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "constructor",
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
            "type": "ExportNamedDeclaration",
            "start": 101,
            "end": 230,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 108,
              "end": 230,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 112,
                  "end": 229,
                  "id": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 222,
                    "decorators": [],
                    "name": "UnitSquare",
                    "optional": false,
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
                              "decorators": [],
                              "name": "top",
                              "optional": false,
                              "typeAnnotation": null
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
                                      "decorators": [],
                                      "name": "left",
                                      "optional": false,
                                      "typeAnnotation": null
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
                                          "decorators": [],
                                          "name": "Point",
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
                                    "start": 155,
                                    "end": 167,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 155,
                                      "end": 160,
                                      "decorators": [],
                                      "name": "right",
                                      "optional": false,
                                      "typeAnnotation": null
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
                                          "decorators": [],
                                          "name": "Point",
                                          "optional": false,
                                          "typeAnnotation": null
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
                              "decorators": [],
                              "name": "bottom",
                              "optional": false,
                              "typeAnnotation": null
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
                                      "decorators": [],
                                      "name": "left",
                                      "optional": false,
                                      "typeAnnotation": null
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
                                          "decorators": [],
                                          "name": "Point",
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
                                    "start": 202,
                                    "end": 214,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 202,
                                      "end": 207,
                                      "decorators": [],
                                      "name": "right",
                                      "optional": false,
                                      "typeAnnotation": null
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
                                          "decorators": [],
                                          "name": "Point",
                                          "optional": false,
                                          "typeAnnotation": null
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
                    }
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
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
