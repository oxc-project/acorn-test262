__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 277,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 277,
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
        "end": 277,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 80,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 23,
              "end": 80,
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 34,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 35,
                "end": 80,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 45,
                    "end": 55,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 46,
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
                      "start": 46,
                      "end": 54,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 48,
                        "end": 54
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 64,
                    "end": 74,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 65,
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
                      "start": 65,
                      "end": 73,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 67,
                        "end": 73
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 86,
            "end": 175,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 93,
              "end": 175,
              "id": {
                "type": "Identifier",
                "start": 99,
                "end": 103,
                "name": "Line",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 104,
                "end": 175,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 114,
                    "end": 169,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 114,
                      "end": 125,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 125,
                      "end": 169,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 126,
                          "end": 145,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 133,
                            "end": 145,
                            "name": "start",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 138,
                              "end": 145,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 140,
                                "end": 145,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 140,
                                  "end": 145,
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
                          "start": 147,
                          "end": 164,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 154,
                            "end": 164,
                            "name": "end",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 157,
                              "end": 164,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 159,
                                "end": 164,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 159,
                                  "end": 164,
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
                        "start": 166,
                        "end": 169,
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
            "start": 181,
            "end": 275,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 188,
              "end": 275,
              "id": {
                "type": "Identifier",
                "start": 197,
                "end": 207,
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
                  "start": 208,
                  "end": 216,
                  "name": "p",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 209,
                    "end": 216,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 211,
                      "end": 216,
                      "typeName": {
                        "type": "Identifier",
                        "start": 211,
                        "end": 216,
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
                "start": 224,
                "end": 275,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 234,
                    "end": 269,
                    "argument": {
                      "type": "NewExpression",
                      "start": 241,
                      "end": 268,
                      "callee": {
                        "type": "Identifier",
                        "start": 245,
                        "end": 249,
                        "name": "Line",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ObjectExpression",
                          "start": 250,
                          "end": 264,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 252,
                              "end": 256,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 252,
                                "end": 253,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 255,
                                "end": 256,
                                "value": 0,
                                "raw": "0"
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 258,
                              "end": 262,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 258,
                                "end": 259,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 261,
                                "end": 262,
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
                          "start": 266,
                          "end": 267,
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
                "start": 217,
                "end": 223,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 219,
                  "end": 223,
                  "typeName": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 223,
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
