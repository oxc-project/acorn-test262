ExportFunctionWithInaccessibleTypesInReturnTypeAnnotation.ts
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
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 80,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 23,
              "end": 80,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 35,
                "end": 80,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 45,
                    "end": 55,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 46,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
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
                    "value": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 64,
                    "end": 74,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 65,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
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
                    "value": null
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
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
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
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 118,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 133,
                                "end": 138,
                                "decorators": [],
                                "name": "Point",
                                "optional": false
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 152,
                                "end": 157,
                                "decorators": [],
                                "name": "Point",
                                "optional": false
                              }
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      }
                    ]
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
              "optional": false
            },
            "implements": [],
            "superClass": null
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
                                "optional": false
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
                                "optional": false
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
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 238,
                        "end": 242,
                        "decorators": [],
                        "name": "Line",
                        "optional": false
                      }
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
                "optional": false
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 204,
                        "end": 209,
                        "decorators": [],
                        "name": "Point",
                        "optional": false
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 216,
                    "decorators": [],
                    "name": "Line",
                    "optional": false
                  }
                }
              }
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
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
