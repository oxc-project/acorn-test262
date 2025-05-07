__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 400,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 400,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 400,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 102,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 23,
              "end": 102,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 35,
                "end": 102,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 45,
                    "end": 96,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 56,
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
                      "start": 56,
                      "end": 96,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 93,
                        "end": 96,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 57,
                          "end": 73,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 64,
                            "end": 73,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 65,
                              "end": 73,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 67,
                                "end": 73
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 75,
                          "end": 91,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 82,
                            "end": 91,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 83,
                              "end": 91,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 85,
                                "end": 91
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
                "start": 29,
                "end": 34,
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
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 108,
            "end": 398,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 115,
              "end": 398,
              "body": {
                "type": "TSModuleBlock",
                "start": 124,
                "end": 398,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 134,
                    "end": 177,
                    "attributes": [],
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 141,
                      "end": 177,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 145,
                          "end": 176,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 145,
                            "end": 158,
                            "decorators": [],
                            "name": "Origin",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 151,
                              "end": 158,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 153,
                                "end": 158,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 153,
                                  "end": 158,
                                  "decorators": [],
                                  "name": "Point",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          "init": {
                            "type": "NewExpression",
                            "start": 161,
                            "end": 176,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 171,
                                "end": 172,
                                "raw": "0",
                                "value": 0,
                                "regex": null,
                                "bigint": null
                              },
                              {
                                "type": "Literal",
                                "start": 174,
                                "end": 175,
                                "raw": "0",
                                "value": 0,
                                "regex": null,
                                "bigint": null
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 165,
                              "end": 170,
                              "decorators": [],
                              "name": "Point",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var"
                    },
                    "exportKind": "value",
                    "source": null,
                    "specifiers": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 187,
                    "end": 392,
                    "attributes": [],
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 194,
                      "end": 392,
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "start": 205,
                        "end": 392,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 219,
                            "end": 273,
                            "accessibility": null,
                            "computed": false,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "start": 219,
                              "end": 230,
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
                              "start": 230,
                              "end": 273,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 257,
                                "end": 273,
                                "body": []
                              },
                              "declare": false,
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 231,
                                  "end": 243,
                                  "decorators": [],
                                  "name": "start",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 236,
                                    "end": 243,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 238,
                                      "end": 243,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 238,
                                        "end": 243,
                                        "decorators": [],
                                        "name": "Point",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "start": 245,
                                  "end": 255,
                                  "decorators": [],
                                  "name": "end",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 248,
                                    "end": 255,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 250,
                                      "end": 255,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 250,
                                        "end": 255,
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
                          },
                          {
                            "type": "MethodDefinition",
                            "start": 287,
                            "end": 382,
                            "accessibility": null,
                            "computed": false,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "start": 294,
                              "end": 304,
                              "decorators": [],
                              "name": "fromOrigin",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "method",
                            "optional": false,
                            "override": false,
                            "static": true,
                            "value": {
                              "type": "FunctionExpression",
                              "start": 304,
                              "end": 382,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 315,
                                "end": 382,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 333,
                                    "end": 368,
                                    "argument": {
                                      "type": "NewExpression",
                                      "start": 340,
                                      "end": 367,
                                      "arguments": [
                                        {
                                          "type": "ObjectExpression",
                                          "start": 349,
                                          "end": 363,
                                          "properties": [
                                            {
                                              "type": "Property",
                                              "start": 351,
                                              "end": 355,
                                              "computed": false,
                                              "key": {
                                                "type": "Identifier",
                                                "start": 351,
                                                "end": 352,
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
                                                "start": 354,
                                                "end": 355,
                                                "raw": "0",
                                                "value": 0,
                                                "regex": null,
                                                "bigint": null
                                              }
                                            },
                                            {
                                              "type": "Property",
                                              "start": 357,
                                              "end": 361,
                                              "computed": false,
                                              "key": {
                                                "type": "Identifier",
                                                "start": 357,
                                                "end": 358,
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
                                                "start": 360,
                                                "end": 361,
                                                "raw": "0",
                                                "value": 0,
                                                "regex": null,
                                                "bigint": null
                                              }
                                            }
                                          ]
                                        },
                                        {
                                          "type": "Identifier",
                                          "start": 365,
                                          "end": 366,
                                          "decorators": [],
                                          "name": "p",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      ],
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 344,
                                        "end": 348,
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
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 305,
                                  "end": 313,
                                  "decorators": [],
                                  "name": "p",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 306,
                                    "end": 313,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 308,
                                      "end": 313,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 308,
                                        "end": 313,
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
                        "start": 200,
                        "end": 204,
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
                  }
                ]
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "start": 122,
                "end": 123,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "module"
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
