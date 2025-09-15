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
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 37
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 48,
                      "end": 49
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 51,
                        "end": 57
                      },
                      "start": 49,
                      "end": 57
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
                    "start": 48,
                    "end": 58
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 67,
                      "end": 68
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 70,
                        "end": 76
                      },
                      "start": 68,
                      "end": 76
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
                    "start": 67,
                    "end": 77
                  }
                ],
                "start": 38,
                "end": 83
              },
              "abstract": false,
              "declare": false,
              "start": 26,
              "end": 83
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 83
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Line",
                "optional": false,
                "typeAnnotation": null,
                "start": 102,
                "end": 106
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
                      "start": 117,
                      "end": 128
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
                            "name": "start",
                            "optional": false,
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
                                  "start": 143,
                                  "end": 148
                                },
                                "typeArguments": null,
                                "start": 143,
                                "end": 148
                              },
                              "start": 141,
                              "end": 148
                            },
                            "start": 136,
                            "end": 148
                          },
                          "readonly": false,
                          "static": false,
                          "start": 129,
                          "end": 148
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "end",
                            "optional": false,
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
                            "start": 157,
                            "end": 167
                          },
                          "readonly": false,
                          "static": false,
                          "start": 150,
                          "end": 167
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 169,
                        "end": 172
                      },
                      "expression": false,
                      "start": 128,
                      "end": 172
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 117,
                    "end": 172
                  }
                ],
                "start": 107,
                "end": 178
              },
              "abstract": false,
              "declare": false,
              "start": 96,
              "end": 178
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 89,
            "end": 178
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "fromOrigin",
                "optional": false,
                "typeAnnotation": null,
                "start": 200,
                "end": 210
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
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
                        "start": 214,
                        "end": 219
                      },
                      "typeArguments": null,
                      "start": 214,
                      "end": 219
                    },
                    "start": 212,
                    "end": 219
                  },
                  "start": 211,
                  "end": 219
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Line",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 222,
                    "end": 226
                  },
                  "typeArguments": null,
                  "start": 222,
                  "end": 226
                },
                "start": 220,
                "end": 226
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Line",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 248,
                        "end": 252
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
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
                                "start": 255,
                                "end": 256
                              },
                              "value": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 258,
                                "end": 259
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 255,
                              "end": 259
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
                                "start": 261,
                                "end": 262
                              },
                              "value": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 264,
                                "end": 265
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 261,
                              "end": 265
                            }
                          ],
                          "start": 253,
                          "end": 267
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 269,
                          "end": 270
                        }
                      ],
                      "start": 244,
                      "end": 271
                    },
                    "start": 237,
                    "end": 272
                  }
                ],
                "start": 227,
                "end": 278
              },
              "expression": false,
              "start": 191,
              "end": 278
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 184,
            "end": 278
          }
        ],
        "start": 12,
        "end": 280
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 280
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 280
}
```
