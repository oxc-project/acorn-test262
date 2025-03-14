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
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 277,
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
            "type": "ExportNamedDeclaration",
            "start": 86,
            "end": 175,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 93,
              "end": 175,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 104,
                "end": 175,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 114,
                    "end": 169,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 114,
                      "end": 125,
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
                      "start": 125,
                      "end": 169,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 166,
                        "end": 169,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
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
                            "decorators": [],
                            "name": "start",
                            "optional": false,
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
                          "start": 147,
                          "end": 164,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 154,
                            "end": 164,
                            "decorators": [],
                            "name": "end",
                            "optional": false,
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
                "start": 99,
                "end": 103,
                "decorators": [],
                "name": "Line",
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
            "type": "ExportNamedDeclaration",
            "start": 181,
            "end": 275,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 188,
              "end": 275,
              "async": false,
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
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 252,
                                "end": 253,
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
                                "start": 255,
                                "end": 256,
                                "raw": "0",
                                "value": 0
                              }
                            },
                            {
                              "type": "Property",
                              "start": 258,
                              "end": 262,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 258,
                                "end": 259,
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
                                "start": 261,
                                "end": 262,
                                "raw": "0",
                                "value": 0
                              }
                            }
                          ]
                        },
                        {
                          "type": "Identifier",
                          "start": 266,
                          "end": 267,
                          "decorators": [],
                          "name": "p",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 245,
                        "end": 249,
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
                "start": 197,
                "end": 207,
                "decorators": [],
                "name": "fromOrigin",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 208,
                  "end": 216,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
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
  "sourceType": "script",
  "hashbang": null
}
```
