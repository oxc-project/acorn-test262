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
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "end": 102,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 45,
                    "end": 96,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 56,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 56,
                      "end": 96,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
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
                            "name": "x",
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
                            "decorators": [],
                            "optional": false
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
                            "name": "y",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 83,
                              "end": 91,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 85,
                                "end": 91
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
                        "start": 93,
                        "end": 96,
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
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 145,
                          "end": 176,
                          "id": {
                            "type": "Identifier",
                            "start": 145,
                            "end": 158,
                            "name": "Origin",
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
                          "init": {
                            "type": "NewExpression",
                            "start": 161,
                            "end": 176,
                            "callee": {
                              "type": "Identifier",
                              "start": 165,
                              "end": 170,
                              "name": "Point",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
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
                            ],
                            "typeArguments": null
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
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 187,
                    "end": 392,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 194,
                      "end": 392,
                      "id": {
                        "type": "Identifier",
                        "start": 200,
                        "end": 204,
                        "name": "Line",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 205,
                        "end": 392,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 219,
                            "end": 273,
                            "static": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 219,
                              "end": 230,
                              "name": "constructor",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "constructor",
                            "value": {
                              "type": "FunctionExpression",
                              "start": 230,
                              "end": 273,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 231,
                                  "end": 243,
                                  "name": "start",
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
                                {
                                  "type": "Identifier",
                                  "start": 245,
                                  "end": 255,
                                  "name": "end",
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
                                "start": 257,
                                "end": 273,
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
                          },
                          {
                            "type": "MethodDefinition",
                            "start": 287,
                            "end": 382,
                            "static": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 294,
                              "end": 304,
                              "name": "fromOrigin",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "method",
                            "value": {
                              "type": "FunctionExpression",
                              "start": 304,
                              "end": 382,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 305,
                                  "end": 313,
                                  "name": "p",
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
                                        "name": "Line",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
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
                                              "method": false,
                                              "shorthand": false,
                                              "computed": false,
                                              "key": {
                                                "type": "Identifier",
                                                "start": 351,
                                                "end": 352,
                                                "name": "x",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "value": {
                                                "type": "Literal",
                                                "start": 354,
                                                "end": 355,
                                                "value": 0,
                                                "raw": "0"
                                              },
                                              "kind": "init",
                                              "optional": false
                                            },
                                            {
                                              "type": "Property",
                                              "start": 357,
                                              "end": 361,
                                              "method": false,
                                              "shorthand": false,
                                              "computed": false,
                                              "key": {
                                                "type": "Identifier",
                                                "start": 357,
                                                "end": 358,
                                                "name": "y",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "value": {
                                                "type": "Literal",
                                                "start": 360,
                                                "end": 361,
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
                                          "start": 365,
                                          "end": 366,
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
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
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
