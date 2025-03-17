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
        "end": 270,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 16,
            "end": 73,
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
              "end": 73,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 38,
                  "end": 48,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 39,
                    "name": "x",
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
                    "start": 39,
                    "end": 47,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 41,
                      "end": 47
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 57,
                  "end": 67,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 58,
                    "name": "y",
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
                    "start": 58,
                    "end": 66,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 60,
                      "end": 66
                    }
                  },
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
            "start": 79,
            "end": 168,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 86,
              "end": 168,
              "id": {
                "type": "Identifier",
                "start": 92,
                "end": 96,
                "name": "Line",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 97,
                "end": 168,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 107,
                    "end": 162,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 107,
                      "end": 118,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 118,
                      "end": 162,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
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
                            "name": "start",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 131,
                              "end": 138,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 133,
                                "end": 138,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 133,
                                  "end": 138,
                                  "name": "Point",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
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
                          "start": 140,
                          "end": 157,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 147,
                            "end": 157,
                            "name": "end",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 150,
                              "end": 157,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 152,
                                "end": 157,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 152,
                                  "end": 157,
                                  "name": "Point",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
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
                        "start": 159,
                        "end": 162,
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 174,
            "end": 268,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 181,
              "end": 268,
              "id": {
                "type": "Identifier",
                "start": 190,
                "end": 200,
                "name": "fromOrigin",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 201,
                  "end": 209,
                  "name": "p",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 202,
                    "end": 209,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 204,
                      "end": 209,
                      "typeName": {
                        "type": "Identifier",
                        "start": 204,
                        "end": 209,
                        "name": "Point",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "callee": {
                        "type": "Identifier",
                        "start": 238,
                        "end": 242,
                        "name": "Line",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 245,
                                "end": 246,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 248,
                                "end": 249,
                                "value": 0,
                                "raw": "0"
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 251,
                              "end": 255,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 251,
                                "end": 252,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 254,
                                "end": 255,
                                "value": 0,
                                "raw": "0"
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        },
                        {
                          "type": "Identifier",
                          "start": 259,
                          "end": 260,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 210,
                "end": 216,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 212,
                  "end": 216,
                  "typeName": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 216,
                    "name": "Line",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
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
