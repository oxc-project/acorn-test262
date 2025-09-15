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
        "start": 10,
        "end": 11
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
              "start": 25,
              "end": 30
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
                    "start": 41,
                    "end": 52
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
                              "start": 63,
                              "end": 69
                            },
                            "start": 61,
                            "end": 69
                          },
                          "start": 60,
                          "end": 69
                        },
                        "readonly": false,
                        "static": false,
                        "start": 53,
                        "end": 69
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
                              "start": 81,
                              "end": 87
                            },
                            "start": 79,
                            "end": 87
                          },
                          "start": 78,
                          "end": 87
                        },
                        "readonly": false,
                        "static": false,
                        "start": 71,
                        "end": 87
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 89,
                      "end": 92
                    },
                    "expression": false,
                    "start": 52,
                    "end": 92
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 41,
                  "end": 92
                }
              ],
              "start": 31,
              "end": 98
            },
            "abstract": false,
            "declare": false,
            "start": 19,
            "end": 98
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
                              "start": 138,
                              "end": 141
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
                                      "start": 145,
                                      "end": 149
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
                                          "start": 151,
                                          "end": 156
                                        },
                                        "typeArguments": null,
                                        "start": 151,
                                        "end": 156
                                      },
                                      "start": 149,
                                      "end": 156
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 145,
                                    "end": 157
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
                                      "start": 158,
                                      "end": 163
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
                                          "start": 165,
                                          "end": 170
                                        },
                                        "typeArguments": null,
                                        "start": 165,
                                        "end": 170
                                      },
                                      "start": 163,
                                      "end": 170
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 158,
                                    "end": 170
                                  }
                                ],
                                "start": 143,
                                "end": 172
                              },
                              "start": 141,
                              "end": 172
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 138,
                            "end": 173
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
                              "start": 182,
                              "end": 188
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
                                      "start": 192,
                                      "end": 196
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
                                          "start": 198,
                                          "end": 203
                                        },
                                        "typeArguments": null,
                                        "start": 198,
                                        "end": 203
                                      },
                                      "start": 196,
                                      "end": 203
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 192,
                                    "end": 204
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
                                      "start": 205,
                                      "end": 210
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
                                          "start": 212,
                                          "end": 217
                                        },
                                        "typeArguments": null,
                                        "start": 212,
                                        "end": 217
                                      },
                                      "start": 210,
                                      "end": 217
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 205,
                                    "end": 217
                                  }
                                ],
                                "start": 190,
                                "end": 219
                              },
                              "start": 188,
                              "end": 219
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 182,
                            "end": 219
                          }
                        ],
                        "start": 128,
                        "end": 225
                      },
                      "start": 126,
                      "end": 225
                    },
                    "start": 115,
                    "end": 225
                  },
                  "init": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 228,
                    "end": 232
                  },
                  "definite": false,
                  "start": 115,
                  "end": 232
                }
              ],
              "declare": false,
              "start": 111,
              "end": 233
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 104,
            "end": 233
          }
        ],
        "start": 12,
        "end": 235
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 235
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 235
}
```
