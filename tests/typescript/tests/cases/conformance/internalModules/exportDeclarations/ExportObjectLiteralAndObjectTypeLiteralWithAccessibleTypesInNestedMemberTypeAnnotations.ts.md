__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 27
            },
            "typeParameters": null,
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
                    "start": 38,
                    "end": 49
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
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 60,
                              "end": 66
                            },
                            "start": 58,
                            "end": 66
                          },
                          "start": 57,
                          "end": 66
                        },
                        "readonly": false,
                        "static": false,
                        "start": 50,
                        "end": 66
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 78,
                              "end": 84
                            },
                            "start": 76,
                            "end": 84
                          },
                          "start": 75,
                          "end": 84
                        },
                        "readonly": false,
                        "static": false,
                        "start": 68,
                        "end": 84
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 86,
                      "end": 89
                    },
                    "expression": false,
                    "start": 49,
                    "end": 89
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 38,
                  "end": 89
                }
              ],
              "start": 28,
              "end": 95
            },
            "abstract": false,
            "declare": false,
            "start": 16,
            "end": 95
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "UnitSquare",
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
                              "name": "top",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 135,
                              "end": 138
                            },
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
                                      "name": "left",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 142,
                                      "end": 146
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Point",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 148,
                                          "end": 153
                                        },
                                        "typeArguments": null,
                                        "start": 148,
                                        "end": 153
                                      },
                                      "start": 146,
                                      "end": 153
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 142,
                                    "end": 154
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "right",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 155,
                                      "end": 160
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Point",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 162,
                                          "end": 167
                                        },
                                        "typeArguments": null,
                                        "start": 162,
                                        "end": 167
                                      },
                                      "start": 160,
                                      "end": 167
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 155,
                                    "end": 167
                                  }
                                ],
                                "start": 140,
                                "end": 169
                              },
                              "start": 138,
                              "end": 169
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 135,
                            "end": 170
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bottom",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 179,
                              "end": 185
                            },
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
                                      "name": "left",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 189,
                                      "end": 193
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Point",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 195,
                                          "end": 200
                                        },
                                        "typeArguments": null,
                                        "start": 195,
                                        "end": 200
                                      },
                                      "start": 193,
                                      "end": 200
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 189,
                                    "end": 201
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "right",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 202,
                                      "end": 207
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Point",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 209,
                                          "end": 214
                                        },
                                        "typeArguments": null,
                                        "start": 209,
                                        "end": 214
                                      },
                                      "start": 207,
                                      "end": 214
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 202,
                                    "end": 214
                                  }
                                ],
                                "start": 187,
                                "end": 216
                              },
                              "start": 185,
                              "end": 216
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 179,
                            "end": 216
                          }
                        ],
                        "start": 125,
                        "end": 222
                      },
                      "start": 123,
                      "end": 222
                    },
                    "start": 112,
                    "end": 222
                  },
                  "init": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 225,
                    "end": 229
                  },
                  "definite": false,
                  "start": 112,
                  "end": 229
                }
              ],
              "declare": false,
              "start": 108,
              "end": 230
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 101,
            "end": 230
          }
        ],
        "start": 9,
        "end": 232
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 232
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 232
}
```
