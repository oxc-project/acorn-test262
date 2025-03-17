__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 270,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 270,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 270,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 16,
            "end": 73,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 28,
              "end": 73,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 38,
                  "end": 48,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 39,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 39,
                    "end": 47,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 41,
                      "end": 47
                    }
                  },
                  "value": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 57,
                  "end": 67,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 58,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
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
                  "value": null
                }
              ]
            },
            "declare": false,
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
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 79,
            "end": 168,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 86,
              "end": 168,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 97,
                "end": 168,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 107,
                    "end": 162,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 107,
                      "end": 118,
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
                      "start": 118,
                      "end": 162,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 159,
                        "end": 162,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 119,
                          "end": 138,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 126,
                            "end": 138,
                            "decorators": [],
                            "name": "start",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 131,
                              "end": 138,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 133,
                                "end": 138,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 133,
                                  "end": 138,
                                  "decorators": [],
                                  "name": "Point",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 140,
                          "end": 157,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 147,
                            "end": 157,
                            "decorators": [],
                            "name": "end",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 150,
                              "end": 157,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 152,
                                "end": 157,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 152,
                                  "end": 157,
                                  "decorators": [],
                                  "name": "Point",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
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
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 92,
                "end": 96,
                "decorators": [],
                "name": "Line",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 174,
            "end": 268,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 181,
              "end": 268,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 217,
                "end": 268,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 227,
                    "end": 262,
                    "argument": {
                      "type": "NewExpression",
                      "start": 234,
                      "end": 261,
                      "arguments": [
                        {
                          "type": "ObjectExpression",
                          "start": 243,
                          "end": 257,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 245,
                              "end": 249,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 245,
                                "end": 246,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 248,
                                "end": 249,
                                "raw": "0",
                                "value": 0
                              }
                            },
                            {
                              "type": "Property",
                              "start": 251,
                              "end": 255,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 251,
                                "end": 252,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 254,
                                "end": 255,
                                "raw": "0",
                                "value": 0
                              }
                            }
                          ]
                        },
                        {
                          "type": "Identifier",
                          "start": 259,
                          "end": 260,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 238,
                        "end": 242,
                        "decorators": [],
                        "name": "Line",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 190,
                "end": 200,
                "decorators": [],
                "name": "fromOrigin",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 201,
                  "end": 209,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 202,
                    "end": 209,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 204,
                      "end": 209,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 204,
                        "end": 209,
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 210,
                "end": 216,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 212,
                  "end": 216,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 216,
                    "decorators": [],
                    "name": "Line",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
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
