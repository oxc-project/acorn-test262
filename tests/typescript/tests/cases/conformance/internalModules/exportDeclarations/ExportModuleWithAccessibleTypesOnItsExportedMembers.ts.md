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
        "end": 400,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 102,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 23,
              "end": 102,
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
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 35,
                "end": 102,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 45,
                    "end": 96,
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
                    "value": {
                      "type": "FunctionExpression",
                      "start": 56,
                      "end": 96,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
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
                      "body": {
                        "type": "BlockStatement",
                        "start": 93,
                        "end": 96,
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
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 108,
            "end": 398,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 115,
              "end": 398,
              "id": {
                "type": "Identifier",
                "start": 122,
                "end": 123,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 124,
                "end": 398,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 134,
                    "end": 177,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 141,
                      "end": 177,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 145,
                          "end": 176,
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 153,
                                  "end": 158,
                                  "decorators": [],
                                  "name": "Point",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "init": {
                            "type": "NewExpression",
                            "start": 161,
                            "end": 176,
                            "callee": {
                              "type": "Identifier",
                              "start": 165,
                              "end": 170,
                              "decorators": [],
                              "name": "Point",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 171,
                                "end": 172,
                                "value": 0,
                                "raw": "0"
                              },
                              {
                                "type": "Literal",
                                "start": 174,
                                "end": 175,
                                "value": 0,
                                "raw": "0"
                              }
                            ]
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
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 187,
                    "end": 392,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 194,
                      "end": 392,
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
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 205,
                        "end": 392,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 219,
                            "end": 273,
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
                            "value": {
                              "type": "FunctionExpression",
                              "start": 230,
                              "end": 273,
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
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
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 238,
                                        "end": 243,
                                        "decorators": [],
                                        "name": "Point",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
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
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 250,
                                        "end": 255,
                                        "decorators": [],
                                        "name": "Point",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  }
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 257,
                                "end": 273,
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
                          },
                          {
                            "type": "MethodDefinition",
                            "start": 287,
                            "end": 382,
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
                            "value": {
                              "type": "FunctionExpression",
                              "start": 304,
                              "end": 382,
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
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
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 308,
                                        "end": 313,
                                        "decorators": [],
                                        "name": "Point",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  }
                                }
                              ],
                              "returnType": null,
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
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 344,
                                        "end": 348,
                                        "decorators": [],
                                        "name": "Line",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null,
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
                                              "kind": "init",
                                              "key": {
                                                "type": "Identifier",
                                                "start": 351,
                                                "end": 352,
                                                "decorators": [],
                                                "name": "x",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "value": {
                                                "type": "Literal",
                                                "start": 354,
                                                "end": 355,
                                                "value": 0,
                                                "raw": "0"
                                              },
                                              "method": false,
                                              "shorthand": false,
                                              "computed": false,
                                              "optional": false
                                            },
                                            {
                                              "type": "Property",
                                              "start": 357,
                                              "end": 361,
                                              "kind": "init",
                                              "key": {
                                                "type": "Identifier",
                                                "start": 357,
                                                "end": 358,
                                                "decorators": [],
                                                "name": "y",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "value": {
                                                "type": "Literal",
                                                "start": 360,
                                                "end": 361,
                                                "value": 0,
                                                "raw": "0"
                                              },
                                              "method": false,
                                              "shorthand": false,
                                              "computed": false,
                                              "optional": false
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
                                      ]
                                    }
                                  }
                                ]
                              },
                              "expression": false
                            },
                            "kind": "method",
                            "computed": false,
                            "static": true,
                            "override": false,
                            "optional": false,
                            "accessibility": null
                          }
                        ]
                      },
                      "abstract": false,
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
